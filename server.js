// imports

const express = require("express");
const ejs = require('ejs');

// settings
const app = express();
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// routing

// app.get('/', (req, res) => {
//     res.send("Hello Express");
// });

app.get("/users", (req, res) => {
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users.ejs', {users: users_array});
})

app.get("/cars", (req, res) => {
    res.render('cars.ejs');
})
app.get("/cats", (req, res) => {
    res.render('cats.ejs');
})
app.get("/forms", (req, res) => {
    res.render('forms.ejs');
})
app.get("/cat1", (req, res) => {
    res.render('cat1.ejs');
})
app.get("/cat2", (req, res) => {
    res.render('cat2.ejs');
})



app.listen(8000, () => console.log("listening on port 8000"));
