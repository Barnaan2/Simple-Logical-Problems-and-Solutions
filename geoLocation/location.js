
// this method is used for just rendering closer hotel when user enters the website
window.onload = (event)=>{
    if(navigator.geolocation){  navigator.geolocation.getCurrentPosition(me);}
};



//sending the request of near hotels to ajax object by clicking the button
document.querySelector(".nearby").addEventListener('click',()=>{
    if(navigator.geolocation){  navigator.geolocation.getCurrentPosition(me);}
});




document.querySelector(".search").addEventListener('click',()=>{ me("done mf");});


function me(searchedValue){
    let url = '';
   const type = typeof searchedValue;
  if(type == "object")
  {
    console.log(searchedValue)
    url =  `/?lat=${searchedValue.coords.latitude}&long=${searchedValue.coords.longitude}`;
    console.log(url);
     
  }
  else if(type  == "string")
    {
        url =  `/?q=${searchedValue}`;
        console.log(url);
    }
    


    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);

}

/*

THIS METHOD WILL SEND THE LAT AND LONG TO THE BACKEND BY USING AJAX


*/

let sendLocation = () =>{

   const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = ()=>{

        if(ajax.readyState=== XMLHttpRequest.DONE){
            try{

                if(ajax.status === 200){
                    console.log("the data is came and the looping should be done here ")
                        }
            
                        else if(ajax.status === 404){
                            console.log('the backend is not responding to your query')
                        }
                        else{
                         console.log("there is some error in your code ")
                        }
            }
          
            catch(e){
                console.log("there is some error caught ");
            }
        }


     const url = "/search"
   const method = "GET"
   ajax.open(method,url);
   ajax.send();


    }


}