import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  dadosUsuario = { id: '' };
  
  constructor() { }

  obterIdUsuario() {
    return this.dadosUsuario.id;
  }

  autenticado(): boolean {
  	if (!localStorage['token']) {
  	  return false;
  	}
    try {
      const dadosUsuario = JSON.parse(atob(localStorage['token'].split('.')[1]));
      if (!dadosUsuario) {
        return false;
      }
      this.dadosUsuario = dadosUsuario;
    	return parseInt(dadosUsuario.id) > 0;
    } catch (error) {
      return false;
    }
  }

  headers() {
      let httpHeaders = new HttpHeaders();
      if (localStorage['token']) {
        httpHeaders = httpHeaders.set(
          'Authorization', 'Bearer ' + localStorage['token']
        );
      }
      return { headers: httpHeaders };
    }  
}

