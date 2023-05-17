
const headers = document.getElementsByClassName('menu_header');
const contents = document.getElementsByClassName('menu_content');
const plass = document.getElementsByClassName('plass');
let j = 0;


for(let i = 0; i < headers.length; i++){
    headers[i].addEventListener('click', ()=> {
        if(i == j){

            plass[i].innerHTML = plass[i].innerHTML == "+" ? "-" : "+";
            contents[i].style.display = contents[i].style.display == 'block' ? 'none' : 'block';

        } else {
            
            if(j == 0 && !(contents[j].style.display == 'none')){

                contents[j].style.display = 'none';
                plass[j].innerHTML = "+";
                plass[i].innerHTML = plass[i].innerHTML == "+" ? "-" : "+";
                contents[i].style.display = contents[i].style.display == 'block' ? 'none' : 'block';

            } else{

                if(contents[j].style.display == 'none'){

                    contents[j].style.display ='none';
                    plass[j].innerHTML = '+'
                    plass[i].innerHTML = plass[i].innerHTML == "+" ? "-" : "+";
                    contents[i].style.display = contents[i].style.display == 'block' ? 'none' : 'block';

                } else{

                    contents[j].style.display = contents[j].style.display == 'block' ? 'none' : 'block';
                    plass[j].innerHTML = plass[j].innerHTML == "+" ? "-" : "+";
                    plass[i].innerHTML = plass[i].innerHTML == "+" ? "-" : "+";
                    contents[i].style.display = contents[i].style.display == 'block' ? 'none' : 'block';

                }   
            }
            j=i;
        }
    })
    
}
