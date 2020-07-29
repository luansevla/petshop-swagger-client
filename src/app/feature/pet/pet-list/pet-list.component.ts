import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { PetService, Pet } from 'src/app/shared';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

@Component({
  selector: 'app-pet',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
  providers: [PetService]
})
export class PetListComponent implements OnInit {

  private pets: Pet[];
  public dataSource = new MatTableDataSource<Pet>();
  public loadPets: boolean = false
  public displayedColumns = ['name', 'status', 'details'];


  constructor(
    private sidebarService: NbSidebarService,
    private petService: PetService
  ) { }

  ngOnInit() {
    this.loadPets = true;
    this.collapse();
    this.getAllPets();
    this.loadPets = false;
  }

  toggle() { this.sidebarService.toggle() }

  collapse() { this.sidebarService.collapse() }

  public getAllPets(): Subscription {
    return this.petService.findPetsByStatus(['available']).subscribe(
      r => {
        this.dataSource.data = r as Pet[];
      },
      error => {},
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {

  }


}
