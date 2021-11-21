var $ = function(selector){
    return document.querySelector(selector)
}
var $$ = function(selector){
    return document.querySelectorAll(selector)
}
$('header .iconfont').addEventListener('click',function(e){
    console.log(e.target)
})
console.log('hello world ')