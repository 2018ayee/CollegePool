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

  appendPaymentMethod(method, info, superbody, isAdd, token) {
    // 1. Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(PaymentMethodComponent)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);
    
    // 3. Get DOM element from component and add necessary info
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    var elem = domElem.getElementsByClassName('payment-type-icon')[0];
    var div = domElem.getElementsByClassName('payment-method')[0] as HTMLElement;
    div.style.cursor = 'pointer';
    const body = {
      info: info,
      token: token
    }
    if(method == 'card')
    {
      elem.className += ' credit-card-icon';
      if(isAdd)
        div.addEventListener('click', () => {
          document.getElementById('payment-modal').style.display = 'block';
        });
      else
        div.addEventListener('click', () => {
          this.transferService.setData(body);
          document.getElementById('open-edit').click();
        });
    }
    else if(method == 'paypal')
    {
      elem.className += ' paypal-icon';
      if(isAdd)
        div.addEventListener('click', () => {
          document.getElementById('payment-paypal-modal').style.display = 'block';
        });
      else
        div.addEventListener('click', () => {
          this.transferService.setData(body);
          document.getElementById('open-edit').click();
        });
    }
    else if(method == 'venmo')
    {
      elem.className += ' venmo-icon';
      div.id = "add-venmo-button";
      if(isAdd)
        div.addEventListener('click', () => {
          document.getElementById('payment-venmo-modal').style.display = 'block';
        });
      else
        div.addEventListener('click', () => {
          this.transferService.setData(body);
          document.getElementById('open-edit').click();
        });
    }
    
    domElem.getElementsByClassName('payment-type-details')[0].innerHTML = info;

    // 4. Append DOM element to the body
    const b = document.getElementById(superbody);
    b.appendChild(domElem);
  }
}