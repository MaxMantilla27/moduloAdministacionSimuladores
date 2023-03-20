import { ElementRef, Injectable, ViewChild,  ViewContainerRef,} from '@angular/core';
import { NotificationService,} from '@progress/kendo-angular-notification';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  static mensajeError: any;
  @ViewChild('contentDrawer', { read: ViewContainerRef })
  contentDrawer: ViewContainerRef;

  constructor(
    private notificationService: NotificationService,
  ) {}
  mensajeEliminar() {
    return Swal.fire({
      title: '¿Está seguro de eliminar el registro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4C5FC0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false,
    });
  }

  mensajeEliminarTemporal() {
    return Swal.fire({
      title: '¿Está seguro de eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4C5FC0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false,
    });
  }

  mensajeError(error: any) {
    return Swal.fire({
      icon: 'error',
      html: `<p class="text-start">${error.error}</p>
            <p class="text-start text-danger fs-6">${error.message}</p>`,
      allowOutsideClick: false,
    });
  }
  mensajeExitosoWhatsapp(mensaje?: string) {
    const Toast = Swal.mixin({
      toast: true,
      target: '#content-drawer-message',
      // customClass: {
      //   container: 'swal2-container-integra',
      // },
      position: 'top-left',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    return Toast.fire({
      icon: 'success',
      title: mensaje != null ? mensaje : 'Se envio el mensaje con exito',
    });
  }
  mensajeExitoso(mensaje?: string) {
    const Toast = Swal.mixin({
      toast: true,
      target: '#content-drawer-component',
      customClass: {
        container: 'swal2-container-integra',
      },
      position: 'top-right',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    return Toast.fire({
      icon: 'success',
      title: mensaje != null ? mensaje : 'Guardado con exito',
    });
  }

  mensajeExitosoPrueba(mensaje?: string) {
    const Toast = Swal.mixin({
      toast: true,
      target: '#content-drawer-component',
      customClass: {
        container: 'swal2-container-integra',
      },
      position: 'top-right',
      showConfirmButton: false,
      timer: 80000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    return Toast.fire({
      icon: 'success',
      title: mensaje != null ? mensaje : 'Guardado con exito',
    });
  }

  mensajeCorreoExitoso() {
    return Swal.fire({
      title: 'Mensaje Enviado',
      icon: 'success',
      confirmButtonColor: '#4C5FC0',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false,
    });
  }
  mensajeCorreoEnviado() {
    const Toast = Swal.mixin({
      toast: true,
      target: '#content-drawer-component',
      customClass: {
        container: 'position-absolute',
      },
      position: 'top-right',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    return Toast.fire({
      icon: 'success',
      title: 'Enviado con exito',
    });
  }
  mensajeWarning(text:string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'warning',
      title: text
    })
  }
  customMensaje(options: SweetAlertOptions<any>) {
    return Swal.fire(options);
  }
  swalFireOptions(options: SweetAlertOptions<any>) {
    return Swal.fire(options);
  }

  swalFire(titulo: string, html: string, icon: SweetAlertIcon) {
    return Swal.fire(titulo, html, icon);
  }

  swal(titulo: string) {
    return Swal.fire(titulo);
  }

  mensajeIcon(title?: string, html?: string, icon?: SweetAlertIcon) {
    return Swal.fire({
      title: title,
      text: html,
      icon: icon,
      allowOutsideClick: false,
    });
  }

  notificationDefault(
    content: string,
    viewContainerRef?: ViewContainerRef
  ): void {
    this.notificationService.show({
      appendTo: viewContainerRef ? viewContainerRef : this.contentDrawer,
      content: content,
      hideAfter: 2000,
      position: { horizontal: 'right', vertical: 'top' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'none', icon: false },
    });
  }

  notificationSuccess(content: any, viewContainerRef?: ViewContainerRef): void {
    this.notificationService.show({
      appendTo: viewContainerRef ? viewContainerRef : this.contentDrawer,
      content: content,
      hideAfter: 2000,
      closable: false,
      position: { horizontal: 'right', vertical: 'top' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'success', icon: true },
    });
  }
  notificationWarning(content: any, closable: boolean = false, viewContainerRef?: ViewContainerRef): void {
    this.notificationService.show({
      appendTo: viewContainerRef ? viewContainerRef : this.contentDrawer,
      content: content,
      hideAfter: 2000,
      closable: closable,
      position: { horizontal: 'right', vertical: 'bottom' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'warning', icon: true },
    });
  }
  notificationInfo(content: any, closable: boolean = false, viewContainerRef?: ViewContainerRef): void {
    this.notificationService.show({
      appendTo: viewContainerRef ? viewContainerRef : this.contentDrawer,
      content: content,
      hideAfter: 2000,
      closable: closable,
      position: { horizontal: 'right', vertical: 'bottom' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'info', icon: true },
    });
  }
  notificationError(
    content: any,
    horizontal: 'left' | 'center' | 'right' = 'right',
    vertical: 'top' | 'bottom' = 'bottom',
    viewContainerRef?: ViewContainerRef
  ): void {
    console.log(content);
    console.log(viewContainerRef);
    console.log(this.contentDrawer);
    this.notificationService.show({
      appendTo: viewContainerRef ? viewContainerRef : this.contentDrawer,
      content: content,
      hideAfter: 2000,
      closable: false,
      cssClass: 'button-notification',
      position: { horizontal: horizontal, vertical: vertical },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'error', icon: true },
    });
  }

  getMessageErrorService(error: any){
    if(error?.error){
      if(typeof error.error == 'object'){
        return JSON.stringify(error.error);
      }else{
        return error.error
      }
    }else{
      if(typeof error.message == 'object'){
        return JSON.stringify(error.message);
      }else{
        return error.message
      }
    }
  }
}
