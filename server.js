const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const PORT= process.env.PORT || 5000;
const app = express();
//Connect to DataBase
mongoose.connect(process.env.MONGO_URI,
  {useNewUrlParser: true, useUnifiedTopology: true},
  ()=>{
      console.log('connected to Database');
})
mongoose.connection.on('error', err => {
  console.log(err);
});

app.use(cors())

//Body-Parser Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/article', (require("./Routes/Articles")))
app.use('/client', (require("./Routes/Clients")))
app.use('/fournisseur', (require("./Routes/Fournisseurs")))
app.use('/famille', (require("./Routes/Familles")))
app.use('/bc', (require("./Routes/Bcommandes")))

console.log("nadim");
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))