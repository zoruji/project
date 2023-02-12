let id;
let phoneNumber;
document.getElementById("button").onclick=function(event){
//document.getElementById("dokmeh").disabled=true
let number=document.getElementById("number");
let payamak=document.getElementById("payamak");
//button.addEventListener("click");
phoneNumber=number.value;
fetch('http://136.243.83.235:3000/users', {
  method: 'POST',
  headers: {
     Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  phoneNumber:number.value,
  
 
  })
})
  .then((response) => response.json())
  .then((data) => {
   document.getElementById('shomare').setAttribute('hidden','true');
   document.getElementById('code').removeAttribute('hidden');
   console.log(data);
    id=data.id;
   //setTimeout(function(){},18)

  })
  .catch((error) => {
    console.error('Error:', error);
  })  
//})

} 
// http://136.243.83.235:3000/users/{id}/validateCode
document.getElementById("payamak").onchange=function(event){
  if(event.target.value.length==5){
    fetch('http://136.243.83.235:3000/users/'+id+"/validate", {
  method: 'POST',
  headers: {
     Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  code:payamak.value,
  
 
  })
})
.then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Something went wrong');
})
  //.then((response) => response.json())
  .then((data) => {
   document.getElementById('success').removeAttribute('hidden');
   localStorage.setItem("userid",id);
   localStorage.setItem("phonenumber",phoneNumber);
   location.href="menu.html";
   //setTimeout(function(){},18)

  })
  .catch((error) => {
    console.error('Error:');
    document.getElementById('khata').removeAttribute('hidden');
  })  
  }
}


