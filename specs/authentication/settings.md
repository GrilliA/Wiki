# Settings

- There shall be a switch to toggle between light and dark mode
- There shall be a button to delete the account
  - When clicked, a modal shall appear asking for confirmation
  - The user shall have to type their username to confirm the deletion
  - After confirming, the user shall be logged out and redirected to the homepage
    - Data of the user shall be deleted from the database (soft delete)
- There shall be a change password section
  - There shall be a modal to change the password, with the following fields:
    - The user shall have to enter their current password (required)
    - The user shall have to enter their new password (required)
    - The user shall have to enter their confirm new password (required)
  - There shall be a button to submit the change password form
  - After submitting, a success message shall be displayed and the user shall be logged out
  - The user shall have to log in again with the new password
