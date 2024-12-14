const total=10;
let correct=0;
let points=0

let check=document.getElementById("Butt")

let cor1=document.getElementById("bioware")
let cor2=document.getElementById("Leviathans")
let cor3=document.getElementById("Reap")
let cor4=document.getElementById("AI")
let cor5=document.getElementById("Javik")
let cor6=document.getElementById("2183")
let cor7=document.getElementById("50ago")
let cor8=document.getElementById("False")
let cor9=document.getElementById("Truer")
let cor10=document.getElementById("Truest")



if(check!=null){
check.addEventListener("click",()=>{
    if(cor1.checked){
        alert("Correct Bioware is he creater of Mass Effect")
        correct++
        points+=5
    }

    else{
        alert("Incorrect the correct answer is Bioware.")
    }
})

document.getElementById("Butt").addEventListener("click",()=>{
    if (cor2.checked){
        alert("Correct The leviathans built the ai to prevent organic-Synthetic conflict billions of years ago. Their AI turned against them.  ")
        correct++
        points+=10
    }

    else{
        alert("Wrong!The leviathans built the ai to prevent organic-Synthetic conflict billions of years ago. Their AI turned against them.  ")
        points=points-=2
}},


check.addEventListener("click",()=>{
    if(cor3.checked){
        alert("Correct The Reapers built the Citadel to facilitate galacic harvest")
        correct++
        points+=8
    }

    else{
        alert("NOPE The Reapers built the Citadel to facilitate galacic harvest")
        points-=3
    }
}))

check.addEventListener("click",()=>{
    if (cor4.checked){
        alert("Yes the Reapers want to preserve organic races from being annilated by ai... Pretty Ironic")
        correct++
        points+=8
    }

    else{
        alert("NOOO  the Reapers want to preserve organic races from being annilated by ai... Pretty Ironic")
        points-=8
    }
})

check.addEventListener("click",()=>{
    if(cor5.checked){
        alert("YES Javik is the last voice of the Protheans")
        correct++
        points+=8
    }

    else{
        alert("NOOOOOOOOOO Javik is the last voice of the Protheans")
        correct++
        points-=9
        
    }
})

check.addEventListener("click",()=>{
    if(cor6.checked){
        alert("Yes mass effect 1 happens in 2183. You have to stop Sovereign before it activates the citadel relay")
        correct++
        points+=15
    }

    else{
        alert("NO  mass effect 1 happens in 2183. You have to stop Sovereign before it activates the citadel relay")
        points-=5
    }
})

check.addEventListener("click",()=>{
    if(cor7.checked){
        alert("YES The Reapers extingused the Protheans 50,000 ago")
        correct++
        points+=6
    }

    else{
        alert("NO The Proheans died 50,000 yeara ago")
        points-=3
    }
})

check.addEventListener("click",()=>{
    if(cor8.checked){
        alert("FALSE That role goes to Harbinger")
        correct++
        points+=8
    }

    else{
        alert("NOOO FALSE that role goes to Harbinger")
        points-=2
    }
})

check.addEventListener("click",()=>{
    if(cor9.checked){
        alert("YES She is from GooseBay")
        correct++
        points+=20
    }

    else{
        alert("Surprisingly she is actually from Goose Bay ")
    
    }
})

check.addEventListener("click",()=>{
    if(cor10.checked){
        alert("YES just parts of dead reapers can indocrinate. This has been seen on a reaper destroyed over 37 million years ago")
        correct++
        points+=12
    }

    else{
        alert("Incorrect")
        points-=10
    
    }
})
}

    let percent=(correct/total)*100
    document.getElementById("percent").textContent=percent
    localStorage.setItem("divides",correct)

    window.localStorage.setItem("Score",percent)
    document.getElementById("percent").textContent=localStorage.getItem("Score")
