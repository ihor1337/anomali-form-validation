
app.controller('formController', ['$scope',function($scope){
    var submittedForm;
    var getFormData = function () {
        if ($scope.reg){
            submittedForm = {
                first_name: $scope.reg.fName,
                last_name: $scope.reg.lName,
                company_name: $scope.reg.cName,
                email: $scope.reg.email,
                phone: $scope.reg.phone,
                country: $scope.reg.country,
                state: $scope.reg.state,
                industry: $scope.reg.industry,
                postal_zip: $scope.reg.zip,
                password: $scope.reg.pass,
                password_confirm: $scope.reg.passConfirm
            };
        }
    };


   $scope.submitForm = function(){
       if ($scope.form.$valid){
           getFormData();
            alert("Congrats! Your form has been submitted with following data \n"+JSON.stringify(submittedForm));
           //POST to server
       }
   }
}]);