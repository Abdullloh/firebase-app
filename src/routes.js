import AddInvoice from "./containers/Admin/AddInvoice";
import Admin from "./containers/Admin/Admin";
import Balance from "./containers/Admin/Balance";
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
            key:'client',
            path:'/clients/edit/:id',
            component:Edit,
            exact:true,
        },
        {
            key:'client',
            path:'/clients/add',
            component:Add,
            exact:true,
        },
        {
            key:'client',
            path:'/balance',
            component:Balance,
            exact:true,
        },
        {
            key:'client',
            path:'/invoice',
            component:Admin,
            exact:true,
        },
        {
            key:'client',
            path:'/invoice/add',
            component:AddInvoice,
            exact:true,
        },
      
    ],
    public:[]
}
export default routes