import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/common/Storage/storage.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public appPages = [
    { title: 'Profile', url: '/home/profile', icon: 'person' , show:true },
    { title: 'Test', url: '/home/test', icon: 'paper-plane', show:true },
    { title: 'Student-Test', url: '/home/studenttest', icon: 'clipboard' , show:true},
    { title: 'Result', url: '/home/result', icon: 'heart' , show:true}
  ];
  userInfo: any;


  constructor(private storageService:StorageService, private alertController: AlertController) {
    console.log('Home!!')
    this.storageService.checkSession();
   }

  ngOnInit() {

    this.storageService.getItem('UserInfo')?.then(data=>{
      this.userInfo= JSON.parse(data);
      if(this.userInfo.UserTypeId===1){
        this.appPages[2].show=false
      }
      else{
        this.appPages[1].show=false
      }

    })

  }

  logout(){
    this.storageService.clearStorage()
    this.storageService.checkSession();
  }


  AlertConfirm() {
    this.logout()

    // this.alertController.create({
    //   cssClass: 'my-custom-class',
    //   header: 'Confirm',
    //   message: 'Do you want to logout?',
    //   buttons: [
    //     {
    //       text: 'No',
    //       role: 'cancel',
    //       id: 'cancel-button',
    //       handler: (blah) => {
    //         console.log('Confirm Cancel');
    //       }
    //     }, {
    //       text: 'Yes',
    //       id: 'confirm-button',
    //       handler: () => {
    //         console.log('Confirm yes');
    //         this.logout()
    //       }
    //     }
    //   ]
    // }).then(alert=>{
    //   alert.present().then(data=>{

    //   }).catch(reason=>{
    //     console.log(reason)
    //   })
    // }).catch(reason=>{
    //   console.log(reason)
    // })


  }

}
