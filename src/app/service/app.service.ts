import { Injectable } from '@angular/core';
import { eventList } from '../pages/common-content/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = "https://api.edutechex.com";
  constructor(private http : HttpClient) { }
  // create contactus
  createContactUs(contact:any){
    return this.http.post(`https://api.edutechex.com/api/QuantumContact/CreateQuantumContact`,contact);
  }

  getEventList(){
    return eventList;
  }
}
