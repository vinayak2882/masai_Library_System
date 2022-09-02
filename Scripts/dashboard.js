let databooks=JSON.parse(localStorage.getItem("book-list"))||[];
let tbody=document.querySelector("tbody");
let totalcount=document.querySelector("h1>span");
let filter=document.querySelector("#filter");

totalcount.innerText=databooks.length;
function displayTable(Data){
  tbody.innerText=null;
  Data.map(function(el,index){
    let row=document.createElement("tr");

    let name=document.createElement("td");
    name.innerText=el.name;

    let author=document.createElement("td");
    author.innerText=el.author;

    let description=document.createElement("td");
    description.innerText=el.desc;

    let addDate=document.createElement("td");
    addDate.innerText=el.addedDate;

    let category=document.createElement("td");
    category.innerText=el.category;

    let price=document.createElement("td");
    price.innerText=el.price;

    let buying=document.createElement("td");
    buying.innerText="Buy";
    buying.style.background="teal";
    buying.addEventListener("click",function(){
      
        totalcount.innerText=databooks.length-1;
       
      buybook("buy-list",el);
      booksDelete(databooks,index);
    })

    let bookmark=document.createElement("td");
    bookmark.innerText="Add";
    bookmark.style.background="pink";
    bookmark.addEventListener("click",function(){
        totalcount.innerText=databooks.length-1;
       
        addtocart("bookmark-list",el);
        booksDelete(databooks,index);
    })

    row.append(name,author,description,addDate,category,price,buying,bookmark);
    tbody.append(row);
  })
}
displayTable(databooks);

filter.addEventListener("change",function(){
    let selected=filter.value;
     if(selected==""){
      displayTable(databooks);
     }else{
      let filteringData=databooks.filter(function(el,i){
          return selected==el.category;
      });
      displayTable(filteringData);
     }
     
  })

function buybook(key,value){
    let newData=JSON.parse(localStorage.getItem(key))||[];
    newData.push(value);
    localStorage.setItem("buy-list",JSON.stringify(newData));

}
function booksDelete(data,index){
   
    databooks=data.filter(function(el,i){
      return i!==index;
    });
    
    localStorage.setItem("book-list",JSON.stringify(databooks));
    displayTable(databooks);
  }

function addtocart(key,value){
    let cartData=JSON.parse(localStorage.getItem(key))||[];
    cartData.push(value);
    localStorage.setItem("bookmark-list",JSON.stringify(cartData));

}



