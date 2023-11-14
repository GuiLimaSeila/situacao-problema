import { Router } from "express";
import studantsRouts from "./students.routes.js";
import cursosRouts from "./cursos.routes.js";

const router = Router();

router.use("/alunos", studantsRouts)
router.use("/cursos", cursosRouts)

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor Ok!" });
  });

  export default router;