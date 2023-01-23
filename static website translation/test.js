'use strict';
import lang from './test.json' assert { type: 'json' };
let words = document.querySelector("body").innerText;
console.log(words);
 words  = words.split("\n");
let translated = []
words.forEach((word)=>{
    
    if(lang[word]){
        translated.push(lang[word]);
      
    }
    else{
        translated.push(word);
    }
    
});

translated = translated.toString().replaceAll(',','\n');
document.querySelector("body").innerText = translated;





// let fetchRes = fetch("https://api.github.com/users");
//     fetchRes.then(res =>
//         res.json()).then(d => {
//             console.log(d)
//         })
    // console.log(fetchRes)