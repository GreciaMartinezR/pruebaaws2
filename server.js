const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();

require("./server/config/mongoose.config");

app.use( cookieParser() );

app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/routes/usuario.router")(app);
require("./server/routes/tipos-animal.routes")(app);
require("./server/routes/animal.router")(app);

const server = app.listen(8000, () => console.log("Server listo"));