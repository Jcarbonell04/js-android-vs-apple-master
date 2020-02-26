  
//Android Vs Apple Example

//When Button is Clicked
document.getElementById('androidBtn').addEventListener('click', setAndroid);
document.getElementById('appleBtn').addEventListener('click', setApple);


//Event Functions
function setAndroid() {
    //change main photo
    document.getElementById('img1').src = "images/android-logo.jpg";

    //change link name
    document.getElementById('link1').innerHTML = 'Android Home';

    //change background color
    document.body.style.backgroundColor = '#a4c93b';

    //update link
    document.getElementById('link1').href = 'https://www.android.com/';

    //change body background
    document.body.style.color = '#a4c93b';

    document.getElementById('appleBtn').classList.remove('apple-btn');

    document.getElementById('androidBtn').classList.add('android-btn')
}

//Event Functions
function setApple() {
    //change main photo
    document.getElementById('img1').src = "images/apple-logo.jpg";

    //change link name
    document.getElementById('link1').innerHTML = 'Apple Home';

    //change background color
    document.body.style.backgroundColor = '#b6bcca';

    //update link
    document.getElementById('link1').href = 'https://www.apple.com/';

    //change body background
    document.body.style.color = '#b6bcca';

    document.getElementById('appleBtn').classList.add('apple-btn');

    document.getElementById('androidBtn').classList.remove('android-btn')
}
