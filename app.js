const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});

port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on *: ${port}`));