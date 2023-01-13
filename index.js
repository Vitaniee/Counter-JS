/*
 * @Description: 
 * @Author: Xinyue Cao
 * @Date: 2023-01-06 10:40:11
 * @LastEditTime: 2023-01-13 13:49:44
 * @LastEditors: Xinyue Cao
 */

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
