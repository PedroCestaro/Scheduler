import React from 'react';
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import MainPage from './Pages/MainPage/MainPage';
import NewItem from './Components/New_Schedule';


function Routes(){
    return(  
        <BrowserRouter /* Permite que se criem as demais rotas*/>
            <Switch /*Não deixa mais de uma rota ser chamada ao mesmo tempo*/>
                <Route path="/" exact component = {Landing}/>
                <Route path="/main" component = {MainPage} />
                <Route path="/newItem" component = {NewItem}/>
            </Switch>
    </BrowserRouter>
)
}

export default Routes;