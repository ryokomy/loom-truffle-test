const SimpleStore = artifacts.require('SimpleStore')

module.exports = async (callback) => {
    // perform actions
    let instance = await SimpleStore.deployed()
    let result = await instance.get()
    console.log(result.toNumber())
};