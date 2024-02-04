import React from 'react';
import IconButton from '@mui/material/IconButton';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const Ventanamodal =  (props) => {

    return(
        <div >
                <div >
                    <IconButton 
                        
                        aria-label="cerrar"
                        onClick={() => props.abrircerrarmodal()}
                    >
                    <CancelRoundedIcon 
                       
                        fontSize='small'
                    />
                    </IconButton>            

                </div>                    
    
        <h3 >Ventana Modal Funcionando correctamente</h3>
  
        </div>
    )


}

export default Ventanamodal;

