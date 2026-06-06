# To do

- As as less tables as possible in the backend, the structure should be dictated by the backend code
- Make it possible for user to change language (with i8n)
- Make The view page first always

## General tasks

- [ ] Add language dropdown to the navigation always
  - Branch: "dashboard/language"
  - Message: "[dashboard][feature] add language to all the navigation"

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

## ForgottenPassword

- [x] Add Header and Footer for the forgotten_password page
  - Branch: "dashboard/forgotten_password_layout"
  - Message: "[dashboard][feature] Add layout for the forgotten_password page"

- [ ] Add translations for forgotten_password page, it and eng
  - Branch: "dashboard/forgotten_password_translations_page"
  - Message: "[dashboard][feature] add translations to the forgotten_password page"

- [x] Add types for all the forgotten_password related functions
  - Branch: "dashboard/forgotten_password_types"
  - Message: "[dashboard][feature] add types to all the functions related to the forgotten_password feature"

- [x] Add meta data to the forgotten_password page
  - Branch: "dashboard/forgotten_password_metadata"
  - Message: "[dashboard][feature] add metadata to forgotten_password page: title, description and etch"

- [x] Add tests for all the functions involved with the forgotten_password page
  - Branch: "dashboard/forgotten_password_test"
  - Message: "[dashboard][feature] add tests for all functions related to the forgotten_password page"

- [ ] Add mock for the forgotten_password
  - Branch: "dashboard/mock_forgotten_password"
  - Message: "[dashboard][feature] add mock data for the forgotten_password page"

## ForgottenPassword forgotten_password
