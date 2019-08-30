import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	  showDropDown = false;
	  searchvalue = '';
  public SeachWordSet  = "";
	    searchTexts = ['Oracle','P2P','RPA','Oracle ERP','EPM','Oracle HCM','Oracle Cloud'];
 searchTiles = ['Oracle','P2P','RPA','Oracle ERP','EPM','Oracle HCM','Oracle Cloud'];

  constructor() { }

  ngOnInit() {
  }

    onKey(event: any) { // without type info
      // console.log(this.SeachWordSet);
    this.searchvalue = event.target.value;
   }

  closeDropDown() {
     // if (showDropDown === false){
     // this.showDropDown = !this.showDropDown;
     // }
     // else {
     //     this.showDropDown = false;
     // }
      this.showDropDown = !this.showDropDown;
  }

closeDropDown2(value) {
  console.log(value);
  this.SeachWordSet = value;
    this.showDropDown = false;
  }
  openDropDown() {
     this.showDropDown = false;
  }

getSearchValue(){
 return this.searchvalue;
// return this.SeachWordSet;
}
}
