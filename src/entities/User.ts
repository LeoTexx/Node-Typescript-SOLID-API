/*This folder is not called "Models" because it doesn't 
necessarily needs to have a relation with a DB, so when are
writing a model that works independently, I usually call it "Entities" */

import { uuid } from "uuidv4";

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
