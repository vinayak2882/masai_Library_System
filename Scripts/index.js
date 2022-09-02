let formData=document.querySelector("form");

let data=JSON.parse(localStorage.getItem("book-list"))||[];

formData.addEventListener("submit",function(event){
    event.preventDefault();

   
    let object={
      name:formData.name.value,
      author:formData.author.value,
      desc:formData.desc.value,
      addedDate:formData.added.value,
      category:formData.category.value,
      price:formData.price.value

    }
    data.push(object);
    localStorage.setItem("book-list",JSON.stringify(data));
})
