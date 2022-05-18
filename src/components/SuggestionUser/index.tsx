import React from 'react';
import * as S from './styles';

const SuggestionUser: React.FC = ({}) => {
	return (
		<S.SuggestionUser>
			<img
				src="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg"
				alt="suggestion-user"
				className="user__image"
			/>

			<div className="user__data">
				<p className="user__name">user_guest</p>
				<p className="user__followers">Followed by _us03 + 14 more</p>
			</div>

			<a className="follow__button">
				Follow
			</a>
		</S.SuggestionUser>
	);
}

export default SuggestionUser;
