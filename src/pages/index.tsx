import Head from 'next/head';
import type { NextPage } from 'next';

import { Post, Story, SuggestionUser } from '../components';
import * as S from './styles';

import { STORIES } from '../mocks/stories';
import { POSTS } from '../mocks/posts';

const Home: NextPage = () => {
	return (
		<S.Container>
			<Head>
				<title>Instagram Clone</title>
			</Head>

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
				<div className="container__data">
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

					<div className="suggestions">
						<div className="suggestions__header">
							<h3 className="suggestion__title">
								Suggestions For You
							</h3>

							<a className="see__all">
								See All
							</a>
						</div>

						<div className="suggestion__list">
							{
								new Array(5).fill(0).map((_, index) => (
									<SuggestionUser key={ index.toString() } />
								))
							}
						</div>
					</div>
				</div>
			</div>
		</S.Container>
	);
}
	
export default Home;
	