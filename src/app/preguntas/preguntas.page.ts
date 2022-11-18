import { Component, OnInit, ViewChild } from '@angular/core';
// import Swiper core and required modules
import { AppService } from '../services/app.service';
import { IonContent } from '@ionic/angular';
import { UiService } from '../services/ui.service';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.uiService.onTopScrolled(this.content);
  }

  ngAfterViewInit() {

  }
}
