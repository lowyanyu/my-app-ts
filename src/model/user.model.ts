export class User {
	userId!: number;
	userAccount!: string;
	userName!: string;

	constructor(init?: Partial<User>) {
		Object.assign(this, init);
	}
}