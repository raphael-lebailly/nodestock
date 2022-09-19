// Stock Market

const express = require('express');
const app = express();
const { engine } = require ('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

// set Handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

const anything = "anything";

// set Handlebars routes
app.get('/', (req, res) => {
    res.render('home', {
        stuff:`This is ${anything} I want...`
    });
})

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// 
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

