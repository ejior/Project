function disp_prompt() {
    var name = prompt("Please enter your name", "")
    if (name != null && name != "") {
        document.write("Hello " + name + "!")
    }
}

// 分隔線 

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
var data = JSON.parse(localStorage.getItem('item')) || [];
// console.log(data.item);
var olId = document.getElementById('olId');
olId.addEventListener('click', deleteItem);
updataList(data);

var items = [];
function updataList(items){

    var olId = document.getElementById('olId');
    var itemList = '';
    var len = items.list.length;
    // console.log(len);
     for(i=0;i<len;i++){
        //  console.log(items.list[i]);
         itemList += '<li  class="delbtn" data-index="' + i +'">'+ items.list[i] +  '</li>';
     }
    //  console.log(itemList);
    olId.innerHTML = itemList;
}

function addItem(){
    var itembox_value = document.getElementById('itembox').value;
    var itembox = document.getElementById('itembox');
    // console.log(itembox_value);
    // console.log(data);
    if (itembox_value.length > 0){
        itembox.value = '';
        data.list.push(itembox_value);
    }else{return} //無輸入文字，無新增

    localStorage.setItem('item',JSON.stringify(data));
    updataList(data);
}

function deleteItem(e){
    e.preventDefault();
    var index = e.target.dataset.index;
    data.list.splice(index,1);
    localStorage.setItem('item', JSON.stringify(data));
    updataList(data);
}

function clearAll(){
    var li = document.getElementsByTagName('li').length;
    if(li<1){return}

    var clear = confirm('確定全部清除?');
    if(clear == true){
        console.log(data.list);
        data.list.splice(0,data.list.length);
        localStorage.setItem('item', JSON.stringify(data));
    }else{return}
    updataList(data);
    itembox.value = ''
}
