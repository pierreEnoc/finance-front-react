import React from 'react';
import Rotas from './rotas'
import Navbar from '../components/navbar'
import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {Button} from 'primereact/button'

class App extends React.Component {
  
  render(){
  return (
  <>
    <Navbar />
    <Button  label="Click" icon="pi pi-check" iconPos="right" />
    <div className="container">
       <Rotas />
    </div>
    </>
  );
  }
}

export default App;
