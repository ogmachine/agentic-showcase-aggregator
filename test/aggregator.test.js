import test from "node:test";
import assert from "node:assert/strict";
import { resources } from "../src/resources.js";
import { filterResources, sortResources, validateResources } from "../src/aggregator.js";

test("all resources satisfy the schema", () => {
  assert.deepEqual(validateResources(resources), []);
});

test("query and taxonomy filters are composable", () => {
  const result = filterResources(resources, { useCase: "coding", type: "workflow" });
  assert.ok(result.length > 0);
  assert.ok(result.every((r) => r.use_case.includes("coding") && r.type.includes("workflow")));
});

test("results rank by reusability by default", () => {
  const result = sortResources(resources);
  for (let i = 1; i < result.length; i++) assert.ok(result[i - 1].reusability_score >= result[i].reusability_score);
});
