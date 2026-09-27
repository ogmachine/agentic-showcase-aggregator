export const REQUIRED_FIELDS = [
  "id", "title", "source_url", "platform", "source_category", "type",
  "use_case", "format", "adoption_mode", "interaction_mode", "architecture",
  "maturity", "audience", "tags", "summary", "reusable_blocks", "license",
  "last_verified", "verification_status", "reusability_score", "notes"
];

export const ENUMS = {
  adoption_mode: ["full", "partial", "hybrid", "combined"],
  maturity: ["emerging", "mixed", "production"],
  verification_status: ["url-reachable-pending-manual-review", "manually-verified", "stale", "rejected"]
};

const asArray = (value) => Array.isArray(value) ? value : [];

export function validateResource(resource, index = 0) {
  const errors = [];
  for (const field of REQUIRED_FIELDS) {
    if (resource[field] === undefined || resource[field] === null || resource[field] === "") {
      errors.push(`entry ${index}: missing ${field}`);
    }
  }
  if (resource.source_url && !/^https?:\/\/[^\s]+$/i.test(resource.source_url)) {
    errors.push(`entry ${index}: source_url is not an absolute HTTP(S) URL`);
  }
  for (const field of ["type", "use_case", "format", "interaction_mode", "architecture", "audience", "tags", "reusable_blocks"]) {
    if (resource[field] !== undefined && asArray(resource[field]).length === 0) errors.push(`entry ${index}: ${field} must be non-empty`);
  }
  for (const field of ["adoption_mode", "maturity", "verification_status"]) {
    if (resource[field] && !ENUMS[field].includes(resource[field])) errors.push(`entry ${index}: invalid ${field}`);
  }
  if (!Number.isInteger(resource.reusability_score) || resource.reusability_score < 0 || resource.reusability_score > 100) {
    errors.push(`entry ${index}: reusability_score must be an integer from 0 to 100`);
  }
  return errors;
}

export function validateResources(resources) {
  const errors = [];
  const ids = new Set();
  resources.forEach((resource, index) => {
    errors.push(...validateResource(resource, index));
    if (ids.has(resource.id)) errors.push(`entry ${index}: duplicate id ${resource.id}`);
    ids.add(resource.id);
  });
  return errors;
}

export function normalizeString(value) {
  return String(value ?? "").trim().toLowerCase();
}

export function filterResources(resources, filters = {}) {
  return resources.filter((resource) => {
    const matches = (field, filter) => !filter || asArray(resource[field]).some((x) => normalizeString(x) === normalizeString(filter));
    const text = [resource.title, resource.platform, resource.summary, resource.notes, ...resource.tags, ...resource.use_case].join(" ").toLowerCase();
    return (!filters.query || text.includes(normalizeString(filters.query)))
      && (!filters.platform || normalizeString(resource.platform) === normalizeString(filters.platform))
      && matches("type", filters.type)
      && matches("use_case", filters.useCase)
      && matches("format", filters.format)
      && (!filters.adoptionMode || resource.adoption_mode === filters.adoptionMode)
      && (!filters.maturity || resource.maturity === filters.maturity);
  });
}

export function sortResources(resources, sortBy = "reusability_score") {
  return [...resources].sort((a, b) => sortBy === "title" ? a.title.localeCompare(b.title) : b.reusability_score - a.reusability_score);
}

export function adoptionRecommendation(resource) {
  if (resource.reusability_score >= 90) return "full or controlled hybrid adoption";
  if (resource.reusability_score >= 80) return "hybrid adoption";
  return "partial adoption with local validation";
}
