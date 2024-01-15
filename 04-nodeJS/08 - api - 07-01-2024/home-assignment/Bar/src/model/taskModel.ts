
export class Task {
  id: string;

  constructor(
    public title: string,
    public description: string,
    public status: boolean
  ) {
    this.id = crypto.randomUUID();
  }
}
