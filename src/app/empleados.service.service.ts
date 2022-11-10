import { Injectable } from '@angular/core';
import { DataServicesService } from './data-services.service';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  empleados:Empleado[]=[]

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados= misEmpleados;
  }

  /*empleados:Empleado[]=[
    new Empleado("david", "soto", "presidente", 7500),
    new Empleado("jose", "perez", "cooper", 7500),
    new Empleado("paula", "gomez", "gerente", 7500),
    new Empleado("cris", "monz", "admin", 7500),
  ];*/

  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice:number, empleado:Empleado): void{
    let empleadoModificado=this.empleados[indice];
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

    this.dataService.actualizaEmpleado(indice, empleado);
  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
    this.dataService.eliminarEmpleado(indice);
    if(this.empleados!==null)
    this.dataService.guardarEmpleados(this.empleados);
  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }

  constructor(private dataService:DataServicesService) { }
}
