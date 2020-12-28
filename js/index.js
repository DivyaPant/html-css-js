
//Modal for click on blogs
const readArticle = function ()
{
    document.querySelector("body").style.cssText= "overflow:hidden;";
    document.querySelector(".overlay-article").style.cssText= "display:block;"
}

document.querySelector(".close").addEventListener("click", ()=> {
    
    document.querySelector(".overlay-article").style.display="none";
    document.querySelector("body").style.overflow="auto";
})



//Ask Beroe modal 
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

function showModal(){
    document.querySelector(".query-textarea").value="";
    modal.classList.add("show-modal");
    document.querySelector("body").style.overflow="hidden";      
}


function closeModal(){
    modal.classList.remove("show-modal");
    document.querySelector("body").style.overflow="auto";
    document.querySelector(".verify-queryData").style.display="none";
}

function submitted(){
    if(document.querySelector(".query-textarea").value!==""){
        document.querySelector(".verify-queryData").style.display="none";
        modal.classList.remove("show-modal");
        document.querySelector(".query-submitted-modal").classList.add("show-modal");
       
    }
    else{
        document.querySelector(".verify-queryData").style.display="block";
        document.querySelector(".verify-queryData").innerText= "No query has been filed!";
    }
    
}
function okay(){
    document.querySelector(".query-submitted-modal").classList.remove("show-modal");
    document.querySelector("body").style.overflow="auto";
}


//dropdown menu
document.querySelector(".caret img").addEventListener("click",dropdownCaret );

function dropdownCaret(){
    document.querySelector(".dropdown-menu").classList.toggle("close-dropdown-menu");
}

document.querySelector(".caret").onmouseleave = function(){
    document.querySelector(".dropdown-menu").classList.remove("close-dropdown-menu");
};


//closing the modals when clicking out
const overlayArticle = document.querySelector(".overlay-article");
window.onclick = function(event) {
    if (event.target == modal) {
       closeModal();
    }
    else if(event.target == overlayArticle){
        document.querySelector(".overlay-article").style.display="none";
        document.querySelector("body").style.overflow="auto";
}

}



//SignOut and SignIn on clicking the profile button
function signOutJohn(){
    document.querySelector(".signOut").classList.toggle("close-dropdown");
}  

document.querySelector(".signout-btn").addEventListener("click", ()=>{
   document.querySelector(".signOut").classList.toggle("close-dropdown");
   document.querySelector(".hiJohn").style.display="none";
   document.querySelector(".signIn").style.display="flex";

   document.querySelector(".signIn").addEventListener("click",()=>{
    setTimeout(function(){
        document.querySelector(".signIn").style.display="none";
     document.querySelector(".hiJohn").style.display="flex";
    },1000);
    
});
});


//Burger menu for mobile view
//EventListener for close button
function burgerMenu(){
  document.querySelector(".leftSlideMenu").classList.remove("closeSlider");
  document.querySelector("body").style.overflow="hidden";
}
document.querySelector(".closeSlider-btn").addEventListener("click",()=>{
   document.querySelector(".leftSlideMenu").classList.add("closeSlider");
   document.querySelector("body").style.overflow="auto";
});


//Adding extra blogs on click of more button
const extra1= document.querySelectorAll(".extra1");
const extra2= document.querySelectorAll(".extra2");
const more= document.querySelectorAll(".more");
function extraBlogs(n){
    if(more[n-1].innerText=="More"){
        
        extra1[n-1].style.display="flex";
        extra2[n-1].style.display="flex";
        document.querySelectorAll(".more u")[n-1].innerText="Less";
        document.querySelectorAll(".more img")[n-1].src="../images/chevronUp.png";
    }
    else if(more[n-1].innerText=="Less"){
        
        extra1[n-1].style.display="none";
        extra2[n-1].style.display="none";
        document.querySelectorAll(".more u")[n-1].innerText="More";
        document.querySelectorAll(".more img")[n-1].src="../images/chevron.png";
    }
    
}


//downloading the txt file on click of download button
function saveStaticDataToFile(n) {
   
    const file= document.querySelector(".text1").innerText;
    var blob = new Blob([file],
    { type: "text/plain;charset=utf-8" });
    saveAs(blob, "static.txt");
}
const x= document.querySelector(".aside");
x.addEventListener("click",()=>{
    x.style.display="none";
    document.querySelector(".upper-image > img").style.maxWidth = "35rem";
})
