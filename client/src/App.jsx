import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Username from './components/UserName'
import Register from './components/Register'
import Recovery from './components/Recovery'
import Reset from './components/Reset'
import Password from './components/Password'
import PageNotFound from './components/PageNotFound'
import Profile from './components/Profile'

/* root routes */
const routes = createBrowserRouter([
    {
        path: '/',
        element:<Username/>
    },
    {
        path:'/register',
        element: <Register/>
    },{
        path:'/password',
        element: <Password/>
    },{
        path:'/recovery',
        element:<Recovery/>
    },{
        path:'/profile',
        element:<Profile/>
    },{
        path:'/reset',
        element:<Reset/>
    },{
        path:'*',
        element:<PageNotFound/>
    }
])

const App = () => {
    return (
        <main>
                <RouterProvider router={routes}>

                </RouterProvider>
        </main>
    )
}

export default App
