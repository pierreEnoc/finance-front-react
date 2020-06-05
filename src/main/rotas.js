import React from 'react'

import Login from '../views/login'
import Home from '../views/home'
import AuthService from '../app/service/authService'
import CadastroUsuario from '../views/cadastroUsuario'
import ConsultaLancamentos from '../views/lancamentos/consulta-lancamento'
import  CadastroLancamentos from '../views/lancamentos/cadastro-lancamentos'

import { Route, Switch, HashRouter, Redirect} from 'react-router-dom'

const authService = new AuthService();

function RotaAutenticada( { component: Component, isUsuarioAutenticado, ...props } ){
    return (
        <Route {...props} render={ (componentProps) => {
            if(AuthService.isUsuarioAutenticado()){
                return (
                    <Component {...componentProps} />
                )
            }else{
                return(
                    <Redirect to={ {pathname : '/login', state : { from: componentProps.location } } } />
                )
            }
        }}  />
    )
}


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <RotaAutenticada path ="/home" component={Home} />  
                <Route path ="/login" component={Login} />

                <Route path ="/cadastroUsuario" component={CadastroUsuario} />
                <RotaAutenticada path ="/consulta-lancamentos" component={ConsultaLancamentos} />
                <RotaAutenticada path ="/cadastro-lancamentos/:id?" component={CadastroLancamentos} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas