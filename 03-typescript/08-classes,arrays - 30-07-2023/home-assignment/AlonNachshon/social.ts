interface socialNetwork{
  name:string;
  accountId:string;
  followers:Array<any>;
}

class Person{
  private fName:string;
  private lName:string;
  private gender:string;

  constructor(fname:string, lName:string, gender:string){
    this.fName = fname;
    this.lName = lName;
    this.gender = gender;
  }

  public getFullName():string{
    return `${this.fName} ${this.lName}`;
  }

  public getFirstName():string{
    return this.fName;
  }

  public getLastName():string{
    return this.lName;
  }

}


class SocialNetwork implements socialNetwork{
  name:string;
  accountId:string;
  followers:Array<Person>;

  constructor(name:string, accountId:string){
    this.name = name;
    this.accountId = accountId;
    this.followers = [];
  }
  
  public addFollower(person: Person){

    if(!(this.inList(person.getFullName()))){
      this.followers.push(person);
      console.log(`User ${person.getFullName()} added to ${this.accountId} followers on ${this.name}.`);
    }
    else{
      console.log(`User ${person.getFullName()} already exsist in followers.`);
    }
  }

  public removeFollower(fullName: string) : Person | null{
    let p: Person;

    if(this.inList(fullName)){
      let n:number= this.followers.findIndex((person:Person) => person.getFullName() === fullName);
      if(n != -1){
        p = this.followers.splice(n,1).pop();
        console.log(`User ${fullName} was removed from ${this.accountId} followers on ${this.name}.`)
        this.print();
        return p;
      }
    }
    console.log(`User ${fullName} wasn't found in ${this.accountId} followers on ${this.name}.`)

    p = null;
    return p;
  }

  public print(){
    if(this.followers.length === 0)
      console.log(`This ${this.name} account has no followers yet.`)
    else
      console.log(`${this.name}: ${(this.followers.map((person: Person) => person.getFullName()).join(', '))}`);
  }

  public inList(fullName:string):boolean{
    for(let i =0; i <  this.followers.length; i++){
      if(this.followers[i].getFullName() === fullName){
        return true;
      }
    }
    return false;
  }
}

class Celeb extends Person{
  
}

const p1 = new Person("Ploni", "Almoni", "a");
// console.log(p1.getFullName());
// console.log(p1.getFirstName());
// console.log(p1.getLastName());

const p2 = new Person("Tip", "Tipon", "b");
const p3 = new Person("Gar", "Gamel", "c");
const p4 = new Person("Tedy","Bear", "e");

const s1 = new SocialNetwork("Twitter", "@tip598");
const s2 = new SocialNetwork("Facebook", "gargame1954");

// s1.print();
// s2.print();

s1.addFollower(p1);
s1.addFollower(p1);
s1.addFollower(p2);
s1.addFollower(p3);

s1.print();

s1.removeFollower(p1.getFullName());
console.log(s1.removeFollower("Ali"));

s1.addFollower(p4);
s1.print();

s1.removeFollower(p2.getFullName());
s1.removeFollower(p2.getFullName());

s1.removeFollower(p3.getFullName());
s1.removeFollower(p4.getFullName());

s1.removeFollower(p4.getFullName());



// s1.addFollower(p1);
// s1.addFollower(p2);
// s1.addFollower(p4);
// s1.addFollower(p4);
// s1.print();

// s1.addFollower(p3);
// s1.addFollower(p3);
// s1.print();




// s1.removeFollower("Ploni Almoni");
// console.log(s1.inList("Ploni Almoni");)