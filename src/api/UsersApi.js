class UsersApi {
  static getAllUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default UsersApi;