import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doctorola-datepicker-usage',
  templateUrl: './datepicker-usage.component.html',
  styleUrls: ['./datepicker-usage.component.css']
})
export class DatepickerUsageComponent{

	datepicker = false;
	dp_date = '12/5/2017';

  	constructor() { }

  	operate_dp()
  	{
  		this.datepicker = !this.datepicker;
  	}

  	received_date($event)
  	{
  		//console.log($event);
  		this.operate_dp();
  		this.dp_date = $event;
  	}

}
