import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'

// NextJS takes the latest defined <title/> so the one defined here is more like default.
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<title>Events</title>
				<meta
					name="description"
					content="Events Project built with NextJS"
				/>
				<meta
					name="viewport"
					content="inital-scale=1.0, width=device-width"
				/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
