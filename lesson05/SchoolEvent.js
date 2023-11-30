const EventEmmitter = require('events');

class School extends EventEmmitter{
    
    startPeriod(){
        console.log('School Started')

        setTimeout(()=>{
            this.emit('bellRing', {period: 'first', msg: 'has ended'});
        }, 2000)
    }
}

module.exports = School;