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
             for(var i = 0; i < 1000; i++)
             {
                 setTimeout(function(){
                 arr[0] = arr[0]-10
                 flow.cameraPosition = arr
                 },100)
             }
        }
    },
    handleButton2Action: {
        value: function (event) {
                var arr = this.Pos
                arr[1] = arr[1]-100
                this.Pos = arr

        }
    },
    handleButton3Action: {
            value: function (event) {
                var arr = this.Pos
                arr[2] = arr[2]-100
                this.Pos = arr
            }
        }

});
