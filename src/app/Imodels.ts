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

export class Account{
    id:number;
    nombre:string;
    tipo:number;
    numero:string;
    expira:string;
    corte:string;
    limite:number;
    moneda:string;
    nota:string;
    icon:string;
    activo:boolean;
    constructor(Id:number,Name:string,Tipo:number,Num:string,Exp:string,Corte:string,lim:number,Moneda:string,Note:string){
        this.id=Id;
        this.nombre=Name;
        this.tipo=Tipo;
        this.numero=Num;
        this.expira=Exp;
        this.corte=Corte;
        this.limite=lim;
        this.moneda=Moneda;
        this.nota=Note;
        this.icon='card';
        this.activo=true;
    }
}