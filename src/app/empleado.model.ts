export class Empleado{
  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;

  constructor(nombre:string, apellido:string, cargo:string, salario:number){
    this.nombre= nombre;
    this.apellido= apellido;
    this.cargo=cargo;
    this.salario=salario;
  }
}
