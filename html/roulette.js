let wheel = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, "00", 
    15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];

let index = Math.floor(Math.random() * 38);

let txt = "" + wheel[index];

if (isEven(index))
{
    txt = txt + ", " + "Red";
}
else
{
    txt = txt + ", " + "Black";
}

if (wheel[index] === 0 || !isEven(wheel[index]))
{
    txt = txt + ", " + "Odd";
}
else 
{
    txt = txt + ", " + "Even";
}

if (wheel[index] === "00" || wheel[index] >= 19)
{
    txt = txt + ", " + "Passed";
}
else
{
    txt = txt + ", " + "Failed";
}

console.log(txt);

function isEven(val)
{
    if (val % 2 == 0)
    {
        return true;
    }

    return false;
}