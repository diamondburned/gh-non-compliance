const exec = require('@actions/exec')

// able to get the input here.
console.log("nodejs: kebab-cased is", process.env["INPUT_KEBAB-CASED"])
// exec the shell script with the same env
exec.exec("./.github/actions/test/main.sh")
