
  let bookmarkdata=JSON.parse(localStorage.getItem("bookmark-list"))||[];
  let tbody=document.querySelector("tbody");

function displayTable(data){
  tbody.innerText="";
  data.map(function(el,index){
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

    
    row.append(name,author,description,addDate,category,price);
    tbody.append(row);
  })
}
displayTable(bookmarkdata);