function calculateFutureValue(){
    var iAmt=document.getElementById("iAmt").value
    var iRate=document.getElementById("rate").value
    var year=document.getElementById("yr").value
    var p=Math.pow((1+iRate/100),year)
    document.getElementById("fv").value=Math.round(iAmt*p)
}