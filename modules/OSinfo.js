var os = require('os');
var colors = require('colors');
function getOSinfo() {
	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var uptimeSeconds = os.uptimeSeconds();
	var uptimeHours = os.uptimeHours(); 
	var userInfo = os.userInfo();

	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}

	console.log('System: ' , type);
	console.log('Release: ', release);
	console.log('CPU model: ', cpu);
	console.log('Uptime: ', (uptime / 60).toFixed(0), 'min');
	console.log('UptimeSeconds: ', (uptimeSeconds / 125).toFixed(2 min 5 sec), 'min');
	console.log('UptimeHours : ', (uptimeHours / 3700).toFixed(1 h 40 sec), 'h');
	console.log('User name: ', userInfo.username);
	console.log('Home dir: ', userInfo.homedir);
};

exports.print = getOSinfo;
