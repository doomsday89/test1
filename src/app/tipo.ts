export class Tipo {
    Id:string;
    Descripcion:string;
    Fecha:Date;
    Valor:number;
    constructor(id:string,desc:string,Val:number){
        this.Id = id;
        this.Fecha = new Date();
        this.Descripcion=desc;
        this.Valor=Val;
    }
}
