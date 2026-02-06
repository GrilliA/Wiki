---
description: "Guidelines for writing Node.js and JavaScript code with Vitest testing"
applyTo: "**/*.ts"
---

# Code Generation Guidelines

## Coding standards

- Use JavaScript with ES2022 features and Node.js (20+) ESM modules
- Use Node.js built-in modules and avoid external dependencies where possible
- Ask the user if you require any additional dependencies before adding them
- Always use async/await for asynchronous code, and use 'node:util' promisify function to avoid callbacks
- Keep the code simple and maintainable
- Use descriptive variable and function names
- Do not add comments unless absolutely necessary, the code should be self-explanatory
- Never use `null`, always use `undefined` for optional values
- Prefer functions over classes

## Testing

- Use Vitest for testing
- Write tests for all new features and bug fixes
- Ensure tests cover edge cases and error handling
- NEVER change the original code to make it easier to test, instead, write tests that cover the original code as it is

## Documentation

- When adding new features or making significant changes, update the README.md file where necessary

## User interactions

- Ask questions if you are unsure about the implementation details, design choices, or need clarification on the requirements
- Always answer in the same language as the question, but use english for the generated content like code, comments or docs

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
