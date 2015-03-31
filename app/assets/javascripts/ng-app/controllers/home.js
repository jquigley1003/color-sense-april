angular.module('AngularRails')
.controller('HomeCtrl', [ '$scope', function ($scope) {
  $scope.things = ['Angular', 'Rails 4.1', 'Working', 'Together!!'];

  $scope.myToggle = true;

  $scope.toggle = function() {
    $scope.myToggle = !$scope.myToggle;
  };

  $scope.pickColor = function(){
    var img = new Image();
    img.src = "/assets/color-wheel-866a4dc055b0ac31384b767e20f770cf.png";
    var canvas = document.getElementById('hccp-FindCanvasColor');
    var context = canvas.getContext('2d');

    // draw image onto HTML5 canvas
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img,0,0);
    };

    // convert individual RGB components
    function unitConversion(unit) {
      var hexconv = unit.toString(16);
      return hexconv.length == 1 ? '0' + hexconv : hexconv;
    }

    // convert RGB to Hex
    function RGBtoHex(r, g, b) {
      return "#" + unitConversion(r) + unitConversion(g) + unitConversion(b);
    }

    // find pixel color value on jQuery mousemove or click event
    // use document.getElementById to return values to user and change CSS
    $('#hccp-FindCanvasColor').on('mousemove click', function(event){
      
      var x = event.pageX - canvas.offsetLeft;
      var y = event.pageY - canvas.offsetTop;
      var img_data = context.getImageData(x, y, 1, 1).data;
      var R = img_data[0];
      var G = img_data[1];
      var B = img_data[2];
      var rgb = 'rgb('+R+','+G+','+B+')';
      var hex = RGBtoHex(R,G,B);
      if(event.type=='mousemove') {
        document.getElementById('hccp-hoverColorFont').style.color = hex;
        document.getElementById('hccp-hoverColorBackground').style.backgroundColor = hex;
        document.getElementById('hccp-hoverColorRGB').value = rgb;
        document.getElementById('hccp-hoverColorHEX').value = hex;
      } 
      else if(event.type=='click') {
        document.getElementById('hccp-clickColorFont').style.color = hex;
        document.getElementById('hccp-clickColorBackground').style.backgroundColor = hex;
        document.getElementById('hccp-clickColorRGB').value = rgb;
        document.getElementById('hccp-clickColorHEX').value = hex;
      }
    });
  };

}]);