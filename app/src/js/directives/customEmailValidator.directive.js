/*This directive overrides Angular's built-in email validator
* I could've used ng-pattern directive to validate email
* but requirement for this test code was to validate email using JavaScript,
* so I decided to write a directive in order to take an advantage on properties such as'$valid', '$pristine' and etc.
 * and also on classes such as ng-valid, ng-pristine, ng-touched and etc.
* */
customValidator.directive('validateEmail', function(){
    var REGEX_EMAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;

    return{
        require: '?ngModel',
        restrict: 'A',
        link: function (scope, element, attribute, controller) {
            if (controller && controller.$validators.email){
                controller.$validators.email = function (val) {
                    return controller.$isEmpty(val) || REGEX_EMAIL.test(val);
                };
            }
        }
    };
});