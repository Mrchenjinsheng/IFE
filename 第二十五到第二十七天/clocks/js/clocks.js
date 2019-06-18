window.onload = function() {
    let time = document.querySelector('#time')
    // 月日时分秒十位不起
    function fill(obj) {
        if(obj<10){
            obj = '0' + obj
        }
        return obj
    }
    // 12小时制模式切换
    function system(obj) {
        if(obj>12){
            obj -=12
        }
        return obj
    }
    // 第一种时钟模式
    
    function clocks1() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let week = date.getDay()
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds(); 
        let weekDay = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
        time.innerHTML = year + '年 ' + fill(month) + '月 ' + fill(day) + '日 ' + weekDay[week] +' ' + fill(hours) + ':' + fill(minutes) + ':' + fill(seconds) 
        
        setInterval(clocks1,1000)
    }
    // 第一种时钟模式
    function clocks2() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let week = date.getDay()
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds(); 
        let weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        if(hours<12){
            time.innerHTML = year + '-' + fill(month) + '-' + fill(day) + ' ' + weekDay[week] +' ' + fill(hours) + ':' + fill(minutes) + ':' + fill(seconds) + 'AM'
        }else{
            time.innerHTML = year + '-' + fill(month) + '-' + fill(day) + ' ' + weekDay[week] +' ' + fill(system(hours)) + ':' + fill(minutes) + ':' + fill(seconds) + ' PM'

        }
        
        setInterval(clocks2,1000)
    }
    // 第一种时钟模式调用
    // clocks1()

    // 第二种时钟模式调用
    clocks2()
    
}