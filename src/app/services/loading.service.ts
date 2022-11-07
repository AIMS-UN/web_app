import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LoadingScreenComponent } from '../components/loading-screen/loading-screen.component';

@Injectable({
    providedIn: 'root',
})
export class SpinnerOverlayService {
    private overlayRef: OverlayRef;

    constructor(private overlay: Overlay) {
        this.overlayRef = this.overlay.create();
    }

    public show() {
        const spinnerOverlayPortal = new ComponentPortal(
            LoadingScreenComponent
        );

        this.overlayRef.attach(spinnerOverlayPortal);
    }

    public hide() {
        if (!!this.overlayRef) {
            this.overlayRef.detach();
        }
    }
}
