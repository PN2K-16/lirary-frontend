angular
    .module('library', [
        'ngMaterial',
        'ui.router',
        'md-steppers',
        'thatisuday.dropzone'
    ])
    .run(run);

function run($rootScope) {

    $rootScope.navigation = [];
}