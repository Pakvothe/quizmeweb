export interface IQuizzesState {
	quizzes: Array<IQuiz>;
	quizDetail: IQuiz;
	loading: boolean;
}

export interface IQuiz {
	_id: string;
	title: string;
	description: string;
	image: string;
	language: string;
	likes: number;
	creatorId: string;
	categoryId: string;
	questions: string[];
	time: number;
	highScores: [
		{
			user: string;
			score: number;
		}
	];
	type: string;
}
