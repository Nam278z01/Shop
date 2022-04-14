var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./home.html"
        })
        .when("/product", {
            templateUrl: "./product.html"
        })
        .when("/cart", {
            templateUrl: "./cart.html"
        })
        .when("/details", {
            templateUrl: "./details.html"
        })
});