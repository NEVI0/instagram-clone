import type { AppProps } from 'next/app'
import styled from 'styled-components';

import { GlobalStyles } from '../styles/global';
import { AppProvider } from '../context/AppContext';
import { Header } from '../components';

export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${props => props.theme.colors.body};
`;

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
