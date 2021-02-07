export interface ICategory {
	[key: string]: string | undefined;
	_id?: string;
	description_en: string;
	description_es: string;
}

export interface IPayloadCategory {
	category: {
		description_en: string;
		description_es: string;
	};
	catId: string;
}

export interface ICategoriesState {
	categories: Array<ICategory>;
	loading: false;
}
