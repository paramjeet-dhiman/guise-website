import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AppFooter } from './layouts/AppFooter'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Navbar } from './pages/Navbar'
import { NotFound } from './pages/NotFound'
import { Solutions } from './pages/Solutions'


export const Routes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
            <AppFooter />
        </>
    )
}
