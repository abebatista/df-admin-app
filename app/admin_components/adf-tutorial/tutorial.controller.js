'use strict';

angular.module('dfTutorial')

    .controller('TutorialController', ['$scope', function ($scope) {

        $scope.$parent.title = 'Tutorials';

        $scope.links = [
            {
                name: 'services',
                label: 'Services',
                path: 'service-tutorial'
            },
            {
                name: 'apps',
                label: 'Apps',
                path: 'app-tutorial'
            },
            {
                name: 'scripting',
                label: 'Scripts',
                path: 'scripting-tutorial'
            }
        ];
    }]);


