import React from "react"
import "./css/game.css"

class Game extends React.Component {

    componentDidMount(){
        const score = document.querySelector(".game-score"),
            start = document.querySelector(".game-start"),
            gameArea = document.querySelector(".game-box"),
            car = document.createElement("div");
        car.classList.add("car")
        start.addEventListener("click", startGame);
        document.addEventListener('keydown', startRun)
        document.addEventListener('keyup', stopRun)

        const directionCar = {
            ArrowUp: false,
            ArrowDown: false,
            ArrowRight: false,
            ArrowLeft: false
        }
        const setting = {
            start: false,
            score: 0,
            speed: 10,
            traffic:1
        }
        function startGame() {
            start.classList.add("hide")
            gameArea.innerHTML="";
            car.style.left="125px";
            car.style.top="auto";
            for (let i=0;i<getQuantityElement(50);i++){
                const line = document.createElement("div")
                line.classList.add('game-line')
                line.style.top = (i*75)+"px"
                line.y =i*100
                gameArea.appendChild(line)
            }
            for (let i=0;i<getQuantityElement(100*setting.traffic);i++) {
                const enemy = document.createElement("div");
                enemy.classList.add("enemy");
                enemy.y=-100 *setting.traffic*(i+1);
                enemy.style.top = enemy.y + "px"
                enemy.style.left = (Math.random()*(gameArea.offsetWidth-70)) + "px"
                // enemy.style.background=`transparent url(\"./img/enemy.png\") center / cover`
                gameArea.appendChild(enemy);
            }
            setting.score= 0;
            setting.start = true;
            gameArea.appendChild(car)
            setting.x=car.offsetLeft
            setting.y=car.offsetTop
            requestAnimationFrame(playGame)
        }

        function startRun(event) {
            directionCar[event.key] = true

        }

        function stopRun(event) {
            directionCar[event.key] = false
        }

        function playGame() {

            if (setting.start === true) {
                setting.score+=setting.speed
                score.innerHTML = "Score<br>"+setting.score
                score.style.display ="block"
                moveRoad()
                moveEnemy()
                if(directionCar.ArrowLeft===true && setting.x>0){
                    setting.x = setting.x -setting.speed
                }
                if(directionCar.ArrowRight===true && setting.x<(gameArea.offsetWidth-car.offsetWidth)){
                    setting.x = setting.x + setting.speed
                }
                if(directionCar.ArrowUp===true && setting.y>0){
                    setting.y = setting.y - setting.speed
                }
                if(directionCar.ArrowDown===true && setting.y<(gameArea.offsetHeight-car.offsetHeight)){
                    setting.y = setting.y + setting.speed
                }
                car.style.left=setting.x+"px"
                car.style.top=setting.y+"px"
                requestAnimationFrame(playGame)
            }
        }
        function moveRoad() {
            let lines = document.querySelectorAll('.game-line')
            lines.forEach((line)=>{
                line.y =line.y+setting.speed
                line.style.top=line.y +"px"
                if(line.y>document.documentElement.clientHeight) {
                    line.y=-100
                }
            })
        }
        function moveEnemy() {
            let enemy = document.querySelectorAll(".enemy")
            enemy.forEach((enemy)=>{
                let carRect = car.getBoundingClientRect()
                let enemyRect = enemy.getBoundingClientRect()
                if (carRect.top <= enemyRect.bottom &&
                    carRect.right>=enemyRect.left &&
                    carRect.left<=enemyRect.right&&
                    carRect.bottom>=enemyRect.top) {
                    setting.start=false
                    start.classList.remove("hide")
                    score.style.display="none"
                }

                enemy.y+=setting.speed/2
                enemy.style.top =enemy.y +"px"
                if(enemy.y>=document.documentElement.clientHeight){
                    enemy.y=-100*setting.traffic
                    enemy.style.left = (Math.random()*(gameArea.offsetWidth-50)) + "px"
                }
            })

        }
        function getQuantityElement(heightElement) {
            return document.documentElement.clientHeight / heightElement +1
        }

    }
    render() {
        return (
            <div className="gameContainer">
                <div className="game">
                    <div className="game-start">
                        <p >Старт</p>
                    </div>
                    <div className="game-score">
                    </div>
                    <div className="game-box">
                    </div>
                </div>
            </div>

        )
    }




}
export default Game