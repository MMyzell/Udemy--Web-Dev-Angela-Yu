import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const items = ['Item1', 'Items2', 'Item3', 'Item4'];
    res.render('index', { items });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


































