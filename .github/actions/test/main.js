const child_process = require("node:child_process")

// able to get the input here.
console.log("nodejs: camel-cased is", process.env["INPUT_CAMEL_CASED"])
console.log("nodejs: kebab-cased is", process.env["INPUT_KEBAB-CASED"])
// exec the shell script with the same env
child_process.execSync(".github/actions/test/main.sh", { env: process.env, stdio: "inherit" })
