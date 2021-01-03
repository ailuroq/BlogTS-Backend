export class CreateUserDto {
  readonly username: string;
  readonly password: string;

  get Username():string {
    return this.username
  }
  get Password():string {
    return this.password
  }
}
