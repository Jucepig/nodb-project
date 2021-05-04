const e = require("express")

let shows = [
   {
     id : 0,
     title : "One Piece",
     genre : "Anime",
     minsPerEp: 23,
     numOfEps : 970
   }
]

let id = 0

module.exports = {
  getShows : (req, res) => {
    res.status(200).send(shows)
  },

  postShow : (req, res) => {
    const {title, genre, minsPerEp, numOfEps} = req.body
    if(!title || !genre || !minsPerEp || !numOfEps) {
      return res.status(400).send("The fields 'title', 'genre', 'numOfEps', 'minsPerEp' are required to add a new show.")
    }
    id++
    let newShow = {id, title, genre, minsPerEp, numOfEps}
    shows = [...shows, newShow]
     res.status(200).send(shows)
  },

  putShow : (req, res) => {
    const {title, genre, minsPerEp, numOfEps} = req.body
    const {id} = req.params

    const foundIndex = shows.findIndex((el) => {
      return el.id === +id
    })

    shows[foundIndex] = {
      id: +id,
      title: title || shows[foundIndex].title,
      genre: genre || shows[foundIndex].genre,
      minsPerEp: minsPerEp || shows[foundIndex].minsPerEp,
      numOfEps: numOfEps || shows[foundIndex].numOfEps
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