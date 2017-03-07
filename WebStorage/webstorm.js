/**
 * Created by bjming on 17-3-7.
 */
// sessionStorage 方法
var data={key:"key",data:"info"}
function save(data) {
    sessionStorage.setItem(data.key, data.data);
}
function remove(data){
    sessionStorage.removeItem(data.key);
}
function clear() {
    sessionStorage.clear();
}
function getList(){
    if(sessionStorage.length>0){
        for(var i=0;i<sessionStorage.length;i++){
            console.log(sessionStorage.key(i)+sessionStorage.getItem(sessionStorage.key(i)));
        }
    }else {
        console.log("长度为0");
    }
}

function _save(data){
    localStorage.setItem(data.key, data.data);
}
function _remove(data) {
    localStorage.removeItem(data.key);
}
function _clear(data) {
    localStorage.clear();
}
function  _getList() {
    if(localStorage.length>0){
        for( var i=0; i<localStorage.length; i++){
            console.log(localStorage.key(i)+localStorage.getItem(localStorage.key(i)));
        }
    }else {
        console.log("长度为0");
    }

}

function clearAll() {
    sessionStorage.clear();
    localStorage.clear();
}
