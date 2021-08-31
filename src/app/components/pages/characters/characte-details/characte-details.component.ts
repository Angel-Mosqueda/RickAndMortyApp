import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { CharacterService } from '@app/shared/services/character.service';
import { Character } from '@app/shared/interfaces/character.interface';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-characte-details',
  templateUrl: './characte-details.component.html',
  styleUrls: ['./characte-details.component.scss']
})
export class CharacteDetailsComponent implements OnInit {
  character$!: Observable<Character>;

  constructor(private route: ActivatedRoute, private characterSvc: CharacterService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id=params['id'];
      this.character$=this.characterSvc.getDetails(id);
    })
  }

  OnGoBack():void{
    this.location.back();
    //windows.history.back();
  }

}
