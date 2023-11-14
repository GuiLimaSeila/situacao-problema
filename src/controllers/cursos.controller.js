export const getAllCurso = (req, res) => {
    return res.status(200)
        .send({ message: "Todos cursos via controller",
        status: "Dale tudo Ok meu parça",
        origin: "Controller"
     });
};

export const getCursoById = (req, res) => {
    const { id } = req.params;
    return res.status(200)
        .send({ message: `Curso de ID ${id}`,
        status: "Dale tudo Ok meu parça",
        origin: "Controller"}
        );
}

export const createCurso = (req, res) => {
    const { nome, descricao, limiteVagas } = req.body;

    if (!nome || !descricao || !limiteVagas) {
        return res.status(400)
            .send({ message: "Preencha todos os dados",
            status: "Dale tudo RUIM meu parça",
            origin: "Controller" });
    }

    return res.status(201)
        .send({ message: `Bem vindo ao curso ${nome}, ${descricao}, seu limite de vaga é ${limiteVagas}`,
        status: "Dale tudo Ok meu parça" ,
        origin: "Controller"}
        
        );
}

export const updateCurso = (req, res) => {
    const { nome, descricao, limiteVagas } = req.body;
    const { id } = req.params;
    if (!nome || !descricao || !limiteVagas) {
        return res.status(400)
            .send({ message: "Preencha todos os dados",
            status: "Dale tudo RUIM meu parça",
            origin: "Controller"});
    }

    return res.status(200)
        .send({ message: `Bem vindo ao curso ${nome}, id: ${id}, ${descricao}, seu limite de vaga é ${limiteVagas}`,
        status: "Dale tudo Ok meu parça",
        origin: "Controller"});
}

export const deleteCurso = (req, res) => {
    const { id } = req.params;
    return res.status(200)
        .send({ message: `Rota DELETE curso com ID ${id}`,
        status: "Dale tudo Ok meu parça",
        origin: "Controller"});
}