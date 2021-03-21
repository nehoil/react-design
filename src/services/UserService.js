import { storageService } from "./StorageService"
import { makeId } from "./UtilService"

const STORAGE_KEY = 'user_db'

var loggedInUser = storageService.load(STORAGE_KEY) || null

export default {
  getUser,
  signup,
  getEmptyUser,
  addMove,
  loggedInUser,
  getMovesById,
  getMoves
}

function addMove(contact, amount){
  const { _id: toId, name: to } = contact
  const move = {
    toId,
    to,
    amount,
    at: new Date()
  }
  loggedInUser.coins -= amount
  loggedInUser.moves.push(move)
  storageService.store(STORAGE_KEY, loggedInUser)
  return move
}

function getMovesById(id) {
 return loggedInUser.moves.filter(move => move.toId === id)
}

function getMoves() {
 return loggedInUser.moves
}

function signup(name) {
  loggedInUser = {
    _id: makeId(5),
    name,
    coins: 100,
    moves: []
  }
  storageService.store(STORAGE_KEY, loggedInUser)
}

function getEmptyUser() {
  return { _id: makeId(5), name: '', coins: 100, moves: [] }
}

function getUser() {
  return loggedInUser
}