# Wiki Dance - Event Diction

## Structure

### Helper Folder

- Error Messages --> errors.ts
  It contains predefined error messages that can be used for consistent error handling across the application.
- Event Types --> events.ts
  It defines various event types that the application may handle or process.
- Constants --> constants.ts
  It contains constant values used throughout the application,
  such as configuration settings, error messages, or other static data.

### App Folder

- Routes --> \*\*.route.ts
  It contains the routes of the application,
  defining the endpoints and associating them with the corresponding controllers.
- Validators --> \*\*.validator.ts
  It contains the validation logic for incoming requests,
  ensuring that the data meets the required criteria before being processed.
- Mappers--> \*\*.mapper.ts
  It contains the mapping logic to transform data between different layers of the application,
  such as converting database entities to DTOs (Data Transfer Objects) and vice versa.
- Controllers --> \*\*.controller.ts
  It contains the controller logic that handles incoming requests,
  interacts with services, and returns appropriate responses.
- Models --> \*\*.model.ts
  It contains the data models or schemas that define the structure of the data used in the application,
  often corresponding to database tables or collections.
- Services --> \*\*.service.ts
  It contains the business logic of the application,
  encapsulating operations and interactions with data sources.

### Email Folder --> \*\*.mail.ts

- Contains a function that returns a string of the email content
