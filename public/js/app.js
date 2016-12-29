var app=angular.module('app',['ngRoute']);
app.run(function(){

});

app.config(function($locationProvider, $routeProvider){
    $routeProvider.when('/',{
        templateUrl:'views/landing.html',
        controller:'LandingController'
    }).when('/a',{
        templateUrl:'views/landing.html',
        controller:'Landing2Controller'
    }).otherwise({
        redirectTo:'/'
    });
    $locationProvider.html5Mode(true);
});


app.controller('LandingController',function(){

});
app.controller('Landing2Controller',function(){

});
