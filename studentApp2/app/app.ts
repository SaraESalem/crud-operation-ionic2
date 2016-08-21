import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {StudentService} from "./pages/services/student.service";
import {HomePage} from "./pages/home/home";
import {ModalPage} from "./pages/modals/modal.page";


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [StudentService],
  directives: [HomePage, ModalPage],
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform,private studentservice: StudentService) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
