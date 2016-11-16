import angular from 'angular';
import CategoriesModel from './models/categories.model';

const CommonModule = angular
    .module('app.common', [])
    .service('CategoriesModel', CategoriesModel)
    .name;

export default CommonModule;