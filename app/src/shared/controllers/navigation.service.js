angular.module('library')
    .service('NavigationService', NavigationService);

function NavigationService($rootScope) {
    var self = this;

    self.clear = function () {
        $rootScope.navigation = [];
    };

    self.push = function (obj) {
        $rootScope.navigation.push(obj);
    };

    self.pop = function () {
        $rootScope.navigation.pop();
    };

    self.newObject = function (obj) {
        self.clear();

        angular.forEach(obj, function (value, key) {
            self.push(value);
        });
    };

}