import React from 'react';
import PropTypes from 'prop-types';


const FontTypes = (props) => {
    const type = props.type;
    if (type == 'bold')
        {return <b>{props.children}</b>;}
            else {
                if (type == 'italic')
                    {return <i>{props.children}</i>;}
                        else {
                            if (type == 'underlined')
                                {return <u>{props.children}</u>;}
                                    else return null
                             }
                 }

    // { (type == 'bold') ? 
    //              {return <b>{props.children}</b>;}
    //                  : {
    //                       (type == 'italic') ?
    //                          {return <i>{props.children}</i>;}
    //                              : {
    //                                   (type == 'underlined') ?
    //                                      {return <u>{props.children}</u>;}
    //                                          : return null
    //                                   }
    //                       }  
    // }        
    
     
//  Возможно стоило сделать задание с помощью switch case?
};

FontTypes.defaultProps = {
    type: 'bold',
 };

FontTypes.propTypes = {
   type: PropTypes.string,
};

export default FontTypes;
