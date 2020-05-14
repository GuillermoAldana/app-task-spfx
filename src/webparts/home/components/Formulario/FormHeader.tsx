export interface HeaderProps {

}
import * as React from 'react'
import style from './CSS/Formulario.module.scss'
const logo:any = require('./IMG/reactlogo.png');

const FormHeader: React.SFC<HeaderProps> = () => {
    return (
        <div className='row'>
            <div className='col-sm-3'>
            <img src={logo} className='img-thumbnail'></img>
            </div>
            <div className='col-sm-9 mt-3'>
                <h3 className={style.titulo}>Creacion de tarea</h3>
                <hr/>
            </div>
        </div>
    );
}

export default FormHeader;