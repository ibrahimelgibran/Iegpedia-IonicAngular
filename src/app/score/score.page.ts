import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  constructor(private route: Router) {}

  backHome() {
    this.route.navigate(['/home']);
  }

  ngOnInit() {}

  no: number = 0;

  up() {
    this.no++;
  }

  down() {
    if (this.no > 0) {
      this.no--;
    }
  }
}
