import { Router } from "express";
import { createCurso, deleteCurso, getAllCurso, getCursoById, updateCurso } from "../controllers/cursos.controller.js";

const cursosRouts = Router();

cursosRouts.get("/", getAllCurso );

cursosRouts.get("/:id", getCursoById );

cursosRouts.post("/", createCurso );

cursosRouts.put("/:id", updateCurso );

cursosRouts.delete("/:id", deleteCurso );


export default cursosRouts