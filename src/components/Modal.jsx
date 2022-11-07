import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';
/**
 * Primary UI component for user interaction
 */
export const Modal = ({ titulo,informacion ,clasemodal}) => {
  clasemodal= clasemodal==''?'rotate':clasemodal;
  return (
    
    <div>
     

    <a id="enlace" href="#modal1">Mostrar Ventana</a>
    
      <div id="modal1" className='modalmask'>
        <div className={['modalbox', `${clasemodal}`].join(' ')}>
            <a href="#close" title="Close" class="close">X</a>
            <h2>{titulo}</h2>
            <p>{informacion}</p>
            
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
 
  /**
   * Tìtulo de la ventana modal
   */
  titulo: PropTypes.string,
  /**
   * Informacion que se mostrara en el cuerpo
   */
  informacion: PropTypes.string,
  /**
   * Estilo de la Modal
   */
   clasemodal: PropTypes.string,
   
  
};

Modal.defaultProps = {
  titulo:'',
  informacion:'',
  clasemodal:'rotate'
};
