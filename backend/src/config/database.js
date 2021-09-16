const mongoose = require ("mongoose")
mongoose.Promise = global.Promise
module.exports = mongoose.connection.openUri('mongodb://localhost/mymoney')