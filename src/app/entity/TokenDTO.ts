export class TokenDto {
    token: string;
    type: string = "Bearer";
	id : number;
	username: string;
	roles : [];

    constructor(token: string) {
        this.token = token;
    }
}