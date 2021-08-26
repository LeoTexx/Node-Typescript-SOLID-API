# Node-Typescript-SOLID-API
 
 API created to learn and test an implementation of SOLID Principles on a Node/Typescript API.
 
 The API allow you to create a user.
 
 Our code is organized using a Package-by-feature Folder structure, so inside the folder "CreateUserUseCase" we have all files we would need to do it safely (tests,controllers, core functions, etc...)
 
 All application is inside the "src" folder, which contains the following structure:
 
 -entities:This folder is not called "Models" because it doesn't necessarily needs to have a relation with a DB, so when are writing a model that works independently, I usually call it "entities" 
 
 -providers:This folder contains files that interact with external API
 
 -repositories: Contain the classes that do the communication between our app and the DB and defines what can be done in our storage (add, edit, remove, etc..)
 
 -useCases: This folder contains the core functionalities that can be performed with the app. In this case we just have one function,to create a new user
 
 -implementations: Folder where we handle the connection with external sources (Databases, APIs,etc...). Based on the SOLID Principle, our system should work indepent of where it runs or where it's stored, so if we want to change our host provider or our database type, we would only change files inside this folders.


## Installation

*Clone the repository and install it dependencies:

```
git clone https://github.com/LeoTexx/Node-Typescript-SOLID-API
yarn
//or
npm i
```

## Usage

To test our routes, we are using Insomnia, just intall it from the link below
https://insomnia.rest/download

After the installation, just add the following routes and try it.

POST localhost:3333/users :
-Create new user, send a JSON object in the following format:
```
{
  "email":<Your Email>,
  "name":<Your Name>
  "password":<Your Password>, 
}
```

## Contributing
Feel free to clone and change what would better fit your needs, hope it helps😉
