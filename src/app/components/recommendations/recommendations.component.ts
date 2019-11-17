import { Component, OnInit } from '@angular/core';
import { MemIdService } from '../../services/mem-id.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  Mem_Id: string;
  constructor(public memId: MemIdService) { }

  ngOnInit() {
    this.memId.currMemId.subscribe(id => this.Mem_Id = id);
  }

}
