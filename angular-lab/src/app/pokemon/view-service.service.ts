import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {
  style: string = 'dash';
  
  getStyle() {
    return this.style
  }

  changeStyleView():void {
    this.style = this.style === 'dash' ? 'row' : 'dash'; 
  }
}
