import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef
} from '@angular/core';

import { PostingComponent } from './posting/posting.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { TransferService } from './datatransfer.service';

@Injectable()
export class DynamicAddService {
  
  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector,
      private transferService: TransferService,
  ) { }
  
  appendComponentToBody(layout=null) {
    // 1. Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(PostingComponent)
      .create(this.injector);
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);
    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0];
    // 4. Append DOM element to the body
    layout.addChild(domElem)
  }

  appendPaymentMethod(method, info, superbody, isAdd, token) {

  }
}