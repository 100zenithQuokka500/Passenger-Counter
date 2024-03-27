let elecount=document.getElementById("count element")
let count=0
function increment(){
    count+=1
    elecount.textContent=count
}
let saveEl=document.getElementById("prev_entries")
function save(){
    let previous_entriesEl=count+" - "
    saveEl.textContent+=previous_entriesEl
    elecount.textContent=0
    count=0
}
