var str = prompt("What animal is the superhero most similar to?", "");
var reg = RegExp(/^[a-zA-z]{1,20}$/)

var str2 = prompt("Is the superhero male or female? Leave blank if unknown or other.", "");
var reg2 = RegExp(/^male|female$/)

var str3 = prompt("How old is the superhero", "");
var reg3 = RegExp(/^[0-9]{1,5}$/)
if (reg.test(str) && reg2.test(str2) && reg3.test(str3)) {
    if (str2 === 'male' && str3 < 18) {
        alert("The superhero name is" + " : " + str + "-" + "boy")
    } else if (str2 === 'male' && str3 >= 18) {
        alert("The superhero name is" + " : " + str + "-" + "man")
    } else if (str2 === 'female' && str3 < 18) {
        alert("The superhero name is" + " : " + str + "-" + "girl")
    } else if (str2 === 'female' && str3 >= 18) {
        alert("The superhero name is" + " : " + str + "-" + "woman")
    } else if (str2 === '' && str3 < 18) {
        alert("The superhero name is" + " : " + str + "-" + "kid")
    } else if (str2 === '' && str3 >= 18) {
        alert("The superhero name is" + " : " + str + "-" + "hero")
    }
}




