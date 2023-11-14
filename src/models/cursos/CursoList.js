export class CursoList {    
    constructor() {
        this.cursos = [];
    }
getAllCursos() {
        return this.cursos;
    }

    getCursoById(id) {
        return this.cursos.find((curso) => curso.id === id);
    }

    addCurso(curso) {
        this.cursos.push(curso);
    }

    updateCurso(id, nome, descricao, limiteVagas) {
        const curso = this.getCursoById(id);
        if (!curso) {
            return null;
        }

        curso.nome = nome;
        curso.descricao = descricao;
        curso.limiteVagas = limiteVagas;

        return curso;
    }

    deleteCurso(id) {
        this.cursos = this.cursos.filter((curso) => curso.id !== id);
    }
}