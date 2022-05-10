import type { NextPage } from 'next';

import { Post, Story } from '../components';
import * as S from './styles';

import { STORIES } from '../mocks/stories';
import { POSTS } from '../mocks/posts';

const Home: NextPage = () => {
	return (
		<S.Container>
			<div className="container__column container__column-1">
				<div className="stories">
					{
						STORIES.map(story => (
							<Story key={ story.id.toString() } story={ story } />
						))
					}
				</div>

				<div className="posts">
					{
						POSTS.map(post => (
							<Post post={ post } />
						))
					}
				</div>
			</div>

			<div className="container__column container__column-2">

			</div>
		</S.Container>
	);
}
	
export default Home;
	