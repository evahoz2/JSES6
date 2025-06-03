let joke=()=>{
    let name = document.getElementById("nm").value
    document.getElementById("sms").innerHTML= name +" guess what?"
    document.getElementById("sms").style.color="#2ef262"
    document.getElementById("sms").style.fontSize="50px"
    document.getElementById("sms").style.fontFamily="cursive"
    document.getElementById("ig").src="turkey-twerkey.gif"
}
document.getElementById("bt").addEventListener("click",joke);