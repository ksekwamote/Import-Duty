
				function custom() {

					var cSelect = document.getElementById("country")
					var country = cSelect.options[cSelect.selectedIndex].value
					var pcSelect = document.getElementById("pcategory")
					var product = pcSelect.options[pcSelect.selectedIndex].value
					var price = document.getElementById("price").value

					 var sadc_countries = ['Angola', 'Botswana', 'Congo', 'Lesotho', 'Namibia', 'South Africa',
                      'Swaziland', 'Zambia', 'Zimbabwe']

                      var EU_countries = ['England', 'Italy', 'France', 'Belgium', 'Germany']
                      var category;
                     switch(product){
                     	case "Accesories (no battery)":
                     		category=1;
                     		break;
                     	case "Accesories (with battery)":
                     		category=2;
                     		break;
                     	case "Audio/Video":
                     		category=3;
                     		break;
                     	case "Bags & Luggage":
                     		category=4;
                     		break
                     	default:
                     		category=0;

                     }
                     var duty;
                     if (sadc_countries.includes(country)){
                     	switch(category){
                     		case 1:
                     			duty=0.1
                     			break;
                     		case 2:
                     			duty=0.15
                     			break;
                     		case 3:
                     			duty=0
                     			break;
                     		case 4:
                     			duty=0
                     			break
                     		default:
                     			duty=0;
                     	}
                     }
                    else{

                    	switch(category){
                     		case 1:
                     			duty=0.1
                     			break;
                     		case 2:
                     			duty=0.15
                     			break;
                     		case 3:
                     			duty=0
                     			break;
                     		case 4:
                     			duty=0.2
                     			break
                     		default:
                     			duty=0;
                     	}

                    }

                  var tax = 0.15*price
                  var import_duty = duty*price
                  var total_cost = Number(price)+ Number(tax)+ Number(import_duty)
                  var total = total_cost.toFixed(2)

                  document.getElementById("tax").innerHTML = "TAX: $"+tax.toFixed(2); 
                  document.getElementById("duty").innerHTML = "IMPORT DUTY: $"+import_duty.toFixed(2); 
                  document.getElementById("total").innerHTML = "TOTAL COST : $"+total;
                  window.scrollBy(0, 400); 

				}

				function clicker(){

					console.log("Hello World");
				}
				
					




