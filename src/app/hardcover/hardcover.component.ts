import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../service/book-service.service';

@Component({
  selector: 'app-hardcover',
  templateUrl: './hardcover.component.html',
  styleUrls: ['./hardcover.component.css']
})
export class HardcoverComponent implements OnInit {

  hardCoverDispaly:any=[];
  displayData:any=[];


  constructor(private bookapi:BookServiceService) { }

  ngOnInit(): void {
    debugger
    this.bookapi.hardCover().subscribe((result) => {
      console.log(result);
      this.hardCoverDispaly = result.results.books;
      console.log(result.results.books);
      debugger
      this.displayData = result.results.books[0].buy_links;
      console.log(result.results.books[0].buy_links);
      
    })
  }



}
