angular.module('library')
    .config(config);

function config($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/demo");
    $stateProvider
        .state('main', {
            url: "",
            abstract: true,
            views: {
                main: {
                    templateUrl: "src/shared/pages/sidebar.html",
                    controller: "SidebarController as sc"
                },
            }
        }).state('main.demo', {
            url: "/demo",
            views: {
                content: {
                    templateUrl: "src/shared/pages/toolbar.html",
                    controller: ""
                },
            }
        });


    $mdIconProvider
        .defaultIconSet("./assets/svg/avatars.svg", 128)
        .icon("menu", "./assets/svg/menu.svg", 24)
        .icon("share", "./assets/svg/share.svg", 24)
        .icon("google_plus", "./assets/svg/google_plus.svg", 512)
        .icon("hangouts", "./assets/svg/hangouts.svg", 512)
        .icon("twitter", "./assets/svg/twitter.svg", 512)
        .icon("phone", "./assets/svg/phone.svg", 512);

    // $mdThemingProvider.theme('default')
    //     .primaryPalette('blue')
    //     .accentPalette('red');

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('light-green')
        .warnPalette('red')
        .backgroundPalette('grey');

    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('grey')
        .dark();
}