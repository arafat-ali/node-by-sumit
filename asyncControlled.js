const takeOrder = (customer, callback) =>{
    console.log(`Take order for ${customer}`);
    callback()
}


const processOrder = (customer, callback)=>{
    console.log(`Processing order for ${customer}`);
    setTimeout(()=>{
        console.log('Cooking is processing');
        console.log(`Order processed for ${customer}`);
        callback();
    }, 3000)
}


const completeOrder = () =>{
    console.log(`Completed order for ${customer}`)
}

takeOrder('Customer-Arafat', (customer)=>{
    processOrder(customer, (customer)=>{

    })
})