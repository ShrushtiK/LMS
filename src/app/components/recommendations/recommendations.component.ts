import { Component, OnInit } from '@angular/core';
import { MemIdService } from '../../services/mem-id.service';
import { TransactionService } from '../../services/transaction.service';
import { RecommService } from '../../services/recomm.service';

@Component({
	selector: 'app-recommendations',
	templateUrl: './recommendations.component.html',
	styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit
{
	Mem_Id: string;
	no_books: boolean = false;
	all_ids = [];
	all_recom = [];
	recomm_details = [];
	final_recomm = []
	p = 0;
	p1 = 0;
	data: any;
	constructor(public memId: MemIdService, public transaction: TransactionService, public recomm: RecommService) { }

	// recom_res(x) {
	//   let url = 'http://127.0.0.1:9000/book/recommendations?Book_ID=' + String(x);
	//   return fetch(url);
	// }


	/*
	ngOnInit()
	{
		this.memId.currMemId.subscribe(id => this.Mem_Id = id);
		this.transaction.getAllTransactions(this.Mem_Id).subscribe(
			res =>
			{
				//console.log(res);
				if (res.length == 0)
				{
					this.no_books = true;
				}
				else
				{
					if (res.length < 6)
					{
						for (var o = 0; o < res.length; o++)
						{
							
							this.all_ids[o] = res[o]['Book_ID'];
							
						}
					}
					else
					{
						for (var o = 0; o < 6; o++)
						{
							
							this.all_ids[o] = res[o]['Book_ID'];
							
						}
					}
					let This = this
					this.all_ids.forEach(function(id, index)
					{
						This.recomm.getRecommendations(id).subscribe(response =>
						{
							//console.log(response);
							for (var o = 0; o < response.length; o++)
							{
								This.all_recom[This.p] = response[o];
								This.p++;
							}
							if(index == This.all_ids.length - 1)
							{
								//console.log(This.all_recom);
								This.all_recom.forEach(function(id, index)
								{
									//console.log("index="+index)
									This.recomm.getRecommDetails(id[0]).subscribe(resp =>
									{
										//console.log("Resp", resp);
										if(resp.msg == "Success")
											This.recomm_details.push(resp.data);
										//console.log("At "+index, This.recomm_details)
										This.p1++;
									
										if(index == This.all_recom.length - 1)
										{
											This.data = This.recomm_details;
											console.log("final list")
											console.log(This.recomm_details)
										}
									});
								});
								
							}
						});
						

					});
					
				}


				// this.recomm.getRecommendations(res).toPromise(
				//   res1 => {
				//     console.log(res1)
				//   }
				// )
				// var a = res.length();
				// if (a == 0) {
				//   this.no_books = true;
				// }
				// else {
				//   console.log('x');
				//   if (a < 6) {
				//     console.log('xx');
				//     for (var j = 0; j < res.length(); j++) {
				//       console.log('xxx');
				//       this.all_recom.push(this.recom_res(res[j]['Book_ID']))
				//     }
				//   }
				//   else {
				//     for (var j = 0; j < 6; j++) {
				//       this.all_recom.push(this.recom_res(res[j]['Book_ID']))
				//     }
				//   }
				//   console.log('------');
				//   console.log(this.all_recom);
				//   console.log('------');

				// }
			},
			err =>
			{
				alert(err.error);
			}
		)
	}
	*/

	removeDuplicates(array, key) {
		let lookup = new Set();
		return array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
	}

	
	getAvailability(book: any)
	{
	  console.log(book)
	  if(book.Status==true)
		return "Available Now"
	  else
	  {
		let d = new Date(book.Available_Date)
		d.setDate(d.getDate() + 1)
		return "Available from " + d.toDateString()
	  }
	}

	ngOnInit()
	{
		this.memId.currMemId.subscribe(id => this.Mem_Id = id);
		this.transaction.getAllTransactions(this.Mem_Id).subscribe(
			res =>
			{
				//console.log(res);
				if (res.length == 0)
				{
					this.no_books = true;
				}
				else
				{
					if (res.length < 6)
					{
						for (var o = 0; o < res.length; o++)
						{
							this.all_ids.push(res[o]['Book_ID']);	
						}
					}
					else
					{
						for (var o = 0; o < 6; o++)
						{
							
							this.all_ids.push(res[o]['Book_ID']);
							
						}
					}
					let This = this
					this.all_ids.forEach(function(id, index)
					{
						let priority = index
						This.all_recom.push([])
						This.recomm.getRecommendations(id).subscribe(response =>
						{
							//console.log(response);
							//response is a 2D array where each element is an array with 2 elements: BookID, Frequency
							for (var o = 0; o < response.length; o++)
							{
								This.all_recom[priority].push(response[o][0]);
								This.p++;
							}
							if(index == This.all_ids.length - 1)
							{
								//console.log(This.all_recom);
								This.all_recom.forEach(function(list, index2)
								{
									This.recomm_details.push([])
									list.forEach(function(id,index3)
									{
										This.recomm.getRecommDetails(id).subscribe(resp =>
										{
											//console.log("Resp", resp);
											if(resp.msg == "Success")
												This.recomm_details[index2].push(resp.data);
											//console.log("At "+index, This.recomm_details)
											This.p1++;

											if(index3 == list.length - 1 && index2 == This.all_recom.length - 1)
											{
												//This.data = This.recomm_details;
												console.log("final list")
												console.log(This.recomm_details)
											
												let max_length = 0
												for (let j = 0; j < This.recomm_details.length; j++) 
												{
													if (This.recomm_details[j].length > max_length)
														max_length = This.recomm_details[j].length	
												}

												console.log("Max-length = ", max_length)
												
												for (let j = 0; j < max_length; j++) 
												{
													This.recomm_details.forEach(list => 
													{
														if(list.length > j)
															This.final_recomm.push(list[j])
													});
													
												}

												console.log(This.final_recomm)
												This.final_recomm = This.removeDuplicates(This.final_recomm, "Title")
												This.data = This.final_recomm
											}
										});
										
									})
									
								});	
							}
						});
						

					});
					
				}


				// this.recomm.getRecommendations(res).toPromise(
				//   res1 => {
				//     console.log(res1)
				//   }
				// )
				// var a = res.length();
				// if (a == 0) {
				//   this.no_books = true;
				// }
				// else {
				//   console.log('x');
				//   if (a < 6) {
				//     console.log('xx');
				//     for (var j = 0; j < res.length(); j++) {
				//       console.log('xxx');
				//       this.all_recom.push(this.recom_res(res[j]['Book_ID']))
				//     }
				//   }
				//   else {
				//     for (var j = 0; j < 6; j++) {
				//       this.all_recom.push(this.recom_res(res[j]['Book_ID']))
				//     }
				//   }
				//   console.log('------');
				//   console.log(this.all_recom);
				//   console.log('------');

				// }
			},
			err =>
			{
				alert(err.error);
			}
		)
	}
	

}
