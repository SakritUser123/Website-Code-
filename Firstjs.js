

myDog=5
myDog=myDog*2
alert(myDog)
let pets=["dog","cat","hippo"]
alert(pets[0])
let useranimal=prompt("what is your favorite animal?")
alert("Wow, your favorite animal is a" + " " + useranimal+"!")

alert("Now,you will take a form to test your knowledge on animals!")

    var form=document.getElementById("input_info1").value;
    var secform=document.getElementById("input_info2").value;

function giver () {
    return form;
}
function secGiver (){
    return secform;
}

alert("Your name is"+ form);
alert("Your age is"+ secform);