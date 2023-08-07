interface socialNetwork{
  name:string;
  accountId:string;
  followers:Array<any>;
}

class Person{
  fName:string;
  lName:string;
  gender:string;

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
      console.log(`${this.accountId} account on ${this.name} has no followers yet.`)
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

  public countfollowers():number{
    return this.followers.length;
  }
}

class Celeb extends Person{

  socialNetworks:Array<SocialNetwork>;
  
  constructor(fname:string, lName:string, gender:string){
    super(fname, lName, gender);
    this.socialNetworks = [];
  }

  addSocialNetwork(socialNetwork:SocialNetwork){
    for(let i = 0; i < this.socialNetworks.length; i++){
      if (socialNetwork == this.socialNetworks[i]){
        console.log("Social Network exsist.")
        return false;
      }
    }
    this.socialNetworks.push(socialNetwork);
    socialNetwork.print();
    return true;
  }

  addFollower(socialNetwork:SocialNetwork, person: Person){
    socialNetwork.addFollower(person);
  }


  details(){
    console.log(`firstName: "${this.getFirstName()}"`);
    console.log(`lastName: "${this.getLastName()}"`);
    console.log("socialNetworks: [");
    for(let i = 0; i < this.socialNetworks.length; i++){
      console.log(`\tnetwork: "${this.socialNetworks[i].name}", count: ${this.socialNetworks[i].countfollowers()},`)
    }
    console.log("]");
  }
  removeFollower(socialNetwork:SocialNetwork, fullName: string) : Person | null{
    return socialNetwork.removeFollower(fullName);
  }

  print(minFollowers?: number){
    let count:number;

    let tmp = this.socialNetworks.map((network) => ({
      socialNetworkName: network.name,
      followeCount: network.countfollowers(),
    }));

    tmp.sort((count1,count2)=> count2.followeCount - count1.followeCount);
    tmp = tmp.filter((count) => count.followeCount >= (minFollowers || 0));

    if(tmp.length > 0){
      let str:string = `${this.getFullName()}: `;
      for(let i = 0; i< tmp.length; i++){
        str+= `${tmp[i].socialNetworkName}: (${tmp[i].followeCount}) `;
      }
      console.log(str);
    }else{
      console.log(`No network with minimum ${minFollowers} follower found.`);
    }
  }

  static mostPopular(celeb:Array<Celeb>, networkName:string){
    let leadCeleb:string = "";
    let leadCount:number = 0;

    for(let i = 0; i < celeb.length; i++)
      for(let j = 0; j < celeb[i].socialNetworks.length; j++){

        if(celeb[i].socialNetworks[j].name == networkName && celeb[i].socialNetworks[j].countfollowers() > leadCount ){
          leadCount = celeb[i].socialNetworks[j].countfollowers();
          leadCeleb = celeb[i].getFullName();
        }
      }

      if(leadCount != 0){
        console.log(`The celb with the most followers on ${networkName} is ${leadCeleb} with ${leadCount} followers.`)
      }else{
        console.log(`No celebs fond with followers on ${networkName}`);
      }
      

  }

}


const p1 = new Person("Ploni", "Almoni", "a");

const p2 = new Person("Tip", "Tipon", "b");
const p3 = new Person("Gar", "Gamel", "c");
const p4 = new Person("Tedy","Bear", "e");

const s1 = new SocialNetwork("twitter", "@tip598");
const s2 = new SocialNetwork("facebook", "gargame1954");



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

const c1 = new Celeb("Ari", "Krishna", "f");
const c1Twitter = new SocialNetwork("twitter", "@ari1962");
const c1Facebook = new SocialNetwork("facebook", "ari.krishna1");

c1.addSocialNetwork(c1Twitter);
c1.addSocialNetwork(c1Facebook);
c1.details();

c1.addFollower(c1Facebook,p1);
c1.addFollower(c1Facebook,p2);
c1.addFollower(c1Facebook,p3);
c1.details();

c1.addFollower(c1Twitter,p2);
c1.details();

c1.removeFollower(c1Facebook,p1.getFullName());
c1.removeFollower(c1Facebook,p2.getFullName());
c1.removeFollower(c1Facebook,p2.getFullName());

c1.details();

c1.addFollower(c1Twitter,p1);
c1.addFollower(c1Twitter,p3);
c1.details();

const c1Instagram = new SocialNetwork("instagram","ari_krishna_instush")
c1.addSocialNetwork(c1Instagram);
c1.details();

c1.addFollower(c1Instagram,p1);
c1.addFollower(c1Facebook,p2);
c1.addFollower(c1Instagram,p4);
c1.addFollower(c1Instagram,p3);
c1.addFollower(c1Instagram,p2);
c1.details();

c1.print(3)


const c2 = new Celeb("Rolling","Stones", "j");
const c2Twitter = new SocialNetwork("twitter", "@rolling");
const c2Facebook = new SocialNetwork("facebook", "rolling.stones1");

c2.addSocialNetwork(c2Facebook);
c2.addSocialNetwork(c2Twitter);
c2.details();

c2.addFollower(c2Facebook,p1);
c2.addFollower(c2Facebook,p2);
c2.addFollower(c2Facebook,p3);
c2.addFollower(c2Facebook,p4);
c2.details();

const c3 = new Celeb("Super", "Man", "s");
const c3Twitter = new SocialNetwork("twitter", "@superman");
const c3Facebook = new SocialNetwork("facebook", "super.man1");

c3.addSocialNetwork(c3Facebook);
c3.addSocialNetwork(c3Twitter);
c3.addFollower(c3Facebook,p1);
c3.addFollower(c3Twitter,p1);
c3.details();

let celebArr:Array<Celeb> =[];
celebArr.push(c1);
celebArr.push(c2);
celebArr.push(c3);

c1.details();
c2.details();
c3.details();

Celeb.mostPopular(celebArr, "facebook");
Celeb.mostPopular(celebArr, "twitter");



