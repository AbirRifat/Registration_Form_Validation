$(document).ready(function(){
    $("#submit").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var pass = $("#password").val();

        if(name.length ==""){
            $("#p1").text("Please Enter your name");
            $("#name").focus();
            return false;
        }
        else if(email.length ==""){
            $("#p2").text("Please Enter your Email");
            $("#email").focus();
            return false;
        }
        else if(pass.length ==""){
            $("#p3").text("Please Enter Password");
            $("#password").focus();
            return false;
        }
        else{
            var con =confirm("Are you Done?");
            if(con ==true){
                alert("Welcome To Our Website");
                return true;
            }
            else{
                return false;
            }
        }
    })
})