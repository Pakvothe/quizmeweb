export interface IQuizzesState {
	quizzes: Array<IQuiz>;
	quizDetail: IQuiz;
	loading: boolean;
	totalPages: boolean;
	page: number;
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

export interface QuizCardProps {
	quiz: IQuiz;
}
