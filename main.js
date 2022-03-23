let button = document.getElementById("start_button");
let ResetButton = document.getElementById("reset_button");
let ChoiceButton = document.getElementById("choice");

let NumberBar = document.querySelector(".Number");
let UserInput = document.getElementById("User-Input");
let warningZone = document.querySelector(".warning");
let answer = ''
let UserAnswer = ''

let Chance = 10
let GameOver = false

button.addEventListener("click", RandomNumber)
ChoiceButton.addEventListener("click", UserData)
ResetButton.addEventListener("click", reset)
UserInput.addEventListener("focus", function(){
    UserInput.value = "";
})

function RandomNumber() {
    NumberBar.textContent = "아래 빈칸에 3자리 숫자를 입력해주세요."
    warningZone.textContent = `남은 찬스는 ${Chance}회`
    let Random1 = Math.floor(Math.random() * 10)

    let Random2 = Math.floor(Math.random() * 10)

    if (Random1 === Random2){
        Random2 = Math.floor(Math.random() * 10)
        Random1 === Random2
        return;
    }

    let Random3 = Math.floor(Math.random() * 10)

    if (Random1 === Random3 || Random2 === Random3) {
        Random3 = Math.floor(Math.random() * 10)
        Random1 === Random3 || Random2 === Random3
        return; 
    }
    console.log(`정답 : ${Random1}  ${Random2}  ${Random3}`)
    answer = `${Random1}${Random2}${Random3}`
  
}

function UserData() {
    let uservalue = UserInput.value;
    
        if (uservalue == "") {
            alert("숫자를 입력하세요.")
            return;
        }

        Chance --;
        warningZone.textContent = `남은 찬스는 ${Chance}회`
        if (Chance < 1) {
            GameOver = true;
        }

        if (GameOver == true) {
            button.disabled = true;
            ChoiceButton.disabled = true;
            NumberBar.textContent = "리셋 버튼을 눌러주세요."
        }

        if (uservalue == answer){
            alert("정답입니다 !!!!!!!!!!!!!!!")
            button.disabled = true;
            ChoiceButton.disabled = true;
        }else {

            let StrikeZone = 0
            let BallZone = 0
            let OutZone = 0

                //첫번째 자릿수
                FirstPlace0 = (uservalue[0] == answer[0])
                FirstPlace1 = (uservalue[0] == answer[1])
                FirstPlace2 = (uservalue[0] == answer[2])

                if(FirstPlace0 == true){
                    StrikeZone += 1
                }else if(FirstPlace1 == true){
                    BallZone += 1
                }else if(FirstPlace2 == true){
                    BallZone += 1
                }else {
                    OutZone += 1
                }
                //두번째 자릿수
                SecondPlace0 = (uservalue[1] == answer[0])
                SecondPlace1 = (uservalue[1] == answer[1])
                SecondPlace2 = (uservalue[1] == answer[2])

                if(SecondPlace0 == true){
                    BallZone += 1
                }else if(SecondPlace1 == true){
                    StrikeZone += 1
                }else if(SecondPlace2 == true){
                    BallZone += 1
                }else {
                    OutZone += 1
                }
                //세번째 자릿수
                ThirdPlace0 = (uservalue[2] == answer[0])
                ThirdPlace1 = (uservalue[2] == answer[1])
                ThirdPlace2 = (uservalue[2] == answer[2])

                if(ThirdPlace0 == true){
                    BallZone += 1
                }else if(ThirdPlace1 == true){
                    BallZone += 1
                }else if(ThirdPlace2 == true){
                    StrikeZone += 1
                }else {
                    OutZone += 1
                }
                NumberBar.textContent = `${StrikeZone}S  ${BallZone}B  아웃${OutZone}개`
            }
    
}

function reset() {
    RandomNumber()
    Chance = 10
    GameOver = false
    button.disabled = false;
    ChoiceButton.disabled = false;
    NumberBar.textContent = "아래 빈칸에 3자리 숫자를 입력해주세요."
    warningZone.textContent = `남은 찬스는 ${Chance}회`
}


function handleOnInput(el, maxlength) {
    if(el.value.length > maxlength)  {
      el.value 
        = el.value.substr(0, maxlength);
    }
  }