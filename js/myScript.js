function answerExtract() {
    var score = 0;
    var name = document.querySelector('#name').value;
    var id = document.querySelector('#identify').value;
    if (document.querySelector('#pr-a2').checked) {
        score++;
        setStyle('#aLabel', 'green');
    } else {
        setStyle('#aLabel', 'red');
    }
    if (document.querySelector('#pr-b2').checked) {
        score++;
        setStyle('#bLabel', 'green');
    } else {
        setStyle('#bLabel', 'red');
    }
    if (document.querySelector('#pr-c3').checked) {
        score++;
        setStyle('#cLabel', 'green');
    } else {
        setStyle('#cLabel', 'red');
    }
    if (document.querySelector('#pr-d1').checked) {
        score++;
        setStyle('#dLabel', 'green');
    } else {
        setStyle('#dLabel', 'red');
    }
    if (document.querySelector('#binary').value === "7") {
        score++;
        setStyle('#eLabel', 'green');
    } else {
        setStyle('#eLabel', 'red');
    }
    if (document.querySelector('#semester').value === "20202") {
        score++;
        setStyle('#fLabel', 'green');
    } else {
        setStyle('#fLabel', 'red');
    }
    if (document.querySelector('#fQuestion').value === "pseudo-class is used to define a special state of an element while pseudo-element is used to style specified parts of an element.") {
        score++;
        setStyle('#gLabel', 'green');
    } else {
        setStyle('#gLabel', 'red');
    }
    if (document.querySelector('#sQuestion').value === "a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”).") {
        score++;
        setStyle('#hLabel', 'green');
    } else {
        setStyle('#hLabel', 'red');
    }
    wlmSite(name, id, score);
}
function setStyle(id, color) {
    document.querySelector(id).setAttribute("style", "color:" + color + ";font-size:24px;");
    document.querySelector(id).innerHTML = "*";
}
function wlmSite(name, id, score) {
    var msg = "Welcome " + name + " The owner of an identity number : " + id + " , Your Score is " + score + "/8";
    document.querySelector('#wlm').innerHTML = msg;
    document.querySelector('#wlm').setAttribute("style", "color:#854fee; font-size:18px; font-weight:bold;");
}
function disable(labelID) {
    if (labelID == "pa") {
        document.querySelector('#pr-a1').disabled = true;
        document.querySelector('#pr-a2').disabled = true;
        document.querySelector('#pr-a3').disabled = true;
    } else if (labelID == "pb") {
        document.querySelector('#pr-b1').disabled = true;
        document.querySelector('#pr-b2').disabled = true;
        document.querySelector('#pr-b3').disabled = true;
    } else if (labelID == "pc") {
        document.querySelector('#pr-c1').disabled = true;
        document.querySelector('#pr-c2').disabled = true;
        document.querySelector('#pr-c3').disabled = true;
        document.querySelector('#pr-c4').disabled = true;
    } else if (labelID == "pd") {
        document.querySelector('#pr-d1').disabled = true;
        document.querySelector('#pr-d2').disabled = true;
        document.querySelector('#pr-d3').disabled = true;
        document.querySelector('#pr-d4').disabled = true;
    } else if (labelID == "pe") {
        var x = document.getElementById("binary").getElementsByTagName("option");
        for (var i = 0; i < x.length; i++) {
            x[i].disabled = true;
        }
    } else if (labelID == "pf") {
        var x = document.getElementById("semester").getElementsByTagName("option");
        for (var i = 0; i < x.length; i++) {
            x[i].disabled = true;
        }
    }
}
function enable(labelID, labelID2) {
    document.querySelector('#pr-a1').disabled = false;
    document.querySelector('#pr-a2').disabled = false;
    document.querySelector('#pr-a3').disabled = false;
    document.querySelector('#pr-b1').disabled = false;
    document.querySelector('#pr-b2').disabled = false;
    document.querySelector('#pr-b3').disabled = false;
    document.querySelector('#pr-c1').disabled = false;
    document.querySelector('#pr-c2').disabled = false;
    document.querySelector('#pr-c3').disabled = false;
    document.querySelector('#pr-c4').disabled = false;
    document.querySelector('#pr-d1').disabled = false;
    document.querySelector('#pr-d2').disabled = false;
    document.querySelector('#pr-d3').disabled = false;
    document.querySelector('#pr-d4').disabled = false;
    var x = document.getElementById("binary").getElementsByTagName("option");
    for (var i = 0; i < x.length; i++) {
        x[i].disabled = false;
    }
    var x = document.getElementById("semester").getElementsByTagName("option");
    for (var i = 0; i < x.length; i++) {
        x[i].disabled = false;
    }
}
function showCode() {
    var codeContents = document.querySelector(".code-explan").innerHTML;
    var a = window.open();
    a.document.write("<html><body><h1>Code Page Content is : <br></h1>");
    a.document.write(codeContents);
    a.document.write("</body></html>");
    a.document.close();
    a.print();
}