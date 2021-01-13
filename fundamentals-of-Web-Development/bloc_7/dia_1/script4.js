let counter = 0;


let clickSun = document.getElementById('bnt-click');
clickSun.addEventListener('click', clicacario =>{
    console.log('click')
    counter += 1;
    

   document.getElementById('click-counter').innerText = counter
   
})

