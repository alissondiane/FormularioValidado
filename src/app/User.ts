export class User {
 
    id: number;
    email: string;
    password: { 
      pwd: string;
      confirm_pwd: string;
    };
    gender: string;
    terms: boolean;
    constructor(values: Object = {}) {

      Object.assign(this, values);
  }
 
}