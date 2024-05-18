const cucumber = require("cypress-cucumber-preprocessor").default;
const cypress = require("cypress");
module.exports = (on,config) =>{
    on("file:preprocessor", cucumber());
}