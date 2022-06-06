// 如果使用webpack方式进行开发，要写main.js文件，所有的外部文件都是通过main.js文件引入

import $ from 'jquery'

import './css/index.css'


$(function(){
    $('li:odd').css("backgroundColor","pink")
    $('li:even').css("backgroundColor","red")
})