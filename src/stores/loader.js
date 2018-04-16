
import { observable, action } from 'mobx';

class LoaderStore {
  @observable show = false;

  @action switch(value) {
    this.show = value;
  }

  @action clearStore() {
    this.show = false;
  }
}

const loaderStore = new LoaderStore();

export default loaderStore;

