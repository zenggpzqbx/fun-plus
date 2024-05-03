function pick(data, prop){
    let result = {}
    let propOption = []
    if(typeof prop === 'string'){
        propOption.push(prop)
    }else if(Array.isArray(prop)){
        propOption = prop
    }
    propOption.forEach(item => {
        if(item in data){
            result[item] = data[item]
        }else{
            result[item] = undefined
        }
    })
    return result;
}
export default pick