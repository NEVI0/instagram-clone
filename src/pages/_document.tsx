import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html lang='en'>
			<Head>
				<meta charSet="utf-8" />
				<link rel="shortcut icon" href="/images/favicon.png" />

				<title>Instagram Clone | Next.js</title>
			</Head>
			<body className="theme-light">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
	
export default Document;
