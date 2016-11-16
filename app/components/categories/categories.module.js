import angular from 'angular';
import CategoriesComponent from './categories.component';

const CategoriesModule = angular
    .module('categories', [])
    .component('categories', CategoriesComponent)
    .name;

console.log(CategoriesModule);

export default CategoriesModule;