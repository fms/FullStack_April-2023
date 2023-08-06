class Person{
  constructor(public firstName: string, public lastName:string, public genre?:string){

  }
  get fullName(): string{
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(newName:string){
    [this.firstName, this.lastName] = newName.split(" ");
  }
}

class SocialNetwork{
  constructor(public SocialNetworkName:string, public accountIdentifier:string){

  }
}

const Ofer = new Person(`Ofer`,`Ben-Ami`, `programmer`);
// Ofer.fullName = `Ofer1 BenAmi2`
console.log(Ofer.fullName);
