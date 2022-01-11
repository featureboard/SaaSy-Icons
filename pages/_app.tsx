import {
    EffectiveFeatureState,
    FeatureBoardClient,
    FeatureBoardService,
    MemoryEffectiveFeatureStore,
} from '@featureboard/js-sdk'
import { FeatureBoardProvider, useClient } from '@featureboard/react-sdk'
import 'assets/chrome-bug.css'
import 'assets/main.css'
import Layout from 'components/Layout'
import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { UserContextProvider, useUser } from 'utils/useUser'

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.body.classList?.remove('loading')
    }, [])

    return (
        <div className="bg-primary">
            <UserContextProvider>
                <HydrateFeatureBoardClientProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </HydrateFeatureBoardClientProvider>
            </UserContextProvider>
        </div>
    )
}

function HydrateFeatureBoardClientProvider({
    children,
}: {
    children: React.ReactNode
}) {
    if (typeof window !== 'undefined') {
        return (
            <ClientFeatureBoardProvider>{children}</ClientFeatureBoardProvider>
        )
    }

    return <>{children}</>
}
function ClientFeatureBoardProvider({ children }: React.PropsWithChildren<{}>) {
    const user = useUser()
    // TODO init the client SDK with server feature state so no flash during hydration
    const featureState: ReturnType<FeatureBoardClient['getEffectiveValues']> = (
        window.__NEXT_DATA__ as any
    ).featureboardState

    const audiences = user.user ? ['state-logged-in'] : []
    const client = useClient({
        apiKey: process.env.NEXT_PUBLIC_FEATUREBOARD_ENV_KEY!,
        // Once the user is logged in, set the `state-logged-in` audience
        audiences,
        // FeatureBoard sample environment
        api: {
            ws: 'wss://client-ws.featureboard.dev',
            http: 'https://client.featureboard.dev',
        },
        store: new MemoryEffectiveFeatureStore(featureState.effectiveValues),
    })

    return (
        <FeatureBoardProvider
            client={
                client.client ||
                FeatureBoardService.initStatic(
                    featureState.audiences,
                    featureState.effectiveValues,
                )
            }
        >
            {children}
        </FeatureBoardProvider>
    )
}
