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
        value: [
            0,
            2071.91628776095,
            3129.0885767498976
        ]
    },
    
    handleButtonAction: {
        value: function (event) {
             var flow = this.templateObjects.flow
             var arr = flow.cameraPosition
             var i = 0;
             function interval()
             {
                 i++; 
                 if(i > 200)  clearInterval(plusInt);
                 arr[0] = arr[0]-5
                 flow.cameraPosition = arr
             }
             var plusInt=setInterval(interval,5);
        }
    },
    handleButton2Action: {
        value: function (event) {
            var flow = this.templateObjects.flow
            var arr = flow.cameraTargetPoint
            var i = 0;
            function interval()
            {
                i++; 
                if(i > 200)  clearInterval(plusInt);
                arr[0] = arr[0]-15
                flow.cameraTargetPoint = arr
            }
            var plusInt=setInterval(interval,5);
        }
    },
    handleButton3Action: {
        value: function (event) {
            var flow = this.templateObjects.flow
            var arr = flow.cameraPosition
            var i = 0;
            function interval()
            {
                i++; 
                if(i > 200)  clearInterval(plusInt);
                arr[2] = arr[2]-5
                flow.cameraPosition = arr
            }
            var plusInt=setInterval(interval,5);
        }
        }

});
