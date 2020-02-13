$(document).ready(function(){

var calculator = {
	'dom': {
		'equalBtn': '#equal',
		'input': '#input',
		'numberBtn' : '.number',
		'specBtn' : '.spec',
		'i' : 0,
		'deleteBtn': '.delete'
	},
	init: function(){
		var me = this;

		me.registerEvents();
	},
	registerEvents: function(){
		var me = this;
		
		$(me.dom.numberBtn).on('click', me.onNumberBtnClick);	
		$(me.dom.specBtn).on('click', me.onSpecBtnClick);
		$(me.dom.deleteBtn).on('click', me.onDeleteBtn);		
		$(me.dom.equalBtn).on('click', me.onEqualBtn);		
	},
	onNumberBtnClick: function(){
		var me = calculator,
			numberBtn = $(this),
			input = $(me.dom.input),
			value = numberBtn.data('value');

		input.val(input.val() + value);
	},
	onSpecBtnClick: function(){
		var me = calculator,
			specBtn = $(this),
			input = $(me.dom.input),
			i = me.dom.i,
			val = input.val(),
			value = specBtn.data('value');


		if(value == "sqrt"){
			input.val(Math.sqrt(val));
		}
		else if(value == "square"){
			input.val(val * val);
		}
		else if(value == "fraction"){
			input.val(1 / val);	
		}
		else if(value == "sign"){
			if( i == 0){
				val = "-" + val;
				input.val(val);
				me.dom.i = 1;
			}
			else if(i == 1){
				val = val.substring(1, val.length);
				input.val(val);
				me.dom.i = 0;
			}
		}
			
	},
	onDeleteBtn: function(){
		var me = calculator,
			deleteBtn = $(this),
			input = $(me.dom.input),
			value = deleteBtn.data('value'),
			val = input.val();

		if(value == "delete"){
			if(val == "NaN"){
				input.val("");
			}
			else{
				val = val.substring(0, val.length - 1);
				input.val(val);
			}
		}
		else if(value == "clear"){
			input.val("");
		}
		
	},
	onEqualBtn: function(){
		var me = calculator,
			equalBtn = $(this),
			input = $(me.dom.input),
			val = input.val(),
			regex = ["+","-","÷","×","%"];

		if(val.match(/\+/)){
			var spl = val.split("+");
			var spl0 = parseFloat(spl[0]);
			var spl1 = parseFloat(spl[1]);
			var res = spl0 + spl1;
			input.val(res);
		}
		else if(val.match(regex[1])){
			var spl = val.split("-");
			var spl0 = parseFloat(spl[0]);
			var spl1 = parseFloat(spl[1]);
			var res = spl0 - spl1;
			input.val(res);
		}
		else if(val.match(regex[2])){
			var spl = val.split("÷");
			var spl0 = parseFloat(spl[0]);
			var spl1 = parseFloat(spl[1]);
			var res = spl0 / spl1;
			input.val(res);
		}
		else if(val.match(regex[3])){
			var spl = val.split("×");
			var spl0 = parseFloat(spl[0]);
			var spl1 = parseFloat(spl[1]);
			var res = spl0 * spl1;
			input.val(res);
		}
		else if(val.match(regex[4])){
			var spl = val.split("%");
			var spl0 = parseFloat(spl[0]);
			var spl1 = parseFloat(spl[1]);
			var res = (spl1 * spl0) / 100;
			input.val(res);
		}
	}
};

calculator.init();

});


