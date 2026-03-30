// Real time ex

let config = {};
config.browser = "Chrome";
config.timeout = 1000;
config.timeout = 5000; // latest will be considered
console.log(config);

delete config.browser;
console.log(config);

