import React from 'react';

import { TStory } from '../../types';
import * as S from './styles';

const Story: React.FC<{ story: TStory; }> = ({ story }) => {
	return (
		<S.Story>
			<div className="story__circle gradient-background">
				<img
					src={ story.image }
					alt={ story.id + '-story-user' }
					className="story__image"
				/>
			</div>

			<span className="story__name">
				{ story.name }
			</span>
		</S.Story>
	);
}

export default Story;
