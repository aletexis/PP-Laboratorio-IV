import { Component, OnInit } from '@angular/core';
import { GithubInterface } from 'src/app/models/github-interface';
import { GithubService } from 'src/app/servicios/github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {
  github!: GithubInterface;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getData().subscribe(x => {
      this.github = x as GithubInterface;
    });
  }
}
