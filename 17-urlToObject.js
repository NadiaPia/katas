const urlDecode = function(text) {
    const obj = {};
    text = text.replace(/%20/g, " ");
    const arr = text.split("&");
    arr.map((el)=>{
    const array = el.split('=');
    obj[array[0]] = array[1];      
   });

   return obj;

  } 
  
  console.log(urlDecode("duck=rubber"));
  console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
  console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));  
  console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
