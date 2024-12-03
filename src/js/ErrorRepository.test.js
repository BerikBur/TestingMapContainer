import ErrorRepository from './ErrorRepository';

describe('ErrorRepository functionality', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });

    test('Метод add должен добавить ошибку 404 и описание Not Found', () => {
        errorRepo.add(404, 'Not Found');
        expect(errorRepo.errors.has(404)).toBe(true);
        expect(errorRepo.errors.get(404)).toBe('Not Found');
    });

    test('Метод translate должен вернуть описание ошибки', () => {
        errorRepo.add(500, 'Internal Server Error');
        const description = errorRepo.translate(500);
        expect(description).toBe('Internal Server Error');
    });

    test('При отсутствии кода ошибки метод translate должен вернуть "Unknown error"', () => {
        const description = errorRepo.translate(12345);
        expect(description).toBe('Unknown error');
    });

    test('Методы класса ErrorRepository должны добавлять несколько ошибок и отображать описание ошибки корректно', () => {
        errorRepo.add(400, 'Bad Request');
        errorRepo.add(401, 'Unauthorized');
        expect(errorRepo.translate(400)).toBe('Bad Request');
        expect(errorRepo.translate(401)).toBe('Unauthorized');
    });
});
