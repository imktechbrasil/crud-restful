/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './primeng.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from 'primeng/components/button/button';
import * as import4 from 'primeng/components/inputtext/inputtext';
import * as import5 from 'primeng/components/calendar/calendar';
import * as import6 from 'primeng/components/common/shared';
import * as import7 from 'primeng/components/dropdown/dropdown';
import * as import8 from 'primeng/components/checkbox/checkbox';
import * as import9 from 'primeng/components/slider/slider';
import * as import10 from 'primeng/components/inplace/inplace';
import * as import11 from 'primeng/components/inputmask/inputmask';
import * as import12 from 'primeng/components/tabview/tabview';
import * as import13 from 'primeng/components/confirmdialog/confirmdialog';
import * as import14 from 'primeng/components/paginator/paginator';
import * as import15 from '@angular/forms/src/directives';
import * as import16 from '@angular/forms/src/form_providers';
import * as import17 from 'primeng/components/datatable/datatable';
import * as import18 from 'primeng/components/multiselect/multiselect';
import * as import19 from 'primeng/components/panel/panel';
import * as import20 from 'primeng/components/tree/tree';
import * as import21 from 'primeng/components/togglebutton/togglebutton';
import * as import22 from 'primeng/components/inputswitch/inputswitch';
import * as import23 from 'primeng/components/accordion/accordion';
import * as import24 from 'primeng/components/chips/chips';
import * as import25 from '@angular/common/src/localization';
import * as import26 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import27 from 'primeng/components/common/api';
import * as import28 from '@angular/core/src/di/injector';
import * as import29 from '@angular/core/src/i18n/tokens';
class PrimeNgModuleInjector extends import0.NgModuleInjector<import1.PrimeNgModule> {
  _CommonModule_0:import2.CommonModule;
  _ButtonModule_1:import3.ButtonModule;
  _InputTextModule_2:import4.InputTextModule;
  _CalendarModule_3:import5.CalendarModule;
  _SharedModule_4:import6.SharedModule;
  _DropdownModule_5:import7.DropdownModule;
  _CheckboxModule_6:import8.CheckboxModule;
  _SliderModule_7:import9.SliderModule;
  _InplaceModule_8:import10.InplaceModule;
  _InputMaskModule_9:import11.InputMaskModule;
  _TabViewModule_10:import12.TabViewModule;
  _ConfirmDialogModule_11:import13.ConfirmDialogModule;
  _PaginatorModule_12:import14.PaginatorModule;
  _InternalFormsSharedModule_13:import15.InternalFormsSharedModule;
  _FormsModule_14:import16.FormsModule;
  _DataTableModule_15:import17.DataTableModule;
  _MultiSelectModule_16:import18.MultiSelectModule;
  _PanelModule_17:import19.PanelModule;
  _TreeModule_18:import20.TreeModule;
  _ToggleButtonModule_19:import21.ToggleButtonModule;
  _InputSwitchModule_20:import22.InputSwitchModule;
  _AccordionModule_21:import23.AccordionModule;
  _ChipsModule_22:import24.ChipsModule;
  _PrimeNgModule_23:import1.PrimeNgModule;
  __NgLocalization_24:import25.NgLocaleLocalization;
  __RadioControlRegistry_25:import26.RadioControlRegistry;
  __ConfirmationService_26:import27.ConfirmationService;
  constructor(parent:import28.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_24():import25.NgLocaleLocalization {
    if ((this.__NgLocalization_24 == null)) { (this.__NgLocalization_24 = new import25.NgLocaleLocalization(this.parent.get(import29.LOCALE_ID))); }
    return this.__NgLocalization_24;
  }
  get _RadioControlRegistry_25():import26.RadioControlRegistry {
    if ((this.__RadioControlRegistry_25 == null)) { (this.__RadioControlRegistry_25 = new import26.RadioControlRegistry()); }
    return this.__RadioControlRegistry_25;
  }
  get _ConfirmationService_26():import27.ConfirmationService {
    if ((this.__ConfirmationService_26 == null)) { (this.__ConfirmationService_26 = new import27.ConfirmationService()); }
    return this.__ConfirmationService_26;
  }
  createInternal():import1.PrimeNgModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ButtonModule_1 = new import3.ButtonModule();
    this._InputTextModule_2 = new import4.InputTextModule();
    this._CalendarModule_3 = new import5.CalendarModule();
    this._SharedModule_4 = new import6.SharedModule();
    this._DropdownModule_5 = new import7.DropdownModule();
    this._CheckboxModule_6 = new import8.CheckboxModule();
    this._SliderModule_7 = new import9.SliderModule();
    this._InplaceModule_8 = new import10.InplaceModule();
    this._InputMaskModule_9 = new import11.InputMaskModule();
    this._TabViewModule_10 = new import12.TabViewModule();
    this._ConfirmDialogModule_11 = new import13.ConfirmDialogModule();
    this._PaginatorModule_12 = new import14.PaginatorModule();
    this._InternalFormsSharedModule_13 = new import15.InternalFormsSharedModule();
    this._FormsModule_14 = new import16.FormsModule();
    this._DataTableModule_15 = new import17.DataTableModule();
    this._MultiSelectModule_16 = new import18.MultiSelectModule();
    this._PanelModule_17 = new import19.PanelModule();
    this._TreeModule_18 = new import20.TreeModule();
    this._ToggleButtonModule_19 = new import21.ToggleButtonModule();
    this._InputSwitchModule_20 = new import22.InputSwitchModule();
    this._AccordionModule_21 = new import23.AccordionModule();
    this._ChipsModule_22 = new import24.ChipsModule();
    this._PrimeNgModule_23 = new import1.PrimeNgModule();
    return this._PrimeNgModule_23;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ButtonModule)) { return this._ButtonModule_1; }
    if ((token === import4.InputTextModule)) { return this._InputTextModule_2; }
    if ((token === import5.CalendarModule)) { return this._CalendarModule_3; }
    if ((token === import6.SharedModule)) { return this._SharedModule_4; }
    if ((token === import7.DropdownModule)) { return this._DropdownModule_5; }
    if ((token === import8.CheckboxModule)) { return this._CheckboxModule_6; }
    if ((token === import9.SliderModule)) { return this._SliderModule_7; }
    if ((token === import10.InplaceModule)) { return this._InplaceModule_8; }
    if ((token === import11.InputMaskModule)) { return this._InputMaskModule_9; }
    if ((token === import12.TabViewModule)) { return this._TabViewModule_10; }
    if ((token === import13.ConfirmDialogModule)) { return this._ConfirmDialogModule_11; }
    if ((token === import14.PaginatorModule)) { return this._PaginatorModule_12; }
    if ((token === import15.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_13; }
    if ((token === import16.FormsModule)) { return this._FormsModule_14; }
    if ((token === import17.DataTableModule)) { return this._DataTableModule_15; }
    if ((token === import18.MultiSelectModule)) { return this._MultiSelectModule_16; }
    if ((token === import19.PanelModule)) { return this._PanelModule_17; }
    if ((token === import20.TreeModule)) { return this._TreeModule_18; }
    if ((token === import21.ToggleButtonModule)) { return this._ToggleButtonModule_19; }
    if ((token === import22.InputSwitchModule)) { return this._InputSwitchModule_20; }
    if ((token === import23.AccordionModule)) { return this._AccordionModule_21; }
    if ((token === import24.ChipsModule)) { return this._ChipsModule_22; }
    if ((token === import1.PrimeNgModule)) { return this._PrimeNgModule_23; }
    if ((token === import25.NgLocalization)) { return this._NgLocalization_24; }
    if ((token === import26.RadioControlRegistry)) { return this._RadioControlRegistry_25; }
    if ((token === import27.ConfirmationService)) { return this._ConfirmationService_26; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const PrimeNgModuleNgFactory:import0.NgModuleFactory<import1.PrimeNgModule> = new import0.NgModuleFactory(PrimeNgModuleInjector,import1.PrimeNgModule);