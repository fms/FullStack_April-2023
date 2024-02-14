import express, { NextFunction, Request, Response } from "express";
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.cookies);
    res.cookie('username', 'Shmuel', {maxAge: 1000 * 60});
    res.status(200).json({hello: 'hello!'});
})

app.post('/login', (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    if (username === "shmuel" && password === "password") {
        res.cookie('sessionId', '123456', { maxAge: 1000 * 60 * 60});
        res.json("Authenticated!");
    }
    else {
        res.status(403).json('bad credentials');
    }
});

app.get('/logout', (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie('sessionId');
    res.json("Logged out!");
});


function checkAuth(req: Request, res: Response, next: NextFunction) {
    console.log(req.cookies);
    if (req.cookies.sessionId) {
        if (req.cookies.sessionId == '123456'){
            return next();
        }
    }
    res.status(403).json("Not authenticated!");
}

app.get('/protected', checkAuth, (req: Request, res: Response, next: NextFunction) => {
    res.json("We're in");
});

app.listen(port, () => console.log(`Started on http://localhost:${port}`));
