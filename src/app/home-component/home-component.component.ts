import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosServiceService } from '../empleados.service.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de empleados';
  nombre="";
  apellido="";
  cargo="";
  salario=0;
  empleados:Empleado[]=[];

generarEmpleados(){
  let miEmpleado= new Empleado(this.nombre, this.apellido, this.cargo, this.salario);
  this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
  this.empleadosSevice.agregarEmpleadoServicio(miEmpleado);
}

constructor(private miServicio:ServicioEmpleadosService, private empleadosSevice:EmpleadosServiceService){
/*this.empleados=this.empleadosSevice.empleados;*/
this.empleadosSevice.obtenerEmpleados().subscribe(misEmpleados=>{
  console.log(misEmpleados);
  this.empleados=Object.values(misEmpleados);
  this.empleadosSevice.setEmpleados(this.empleados);
});
}



  ngOnInit(): void {
  }

}
