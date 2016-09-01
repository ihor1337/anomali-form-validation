customValidator.directive('validatePassword', function(){
    var REGEX_PASS = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;

    return{
        require: 'ngModel',
        restrict: 'A',

        link: function ($scope, element, attr, ctrl) {
            function customValidator(value){
                if (REGEX_PASS.test(value)){
                    ctrl.$setValidity('passwordValid', true);
                }else {
                    ctrl.$setValidity('passwordValid', false);
                }

                var isMatch = function () {
                    var pass1 = $scope.$eval(attr.ngModel);
                    var pass2 = $scope.$eval(attr.passwordToCompare);
                    return pass1 == pass2;
                };
                $scope.$watch(isMatch, function (flag) {
                    ctrl.$setValidity("passwordMatch", flag);
                });

                return value;
            }
            ctrl.$parsers.push(customValidator);
        }
    }
});
