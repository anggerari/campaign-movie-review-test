module.exports = {
	apps : [{
		name        : "sd-backend-screening-test",
		script      : "./bin/www", // path needs to be relative from ecosystem.config.js
		watch       : false, // any changes to app folder will get pm2 to restart app
		env         : {
			"NODE_ENV": "production", // define env variables here
		}
	}]
}