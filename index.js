var Horseman = require('node-horseman')
var path = require('path')
var fs = require('fs')
var horseman = new Horseman()




horseman
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open('https://www.fanfiction.net/s/12380854/1/Magical-Girl-Escalation-Taylor')
  // .type('input[name="q"]', 'github')
  // .click('[name="btnK"]')
  // .keyboardEvent('keypress', 16777221)

	// .type('#lst-ib', 'josh')
	// .keyboardEvent('keypress',16777221)
	//
	// .waitForSelector('h3')
	//
	// .on("loadFinished", function() {
  //   horseman.screenshot(path.resolve(__dirname, '123.png')).then(function(){
  //     console.log("done");
  //   }, function(e){
  //     console.error(e);
  //   });
  // })
	// .screenshot(path.resolve(__dirname, '123.png'))
	// .count('h3')
	// .text('h3')
	// .waitForSelector('#lst-ib')
  // .count('#lst-ib')
	// .text('#lst-ib')
  // .log() // prints out the number of results
	.waitForSelector('#storytextp')
	.html('#storytextp')
	.then((html) => {
		fs.writeFile(path.resolve(__dirname, 'test.html'), html, function(err) {
		    if(err) {
		        return console.log(err);
		    }
				// console.log(path.resolve(__dirname, '123.png'));
		    console.log("The file was saved!");
		});
	})
  .close();
