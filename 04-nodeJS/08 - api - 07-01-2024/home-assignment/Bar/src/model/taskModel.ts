<<<<<<< HEAD

export class Task {
  id: string;

  constructor(
    public title: string,
    public description: string,
    public status: boolean,
    public userId:string
  ) {
    this.id = crypto.randomUUID();
  }
}
=======

export class Task {
  id: string;

  constructor(
    public title: string,
    public description: string,
    public status: boolean,
    public userId:string
  ) {
    this.id = crypto.randomUUID();
  }
}
>>>>>>> 1911ed530d7039e6af8385c02f520e68a6349185
