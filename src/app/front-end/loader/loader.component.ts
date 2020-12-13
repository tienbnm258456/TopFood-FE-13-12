import { Component, OnInit, HostBinding } from '@angular/core';
import { LoaderService } from 'src/app/service/loader/loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @HostBinding('class.is-open')
  isOpen = false;

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.loaderService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }
}
