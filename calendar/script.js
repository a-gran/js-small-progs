var  theDate = new Date(); //текущая дата
var month = new Array();
var days = new Array();

month[1] = 'images/1.gif';
month[2] = 'images/2.gif';
month[3] = 'images/3.gif';
month[4] = 'images/1.gif';
month[5] = 'images/2.gif';
month[6] = 'images/3.gif';
month[7] = 'images/1.gif';
month[8] = 'images/2.gif';
month[9] = 'images/3.gif';
month[10] = 'images/1.gif';
month[11] = 'images/2.gif';
month[12] = 'images/3.gif';

days[1] = 'images/2.gif';
days[2] = 'images/3.gif';
days[3] = 'images/1.gif';
days[4] = 'images/2.gif';
days[5] = 'images/3.gif';
days[6] = 'images/1.gif';
days[7] = 'images/2.gif';
days[8] = 'images/3.gif';
days[9] = 'images/1.gif';
days[10] = 'images/2.gif';
days[11] = 'images/3.gif';
days[12] = 'images/1.gif';
days[13] = 'images/2.gif';
days[14] = 'images/3.gif';
days[15] = 'images/1.gif';
days[16] = 'images/2.gif';
days[17] = 'images/3.gif';
days[18] = 'images/1.gif';
days[19] = 'images/2.gif';
days[20] = 'images/3.gif';
days[21] = 'images/1.gif';
days[22] = 'images/2.gif';
days[23] = 'images/3.gif';
days[24] = 'images/1.gif';
days[25] = 'images/2.gif';
days[26] = 'images/3.gif';
days[27] = 'images/1.gif';
days[28] = 'images/2.gif';
days[29] = 'images/3.gif';
days[30] = 'images/1.gif';
days[31] = 'images/2.gif';

function printDate() {
    document.write('<img src = "' + month[theDate.getMonth() + 1] + '">');
    document.write('<br>');
    document.write('<img src = "' + days[theDate.getDate()] + '">');
}

printDate();