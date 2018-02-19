function ejecutar() {
  // Datos poliza
  var policyPrice = 250;
  var totalAmmount = 0;

  // Datos Asegurado
  var firstNameInsured = document.getElementById('nombres').value;
  var LastNameInsured = document.getElementById('apellidos').value;
  var haveSpouse = document.getElementsByName("casado")[0].checked;
  var haveSon = document.getElementsByName("hijos")[0].checked;

  //date
  var date_ = new Date();
  var actualDay = date_.getDate();
  var actualMonth = (date_.getMonth() + 1);
  var actualYear = date_.getFullYear();
  var ageInsured;
  var month = parseInt(document.getElementById('month').value);
  var year = parseInt(document.getElementById('year').value);
  var day = parseInt(document.getElementById('day').value);
  console.log(day);

  if(month <= actualMonth && year <= actualYear){
      if(day > actualDay){
          ageInsured=actualYear - (year + 1) ;
      }else{
          ageInsured= actualYear - (year);
      }
  }else if(month > actualMonth && year <= actualYear){
      ageInsured=actualYear - (year + 1);
  }else{
      alert("Fecha invalida");
  }

  console.log(ageInsured);
  var chargeInsured = 0;

  // Datos conyuge
  var ageSpouse = parseInt(document.getElementById('edad-conyug').value);
  var chargeSpouse = 0;

  // datos hijos
  var numberSonsUnder21 = parseInt(document.getElementById('cantidad-hijos').value);

  var chargeSons = 0;


  var informacion = "carne: 18010346 Nombre:Leticia Beatriz Mejía Agustín" + "-" + "carne: 17004529 Nombre:Cristian Alejandro Raxtun Ramirez";

  // Total pago poliza + recargo por edad
  var percentCharge1 = "";

  if (ageInsured < 18) {
      alert("Debe ser mayor de edad");
  } else if (ageInsured >= 18 && ageInsured < 21) {
      chargeInsured = 0;
      percentCharge1= "Tiene un cargo de 0% por edad: " + chargeInsured;
  } else if (ageInsured >= 21 && ageInsured < 25) {
      chargeInsured = policyPrice * 0.01;
      percentCharge1= "Tiene un cargo de 1% por edad: " + chargeInsured;
  } else if (ageInsured >= 25 && ageInsured < 30) {
      chargeInsured = policyPrice * 0.02;
      percentCharge1= "Tiene un cargo de 2% por edad: " + chargeInsured;
  } else if (ageInsured >= 30 && ageInsured < 40) {
      chargeInsured = policyPrice * 0.05;
      percentCharge1= "Tiene un cargo de 5% por edad: " + chargeInsured;
  } else if (ageInsured >= 40 && ageInsured < 50) {
      chargeInsured = policyPrice * 0.08;
      percentCharge1= "Tiene un cargo de 8% por edad: " + chargeInsured;
  } else if (ageInsured >= 50 && ageInsured <= 65) {
      chargeInsured = policyPrice * 0.12;
      percentCharge1= "Tiene un cargo de 12% por edad: " + chargeInsured;
  } else  {
      alert("Lo sentimos, no aplica para ser asegurado");
  }



  // Cálculo recargo conyugue por edad
  var percentCharge2 = "";
  if (haveSpouse == true) {
      if (ageSpouse < 30) {
          chargeSpouse = policyPrice * 0.01;
          percentCharge2= "Tiene un cargo de 1% por conyuge: " + chargeSpouse;
      } else if (ageSpouse >= 30 && ageSpouse <40) {
          chargeSpouse = policyPrice * 0.02;
          percentCharge2= "Tiene un cargo de 2% por conyuge: " + chargeSpouse;
      } else if (ageSpouse >= 40 && ageSpouse < 50) {
          chargeSpouse = policyPrice * 0.03;
          percentCharge2= "Tiene un cargo de 3% por conyuge: " + chargeSpouse;
      } else if (ageSpouse >= 50 && ageSpouse < 70) {
          chargeSpouse = policyPrice * 0.05;
          percentCharge2= "Tiene un cargo de 5% por conyuge: " + chargeSpouse;
      } else {
          alert("Lo sentimos, el conyugue no aplica para ser asegurado");
          chargeSpouse=0;
      }
  }


  // Cálculo recargo hijos menores a 21
var percentCharge3 = "";
  if (haveSon == true) {
      chargeSons = policyPrice * (numberSonsUnder21 / 100);
      percentCharge3= "Tiene un cargo de 1% por cada hijo: " + chargeSons;
  }else{
    chargeSons = 0;
  }

  totalAmmount = policyPrice + chargeInsured + chargeSpouse + chargeSons;
  //  console.log(totalAmmount);


  if(haveSpouse == false &&  haveSon == false){
    alert('Nombre Completo: ' + firstNameInsured + ' ' + LastNameInsured + '\n' + percentCharge1 + '\n Monto Total: ' + totalAmmount);
  }else if(haveSpouse == true &&  haveSon == false){
    alert('Nombre Completo: ' + firstNameInsured + ' ' + LastNameInsured + '\n' + percentCharge1 + '\n' + percentCharge2 + '\n Monto Total: ' + totalAmmount);
  }else if(haveSpouse == true &&  haveSon == true){
    alert('Nombre Completo: ' + firstNameInsured + ' ' + LastNameInsured + '\n' + percentCharge1 + '\n' + percentCharge2+ '\n' + percentCharge3 + '\n Monto Total: ' + totalAmmount);
  }else if(haveSpouse == false &&  haveSon == true){
    alert('Nombre Completo: ' + firstNameInsured + ' ' + LastNameInsured + '\n' + percentCharge1 + '\n' + percentCharge3 + '\n Monto Total: ' + totalAmmount);
  }


}
