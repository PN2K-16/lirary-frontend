angular
    .module('library')
    .controller('SidebarController', SidebarController);

function SidebarController($scope, NavigationService) {
    var self = this;

    self.sidebar = [
        {
            header: "Books",
            items: [
                {
                    name: "Browse",
                    sref: "main.book_browse",
                    click: [
                        {
                            name: "Books",
                            href: ""
                        },
                        {
                            name: "Browse Book",
                            href: ""
                        }
                    ],
                    icon : ""
                },
                {
                    name: "Create",
                    sref: "main.book_create",
                    click: [
                        {
                            name: "Books",
                            href: ""
                        },
                        {
                            name: "Create Book",
                            href: ""
                        }
                    ],
                    icon : ""
                },
            ]
        },

    ];

    self.nav = function (obj) {
       // NavigationService.newObject(obj);
    };
}