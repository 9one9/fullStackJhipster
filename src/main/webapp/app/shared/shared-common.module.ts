import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    XSqlJhipsterSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        XSqlJhipsterSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        XSqlJhipsterSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class XSqlJhipsterSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
