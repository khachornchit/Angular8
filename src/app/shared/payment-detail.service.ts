import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly apiEndpoint = "http://localhost:5000/api";
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.apiEndpoint + "/PaymentDetails", this.formData);
  }

  putPaymentDetail() {
    return this.http.put(this.apiEndpoint + "/PaymentDetails/" + this.formData.PMId, this.formData);
  }

  deletePaymentDetail(PMId: number) {
    return this.http.delete(this.apiEndpoint + "/PaymentDetails/" + PMId);
  }

  refreshList() {
    this.http.get(this.apiEndpoint + '/PaymentDetails')
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
}