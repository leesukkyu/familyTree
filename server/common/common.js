var mongoose = require('mongoose');
var INI = require('./ini');

var result = {
    db: {
        connect: function () {
            mongoose.connect(INI.DB_URL,
                {
                    useNewUrlParser: true,
                }).catch((error) => { 
                    console.log('디비연결 에러'); 
                });
            return mongoose;
        },
        close: function () {
            mongoose.connection.close();
        }
    }
}


module.exports = result