require('./algoProperties')
var multiHashing = require('multi-hashing');

var buf = new Buffer("savio")

//console.log(hash.toString())

console.log(algos['blake2b'].hash().apply(buf))
//console.log(multiHashing.blake2b(buf).toString('hex'))