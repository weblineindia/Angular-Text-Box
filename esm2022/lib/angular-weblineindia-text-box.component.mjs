import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class AngularWeblineindiaTextBoxComponent {
    constructor() {
        this.disabled = false;
        this.maxlength = 25;
        this.isnumberonly = false;
        this.required = false;
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.KeyPress = new EventEmitter();
        this.KeyDown = new EventEmitter();
        this.KeyUp = new EventEmitter();
        console.log('clads', this.classname);
    }
    onFocus() {
        this.focus.emit();
    }
    onBlur() {
        this.blur.emit();
    }
    onChange(event) {
        const value = event.target.value;
        if (!this.regex || this.regex.test(value)) {
            this.change.emit(value);
        }
    }
    onKeyPress(event) {
        this.KeyPress.emit(event);
    }
    onKeyDown(event) {
        this.KeyDown.emit(event);
    }
    onKeyUp(event) {
        this.KeyUp.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AngularWeblineindiaTextBoxComponent, selector: "angular-weblineindia-text-box", inputs: { id: "id", name: "name", value: "value", classname: "classname", placeholder: "placeholder", disabled: "disabled", maxlength: "maxlength", regex: "regex", isnumberonly: "isnumberonly", required: "required" }, outputs: { focus: "focus", blur: "blur", change: "change", KeyPress: "KeyPress", KeyDown: "KeyDown", KeyUp: "KeyUp" }, ngImport: i0, template: "<input\r\n  [id]=\"id !== undefined ? id : ''\"\r\n  [name]=\"name !== undefined ? name : ''\"\r\n  [value]=\"value !== undefined ? value : ''\"\r\n  [class]=\"classname !== undefined ? classname : ''\"\r\n  [placeholder]=\"placeholder !== undefined ? placeholder : ''\"\r\n  [disabled]=\"disabled\"\r\n  [attr.maxlength]=\"maxlength\"\r\n  [required]=\"required ? true : null\"\r\n  [type]=\"isnumberonly ? 'number' : 'text'\"\r\n  (focus)=\"onFocus()\"\r\n  (blur)=\"onBlur()\"\r\n  (input)=\"onChange($event)\"\r\n  (keypress)=\"onKeyPress($event)\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n  (keyup)=\"onKeyUp($event)\"\r\n/>\r\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'angular-weblineindia-text-box', template: "<input\r\n  [id]=\"id !== undefined ? id : ''\"\r\n  [name]=\"name !== undefined ? name : ''\"\r\n  [value]=\"value !== undefined ? value : ''\"\r\n  [class]=\"classname !== undefined ? classname : ''\"\r\n  [placeholder]=\"placeholder !== undefined ? placeholder : ''\"\r\n  [disabled]=\"disabled\"\r\n  [attr.maxlength]=\"maxlength\"\r\n  [required]=\"required ? true : null\"\r\n  [type]=\"isnumberonly ? 'number' : 'text'\"\r\n  (focus)=\"onFocus()\"\r\n  (blur)=\"onBlur()\"\r\n  (input)=\"onChange($event)\"\r\n  (keypress)=\"onKeyPress($event)\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n  (keyup)=\"onKeyUp($event)\"\r\n/>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { id: [{
                type: Input
            }], name: [{
                type: Input
            }], value: [{
                type: Input
            }], classname: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], regex: [{
                type: Input
            }], isnumberonly: [{
                type: Input
            }], required: [{
                type: Input
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], change: [{
                type: Output
            }], KeyPress: [{
                type: Output
            }], KeyDown: [{
                type: Output
            }], KeyUp: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtdGV4dC1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13ZWJsaW5laW5kaWEtdGV4dC1ib3gvc3JjL2xpYi9hbmd1bGFyLXdlYmxpbmVpbmRpYS10ZXh0LWJveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdlYmxpbmVpbmRpYS10ZXh0LWJveC9zcmMvbGliL2FuZ3VsYXItd2VibGluZWluZGlhLXRleHQtYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3ZFLE1BQU0sT0FBTyxtQ0FBbUM7SUFzQjlDO1FBaEJTLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV2QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRXpCLFVBQUssR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNyRCxTQUFJLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDcEQsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzFELGFBQVEsR0FDaEIsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDMUIsWUFBTyxHQUNmLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzFCLFVBQUssR0FDYixJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUdsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBb0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFvQjtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOytHQW5EVSxtQ0FBbUM7bUdBQW5DLG1DQUFtQyxzWkNQaEQsMG5CQWlCQTs7NEZEVmEsbUNBQW1DO2tCQUwvQyxTQUFTOytCQUNFLCtCQUErQjswRUFLaEMsRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBRUcsT0FBTztzQkFBaEIsTUFBTTtnQkFFRyxLQUFLO3NCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLXdlYmxpbmVpbmRpYS10ZXh0LWJveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuZ3VsYXItd2VibGluZWluZGlhLXRleHQtYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcldlYmxpbmVpbmRpYVRleHRCb3hDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGlkITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG5hbWUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2xhc3NuYW1lITogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBtYXhsZW5ndGg6IG51bWJlciA9IDI1O1xyXG4gIEBJbnB1dCgpIHJlZ2V4ITogUmVnRXhwO1xyXG4gIEBJbnB1dCgpIGlzbnVtYmVyb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgS2V5UHJlc3M6IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9XHJcbiAgICBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIEtleURvd246IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9XHJcbiAgICBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIEtleVVwOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPVxyXG4gICAgbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGFkcycsdGhpcy5jbGFzc25hbWUpOyAgICBcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuYmx1ci5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIGlmICghdGhpcy5yZWdleCB8fCB0aGlzLnJlZ2V4LnRlc3QodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5LZXlQcmVzcy5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5LZXlEb3duLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5LZXlVcC5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiPGlucHV0XHJcbiAgW2lkXT1cImlkICE9PSB1bmRlZmluZWQgPyBpZCA6ICcnXCJcclxuICBbbmFtZV09XCJuYW1lICE9PSB1bmRlZmluZWQgPyBuYW1lIDogJydcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiAnJ1wiXHJcbiAgW2NsYXNzXT1cImNsYXNzbmFtZSAhPT0gdW5kZWZpbmVkID8gY2xhc3NuYW1lIDogJydcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkID8gcGxhY2Vob2xkZXIgOiAnJ1wiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICBbYXR0ci5tYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCJcclxuICBbcmVxdWlyZWRdPVwicmVxdWlyZWQgPyB0cnVlIDogbnVsbFwiXHJcbiAgW3R5cGVdPVwiaXNudW1iZXJvbmx5ID8gJ251bWJlcicgOiAndGV4dCdcIlxyXG4gIChmb2N1cyk9XCJvbkZvY3VzKClcIlxyXG4gIChibHVyKT1cIm9uQmx1cigpXCJcclxuICAoaW5wdXQpPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgKGtleXByZXNzKT1cIm9uS2V5UHJlc3MoJGV2ZW50KVwiXHJcbiAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxyXG4gIChrZXl1cCk9XCJvbktleVVwKCRldmVudClcIlxyXG4vPlxyXG4iXX0=