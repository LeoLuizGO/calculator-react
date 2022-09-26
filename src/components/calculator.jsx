// import React from 'react'
import React, {useState} from "react"
import './calculator.css'

let newOp = true;
let res = 0;

export default function Calculator(){
        const[num, setNum]=useState("");
        const[prevNum, setPrevNum]=useState(0);
        const[op, setOp]=useState();
        const[res1, setRes]=useState("nao subiu nd");
        

        function selectNum(e) {
            let input = e.target.value;
            // console.log(newOp)
            /* if (newOp === false){
                setNum(input)
            } else { */
            if ((num === '0')) {
                setNum(input);
                // console.log("chegou");
            } else {
                setNum(num + input);
            }
            
            // console.log(num)

        }
        function clearAll() {
            setNum('')
            setPrevNum(0)
            setOp()
            newOp = true
        }
        function del(){
            // console.log(num.slice(0,(num.length-1)))
            console.log(num.length)
            setNum(num.toString().slice(0, (num.toString().length - 1)))
            if ((num[0] === '-' && num.toString().length === 2)) {
                console.log("sexo")
                setNum('');
            }
        }
        function dot(){
            // console.log("clic")
            if ((((num.toString()).indexOf('.') === -1) && (num !== "") && (num !== "-" ))) {
                setNum(num + ".")
                // console.log("passou")
            }
        }
        function invNum(){
            if (num !== "") {
                setNum(num*-1)
            }
        }
        function operatorSelect(e){
            let op = e.target.value
            if (newOp === true){
                setOp(op)
                setPrevNum(parseFloat(num))
                setNum("")    // ele apaga toda vez que clica em operação
                newOp = false
                console.log(newOp)
            } else if (newOp === false) {
                console.log('cheguei aqui')
                setPrevNum(parseFloat(num))
                console.log("num é: " + num)
                setOp(op)
                calc()
            }
        }
        
        function newOpbool(){
            newOp = true;
            console.log("tamo chegando aq")
        }

        function calc(){
            // newOp = true
            console.log(prevNum)
            console.log(num)
            console.log(op)
            let a = 'aa'
            switch (op){
                case '+':
                    setNum((prevNum + parseFloat(num)))
                    setRes(prevNum + parseFloat(num))
                    console.log("res é: "+res+" setres: "+res1)

                    res = num
                    a = 'bb'
                    break
                case '-':
                    setNum((prevNum-parseFloat(num)))
                    setRes(prevNum - parseFloat(num))
                    console.log("res é: "+res+" setres: "+res1)

                    res = num
                    a = 'bb'
                    break
                case '÷':
                    setNum((prevNum/parseFloat(num)))
                    setRes(prevNum / parseFloat(num))
                    console.log("res é: "+res+" setres: "+res1)

                    res = num
                    a = 'bb'
                    break
                case '×':
                    setNum((prevNum * parseFloat(num)))
                    setRes(prevNum * parseFloat(num))
                    console.log("res é: "+res+" setres: "+res1)

                    res = num
                    a = 'bb'
                    break
            }
            console.log("resultado é: "+num)
            //console.log("res é: "+res+" setres: "+res1)
            console.log(a)
        }
    return (
        <div>
            <div class="display" id="display">{num}</div>
        <div class="calc-buttons">
            <button onClick={del} class="two-buttons">⌫</button>
            <button onClick={clearAll} class="cbtn">C</button>
            <button onClick={operatorSelect} value={'÷'} class="opbtn">÷</button>
            <button onClick={selectNum} value={7} class="numbtn">7</button>
            <button onClick={selectNum} value={8} class="numbtn">8</button>
            <button onClick={selectNum} value={9} class="numbtn">9</button>
            <button onClick={operatorSelect} value={'×'} class="opbtn">×</button>
            <button onClick={selectNum} value={4} class="numbtn">4</button>
            <button onClick={selectNum} value={5} class="numbtn">5</button>
            <button onClick={selectNum} value={6} class="numbtn">6</button>
            <button onClick={operatorSelect} value={'-'} class="opbtn">-</button>
            <button onClick={selectNum} value={1} class="numbtn">1</button>
            <button onClick={selectNum} value={2} class="numbtn">2</button>
            <button onClick={selectNum} value={3} class="numbtn">3</button>
            <button onClick={operatorSelect} value={'+'} class="opbtn">+</button>
            <button onClick={invNum} class="numbtn">+/-</button>
            <button onClick={selectNum} value={0} class="numbtn">0</button>
            <button onClick={dot} class="numbtn">.</button>
            <button onClick={()=> {calc(); newOpbool();}} class="equalbtn">=</button>
        </div>
        </div>
    )
}
// <button onClick={selectNum} value={'.'} class="numbtn">.</button>