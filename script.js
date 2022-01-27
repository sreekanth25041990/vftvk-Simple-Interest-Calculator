function calculate() {

    const newDate = new Date();
    newDate.setFullYear(newDate.getFullYear() );



    p=document.getElementById("p").value;
    n=document.getElementById("n").value;
    r=document.getElementById("r").value;
    si=(p*n*r/100);
    sum= (parseInt(si)+parseInt(p));
    result=document.getElementById("result");
    result.innerHTML="If you deposit " + p + "," + "<br>"+ "at an interest rate of " + n + "%" + "." + "<br>"+ "you will receive an amount of " + sum + "," +"<br>" + "in the year " +  (newDate.getFullYear()+parseInt(r));

}
