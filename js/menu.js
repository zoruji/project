let userid=localStorage.getItem("userid");
let phonenumber=localStorage.getItem("phonenumber");
const menuList = document.getElementById("menu-list");
document.getElementById("phone").innerText=phonenumber;
fetch('http://136.243.83.235:3000/foods/'+userid)
.then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong');
  })
    //.then((response) => response.json())
    .then((data) => {
     menuList.innerHTML = '';
    const foods = data.result;
    for(let i=0;i<foods.length;i++){
        menuList.innerHTML +=  '<div style="width:300px; border-radius:10px;margin-right:50px;" class=" border bg-light px-0 mb-2 me-3">'+
        '<img style="height:170px; width:300px; border-radius:5px; margin-bottom:30px;"  src="foods[i].cover" alt="">'+
        '<h6 style="padding-left:10px;padding-right:10px;  padding-bottom:20px;text-align: right;">'+foods[i].name+
        '<div class="d-flex justify-content-between">'+
          '<div>'+
          '<p style="font-size: small;color:gray; padding-top:10px; cursor:pointer;">'+
              '<i style="padding-right:10px;" class="bi bi-geo-alt"></i>'+foods[i].name+
            '</p>'+
            '</div>'+
           '<p style="font-size:small; padding-left:900; color: gray;">'+
          '('+foods[i].reviewCount+'نظر)'+
         '</p>'+
        '</div>'+
       '</div>';
    
     }
     //setTimeout(function(){},18)
     console.log(data);
    })
    .catch((error) => {
      console.error('Error:');
    })  
    