import express from "express";

const app = express();
const options = process.cwd();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

interface Person {
    firstName: string,
    lastName:string,
    age:number;
};

const persons: Person[] = [];

app.post("/api/person", (req,res) => {
    try {
        const newPerson: Person = req.body;

        if(!newPerson.firstName || !newPerson.lastName || !newPerson.age) {
            throw new Error("Missing person details to add");
        }

        const index = persons.findIndex(person => person.firstName === newPerson.firstName);
        if(index !== -1) {
            throw new Error("Person to add already exists");
        }

        console.log(`Adding: `, newPerson);
        persons.push(newPerson);
        res.send({persons})
    } catch (error) {
        if(error instanceof Error) {
            res.status(404).send({error: error.message});
        }
    }

});

app.get("/api/persons" , (req,res) => {
    res.send({persons});
});

app.patch("/api/person", (req,res) => {
    try {
        const {firstName , lastName , age} = req.body;
        if(!firstName || !lastName || !age) {
            throw new Error ("Missing person details to update");
        }

        const oldPerson = persons.find(person => person.firstName === firstName);
        if(!oldPerson) {
            throw new Error("Person to update not found");
        }

        console.log(`Updating (Patch)"${oldPerson.firstName}:`);
        console.log("Before :", oldPerson);

        oldPerson.age = age;
        console.log("After :", oldPerson)
        res.send({persons});
    } catch(error) {
        if(error instanceof Error) {
            res.status(404).send({error: error.message});
        }
    }
});

app.put("/api/person/:firstName", (req,res) => {
    try {
        const {firstName} = req.params;
        const newPerson: Person = req.body;

        if(!firstName) {
            throw new Error("Missing old person details to update");
        }

        if(!newPerson.firstName || !newPerson.lastName || !newPerson.age) {
            throw new Error("Missing person details to update");
        }

        const index = persons.findIndex(person => person.firstName === firstName);
        if(index === -1) {
            throw new Error("Person to replace not found")
        }

        if(firstName !== newPerson.firstName) {
            const newIndex = persons.findIndex(person => person.firstName === newPerson.firstName) 
            if(newIndex !== -1) {
                throw "pesron already exists";
            }
        }

        const oldPerson = persons.splice(index,1,newPerson);

        console.log(`Updating (Put) "${oldPerson[0].firstName}":`);
        console.log("Before:", oldPerson);
        console.log("After:", newPerson);

        res.send({persons});
    } catch(error) {
        if(error instanceof Error) {
            res.status(404).send({ error: error.message});
        }
    }
});

app.delete("/api/person", (req,res) => {
    try {
        const {firstName} = req.body;

        if(!firstName) {
            throw new Error("Missing old person name to delete");
        }

        const index = persons.findIndex(person => person.firstName === firstName)
        if(index === -1) {
            throw new Error("Person to delete not found");
        }

        const oldPerson = persons.splice(index,1);
        console.log("Deleted:",oldPerson[0]);

        res.send({persons});
    } catch (error) {
        if(error instanceof Error) {
            res.status(404).send({error: error.message});
        }
    }
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});