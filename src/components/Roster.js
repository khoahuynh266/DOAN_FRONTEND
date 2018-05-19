import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListOrders from './ListOrders'
import OrderDetail from "./OrderDetail";

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
    <Switch>
        <Route exact path='/admin/roster' component={ListOrders}/>
        <Route path='/admin/roster/:number' component={OrderDetail}/>
    </Switch>
)


export default Roster

