console.log('hello to Nodejs');

//This is user subscription pattern
process.stdin.on('data', function (input) {
	console.log("You typed1 :"+input.toString());
	//process.exit();
});

setTimeout(hello,3000);
process.stdin.on('data', function (input) {
	console.log("You typed2 :"+input.toString());
});

process.stdin.on('data', function (input) {
	console.log("You typed3 :"+input.toString());
});