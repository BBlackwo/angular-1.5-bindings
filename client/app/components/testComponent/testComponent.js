import angular from 'angular';
import uiRouter from 'angular-ui-router';
import testComponentComponent from './testComponent.component';

let testComponentModule = angular.module('testComponent', [
  uiRouter
])

.component('testComponent', testComponentComponent)

.name;

export default testComponentModule;
