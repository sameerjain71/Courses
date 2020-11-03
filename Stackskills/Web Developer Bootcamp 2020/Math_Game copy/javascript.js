var playing = false;
var score;
var action ;
var timeRemaining ;
var correctAnswer ;

// window.alert("hello")

document.getElementById("startreset").onclick=function()
{
    if (playing == true)
    {
        location.reload() ; //reload page
    }
    else
    {
        playing = true ;
        score = 0 ;
        document.getElementById("scorevalue").innerHTML = score ;
        document.getElementById("timeremaining").style.display="block" ;
        timeRemaining = 60 ;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining ;           hide("gameover") ;


        document.getElementById("startreset").innerHTML="Reset Game" ;
        startCountdown() ;
        
        generateQA() ;
    }
    
}

for (i=1;i<5;i++)
    {
        
        var theBox = "box"+i ;
        document.getElementById(theBox).onclick=function(){

            if (playing == true)
            {
                var clickedAnswer = this.innerHTML ;

                if (clickedAnswer == correctAnswer)
                {
                    score += 1;
                    document.getElementById("scorevalue").innerHTML = score ;
                    hide("wrong") ;      
                    show("correct");
                    setTimeout(function(){            
                        hide("correct")
                    }, 1000) ;
                    generateQA() ;
                }
                else{
                    hide("correct") ;      
                    show("wrong");
                    setTimeout(function(){            
                        hide("wrong")
                    }, 1000) ;

                }
            }
        }
    }


function startCountdown()
{
    
    action = setInterval(function(){
    
    timeRemaining -= 1 ;
    document.getElementById("timeremainingvalue").innerHTML = timeRemaining ;

    if (timeRemaining ==0){
        stopCountdown() ;
        show("gameover") ;
    document.getElementById("gameover").innerHTML = "<p> Game Over </p> <p> Your score is " + score + "</p>" ;
    hide("timeremainingvalue") ;
    hide("correct") ;
    hide("wrong") ;
    playing = false ;
    document.getElementById("startreset").innerHTML="Start Game" ;
    

    }
    }, 1000)
}

function stopCountdown()
{
    clearInterval(action) ;
    show("gameover") ;
}

function hide(id)
{
    document.getElementById(id).style.display = "none" ;
   
}

function show(id)
{
    document.getElementById(id).style.display = "block" ;
   
}

function generateQA()
{
    var x ;
    var y ;
    
    x = Math.round(Math.random()*9) + 1 ;
    y = Math.round(Math.random()*9) + 1 ;
    correctAnswer = x*y ;
    document.getElementById("question").innerHTML=x + "X" + y ;
    
    var correctPosition = Math.round(Math.random()*3) + 1 ;
    
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer ;
    
    var answers = [correctAnswer] ;
    for (i=1;i<5;i++)
    {
        if (i!= correctPosition)
        {
            var wrongx ;
            var wrongy ;
            var wrongAnswer ;
          
            do{
            wrongx = Math.round(Math.random()*9) + 1 ;
            wrongy = Math.round(Math.random()*9) + 1 ;
            wrongAnswer = wrongx * wrongy ;
//        } while((wrongAnswer == correctAnswer) && (answers.indexof(wrongAnswer)<0))
        } while(answers.indexof(wrongAnswer)>-1)
            
            document.getElementById("box"+i).innerHTML = wrongAnswer ;
            answers.push(wrongAnswer) ;
            
        }
    }
    
}

