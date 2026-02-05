---
applyTo: "./server/views/dashboard/**/*.ts"
---

# ReactJS Development Guidelines\*

## Purpose & Scope

This file defines our reactjs coding conventions for Copilot code review.

---

## File Naming Conventions

### Components

- PascalCase for component file names.

- All models shall should finish with `.model.js` or `.model.ts` suffix.
  With name of the component in PascalCase.

- All hooks for each component if needed should `use` prefix.

## Variable Naming Conventions

- Use PascalCase for component names.

- Use PascalCase for model names. With a `T` prefix for types.
  Prefer types over interfaces.

- Use camelCase for variable and function names.

- Custom hooks if general helpers should use `use` prefix. Should be in a `/hooks/` folder.

- Use descriptive names that convey the purpose of the variable or function.

- Avoid abbreviations unless they are widely understood.

- Use uppercase snake_case for constants. For example: `MAX_RETRY_ATTEMPTS`

- Use camelCase for regular variables and function names. For example: `fetchData`

## Style Guidelines

- Avoid magic strings and numbers; use constants or enums instead.

- Use template literals for string concatenation.

- Only use arrow functions

- Prefer functional programming techniques over imperative programming.

- Use "const" by default, and "let" only when reassignment is necessary.

## Code Style

- Use 2 spaces for indentation.
- Use single quotes for strings, except when using template literals.
- Always use semicolons at the end of statements.
- Place opening braces on the same line as the control statement.
- Limit lines to a maximum of 80 characters.
- Always use brackets for control structures, even for single statements.

## Error Handling

- [Add rules here.]

## Testing

- All components should have associated unit tests.
- All helpers should have associated unit tests.
- All hooks should have associated unit tests.

---

## [Optional] Task-Specific or Advanced Sections

### Framework-Specific Rules

### Advanced Tips & Edge Cases
