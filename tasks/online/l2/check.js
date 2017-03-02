"use strict";

let checker = document.createElement('div');
check.addEventListener('click', function(){
    result.innerHTML = ' ';
    checker.innerHTML = answer.value;
    let rez = {};
    rez.h1 = checker.getElementsByTagName('h1');
    rez.h2 = checker.getElementsByTagName('h2');
    rez.h3 = checker.getElementsByTagName('h3');
    rez.h3 = checker.getElementsByTagName('h3');
    rez.h4 = checker.getElementsByTagName('h4');
    rez.p = checker.getElementsByTagName('p');
    rez.em = checker.getElementsByTagName('em');
    rez.strong = checker.getElementsByTagName('strong');
    rez.dfn = checker.getElementsByTagName('dfn');
    rez.i = checker.getElementsByTagName('i');
    rez.b = checker.getElementsByTagName('b');
    rez.cite = checker.getElementsByTagName('cite');
    rez.hr = checker.getElementsByTagName('hr');
    
    let task = {};
    task.h1 = 3;
    task.h2 = 3 + 5;
    task.h3 = 6;
    task.p = 6+ 3 + 6;
    task.em = 0;
    task.dfn = 1 + 4;
    task.strong = 4+ 2 + 4;
    task.i = 2 + 2 + 9;
    task.b = 3 + 6;
    task.hr = 6;
    task.cite = 2;
    
    for (let tag in task){
        let tmp = document.createElement("p");
        tmp.innerHTML = tag + '= '+ rez[tag].length + '/' + task[tag]; 
        result.appendChild(tmp);
    } 
    
})

check2.addEventListener('click', function(){
    result2.innerHTML = ' ';
    checker.innerHTML = answer2.value;
    let rez = {};
    rez.h1 = checker.getElementsByTagName('h1');
    rez.h2 = checker.getElementsByTagName('h2');
    rez.h3 = checker.getElementsByTagName('h3');
    rez.h4 = checker.getElementsByTagName('h4');
    rez.p = checker.getElementsByTagName('p');
    rez.em = checker.getElementsByTagName('em');
    rez.strong = checker.getElementsByTagName('strong');
    rez.dfn = checker.getElementsByTagName('dfn');
    rez.i = checker.getElementsByTagName('i');
    rez.b = checker.getElementsByTagName('b');
    rez.cite = checker.getElementsByTagName('cite');
    rez.hr = checker.getElementsByTagName('hr');
    
    let task = {};
    task.h1 = 1;
    task.h2 = 8;
    task.h3 = 8;
    task.h4 = 1;
    task.p = 32;
    task.em = 4;
    task.dfn = 0;
    task.strong = 8;
    task.i = 7;
    task.b = 7;
    task.hr = 6;
    task.cite = 2;
    
    for (let tag in task){
        let tmp = document.createElement("p");
        tmp.innerHTML = tag + '= '+ rez[tag].length + '/' + task[tag]; 
        result2.appendChild(tmp);
    } 
    
})
