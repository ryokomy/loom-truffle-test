const SimpleStore = artifacts.require('SimpleStore')

let value = 1

module.exports = async (callback) => {
    // perform actions
    let instance = await SimpleStore.deployed()
    let result = await instance.set(value)
    console.log(result)
};