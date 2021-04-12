import React, { useState } from 'react';
import {useContext,useEffect} from 'react';



const Clue = (props) => {
    
    const [clues,setClues] = useState({clueOne:"",clueTwo:"",clueThree:"",clueFour:"",clueFive:""});

    useEffect(() =>{
       
        const sysNum = props.number;
        const guessNum = props.guess;

        function higherLesser() {
            if(sysNum > guessNum){
                var less = "lesser";
                setClues({clueOne:less});
        
            }else{
                var high = "higher";
                setClues({clueOne:high});
                
            }
            

        }
        higherLesser();

    
        function oddEven() {
            if(sysNum%2 === 0){
                var even = "even";
                setClues({clueTwo:even});
            }else{
                var odd = "odd";
                setClues({clueTwo:odd});
            }
            
        }
        oddEven();
        
        function lessMore() {
            var MoreTen = sysNum + 10;
            var lessTen = sysNum - 10;
    
            setClues({clueThree:`between ${lessTen} and ${MoreTen}`});
    
        }

    
        // higherLesser();

    
        // function SpecialNumber() {
    
        // }
       
    },[])
    
    

    return(
        <div>
            
            
        </div>
    )
}

export default Clue;