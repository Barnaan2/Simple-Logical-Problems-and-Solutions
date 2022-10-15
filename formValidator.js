
/*
Create a java Script code that can validate a form to the extreme ;
example of html form to be validated is 

<form  id="form" name="myform" action=""> 
        <h3 id="title"> Avdvanced Form Validation </h3>

        <section>
            <p id="password_error"></p>
            <h4 id="phone_number_error"></h4>
        </section>
        <input id="first_name" type="text" class="first_name" name="first_name" placeholder="first name" required>
        <input id="last_name" type="text" class = "last_name" name="last_name" placeholder="last name" required>
        <input id="email" type="email" class = "email" name="email" placeholder="example@email.com" required>
        <input id="phone_number" type="number" class="phone_number" name="phone_number" placeholder="phone number" required>
        <input id="password" type="password" name="password" required>
        <input id="verify_password" type="password" name="verified_password" required>
        <input type="submit" value="finish">
    </form>

*/
let errorFound=(password ,phone_number)=>{
    document.getElementById('form').addEventListener("submit",function(event){
        if(password && phone_number){
            document.myform.submit()   
        }
    
        else{
            event.preventDefault() 
            }
       });
    }


 

let formValidator = ()=>{

    let valid_phone_number = false
    let valid_password = false
    let errorMessage = document.getElementById('password_error')
    let password = document.getElementById('password')
    let verify_password = document.getElementById('verify_password')


    password.addEventListener("change",()=>{
            if(password.value.length < 6){
                 errorMessage.innerHTML = `you inserted ${password.value.length} , password should be at least six characters`;
                 errorMessage.style.display = "block";
                 valid_password = false
                 
                }



 else if(password.value.length >= 6){
    if (verify_password.value !== password.value){
    errorMessage.innerHTML = "Password Did Not Match,Retpye Your Password Correctly In both fields";
    errorMessage.style.display = "block";
    valid_password = false
    
    }
    
else if(verify_password.value === password.value){  
errorMessage.innerHTML = "";
errorMessage.style.display = "none";
valid_password = true
    }
 }
    
else{
       errorMessage.style.display = "none";
        errorMessage.innerHTML = "";
    }    
    errorFound(valid_password,valid_phone_number) 
});

verify_password.addEventListener("change",()=>{
    if (verify_password.value !== password.value){
        errorMessage.innerHTML = "Your Password Did Not Match, retype correctly(note: its case sensetive)";
        errorMessage.style.display = "block";
        valid_password = false
       
        }

        else if(verify_password.value === password.value){
            
            errorMessage.innerHTML="";
            errorMessage.style.display = "none";
            valid_password = true
        }
        errorFound(valid_password,valid_phone_number) 
});


document.getElementById('phone_number').addEventListener('change',()=>{


        
        let  displayPhoneNumberError = document.getElementById("phone_number_error");
        let phone_number = document.getElementById('phone_number').value
        let  phone_number_length =  phone_number.toString().length
       
        if(phone_number_length  < 9){
            displayPhoneNumberError.style.display = "block";
            displayPhoneNumberError.innerHTML = `Invalid Phone Number: its only ${phone_number_length} check and correct` ;
            valid_phone_number = false
         }
    
    
        else if( phone_number_length   == 10 && phone_number.toString().charAt(0) != 0 ){
            displayPhoneNumberError.style.display = "block";
             displayPhoneNumberError.innerHTML = `Invalid Phone Number : Please Use This Format : 0912345678 or 912345678`;
             valid_phone_number = false
            }
    
    
        else if( phone_number_length  == 10 && phone_number.toString().charAt(0) == 0 ){
            valid_phone_number = true;
            phone_number = parseInt(phone_number);
            displayPhoneNumberError.style.display = "none";}
            
    
        else if( phone_number_length  > 10){
            displayPhoneNumberError.style.display = "block";
             displayPhoneNumberError.innerHTML = "Invalid Phone Number: Please Insert In This Format : 0912345678 or 912345678 ";
             valid_phone_number = false }
    
    
      else {
            displayPhoneNumberError.style.display = "none";

      }
    
    
    errorFound(valid_password,valid_phone_number) 
});




}


formValidator()





// function (){
// var valid = validator()
// if(!valid){
//     e.preventDefault()
// }}

    


