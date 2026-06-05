# To do

- [ ] Remove auth template

## Login

- [x] Add Header and Footer for the login page
  - Branch: "dashboard/login_layout"
  - Message: "Add layout for the login page"

- [x] Add translations for login page, it and eng
  - Branch: "dashboard/login_translations_page"
  - Message: "[dashboard][feature] add translations to the login page"

- [x] Add types for all the login related functions
  - Branch: "dashboard/login_types"
  - Message: "[dashboard][feature] add types to all the functions related to the login feature"

- [x] Add meta data to the login page
  - Branch: "dashboard/login_metadata"
  - Message: "[dashboard][feature] add metadata to login page: title, description and etch"
  - Steps:
    - [x] Understand all the metadata needed for the website
    - [x] add the description text and the others if needed
    - [x] Structure page component like the other components
    - [x] Add the Page component props to all the auth template and the page template

- [x] Add tests config
  - Branch: "dashboard/tests"
  - Message: "[dashboard][feature] add tests config"

- [x] Add tests for all the functions involved with the login page
  - Branch: "dashboard/login_test"
  - Message: "[dashboard][feature] add tests for all functions related to the login page"

- [x] Set up mock data with msw
  - Branch: "dashboard/mock_data"
  - Message: "[dashboard][feature] add mock data config"

- [x] Add mock for the login
  - Branch: "dashboard/mock_login"
  - Message: "[dashboard][feature] add mock data for the login page"

## Sign up

## Email Verification

## ForgottenPassword

- [ ] Add page components props to all the pages (title, description and etch)
- [ ] Add all the pages, with only tests, mocked data
  - [ ] Make all the pages works like before, even with only mocks
- [ ] Add all texts as translations
- [ ] All forms should be a sort of modals
- [ ] Have a config folder for:
  - [ ] Wiki form structure
  - [ ] selectOptions
  - [ ] user default settings
  - [ ] System options in general

- [ ] As as less tables as possible in the backend, the structure should be dictated by the backend code

- [ ] Make it possible for user to change language (with i8n)
