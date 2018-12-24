import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
total=9000;
tokenid;
num:number;
  constructor(private http: Http) {}
  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_cJmghymBoEPLI11Kvd1lxk5q',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.tokenid=token.id;
        this.num=this.amount
        console.log(this.tokenid);
     
      }
    });

    handler.open({
      name: 'Enter Card Details',
      description: 'Payment handler',
       amount:this.total
       
    });

  }


}
