import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  presentationTimes$!: Observable<string>;

  private baseURL: string = 'http://localhost:8080';
  private getUrl: string = this.baseURL + '/room/reservation/v1/';
  private postUrl: string = this.baseURL + '/room/reservation/v1';
  public submitted!: boolean;
  roomsearch!: FormGroup;
  rooms!: Room[];
  request!: ReserveRoomRequest;
  currentCheckInVal!: string;
  currentCheckOutVal!: string;
  welcomeMessages$!: Observable<string[]>;
  convertedTimes$!: Observable<string>; // Observable for converted times

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.roomsearch = new FormGroup({
      checkin: new FormControl(''),
      checkout: new FormControl('')
    });

    const roomsearchValueChanges$ = this.roomsearch.valueChanges;
    roomsearchValueChanges$.subscribe(x => {
      this.currentCheckInVal = x.checkin;
      this.currentCheckOutVal = x.checkout;
    });

    this.welcomeMessages$ = this.httpClient.get<string[]>(this.baseURL + '/welcome-messages');
    this.convertedTimes$ = this.httpClient.get<string>(this.baseURL + '/presentation', { responseType: 'text' as 'json' });
    this.presentationTimes$ = this.httpClient.get<string>(this.baseURL + '/presentation', { responseType: 'text' as 'json' });
  }

  onSubmit({ value, valid }: { value: Roomsearch, valid: boolean }) {
    if (valid && this.currentCheckInVal && this.currentCheckOutVal) {
      this.getAll().subscribe(
        (response: any) => {
          if (response && Array.isArray(response.content)) {
            this.rooms = response.content.map((room: Room) => ({
              ...room,
              priceCAD: room.price, // Assign the same value as price for CAD
              priceEUR: room.price  // Assign the same value as price for EUR
            }));
          } else {
            console.error('Response does not have an array in the expected format:', response);
          }
        },
        error => {
          console.error('Error in HTTP request:', error);
        }
      );
    } else {
      console.error('Form is invalid or dates are undefined');
    }
  }

  reserveRoom(value: string) {
    this.request = new ReserveRoomRequest(value, this.currentCheckInVal, this.currentCheckOutVal);
    this.createReservation(this.request);
  }

  createReservation(body: ReserveRoomRequest) {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    this.httpClient.post(this.postUrl, body, { headers })
      .subscribe(res => console.log(res));
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.getUrl + '?checkin=' + this.currentCheckInVal + '&checkout=' + this.currentCheckOutVal, { responseType: 'json' });
  }

  getWelcomeMessages(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.baseURL + '/welcome-messages');
  }
}

export interface Roomsearch {
  checkin: string;
  checkout: string;
}

export interface Room {
  id: string;
  roomNumber: string;
  price: string;
  priceCAD: string;
  priceEUR: string;
  links: string;
}

export class ReserveRoomRequest {
  roomId: string;
  checkin: string;
  checkout: string;

  constructor(roomId: string, checkin: string, checkout: string) {
    this.roomId = roomId;
    this.checkin = checkin;
    this.checkout = checkout;
  }
}
