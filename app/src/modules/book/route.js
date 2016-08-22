angular.module('library')
    .config(config);


function config($stateProvider) {

    $stateProvider
        .state('main.book_create', {
            url: "/book/create",
            views: {
                content: {
                    templateUrl: "src/modules/book/pages/create.html",
                    controller: "BookCreateController as vm"
                },
            }
        })
            .state('main.book_browse', {
            url: "/book/browse",
            views: {
                content: {
                    templateUrl: "src/modules/book/pages/create.html",
                    controller: ""
                },
            }
        });
}