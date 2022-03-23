import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactAdd } from '../models/contact-add';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private httpClient:HttpClient) { }
  private apiUrl:string="http://localhost:44450/api/Contact";
  sendMailForContact(contactAdd:ContactAdd){
    return this.httpClient.post(`${this.apiUrl}/SendEmailForContact`,contactAdd);
  }
}
