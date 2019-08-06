import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import * as firebase from 'nativescript-plugin-firebase';
import { LogincheckService } from '../logincheck.service.tns';
import { TransferService } from '../datatransfer.service';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { Label } from 'tns-core-modules/ui/label';


@Component({
    selector: 'app-forget-form',
    templateUrl: './forget-form.component.html',
    styleUrls: ['./forget-form.component.css']
})
export class ForgetFormComponent implements OnInit {

    constructor(private params: ModalDialogParams, private transferService: TransferService, private logincheckService: LogincheckService,
        private vcRef: ViewContainerRef, private modal: ModalDialogService) { }

    @ViewChild("errorMessage") em: ElementRef;

    ngOnInit() {
    }

    close(res) {
        let errorMessage = <Label>this.em.nativeElement;
        errorMessage.style.visibility = 'collapse';
        this.params.closeCallback(res);
    }

    submit(email) {
        // console.log("email", email)
        firebase.sendPasswordResetEmail(email).then(
            () => {
                this.alert('An email has been sent to ' + email + ' with details of how to recover your account')
                this.close('cancel')
            },
            (error) => {
                let errorMessage = <Label> this.em.nativeElement;
                errorMessage.style.visibility = 'visible';
            }
        );
    }
    alert(message: string) {
        return alert({
            title: "CollegePool",
            okButtonText: "Close",
            message: message
        });
    }
}


