//challenge 1:
function Year(){
    var birthYear= prompt("Which year were you born...");
    var ageInDays=(2021-birthYear)*365;
   // console.log(ageInYear);
    var x = document.createElement('h4');
    var textAnswer= document.createTextNode("You are "+ageInDays+" days old");
    x.setAttribute("id","ageInDays");
   x.appendChild(textAnswer);
    document.getElementById('blockk').appendChild(x);
}

function reset(){
    document.getElementById('ageInDays').remove();
}