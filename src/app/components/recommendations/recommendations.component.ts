import { Component, OnInit } from '@angular/core';
import { MemIdService } from '../../services/mem-id.service';
import { TransactionService } from '../../services/transaction.service';
import { RecommService } from '../../services/recomm.service';

@Component({
	selector: 'app-recommendations',
	templateUrl: './recommendations.component.html',
	styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
	Mem_Id: string;
	no_books: boolean = false;
	all_ids = [];
	all_titles = []; all_recom = [];
	recomm_details = [];
	final_recomm = []
	p = 0;
	p1 = 0;
	data: any;

	search_url = "http://127.0.0.1:9000/book/searchByTitle";

	constructor(public memId: MemIdService, public transaction: TransactionService, public recomm: RecommService) { }

	ngOnInit() {
		this.memId.currMemId.subscribe(id => this.Mem_Id = id);
		this.transaction.getActiveTransactions(this.Mem_Id).subscribe(
			res => {
				console.log(res);
				if (res == null) {
					this.no_books = true;
				}
				else if (res.length == 0) {
					this.no_books = true;
				}
				else {
					for (var o = 0; o < res.length; o++) {
						//console.log(res[o], res[o].Title)
						console.log(res[o]);
						let x = res[o]['Title'];
						this.all_titles.push(x);

					}
					let This = this
					This.recomm.getRecommendations(this.all_titles).subscribe(response => {
						//this.data = response
						response.forEach(r => {
							//Fetch details from searchByTitle API for each r
							//Replace each r with the corresponding book object
							//Replace r in response with the new r
							//Finally: this.data = response
						});
					});
				}
			},
			err => {
				alert(err.error);
			}
		)
	}

	
	getAvailability(book: any) {
		console.log(book)
		if (book.Status == true)
			return "Available Now"
		else {
			let d = new Date(book.Available_Date)
			d.setDate(d.getDate() + 1)
			return "Available from " + d.toDateString()
		}
	}
}

