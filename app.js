import express from "express";

const dirname = import.meta.dirname;
const app = express();
const helpers = {
    getTime: () => `Текущее время: ${new Date().toLocaleTimeString()}`,
    toUppercase: (str) => str.toUpperCase()
}
app.locals.getTime = helpers.getTime;
app.locals.toUppercase = helpers.toUppercase;

app.set('view engine', 'ejs');
app.set('partials', dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('index', { 
        messages: ["EJS works!", "Теги непонятные", "Синтаксис пока больше всех нравится"],
        title: "EJS",
        content: "Здесь капса тоже не было"
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});