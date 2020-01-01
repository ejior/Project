
// ***進入頁面使用者輸入姓名框
var userbox = document.getElementsByClassName('userbox');
var username ='';
function enterUserName() {
    
    var name = prompt('請輸入您的大名');
    if (name != null && name != '') {
        username = name;
        console.log(name);
    }
}
enterUserName();
userbox[0].innerHTML = username;


// ***顯示今天日期
var year = document.getElementsByClassName('year');
var month = document.getElementsByClassName('month');
var days = document.getElementsByClassName('days');
var weekday = document.getElementsByClassName('weekday');
var day = new Date();
var date_year = day.getFullYear();
var date_month = day.getMonth();
var date_days = day.getDate();
var getweekday = day.getDay();
// console.log(date_day);
var getweekdayarr = new Array();
    getweekdayarr[1] = '一';
    getweekdayarr[2] = '二';
    getweekdayarr[3] = '三';
    getweekdayarr[4] = '四';
    getweekdayarr[5] = '五';
    getweekdayarr[6] = '六';
    getweekdayarr[0] = '日';
year[0].innerHTML = date_year;
month[0].innerHTML = date_month + 1;
days[0].innerHTML = date_days;
weekday[0].innerHTML = getweekdayarr[getweekday];
// console.log(weekday);

// ***點擊新增代辦事項


var olId = document.getElementById('olId');
var dbtn = document.getElementsByClassName('deletebtn');

function addItem(){

    var itemboxV = document.getElementById('itembox').value;
    var itembox = document.getElementById('itembox');
    // console.log(itemboxV);
    
    if(itemboxV.length > 0){
        itembox.value = '';
    }else{return} //無輸入文字，無新增

    var li_div = document.createElement('li');
    var span_div = document.createElement('span');
    span_div.className = 'deletebtn'
    li_div.textContent = itemboxV;
    li_div.className = 'liItem'
    olId.appendChild(li_div);
    li_div.appendChild(span_div);
    span_div.textContent = 'delete';

    span_div.onclick = function () {
        olId.removeChild(li_div);
    }
    

}

// ****清除所有代辦事項
var li = document.getElementsByClassName('liItem');

function clearAll(){

    if(li.length > 0){
    var clear = confirm('確定全部清除?');
    if (clear == true) {
        olId.innerHTML = '';
        itembox.value = ''
    } else { return }
    }
}