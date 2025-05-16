import express from "express";
import handlebars from "express-handlebars";

const dirname = import.meta.dirname;

const app = express();
const helpers = {
    getTime: () => `Текущее время: ${new Date().toLocaleTimeString()}`,
    toUppercase: (str) => str.toUpperCase()
}

app.engine('hbs', handlebars.engine({
    defaultLayout: 'global',
    layoutsDir: dirname + '/views/layouts',
    partialsDir: dirname + '/views/partials',
    extname: 'hbs',
    helpers
}));
app.set('view engine', 'hbs');
app.set('partials', dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('index', { 
        messages: ["Handlebar works!", "Шаблонизатор работает!", "idk"],
        title: "Handlebars",
        content: "капса не было :o"
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});