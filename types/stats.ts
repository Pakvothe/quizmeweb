export interface IStatsCategory {
	[key: string]: string | number;
	id: string;
	description_en: string;
	description_es: string;
	value: number;
}

export interface IStatsState {
	totalQuizzes: number;
	totalNewUsers: number;
	quizzesByCategories: IStatsCategory[];
	loading: boolean;
	users: {
		validatedUsers: number;
		notValidatedUsers: number;
	};
}
