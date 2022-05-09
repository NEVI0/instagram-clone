import type { AppProps } from 'next/app'
import { AppProvider } from '../context/AppContext';

import { Header } from '../components';

import { GlobalStyles } from '../styles/global';
import { Layout } from './styles';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<AppProvider>
			<GlobalStyles />

			<Layout>
				<Header />
				
				<Component { ...pageProps } />
			</Layout>
		</AppProvider>
	);
}

export default App;
