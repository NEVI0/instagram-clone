import { TPost } from '../types';

export const POSTS: Array<TPost> = [
	{
		id: 1,
		createdAt: new Date(),
		user: {
			name: 'dim_san12',
			image: 'https://www.urologicomogi.com.br/wp-content/uploads/2019/02/person1.jpg',
			activeStoryId: 1
		},
		posts: [
			{
				id: 1,
				image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
			}
		],
		comments: [
			{
				by: 'robert_617',
				comment: 'Nice photo man!'
			}
		]
	},
	{
		id: 2,
		createdAt: new Date(),
		user: {
			name: 'ferdinanda',
			image: 'https://barco.art.br/wp-content/uploads/2018/08/domingas-person-premiaccca7occ83es-2018-150x150.png',
			activeStoryId: 0
		},
		posts: [
			{
				id: 1,
				image: 'https://images.pexels.com/photos/1699030/pexels-photo-1699030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
			},
			{
				id: 2,
				image: 'https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
			}
		],
		comments: []
	}
];
