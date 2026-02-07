function goPage2(){
    document.querySelector(".page1").classList.remove("active");
    document.querySelector(".page2").classList.add("active");
}

/* NO BUTTON MOVE */
const noBtn=document.getElementById("noBtn");
noBtn.addEventListener("mouseenter",moveNo);
noBtn.addEventListener("mousemove",moveNo);

function moveNo(){
    const box=document.querySelector(".buttons");
    const maxX=box.clientWidth-120;
    const maxY=box.clientHeight-60;
    const x=Math.random()*maxX;
    const y=Math.random()*maxY;
    noBtn.style.transform=`translate(${x}px,${y}px)`;
}

/* YES CLICK */
document.getElementById("yesBtn").onclick=()=>{
    document.querySelector(".page2").classList.remove("active");
    document.getElementById("overlay").classList.add("show");
    typeLetter();
}

/* CLOSE */
function closeLetter(){
    document.getElementById("overlay").classList.remove("show");
    document.querySelector(".page2").classList.add("active");
}

/* TYPE LETTER */
const text=`My Cuore Mio 🐿️❤️,

Today marks exactly one year since we started talking.  
Back then mane evo thought pan nato ke hu tari sathe future plan karis  
but today I can’t imagine a future without you mara badha j future plan ma have USS hoy 🧿🧿🧿  

So much has happened in this one year that made me realize  
you were exactly what I needed and hu bau grateful chhu  
to have you as my forever partner and I'm so excited  
for the memories we yet to make 😘😘😘  

We both changed ourselves since we first met because  
aapde bau j alag hata and still we always adjusted  
to stay in the same frame and ena lidhe  
aapdo bond vadhare strong banyo chhe 🤗🤗🤗  

I know challenges will come and jaghda pan thase
but I promise to be there for you through every
stage of OUR life as I know I’ll always need you
and want you to by my side.  

Today I may not have much tane special feel karava  
ke kaik aapva but I give you my words:  

I WILL NEVER LEAVE YOU  
AND OUR RELATIONSHIP WILL END BY  
MARRYING EACHOTHER 🐿️🥰💗❣️🧿💫♥️✨💝🎀💓😘💖🤗💞🤌🏻💘 
`;

function typeLetter(){
    const el=document.getElementById("letter");
    el.innerHTML="";
    let i=0;
    const timer=setInterval(()=>{
        if(i<text.length){
            el.innerHTML+=text.charAt(i);
            i++;
        }else{
            clearInterval(timer);
        }
    },20);
}
