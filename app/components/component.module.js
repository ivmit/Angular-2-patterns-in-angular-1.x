import angular from 'angular';
import CategoriesModule from './categories/categories.module';

const ComponentsModule = angular
    .module('app.components', 
        [
            CategoriesModule
        ])
    .name;

export default ComponentsModule;