let move='';
function pickcomputermove(){
    computermove=Math.random();
    if(computermove>=0 && computermove<=1/3){
        move='rock';
    }else if(computermove>1/3 && computermove<=2/3){
        move='paper';
    }else if(computermove>2/3 && computermove<=1){
        move='scissors';
    }
}

function playgame(playermove){
    result='';
    if(playermove==='rock'){
        if(move=='rock'){
            result='tie';
        }
        else if(move=='paper'){
            result='you lose';
            
        }else if(move==scissors){
            result='you win'
        }
    }
    else if(playermove=='paper'){
        if(move=='rock'){
            result='you win';
        }
        else if(move=='paper'){
            result='tie';
            
        }else if(move==scissors){
            result='you lose'
        }
    }
    else if(playermove=='scissors'){
        if(move=='rock'){
            result='you lose';
        }
        else if(move=='paper'){
            result='you win';
            
        }else if(move==scissors){
            result='tie';
        }
        
    }
    alert(`you picked ${playermove} .computer picked ${move}.${result}`);
}