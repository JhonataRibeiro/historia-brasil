import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Fact } from '../../model/Fact';
import { HOST_API } from './../../app/config';

@Injectable()
export class FactService {
  public fact :Fact;
  public db :any;
  public remote: any;
  public fact$ :BehaviorSubject<Fact> = new BehaviorSubject(this.fact);
  //private $fact = new BehaviorSubject(this.fact);

  constructor(
    private http: HttpClient
  ) {
    this.fact = new Fact();
  }

  getRevoltsNativists(): Observable<Fact[]> {
    return this.http.post<Fact[]>(HOST_API + '/facts/bytags', ["NATIVISTA"]);
  }

  getRevoltsEmancipationist(): Observable<Fact[]> {
    return this.http.post<Fact[]>(HOST_API + '/facts/bytags', ["EMANCIPACIONISTA"]);
  }

  public setFact(fact: Fact) {
    this.fact$.next(fact);
  }

  public getFact$(): Observable<Fact> {
    return this.fact$.asObservable();
  }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   //TODO: adicionar no db
  //   // this.db.post(body.data);
  //   return body.data || {};
  // }

  // private handleError(error: Response | any) {
  //   // In a real world app, you might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
