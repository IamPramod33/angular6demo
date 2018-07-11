import { Component, OnInit } from '@angular/core';
import {List} from '../../../shared/models/vocab-list-model';
import { VocabService } from '../../../shared/services/vocab/vocab.service';


@Component({
  selector: 'vocab-source',
  templateUrl: './vocab-source.component.html',
  styleUrls: ['./vocab-source.component.scss']
})
export class VocabSourceComponent implements OnInit {
    private vocabSourceList: Array<List> = [];
    private selectedList: List = {
        title: '',
        children: '',
        hide: false
    };
    constructor(private _vocabService: VocabService) {

    }

    ngOnInit() {
        this.getVocabSourceList();
    }

    private getVocabSourceList():void {
        this._vocabService.getVocabSources().subscribe((data: any) => {
            this.vocabSourceList = data;
        }, (error) => {
            console.log("Error in Client List call");
        });
    }

    private onVocabSelect(list: List) {
        list.hide = !list.hide;
        this.selectedList = list;
    }
  
}
