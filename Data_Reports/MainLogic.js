const connectionPool = require('./ConfigurationLogic');
const MySQLData = require('../Library/MySQLData');

// const mysql = require('mysql');
module.exports = class MainLogic extends MySQLData{

	constructor (req, resp) {
		super();
		this.req = req;
		this.resp = resp;
	}

	async getCustomers() {
		try {
			console.log("Try in Main Logic.. Hello world..");
			connectionPool.connect((err) => {
				if(err) throw err;
				console.log("connected..");
				let helloWorld = MySQLData.create();
				helloWorld.helloWorld();
				let selectQuery = "SELECT * FROM `customer_master` order by customer_id";
				connectionPool.query(selectQuery, (err, result) => {
					if(err) throw err;
					// console.log(result);
					this.resp.json({ 'statusCode' : 200, 'result': result });
				})
			});
		}
		catch (err) {
			console.log("Catch in Main Logic.. Hello world.." + err);
		}
	}

	async getCustomerById() {
		try {
			console.log("Try in Main Logic.. Hello world..");
			console.log(this.req.params.Id);
			connectionPool.connect((err) => {
				if(err) throw err;
				console.log("connected..");
				let selectQuery = "SELECT * FROM `doctors_availability` where `DoctorAvailabilityKey` ='"+ this.req.params.Id + "' ";
				connectionPool.query(selectQuery, (err, result) => {
					if(err) throw err;
					// console.log(result);
					this.resp.json({ 'statusCode' : 200, 'result': result });
				})
			});
		}
		catch(err) {
			console.log("Catch in Main Logic.. Hello world.." + err);
		}
	}

	async addCustomer() {
		try {
			console.log("Try in Main Logic.. Hello world..");
			console.log(this.req.body);
			
			connectionPool.connect((err) => {
				if(err) throw err;
				console.log("connected..");
				let selectQuery = "INSERT INTO `test_table` (firstName, lastName) VALUES ('"+ this.req.body.firstName +"', '"+ this.req.body.lastName +"')";
				connectionPool.query(selectQuery, (err, result) => {
					if(err) throw err;
					this.resp.json({ 'statusCode' : 200, 'result': result });
				})
			});
		}
		catch(err) {
			console.log("Catch in Main Logic.. Hello world.." + err);
		}
	}
	
	async updateCustomer() {
		try {
			console.log("Try in Main Logic.. Hello world..");
			console.log(this.req.body);
			console.log(this.req.params);
			connectionPool.connect((err) => {
				if(err) throw err;
				console.log("connected..");
				let selectQuery = "update `test_table` set `firstName` = '"+ this.req.body.firstName +"', `lastName` = '"+ this.req.body.lastName +"' where `id` = '"+ this.req.params.Id +"'";
				connectionPool.query(selectQuery, (err, result) => {
					if(err) throw err;
					this.resp.json({ 'statusCode' : 200, 'result': result });
				})
			});
		}
		catch(err) {
			console.log("Catch in Main Logic.. Hello world.." + err);
		}
	}

	async deleteCustomer() {
		try {
			console.log("Try in Main Logic.. Hello world..");
			console.log(this.req.params);
			connectionPool.connect((err) => {
				if(err) throw err;
				console.log("connected..");
				let selectQuery = "DELETE FROM `test_table` WHERE id='"+ this.req.params.Id +"'";
				connectionPool.query(selectQuery, (err, result) => {
					if(err) throw err;
					this.resp.json({ 'statusCode' : 200, 'result': result });
				})
			});
		}
		catch(err) {
			console.log("Catch in Main Logic.. Hello world.." + err);
		}
	}

	async testExecuteQuery() {
		try {
			console.log("Try in Main Logic.. Hello world..");
			let helloWorld = MySQLData.create();
			helloWorld.helloWorld();
			
		}
		catch(err) {
			
		}
	}


	static create(req, resp) {
		let useCase = new MainLogic(req, resp);
		return useCase;
	}
}