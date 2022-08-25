function otp(){
    let num = document.getElementById('input').value
   // console.log(num)
    if(num>=1000000000 && num<10000000000){
      let randomOtp=Math.ceil((Math.random()+1)*100000);
      console.log("otp is ",randomOtp);
       alert(` Your OTP is ${randomOtp} `);
       localStorage.setItem('otp',JSON.stringify(randomOtp))
        window.location.href='otp.html'
    }
    else{
        alert('Please Check Your Number')
    }
  
}