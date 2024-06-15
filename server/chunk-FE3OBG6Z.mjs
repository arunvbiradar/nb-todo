import './polyfills.server.mjs';
import{$ as C,Ea as he,Ga as fe,Ha as $,I as P,J as k,K as d,Ka as pe,La as ge,M as g,Ma as me,N as ee,Na as ye,Oa as ve,P as E,Q as te,R as c,Ra as _e,S as m,V as ie,W as j,X as G,Y as ne,Z as B,_ as F,aa as s,ba as U,ea as V,h as K,ia as re,ja as R,ka as oe,la as h,m as J,ma as f,oa as se,pa as y,qa as H,r as Q,ra as D,sa as ae,ta as le,ua as ue,va as de,wa as L,za as ce}from"./chunk-6JUNAERN.mjs";import{a as l,b as p}from"./chunk-VVCT4QZE.mjs";var v={url:"http://localhost:3000/todos"};var Ce=(()=>{let e=class e{constructor(i){this.http=i}getTodos(){return this.http.get(v.url)}addTodo(i){return this.http.post(v.url,i)}updateTodo(i){return console.log(`apiUrl: ${v.url}, todo.id: ${i.id}`),this.http.put(`${v.url}/${i.id}`,i).subscribe(r=>{console.log(r)})}deleteTodo(i){return this.http.delete(`${v.url}/${i}`)}};e.\u0275fac=function(r){return new(r||e)(ee(ge))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var we=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(U),s(B))},e.\u0275dir=m({type:e});let t=e;return t})(),$e=(()=>{let e=class e extends we{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ne(e)))(o||e)}})(),e.\u0275dir=m({type:e,features:[V]});let t=e;return t})(),Ie=new g("");var We={provide:Ie,useExisting:P(()=>O),multi:!0};function qe(){let t=$()?$().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ze=new g(""),O=(()=>{let e=class e extends we{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!qe())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(U),s(B),s(ze,8))},e.\u0275dir=m({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&y("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[L([We]),V]});let t=e;return t})();var Ze=new g(""),Xe=new g("");function Se(t){return t!=null}function Ne(t){return ce(t)?K(t):t}function Oe(t){let e={};return t.forEach(n=>{e=n!=null?l(l({},e),n):e}),Object.keys(e).length===0?null:e}function xe(t,e){return e.map(n=>n(t))}function Ye(t){return!t.validate}function Te(t){return t.map(e=>Ye(e)?e:n=>e.validate(n))}function Ke(t){if(!t)return null;let e=t.filter(Se);return e.length==0?null:function(n){return Oe(xe(n,e))}}function Pe(t){return t!=null?Ke(Te(t)):null}function Je(t){if(!t)return null;let e=t.filter(Se);return e.length==0?null:function(n){let i=xe(n,e).map(Ne);return Q(i).pipe(J(Oe))}}function ke(t){return t!=null?Je(Te(t)):null}function Ve(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Qe(t){return t._rawValidators}function et(t){return t._rawAsyncValidators}function W(t){return t?Array.isArray(t)?t:[t]:[]}function S(t,e){return Array.isArray(t)?t.includes(e):t===e}function De(t,e){let n=W(e);return W(t).forEach(r=>{S(n,r)||n.push(r)}),n}function be(t,e){return W(e).filter(n=>!S(t,n))}var N=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Pe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ke(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},q=class extends N{get formDirective(){return null}get path(){return null}},M=class extends N{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},z=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},tt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Wt=p(l({},tt),{"[class.ng-submitted]":"isSubmitted"}),je=(()=>{let e=class e extends z{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(M,2))},e.\u0275dir=m({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&oe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[V]});let t=e;return t})();var b="VALID",I="INVALID",_="PENDING",A="DISABLED";function it(t){return(x(t)?t.validators:t)||null}function nt(t){return Array.isArray(t)?Pe(t):t||null}function rt(t,e){return(x(e)?e.asyncValidators:t)||null}function ot(t){return Array.isArray(t)?ke(t):t||null}function x(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Z=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===I}get pending(){return this.status==_}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(De(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(De(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(be(e,this._rawAsyncValidators))}hasValidator(e){return S(this._rawValidators,e)}hasAsyncValidator(e){return S(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=_,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=A,this.errors=null,this._forEachChild(i=>{i.disable(p(l({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(l({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(i=>{i.enable(p(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(p(l({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===_)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator=!0;let n=Ne(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?I:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(I)?I:b}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){x(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ot(this._rawAsyncValidators)}};var Ge=new g("CallSetDisabledState",{providedIn:"root",factory:()=>X}),X="always";function st(t,e){return[...e.path,t]}function at(t,e,n=X){ut(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),dt(t,e),ht(t,e),ct(t,e),lt(t,e)}function Ae(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function lt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ut(t,e){let n=Qe(t);e.validator!==null?t.setValidators(Ve(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=et(t);e.asyncValidator!==null?t.setAsyncValidators(Ve(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Ae(e._rawValidators,r),Ae(e._rawAsyncValidators,r)}function dt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Be(t,e)})}function ct(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Be(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Be(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ht(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function ft(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function pt(t){return Object.getPrototypeOf(t.constructor)===$e}function gt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===O?n=o:pt(o)?i=o:r=o}),r||i||n||null}function Me(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ee(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var mt=class extends Z{constructor(e=null,n,i){super(it(n),rt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),x(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ee(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Me(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Me(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ee(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var yt={provide:M,useExisting:P(()=>Y)},Fe=Promise.resolve(),Y=(()=>{let e=class e extends M{constructor(i,r,o,u,a,He){super(),this._changeDetectorRef=a,this.callSetDisabledState=He,this.control=new mt,this._registered=!1,this.name="",this.update=new F,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=gt(this,u)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),ft(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){at(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Fe.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&fe(r);Fe.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?st(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(s(q,9),s(Ze,10),s(Xe,10),s(Ie,10),s(he,8),s(Ge,8))},e.\u0275dir=m({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[E.None,"disabled","isDisabled"],model:[E.None,"ngModel","model"],options:[E.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[L([yt]),V,ie]});let t=e;return t})();var vt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({});let t=e;return t})();var Ue=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Ge,useValue:i.callSetDisabledState??X}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({imports:[vt]});let t=e;return t})();function Ct(t,e){if(t&1){let n=se();h(0,"div",6)(1,"input",7),y("change",function(){let r=j(n).$implicit,o=H();return G(o.updateTodo(r))}),f(),D(2),h(3,"button",8),y("click",function(){let r=j(n).$implicit,o=H();return G(o.deleteTodo(r.id))}),D(4," Delete "),f()()}if(t&2){let n=e.$implicit;C(),R("checked",n.completed),C(),ae(" ",n.title," ")}}var T=(()=>{let e=class e{constructor(i,r){this._todoService=i,this._title=r,this.todos=[],this.newTodoTitle=""}ngOnInit(){this.getTodos(),this._title.setTitle("Todo Application")}getTodos(){this._todoService.getTodos().subscribe(i=>this.todos=i)}addTodo(){if(this.newTodoTitle.trim()){let i={id:String(this.todos.length+1),title:this.newTodoTitle,completed:!1};this._todoService.addTodo(i).subscribe(r=>{this.todos.push(r),this.newTodoTitle=""})}}updateTodo(i){i.completed=!i.completed,this._todoService.updateTodo(i)}deleteTodo(i){this._todoService.deleteTodo(i).subscribe(()=>{this.todos=this.todos.filter(r=>r.id!==i)})}};e.\u0275fac=function(r){return new(r||e)(s(Ce),s(ve))},e.\u0275cmp=te({type:e,selectors:[["app-root"]],decls:9,vars:2,consts:[[2,"margin","24px auto","max-width","500px"],[2,"display","flex","gap","16px"],["placeholder","New todo title",2,"height","36px","padding","0 12px","flex-grow","1",3,"ngModelChange","ngModel"],[2,"padding","0 12px",3,"click"],[2,"margin","24px 0","border-top","1px solid #ccc"],["style",`
        display: flex;
        align-items: center;
        padding: 8px;
        border-bottom: 1px solid #ccc;
      `,4,"ngFor","ngForOf"],[2,"display","flex","align-items","center","padding","8px","border-bottom","1px solid #ccc"],["type","checkbox",2,"margin-right","16px",3,"change","checked"],[2,"margin-left","auto","padding","4px 8px",3,"click"]],template:function(r,o){r&1&&(h(0,"div",0)(1,"h1"),D(2,"Todos"),f(),h(3,"div",1)(4,"input",2),de("ngModelChange",function(a){return ue(o.newTodoTitle,a)||(o.newTodoTitle=a),a}),f(),h(5,"button",3),y("click",function(){return o.addTodo()}),D(6,"Add Todo"),f()(),h(7,"div",4),re(8,Ct,5,2,"div",5),f()()),r&2&&(C(4),le("ngModel",o.newTodoTitle),C(4),R("ngForOf",o.todos))},dependencies:[pe,O,je,Y]});let t=e;return t})();var Re=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e,bootstrap:[T]}),e.\u0275inj=d({imports:[ye,Ue,me]});let t=e;return t})();var Vt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e,bootstrap:[T]}),e.\u0275inj=d({imports:[Re,_e]});let t=e;return t})();export{Vt as a};