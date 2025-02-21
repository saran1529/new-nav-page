// dom - document object model

// getting element by ID
const homelink = document.getElementById("main")

// saving as a var an in dom.js 
// const h = homelink.textContent
// updating h doesnot affect the actual html element

// loging h var
// console.log(h);

// editing "home" 
if(homelink){
    homelink.textContent = homelink.textContent.replace(/home/i, "index")
// (/home/i) this method will replace capital letter to small letter
    // loging edited value
console.log(homelink.textContent);
}

//------------------------------------

// queryselector
const servicelink = document.querySelector("#serv")
if (servicelink) {
    servicelink.textContent = servicelink.textContent.replace("Services", "Maintanance")
    console.log(servicelink.textContent);
    
}

//------------------------------------

// creating a tag and value using dom
const newHeading = document.createElement("h2")

newHeading.textContent = "End Of This Page"

document.body.append(newHeading)

