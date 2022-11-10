import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  constructor(private httpClient:HttpClient, private loginService:LoginService){}

  guardarEmpleados(empleados:Empleado[]){
    const token=this.loginService.getIdToken();
    this.httpClient.put('https://testpildoras-default-rtdb.firebaseio.com/datos.json?auth=' + token, empleados).subscribe(
      response=>console.log("se guardaron los empleados" + response),
      error=> console.log("error" + error),
    );
  }

  actualizaEmpleado(indice:number, empleado:Empleado){
    let url='https://testpildoras-default-rtdb.firebaseio.com/datos/' + indice + '.json';
    this.httpClient.put(url, empleado).subscribe(
      response=>console.log("se modificado el empleado" + response),
      error=> console.log("error" + error),
  );
}

  cargarEmpleados(){
    const token=this.loginService.getIdToken();
    return this.httpClient.get('https://testpildoras-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }

  eliminarEmpleado(indice:number){
    let url='https://testpildoras-default-rtdb.firebaseio.com/datos/' + indice + '.json';
    this.httpClient.delete(url).subscribe(
      response=>console.log("se elimino correctamente el empleado" + response),
      error=> console.log("error" + error),
  );
}
}
