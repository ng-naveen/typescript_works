interface OnInit {
    ngOnInit();
}

interface OnChange {
    ngOnChange();
}


class WeatherComploent implements OnInit, OnChange  {
    ngOnInit() {
        console.log('on init method');
        
    }
    ngOnChange() {
        console.log('on change method');
        
    }
}

