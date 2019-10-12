import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export class Dog {
  id: number;
  name: string;
  breed: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllDogs() {
    return this.http.get("http://localhost:8080/api/dogs");
  }
  getOneDog(id) {
    return this.http.get("http://localhost:8080/api/dogs/" + id);
  }
  deleteDog(id) {
    return this.http.delete("http://localhost:8080/api/dogs/" + id);
  }

  addDog(dog) {
    return this.http.post("http://localhost:8080/api/dogs", null, { params: dog });
  }
  updateDog(updatedDog) {
    console.log(updatedDog);
    return this.http.put("http://localhost:8080/api/dogs/" + updatedDog.id, null, {params: updatedDog});

  }
  


}
