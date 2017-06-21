import {Component, ElementRef, EventEmitter, Output, ViewChild} from "@angular/core";

@Component({
    selector : 'search-input',
    template : `
        <input #search type="search" [(ngModel)]="query" (ngModelChange)="queryChange($event)"
               placeholder="Search">
        <button (click)="onClick()">
            <i *ngIf="query!=''" class="fa fa-times" aria-hidden="true"></i>
            <i *ngIf="query==''" class="fa fa-search" aria-hidden="true"></i>
        </button>
    `,
    styleUrls: ['./search.style.css']
})
export class SearchComponent {
    @ViewChild('search') searchElement: ElementRef;
    @Output() queryChanged = new EventEmitter();
    public query: string   = "";

    queryChange(value: string) {
        this.queryChanged.emit(value);
    }

    onClick() {
        this.searchElement.nativeElement.focus();
        if (this.query != '') {
            this.query = '';
            this.queryChange(this.query);
        }
    }
}