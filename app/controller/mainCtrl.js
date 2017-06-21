/**
 * Created by Tanner Norton on 6/16/2017.
 */
app.controller('mainCtrl', ['$scope', '$timeout', function ($scope, $timeout)
{
    var card = $('#portfolio-card');
    $('.otherside').on('click', function ()
    {
        card.css('transform-origin', "");
        card.toggleClass("flipped");
    })
    $('#title img').on('click', function ()
    {
        card.css('transform-origin', 'top left');
        card.toggleClass('titleimg-focus');
    });
    var hour = new Date().getHours();
    $scope.time = 'evening';
    if (hour < 12)
    {
        $scope.time = 'morning'
    }
    else if (hour < 17)
    {
        $scope.time = 'afternoon'
    }
    $scope.github = "https://github.com/teej107";
    $scope.linkedin = "https://www.linkedin.com/in/tanner-norton-9351a37b/";

    $timeout(function ()
    {
        $('a').attr('target', '_blank');
    }, 10);
}]);
