import { useEffect } from 'react'
import 'assets/main.css'
import 'assets/chrome-bug.css'
import React from 'react'

import Layout from 'components/Layout'
import { UserContextProvider } from 'utils/useUser'
import { AppProps } from 'next/app'
import { FeatureBoardClient, FeatureBoardService } from '@featureboard/js-sdk'
import { FeatureBoardProvider } from '@featureboard/react-sdk'

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.body.classList?.remove('loading')
    }, [])

    return (
        <div className="bg-primary">
            <HydrateFeatureBoardClientProvider>
                <UserContextProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </UserContextProvider>
            </HydrateFeatureBoardClientProvider>
        </div>
    )
}

function HydrateFeatureBoardClientProvider({
    children,
}: {
    children: React.ReactNode
}) {
    if (typeof window !== 'undefined') {
        const featureState: ReturnType<
            FeatureBoardClient['getEffectiveValues']
        > = (window.__NEXT_DATA__ as any).featureboardState

        return (
            <FeatureBoardProvider
                client={FeatureBoardService.initStatic(
                    featureState.audiences,
                    featureState.effectiveValues,
                )}
            >
                {children}
            </FeatureBoardProvider>
        )
    }

    return <>{children}</>
}
