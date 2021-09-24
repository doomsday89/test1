export class Tipo {
    Fecha:Date;
    Descripcion:string;
    Valor:number;
    constructor(desc:string,Val:number){
        this.Fecha = new Date();
        this.Descripcion=desc;
        this.Valor=Val;
    }
}
