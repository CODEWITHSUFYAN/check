
var dl = document.getElementById('date').value;
var ml = document.getElementById('month').value;
var yl = document.getElementById('year').value;

function age(){
    var dl = document.getElementById('date').value;
    var ml = document.getElementById('month').value;
    var yl = document.getElementById('year').value;


    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month =[31,28,31,30,31,30,31,31,30,31,30,31] 
    if(dl > d2){
        d2 = d2 + month[m2-1];
        m2 = m2 -1;
    }
    if(m1>m2){
        m2 = m2 +12;
        y2 = y2 -1;
    }
    var d = d2 - dl;
    var m = m2 -ml;
    var y = y2 - yl;
    document.getElementById('age').innerHTML = 'Your age is '+y+' Years '+m+' Months '+d+' Days ';
}