module.exports = class MySQLData {
    constructor() {

    }

    helloWorld() {
        console.log(".. Hello World..");
    }

    static create() {
        let useCase = new MySQLData();
        return useCase;
    }
}