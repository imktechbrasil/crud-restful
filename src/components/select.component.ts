import { Component } from '@angular/core';
import { CrudComponentObj } from '../index';
import { BaseComponent } from './base.component';
import * as $ from 'jquery';

@Component({
    selector: 'selectCrudRestful',
    template: `
        <div class="row" id="select{{clazzName}}{{index}}">
            <div class="col-md-{{colMdLeft}}">    
                <label>{{name}}</label>
            </div>
            <div class="col-md-{{colMdRigth}}">    
                <select [style.width]="width" (change)="onChangeObj($event.target.value)">
                    <option id="{{i}}" [value]="item.value" *ngFor="let item of values; let i = index">{{item.label}}</option>
                </select>
            </div>
            <span id="label_error_{{id}}" style="color: red; display: none;"></span>
        </div>
    `
})

export class SelectComponent extends BaseComponent {   
    ngOnInit() {
        this.readCommonsParameters(this.index);
        setTimeout(() => {
            let i : number =0;
            this.values.forEach(value => {
                if (value['value'] == this.value) {
                    $('#'+i).attr('selected','selected');                
                }
                i++;
            })
        }, 50);
    }
    
    onChangeObj(value:any) {
        CrudComponentObj.getComponents(this.clazzName)[this.index].value = value;
    }
}    





