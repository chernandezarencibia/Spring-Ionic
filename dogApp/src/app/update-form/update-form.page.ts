import { Component, OnInit } from '@angular/core';
import { Dog, ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.page.html',
  styleUrls: ['./update-form.page.scss'],
})
export class UpdateFormPage implements OnInit {

  dogImages = ['http://localhost:8080/chihuahua.jpg',
    'http://localhost:8080/chowChow.jpg',
    'http://localhost:8080/pekingese.jpg',
    'http://localhost:8080/husky.jpg',
    'http://localhost:8080/corgi.jpg'
  ]
  dog: Dog = {
    id: null,
    name: "",
    breed: "",
    image: ""
  };

  updatedDog: Dog = {
    id: null,
    name: "",
    breed: "",
    image: ""
  };
  addUpdatedDogButton;
  updatedDogImg;

  constructor(private route: ActivatedRoute,
    private api: ApiService,
    private alertController: AlertController,
    private router: Router) {

    let id = this.route.snapshot.paramMap.get('id');
    this.api.getOneDog(id).subscribe((res: Dog) => {
      this.dog = res;
    }, (err) => {
      console.log(err);
    })
  }


  ngOnInit() {
    this.addUpdatedDogButton = <HTMLButtonElement>document.getElementById("addUpdatedDogButton");
    this.addUpdatedDogButton.disabled = true;

  }


  async setUpdatedDogData() {
    var selectValue = (document.getElementById("breed") as HTMLSelectElement).value;
    var inputValue = (document.getElementById("updatedName") as HTMLInputElement).value;

    if (inputValue != "") {

      if (selectValue != null) {
        switch (selectValue.toString()) {
          case "Chihuahua":
            this.dog.image = this.dogImages[0];
            this.dog.breed = "Chihuahua"
            break;
          case "Chow Chow":
            this.dog.image = this.dogImages[1];
            this.dog.breed = "Chow Chow"
            break;
          case "Pekingese":
            this.dog.image = this.dogImages[2];
            this.dog.breed = "Pekingese"
            break;
          case "Husky":
            this.dog.image = this.dogImages[3];
            this.dog.breed = "Husky"
            break;
          case "Corgi":
            this.dog.image = this.dogImages[4];
            this.dog.breed = "Corgi"
            break;
        }
      }


      this.updatedDog = {
        id: this.dog.id,
        name: inputValue.toString(),
        breed: this.dog.breed,
        image: this.dog.image
      }

     
      this.addUpdatedDogButton.disabled = false;

    } else {
      let alert = await this.alertController.create({
        message: "You need to complete all the fields"
      })
      alert.present();
    }


  }
  addUpdatedDog() {
    this.api.updateDog(this.updatedDog).subscribe(res => {
      
    }, (err) => {
      console.log(err);
    })
    this.router.navigate([""]);
  }




}
