import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { Question } from '../../question/question';

@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  public questions: Question[];
  public results: any[];

  public values: { [key: string]: any };
  public formData: { [key: string]: any };

  constructor(
    public movieService: MovieService,
    public router: Router,
  ) {
    //
  }

  public ngOnInit(): void {
    this.init();
  }

  public init(): void {
    this.questions = [
      {key: 'search', type: 'text', label: 'Titre', required: true, marginBottom: 0},
    ];
  }

  public onValid(data): void {
    this.formData = data;
  }

  public async search(title: string): Promise<any> {
    const data: any = await this.movieService.search(title);
    const results = [];
    for (const result of data.results) {
      const item = {
        ...result,
        year: (result.release_date.split('-'))?.[0],
      };

      results.push(item);
    }

    this.results = results;
  }

  public select(result: any): void {
    this.router.navigate(['/import', result.id]);
  }

  public async onSubmit(): Promise<void> {
    if (!this.formData) {
      return;
    }

    this.search(this.formData.search);
  }

  public navigateAdd(): void {
    this.router.navigate(['/add']);
  }
}
