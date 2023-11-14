import { Router } from "express";
import { createStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from "../controllers/students.controller.js";

const studantsRouts = Router();

studantsRouts.get("/", getAllStudents );

studantsRouts.get("/:id", getStudentById );

studantsRouts.post("/", createStudent );

studantsRouts.put("/:id", updateStudent );

studantsRouts.delete("/:id", deleteStudent );


export default studantsRouts