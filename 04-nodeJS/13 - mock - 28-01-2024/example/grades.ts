
export function sendMailMessage(address: string, message: string) {
    // TODO 
    console.log('sent');
}

export function sendSMSMessage(address: string, message: string) {
    // TODO 
}

// Dependency Injection (DI) / Inversion of Control (IOC)
// De-coupled implementation
export function sendGradeMessageWithDI(grade: number, mailAddress: string, sender: Function) {
    if (grade < 50) {
        sender(mailAddress, "You failed");
    }
    else {
        sender(mailAddress, "You passed");
    }
}

// sendGradeMessage and sendMailMessage are coupled
export function sendGradeMessage(grade: number, mailAddress: string) {
    if (grade < 50) {
        sendMailMessage(mailAddress, "You failed");
    }
    else {
        sendMailMessage(mailAddress, "You passed");
    }
}

export const myObj = {
    doSomething() {
        console.log('does something');
    }
};