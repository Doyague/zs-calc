
function change_tab(id) {

    document.getElementById("page_content").innerHTML=document.getElementById(id+"_desc").innerHTML;
    document.getElementById("page1").className="notselected";
    document.getElementById("page2").className="notselected";
    document.getElementById("page3").className="notselected";
    document.getElementById("page4").className="notselected";
    document.getElementById("page5").className="notselected";
    document.getElementById("page6").className="notselected";
    document.getElementById(id).className="selected";
}

 function multiplyBy() {

    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() { 

    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

function subtract() {

    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 - num2;
}

function addition() {

    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 + num2;
}