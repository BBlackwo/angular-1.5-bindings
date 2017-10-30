class HomeController {
  constructor() {
    this.someObject = {
      name: `Some Object: `,
      desc: `This object will be updated every time it's changed`
    }

    this.someString = 'Some string (Evaluated DOM attribute)';

    this.model = {};
  }

  changeObject() {
    this.someObject.name += 'test ';

    // create new object so change is registered
    this.someObject = Object.assign({}, this.someObject);
  }

  simpleCb() {
    console.log('Simple callback was called');
  }

  cbWithData(name, eXactCase) {
    console.log('Callback with parameters:', name, eXactCase);
  }

  submit() {
    console.log('Submitted form name:', this.model.name);
  }
}

export default HomeController;
