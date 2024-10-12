import { Component, OnInit } from '@angular/core';
import { ApiTestService } from 'src/apis/api-test.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(public apiTestService:ApiTestService) { }

  ngOnInit() {
  }

  teste(){
    this.apiTestService.apiTestInflu().subscribe((res:any)=>{
      console.log('TESTTTEE', res)
    })
  }

}
