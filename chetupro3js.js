document.getElementById("frm").addEventListener("submit",function(){
event.preventDefault()

var obj=new FormData(this)
var data={};
obj.forEach(function(v,k){
data[k]=v;
//console.log(data)
})    
console.log(data)





})