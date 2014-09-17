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
             arr[2] = arr[2]+1100
             flow.cameraPosition = arr
        }
    }

});
