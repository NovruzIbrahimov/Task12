class User {
    constructor(name, surname, password) {
        this.name = name;
        this.surname = surname;
        this.password = password;
    }
    fullname() {
        return `${this.name} ${this.surname}`;
    }
}

const user = new User('Novruz', 'Ibrahimov', 'password000');

function showFullName() {
    const fullName = user.fullname();
    document.getElementById('exit').textContent = fullName.toUpperCase();
}