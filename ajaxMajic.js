/*  PROBLEM  : CREATE A JAVASCRIPT METHOD TO SEARCH FROM API ASYNCHRONUSLY ... AND 
SHOW THE RESULT THE USER:

THE HTML IS PROVIDED BELOW
____________________________________________________________________________________
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>seach users easily </title>
</head>
<body>
    <form class="searchForm" >
        <input type="search" placeholder="search for any user ">
    </form>   
</body>
<script src="ajaxMajic.js"></script>
_______________________________________________________________________________________

*/


// JavaScript file file name is   ajaxMajic.js  

// body declaration is global since  its used reaptedly
const body = document.querySelector('body')


let ajaxAgain = (userName) =>{
    const ajax = new XMLHttpRequest()
    ajax.onreadystatechange = reqHandler
    const p = document.createElement('p')
    const content = body.appendChild(p);
    content.innerHTML = "wait a little please ";

    function reqHandler(){ 
        try{
    
        if(ajax.readyState === XMLHttpRequest.DONE){
       if(ajax.status === 200){
       const user =  JSON.parse(ajax.responseText)
       content.innerHTML= `${user.login} have  ${user.followers} followers`;
/*

 You can use this incase you want to work with Multiple Json objects.

   JSON.parse(ajax.responseText).forEach((user)=>{
   const p = document.createElement('p')
   const userName = body.appendChild(p);
   userName.innerHTML= `The user name is ${user.login}`;
});

*/
}

else if(ajax.status === 404){
   content.innerHTML = ` sorry :(
   No user found with user Name ${userName}`
}
}

}
    
    catch(e){
console.log(` there an error : ${e.description}`)
    }
}
const url  = `https://api.github.com/users/${userName}`;
    ajax.open('GET',url)
    ajax.send()

}
/*
You can use this incase you want to work with multiple users fetching by button click

const getUserButton = document.createElement('')
const button = body.appendChild(getUserButton)
button.innerHTML = 'get user';
button.addEventListener('click',ajaxAgain)

*/


const form = document.querySelector('.searchForm')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
     const userFound = document.querySelector('p')
     
     if(userFound){
        userFound.remove()
     }
const searchedUserName = document.querySelector('input').value
 ajaxAgain(searchedUserName);
})