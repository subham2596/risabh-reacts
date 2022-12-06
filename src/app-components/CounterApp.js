import React,{useState} from 'react'
import "./counterApp.css"

const CounterApp = () => {
    const [counter,setCounter] = useState(0)

    let colorArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    let color = '#';
    let value = document.getElementById('value');
    let container = document.getElementById('container');

    function increamentHandler(){
        for(let i=0;i<6;i++){
            let random = Math.floor(Math.random()*16)
            color = color + colorArr[random];
            console.log(color)
        }

        if(typeof(counter)=='string'){
            value.classList.remove('negative');
            setCounter(0);
            container.style.boxShadow = 'inset 0px 0px 20px' + color
        }
        else{
            setCounter(counter+1)
            value.style.color = color
            container.style.boxShadow = 'inset 0px 0px 20px' + color
        }
    }


    function decreamentHandler(){
        for(let i=0;i<6;i++){
            let random = Math.floor(Math.random()*16)
            color = color + colorArr[random];
            console.log(color)
        }

        // if (counter<=0){
        //     setCounter("Sorry, value can't be (-)ve.");
        //     value.classList.add('negative');
        //     container.style.boxShadow = 'inset 0px 0px 20px rgba(255, 0, 0, 1)'
        // }
        // else{
        //     setCounter(counter-1)
        //     value.style.color = color
        //     container.style.boxShadow = ' inset 0px 0px 20px' + color
        // }

        if (counter>0){
            setCounter(counter-1)
            value.style.color = color
            container.style.boxShadow = ' inset 0px 0px 20px' + color
        }
        // else if(counter==0){
        //     setCounter("Sorry, value can't be (-)ve.");
        //     value.classList.add('negative');
        //     container.style.boxShadow = 'inset 0px 0px 20px rgba(255, 0, 0, 1)'
        // }  // using else if - trying to remove the mistake - bbut not working
        else{
            setCounter("Sorry, value can't be (-)ve.");
            value.classList.add('negative');
            container.style.boxShadow = 'inset 0px 0px 20px rgba(255, 0, 0, 1)'
        }
    }


    function resetHandler(){

        if(document.getElementById('value').classList.contains('negative')){
            document.getElementById('value').classList.remove('negative');
        }
        value.style.color = 'rgb(72, 2, 138)';
        setCounter(0);
        container.style.boxShadow = 'inset 0px 0px 20px rgba(61, 1, 117, 1)'
    }
    
  return (
    <React.Fragment>

        <div className="container" id='container'>
            <h1>Basic Counter App</h1>

            <h2 id='value'>{counter}</h2>
            <div>
                <button className="btn" onClick={increamentHandler}>Increament</button>
                <button className="btn" onClick={decreamentHandler}>Decreament</button>
            </div>
            <button className="btn" onClick={resetHandler}>Reset</button>

        </div>

    </React.Fragment>
  )
}

export default CounterApp;