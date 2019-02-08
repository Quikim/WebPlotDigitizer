#!/bin/bash

# Code JS
cat javascript/core/*.js > wpd_node.js
cat javascript/core/AEalgos/*.js >> wpd_node.js
cat javascript/core/axes/*.js >> wpd_node.js

# WebAssembly
printf "\nlet Module = require(\"./wasm.js\");\n" >> wpd_node.js

# Export Module
printf "\nmodule.exports = { wpd: wpd };\n" >> wpd_node.js

