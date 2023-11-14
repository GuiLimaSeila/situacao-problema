export const getAllStudents = (req, res) => {
    return res.status(200)
        .send({ message: "Todos alunos via controller",
        status: "Dale tudo Ok meu parça",
        origin: "Controller"
     });
};

export const getStudentById = (req, res) => {
    const { id } = req.params;
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
        .send({ message: "Rota POST aluno",
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
        .send({ message: `Rota PUT aluno com ID ${id}`,
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