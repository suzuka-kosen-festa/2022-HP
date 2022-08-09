import { getRoles } from "@testing-library/react";

interface CustomMatchers<R = unknown> {
  toBeAtom: () => R;
  toBeMolecule: () => R;
  toBeOrganism: () => R;
  toBeTemplate: () => R;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    /* eslint-disable @typescript-eslint/no-empty-interface */
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
    /* eslint-enable @typescript-eslint/no-empty-interface */
  }
}

const groupRoles = new Set([
  "group",
  "article",
  "list",
  "term",
  "tablist",
  "tabpanel",
  "table",
  "rowgroup",
  "row",
  "combobox",
]);

const maybeLandmarkRoles = new Set(["banner", "contentinfo"]);

const landmarkRoles = new Set(["complementary", "form", "navigation", "region", "search"]);

const windowRoles = new Set(["alertdialog", "dialog"]);

const ignoresRoles = new Set(["generic", "presentation"]);

const includeGroupRole = (keys: string[]) => keys.map(key => groupRoles.has(key)).some(Boolean);

const includeMaybeLandmarkRole = (keys: string[]) => keys.map(key => maybeLandmarkRoles.has(key)).some(Boolean);

const includeLandmarkRole = (keys: string[]) => keys.map(key => landmarkRoles.has(key)).some(Boolean);

const includeWindowRole = (keys: string[]) => keys.map(key => windowRoles.has(key)).some(Boolean);

const includeMainRole = (keys: string[]) => keys.includes("main");

const getRoleKeys = (container: HTMLElement) => Object.keys(getRoles(container)).filter(key => !ignoresRoles.has(key));

const fail = (message: string) => ({ message: () => message, pass: false });

const toBeAtom = (container: HTMLElement): jest.CustomMatcherResult => {
  const keys = getRoleKeys(container);
  if (keys.length >= 2) {
    return fail("Atom should structed by single role.");
  }
  if (includeGroupRole(keys)) {
    return fail("Atom should not include group role.");
  }
  if (includeWindowRole(keys)) {
    return fail("Atom should not include window role.");
  }
  if (includeLandmarkRole(keys) || includeMaybeLandmarkRole(keys) || includeMainRole(keys)) {
    return fail("Atom should not include landmark role.");
  }
  return { message: () => "it Atom", pass: true };
};

const toBeMolecule = (container: HTMLElement): jest.CustomMatcherResult => {
  const keys = getRoleKeys(container);
  if (!(keys.length >= 2)) {
    return fail("Molecule should structed by multiple role.");
  }
  if (includeLandmarkRole(keys)) {
    return fail("Molecule should not include landmark role.");
  }
  if (includeWindowRole(keys)) {
    return fail("Molecule should not include window role.");
  }
  if (includeMainRole(keys)) {
    return fail("Molecule should not include main role.");
  }
  return { message: () => "it Molecule", pass: true };
};

const toBeOrganism = (container: HTMLElement): jest.CustomMatcherResult => {
  const keys = getRoleKeys(container);
  if (!(keys.length >= 2)) {
    return fail("Organism should structed by multiple role.");
  }
  if (!(includeLandmarkRole(keys) || includeMaybeLandmarkRole(keys) || includeWindowRole(keys))) {
    return fail("Organism should structed by landmark or window role.");
  }
  if (includeMainRole(keys)) {
    return fail("Organism should not include main role.");
  }
  return { message: () => "it Organism", pass: true };
};

const toBeTemplate = (container: HTMLElement): jest.CustomMatcherResult => {
  const keys = getRoleKeys(container);
  if (!includeMainRole(keys)) {
    return fail("Template should include main role.");
  }
  return { message: () => "it Template", pass: true };
};

expect.extend({ toBeAtom, toBeMolecule, toBeOrganism, toBeTemplate });
