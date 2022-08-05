button.onclick = function() {
    var yourname = document.getElementById("yourname").value;
        document.getElementById("result-yourname").innerHTML = yourname;
    
    var email = document.getElementById("email").value;
        document.getElementById("result-email").innerHTML = email;
        document.getElementById("result-email-link").href = "mailto:"+email;
    
    var position = document.getElementById("position").value;
        document.getElementById("result-position").innerHTML = position;
    
    var phone = document.getElementById("phone").value;
        document.getElementById("result-phone").innerHTML = "+"+ phone;
        document.getElementById("result-phone-link").href = "https://api.whatsapp.com/send?phone="+phone;

    var telegram = document.getElementById("telegram").value;
        document.getElementById("result-phone").innerHTML = "+"+ phone;
        document.getElementById("result-telegram-link").href = "https://t.me/"+telegram;
    
    var facebook = document.getElementById("facebook").value;
        document.getElementById("result-facebook").href = "https://www.facebook.com/"+facebook;
    


}