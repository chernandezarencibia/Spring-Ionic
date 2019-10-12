import { Component, OnInit } from '@angular/core';
import { Dog, ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor( private alertController: AlertController, 
    private api: ApiService, 
    private router: Router, 
   ) { }
  dogsImages: Array<String>
  dogImages = ['http://localhost:8080/chihuahua.jpg',
    'http://localhost:8080/chowChow.jpg',
    'http://localhost:8080/pekingese.jpg',
    'http://localhost:8080/husky.jpg',
    'http://localhost:8080/corgi.jpg',
    'http://localhost:8080/poodle.jpg'
  ]
  image;
  dog: Dog;
   addDogButton;
  ngOnInit() {
    this.dog = {
      id: null,
      name: "Giorno",
      breed: "Poodle",
      image: this.dogImages[5]
    }

    this.addDogButton = <HTMLButtonElement> document.getElementById("addDogButton");
    this.addDogButton.disabled = true;
  }
  async setDogsData() {
    var selectValue = (document.getElementById("breed") as HTMLSelectElement).value;
    var inputValue = (document.getElementById("name") as HTMLInputElement).value;
    
    if(selectValue!= null && inputValue != null){
      switch (selectValue.toString()) {
        case "Chihuahua":
          this.image = this.dogImages[0];
          break;
        case "Chow Chow":
          this.image = this.dogImages[1];
          break;
        case "Pekingese":
          this.image = this.dogImages[2];
          break;
        case "Husky":
          this.image = this.dogImages[3];
          break;
        case "Corgi":
          this.image = this.dogImages[4];
          break;
      }

      this.dog = {
        id: 0,
        name: inputValue.toString(),
        breed: selectValue.toString(),
        image: this.image
      }
      
      this.addDogButton.disabled = false;

    }else{
      let alert = await this.alertController.create({
        message: "You need to complete all the fields"
      })
      alert.present();
    }
    

  }

  addDog(){

      this.api.addDog(this.dog).subscribe(res=>{     
      }, (err) => {
        console.log(err);
      });

      this.router.navigate([""]);
    }
   
    
  }


