function calculate(){

    const intext1 = document.getElementById("input1").value;
    const intext2 = document.getElementById("input2").value;
    const intext3 = document.getElementById("input3").value;

    if (intext3 == "addition")
    {
        document.getElementById("answer").innerText = Number (intext1) + Number (intext2) ;
    }

    if (intext3 == "subtraction" )
    {
        document.getElementById("answer").innerText = Number (intext1) - Number (intext2);
    }

    if (intext3 == "multiplication")
    {
        document.getElementById("answer").innerText = Number (intext1) * Number (intext2);
    }

    if (intext3 == "division")
    {
        document.getElementById("answer").innerText = Number (intext1) / Number (intext2);
    }
}