import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { Fact } from '../../model/Fact';
import { FactService } from '../../providers';
import { FactDetailComponent } from './../fact-detail/fact-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FactService]
})
export class HomePage {

  public revoltsNativist: Array<Fact> = [];
  public revoltsEmancipacionists: Array<Fact> = [];
  public revoltas: String;
  public db: any;
  public remote: any;

  constructor(
    public navCtrl: NavController,
    public factService: FactService,
    public modalCtrl: ModalController) {
    this.populateRevoltsNativist();
    this.populateRevoltsEmancipationist();
    this.revoltas = "nativistas";
  }

  populateRevoltsNativist() {

    this.factService.getChached().subscribe((response: Array<Fact>) => {
      response.forEach((fact:any)=>{
        this.revoltsNativist.push(fact.doc);
      })
      if(!response.length){
        this.factService.getRevoltsNativists().subscribe((response: Array<Fact>) => {
          this.revoltsNativist = response;
        }, (err) => {
        })
      }
    }, (err) => {
      console.log("error: ", err);
    })
  }

  populateRevoltsEmancipationist() {
    this.factService.getRevoltsEmancipationist().subscribe((response: Array<Fact>) => {
      console.log("==> 2 ", response);
      this.revoltsEmancipacionists = response;
      console.log("=> ", this.revoltsEmancipacionists);
    }, (err) => {
      console.log("error: ", err);
    })
  }

  viewDetail(fact) {
    let factDetailModal = this.modalCtrl.create(FactDetailComponent, { 'fact': fact });
    factDetailModal.present();
    factDetailModal.onDidDismiss(data => {
    })
  }
}
