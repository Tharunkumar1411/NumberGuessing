import React, { useState } from 'react';
import {useContext} from 'react';



const Clue = (props) => {
    const sysNum = props.number;
    const [clues,setClues] = useState({clueOne:"",clueTwo:"",clueThree:"",clueFour:"",clueFive:""});

    function oddEven() {
        if(sysNum%2 === 0){
            var even = "even";
            setClues({clueOne:even})
        }else{
            setClues({clueOne:"odd"})
        }
    }

    function lessMore() {
        var MoreTen = sysNum + 10;
        var lessTen = sysNum - 10;

        setClues({clueTwo:`between ${lessTen} and ${MoreTen}`});
    }

    // function SpecialNumber() {

    // }
   

    return(
        <div>
            
            
        </div>
    )
}

export default Clue;