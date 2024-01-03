const getcolor = () => {
    const randomnumber = Math.floor(Math.random()*16777215);
    const randomcode = "#" + randomnumber.toString(16);
    console.log(randomnumber, randomcode);
    document.body.style.backgroundColor = randomcode;
    document.getElementById('btn').style.backgroundColor = randomcode;
    document.getElementById('colorcode').innerText = randomcode;
    console.log(randomnumber, randomcolor);

}
document.getElementById('btn').addEventListener(
    'click',
    getcolor
);
getcolor