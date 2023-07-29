let tableButton = document.getElementById("tables");
let mainBox = document.getElementById("main");
let table = document.createElement("div");
let tableBox = document.createElement("div");
let tableNo = document.createElement("button");
tableNo.innerText = "Tables"
let tableReverse = document.createElement("button");
tableReverse.innerText = "Reverse";
let answer = document.createElement("button");
answer.innerText = "Anwers";

let min = 2, max = 9, min1 = 12, max2 = 19;
let one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelwe, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, ninteen, twenty;

let tableStructureMultiple;
let list1 = document.createElement("li"), list2 = document.createElement("li"), list3 = document.createElement("li"), list4 = document.createElement("li"), list5 = document.createElement("li");

var conditional;



let randomNumber = function () {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber2 = function () {
    return Math.floor(Math.random() * (max2 - min1 + 1)) + min1;
}

var tableStructure = function () {

    mainBox.innerHTML = "";
    table.innerHTML = null;
    table.append(tableBox, tableNo, tableReverse, answer);
    mainBox.append(table);
}

let answerAll = () => {
    if (conditional) {
        list1.innerText = list1.innerText + " " + one * two;
        list2.innerText = list2.innerText + " " + three * four;
        list3.innerText = list3.innerText + " " + five * six;
        list4.innerText = list4.innerText + " " + seven * eight;
        list5.innerText = list5.innerText + " " + nine * ten;
        // conditional = false;
        // console.log("uio")
    }
    else if(conditional == false) {
        rList1.innerText = rList1.innerText + " " + one + " x " + two;
        rList2.innerText = rList2.innerText + " " + three + " x " + four;
        rList3.innerText = rList3.innerText + " " + five + " x " + six;
        rList4.innerText = rList4.innerText + " " + seven + " x " + eight;
        rList5.innerText = rList5.innerText + " " + nine + " x " + ten;
        // reverseUl.append(rList1, rList2, rList3, rList4, rList5);
        // console.log("words")
    }
}
answer.addEventListener("click", answerAll)

let tableOnly = () => {
    tableStructure();
    conditional = true;
    list1.innerText = null;
    list2.innerText = null;
    list3.innerText = null;
    list4.innerText = null;
    list5.innerText = null;

    one = randomNumber2();
    two = randomNumber();
    three = randomNumber2();
    four = randomNumber();
    five = randomNumber2();
    six = randomNumber();
    seven = randomNumber2();
    eight = randomNumber();
    nine = randomNumber2();
    ten = randomNumber();

    list1.innerText = one + " x " + two + " =";
    list2.innerText = three + " x " + four + " =";
    list3.innerText = five + " x " + six + " =";
    list4.innerText = seven + " x " + eight + " =";
    list5.innerText = nine + " x " + ten + " =";

    tableStructureMultiple = document.createElement("ul");
    tableStructureMultiple.append(list1, list2, list3, list4, list5)
    tableBox.append(tableStructureMultiple)

}

tableButton.addEventListener("click", tableStructure);
tableNo.addEventListener("click", tableOnly)

// Everthing for reverse button
let reverseUl = document.createElement("ul");
let rList1 = document.createElement("li"), rList2 = document.createElement("li"), rList3 = document.createElement("li"), rList4 = document.createElement("li"), rList5 = document.createElement("li");

let reverseTable = () => {
    conditional = false;
    mainBox.innerHTML = null;
    table.innerHTML = null;

    one = randomNumber2();
    two = randomNumber();
    three = randomNumber2();
    four = randomNumber();
    five = randomNumber2();
    six = randomNumber();
    seven = randomNumber2();
    eight = randomNumber();
    nine = randomNumber2();
    ten = randomNumber();

    rList1.innerText = one * two + " = ";
    rList2.innerText = three * four + " = ";
    rList3.innerText = five * six + " = ";
    rList4.innerText = seven * eight + " = ";
    rList5.innerText = nine * ten + " = ";

    reverseUl.append(rList1, rList2, rList3, rList4, rList5);



    table.append(reverseUl, tableNo, tableReverse, answer);
    mainBox.append(table);



}



tableReverse.addEventListener("click", reverseTable)