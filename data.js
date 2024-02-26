const fs = require("fs")

const addData = (id, fname, lname , age, city) => {
    const allData = loadData()

    const duplicatedId = allData.filter((obj) => {
        return obj.id === id
    })

    if(duplicatedId.length == 0){
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age, 
            city: city
        })
        saveData(allData)
        console.log("Added Successfully") 
    }
    else{
        console.log("This ID is already in use!!")
    }
}

const deleteData = (id) => {
    const allData = loadData();

    const FoundedId = allData.filter((obj) => {
        return obj.id !== id
    })
    if(FoundedId.length !== allData.length){
        saveData(FoundedId)
        console.log('Deleted Successfully')
    }
    else{
        console.log('The user with this Id does not exist')
    }
    // console.log(FoundedId);

    // if(FoundedId.length != 0){
    //     allData.pop({
    //         id: id
    //     })
    //     saveData(allData)
    //     console.log("The data with this ID is deleted successfully")
    // }
    // else{
    //     console.log("the data with This ID does not exist")
    // }
}

const readData = (id) => {
    const allData = loadData()

    const read = allData.find((obj) => {
        return obj.id === id
    })

    if(read){
        console.log(read)
    }
    else{
        console.log('There are no data for this ID')
    }
}

const listData = () => {
    const allData = loadData()

    allData.forEach((obj) => {
        console.log(obj.fname, obj.age, obj.city)
    })
}

const loadData = () => {
    try{
        const dataJson = fs.readFileSync("myData.json").toString()
        return JSON.parse(dataJson)
    }
    catch{
        return []
    }
}

const saveData = (allData) => {
    const dataObj =  JSON.stringify(allData)
    return fs.writeFileSync("myData.json", dataObj)
}

module.exports = {
    addData,
    deleteData,
    readData,
    listData
}