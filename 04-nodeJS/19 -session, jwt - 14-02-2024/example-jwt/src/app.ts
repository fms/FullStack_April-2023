import express, { NextFunction, Request, Response } from "express";
import session, { MemoryStore } from 'express-session';
import connectMongoDBSession from 'connect-mongodb-session';
import userRouter from './routes/user.routes';
import auth from "./middleware/auth";
import { connectToDatabase, setDatabaseDefaults } from "./database";

const app = express();
const port = 3000;

connectToDatabase();
// setDatabaseDefaults();

// This is the method for letting TypeScript know about the session properties we set.
// From the @types/express-session documentation:
// /**
//   * This interface allows you to declare additional properties on your session object using [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html).
//   *
//   * @example
//   * declare module 'express-session' {
//   *     interface SessionData {
//   *         views: number;
//   *     }
//   * }
//   */
declare module 'express-session' {
    interface SessionData {
        isAuthenticated: boolean;
    }
}

// const memoryStore = new MemoryStore();
// const MongoDBStore = connectMongoDBSession(session);
// const store = new MongoDBStore({
//     uri: 'mongodb://localhost/todo',
//     collection: 'sessions'
// });

// app.use(session({
//     secret: 'fullstackApr2023SecretPassword',
//     cookie: {
//         maxAge: 1000 * 24 * 60 * 60 // mili * hours * mins * secs => 1 day
//     },
//     resave: false,
//     saveUninitialized: false,
//     name: 'sessionId',
//     // store: memoryStore
//     store: store
// }));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/user', userRouter);

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.status(200).json({hello: 'hello!'});
// })

// app.post('/login', (req: Request, res: Response, next: NextFunction) => {
//     const { username, password } = req.body;
//     if (username === "shmuel" && password === "password") {
//         req.session.isAuthenticated = true;
//         res.json("Authenticated!");
//     }
//     else {
//         req.session.isAuthenticated = false;
//         res.status(403).json('bad credentials');
//     }
// });

// app.get('/logout', (req: Request, res: Response, next: NextFunction) => {
//     req.session.isAuthenticated = false;
//     res.json("Logged out!");
// });


// function checkAuth(req: Request, res: Response, next: NextFunction) {
//     console.log(req.session);
//     if (req.session.isAuthenticated) {
//         return next();
//     }
//     res.status(403).json("Not authenticated!");
// }

app.get('/protected', auth, (req: Request, res: Response, next: NextFunction) => {
    res.json(req.session);
});

app.listen(port, () => console.log(`Started on http://localhost:${port}`));
