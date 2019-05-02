var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
	var input = process.stdin.read();
	var instruction = input.trim();

	if(input !== null)   {
		return };

		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
      		break;
			case '/sayhello':
				process.stdout.write('hello!\n');
			break;
			case '/info':
    			process.stdout.write(process.versions.node);
    			process.stdout.write(process.env.LANG);
				process.exit();
			case '/getOSinfo':
				OSinfo.print();
			default:
				process.stderr.write('Wrong instruction!\n');
		};
});

OSinfo.print();