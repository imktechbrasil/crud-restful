import { Component } from '@angular/core';
import { CrudComponentObj } from '../index';
import { BaseComponent } from './base.component';

@Component({
    selector: 'selectCrudRestful',
    template: `
        <div class="row" id="radioboxes{{clazzName}}{{index}}">
            <div class="col-md-{{colMdLeft}}">    
                <label>{{name}}</label>
            </div>
            <div class="col-md-{{colMdRigth}}">
                <div *ngFor="let item of values">
                    <input type="radio" name="radiobox" [value]="item.value" (click)="selectValue(item)">
                    <label>{{item.name}}</label> 
                </div>
            </div>
            <span id="label_error_{{id}}" style="color: red; display: none;"></span>
        </div>
    `
})

export class RadioboxesComponent extends BaseComponent {
    ngOnInit() {
        this.readCommonsParameters(this.index);
    }
   
    selectValue(item) {
        item['checked'] = event.target['checked'];
        let crudComponentObj = CrudComponentObj.getComponents(this.clazzName)[this.index];
        let id = this.targetProperty.split('=')[1];
        crudComponentObj.targetPropertyValue = item[id];
        crudComponentObj.value = this.values;
    }
}




