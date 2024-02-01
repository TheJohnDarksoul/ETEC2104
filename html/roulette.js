function isEven(val)
{
    if (val % 2 == 0)
    {
        return true;
    }

    return false;
}

function spinWheel()
{
    let wheel = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, "00", 
    15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];

    let index = Math.floor(Math.random() * 38);

    var table = document.getElementById("values");

    var row = table.insertRow(-1);

    var numberCell = row.insertCell(0);
    numberCell.innerHTML = wheel[index];

    var colorCell = row.insertCell(1);

    if (isEven(index))
    {
        colorCell.innerHTML = "Red";
        colorCell.style.backgroundColor = "red";
    }
    else
    {
        colorCell.innerHTML = "Black";
        colorCell.style.backgroundColor = "black";
        colorCell.style.color = "white";
    }

    var stateCell = row.insertCell(2);

    if (wheel[index] === 0 || !isEven(wheel[index]))
    {
        stateCell.innerHTML = "Odd";
        stateCell.style.backgroundColor = "orange";
    }
    else
    {
        stateCell.innerHTML = "Even";
        stateCell.style.backgroundColor = "blue";
    }

    var successCell = row.insertCell(3);

    if (wheel[index] === "00" || wheel[index] >= 19)
    {
        successCell.innerHTML = "Passed";
        successCell.style.backgroundColor = "lime";
    }
    else
    {
        successCell.innerHTML = "Failed";
        successCell.style.backgroundColor = "magenta";
    }


    let container = document.getElementById("roulette");
    container.scrollTop = 2147483647;
}