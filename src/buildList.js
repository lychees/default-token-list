const { version } = require('../package.json');
const mainnet = require('./tokens/mainnet.json');
const ropsten = require('./tokens/ropsten.json');
const rinkeby = require('./tokens/rinkeby.json');
const goerli = require('./tokens/goerli.json');
const kovan = require('./tokens/kovan.json');
const bsc_mainnet = require('./tokens/bsc-mainnet.json');
const bsc_testnet = require('./tokens/bsc-testnet.json');
const heco_mainnet = require('./tokens/heco-mainnet.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'Unisave Default List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir',
    'keywords': [
      'uniswap',
      'default'
    ],
    tokens: [
      ...mainnet,
      ...ropsten,
      ...goerli,
      ...kovan,
      ...rinkeby,
      ...bsc_mainnet,
      ...bsc_testnet,
      ...heco_mainnet
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};
