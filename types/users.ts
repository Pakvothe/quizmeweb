export interface IUserState {
	user: IUser;
	users: IUserFull[];
	token: string;
	loading: boolean;
}

export interface IUser {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	profilePic: string;
	countryCode: string;
	role: string;
	updatedAt: string;
	premium: boolean;
}

export interface IUserFull {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	profilePic: string;
	countryCode: string;
	role: string;
	updatedAt: string;
	premium: boolean;
	isActive: boolean;
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IPayloadActivate {
	userId: string;
	isActive: boolean;
}
