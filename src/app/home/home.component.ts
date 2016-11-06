import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../services/logging.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = 'Wellcome to the ninja directory';
  myString = 'Random string';
  myBoolean = false;

  @Input() ninja = {name: '', belt: ''};

  @Output() onYell = new EventEmitter();

  constructor(private logger: LoggingService) {
  }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

  alertMe(param){
    alert(param);
  }

  fireYellEvent(e){
    this.onYell.emit(e);
  }

}
