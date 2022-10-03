//contador inicial
var count = 0;

const valorAtual = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        
        if(styles.contains('subtrai')){
            count--;
        }

        if(styles.contains('soma')){
            count++;
        }

        if(styles.contains('reset')){
            count = 0;
        }

        if(count > 0){
            changeColor("#34A853");
        }
        
        if(count < 0){
            changeColor("#EA4335");
        }

        
        if(count === 0){
            changeColor("#333");
        }


        valorAtual.textContent = count;

    })
})


function changeColor(color){
    valorAtual.style.color = color;
}