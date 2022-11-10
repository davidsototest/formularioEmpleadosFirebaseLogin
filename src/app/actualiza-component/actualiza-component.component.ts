import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosServiceService } from '../empleados.service.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  titulo = 'Listado de empleados';
  nombre="";
  apellido="";
  cargo="";
  salario=0;
  empleados:Empleado[]=[];
  indice:number;
  y: any;
  accion:number;

  /*actualizarEmpleado(): void{
  let miEmpleado= new Empleado(this.nombre, this.apellido, this.cargo, this.salario);
  this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
  this.empleadosSevice.actualizarEmpleado(this.indice, miEmpleado);
  this.router.navigate([""]);
}

eliminarEmpleado(){
  this.empleadosSevice.eliminarEmpleado(this.indice);
  this.router.navigate([""]);
}*/



constructor(private miServicio:ServicioEmpleadosService, private empleadosSevice:EmpleadosServiceService, private router:Router, private route:ActivatedRoute){
this.empleados=this.empleadosSevice.empleados;
}


  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado=this.empleadosSevice.encontrarEmpleado(this.indice);

    this.nombre=empleado.nombre;
    this.apellido=empleado.apellido;
    this.cargo=empleado.cargo;
    this.salario=empleado.salario;
  }

  actualizarEmpleado(){
    if(this.accion==1){
    let miEmpleado= new Empleado(this.nombre, this.apellido, this.cargo, this.salario);
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosSevice.actualizarEmpleado(this.indice, miEmpleado);
    this.router.navigate([""]);
    } else{
    this.empleadosSevice.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
    }
  }

  volverHome(){
    this.router.navigate([""]);
  }

}
