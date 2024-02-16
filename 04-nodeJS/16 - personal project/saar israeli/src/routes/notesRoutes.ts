import express from 'express';
import * as Controller from '../controllers/notesController';
import { addNoteSchema, idValidation,updateNoteTitleSchema, updateNoteDescriptionSchema } from '../validation/notesValidationSchema';
import { checkExact } from 'express-validator';
import { validate } from '../validation/validateSchema';


const router = express.Router();

router.post("/add", checkExact(addNoteSchema, {message:"Too much fields"}),
                    validate,
                    Controller.addNote,
                    Controller.getMyNotes);

router.get("/get", Controller.getMyNotes);


router.patch("/updateTitle", checkExact(updateNoteTitleSchema),
                        validate,
                        Controller.updateNote,
                        Controller.getMyNotes);

router.patch("/updateDescription", checkExact(updateNoteDescriptionSchema),
                        validate,
                        Controller.updateNote,
                        Controller.findNote);

router.delete("/delete",idValidation,
                        validate,
                        Controller.deleteNote,
                        Controller.getMyNotes);

router.post("/note", Controller.findNote);

export default router;