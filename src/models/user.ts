export class User {
  public readonly username: string;
  public readonly token: string;
  constructor(username: string, token: string) {
    this.token = token;
    this.username = username;
  }
}
