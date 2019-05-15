import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef
} from '@angular/core';

import { PostingComponent } from './posting/posting.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

@Injectable()
export class DynamicAddService {
  
  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector
  ) { }
  
  appendComponentToBody() {
    // 1. Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(PostingComponent)
      .create(this.injector);
    
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);
    
    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    
    // 4. Append DOM element to the body
    document.body.appendChild(domElem);
    
    // 5. Wait some time and remove it from the component tree and from the DOM
    setTimeout(() => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }, 3000);
  }

  appendPaymentMethod(method, info, superbody) {
    // 1. Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(PaymentMethodComponent)
      .create(this.injector);
    
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);
    
    // 3. Get DOM element from component and add necessary info
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    if(method == 'card')
    {
      domElem.getElementsByClassName('payment-type-icon')[0].className += ' credit-card-icon';
      domElem.getElementsByClassName('payment-method')[0].addEventListener('click', function() {
        document.getElementById('payment-modal').style.display = 'block';
      })
    }
    else if(method == 'paypal')
    {
      domElem.getElementsByClassName('payment-type-icon')[0].className += ' paypal-icon';
      domElem.getElementsByClassName('payment-method')[0].addEventListener('click', function() {
        document.getElementById('payment-paypal-modal').style.display = 'block';
      })
    }
    else if(method == 'venmo')
    {
      domElem.getElementsByClassName('payment-type-icon')[0].className += ' venmo-icon';
    }
    
    domElem.getElementsByClassName('payment-type-details')[0].innerHTML = info;

    // 4. Append DOM element to the body
    const b = document.getElementById(superbody);
    b.appendChild(domElem);
  }
}