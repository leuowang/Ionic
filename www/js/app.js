// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])
        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
            $ionicConfigProvider.tabs.position('bottom');
            $urlRouterProvider.otherwise('/tab/home');
            $stateProvider
                    .state('tab', {
                        url: '/tab',
                        abstract: true,
                        templateUrl: 'templates/tabs.html'
                    })
                    .state('tab.home', {
                        url: '/home',
                        views: {
                            'tab-home': {
                                templateUrl: 'templates/home.html',
                                controller: 'homeCtrl'
                            }
                        }
                    })
                    .state('tab.settings', {
                        url: '/settings',
                        views: {
                            'tab-settings': {
                                templateUrl: 'templates/settings.html',
                                controller: 'settingsCtrl'
                            }
                        }
                    })
                    .state('weather', {
                        url: '/tab/home/:id',
                        templateUrl: 'templates/weather.html',
                        controller: 'weatherCtrl'
                    });
        })

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
