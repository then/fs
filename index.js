var fs = Object.create(require('fs'))
var Promise = require('promise')

module.exports = exports = fs
for (var key in fs)
  if (!(typeof fs[key] != 'function'
      || key.match(/Sync$/)
      || key.match(/^[A-Z]/)
      || key.match(/^create/) 
      || key.match(/^(un)?watch/)
      ))
    fs[key] = Promise.denodeify(fs[key])
