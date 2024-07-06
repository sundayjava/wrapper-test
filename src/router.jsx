import { createBrowserRouter } from 'react-router-dom';
import Changepassword from './pages/Changepassword'
import Signin from './pages/Signin'
import Otp from './pages/Otp'
import Success from './pages/Success'
import Welcome from './pages/Welcome'
import Signup from './pages/Signup';
import Confirm from './pages/Confirm';
import Notava from './pages/Notava';
import Success1 from './pages/Success/Success';
import Register from './pages/Register/Register';
import DashboardLayout from './layout/dashboardLayout/DashboardLayout'
import SuccessRegister from './pages/SuccessRegister/SuccessRegister';
import Dashboard from './pages/dashboard/Dashboard'
import Withdrawal from './pages/withdrawal/Withdrawal';
import Upload from "./pages/upload/Upload"
import Settings from './pages/settings/Settings';
import Logout from './pages/logout/Logout';
import Loading from './pages/load/Loading'
import Fillform from './pages/withdrawal/Fillform';
import Final from './pages/withdrawal/Final';
import Stage1 from './pages/withdrawal/Stage1';
import Stage2 from './pages/withdrawal/Stage2';
import Stage3 from './pages/withdrawal/Stage3';
import PaymentSettings from './pages/settings/PaymentSettings';
import AboutSettings from './pages/settings/AboutSettings';





const router = createBrowserRouter([
    {
        path: '/',
        element: <Signin />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },

    {
        path: '/forgot',
        element: <Changepassword />,
    },
    {
        path: '/otp',
        element: <Otp />,
    },
    {
        path: '/success',
        element: <Success />,
    },
    {
        path: '/error1',
        element: <Notava />,
    },
    {
        path: '/con',
        element: <Confirm />,
    },
    {
        path: '/success1',
        element: <Success1 />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/wel',
        element: <Welcome />,
    },
    {
        path: '/success-register',
        element: <SuccessRegister />,
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/dashboard/withdrawal",
                element: <Withdrawal />,
                children: [
                    {
                        // index: true,
                        path: '/dashboard/withdrawal/form',
                        element: <Fillform />,
                        children: [
                            {
                                index: true,
                                element: <Stage1 />,
                            },
                            {
                                path: '/dashboard/withdrawal/form/1',
                                element: <Stage2 />
                            },
                            {
                                path: '/dashboard/withdrawal/form/2',
                                element: <Stage3 />
                            },
                        ],
                    },
                    {
                        path: "/dashboard/withdrawal/success",
                        element: <Final />
                    }
                ],
            },
            {
                path: "/dashboard/upload",
                element: <Upload />,
            },
            {
                path: "/dashboard/settings",
                element: <Settings />
            },
            {
                path: "/dashboard/logout",
                element: <Logout />,
            },
        ]
    },
    {
        path: "/dashboard/settings/about",
        element: <AboutSettings />,
    },
    {
        path: "/dashboard/settings/payment",
        element: <PaymentSettings />,
    },

    {
        path: "/load",
        element: <Loading />,
    }
]);
export default router
