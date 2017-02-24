/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './input.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../node_modules/primeng/components/inputtext/inputtext.ngfactory';
import * as import10 from '@angular/core/src/linker/element_ref';
import * as import11 from 'primeng/components/inputtext/inputtext';
export class Wrapper_InputTextComponent {
  /*private*/ _eventHandler:Function;
  context:import0.InputTextComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor() {
    this._changed = false;
    this.context = new import0.InputTextComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_index(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.index = currValue;
      this._expr_0 = currValue;
    }
  }
  check_name(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.name = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_InputTextComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_InputTextComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.InputTextComponent>;
  _InputTextComponent_0_3:Wrapper_InputTextComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_InputTextComponent_Host0,renderType_InputTextComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'inputText',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_InputTextComponent0(this.viewUtils,this,0,this._el_0);
    this._InputTextComponent_0_3 = new Wrapper_InputTextComponent();
    this.compView_0.create(this._InputTextComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._InputTextComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.InputTextComponent) && (0 === requestNodeIndex))) { return this._InputTextComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._InputTextComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const InputTextComponentNgFactory:import8.ComponentFactory<import0.InputTextComponent> = new import8.ComponentFactory<import0.InputTextComponent>('inputText',View_InputTextComponent_Host0,import0.InputTextComponent);
const styles_InputTextComponent:any[] = ([] as any[]);
var renderType_InputTextComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_InputTextComponent,{});
export class View_InputTextComponent0 extends import2.AppView<import0.InputTextComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _InputText_9_3:import9.Wrapper_InputText;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_InputTextComponent0,renderType_InputTextComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','col-md-4'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'    \n            ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','col-md-8'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'    \n            ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_7,'input',new import3.InlineArray4(4,'pInputText','','type','text'),(null as any));
    this._InputText_9_3 = new import9.Wrapper_InputText(new import10.ElementRef(this._el_9));
    this._text_10 = this.renderer.createText(this._el_7,'\n        ',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'            \n    ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_9,new import3.InlineArray4(4,'keypress',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_9));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.InputText) && (9 === requestNodeIndex))) { return this._InputText_9_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._InputText_9_3.ngDoCheck(this,this._el_9,throwOnChange);
    const currVal_13:any = import3.inlineInterpolate(1,'',this.context.name,'');
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_4,currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = import3.inlineInterpolate(1,'',this.context.name,'');
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementProperty(this._el_9,'name',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this.context.value;
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementProperty(this._el_9,'value',currVal_15);
      this._expr_15 = currVal_15;
    }
    this._InputText_9_3.checkHost(this,this,this._el_9,throwOnChange);
  }
  handleEvent_9(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'keypress')) {
      const pd_sub_0:any = ((<any>this.context.setValue(this._el_9.value)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'blur')) {
      const pd_sub_1:any = ((<any>this.context.setValue(this._el_9.value)) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
}