function index(req, abc) {
  var places = [
    {name: 'ga'},
    {name: 'home'}
  ]
  // res.send(JSON.stringify(places)) // manually
  abc.json(places) // feature from express
}

module.exports = {
  index: index
};