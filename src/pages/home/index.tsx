import type { NextPage } from 'next';
import Head from 'next/head';

import { Post, Story, SuggestionUser, RefreshContent } from '../../components';
import * as S from './styles';

import { STORIES } from '../../mocks/stories';
import { POSTS } from '../../mocks/posts';

const Home: NextPage = () => {
	return (
		<S.Container className="wrapper margin-header">
			<Head>
				<title>Instagram Clone + Next.js</title>
			</Head>

			<RefreshContent />

			<div className="column col1">
				<div className="stories">
					{
						STORIES.map(story => (
							<Story key={ story.id.toString() } story={ story } />
						))
					}
				</div>

				{
					POSTS.map(post => (
						<Post key={ post.id.toString() } post={ post } />
					))
				}
			</div>

			<div className="column col2">
				<div className="column__data">
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

						{
							new Array(5).fill(0).map((_, index) => (
								<SuggestionUser key={ index.toString() } />
							))
						}
					</div>

					<div className="instagram__data">
						<div className="links">
							About &#9642;
							Help &#9642;
							Press &#9642;
							API &#9642;
							Jobs &#9642;
							Privacy &#9642;
							Terms &#9642;
							Locations &#9642;
							Top &#9642; 
							Accounts &#9642;
							Hashtags &#9642;
							Language &#9642; 
							English
						</div>

						<p className="copyright">
							&copy; 2022 INSTAGRAM FROM META
						</p>
					</div>
				</div>
			</div>
		</S.Container>
	);
}
	
export default Home;
	