function validateForm(){
	var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var inputEmail = document.getElementById("input-email").value;
    var inputPassword = document.getElementById("input-password").value;
    var cuadroDeValidación = document.createElement("span");
    if(name.length == 0 && lastname.length == 0 && inputEmail.length == 0 && inputPassword.length == 0 && document.querySelector("select").value == 0)
        alert("Ingrese los campos")
    else{
        //Email
        var email = document.getElementById("input-email").value;
        var expr = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var cuadroNegro = document.getElementsByClassName("input-box")[2];
        if (expr.test(email)){
            cuadroNegro.remove(cuadroDeValidación);
        }
        else if(email == ""){
        	cuadroNegro.appendChild(cuadroDeValidación);
        	cuadroDeValidación.innerHTML= "Verifique su E-mail";
        	cuadroNegro.classList.toggle("error");
        }
        //Seleccionar una opción
        if( document.querySelector("select").value == 0 )
           var cuadroDeValidación6 = document.createElement("span");
        	cuadroDeValidación6.innerHTML= "Seleccione una bicicleta."
        	var cuadroNegro = document.getElementsByClassName("input-box")[4].appendChild(cuadroDeValidación6);
        	cuadroNegro.classList.toggle("error")
        //Contraseña
        var contra = document.getElementById("input-password").value;
        if (contra.length< 6 || (contra == "password") || (contra == "123456") || (contra=="098754")){
		var cuadroDeValidación2 = document.createElement("span");
        	cuadroDeValidación2.innerHTML= "Contraseña iválida"
        	var cuadroNegro = document.getElementsByClassName("input-box")[3].appendChild(cuadroDeValidación2);
        	cuadroNegro.classList.toggle("error")
        }
        //Para los campos nombre y apellido la primera letra debe ser mayúscula
        var name = document.getElementById("name").value;
        var lastname = document.getElementById("lastname").value;
        //name
		var cuadroDeValidación3 = document.createElement("span");
        if (name.charAt(0) == name.charAt(0).toLowerCase()){
			cuadroDeValidación3.innerHTML= "El campo nombre tiene que tener la primera letra en mayúsculas"
        	var cuadroNegro = document.getElementsByClassName("input-box")[0].appendChild(cuadroDeValidación3);
        	cuadroNegro.classList.toggle("error")
		}
        else
            return true;
        //lastname
		var cuadroDeValidación4 = document.createElement("span");
        if (lastname.charAt(0) == lastname.charAt(0).toLowerCase()){
			cuadroDeValidación4.innerHTML= "El campo apellido tiene que tener la primera letra en mayúsculas"
        	var cuadroNegro = document.getElementsByClassName("input-box")[1].appendChild(cuadroDeValidación4);
        	cuadroNegro.classList.toggle("error")
		}
        else
            return true;
        var expreg = /^[a-z][a-z]*/;
        
    }  
}