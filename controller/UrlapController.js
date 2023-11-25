import UrlapView from "../view/UrlapView.js";
class UrlapController{
    constructor(){
console.log("controller")
new UrlapView($(".urlap"))
$(window).on("ujAdatHozzaAdasa",(event)=>{
    console.log(event.detail)
})

    }
}
export default UrlapController;