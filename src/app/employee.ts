export class Employee {
    idDB:string;
    id:number;
    name:string;
    email:string;
    device:string;
        constructor(idDB:string, id:number, name:string, email:string, device:string){
            this.idDB=idDB;
            this.id=id;
            this.name=name;
            this.email=email;
            this.device=device;
        } 
}
