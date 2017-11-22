(function(){
  angular.module('app.main',['ngRoute'])
  .controller('mainCtrl', [ '$scope', '$filter', 'toastr', function ($scope, $filter, toastr) {

    $scope.active_page='main';

    $scope.loan_types = [{
      "id": "0",
      "label": 'Select loan type',
      "filter": ""
    }, {
      "id": "1",
      "label": 'Automotive',
      "filter": "Automotive"
    }, {
      "id": "2",
      "label": 'Customer',
      "filter": "Customer"
    }, {
      "id": "3",
      "label": 'Mortgage',
      "filter": "Mortgage"
    }];
    $scope.selected_loan_type=$scope.loan_types[0];

    $scope.loan_table=[{
        "id":"1",
        "customer" : {
            "name" : "Frank Herbert",
            "fiscal_code" : "111-111-11-11",
            "date_of_birth" : "01-01-1911",
            "address" : "Street 11, 11-111 City",
            "phone" : "111 111 111"
        },
        "loan_type" : "Automotive",
        "total_amount" : "200.00",
        "rates" : "12"
      },{
        "id":"2",
        "customer" : {
            "name" : "Gene Wolfe",
            "fiscal_code" : "222-222-22-22",
            "date_of_birth" : "02-02-1922",
            "address" : "Street 22, 22-222 City",
            "phone" : "222 222 222"
        },
        "loan_type" : "Customer",
        "total_amount" : "400.00",
        "rates" : "24"
      },{
        "id":"3",
        "customer" : {
            "name" : "Ursula Le Guin",
            "fiscal_code" : "333-333-33-33",
            "date_of_birth" : "03-03-1933",
            "address" : "Street 33, 33-333 City",
            "phone" : "333 333 333"
        },
        "loan_type" : "Mortgage",
        "total_amount" : "1200.00",
        "rates" : "36"
      }];

    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    })

    $('#datepicker').datepicker({
      uiLibrary: 'bootstrap4',
      iconsLibrary: 'fontawesome',
      format: 'dd-mm-yyyy',
      weekStartDay: 1
    });
    $('.input-group-addon').removeClass("input-group-addon").addClass("custom_datepicker");

    $scope.filterResult= function() {
        $scope.filter_loan_type = $scope.selected_loan_type.filter  ;
    };

    $scope.goStep1= function() {
      $scope.active_page='step1';
      $scope.loan_type=$scope.loan_types[0];
      $scope.new_loan={};
      $scope.new_loan.customer={};
    };
    $scope.goStep2= function() {
      if (!($scope.loan_type.id=='0')) {
        $scope.new_loan.loan_type=$scope.loan_type.label;
        $scope.active_page='step2';
      }
      else {
        $('select').focus();
      }
    };
    $scope.goStep3= function() {
      $scope.new_loan.customer.date_of_birth=$('#datepicker').val();
      $scope.new_loan.customer.name=$scope.customer_name+" "+$scope.customer_surname;
      $scope.active_page='step3';
    };
    $scope.openDetailsPage= function(arg) {
      $scope.active_page='details';
      $scope.active_loan=$filter('filter')($scope.loan_table, {'id':arg})[0];
      $scope.details_total=$scope.active_loan.total_amount;
      $scope.details_rates=$scope.active_loan.rates;
    };
    $scope.saveDetails= function() {
      console.log($filter('filter')($scope.loan_table, {'id':$scope.active_loan.id})[0]);
      $filter('filter')($scope.loan_table, {'id':$scope.active_loan.id})[0].total_amount=$scope.details_total;
      $filter('filter')($scope.loan_table, {'id':$scope.active_loan.id})[0].rates=$scope.details_rates;
      $scope.active_page='main';
      toastr.success('Changed were succesfully saved.', 'Saved', {
        closeButton: true
      });
    };
    $scope.saveNewLoan= function() {
      $scope.new_loan.id=$scope.loan_table.length+1;
      $scope.loan_table.push($scope.new_loan);
      $scope.active_page='main';
      toastr.success('Changed were succesfully saved.', 'Saved', {
        closeButton: true
      });
    };

  }]);
})();
