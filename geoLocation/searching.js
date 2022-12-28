// location of the user when the window loads
window.onload = ()=>{
  if(navigator.geolocation){  navigator.geolocation.getCurrentPosition(search);}
};


// location of the use clicks nearby button

document.querySelector(".nearby").addEventListener('click',()=>{
  if(navigator.geolocation){  navigator.geolocation.getCurrentPosition(search);}
});


//This ajax method will return the values that meet the search. 
let search = (searchedValue) => { 
  const requestType = typeof searchedValue;
    let values = ""
const ajax = new XMLHttpRequest();
ajax.onreadystatechange = reponseHandler 
function reponseHandler(){
    try
    {
    if(ajax.readyState === XMLHttpRequest.DONE){
   if(ajax.status === 200){
    values =  JSON.parse(ajax.responseText);
    hotelPrinter(values,requestType);

}

else if(ajax.status === 404){
  values = ` sorry :( No hotel or city is found with ${searchedValue}`
}
}

}

catch(e){
console.log(` There is an error : ${e.description}`);
}
}

// sending the request to the backend
const url = '';
if(requestType == "object")
{
  console.log(searchedValue)
  url =  `/?lat=${searchedValue.coords.latitude}&long=${searchedValue.coords.longitude}`;
  
   
}
else if(requestType == "string")
  {
      url =  `/?q=${searchedValue}`;
      console.log(url);
  }
  

    ajax.open('GET',url)
    ajax.send()

}


// method to print the hotels to the frontend
let hotelPrinter = (hotels,requestType)=>{
    try{
 const hotelList = hotels.hotelLists
 let displayer = document.querySelector('.hotels-list')
 let hotelhtml = ""


if(hotelList.length){
  if(requestType == "string")
  {
    document.querySelector(".hotel-header").innerHTML = `${hotelList.length} Hotel/s matches your search`;
    document.querySelector(".topDestinations").style.display = "none";
  }

  hotelList.forEach(hotel => {
    hotelhtml += ` <div class="col-lg-4 mt-3 col-md-6">
   <div class="card shadow">
     <div class="card-img ">
       <img src="./${hotel.picture}/" alt="${hotel.name}" class="img-fluid hotel-photo skeleton">
     </div>
     <div class="card-body">
       <h3><a href="hotel/${hotel.id}/" class="stretched-link">${hotel.name}</a></h3>
       <p>${hotel.relative_location}</p>
     </div>
   </div>
 </div> `
});
}

else{ document.querySelector(".hotel-header").innerHTML = "Hotel do not found " }
 
 displayer.innerHTML = hotelhtml
   }


catch(e){console.log(e.description);}

}

const searchForm = document.searchForm
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    searchedValue = document.querySelector('.searchInputField').value
search(searchedValue);
});
