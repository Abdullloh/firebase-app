import AddInvoice from "./containers/Admin/AddInvoice";
import Admin from "./containers/Admin/Admin";
import Balance from "./containers/Admin/Balance";
import SignIn from "./containers/Auth/SignIn";
import SignUp from "./containers/Auth/SignUp";
import Clients from "./containers/Clients";
import Add from "./containers/Clients/Add";
import Edit from "./containers/Clients/Edit";


const routes = {
    authenticated:[
        {
            key:'client',
            path:'/clients',
            component:Clients,
            exact:true,
        },
        {
            key:'clientEdit',
            path:'/clients/edit/:id',
            component:Edit,
            exact:true,
        },
        {
            key:'clientAdd',
            path:'/clients/add',
            component:Add,
            exact:true,
        },
        {
            key:'balance',
            path:'/balance',
            component:Balance,
            exact:true,
        },
        {
            key:'invoice',
            path:'/invoice',
            component:Admin,
            exact:true,
        },
        {
            key:'invoideAdd',
            path:'/invoice/add',
            component:AddInvoice,
            exact:true,
        },
      
    ],
    public:[
        {
            key:'signin',
            path:'/sign-in',
            component:SignIn,
            exact:true,
        },
        {
            key:'sign-up',
            path:'/sign-up',
            component:SignUp,
            exact:true,
        }
    ]
}
export default routes