//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/


var pElem = document.getElementsByClassName("navi");

for(var i = 0; i<pElem.length; i++){
  pElem[i].addEventListener("click", showItems);
  
}

function showItems(){
  // console.log("test");
  
  var items = this.querySelectorAll(".inner")[0];
  if(items.style.display === "none"){
    items.style.display = "block";
  }else{
    items.style.display = "none";
  }
}




/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var pMenu = document.getElementsByClassName("name");

for(var i = 0; i<pMenu.length; i++){
  pMenu[i].addEventListener("click", showMenu);
  
}

function showMenu(){
  // console.log("test");
  
  var menus = this.querySelectorAll(".menu")[0];
  if(menus.style.display === "none"){
    menus.style.display = "block";
  }else{
    menus.style.display = "none";
  }
}