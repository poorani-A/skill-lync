function indx() {
    alert("hello");
    var name = prompt("who are you");
    console.log("this is commend", name);
    var con = confirm("are you sure");
    console.log(con);
}


function variablesdecl() {
    var b1 = true;
    var b2 = false;

    var n1 = 100;
    var n2 = 100.20;
    var n3 = -100;

    var str = "str";
    var str1 = "str1";
    var ch = 'a';

    console.log(b1, b2, n1, n2, n3, str, str1, ch);

    var arr = [1, 2, 3, false, str1, [10, 20, 30]];
    console.log(arr[1], arr[4][3], arr[5][1]);

    var obj = {
        name: 'n1',
        age: 21,
        hobbies: ['h1', 'h2'],
        isEmployed: true,
        address: {
            "door no": 23,
            street: 'S1',
            country: "india",

        }
    }
    var key = "name";
    console.log(obj);
    console.log(obj.age, obj['age'], obj.hobbies[1], obj.address.street, obj.address["door no"]);
    console.log(obj[key]);
}


function printbrowser() {
    var arr = [];
    var i = 0;
    obj = {};
    var b1 = prompt("printbrowser1");
    if (b1 != "") {
        arr[i] = b1;
        i++;
        obj[b1] = b1.length;
    }
    var b2 = prompt("printbrowser2");
    if (b2 != "") {
        arr[i] = b2;
        i++;
        obj[b2] = b2.length;
    }
    var b3 = prompt("printbrowser3");
    if (b3 != "") {
        arr[i] = b3;
        i++;
        obj[b3] = b3.length;
    }
    console.log(arr);
    console.log(obj);

}
//swapping of tw0 values using temp var

function swap(num1, num2) {
    var temp;
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(num1, num2);
}

function swap1(num1, num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    console.log("swapping", +num1, num2);
}

function posv(n1) {
    if (n1 != "")
        console.log(n1);
}

function testclick() {
    console.log("testclick");

    var content = prompt("enter some content")
    document.getElementById("h1_id").innertext = content;
    document.getElementById("inp_id").value = content;

    var color = prompt("enter color");
    document.getElementById("h1_id").style.color = color;

    document.getElementById("h1_id").style.display = "none"
}


function testclick1(color) {
    console.log("welcome")
    document.getElementById("h2_id").style.color = color;

}

function increment() {
    console.log("welcome");
    var value = document.getElementById('txt_id').value;


    document.getElementById("txt_id").value = Number(value) + 1;
}
function decrement() {
    console.log("welcome");
    var value = document.getElementById('txt_id').value;
    document.getElementById("txt_id").value = Number(value) - 1;

}

//odd even
function odd_even() {

    var number = document.getElementById('text_id').value;
    if (number % 2 == 0) {
        document.getElementById('result').innerHTML = "even";


    }
    else {
        document.getElementById('result').innerHTML = "odd";


    }


}


//positive and nev

function posneg() {
    var n = document.getElementById('nev_id').value;


    if (n > 0) {
        document.getElementById('rslt').innerHTML = "positive";

    }
    else {
        document.getElementById('rslt').innerHTML = "negative";
    }



}

//get method
function sendGetRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://reqres.in/api/users?page=3&per_page=3");
    xhttp.send();
    //callback
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response);
            var data = response.data;
            var trStr = '';
            data.forEach(function (value, index) {
                console.log(index, value);
                trStr += "<tr>";
                trStr += "<td>" + value.id + "</td>";
                trStr += "<td>" + value.email + "</td>";
                trStr += "<td>" + value.first_name + "" + value.last_name + "</td>";
                trStr += "<td><img src='" + value.avatar + "'/></td>";
                trStr += "</tr>";



            })
            document.getElementById('ajax_tbody').innerHTML = trStr;

        }
    }
}
//post method
function sendPostRequest() {
    var n1 = document.getElementById('n1').value;
    var j1 = document.getElementById('j1').value;
    var error = false;
    if (n1 == 'true') {
        document.getElementById('n1').style.border = "1px solid red";
    }
    else {
        document.getElementById('j1').style.border = "1px solid lightgray";
    }
    if (error) {
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://reqres.in/api/users");
    xhttp.setRequestHeader('content-Type', 'application/x-www-urlencoded');
    xhttp.send("name=" + n1 + "&job" + j1);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            alert("data added sucessfully");

        }
    }
}

