/**
 * @module ui/slot.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Slot
 * @extends Component
 */
exports.Slot = Component.specialize(/** @lends Slot# */ {
    constructor: {
        value: function Slot() {
            this.super();
        }
    }
});
