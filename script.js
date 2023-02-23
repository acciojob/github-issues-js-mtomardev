// //your code here

let PageNumberH3 = document.getElementById("PageNumber");
let orderList = document.getElementById("orderList");

let pageNumber = 1;

function fetchData(pageNumber){
    console.log(pageNumber);
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
    .then((response) => response.json())
    .then((_data) =>{
        console.log(_data);
        // for(let i = 0; i< 5; i++){
        //     //const element = data[i];
        //     console.log(data[i].title);
        //     orderList.innerHTML += `<li>${data[i].title}</li>`
        // }
        forloop(_data)

    })    
}

fetchData(pageNumber);

function forloop(data){
    orderList.innerHTML = " "
    for(let i = 0; i< 5; i++){
        //const element = data[i];
        // console.log(data[i].title);
        orderList.innerHTML += `<li>${data[i].title}</li>`
    }
}

function loadNext(){
    pageNumber++;
    if(pageNumber == 2){
        document.getElementById("load_prev").disabled = false;
    }
    PageNumberH3.innerHTML = `page number ${pageNumber}` 
    fetchData(pageNumber);
    // forloop(data)
}



function loadPrev(){
    pageNumber--;
    if(pageNumber<=0){
        pageNumber=0;
    }
    // if(pageNumber == 1){
    //     document.getElementById("load_prev").disabled = true;        
    // }
    // else{
    //     document.getElementById("load_prev").disabled = false;
    // }
    if(pageNumber>=1){
    PageNumberH3.innerHTML = `page number ${pageNumber}`;
    fetchData(pageNumber);
    }
    // forloop(data)
}
