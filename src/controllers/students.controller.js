import { StudentsList } from "../models/students/StudentsList.js";
import { Students } from "../models/students/Students.js";

const studentsList = new StudentsList();

export const getAllStudents = (req, res) => {
    const students = studentsList.getAllStudents();

    if (!students.length) {
        return res.status(404)
            .send({ message: "Não há alunos cadastrados",
            status: "Dale tudo RUIM meu parça",
            origin: "Controller" });
    }


    return res.status(200)
        .send({ message: "Todos alunos via controller",
        status: "Dale tudo Ok meu parça",
        origin: "Controller"
     });
};

export const getStudentById = (req, res) => {

    const { id } = req.params;

    const studentByID = studentsList.getStudentById(id)

    if (!studentByID.length) {
        return res.status(404)
            .send({ message: "Não há alunos cadastrados",
            status: "Dale tudo RUIM meu parça",
            origin: "Controller" });
    }

    return res.status(200)
        .send({ message: `Aluno de ID ${id}`,
        status: "Dale tudo Ok meu parça",
        origin: "Controller"}
        );
}

export const createStudent = (req, res) => {
    const { nome, email, idade } = req.body;

    if (!nome || !email || !idade) {
        return res.status(400)
            .send({ message: "Preencha todos os dados",
            status: "Dale tudo RUIM meu parça",
            origin: "Controller" });
    }

    return res.status(201)
        .send({ message: `Bem vindo ao aluno ${nome}, ${email}, sua idade é ${idade}`,
        status: "Dale tudo Ok meu parça" ,
        origin: "Controller"}
        
        );
}

export const updateStudent = (req, res) => {
    const { nome, email, idade } = req.body;
    const { id } = req.params;
    if (!nome || !email || !idade) {
        return res.status(400)
            .send({ message: "Preencha todos os dados",
            status: "Dale tudo RUIM meu parça",
            origin: "Controller"});
    }

    return res.status(200)
        .send({ message: `Bem vindo ao aluno ${nome}, id: ${id}, ${email}, sua idade é ${idade}`,
        status: "Dale tudo Ok meu parça",
        origin: "Controller"});
}

export const deleteStudent = (req, res) => {
    const { id } = req.params;
    return res.status(200)
        .send({ message: `Rota DELETE aluno com ID ${id}`,
        status: "Dale tudo Ok meu parça",
        origin: "Controller"});
}