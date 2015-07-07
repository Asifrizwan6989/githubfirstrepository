/**
 * Created by asif on 07-07-2015.
 */
var app=angular.module('asif',['fisa','first','second']);
app.controller('detailcontroller',function(){
    this.dev=function(val){
        alert(val);
 console.log(val);
    }
});