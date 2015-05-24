'use strict';

socialNetworkApp.controller('ChangePasswordController',
    ['$scope', '$location', '$timeout', 'userData', 'credentials', 'toaster', function ($scope, $location, $timeout, userData, credentials, toaster){
        $scope.changePassword = changePassword;

        function changePassword(password, changePasswordForm) {
            userData.changePassword(password)
                .$promise
                .then(function (data) {
                    $scope.changePasswordForm.$setPristine();
                    toaster.pop('success', 'Password change successful!', data.message);
                    redirectToHome(2000);
                }, function (error) {
                    toaster.pop('error', 'Change password error!', error.data.message);
                })
        }

        function redirectToHome(time) {
            $timeout(function () {
                $location.path('/');
            }, time);
        }
    }
    ]);