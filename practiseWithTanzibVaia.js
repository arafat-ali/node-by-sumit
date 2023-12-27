const test = () =>{

    a = [Promise.reject('Some error')];

    try{
        a[0].then()
    }
    catch(error){
        console.log(error)
    }
}

test()