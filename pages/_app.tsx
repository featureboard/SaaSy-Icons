import {
    FeatureBoardClient,
    MemoryEffectiveFeatureStore,
    createBrowserClient,
} from '@featureboard/js-sdk'
import { FeatureBoardProvider } from '@featureboard/react-sdk'
import 'assets/chrome-bug.css'
import 'assets/main.css'
import Layout from 'components/Layout'
import { AppProps } from 'next/app'
import React, { useEffect, useMemo, useRef, useState } from 'react'
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
    const audiences = useMemo(
        () => (user.user ? ['state-logged-in'] : []),
        [user.user],
    )

    const [client] = useState(() => {
        const featureState: ReturnType<
            FeatureBoardClient['getEffectiveValues']
        > = (window.__NEXT_DATA__ as any).featureboardState

        return createBrowserClient({
            environmentApiKey: process.env.NEXT_PUBLIC_FEATUREBOARD_ENV_KEY!,
            // Once the user is logged in, set the `state-logged-in` audience
            audiences,
            // FeatureBoard sample environment
            api: {
                ws: 'wss://client-ws.featureboard.dev',
                http: 'https://client.featureboard.dev',
            },
            store: new MemoryEffectiveFeatureStore(
                featureState.effectiveValues,
            ),
        })
    })

    useDidUpdateEffect(() => {
        client.updateAudiences(audiences)
    }, [audiences])

    return (
        <FeatureBoardProvider client={client.client}>
            {children}
        </FeatureBoardProvider>
    )
}

function useDidUpdateEffect(
    effect: React.EffectCallback,
    deps?: React.DependencyList,
) {
    const didMountRef = useRef(false)

    useEffect(() => {
        if (didMountRef.current) {
            return effect()
        }
        didMountRef.current = true
    }, deps)
}
