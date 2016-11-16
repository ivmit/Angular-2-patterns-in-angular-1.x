import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import AppComponent from './app.component';
import ComponentsModule from './components/component.module';

angular.module('app',
    [
        ComponentsModule
    ])
    .component('app', AppComponent);