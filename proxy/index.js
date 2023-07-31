/* Lazy Loading*/

// RealUser class represents the original object
class RealUser {
  constructor(id) {
    this.id = id;
    // Simulate loading the user's details from the server
    console.log(`Loading user ${id} from the server...`);
    this._loadDetails();
  }

  _loadDetails() {
    // Simulate an API call to get user details
    setTimeout(() => {
      this.name = `User_${this.id}`;
      this.email = `user${this.id}@example.com`;
      console.log(`User ${this.id} details loaded.`);
    }, 1000);
  }

  getUserDetails() {
    return {
      name: this.name,
      email: this.email,
    };
  }
}

// ProxyUser class represents the proxy object
class ProxyUser {
  constructor(id) {
    this.id = id;
    this.realUser = null; // The realUser object will be lazy-loaded when needed
  }

  getUserDetails() {
    // Lazy-load the realUser object only when getUserDetails is called
    if (!this.realUser) {
      this.realUser = new RealUser(this.id);
    }
    return this.realUser.getUserDetails();
  }
}

// Usage example
const userProxy = new ProxyUser(1);

// At this point, the real user object is not yet loaded (lazy-loading)

setTimeout(() => {
  // When we call getUserDetails(), it will load the real user object
  const userDetails = userProxy.getUserDetails();
  console.log(userDetails); // Output will be { name: "User_1", email: "user1@example.com" }
}, 2000);
