const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        console.log(message)
    
        this.emit('MessagedLogged',{
            id: 1,
            url: url
        
        });
    }
}

var url = 'http://myloggger.io/log';

module.exports = Logger;

