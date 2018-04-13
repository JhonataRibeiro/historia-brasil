import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Fact } from '../../model/Fact';
import { HOST_API } from './../../app/config';
import PouchDB from 'pouchdb';

@Injectable()
export class FactService {
  public fact :Fact;
  public db :any;
  public remote: any;
  public fact$ :BehaviorSubject<Fact> = new BehaviorSubject(this.fact);
  public localDb;

  constructor(
    private http: HttpClient
  ) {
    this.fact = new Fact();
    this.localDb = new PouchDB('facts.db');
  }

  getRevoltsNativists(): Observable<Fact[]> {
    return this.http.post<Fact[]>(HOST_API + '/facts/bytags', ["NATIVISTA"])
      .map((response:any)=> {
        this.toCache(response);
        return response
      });
  }

  getRevoltsEmancipationist(): Observable<Fact[]> {
    return this.http.post<Fact[]>(HOST_API + '/facts/bytags', ["EMANCIPACIONISTA"])
    .map((response:any)=> {
      this.toCache(response);
      return response
    });
  }

  toCache(facts:any){
    facts.map(fact=>{
      fact._id = fact.id;
      delete(fact.id);
      return fact;
    }).map(fact =>{
      this.localDb.put(fact, function(err, response) {
            if (err) { return console.log(err); }
          });
    });
  }

  getChached(tag:String): Observable<Fact[]> {
    return Observable.create(observer => {
      this.localDb.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (response) { 
        observer.next(response.rows.filter(row=>{
          return !(row && row.doc.tags && row.doc.tags.indexOf(tag));
        }));
      }).catch(function (err) {
        observer.reject(err);
      });
    })
  }

  public setFact(fact: Fact) {
    this.fact$.next(fact);
  }

  public getFact$(): Observable<Fact> {
    return this.fact$.asObservable();
  }
}
