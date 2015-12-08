import Controller from './controllers/Controller'

(function() {
	async function a() {
		var controller = new Controller()
		await controller.stuff()
	}
	
	a().then()
	console.log(Controller)
})()
