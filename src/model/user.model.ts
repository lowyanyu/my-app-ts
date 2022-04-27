export class User {
	userId: number = NaN;
	userAccount: string = '';
	userName: string = '';

	constructor(init?: Partial<User>) {
		Object.assign(this, init);
	}
}