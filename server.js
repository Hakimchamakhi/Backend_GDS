var  express = require('express');
const app = express();
var router = express.Router();
const db = require("./models/index");
const cors = require('cors');
var AuthRouter=require('./Routes/AuthRoute');
var fourniRouter=require('./Routes/FourniRoute');
var famillRouter=require('./Routes/familleRoute');
var articleRouter=require('./Routes/ArticleRoute');
var clientRouter=require('./Routes/ClientRoute');






require('dotenv').config();
const PORT= process.env.PORT || 5000;
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");  
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/adminclient',AuthRouter);
app.use('/api/fournisseur',fourniRouter);
app.use('/api/famille',famillRouter);
app.use('/api/article',articleRouter);
app.use('/api/client',clientRouter);




app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))