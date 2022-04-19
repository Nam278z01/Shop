app.controller('ProductController', function ($scope, $rootScope, $http) {
    $http({
        method: 'GET',
        url: "../api/product.json"
    }).then((res) => {
        $scope.products = res.data
        // console.log($scope.products)
    })

    $scope.changeColor = function (product, color) {
        // console.log(product)
        product.picked = {}
        product.picked.color = color
    }
})