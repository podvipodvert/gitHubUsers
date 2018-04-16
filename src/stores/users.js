
import { observable, action } from 'mobx';

class UserStore {
  @observable users = [];
  @observable followers = [];

  @action setUsers(users) {
    this.users = users;
  }

  @action setFollowers(followers) {
    this.followers = followers;
  }

  @action clearStore() {
    this.users = [];
    this.followers = [];
  }
}
const userStore = new UserStore();

export default userStore;
