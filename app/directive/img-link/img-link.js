app.directive("imgLink", function ()
{
    return {
        restrict: "E",
        templateUrl: "app/directive/img-link/img-link.html",
        scope: {
            src: '@',
            title: '@',
            href: '@',
            color: '@'
        },
        controller: function ($scope)
        {
            $scope.color = { color: ($scope.color ? $scope.color : 'black')};
        }
    }
});