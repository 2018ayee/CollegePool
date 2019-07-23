export class Person {
    public firstName: string;
    public lastName: string;
    public email: string;
    public address: string;
    public phoneNumber: string;

    constructor(firstName: string, lastName: string, email: string, phoneNumber: string, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}
