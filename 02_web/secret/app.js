console.log('ready')

var secretMessage = 'NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG.'

function decodeLetter(letter) {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  var shiftedLetters = 'DEFGHIJKLMNOPQRSTUVWXYZABC'.split('')

  return letters[shiftedLetters.indexOf(letter)]
}

function decodeMessage(message) {
  return message
    .split('')
    .map(decodeLetter)
    .join('')
}

