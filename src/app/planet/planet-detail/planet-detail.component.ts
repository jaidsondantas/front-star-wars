import {Component} from '@angular/core';
import {Planet} from '../../../@cdk/models';
import {HttpService} from '../../../@cdk/services/http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent {


  planet: Planet;

  endpoint = 'planets';

  constructor(private httpService: HttpService,
              private activatedRoute: ActivatedRoute
  ) {
    const id = this.activatedRoute.snapshot.params.id;
    this.httpService.get(this.endpoint + '/' + id).subscribe((planet) => {
      this.planet = planet;
    });
  }

}
