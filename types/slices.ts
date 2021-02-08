import { ICategoriesState } from './categories';
import { IQuizzesState } from './quizzes';
import { IStatsState } from './stats';
import { IUserState } from './users';

enum Language {
	ES = 'es',
	EN = 'en',
}

export interface IGlobalState {
	language: Language;
	savedInput: string;
}

export interface IState {
	global: IGlobalState;
	users: IUserState;
	quizzes: IQuizzesState;
	categories: ICategoriesState;
	stats: IStatsState;
}
