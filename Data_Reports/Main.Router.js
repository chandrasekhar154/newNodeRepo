require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const MainLogic = require('./MainLogic');

const router = express.Router({
	mergePrams: true
});

router.get('/getCustomers', async (req, resp) => {
	try {
		let useCase = MainLogic.create(req, resp);
		await useCase.getCustomers();
	}
	catch (err) {
		let code = err.code ? err.code : 400
        resp.json({ status : code , message: err.message });
	}
});

router.get('/getCustomerById/:Id', async(req, resp) => {
	try {
		let useCase = MainLogic.create(req, resp);
		await useCase.getCustomerById();
	}
	catch(err){
		let code = err.code ? err.code : 400;
		resp.status(code).json({ message : err.message });
	}
});
router.post('/addCustomer', async(req, resp) => {
	try {
		let useCase = MainLogic.create(req, resp);
		await useCase.addCustomer();
	}
	catch(err){
		let code = err.code ? err.code : 400;
		resp.status(code).json({ message : err.message });
	}
});

router.put('/updateCustomer/:Id', async(req, resp) => {
	try {
		let useCase = MainLogic.create(req, resp);
		await useCase.updateCustomer();
	}
	catch(err){
		let code = err.code ? err.code : 400;
		resp.status(code).json({ message : err.message });
	}
});
router.delete('/deleteCustomer/:Id', async(req, resp) => {
	try {
		let useCase = MainLogic.create(req, resp);
		await useCase.deleteCustomer();
	}
	catch(err){
		let code = err.code ? err.code : 400;
		resp.status(code).json({ message : err.message });
	}
});

// Testing for library Methods.
 router.get('/testExecuteQuery' , async(req, resp) => {
	try {
		let useCase = MainLogic.create(req, resp);
		await useCase.testExecuteQuery();
	}
	catch(err) {
		let code = err.code ? err.code : 400;
		resp.status(code).json({ message : err.message });
	}
 });

module.exports = router;