var counter1 = 0;

var likePhoto = likePhoto(document.getElementById("likeCount1").innerHTML = counter1, $("#button2").on("click", { buttonNumber : 2 }, increaseLikes));
console.log (counter1);

var user = {

    name: 'Jaden',
    name_last: 'Panaro',
    followers: ('Bobby', 'Dwayne', 'Crococcocooc', 'Beans', 'Tony'),
    profile_pic: 'jcshd'

}

setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
 setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
 setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;}, 3000);
 setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 3000);
