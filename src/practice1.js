const parseData = (input) =>{
    let columns = [];
    input.column.map((eachLine)=>{columns.push(eachLine.name)});

    return input.data.map((person)=>{return Object.assign({},...(person.map((value,index)=>{
        return {[columns[index]] : value}
    })))})
}

export { parseData };
