var cname = [];

function submit() {
    var f = document.getElementById("first").value;
    var s = document.getElementById("second").value;
    var t = document.getElementById("third").value;
    var fo = document.getElementById("fourth").value;
    
    cname.push(f);
    cname.push(s);
    cname.push(t);
    cname.push(fo);

    document.getElementById("namec").innerHTML = cname;
    /*console.log(cname)*/
    document.getElementById("Submit").style.display = "none";
    document.getElementById("SB").style.display = "block";
}
function sort() {
    cname.sort();
    document.getElementById("namec").innerHTML = cname;
}