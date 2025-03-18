// build: Changes that affect the build system or external dependencies (e.g., npm, yarn, webpack, gulp).
// ci: Changes to CI/CD configurations (e.g., GitHub Actions, Travis CI, CircleCI).
// docs: Documentation updates only (e.g., README.md, inline comments).
// feat: Introducing a new feature.
// fix: Fixing a bug.
// perf: Improving performance (e.g., optimizing code execution).
// refactor: Changing code without adding a feature or fixing a bug (e.g., improving structure, renaming variables).
// style: Code formatting or stylistic changes without affecting functionality (e.g., whitespace, semicolons, linting).
// test: Adding or fixing tests (unit, integration, e2e).
// chore: Miscellaneous tasks that don’t fit into the above (e.g., updating configs, Husky setup).
// revert: Reverting a previous commit.

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [2, "always", 100],
    "header-max-length": [2, "always", 100],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "translation",
        "security",
        "changeset",
      ],
    ],
  },
};
