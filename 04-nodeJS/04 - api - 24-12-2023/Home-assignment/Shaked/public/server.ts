import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('dist'));
app.use(express.urlencoded({ extended: true }));

const currentDate = new Date();
app.get('/now', (req, res) => {
   res.status(200).send({date : currentDate});
});

app.get('/echo/:text', (req, res) => {
    if(req.params.text) {
    res.status(200).send({text : req.params.text});
    }
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
})