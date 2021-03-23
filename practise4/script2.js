//Example 1
let number1=+prompt("Enter a number1:","8");
let number2=+prompt("Enter a number2:","1");
let number3=+prompt("Enter a number3:","10");
if(number1<number2 && number2<number3)
    alert(number1+','+number2+','+number3);
else if (number2<number1 && number2<number3)
    alert(number2+','+number1+','+number3);
else if(number3<number1&&number1<number2)
    alert(number3+','+number1+','+number2);
else if(number3<number2&&number2<number1)
    alert(number3+','+number2+','+number1);
else if(number2<number3&&number3<number1)
    alert(number2+','+number3+','+number1);
else if(number1===number2&&number3<number1)
    alert(number1+','+number2+','+number3);
else if(number1===number3&&number2>number1)
    alert(number1+','+number3+','+number2);
else if(number2===number3&&number1>number3)
    alert(number+','+number3+','+number1);
else
    alert(number1+','+number2+','+number3);
//Example 2
let color=prompt("Which color have traffic lights:","green");
if(color==='green')
    alert('GO');
    else if(color==='yellow')
        alert('WAIT');
    else if(color==='red')
        alert('STOP');
    else
        alert('Do what you want');
//Example 3
let color2=prompt("Which color have traffic lights:","green");
let isRoadClear=prompt("IS Road clear:","yes");
if(color2==='green'&&isRoadClear==='yes')
alert('Go');
else if(color2==='green'&&isRoadClear==='no')
    alert('Wait,unless violators will go');
else if(color2==='yellow'&&isRoadClear==='no')
    alert('Wait');
else if(color2==='yellow'&&isRoadClear==='yes')
    alert('Wait!!!');
else if(color2==='red'&&isRoadClear==='yes')
    alert('Stop and Stay!!!');
else if(color2==='red'&&isRoadClear==='no')
    alert('Stop and Stay!!!!');
else
    alert('Do what you want');