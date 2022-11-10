import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosServiceService } from '../empleados.service.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {
  titulo = 'Listado de empleados';
  nombre="";
  apellido="";
  cargo="";
  salario=0;
  empleados:Empleado[]=[];
  y: any;

generarEmpleados(){
  let miEmpleado= new Empleado(this.nombre, this.apellido, this.cargo, this.salario);
  this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
  this.empleadosSevice.agregarEmpleadoServicio(miEmpleado);
  this.router.navigate([""]);
}

constructor(private miServicio:ServicioEmpleadosService, private empleadosSevice:EmpleadosServiceService, private router:Router){
this.empleados=this.empleadosSevice.empleados;
}


  ngOnInit(): void {
  }

  volverHome(){
    this.router.navigate([""]);
  }

}
