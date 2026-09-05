export default class LoginResponse {
  constructor(token, userId, role) {
    this.token = token;
    this.userId = userId;
    this.role = role;
  }
}