//upper and lower

function upper() {
    var n = "happy welcome";
    var str = n.toUpperCase(n);

    document.getElementById('h1id').innerHTML = str;
}
function lower() {
    var n = "hello evening";
    var str1 = n.toLowerCase(n);
    document.getElementById('h1id').innerHTML = str1;
}


function fizbuz(start, final) {
    var aar;
    for (i = start; i <= final; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("number is fizzbuzz", i);
        }
        else if (i % 3 == 0) {
            console.log("fizz");
        }
        else if (i % 5 == 0) {
            console.log("buzz");
        }
        else
            console.log(i);
    }
}

//ajax

function sendGetrequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhttp.send();
    //
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response);
            var trStr = '';
            response.forEach(function (value, index) {
                console.log(index, value)
                trStr += "<tr>";
                trStr += "<td>" + value.id + "</td>";
                trStr += "<td>" + value.name + "</td>";
                trStr += "<td>" + value.username + "</td>";
                trStr += "<td>" + value.email + "</td>";
                trStr += "<td>" + value.address.suite + "" + value.address.street + "" + value.address.city + "" + value.address.zipcode + "</td>";
                trStr += "</tr>";
            })
            document.getElementById('ajax_tbody1').innerHTML = trStr;
        }
    }

}

function sendPutrequest() {
    var n2 = document.getElementById('n2').value;
    var j2 = document.getElementById('j2').value;
    var error = false;
    if (n1 == '') {
        error = true;
        document.getElementById('n2').style.border = "1px solid red";
    }
    else {
        document.getElementById('j2').style.border = "1px solid lightgray";
    }
    if (error) {
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "https://jsonplaceholder.typicode.com/guide/");

    xhttp.setRequestHeader('content-Type', 'application/x-www-urlencoded');
    xhttp.send("name1" + n2 + "&job1" + j2);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            alert("data added sucessfully");

        }
    }
}

function addition() {

    var num1 = document.getElementById("t1_id").value;
    var num2 = document.getElementById("t2_id").value;
    sum = num1 + num2
    document.getElementById("result_id").innerHTML = sum;


}
function diff() {

    num1 = document.getElementById("t1_id").value;
    num2 = document.getElementById("t2_id").value;
    document.getElementById("result_id").innerHTML = num1 - num2;

}
function multiply() {
    var num1 = document.getElementById("t1_id").value;
    var num2 = document.getElementById("t2_id").value;
    document.getElementById("result_id").innerHTML = num1 * num2;

} 



function getRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://run.mocky.io/v3/d0e0d19a-4b75-48d1-97aa-71b2d2bf5501");
    xhttp.send();
    //
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response);
            var data=response.users;
            var trStr = '';
            data.forEach(function (value, index) {
                console.log(index, value)
                trStr += "<tr>";
                trStr += "<td>" + value.name + "</td>";
                trStr += "<td>" + value.age+ "</td>";
                trStr += "<td>" + value.qualification + "</td>";
                trStr += "<td>" + value.hobbies + "</td>";
                trStr+="<td> "+value.address.street+ ""+value.address.city+"</td<>";
                trStr += "</tr>";
            })
            document.getElementById('aj_tbody1').innerHTML = trStr;
        }
    }
}


function margearray(arr1, arr2) {
    
}
    
// number is palindriom
 function palindrom(num)
 {
     var temp,rem,final=0;
     temp=num;
     while(num>0)
     {
       rem=num%10;
       num=parseInt(num/10);
       final=final*10+rem;
     }
     if(final==temp)
     {
         console.log("number is palindrom");
     }
         
     else 
      {
          console.log("number is not palindrom");
      }
      
 }


 