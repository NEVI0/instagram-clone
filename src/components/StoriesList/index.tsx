import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import * as S from './styles';

interface StoriesListProps {}

const StoriesList: React.FC<StoriesListProps> = ({}) => {
	return (
		<S.StoriesList>
			{/* <button className="stories__button stories__button-left">
				<FiChevronLeft className="stories__button-icon" />
			</button>

			<button className="stories__button stories__button-right">
				<FiChevronRight className="stories__button-icon" />
			</button> */}

			{
				new Array(5).fill(0).map((_, index) => (
					<div key={ index.toString() } className="story">
						<div className="story__circle">
							<img
								src="https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg"
								alt="story-user"
								className="story__image"
							/>
						</div>

						<span className="story__name">
							nevio_costa
						</span>
					</div>
				))
			}
		</S.StoriesList>
	);
}

export default StoriesList;
