const yargs = require("yargs")
const data = require("./data.js");

yargs.command({
    command: "add",
    describe: "add an item",
    builder: {
        fname: {
            describe: "This is the first name",
            demandOption: true,
            type: "string"
        },
        fname: {
            describe: "This is the last name",
            demandOption: true,
            type: "string"
        }
    },
    handler:(x) => {
        data.addData(x.id, x.fname, x.lname, x.age, x.city)
    }
})

yargs.command({
    command: "delete",
    describe: "delete an item",
    handler:(x) => {
        data.deleteData(x.id)
    }
})

yargs.command({
    command: "read",
    describe: "read an item",
    handler:(x) => {
        data.readData(x.id)
    }
})

yargs.command({
    command: "list",
    describe: "list an item",
    handler:() => {
        data.listData()
    }
})

yargs.parse()