export class UserProf {

    constructor(lastname:string, firstName:string, age:number, quote:string, photo:string) {  
      this.lastname=lastname;
      this.firstName=firstName;
      this.age=age;
      this.quote=quote;
      this.photo=photo;
    }
    protected lastname:string;
    protected firstName:string;
    protected age:number;
    protected quote: string;
    protected photo: string;
    
    isTextHidden: boolean = false;
  
    hideAge() {
        this.isTextHidden = !this.isTextHidden;
      }
}