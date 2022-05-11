type TPost = {
	id: number;
	title: string;
	createdAt: Date;
	user: {
		name: string;
		image: string;
		activeStoryId: number;
	},
	posts: Array<{
		id: number;
		image: string;
	}>;
	comments: Array<{
		by: string;
		comment: string;
	}>;
}

export default TPost;
