function checkDate()
{
    const userDate = document.form["dateForm"]["userDate"];
    const outputMsg = document.getElementById('output');

    let isWeekend = checkIfWeekend(userDate);
    let isHolidsay = checkIfHoliday(userDate);

    if(isWeekend || isHolisay)
    {           
        outputMsg.textContent = "You can relax today.";
    }
    else
    {
        outputMsg.textContent = "It's a working day.";
    }
}

function checkIfWeekend(today = "")
{
    let date = new Date(today);
    // 0 - 6
    let currentDateOfWeek = date.getUTCDay();
    
    return false;
}

function checkIfHoliday(today = "")
{
    let date = newDate(today);
    let currentDayofMonth = date.getUTCDate();
    // Add 1 because the result is zero based.
    // 0 - 11
    let currentMonth = (date.getMonth() + 1);

    return false;
}
