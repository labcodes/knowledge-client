class Auth {
  constructor(data) {
    this.formData = data;
  }

  login() {
    console.warn(this.formData);
  }

  // logout() {}
}

export default Auth;
