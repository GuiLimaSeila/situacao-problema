import { Curso } from "../models/cursos/Curso.js";
import { CursoList } from "../models/cursos/CursoList.js";

const cursoList = new CursoList();

export const getAllCurso = (req, res) => {
    const curso = cursoList.getAllCursos();
    if (!curso.length) {
        return res.status(404)
            .send({
                message: "Não há cursos cadastrados",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    return res.status(200)
        .send({
            message: "Todos cursos via controller",
            status: "Dale tudo Ok meu parça",
            origin: "Controller",
            data: curso
        });
};

export const getCursoById = (req, res) => {

    const { id } = req.params;
    const cursoByID = cursoList.getCursoById(id)

    if (!cursoByID.length) {
        return res.status(404)
            .send({
                message: "Não há cursos cadastrados",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    return res.status(200)
        .send({
            message: `Curso de ID ${id}`,
            status: "Dale tudo Ok meu parça",
            origin: "Controller",
            data: cursoByID
        }
        );
}

export const createCurso = (req, res) => {


    const { nome, descricao, limiteVagas } = req.body;

    const curso = new Curso(nome, descricao, limiteVagas);

    if (!nome || !descricao || !limiteVagas) {
        return res.status(400)
            .send({
                message: "Preencha todos os dados",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    return res.status(201)
        .send({
            message: `Bem vindo ao curso ${nome}, ${descricao}, seu limite de vaga é ${limiteVagas}`,
            status: "Dale tudo Ok meu parça",
            origin: "Controller"
        }

        );
}

export const updateCurso = (req, res) => {
    const { nome, descricao, limiteVagas } = req.body;
    const { id } = req.params;
    if (!nome || !descricao || !limiteVagas) {
        return res.status(400)
            .send({
                message: "Preencha todos os dados",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    return res.status(200)
        .send({
            message: `Bem vindo ao curso ${nome}, id: ${id}, ${descricao}, seu limite de vaga é ${limiteVagas}`,
            status: "Dale tudo Ok meu parça",
            origin: "Controller"
        });
}

export const deleteCurso = (req, res) => {
    const { id } = req.params;
    return res.status(200)
        .send({
            message: `Rota DELETE curso com ID ${id}`,
            status: "Dale tudo Ok meu parça",
            origin: "Controller"
        });
}