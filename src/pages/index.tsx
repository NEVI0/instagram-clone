import type { NextPage } from 'next';

import { StoriesList } from '../components';
import * as S from './styles';

const Home: NextPage = () => {
	return (
		<S.Container>
			<div className="container__column container__column-1">
				<StoriesList />
			</div>

			<div className="container__column container__column-2">

			</div>
		</S.Container>
	);
}
	
export default Home;
	