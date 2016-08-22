angular.module('library')
    .controller('BookCreateController', BookCreateController);

function BookCreateController($scope, NavigationService) {

    NavigationService.newObject([
        {
            name: "Books",
            href: ""
        },
        {
            name: "Create Book",
            href: ""
        }
    ]);


    var self = this;

    function construct() {
        //step 1
        self.step1 = {
            completed: false
        };
        //step 2
        self.step2 = {
            disabled: false,
            completed: false
        };
        //step3
        self.step3 = {
            disabled: false,
            completed: false
        };
        
        self.showBusyText = false;
        self.selectedStep = 0;
    };

    construct();

    self.startOver = function () {
        construct();
    };



    self.next = function (num) {
        self.selectedStep = num;
        self["step" + num].completed = true;
    };

    self.previous = function (num) {
        self.selectedStep = num;
    };

    self.series_numbers = [];

    for (var i = 0; i < 100; i++) {
        self.series_numbers.push(i + 1);
    }

    //TODO
    $scope.dzOptions = {
        url: '/alt_upload_url',
        paramName: 'photo',
        maxFilesize: '10',
        acceptedFiles: 'image/jpeg, images/jpg, image/png',
        addRemoveLinks: true,
        dictDefaultMessage: "Put your custom message here"
    };


    //Handle events for dropzone
    //Visit http://www.dropzonejs.com/#events for more events
    $scope.dzCallbacks = {
        'addedfile': function (file) {
            console.log(file);
            $scope.newFile = file;
        },
        'success': function (file, xhr) {
            console.log(file, xhr);
        }

    };


    //Apply methods for dropzone
    //Visit http://www.dropzonejs.com/#dropzone-methods for more methods
    $scope.dzMethods = {};
    $scope.removeNewFile = function () {
        $scope.dzMethods.removeFile($scope.newFile); //We got $scope.newFile from 'addedfile' event callback
    }
}

