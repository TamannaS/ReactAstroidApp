import React from 'react';

const EachItem=(props)=>{
    return(
        
        <li className="media">            
            <div className="media-body">
            <br/>
                <h5 className="mt-0 mb-1">Astroid Name: {props.Link.name}</h5> 
                
                click on the below link for more information:
                <br/>
                <a target="_blank" href={props.Link.nasa_jpl_url}>{props.Link.nasa_jpl_url}</a>               
            </div>
        </li>            
        
    )
}

export default EachItem;