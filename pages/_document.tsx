import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
    DocumentInitialProps,
} from 'next/document'
import { FeatureBoardClient } from '@featureboard/js-sdk'
import { FeatureBoardService, ServerConnection } from '@featureboard/node-sdk'
import { FeatureBoardProvider } from '@featureboard/react-sdk'
import { AppType } from 'next/dist/shared/lib/utils'
import React from 'react'

let serverConnection: Promise<ServerConnection>

type DocumentProps = DocumentInitialProps & {
    featureboardState: ReturnType<FeatureBoardClient['getEffectiveValues']>
}

class MyDocument extends Document<DocumentProps> {
    /**
     * Take the feature state for the current request
     * from the featureboard client
     * (as generated in getInitialProps)
     * and assign them to __NEXT_DATA__ so that they
     * are accessible to the client for rehydration.
     */
    constructor(props: any) {
        super(props)

        const { featureboardState, __NEXT_DATA__ } = props

        __NEXT_DATA__.featureboardState = featureboardState
    }

    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage

        if (!serverConnection) {
            if (!process.env.NEXT_PUBLIC_FEATUREBOARD_ENV_KEY) {
                throw new Error('NEXT_PUBLIC_FEATUREBOARD_ENV_KEY missing')
            }
            serverConnection = FeatureBoardService.init(
                process.env.NEXT_PUBLIC_FEATUREBOARD_ENV_KEY,
                {
                    updateStrategy: 'on-request',
                    // FeatureBoard sample environment
                    api: {
                        ws: 'wss://client-ws.featureboard.dev',
                        http: 'https://client.featureboard.dev',
                    },
                },
            )
        }

        const requestClient = await (await serverConnection).request([])

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => {
                    return (
                        appCtx: React.ComponentPropsWithoutRef<AppType>,
                    ) => {
                        return (
                            <FeatureBoardProvider client={requestClient}>
                                <App {...appCtx} />
                            </FeatureBoardProvider>
                        )
                    }
                },
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return {
            featureboardState: requestClient.getEffectiveValues(),
            ...initialProps,
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="loading">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
