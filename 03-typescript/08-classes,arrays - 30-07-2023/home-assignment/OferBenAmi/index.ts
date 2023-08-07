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
  followers:string[] =[];
  constructor(public SocialNetworkName:string, public accountIdentifier:string){

  }
  addFollower(person: Person){
    if(this.followers.includes(person.fullName)){
      return;
    }
    this.followers.push(person.fullName);
  }
  removeFollower(fullName:string):Person{
    if(this.followers.includes(fullName)){
      this.followers.splice(this.followers.indexOf(fullName),1) // removes the first accurance of fullName
    }
  }
}

const Ofer = new Person(`Ofer`,`Ben-Ami`, `programmer`);
const oferSocialNetwork = new SocialNetwork(`instagram`,`ofer134`);
console.log(Ofer.firstName);
