function check(){
    var nbr;
    nbr = Number(document.getElementById("age").value);
    
    if(nbr <1){
        swal.fire("invalid input!");
    }
     else if(nbr <= 12.99)
    {
       swal.fire("Yay You are a child");
    }
    
    else if (nbr < 17.99) {
        swal.fire("Great You are a teen")
    }
    else if(nbr  > 17.99)
    {
       swal.fire("Congratulation You are an adult");
    }
}