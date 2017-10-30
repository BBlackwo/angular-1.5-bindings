import angular from 'angular';
import Home from './home/home';
import testComponent from './testComponent/testComponent';

let componentModule = angular.module('app.components', [
  Home,
  testComponent,
])

.name;

export default componentModule;
