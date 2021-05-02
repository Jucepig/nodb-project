const e = require("express")

let shows = [
   {
     id : 0,
     title : "someShow",
     genre : "someGenre",
     numOfEps : 1, 
     minsPerEp: 22,
   } 
]

let id = 0

module.exports = {
  getShows : (req, res) => {
    res.status(200).send(shows)
  },

  postShow : (req, res) => {
    const {title, genre, numOfEps, minsPerEp} = req.body
    if(!title || !genre || !numOfEps || !minsPerEp) {
      return res.status(400).send("The fields 'title', 'genre', 'numOfEps', 'minsPerEp' are required to add a new show.")
    }
    id++
    let newShow = {id, title, genre, numOfEps, minsPerEp}
    shows = [...shows, newShow]
     res.status(200).send(shows)
  },

  putShow : (req, res) => {
    const {title, genre, numOfEps, minsPerEp} = req.body
    const {id} = req.params
    console.log(typeof(reqId))
    const foundIndex = shows.findIndex((el) => {
      return el.id === +id
    })
    console.log(foundIndex)
    shows[foundIndex] = {
      id: +id,
      title: title || shows[foundIndex].title,
      genre: genre || shows[foundIndex].genre,
      numOfEps: numOfEps || shows[foundIndex].numOfEps,
      minsPerEp: minsPerEp || shows[foundIndex].minsPerEp
    }
  
    res.status(200).send(shows)
  },

  deleteShow : (req,res) => {
    const {id} = req.params
    shows = shows.filter((el) => {
      return el.id !== +id
    })
    res.status(200).send(shows)
  }
}