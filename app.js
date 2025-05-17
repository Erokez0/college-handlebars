import express from "express";

const app = express();
const helpers = {
    getTime: () => `Текущее время: ${new Date().toLocaleTimeString()}`,
    toUppercase: (str) => str.toUpperCase()
}
app.locals.getTime = helpers.getTime;
app.locals.toUppercase = helpers.toUppercase;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { 
        messages: ["Pug works!", "Красиво всё же", "Самый непонятный синтаксис"],
        title: "Pug",
        content: "Здесь капса так и нет",
        getTime: helpers.getTime,
        toUppercase: helpers.toUppercase
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});