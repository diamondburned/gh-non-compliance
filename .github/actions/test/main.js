const exec = require('@actions/exec')

// able to get the input here.
console.log("nodejs: kebab-cased is", process.env["INPUT_KEBAB-CASED"])
console.log("nodejs: camel-cased is", process.env["INPUT_CAMEL_CASED"])
// exec the shell script with the same env
exec.exec("main.sh")
