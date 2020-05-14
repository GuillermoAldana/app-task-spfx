import * as React from "react";
import FormHeader from './FormHeader'
import FormBody from './FormBody'

import {IHomeProps} from '../IHomeProps'
 
const Formulario = (props) => {
    const {addItemFormulario} = props;
    return (
        <div className='card'>
            <div className='card-header'>
            <FormHeader></FormHeader>
            </div>
            <div className='card-body'>
            <FormBody addItemForm={addItemFormulario}></FormBody>
            </div>
        </div>
    )
}
 
export default Formulario;