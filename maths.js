const nateAdd = (num1, num2) =>{
    return num1 + num2;
    }
    
    const nateSubtract = (num1, num2) =>{
        return num1 - num2;
    }
    
    
    const nateDivide = (num1, num2) =>{
        return num1 / num2;
    }
    
    const nateMultiple = (num1, num2) =>{
        return num1 * num2;
    }

    const copyArray = (array) => {
        return [... array];
    }



module.exports = {
    nateAdd,
    nateSubtract,
    nateDivide,
    nateMultiple,
    copyArray
}


