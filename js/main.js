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
    document.querySelector(".js-showroom").onclick=()=>{
           document.querySelector("#_showroom").classList.toggle("slideIn") 
    }