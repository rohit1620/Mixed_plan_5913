let otp = JSON.parse(localStorage.getItem('otp'));
console.log("your otp is ",otp)


function confirm(){
  let input = document.getElementById('input').value
  console.log("your input is ",input)

if(otp == input){
  alert('login Succefully')

   window.location.href='index.html'
}
else{
    alert("Wrong otp")
}

}
