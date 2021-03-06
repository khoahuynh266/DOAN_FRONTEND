import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListProduct from './ListProduct';
import OrderDetail from "./OrderDetail";
import UserDetail from "./UserDetail";
import ListUser from "./ListUser";
import ListOrders from "./ListOrders";
import ListProducer from "./ListProducer";
import BestSeller from "./BestSeller";
import Selltop10 from "./Selltop10";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/admin/' component={ListProduct}/>
 {/*     <Route exact path='/admin/roster' component={Roster}/>*/}
    {/*  <Route exact path='/admin/listUser' component={User}/>*/}
           {/* Để main có thể route tới , không switch lồng switch dc*/}
        <Route exact path='/admin/order' component={ListOrders}/>
        <Route path='/admin/order/:number' component={OrderDetail}/>
        <Route exact path='/admin/Selltop10' component={Selltop10}/>
        <Route exact path='/admin/listUser' component={ListUser}/>
        <Route exact path='/admin/listUser/:number' component={UserDetail}/>
        <Route exact path='/admin/producer' component={ListProducer}/>
    </Switch>
  </main>
)

export default Main
