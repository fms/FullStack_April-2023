import * as Grades from './grades';

describe('Without using Dependency Injection (DI)', () => {
    test('failed grade 49 should send an e-mail with failed text', () => {
        const sender = jest.spyOn(Grades, 'sendMailMessage').mockImplementation();
        Grades.sendGradeMessage(49, "dummy");
        expect(sender).toHaveBeenCalledWith("dummy", "You failed");
    });

    test('Passing grade 99 should send an e-mail with passed text', () => {
        const sender = jest.spyOn(Grades, 'sendMailMessage').mockImplementation();
        Grades.sendGradeMessage(99, "dummy");
        expect(sender).toHaveBeenCalledWith("dummy", "You passed");
    });
}); 

describe('Using Dependency Injection (DI)', () => {
    test('failed grade 49 should send an e-mail with failed text', () => {
        const sender = jest.fn();
        Grades.sendGradeMessageWithDI(49, "dummy", sender);
        expect(sender).toHaveBeenCalledWith("dummy", "You failed");
    });

    test('Passing grade 99 should send an e-mail with passed text', () => {
        const sender = jest.fn();
        Grades.sendGradeMessageWithDI(99, "dummy", sender);
        expect(sender).toHaveBeenCalledWith("dummy", "You passed");
    });
});

