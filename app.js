const app = require('express')();

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on *: ${port}`));