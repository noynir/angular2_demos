import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';


export interface CanComponentDeactivate {
    CanDeactivate: ()=> boolean | Observable<boolean> | Promise<boolean>;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    CanDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
        return component.CanDeactivate ? component.CanDeactivate() : true;
    }


}