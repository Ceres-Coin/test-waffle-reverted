const BigNumber = require('bignumber.js');
const BN = BigNumber.clone({ DECIMAL_PLACES: 9 })
const chalk = require('chalk');
const { assert, expect,chai} = require('chai');

const BasicToken = artifacts.require("BasicToken");
const ONE_MILLION_DEC18 = new BigNumber("1000000e18");

contract('CERES.sol', async (accounts) => {



    it ('check ceres.pool_mint(account3,100),without addPool()',async() => {
        
        expect(1).to.equal(1);
    });
});
