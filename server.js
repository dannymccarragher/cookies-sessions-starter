import express from 'express';

const app = express();

//global middleware
app.use(express.static('./public'))
app.set("view engine", "pug");
app.set("views", "./views");

//routes
app.get("/", (req, res) => { res.status(200).render("home") })

const PORT = 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));