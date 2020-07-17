(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-weblineindia-text-box', ['exports', '@angular/core'], factory) :
    (factory((global['angular-weblineindia-text-box'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TextService = (function () {
        function TextService() {
        }
        TextService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TextService.ctorParameters = function () { return []; };
        /** @nocollapse */ TextService.ngInjectableDef = i0.defineInjectable({ factory: function TextService_Factory() { return new TextService(); }, token: TextService, providedIn: "root" });
        return TextService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TextComponent = (function () {
        function TextComponent() {
            this.maxLength = 10;
            this.isnumberonly = false;
            this.className = {};
            this.disabled = false;
            this.tabindex = 0;
            this.type = "text";
            this.id = "";
            this.name = "";
            this.placeholder = "Enter value";
            this.change = new i0.EventEmitter();
            this.focus = new i0.EventEmitter();
            this.KeyDown = new i0.EventEmitter();
            this.KeyPress = new i0.EventEmitter();
            this.KeyUp = new i0.EventEmitter();
            this.blur = new i0.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        TextComponent.prototype.onFocus = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.focus.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TextComponent.prototype.onBlur = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.blur.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TextComponent.prototype.onChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.change.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TextComponent.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.KeyDown.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TextComponent.prototype.onKeyUp = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.KeyUp.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TextComponent.prototype.onKeyPress = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.KeyPress.emit(event);
            };
        TextComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "lib-text",
                        template: "<input\n[id] =\"id\"\n[name]=\"name\"\n[value]=\"value\"\n[tabindex]=\"tabindex\"\n[placeholder]=\"placeholder\"\n[disabled]=\"disabled\"\n[type]=\"type\"\n[maxLength]=\"maxLength\"\n[className]=\"className\"\n(focus)=\"onFocus($event)\"\n(blur)=\"onBlur($event)\"\n(input)=\"onChange($event)\"\n(keydown)=\"onKeyDown($event)\"\n(keypress)=\"onKeyPress($event)\"\n(keyup)=\"onKeyUp($event)\"\n/>",
                        styles: []
                    },] },
        ];
        TextComponent.propDecorators = {
            maxLength: [{ type: i0.Input }],
            isnumberonly: [{ type: i0.Input }],
            className: [{ type: i0.Input }],
            regex: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            tabindex: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            change: [{ type: i0.Output }],
            focus: [{ type: i0.Output }],
            KeyDown: [{ type: i0.Output }],
            KeyPress: [{ type: i0.Output }],
            KeyUp: [{ type: i0.Output }],
            blur: [{ type: i0.Output }]
        };
        return TextComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TextModule = (function () {
        function TextModule() {
        }
        TextModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [TextComponent],
                        exports: [TextComponent]
                    },] },
        ];
        return TextModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.TextService = TextService;
    exports.TextComponent = TextComponent;
    exports.TextModule = TextModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtdGV4dC1ib3gudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXdlYmxpbmVpbmRpYS10ZXh0LWJveC9saWIvdGV4dC5zZXJ2aWNlLnRzIiwibmc6Ly9hbmd1bGFyLXdlYmxpbmVpbmRpYS10ZXh0LWJveC9saWIvdGV4dC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItd2VibGluZWluZGlhLXRleHQtYm94L2xpYi90ZXh0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRleHRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLXRleHRcIixcbiAgdGVtcGxhdGU6IGA8aW5wdXRcbltpZF0gPVwiaWRcIlxuW25hbWVdPVwibmFtZVwiXG5bdmFsdWVdPVwidmFsdWVcIlxuW3RhYmluZGV4XT1cInRhYmluZGV4XCJcbltwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG5bZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuW3R5cGVdPVwidHlwZVwiXG5bbWF4TGVuZ3RoXT1cIm1heExlbmd0aFwiXG5bY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXG4oZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbihibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcbihpbnB1dCk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbihrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbihrZXlwcmVzcyk9XCJvbktleVByZXNzKCRldmVudClcIlxuKGtleXVwKT1cIm9uS2V5VXAoJGV2ZW50KVwiXG4vPmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG1heExlbmd0aDogTnVtYmVyID0gMTA7XG4gIEBJbnB1dCgpIGlzbnVtYmVyb25seTogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IG9iamVjdCA9IHt9O1xuICBASW5wdXQoKSByZWdleDogYW55O1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB2YWx1ZTogU3RyaW5nO1xuICBASW5wdXQoKSB0YWJpbmRleDogTnVtYmVyID0gMDtcbiAgQElucHV0KCkgdHlwZTogU3RyaW5nID0gXCJ0ZXh0XCI7XG4gIEBJbnB1dCgpIGlkOiBTdHJpbmcgPSBcIlwiO1xuICBASW5wdXQoKSBuYW1lOiBTdHJpbmcgPSBcIlwiO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogU3RyaW5nID0gXCJFbnRlciB2YWx1ZVwiO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIEtleURvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBLZXlQcmVzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIEtleVVwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9uRm9jdXMoZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG4gIG9uQmx1cihldmVudCkge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgfVxuICBvbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIHRoaXMuS2V5RG93bi5lbWl0KGV2ZW50KTtcbiAgfVxuICBvbktleVVwKGV2ZW50KSB7XG4gICAgdGhpcy5LZXlVcC5lbWl0KGV2ZW50KTtcbiAgfVxuICBvbktleVByZXNzKGV2ZW50KSB7XG4gICAgdGhpcy5LZXlQcmVzcy5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tICcuL3RleHQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUZXh0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RleHRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzBCQUpEOzs7Ozs7O0FDQUE7OzZCQXdCK0IsRUFBRTtnQ0FDRSxLQUFLOzZCQUNULEVBQUU7NEJBRUYsS0FBSzs0QkFFTixDQUFDO3dCQUNMLE1BQU07c0JBQ1IsRUFBRTt3QkFDQSxFQUFFOytCQUNLLGFBQWE7MEJBRU4sSUFBSUMsZUFBWSxFQUFPO3lCQUN4QixJQUFJQSxlQUFZLEVBQU87MkJBQ3JCLElBQUlBLGVBQVksRUFBTzs0QkFDdEIsSUFBSUEsZUFBWSxFQUFPO3lCQUMxQixJQUFJQSxlQUFZLEVBQU87d0JBRXhCLElBQUlBLGVBQVksRUFBTzs7Ozs7O1FBRTNELCtCQUFPOzs7O1lBQVAsVUFBUSxLQUFLO2dCQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCOzs7OztRQUNELDhCQUFNOzs7O1lBQU4sVUFBTyxLQUFLO2dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCOzs7OztRQUNELGdDQUFROzs7O1lBQVIsVUFBUyxLQUFLO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCOzs7OztRQUNELGlDQUFTOzs7O1lBQVQsVUFBVSxLQUFLO2dCQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCOzs7OztRQUNELCtCQUFPOzs7O1lBQVAsVUFBUSxLQUFLO2dCQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCOzs7OztRQUNELGtDQUFVOzs7O1lBQVYsVUFBVyxLQUFLO2dCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCOztvQkEzREZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLDZZQWdCVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7O2dDQUVFQyxRQUFLO21DQUNMQSxRQUFLO2dDQUNMQSxRQUFLOzRCQUNMQSxRQUFLOytCQUNMQSxRQUFLOzRCQUNMQSxRQUFLOytCQUNMQSxRQUFLOzJCQUNMQSxRQUFLO3lCQUNMQSxRQUFLOzJCQUNMQSxRQUFLO2tDQUNMQSxRQUFLOzZCQUVMQyxTQUFNOzRCQUNOQSxTQUFNOzhCQUNOQSxTQUFNOytCQUNOQSxTQUFNOzRCQUNOQSxTQUFNOzJCQUVOQSxTQUFNOzs0QkExQ1Q7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQzt3QkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO3FCQUN6Qjs7eUJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=