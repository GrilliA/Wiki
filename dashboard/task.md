# To do

- [ ] Remove auth template

## Sign up

- [x] Add Header and Footer for the signup page
  - Branch: "dashboard/signup_layout"
  - Message: "[dashboard][feature] Add layout for the signup page"

- [ ] Add translations for signup page, it and eng
  - Branch: "dashboard/signup_translations_page"
  - Message: "[dashboard][feature] add translations to the signup page"

- [ ] Add types for all the signup related functions
  - Branch: "dashboard/signup_types"
  - Message: "[dashboard][feature] add types to all the functions related to the signup feature"

- [ ] Add meta data to the signup page
  - Branch: "dashboard/signup_metadata"
  - Message: "[dashboard][feature] add metadata to signup page: title, description and etch"
  - Steps:
    - [ ] Understand all the metadata needed for the website
    - [ ] add the description text and the others if needed
    - [ ] Structure page component like the other components
    - [ ] Add the Page component props to all the auth template and the page template

- [ ] Add tests for all the functions involved with the signup page
  - Branch: "dashboard/signup_test"
  - Message: "[dashboard][feature] add tests for all functions related to the signup page"

- [ ] Add mock for the signup
  - Branch: "dashboard/mock_signup"
  - Message: "[dashboard][feature] add mock data for the signup page"

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
