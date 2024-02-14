
import mongoose from "mongoose";
import request from 'supertest';
import { setDatabaseDefaults } from "../src/database";
import { MongoMemoryServer } from 'mongodb-memory-server';
import createserver from "../src/server";
import { UserModel } from "../src/model/users";


const app = createserver();

let localStorageMock: { [key: string]: string } = {};
(global as any).localStorage = {
    setItem: (key: string, value: string) => {
        localStorageMock[key] = value;
    },
    getItem: (key: string) => localStorageMock[key],
    removeItem: (key: string) => {
        delete localStorageMock[key];
    },
    clear: () => {
        localStorageMock = {};
    },
};


describe('app', () => {
    let mongoServer: MongoMemoryServer;
    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
                setDatabaseDefaults();

    });


    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
        if (mongoServer) {
            await mongoServer.stop();
        }
    });

    describe("Users", () => {
        describe('Get users', () => {
            test('Users should be empty', async () => {
                const { status, body } = await request(app).get('/api/users/get');

                expect(status).toBe(200);
                expect(body.users).toEqual([]);
            });
        });

        const firstUser = { email: "hilf@email.com", password: "hilf1998", fullName: "amit hilf"  };
        const expectedFirstUser = new UserModel({ ...firstUser, userId: expect.any(String)});

        const newUser = { email: "bar@email.com", password: "bar1122", fullName: "bar abulher" };
        const expectedNewUser = { ...newUser, userId: expect.any(String) };
        const userWithoutName = { email: "saar@email.com", password: "saar1234" };
        const userEmailExist = { email: "hilf@email.com", password: "hilf12341", fullName: "amit holf" };

        const expectNewUpdatedUser = { email: "sagi@email.com", password: "sagi1111", fullName: "sagi franko", userId: "65c4096d4dba2dcc87affea9" };

        const userBadPass = { email: "sagi@email.com", password: "sagi", fullName: "sagi franko", userId: expect.any(String) }

        const userEmptyEmail = { password: "bar1122", fullName: "bar abulher", userId: expect.any(String) };
        const userWorngEmail = { email: "barbar", password: "bar 1111", fullName: "bar abulher", userId: expect.any(mongoose.Types.ObjectId) }
        const userEmptyPassword = { email: "bar@email.com", fullName: "bar abulher", userId: expect.any(String) };

        const userInvalidFields = { email: "hilf@email.com", password: "hilf1998", fullName: "amit hilf", text: "hello", userId: expect.any(String) };

        const worngId = { email: "sagi@email.com", password: "sagi1111", fullName: "sagi franko",  userId: "65c4096d4dba2dcc87affea9" };

        const saarUser = new UserModel({ email: "saar@saar.com", password: "saar12345", fullName: "saar israeli",  userId: expect.any(String) })


        describe('Post user - started with one existing User', () => {
            beforeAll(async () => {
                const { status, body } = await request(app).post('/api/users/register').send(firstUser);
                expect(status).toBe(200);
                expectedFirstUser.id = body.users[0].userId;
            });


            test('Posting user with valid information', async () => {
                const { status, body } = await request(app).post('/api/users/register').send(newUser);
                expect(status).toBe(200);
                expect(body.users).toContainEqual(expectedNewUser);
            });

            test('Posting user without email', async () => {
                const { status, body } = await request(app).post('/api/users/register').send(userEmptyEmail);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Email cannot be empty");
            });

            test('Posting user without password', async () => {
                const { status, body } = await request(app).post('/api/users/register').send(userEmptyPassword);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Password cannot be empty");
            });

            test('Posting user without full name', async () => {
                const { status, body } = await request(app).post('/api/users/register').send(userWithoutName);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("full name cannot be empty");
            });

            test('Posting user with invalid email', async () => {
                const { status, body } = await request(app).post('/api/users/register').send(userWorngEmail);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Invalid Email");
            });

            test('Posting user email that already exist', async () => {
                const { status, body } = await request(app).post('/api/users/register').send(userEmailExist);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Email already in use");
            });

            test('Posting user with more than 2 fields', async () => {
                const { status, body } = await request(app).post('/api/users/register').send(userInvalidFields);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Too much fields");
            });

            test('Posting user with bad password', async () => {
                const { status, body } = await request(app).post('/api/users/register').send(userBadPass);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Password must be at least 6 characters");
            });
        });

        // describe("local storage", () => {
        //     test("it should save inside localStorage", () => {
        //         saveLogedInUser('logedInUser', saarUser.id);
        //         expect(localStorageMock['logedInUser']).toBe(saarUser.id)
        //     })

        //     test('it should get from localStorage', () => {
        //         localStorageMock['logedInUser'] = saarUser.id;
        //         const result = loadLogedInUser('logedInUser');
        //         expect(result).toBe(saarUser.id);
        //     });

        //     test('it should return null for non-existing key', () => {
        //         const result = loadLogedInUser('nonExistingKey');
        //         expect(result).toBe(null);
        //     });
        //     test('api with localstorage', async () => {
        //         saarUser.save();
        //         const saarObject = saarUser.toObject();
        //         const { body, status } = await request(app).get('/api/users/logedIn/').send(saarObject);
        //         expect(status).toBe(200);
        //         expect(body).toEqual({"logedInUser":saarObject.id.toString()});
        //     })
        // });

        describe('Update(Patch) user', () => {
            test('Updating user information', async () => {
                expectNewUpdatedUser.userId = expectedFirstUser._id.toString();
                const { status, body } = await request(app).patch('/api/users/update').send(expectNewUpdatedUser);
                expect(status).toBe(200);
                expect(body.users[0]).toEqual(expectNewUpdatedUser);
            });

            test('Updating user information without changing anything', async () => {
                const { status, body } = await request(app).patch('/api/users/update').send(expectNewUpdatedUser);
                expect(status).toBe(400);
                expect(body.error).toEqual("Nothing to update");
            });

            test('(Update) Id not found - User', async () => {
                const { status, body } = await request(app).patch('/api/users/update').send(worngId);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Id not found");
            });

            test('Updating user email without @', async () => {
                userWorngEmail.id = expectNewUpdatedUser.id;
                const { status, body } = await request(app).patch('/api/users/update').send(userWorngEmail.id);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Invalid Email");
            });

            test('Updating user password without password', async () => {
                userEmptyPassword.id = expectNewUpdatedUser.id;
                const { status, body } = await request(app).patch('/api/users/update').send(userEmptyPassword);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Password cannot be empty");
            });

            test('Updating user email without email', async () => {
                userEmptyEmail.id = expectNewUpdatedUser.id;
                const { status, body } = await request(app).patch('/api/users/update').send(userEmptyEmail);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Email cannot be empty");
            });
        });

        describe("Delete user", () => {
            test('(Delete) Id not found - User', async () => {
                const { status, body } = await request(app).delete('/api/users/delete').send(worngId);
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("invalid Id");
            });

            test("Deleting User should succeed", async () => {
                const { body, status } = await request(app).delete('/api/users/delete').send({ userId: expectNewUpdatedUser.userId })
                expect(status).toBe(200);
                expect(body.users).not.toContain(expectNewUpdatedUser);
            });
        });
    });

    describe("Notes", () => {
        describe("Get Notes", () => {
            test('Notes should be empty', async () => {
                const { status, body } = await request(app).get('/api/notes/get');

                expect(status).toBe(200);
                expect(body.notes).toEqual([]);
            });
        });

        const sameObjectId = new mongoose.Types.ObjectId();

        const firstNote = { title: "hello", description: "world", noteOwner: sameObjectId };
        const firstNoteId = { ...firstNote, id: expect.any(String) };
        const beforeUpdateNote = { title: "hello", description: "world", noteOwner: sameObjectId, id: new mongoose.Types.ObjectId() }
        const updatedNote = { title: "Updated hello", description: "Updated world", noteOwner: sameObjectId.toString(), id: new mongoose.Types.ObjectId() };
        const noteEmptyTitle = { description: "Empty Title", noteOwner: new mongoose.Types.ObjectId(), id: expect.any(String) };
        const noteWithMoreFields = { title: "1", descripion: "2", noteOwner: new mongoose.Types.ObjectId(), test: "3", id: expect.any(String) };
        const noteIdNoteFound = { title: "Connect", description: "Hello", noteOwner: new mongoose.Types.ObjectId(), id: "65c41fee5f5f3141160fdba6" };

        describe("Post notes - starting with first note", () => {
            beforeAll(async () => {
                const { body, status } = await request(app).post('/api/notes/add').send(firstNote);
                expect(status).toBe(200);
                firstNoteId.id = body.notes[0].id;
            });


            test("Posting note without title", async () => {
                const { body, status } = await request(app).post('/api/notes/add').send(noteEmptyTitle)
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Title cannot be empty")
            });


            test("Posting note with more then 2 fields", async () => {
                const { body, status } = await request(app).post('/api/notes/add').send(noteWithMoreFields)
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Too much fields")
            });
        });


        describe("Update(Patch) Notes", () => {
            test("Updating note success", async () => {
                updatedNote.id = firstNoteId.id;
                const { body, status } = await request(app).patch('/api/notes/update').send(updatedNote)
                expect(status).toBe(200);
                expect(body.notes).toContainEqual(updatedNote);
            });

            test("(Update) Id not found - Note", async () => {
                const { body, status } = await request(app).patch('/api/notes/update').send(noteIdNoteFound)
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Id not found");
            });

            test("Update note without title", async () => {
                noteEmptyTitle.id = updatedNote.id;
                const { body, status } = await request(app).patch('/api/notes/update').send(noteEmptyTitle)
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Title cannot be empty")
            });
        });

        describe("Delete Notes", () => {
            test("Deleting Note should succeed", async () => {
                const { body, status } = await request(app).delete('/api/notes/delete').send(firstNoteId)
                expect(status).toBe(200);
                expect(body.notes).not.toContainEqual(firstNoteId);
            });
            test("(Delete) Id not found - Note", async () => {
                const { body, status } = await request(app).delete('/api/notes/delete').send(noteIdNoteFound)
                expect(status).toBe(500);
                expect(body.errors).toContainEqual("Id not found");
            });
        });
    })


    const options = {
        versionKey: false, transform: (doc: mongoose.Document, ret: Record<string, any>) => {
            delete ret._id;
        }
    };

    describe("Note with users", () => {
        const expectUserWithNote = new UserModel({ email: "amit@hilf123.com", password: "amit11", fullName: "amit hilf" });
        test("Pushing note inside user", async () => {
            await expectUserWithNote.save();
            const expectNoteWithUser = { title: "amit title", description: "hello world", noteOwner: expectUserWithNote._id.toString() };
            const { body, status } = await request(app).post('/api/notes/add').send(expectNoteWithUser);
            expect(status).toBe(200);
            const user = await UserModel.findById(expectUserWithNote._id);
            expect(user!.notes[0].toString()).toEqual(body.notes[0].id.toString());
        })
    })
})