const { tarotHelper } = require('./tarotHelper')

const config = {
  fantom: {
    factories: [
      '0x35C052bBf8338b06351782A565aa9AaD173432eA', // Tarot Classic
      '0xF6D943c8904195d0f69Ba03D97c0BAF5bbdCd01B', // Tarot Requiem
      '0xbF76F858b42bb9B196A87E43235C2f0058CF7322', // Tarot Carcosa
    ]
  },
  optimism: {
    factories: [
      '0x1D90fDAc4DD30c3ba38d53f52A884F6e75d0989e', // Tarot Opaline
      '0xD7cABeF2c1fD77a31c5ba97C724B82d3e25fC83C', // Tarot Velours
      '0x49DF1fe24cAf1a7dcBB2E2b1793b93b04eDb62bF', // Tarot Jupiter
    ]
  },
  arbitrum: {
    factories: [
      '0x2217AEC3440E8FD6d49A118B1502e539f88Dba55', // Tarot Galahad
    ]
  },
}

module.exports = {}

tarotHelper(module.exports, config)
