export default function App({ Component, pageProps }) {
	Component?.initState?.(pageProps.data)
	return <Component {...pageProps} />
}
