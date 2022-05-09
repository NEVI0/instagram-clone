import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import { Header, StoriesList } from '../components';
import useAppContext from '../context/AppContext';

import * as S from './styles';

const Home: NextPage = () => {

	const { theme } = useAppContext();

	return (
		<ThemeProvider theme={ theme }>
			<S.Layout>
				<Header />
				
				<S.Container>
					<div className="container__column container__column-1">
						<StoriesList />
					</div>

					<div className="container__column container__column-2">

					</div>
				</S.Container>
			</S.Layout>
		</ThemeProvider>
	);

}
	
export default Home;
	