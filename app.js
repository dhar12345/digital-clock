

setInterval(function(){

    let date = new Date();
    let getHour = date.getHours ();
    let getMin = date.getMinutes ();
    let getSec = date.getSeconds ();
    
    let hour = document.querySelector(`.hour`);
    let min = document.querySelector(`.min`);
    let sec = document.querySelector(`.sec`);
    let amPm = document.querySelector(`.amPm`)
    

    if(getHour > 12){
        amPm .innerHTML = "PM"
    }else{
        amPm .innerHTML = "AM"
    }


    if(12 < getHour){
        let newHour = getHour - 12;
        hour .innerHTML = newHour ;
    }else{
        let newHour = getHour;
        hour .innerHTML = newHour ;
    }




    // if{}

        // if(newHour<10){
        //    let finalHour = `0` + newHour;
        //    hour .innerHTML = finalHour;
        // } else{
        //     hour .innerHTML = finalHour;
        // }

        

        if(getMin<10){
           let getmin = `0` + getMin;
           min .innerHTML = getmin;
        } else{
            min .innerHTML = getMin;
        }

        

        if(getSec<10){
           let getsec = `0` + getSec;
           sec .innerHTML = getsec;
        } else{
            
                sec .innerHTML = getSec;
        }

    


})