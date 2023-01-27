export default () => ({
  locale: "",
  isLoggedIn: !!localStorage.getItem("token") || null,
  userEmail: null,
  headerAccountData: null,
  isKYC: false,
  balance: {},
  locked_balance: {},
  coins: null,
  coinsCommons: {
    blockchainDefinitions: null,
    tokenTxExplorers: null,
  },
  balanceSum: 0,
  affiliatestatus: {},
  affiliatebonuses: {},
  transactions: [],
  wallethistory: {},
  walletTopupsHistory: {},
  walletWithdrawalsHistory: {},
  walletTickerHistory: {},
  exchanges: [],
  orders: {},
  openorders: [],
  closedorders: {},
  openOrdersByPair: {},
  closedOrdersByPair: {},
  recenttrades: [],
  pairs: {},
  profile: {
    user: {},
  },
  store_list: [],
  store_info: [],
  order_list: [],
  order_info: [],
  payment_list: [],
  payment_info: {
    order: {},
    address: {},
  },
  stack: [],
  countriesList: [],
  userNotifications: [],
  currentPrecisions: null,
});