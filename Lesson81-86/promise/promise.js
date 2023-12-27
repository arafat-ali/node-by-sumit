const paymentStatus = true;
const marks = 90;

function enroll(){
    console.log('Enrolment process is in progress');

    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(paymentStatus){
                resolve()
            }
            else{
                reject('Payment Failed');
            }
        }, 2000);
    })
    return promise;
}

function progress(){
    console.log("Course is running")

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(marks>=80) resolve();
            else{
                reject('You could not get proper marks to get certificate')
            }
        }, 3000)
    })
    return promise;

}

function getCertificate(){
    console.log('Certification is in progress')

    const promise = new Promise((resolve)=> {
        setTimeout(()=>{
            resolve('Congrats! You have got certificate');
        }, 1000)
    })
    return promise;

}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value);
    })
    .catch((err)=>{
        console.log(err)
    })
