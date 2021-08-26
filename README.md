# Node-Typescript-SOLID-API
 
 Using a Package-by-feature Folder structure
 
 All application is inside the "src" folder, which contains the following structure:
 
 -entities:This folder is not called "Models" because it doesn't necessarily needs to have a relation with a DB, so when are writing a model that works independently, I usually call it "entities" 
 -providers:This folder contains files that interact with external API
 -repositories: Contain the classes that do the communication between our app and the DB and defines what can be done in our storage (add, edit, remove, etc..) 
 -useCases: This folder contains the core functionalities that can be performed with the app. In this case we just have one function,to create a new user
 -implementations: Folder where we handle the connection with external sources (Databases, APIs,etc...). Based on the SOLID Principle, our system should work indepent of where it runs or where it's stored, so if we want to change our host provider or our database type, we would only change files inside this folders.

