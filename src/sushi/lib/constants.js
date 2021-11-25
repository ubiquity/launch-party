import BigNumber from 'bignumber.js/bignumber'
import chef from '../../assets/img/chef.png'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const addressMapStables = {
  sushiswapFactory: undefined,
  sushiswapFactoryV2: undefined,
  uAR: undefined,
  uAD: undefined,
  UBQ: undefined,
  LUSD: undefined,
  OHM: undefined,
  MIM: undefined,
  UST: undefined,
  FRAX: undefined,
  FEI: undefined,
  DOLA: undefined,
  DAI: undefined,
  USDC: undefined,
  USDT: undefined,
}

export const contractAddresses = {
  sushi: {
    1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
}

/*
UNI-V2 LP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 uAR 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/
/*
{
  pid: 12,
  lpAddresses: {
    1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
  },
  tokenAddresses: {
    1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  },
  name: 'Sushi Party!',
  symbol: 'uAR-ETH UNI-V2 LP',
  tokenSymbol: 'uAR',
  icon: '🍣',
},
*/

export const supportedPools = [
  {
    pid: 1,
    lpAddresses: {
      1: '0x0f644658510c95cb46955e55d7ba9dda9e9fbec6', // not found, leaving uAD address for now as a placeholder
    },
    tokenAddresses: {
      1: '0x0f644658510c95cb46955e55d7ba9dda9e9fbec6',
    },
    name: 'Ubiquity Algorithmic Dollar',
    symbol: 'uAD-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'uAD',
    icon: '🚜',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0x0f644658510c95cb46955e55d7ba9dda9e9fbec6', // not found, leaving uAD address for now as a placeholder
    },
    tokenAddresses: {
      1: '0x4e38d89362f7e5db0096ce44ebd021c3962aa9a0',
    },
    name: 'Ubiquity',
    symbol: 'UBQ-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'UBQ',
    icon: '🚜',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0x279ca79d5fb2490721512c8ae4767e249d75f41b', // https://analytics.sushi.com/pairs/0x279ca79d5fb2490721512c8ae4767e249d75f41b
    },
    tokenAddresses: {
      1: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
    },
    name: 'LUSD Stablecoin',
    symbol: 'LUSD-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'LUSD',
    icon: '🚜',
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0xfffae4a0f4ac251f4705717cd24cadccc9f33e06', // https://analytics.sushi.com/pairs/0xfffae4a0f4ac251f4705717cd24cadccc9f33e06
    },
    tokenAddresses: {
      1: '0x383518188c0c6d7730d91b2c03a03c837814a899',
    },
    name: 'Olympus',
    symbol: 'OHM-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'OHM',
    icon: '🚜',
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0x07d5695a24904cc1b6e3bd57cc7780b90618e3c4', // https://analytics.sushi.com/pairs/0x07d5695a24904cc1b6e3bd57cc7780b90618e3c4
    },
    tokenAddresses: {
      1: '0x07d5695a24904cc1b6e3bd57cc7780b90618e3c4',
    },
    name: 'Magic Internet Money',
    symbol: 'MIM-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'MIM',
    icon: '🚜',
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0x8b00ee8606cc70c2dce68dea0cefe632cca0fb7b', // https://analytics.sushi.com/pairs/0x8b00ee8606cc70c2dce68dea0cefe632cca0fb7b
    },
    tokenAddresses: {
      1: '0x8b00ee8606cc70c2dce68dea0cefe632cca0fb7b',
    },
    name: 'Wrapped UST Token',
    symbol: 'UST-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'UST',
    icon: '🚜',
  },
  {
    pid: 7,
    lpAddresses: {
      1: '0xec8c342bc3e07f05b9a782bc34e7f04fb9b44502', // https://analytics.sushi.com/pairs/0xec8c342bc3e07f05b9a782bc34e7f04fb9b44502
    },
    tokenAddresses: {
      1: '0x853d955acef822db058eb8505911ed77f175b99e',
    },
    name: 'Frax',
    symbol: 'FRAX-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'FRAX',
    icon: '🚜',
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0x0f644658510c95cb46955e55d7ba9dda9e9fbec6', // not found, leaving uAD address for now as a placeholder
    },
    tokenAddresses: {
      1: '0x865377367054516e17014ccded1e7d814edc9ce4',
    },
    name: 'Dola USD Stablecoin',
    symbol: 'DOLA-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'DOLA',
    icon: '🚜',
  },
  {
    pid: 9,
    lpAddresses: {
      1: '0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f', //https://analytics.sushi.com/pairs/0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Dai Stablecoin',
    symbol: 'DAI-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'DAI',
    icon: '🚜',
  },
  {
    pid: 10,
    lpAddresses: {
      1: '0x397ff1542f962076d0bfe58ea045ffa2d347aca0', // https://analytics.sushi.com/pairs/0x397ff1542f962076d0bfe58ea045ffa2d347aca0
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'USD Coin',
    symbol: 'USDC-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'USDC',
    icon: '🚜',
  },
  {
    pid: 11,
    lpAddresses: {
      1: '0x0f644658510c95cb46955e55d7ba9dda9e9fbec6', // not found, leaving uAD address for now as a placeholder
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Tether USD',
    symbol: 'USDT-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'USDT',
    icon: '🚜',
  },
  {
    pid: 11,
    lpAddresses: {
      1: '0x0589e281d35ee1acf6d4fd32f1fba60effb5281b', // https://analytics.sushi.com/pairs/0x0589e281d35ee1acf6d4fd32f1fba60effb5281b
    },
    tokenAddresses: {
      1: '0xbc6da0fe9ad5f3b0d58160288917aa56653660e9',
    },
    name: 'Alchemix USD',
    symbol: 'alUSD-ETH SUSHI LP', // needs double-check
    tokenSymbol: 'alUSD',
    icon: '🚜',
  },
]
