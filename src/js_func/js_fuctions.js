import React, { useState, useEffect, useRef } from "react";

export function CountDownTimer(dt,sdt1)
{
    var end = new Date(dt);
    var sdt= new Date(sdt1);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    //var timeresult;

    // function showRemaining() {
    var now = new Date();
    var distance = end - now;
    var full_distance = end - sdt;
    var past_distance = now - sdt;
    var expiredstr='EXPIRED!';

    if (distance < 0) {
        //clearInterval(timer);
        return expiredstr;
    }

    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
    //지나온 일수 x 100 / 전체일수
    var days_per = (((past_distance/(24*60*60*1000))*100)/(full_distance/(24*60*60*1000)));

    

    // var timeresult= days + '일 ' + hours + '시간 ' + minutes + '분 ' + seconds + '초' + ' / ' + days_per.toFixed(3)+'%';
    var timeresult1= days + '일 ' + hours + '시간 ' + minutes + '분 ' + seconds + '초';
    var timeresult2= days_per.toFixed(3)+'%';
    var timeresult3= days + '일 ' + hours + '시간 ' + minutes + '분 ' + seconds + '초 ' + days_per.toFixed(3)+'%';
    // return timeresult;
    return {
        timeresult1: timeresult1,
        timeresult2: timeresult2,
        timeresult3: timeresult3
    };


}


//CountDownTimer('03/02/2022 06:00 PM','06/01/2020 09:00 AM')+'남음'
//소집해제일 재확인 211219
//CountDownTimer('02/28/2022 06:00 PM','06/01/2020 09:00 AM')+'남음'


export function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}
