angular.module('starter.controllers', [])
        .controller('homeCtrl', function ($scope, $location) {
            $scope.citys = citys;
            $scope.showWeather = function (index) {
                $location.path('/tab/home/' + index);
            }
        })
        .controller('settingsCtrl', function ($scope) {
            $scope.citys = citys;
        })
        .controller('weatherCtrl', function ($scope, $stateParams, $http) {
            $scope.city = citys[$stateParams.id];
            $scope.img_base_url = image_base_url;
            $http.get('http://api.openweathermap.org/data/2.5/weather',
                    {params: {'q': $scope.city.q}})
                    .then(function (response) {
                        $scope.weather = response.data; 
                    }, function (err) {
                        alert("Error!!")
                    })
                    /*.success(function (response) {
                        $scope.weather = response;
                    })
                   .error(function (err) {
                        alert("Error!!")
                    })*/
        })

var citys = [
    {name: "台北", q: "Taipei", on: true},
    {name: "台中", q: "Taichung", on: true},
    {name: "台南", q: "Tainan", on: true},
    {name: "高雄", q: "Kaohsiung", on: true},
    {name: "花蓮", q: "Hualian", on: true},
]
var image_base_url = "http://openweathermap.org/img/w/"; // open weather api icon