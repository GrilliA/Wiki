# To do

- [ ] Remove auth template

## Login

## Sign up

- [ ] Add Header and Footer for the login page
  - Branch: "dashboard/login_layout"
  - Message: "Add layout for the login page"

- [ ] Add translations for login page, it and eng
  - Branch: "dashboard/login_translations_page"
  - Message: "[dashboard][feature] add translations to the login page"

- [ ] Add types for all the login related functions
  - Branch: "dashboard/login_types"
  - Message: "[dashboard][feature] add types to all the functions related to the login feature"

- [ ] Add meta data to the login page
  - Branch: "dashboard/login_metadata"
  - Message: "[dashboard][feature] add metadata to login page: title, description and etch"
  - Steps:
    - [ ] Understand all the metadata needed for the website
    - [ ] add the description text and the others if needed
    - [ ] Structure page component like the other components
    - [ ] Add the Page component props to all the auth template and the page template

- [ ] Add tests for all the functions involved with the login page
  - Branch: "dashboard/signup_test"
  - Message: "[dashboard][feature] add tests for all functions related to the signup page"

- [ ] Add mock for the signup
  - Branch: "dashboard/mock_signup"
  - Message: "[dashboard][feature] add mock data for the login page"

## Email Verification

## ForgottenPassword

- [ ] Add page components props to all the pages (title, description and etch)
- [ ] Add all the pages, with only tests, mocked data
  - [ ] Make all the pages works like before, even with only mocks
- [ ] Add all te ts as translations
- [ ] All forms should be a sort of modals
- [ ] Have a config folder for:
  - [ ] Wiki form structure
  - [ ] selectOptions
  - [ ] user default settings
  - [ ] System options in general

- [ ] As as less tables as possible in the backend, the structure should be dictated by the backend code

- [ ] Make it possible for user to change language (with i8n)
