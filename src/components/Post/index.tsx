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

			</div>

			<div className="post__comments">

			</div>

			<div className="post__add__comment">
				<FiSmile />

				<input type="text" />

				<button>
					Post
				</button>
			</div>
		</S.Post>
	);
}

export default Post;
