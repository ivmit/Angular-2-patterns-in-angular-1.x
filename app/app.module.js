import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import AppComponent from './app.component';
import ComponentsModule from './components/component.module';
import CommonModule from './common/common.module'

angular.module('app',
    [
        CommonModule,
        ComponentsModule
    ])
    .component('app', AppComponent);