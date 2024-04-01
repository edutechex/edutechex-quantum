import { Injectable } from '@angular/core';
import { eventList } from '../pages/common-content/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = "https://api.edutechex.com";
  baseApiUrl = "https://api.edutechex-quantum.com/api";
  constructor(private http : HttpClient) { }
  // create contactus
  createContactUs(contact:any){
    return this.http.post(`https://api.edutechex.com/api/QuantumContact/CreateQuantumContact`,contact);
  }

  getEventList(){
    return eventList;
  }

  //get user IP adress
  getIpAddress(){
    return this.http.get('https://ipapi.co/json');
  }

  addIpAddress(visitors: any){
    return this.http.post(`${this.baseApiUrl}/Visitors`, visitors);
  }
  getServices(){
    return this.http.get(`${this.baseApiUrl}/Service`);
  }
  getTeam(){
    return this.http.get(`${this.baseApiUrl}/Team`);
  }
  getCareer(){
    return this.http.get(`${this.baseApiUrl}/CareerOppertunity`);
  }
  getPartner(){
    return this.http.get(`${this.baseApiUrl}/Partner`);
  }

}
