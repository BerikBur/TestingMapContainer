class ErrorRepository {
    
    constructor() {
        this.errors = new Map();
    }

    //метод для добавления ошибок в репозиторий
    add(code, description) {
        this.errors.set(code, description);
    }

    //метод для отображения описания ошибки
    translate(code) {
        return this.errors.get(code) || 'Unknown error';
    }

}

export default ErrorRepository;