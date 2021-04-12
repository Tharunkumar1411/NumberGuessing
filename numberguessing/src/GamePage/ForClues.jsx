import React, { useState } from 'react';
import {useContext,useEffect} from 'react';



const Clue = (props) => {
    
    const [clues,setClues] = useState({clueOne:"",clueTwo:"",clueThree:"",clueFour:"",clueFive:""});

    useEffect(() =>{
       
        const sysNum = props.number;
        const guessNum = props.guess;


        

            if(sysNum > guessNum){
                var less = "lesser";
                setClues({clueOne:less});
        
            }else{
                var high = "higher";
                setClues({clueOne:high});
                
            }
    
            if(sysNum%2 === 0){
                var even = "even";
                setClues({clueTwo:even});
            }else{
                var odd = "odd";
                setClues({clueTwo:odd});
            }
        
            var MoreTen = sysNum + 10;
            var lessTen = sysNum - 10;
    
            setClues({clueThree:`between ${lessTen} and ${MoreTen}`});
        
        
    },[])
    
    

    return(
        <div>
            
            
        </div>
    )
}

export default Clue;