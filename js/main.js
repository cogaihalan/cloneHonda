// async function  callAPI(){
//     try{
//         let res = await axios(
//             {
//                 // url: "http://35.154.4.154/mobile_ae/app/v0_1/api/home_page" , 
//                 method : "GET"
//             }
//         )

//         return res.data
//     }catch(err){
//         console.log(err)
//     }
// }
// callAPI().then(data=>{
//     console.log(data)
// })
const SHOWROOM = document.querySelector("#_showroom")
const OPEN_SHOWROOM = document.querySelector(".js-showroom")
const CLOSE_SHOWROOM = document.querySelector(".showroom-close")
OPEN_SHOWROOM.onclick = () => {
    SHOWROOM.classList.add("slideIn")
    document.querySelector(".js-arrow").classList.replace("fa-angle-down", "fa-angle-up")

}
CLOSE_SHOWROOM.onclick= (e)=>{
    e.stopPropagation()
    SHOWROOM.classList.remove("slideIn")
    document.querySelector(".js-arrow").classList.replace("fa-angle-up", "fa-angle-down")
}
const PLUS_ICON = document.querySelectorAll(".js-plus")
const LINK_HEADING = document.querySelectorAll(".js-heading")
LINK_HEADING.forEach((item, index) => item.onclick = () => {
    if (PLUS_ICON[index].classList.contains("fa-plus"))
        PLUS_ICON[index].classList.replace("fa-plus", "fa-minus")
    else {
        PLUS_ICON[index].classList.replace("fa-minus", "fa-plus")

    }
}

)


const NAVBAR_TOGGLER = document.querySelector(".navbar-toggler")
const SHOW_MENU = document.querySelectorAll(".navbar-toggler-icon")
const MENU_TEXT = document.querySelector(".menu-text")
console.log(SHOW_MENU)
console.log(NAVBAR_TOGGLER)
NAVBAR_TOGGLER.onclick =()=>{
   
    SHOW_MENU[0].classList.toggle("transform45deg")
    SHOW_MENU[1].classList.toggle("transform-45deg")
    MENU_TEXT.classList.toggle("fadeOut")
    if(SHOWROOM.classList.contains("slideIn")){
        SHOWROOM.classList.remove("slideIn")
    document.querySelector(".js-arrow").classList.replace("fa-angle-up", "fa-angle-down")

    }
}
