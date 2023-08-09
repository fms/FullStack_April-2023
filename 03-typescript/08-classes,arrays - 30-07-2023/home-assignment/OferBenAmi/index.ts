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
class Celeb extends Person{
  constructor(firstName: string, lastName:string, genre?:string ){
    super(firstName,lastName,genre );
  }
  celebsocialNetworks:SocialNetwork[] = [];

  addFollower(socialNetwork:SocialNetwork, person: Person){
    const isSN  = this.celebsocialNetworks.find(SN => SN.SocialNetworkName === socialNetwork.SocialNetworkName.toString())
    if(isSN === undefined){
      this.celebsocialNetworks.push(socialNetwork)
    }
  }
}

class SocialNetwork{
  followers:Person[] = [];
  constructor(public SocialNetworkName:string, public accountIdentifier:string){

  }
  addFollower(person: Person){
    if(this.followers.includes(person)){
      return;
    }
    this.followers.push(person);
  }
  removeFollower(fullName: string): Person | null {

    const removedFollower = this.followers.find(person => person.fullName === fullName);
    if (removedFollower) {
      this.followers.splice(this.followers.indexOf(removedFollower), 1);
      return removedFollower;
    } else {
      return null;
    }
  }
  print(){
    let allNamesArray:string[] =[];
    this.followers.forEach(x => allNamesArray.push(x.fullName));
    console.log(`${this.SocialNetworkName}:  ${allNamesArray.sort()}`);
  }
}


const ofer = new Person(`Ofer`,`Ben-Ami`, `worker`);
const roni = new Person(`Roni`,`ya`,`student`);
const avi = new Person(`Avi`,`asdasd`,`dadaad`);
const golan = new Person(`Golan`,`dididi`,`football player`);
const famous = new Celeb(`famous`,`celeb`, `model`);
const famusSocialNetwork = new SocialNetwork(`facebook`, `famus123`)
const oferSocialNetwork = new SocialNetwork(`instagram`,`ofer134`);
const roniSocialNetwork = new SocialNetwork(`instagram`,`roniYa`);
const aviSocialNetwork = new SocialNetwork(`instagram`,`aviGO`);
const golanSocialNetwork = new SocialNetwork(`instagram`,`golanha`);

oferSocialNetwork.addFollower(roni)
oferSocialNetwork.addFollower(ofer)
oferSocialNetwork.addFollower(avi)
oferSocialNetwork.addFollower(golan)
famous.addFollower(oferSocialNetwork,ofer)
console.log(famous.celebsocialNetworks);

console.log(oferSocialNetwork.print());
