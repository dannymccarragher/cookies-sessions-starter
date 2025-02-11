import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

//global middleware
app.use(cookieParser());
app.use(express.static('./public'))
app.set("view engine", "pug");
app.set("views", "./views");

//routes
app.get("/", (req, res) => {

    const EXPIRES = 30 * 60 * 1000;
     res.status(200).render("home");
     res.cookie('lang', 'en', { maxAge: EXPIRES });
     res.cookie('lastVisisted', new Date().toISOString, { maxAge: EXPIRES});
     res.cookie('name', 'Danny', {maxAge: EXPIRES});


     res.status(200).render('home');
    })

const PORT = 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));