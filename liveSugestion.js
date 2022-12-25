/*
CREATE A VERY OPTIMANL sugestion for searching a github user:
for the provided Html ;
user it for any purpose

<<solved>>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="live.css">
    <title> live searching</title>
</head>
<body id="done">
    <div class="search-box">
        <form action="https://github.com/" name ="searchForm" method="GET">
        <input id="search-box" type="search" name="search-box" placeholder="search here">
        </form>
    </div>
    <div class="users">

    </div>
</body>
<script src="live.js"></script>
</html>


*/



let body = document.querySelector('body')
let displayBus = document.querySelector('.users')
let busList = document.createElement('ul')
const lists = displayBus.appendChild(busList)
let searchInputField = document.getElementById('search-box')

// you only want to show the  bus suggestion when the user is searching

const gitHubUsers = async()=>{
  const url = 'https://api.github.com/users'
  const users = await fetch(url).then((response)=>response.json())

  body.addEventListener('click',()=>{
    if(document.activeElement.id == searchInputField.id){ 
        displayBus.style.display = "block" }
   
   else{displayBus.style.display = "none"}});
   
   
   
   searchInputField.addEventListener('input',()=>{
    let searchedValue = searchInputField.value.toLowerCase()
   
    // JUST REPLACE YOUR JSON NAME HERE 
    const filteredUser = users.filter((user)=>{
   return user.login.includes(searchedValue);
     });
   
   
   
     //removing the suggestion after the user changes the input
     const userItems = document.querySelectorAll('.suggestions')
   if(userItems){userItems.forEach((userItem)=>{ userItem.remove()});}
   
   
   
   // removing the not found warning , after the user changes the input
   const notFound = document.querySelector('.notFound')
     if(notFound){notFound.remove()}
    
   
   
   if(filteredUser.length){
   filteredUser.forEach((user)=>{
   const li = document.createElement('li')
   li.innerHTML = `${user.login}` ;
   li.className = "suggestions";
   li.style.cursor = "pointer";
   // adding event listener
   li.addEventListener('click',()=>{
       searchInputField.value = li.innerHTML;
       document.searchForm.submit()
   });
   lists.appendChild(li)});}
   
   
   
   else{
      const warning = document.createElement('p')
       warning.innerHTML = " The Bus cannot be found !!"
       warning.className = "notFound";
       lists.appendChild(warning)}
   });
   

}

gitHubUsers();
