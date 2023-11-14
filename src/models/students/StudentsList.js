export class StudentsList {
    constructor() {
        this.students = [];
    }
    getAllStudents() {
        return this.students;
    }
    getStudentById(id) {
        return this.students.find((student) => student.id === id);
    }
    addStudent(student) {
        this.students.push(student);
    }
    updateStudent(id, nome, email, idade) {
        const student = this.getStudentById(id);
        if (!student) {
            return null;
        }
        student.nome = nome;
        student.email = email;
        student.idade = idade;
        return student;
    }
    deleteStudent(id) {
        this.students = this.students.filter((student) => student.id !== id);
    }
}