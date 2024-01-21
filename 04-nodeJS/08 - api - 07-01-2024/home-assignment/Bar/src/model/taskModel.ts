
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
