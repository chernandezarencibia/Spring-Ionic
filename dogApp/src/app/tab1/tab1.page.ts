import { Component } from '@angular/core';
import { ActionSheetController, AlertController, NavController} from '@ionic/angular';
import { Dog, ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  dog: Dog;
  dogs: Array<Dog> = [

  ];
  getAllDogsButton;
  constructor(private actionSheetController: ActionSheetController, 
    private alertController: AlertController, 
    private api: ApiService, 
    private router: Router) {
  }
  ngOnInit(): void {

  }
  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Dogs',
      buttons: [{
        text: 'Add',
        icon: 'add',
        handler: () => {
          this.addDog();
        }
      }, {
        text: 'Update',
        icon: 'radio',
        handler: () => {

          this.sendInfoToUpdateForm();

        }
      }, {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteDog();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }

  async sendInfoToUpdateForm() {
    let alert = await this.alertController.create({
      header: "Find",
      message: 'Select the id of the dog you want to update',
      inputs: [{ name: 'editDog', placeholder: 'id' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Find', handler: data => {

          this.router.navigate(["/update-form/" + data.editDog])
          
        }
      }
      ]
    });
    alert.present();
  }

  getAllDogs() {
    this.api.getAllDogs().subscribe((res: Array<Dog>) => {
      this.dogs = res;
    });
    this.getAllDogsButton = document.getElementById("getDogsButton").setAttribute('disabled', 'disabled');

  }

  addDog() {
    this.router.navigate(["/form"]);
  }

  async deleteDog() {
    let alert = await this.alertController.create({
      message: "Select the id of the dog you want to delete",
      inputs: [{ name: 'editId', placeholder: 'Id' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Delete', handler: data => {
          this.api.deleteDog(data.editId).subscribe(res => {

          }, (err) => {
            console.log(err);
          });
        }
      }
      ]
    });
    alert.present();
  }

  getOneDog() {
    // this.api.getOneDog(id).subscribe((res: Dog) => {
    //   this.dog = res;
    // })
  }
}

