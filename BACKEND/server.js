const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//import routes
const machineryRoutes = require('./routes/machineries');
const materialRoutes = require('./routes/materials');
const scheduleRoutes = require('./routes/timeSchedulings');


//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(machineryRoutes);
app.use(materialRoutes);
app.use(scheduleRoutes);




const PORT = 8000;
const DB_URL = 'mongodb+srv://user:skyline8@skyline.ymebi.mongodb.net/Skyline_DB?retryWrites=true&w=majority'


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(()=>{
    console.log('DB Connected.');
})
.catch((err)=> console.log('DB Connection error',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});