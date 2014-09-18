/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    Pos: {
        value: undefined
    },
    
    handleButtonAction: {
        value: function (event) {
             var ch = this.templateObjects.checkbox.checked
             var flow = this.templateObjects.flow
             var arr = flow.cameraPosition
             var i = 0;
             function interval()
             {
                 i++; 
                 if(i > 500)  clearInterval(plusInt);
                 if(ch) {
                     arr[0] = arr[0]-10
                 }else{
                     arr[0] = arr[0]+10
                 }
                 flow.cameraPosition = arr
             }
             var plusInt=setInterval(interval,5);
        }
    },
    handleButton2Action: {
        value: function (event) {
            var ch = this.templateObjects.checkbox.checked
            var flow = this.templateObjects.flow
            var arr = flow.cameraPosition
            var i = 0;
            function interval()
            {
                i++; 
                if(i > 500)  clearInterval(plusInt);               
                if(ch) {
                    arr[1] = arr[1]-10
                }else{
                    arr[1] = arr[1]+10
                }
                flow.cameraPosition = arr
            }
            var plusInt=setInterval(interval,5);
        }
    },
    handleButton3Action: {
        value: function (event) {
            var ch = this.templateObjects.checkbox.checked
            var flow = this.templateObjects.flow
            var arr = flow.cameraPosition
            var i = 0;
            function interval()
            {
                i++; 
                if(i > 500)  clearInterval(plusInt);
                if(ch) {
                    arr[2] = arr[2]-10
                }else{
                    arr[2] = arr[2]+10
                }
                flow.cameraPosition = arr
            }
            var plusInt=setInterval(interval,5);
        }
        }

});
