// Main application file 
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const hubRoutes = require('./routes/hub.routes');
const userRoutes = require('./routes/user.routes');
const transactionRoutes = require('./routes/transaction.routes');
const loginRoutes = require('./routes/login.routes');
const homepageRoutes = require('./routes/homepage.routes');



const app = express();
app.use(express.json());

app.use('/api/hubs', hubRoutes);
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);


app.use('/api/login', loginRoutes);



app.use('/api/user', homepageRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
