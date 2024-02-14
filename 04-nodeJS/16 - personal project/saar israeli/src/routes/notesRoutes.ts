import express from 'express';
import * as Controller from '../controllers/notesController';
import { addNoteSchema, idValidation,updateNoteTitleSchema, updateNoteDescriptionSchema } from '../validation/notesValidationSchema';
import { checkExact } from 'express-validator';
import { validate } from '../validation/validateSchema';


const router = express.Router();

router.post("/add", checkExact(addNoteSchema, {message:"Too much fields"}),
                    validate,
                    Controller.addNote,
                    Controller.getNote);

router.get("/get", Controller.getNote);


router.patch("/updateTitle", checkExact(updateNoteTitleSchema),
                        validate,
                        Controller.updateNote,
                        Controller.getNote);

router.patch("/updateDescription", checkExact(updateNoteDescriptionSchema),
                        validate,
                        Controller.updateNote,
                        Controller.findNote);

router.delete("/delete",idValidation,
                        validate,
                        Controller.deleteNote,
                        Controller.getNote);

router.post("/note", Controller.findNote);

export default router;