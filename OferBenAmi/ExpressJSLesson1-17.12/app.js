import express from 'express'

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`running express server on port ${PORT}`)
});

app.get('groceries', (req, res) =>{
    res.send([
    {
        item: 'milk',
        quantity: 2,
    },
    {
        item: 'cereal',
        quantity: 4,
    },
    {
        item: 'apple',
        quantity: 8,
    },
])
});
