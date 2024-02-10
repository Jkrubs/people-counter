let countEl=document.getElementById("count-el")
let entry= document.getElementById("entries")
let count=0

function increment(){
    countEl.innerHTML=count ++
}

function decrement(){
    countEl.innerHTML=count --
}

function save(){
    entry.innerHTML+=countEl.innerHTML + "-"
    countEl.innerHTML=0
}