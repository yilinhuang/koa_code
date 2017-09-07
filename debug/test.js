// 标签  ， debug 出处
var debug = require('debug')('http'),
// var debug2 = require('debug')('https')
    http = require('http'),
    name = 'My App'

debug('booting %o', name)
http.createServer((req, res) => {
    debug(req.method + '' + req.url)
    res.end('hello\n')
}).listen(8080, function() {
    debug('listening')
})
require('./work')