import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Planet} from '../../../@cdk/models';
import {HttpService} from '../../../@cdk/services/http.service';
import {Params} from '../../../@cdk/models/Params';
import {Response} from '../../../@cdk/models/response';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

  response$: Observable<Response>;
  planets: Planet[];
  endpoint = 'planets';
  total: number;
  loading: boolean;


  constructor(
    private httpService: HttpService,
    private router: Router
  ) {
    const params = new Params();
    this.getPlanets(params);
  }

  private getPlanets(params: Params): void {
    this.loading = true;
    this.response$ = this.httpService.get(this.endpoint, params);
    this.response$.subscribe((response: Response) => {
      this.planets = response.results.sort((a, b) => a.name.localeCompare(b.name));
      this.total = response.count;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

  reload(params: Params): void {
    this.getPlanets(params);
  }


  detail(planet: Planet): void {
    const url = planet.url.split(environment.baseUrl);
    this.router.navigate([url[1] + '/detail']).then();
  }
}
