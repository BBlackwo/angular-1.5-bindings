import template from './testComponent.html';
import controller from './testComponent.controller';
import './testComponent.scss';

let testComponentComponent = {
  bindings: {
    someObject: '<', // One Way,

    simpleCb: '&', // Expression
    cbWithData: '&', // Expression with data

    someString: '@', // Evaluated DOM attribute

    inputModel: '=', // Two-way binding (BAD practice!)
  },
  template,
  controller
};

export default testComponentComponent;
