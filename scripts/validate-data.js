import { resources } from "../src/resources.js";
import { validateResources } from "../src/aggregator.js";

const errors = validateResources(resources);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${resources.length} resources successfully.`);
}
