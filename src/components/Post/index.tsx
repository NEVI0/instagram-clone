import React from 'react';
import { FiMoreHorizontal, FiHeart, FiMessageCircle, FiSend, FiBookmark, FiSmile } from 'react-icons/fi';

import { TPost } from '../../types';
import * as S from './styles';

const Post: React.FC<{ post: TPost; }> = ({ post }) => {
	return (
		<S.Post>
			<div className="post__header">
				<div className="user">
					<div className="story__circle">
						<img
							src={ post.user.image }
							alt={ post.user.name + '-image' }
							className="story__image"
						/>
					</div>

					<span className="user__name">
						{ post.user.name }
					</span>
				</div>

				<FiMoreHorizontal className="post__header__options" />
			</div>

			<div className="post__content">
				<img
					src={ post.posts[0].image }
					alt={ post.posts[0].id + '-post-image' }
					className="post__image"
				/>
			</div>

			<div className="post__actions">
				<div className="post__actions-main">
					<FiHeart className="action__button" />
					<FiMessageCircle className="action__button" />
					<FiSend className="action__button" />
				</div>

				<FiBookmark className="action__button" />
			</div>

			<div className="post__data">
				<span className="post__info">
					Liked by <strong>w4gn3r2038</strong> and <strong>others</strong>
				</span>

				<span className="post__info">
					<strong className="by">{ post.user.name }</strong> { post.title }
				</span>

				<a className="post__info view__comments">View all 10 comments</a>
			</div>

			<div className="post__add__comment">
				<FiSmile className="smile__icon" />

				<input
					type="text"
					placeholder="Add a comment..."
					className="add__comment__input"
				/>

				<a className="add__comment__button">
					Post
				</a>
			</div>
		</S.Post>
	);
}

export default Post;
