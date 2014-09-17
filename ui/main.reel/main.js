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

    handleButtonAction: {
        value: function (event) {
             var flow = this.templateObjects.flow
             var arr = flow.cameraPosition
             for(var i=0;i<1000;i++)
             {
             arr[1] = arr[1]+50
             flow.cameraPosition = arr
             }
        }
    },

    handleButton2Action: {
        value: function (event) {
            var flow = this.templateObjects.flow
            var arr = flow.cameraPosition
            for(var i=0;i<1000;i++)
            {
                arr[1] = arr[1]-50
                flow.cameraPosition = arr
            }
        }
    }

});
