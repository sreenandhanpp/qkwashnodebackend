@echo off
REM Create the root project directory
mkdir node-mysql-api

REM Navigate into the project directory
cd node-mysql-api

REM Create the config directory and config.js file
mkdir config
echo // Configuration settings >> config\config.js

REM Create the models directory and model files
mkdir models
echo // Hub model >> models\hub.model.js
echo // User model >> models\user.model.js
echo // Transaction model >> models\transaction.model.js

REM Create the routes directory and route files
mkdir routes
echo // Hub routes >> routes\hub.routes.js
echo // User routes >> routes\user.routes.js
echo // Transaction routes >> routes\transaction.routes.js

REM Create the controllers directory and controller files
mkdir controllers
echo // Hub controller >> controllers\hub.controller.js
echo // User controller >> controllers\user.controller.js
echo // Transaction controller >> controllers\transaction.controller.js

REM Create the .env file
echo # Environment variables > .env

REM Create the app.js file
echo // Main application file >> app.js

echo Project structure created successfully!
