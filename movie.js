

var fs = require("fs");

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.writeFile("random.txt", "spotify-this-song,I Want it That Way", function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("random.txt was updated!");

});
