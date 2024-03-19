import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  count: number = 0;

  constructor(private route: Router) {}

  backHome() {
    this.route.navigate(['/home']);
  }

  ngOnInit() {}

  up() {
    this.count++;
  }

  down() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
