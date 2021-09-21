var question_turn="player1";
var anwser_turn="player2";
function check(){
    get_anwser=document.getElementById("input_check_box").value;
    if(anwser_turn=="player1")
    {
        update_player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=update_player1_score;
    }
    else
    {
        update_player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=update_player2_score;
    }
    if(question_turn=="player1")
    
}