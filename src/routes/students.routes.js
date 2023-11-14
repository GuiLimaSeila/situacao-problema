import { Router } from "express";

const studantsRouts = Router();

studantsRouts.get("/", (req, res) => {
    return res.status(200)
        .send({ message: "Rota GET ALL alunos" });
});

studantsRouts.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200)
        .send({ message: `Rota GET aluno com ID ${id}` });
});

studantsRouts.post("/", (req, res) => {
    const { nome, email, idade } = req.body;

    if (!nome || !email || !idade) {
        return res.status(400)
            .send({ message: "Preencha todos os dados" });
    }

    return res.status(201)
        .send({ message: "Rota POST aluno" });
});

studantsRouts.put("/:id", (req, res) => {
    const { nome, email, idade } = req.body;
    const { id } = req.params;
    if (!nome || !email || !idade) {
        return res.status(400)
            .send({ message: "Preencha todos os dados" });
    }

    return res.status(200)
        .send({ message: `Rota PUT aluno com ID ${id}` });
});

studantsRouts.delete("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200)
        .send({ message: `Rota DELETE aluno com ID ${id}` });
});


export default studantsRouts