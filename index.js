/*
 * @Description: 
 * @Author: Xinyue Cao
 * @Date: 2023-01-06 10:40:11
 * @LastEditTime: 2023-01-06 11:02:50
 * @LastEditors: Xinyue Cao
 */


let count = 0
let countEl = document.getElementById("count-el")
function increment() {
    console.log("INCREMENT clicked!")
    count = count+1
    countEl.innerText = count
}