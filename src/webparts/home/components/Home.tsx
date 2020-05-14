import * as React from 'react';

import { escape } from '@microsoft/sp-lodash-subset';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Formulario';
import { ITaskState } from './ITaskState';
import { IHomeProps } from './IHomeProps'

export default class Home extends React.Component<IHomeProps,ITaskState> {

  constructor(props: IHomeProps, state: ITaskState) {
    super(props);
    this.state = {
      Tasks: ['']
    }

  }

  addItem = (item) => {

    this.setState(
      { 
        Tasks: item
      }
    )
    const g = this.state.Tasks
    console.log(g);
  }
  public render(): React.ReactElement<{}> {

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <Formulario addItemFormulario={this.addItem}></Formulario>
          </div>

        </div>

      </div>
    );
  }
}
