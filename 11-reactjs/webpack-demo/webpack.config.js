// we will setup our automation here

// scan all you files from a starting point you specify for requires & import

// bundles everything together to a destination you specify

// thats the file you add with a single script tag

var path = require('path')
const config = {
  entry: {
    app: './app'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js' 
  }
}

module.exports = config // config is an obj