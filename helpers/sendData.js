// const assert = require('assert')

// const { getDevice } = require('./getDevice');
// const convertProntoCode = require('./convertProntoCode')
const { SerialPort } = require('serialport');
const port = new SerialPort({
  path: '/dev/ttyACM0',
  baudRate: 115200,
})
module.exports = ({ host, hexData, log, name, debug }) => {
  // assert(hexData && typeof hexData === 'string', `\x1b[31m[ERROR]: \x1b[0m${name} sendData (HEX value is missing)`);

  // // Check for pronto code
  // if (hexData.substring(0, 4) === '0000') {
  //   if (debug) log(`\x1b[33m[DEBUG]\x1b[0m ${name} sendHex (Converting Pronto code "${hexData}" to Broadlink code)`);
  //   hexData = convertProntoCode(hexData, log)
  //   if (debug) log(`\x1b[33m[DEBUG]\x1b[0m ${name} sendHex (Pronto code successfuly converted: "${hexData}")`);
    
  //   if (!hexData) return log(`\x1b[31m[ERROR] \x1b[0m${name} sendData (A Pronto code was detected however its conversion to a Broadlink code failed.)`);

  // }

  // // Get the Broadlink device
  // const device = getDevice({ host, log });

  // if (!device) {
  //   if (!host) return log(`\x1b[31m[ERROR] \x1b[0m${name} sendData (no device found)`);

  //   return log(`\x1b[31m[ERROR] \x1b[0m${name} sendData (no device found at ${host})`);
  // }

  // if (!device.sendData) return log(`\x1b[31m[ERROR] \x1b[0mThe device at ${device.host.address} (${device.host.macAddress}) doesn't support the sending of IR or RF codes.`);
  // if (hexData.includes('5aa5aa555')) return log(`\x1b[31m[ERROR] \x1b[0mThis type of hex code (5aa5aa555...) is no longer valid. Use the included "Learn Code" accessory to find new (decrypted) codes.`);

  // const hexDataBuffer = new Buffer(hexData, 'hex');
  // device.sendData(hexDataBuffer, debug, hexData);
  port.write(hexData, function(err) {
    if (err) {
      return log('Error on write: ', err.message)
    }
    
  })
  return log('message written');
  // log(`${name} sendHex (${device.host.address}; ${device.host.macAddress}) ${hexData}`);
}
