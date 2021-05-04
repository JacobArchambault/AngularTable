angular.module("mainApp", []).controller("studentCtrl", function ($scope) {   // create controller
    $scope.student = {             // create student object
        firstName: "Ralph",
        lastName: "Cramdon",
        semester: "Fall, 1955"
    };   // end student object
    $scope.subjects = [                    // array of object literals
        { crs_name: 'Physics', grade: 'B' },
        { crs_name: 'Chemistry', grade: 'C' },
        { crs_name: 'Math', grade: 'A' },
        { crs_name: 'English', grade: 'A' },
        { crs_name: 'History', grade: 'B' }
    ];
});     // end controller