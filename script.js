//your code here

let PageNumberH3 = document.getElementById("PageNumber");
let orderList = document.getElementById("orderList");

let pageNumber = 1;

function fetchData(pageNumber){
    console.log(pageNumber);
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
    .then((response) => response.json())
    .then((_data) =>{
        console.log(_data);
        forloop(_data)

    })    
}

fetchData(pageNumber);

function forloop(data){
    orderList.innerHTML = " "
    for(let i = 0; i< 5; i++){
        // console.log(data[i].title);
        orderList.innerHTML += `<li>${data[i].id}</li>`
    }
}

function loadNext(){
    pageNumber++;
    PageNumberH3.innerHTML = `page number ${pageNumber}` 
    fetchData(pageNumber);
}

function loadPrev(){
    if(pageNumber>1){
    pageNumber--;
    PageNumberH3.innerHTML = `page number ${pageNumber}`;
    fetchData(pageNumber);
    }
}
    