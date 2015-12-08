import Promise from 'bluebird'

export default class Controller {
	constructor() {
		
	}
	
	stuff() {
		console.log('stuff before')
		return Promise.delay(1000).then( function() {
			console.log('stuff after 1 sec')
		})
	}
}