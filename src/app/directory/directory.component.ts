import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service'
import { DataService } from '../services/data.service'

declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  ninjas = [];
  name = '';
  belt = '';

  constructor(private logger: LoggingService, private dataService: DataService) {
  }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
    /*this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data
    );*/

    this.fbGetData();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added',
      (snapshot) => {
        let newNinja = snapshot.val();
        console.log(newNinja);
        this.ninjas.push(newNinja);
      }
    );
  }

  fbPostData(name: string, belt: string){
    firebase.database().ref('/').push({'name': this.name, 'belt': this.belt, 'id': this.ninjas.length + 1});
    this.name = '';
    this.belt = '';
  }

}
