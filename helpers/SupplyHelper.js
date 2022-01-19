var BigNumber = require('bignumber.js');

module.exports = {
    /**
     *
     * @param {Number} height
     * @return {BigNumber}
     */
    getTotalSupplyByHeight: function (height) {
        var newHeightSinceGenesis = height - 1000;
        var newCoinSinceGenesis = newHeightSinceGenesis * 4;
        var supply = newCoinSinceGenesis + 108435435;
        return (new BigNumber(supply));
    }

};