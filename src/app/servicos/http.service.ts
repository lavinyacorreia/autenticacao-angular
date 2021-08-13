import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  autenticado(): boolean {
  	if (!localStorage['token']) {
  	  return false;
  	}
    try {
      const dadosUsuario = JSON.parse(atob(localStorage['token'].split('.')[1]));
      if (!dadosUsuario) {
        return false;
      }
    	return parseInt(dadosUsuario.id) > 0;
    } catch (error) {
      return false;
    }
  }

}
