// for the sidebar

function closeSideBar(){
    $(".sideBar").animate({left:"-240px"},500)
    $(".open").removeClass("fa-x").addClass("fa-bars")
    $(".closeBar ul li").animate({
        top: 300
    }, 500)
}
function openSideBar(){
    $(".sideBar").animate({left:"0px"},500)
    $(".open").removeClass("fa-bars").addClass("fa-x");

    for (let i = 0; i < 6; i++) {
        $(".closeBar ul li").eq(i).animate({
            top: 0
        }, (i + 6) * 100)
    }
}

$(".open").on("click",function(){
    if($(".sideBar").css("left") == "0px"){
        closeSideBar()
    }else{
        openSideBar()

    }
})



// ----------------------------------------------------------------
// **** fetch *****
// fetching first screen
async function getNowTrending(){
    $(".inner-loading-screen").fadeIn(300)
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)
    let finalRes = await response.json()
    
    // console.log(finalRes.results);
    displayMovies(finalRes.results)
    $(".inner-loading-screen").fadeOut(300)
}
// fetching popular
async function getPopular(){
    $(".inner-loading-screen").fadeIn(300)
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)
    let finalRes = await response.json()

    displayMovies(finalRes.results)
    $(".inner-loading-screen").fadeOut(300)
}
// fetching top rated
async function getTopRated(){
    $(".inner-loading-screen").fadeIn(300)
    let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)
    let finalRes = await response.json()

    displayMovies(finalRes.results)
    $(".inner-loading-screen").fadeOut(300)
}
// fetching trend
async function getTrending(){
    $(".inner-loading-screen").fadeIn(300)
    let response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)
    let finalRes = await response.json()

    displayMovies(finalRes.results)
    $(".inner-loading-screen").fadeOut(300)
}
// fetching upcoming
async function getUpComing(){
    $(".inner-loading-screen").fadeIn(300)
    let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)
    let finalRes = await response.json()

    displayMovies(finalRes.results)
    $(".inner-loading-screen").fadeOut(300)
}
// fetching search
async function getSearchData(search){
    $(".inner-loading-screen").fadeIn(300)
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${search}&language=en-US&page=1`)
    let finalRes = await response.json()

    displayMovies(finalRes.results)
    $(".inner-loading-screen").fadeOut(300)
    
}



// ------------------------------------------------

$("#nowPlaying").on('click',function(){
    $("#moviesCards").empty()
    getNowTrending()
    closeSideBar()
})

function forHover(){
    $(".movieCaption").hover(function(e){
        let {target} = e
        $(this).addClass("opacity-100").removeClass("opacity-0")
        $("h2").animate({
            top : "0"
        },400)
        $("h3").animate({
            bottom : "0"
        },400)
    },function(e){
        $(this).addClass("opacity-0").removeClass("opacity-100")
        $("h2").animate({
            top : "-100px"
        },50)
        $("h3").animate({
            bottom : "-100px"
        },50)
        
    }
    )
}




// to dispaly
function displayMovies(x){
    let data = x 
    
    cartona =`` ; 
    
    for (let i = 0; i < data.length; i++) {
        let rounded = parseFloat(data[i].vote_average.toFixed(1))
        let stars = parseFloat(data[i].vote_average.toFixed(0))
        cartona2=``;
        for (let j = 0; j < stars; j+=2) {
            cartona2 +=`<i class="fa-solid fa-star  stars"></i>`
            
        }
        cartona += `
        <div class="col-md-4 ">
                    <div class="position-relative movieBox rounded-2">
                        <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}" class="w-100 " alt="">
                        <div class="movieCaption text-white position-absolute opacity-0">
                            <h2 class="text-center my-3 ">${data[i].original_title}</h2>
                            <p class="mb-3  ">${data[i].overview}</p>
                            <p class="mb-3">release date : <span>${data[i].release_date}</span></p>
                            <h3 class="mb-3">${cartona2}</h3>
                            <h3 class="ratingBox rounded-5">${rounded}</h3>
                        </div>
                    </div>
                </div>
        `
        
    }
    let y = document.querySelector("#moviesCards")
    y.innerHTML = cartona ;
    forHover()
}
getNowTrending()
// --------------------------------------------------------------------------
// Popular

$("#popular").on('click',function(){
    $("#moviesCards").empty()
    getPopular()
    closeSideBar()
})

// ----------------------------------------------------------------------------
// top rated

$("#topRated").on('click',function(){
    $("#moviesCards").empty()
    getTopRated()
    closeSideBar()
})


// ---------------------------------------------------------------------------
// Upcoming



$("#upComing").on('click',function(){
    $("#moviesCards").empty()
    getUpComing()
    closeSideBar()
})


// ----------------------------------------------------------------------------
// trending
$("#trending").on('click',function(){
    $("#moviesCards").empty()
    getTrending()
})


// ----------------------------------------
// contact us
let submitBtn =document.querySelector("#submitBtn")
let fname = document.querySelector("#fname")
let email = document.querySelector("#email")
let phone = document.querySelector("#phone")
let age = document.querySelector("#age")
let pass = document.querySelector("#pass")
let repass = document.querySelector("#repass")
let fnameAlert = document.querySelector("#fnameAlert")
let emailAlert = document.querySelector("#emailAlert")
let phoneAlert = document.querySelector("#phoneAlert")
let ageAlert = document.querySelector("#ageAlert")
let passAlert = document.querySelector("#passAlert")
let repassAlert = document.querySelector("#repassAlert")

let fnamePressed = false;
let emailPressed = false;
let numPressed = false;
let agePressed = false;
let passPressed = false;
let repassPressed = false;

$("#fname").on("focus", function () { fnamePressed = true; })
$("#email").on("focus", function () { emailPressed = true; })
$("#phone").on("focus", function () { numPressed = true; })
$("#age").on("focus", function () { agePressed = true; })
$("#pass").on("focus", function () { passPressed = true; })
$("#repass").on("focus", function () { repassPressed = true; })


function testValidation(){
    if (fnamePressed) {
        
        if (fnameValidation()) {
            fnameAlert.classList.replace("d-block", "d-none")
            
        } else {
            fnameAlert.classList.replace("d-none", "d-block")
        }
    }
    if (emailPressed) {
        
        if (emailValidation()) {
            emailAlert.classList.replace("d-block", "d-none")
            
        } else {
            emailAlert.classList.replace("d-none", "d-block")
        }
    }
    if (numPressed) {
        
        if (phoneValidation()) {
            phoneAlert.classList.replace("d-block", "d-none")
            
        } else {
            phoneAlert.classList.replace("d-none", "d-block")
        }
    }
    if (agePressed) {
        
        if (ageValidation()) {
            ageAlert.classList.replace("d-block", "d-none")
            
        } else {
            ageAlert.classList.replace("d-none", "d-block")
        }
    }
    if (passPressed) {
        
        if (passValidation()) {
            passAlert.classList.replace("d-block", "d-none")
            
        } else {
            passAlert.classList.replace("d-none", "d-block")
        }
    }
    if (repassPressed) {
        
        if (repassValidation()) {
            repassAlert.classList.replace("d-block", "d-none")
            
        } else {
            repassAlert.classList.replace("d-none", "d-block")
        }
    }
    if(fnameValidation == true && emailValidation ==true && phoneValidation == true && ageValidation ==true && passValidation == true &&repassValidation == true){
        $("#submitBtn").css({
            left : "0"
        })
    }else {
        $("#submitBtn").hover(function(){
            $(this).animate({
                left: "100px"
            },200)
        },function(){
            $(this).animate({
                left: "0"
            },200)
        })
    }
    console.log("hiiii")
}


function fnameValidation (){
    regex = /^[a-zA-Z]+$/
    result = regex.test(fname.value)
    
    return result
}
function emailValidation (){
    regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    result = regex.test(email.value)
    
    return result
}
function phoneValidation (){
    regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    result = regex.test(phone.value)
    
    return result
}
function ageValidation (){
    regex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
    result = regex.test(age.value)
    
    return result
}
function passValidation (){
    regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    result = regex.test(pass.value)
    
    return result
}
function repassValidation (){
    if(pass == repass){
        return true
    }
    
    return false
}