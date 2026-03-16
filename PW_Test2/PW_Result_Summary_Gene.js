//You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`,
// where status can be `"passed"`, `"failed"`, or `"skipped"`.
//  Write a JavaScript function that prints a summary report with total steps, passed count, failed count, skipped count, total duration, and 
// a comma-separated list of failed step names.

// Explanation : The function loops through the array, counts each status, adds durations, and collects failed step names.

// Input : results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]

//Output : Total Steps: 3 Passed: 1 Failed: 1 Skipped: 1 Total Duration: 1100ms Failed Steps: fill form

const results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]

function playwrightResult(name, status, duration) {
    //return `name: "${name}", status: "${status}", durationMs: "${duration}"`;

    if (name === )
}

// Arguments
//playwrightResult("open Login", "passed", 400);
//playwrightResult("open Login", "passed", 400);
//playwrightResult("open Login", "passed", 400);
console.log(playwrightResult(results));