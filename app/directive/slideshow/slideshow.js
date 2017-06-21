/**
 * Created by Tanner Norton on 6/19/2017.
 */
app.directive('slideshow', function ()
{
    return {
        restrict: 'E',
        templateUrl: 'app/directive/slideshow/slideshow.html',
        scope: {},
        controller: ['$scope' ,function ($scope)
        {
            var slides = slidesArray;
            var index = 0;
            $scope.arrowClick = function (direction)
            {
                index += direction;
                if(index < 0)
                {
                    index = slides.length - 1;
                }
                else if(index >= slides.length)
                {
                    index = 0;
                }
            };
            $scope.current = function ()
            {
                return slides[index];
            }
        }]
    };
});