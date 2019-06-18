module.exports = {
  setupFiles: ['<rootDir>/configs/testsSetup.js'],
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '\\.styl$': 'identity-obj-proxy'
  }
}
