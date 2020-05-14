export interface FormBodyProps {
    
}
import * as React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
    nombre: string,
    apellido: string,
  };
  export default function FormBody(props) {

    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const {addItemForm} = props;
    
    const onSubmit = (data) => {
        console.log(data)
        addItemForm(data);
    }
  
    return (
     
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
             <input name="nombre" className='form-control' ref={register} />
        </div>
       
        <div className='form-group'>
        	 <input name="apellido" className='form-control' ref={register({ required: true })} />
             {errors.apellido && <span>This field is required</span>}

        </div>
        <div className='form-group'>
            <button className='btn btn-success btn-block'>Guardar</button>
        </div> 
      </form>
    );
  }