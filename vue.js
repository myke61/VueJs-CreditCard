var app = new Vue({
	el:"#app",
	data:{
		cardNumber : "____ ____ ____ ____",
		Name:"_______",
		Surname:"_______",
		CVV:"___",
		selectedMonth:"__",
		selectedYear:"__"
	},
	methods:{
		numberFunction: function(event){
			console.log("numberFunction çalıştı");
			var number = event.target.value;
			var lent = event.target.value.length;

			if(lent==0){
				this.cardNumber = "____ ____ ____ ____"
			}
			else if(lent>0 && lent<=4){
				this.cardNumber = number;
			}else if(lent>4 && lent<=8){
				this.cardNumber = number.substring(0,4) + " " + number.substring(4,lent);
			}else if(lent>8 && lent<=12){
				this.cardNumber = number.substring(0,4) + " " + number.substring(4,8) +" "+number.substring(8,lent);
			}else if(lent>12 && lent<=16){
				this.cardNumber = number.substring(0,4) + " " + number.substring(4,8) +" "+number.substring(8,12)+" "+number.substring(12,lent);
			}
		},
		nameFunction: function(event){
			console.log("nameFunction çalıştı");
			if(event.target.value.length == 0){
				this.Name = "_______"
			}else{
				this.Name = event.target.value;
			}
		},
		surnameFunction: function(event){
			console.log("surnameFunction çalıştı");
			if(event.target.value.length == 0){
				this.Surname = "_______"
			}else{
				this.Surname = event.target.value;
			}
		},
		cvvFunction: function(event){
			console.log("cvvFunction çalıştı");
			if(event.target.value.length>3){
				this.CVV = event.target.value.substring(0,3);
			}else if(event.target.value.length == 0){
				this.CVV = "___";
			}else{
				this.CVV = event.target.value;
			}
		}
	}
});