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
				<div className="user">
					<div className="user__data">
						<img
							src="/images/user.jpg"
							alt="user-image"
							className="user__image"
						/>

						<div className="user__description">
							<span className="user__tag">nevio_costa</span>
							<span className="user__name">Nevio Costa</span>
						</div>
					</div>

					<a className="switch__account">
						Switch
					</a>
				</div>
			</div>
		</S.Container>
	);
}
	
export default Home;
	