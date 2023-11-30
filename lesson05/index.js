const School = require('./SchoolEvent.js')

const school = new School();
school.on('bellRing', ({period, msg})=>{
    console.log(`Period ${period} ${msg}`);
})

school.startPeriod();

