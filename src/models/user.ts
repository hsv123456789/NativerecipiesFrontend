export class User {
  private username: string;
  private token: string;
  constructor(username: string, token: string) {
    this.token = token;
    this.username = username;
  }
  public getusername(): string {
    return this.username;
  }
  public gettoken(): string {
    return this.token;
  }
}
