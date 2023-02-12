let title=document.getElementById("title");
let location=document.getElementById("location");
let list=document.getElementById("list");
fetch('http://136.243.83.235:3000/foods/{userId}/123')
.then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong');
  })
    .then((data) => {
     list.innerHTML='';
      const foods = data.data;
    for(let i=0;i<data.data.foods.length;i++){
      list.innerHTML+=' <div class="col-6">'+
      '<div  class="p-3 border bg-white"><h6 style="padding-left: 400px;">پیتزا دونر استیک</h6>'+
      '<h6 style="color: red; padding-left:400px;padding-top:30px;">210000تومان</h6>'+
      '<i style="padding-right:500px ;color:red;" class="bi bi-plus-circle"></i>'+
    '</div>'+
    '</div>'+
    '<div class="col-6">'+
    '<div  class="p-3 border bg-white"><h6 style="padding-left: 400px;">بال سوخاری</h6>'+
    '<h6 style="color: red; padding-left:400px;padding-top:30px;">از 135000تومان</h6>'+
    '<i style="padding-right:500px ;color:red;" class="bi bi-plus-circle"></i>'+
  '</div>'+
  '</div>'+
  '<div class="col-6">'+
          '<div  class="p-3 border bg-white"><h6 style="padding-left: 400px;">قارچ برگر دوبل</h6>'+
          '<h6 style="color: red; padding-left:400px;padding-top:30px;">194000تومان</h6>'+
          '<i style="padding-right:500px ;color:red;" class="bi bi-plus-circle"></i>'+
        '</div>'+
        '</div>'+
        '<div class="col-6">'+
          '<div  class="p-3 border bg-white"><h6 style="padding-left: 400px;">دبل زینگر</h6>'+
          '<h6 style="color: red; padding-left:400px;padding-top:30px;">175000تومان</h6>'+
          '<i style="padding-right:500px ;color:red;" class="bi bi-plus-circle"></i>'+
        '</div>'+
        '</div>'+
        '<div class="col-6">'+
            '<div  class="p-3 border bg-white"><h6 style="padding-left: 400px;">سالاد شف</h6>'+
            '<h6 style="color: red; padding-left:400px;padding-top:30px;">100000تومان</h6>'+
            '<i style="padding-right:500px ;color:red;" class="bi bi-plus-circle"></i>'+
          '</div>'+
          '</div>'+
          '<div class="col-6">'+
              '<div  class="p-3 border bg-white"><h6 style="padding-left: 400px;">آب شاتوت</h6>'+
              '<h6 style="color: red; padding-left:400px;padding-top:30px;">40000تومان</h6>'+
              '<i style="padding-right:500px ;color:red;" class="bi bi-plus-circle"></i>'+
            '</div>'+
            '</div>'+
    }
    
    console.log(data);
})
.catch((error) => {
  console.error('Error:');
})  