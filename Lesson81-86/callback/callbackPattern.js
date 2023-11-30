const isEnrolled = true;
const marks = 70;
function enroll(callback){
    console.log('Enroll process is going...');

    setTimeout(()=>{
        if(isEnrolled){
            callback()
        }
        else console.log('Enrollment failed')
    }, 2000)
}


function progress(callback){
    console.log('Course is progressing');
    setTimeout(()=>{
        if(marks>=80){
            callback()
        }
        else{
            console.log('You could not get proper marks to get certificate')
        }
    }, 3000)
}

function getCertificate(){
    setTimeout(()=>{
        console.log('Congrates! You have got the Certificate')
    })
}

enroll(()=>{
    progress(getCertificate)
})