import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './containers/Auth/SignIn';
import Clients from './containers/Clients';
import './index.css'
import  routes from './routes'
function App() {
  const data = useSelector(state=> state.user)
  if(data.refreshToken){
     return(
      <div className="container-fluid h-100 p-0 d-flex overflow-hidden">
      <Switch>
      {
         routes.authenticated.map(item=>{
           return( <Route key={item.key} exact={item.exact} path={item.path} component={item.component}/>
           
            )
         })
       }
       </Switch>
       </div>
     )
  }
  return (
    <div className="container-fluid h-100 p-0 d-flex overflow-hidden">
    <Switch>
     {
        routes.public.map(item=>{
          return(<Route key={item.key} exact={item.exact} path={item.path} component={item.component}/>
          
          )
        })
      }
     </Switch>
    </div>
  );
}

export default App;
