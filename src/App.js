import { Route, Switch } from 'react-router-dom';
import './index.css'
import  routes from './routes'
function App() {
  return (
    <div className="container-fluid h-100 p-0 d-flex overflow-hidden">
      
     <Switch>
     {
        routes.authenticated.map(item=>{
          return( <Route key={item.key} exact={item.exact} path={item.path} component={item.component}/>)
        })
      }
     </Switch>
    </div>
  );
}

export default App;
