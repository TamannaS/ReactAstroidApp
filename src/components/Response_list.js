import React from 'react';
import EachItem from './Each_item'

const ResponseList=(props)=>{
    var Linkone=props.Links;
    if (typeof Linkone === 'undefined')
    {
        return(
            <div>You will be able to see the Result Here</div>        
        )      
        
    }
    const Item = Linkone.map((Link)=>{
            return <EachItem key={Link.neo_reference_id} Link={Link}/>
        })
        
       return(
        <ul>{Item}</ul>        
    )
    
}

export default ResponseList;