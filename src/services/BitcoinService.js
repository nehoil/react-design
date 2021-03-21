import axios from 'axios'
import { storageService } from './StorageService';

export default {
  getRate,
  getMarketPrice,
  getAvgBlockSize,
  getTradeVolume,
  getConfirmedTransactions,
  getYesterdayRate
}

const gRate = storageService.load('rate') || null
const gTradeVolume = null
const gAvgBlockSize = null
const gMarketPrice = null
const gConfirmedTransactions = null
const gYesterdayRate = storageService.load('yesterday_rate') || null
// const gMarketPrice = storageService.load('market_price') || null

function wait(ms) {
  return new Promise( (resolve) => {setTimeout(resolve, ms)});
}


async function getRate(coins = 1) {
  if (gRate) return gRate
  try {
    const rate = await (await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)).data
    localStorage.setItem('rate', rate)  
    return rate
    } catch(err) {
      console.log('got error in BTCSERVICE, err:', err);
  }
}
async function getYesterdayRate() {
  if (gYesterdayRate) return gYesterdayRate
  try {
    const rate = await (await axios.get(`https://api.blockchain.info/charts/market-price?timespan=12hours&format=json&cors=true`)).data
    localStorage.setItem('yesterday_rate', rate.values[0].y)
    return rate.values[0].y
    } catch(err) {
      console.log('got error in BTCSERVICE, err:', err);
  }
}

async function getMarketPrice() {
  if (gMarketPrice) return gMarketPrice
  try {
    const res = await (await axios.get(`https://api.blockchain.info/charts/market-price?timespan=14days&format=json&cors=true`)).data
    await  wait(2000)
    localStorage.setItem('market_price', res.values)
    return res.values
  } catch(err) {
    console.log('got error in BTCSERVICE, err:', err);
  }
}

async function getAvgBlockSize() {
  if (gAvgBlockSize) return gAvgBlockSize
  try {
    const res = await (await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=2months&format=json&cors=true`)).data
    localStorage.setItem('avg_block_size', res.values)
    return res.values
  } catch(err) {
    console.log('got error in BTCSERVICE, err:', err);
  }
}
async function getTradeVolume() {
  if (gTradeVolume) return gTradeVolume
  try {
    const res = await (await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=60days&format=json&cors=true`)).data
    localStorage.setItem('trade_volume', res.values)
    return res.values
  } catch(err) {
    console.log('got error in BTCSERVICE, err:', err);
  }
}

async function getConfirmedTransactions() {
  if (gConfirmedTransactions) return gConfirmedTransactions
  try {
    const res = await (await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=1months&format=json&cors=true`)).data
    localStorage.setItem('confirmed_transactions', res.values)
    return res.values
  } catch(err) {
    console.log('got error in BTCSERVICE, err:', err);
  }
}
