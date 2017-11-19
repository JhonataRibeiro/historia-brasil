import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'fact-detail',
    templateUrl: './fact-detail.html'
})

export class FactDetailComponent implements OnInit {
    public fact: any;
    constructor(
        public params: NavParams,
        public view: ViewController
    ) {
        this.fact = params.get('fact');
    }

    ngOnInit() { }

    close(){
        this.view.dismiss();
    }
}