/**
 * Created by Administrator on 2017/3/7.
 */
function notice(option) {
    if(window.Notification){
        //支持
        if(window.Notification && Notification.permission !== "denied"){
            Notification.requestPermission(function (status) {
                var notification = new Notification('收到新邮件', option);//已经执行了
                notification.onshow = function() {
                    console.log('Notification shown !!!');
                    setTimeout(notification.close.bind(notification), 5000);//设置5秒延时关闭，提高用户体验
                };
                notification.onclick = function () {
                    if(confirm("是否前去查看消息")){
                        notification.close();
                        window.location='http://localhost:8080/order/org_order_mng.html';
                    }
                }
            })
        }

    }else {
        //不支持
        alert("Hi!");
    }
}
