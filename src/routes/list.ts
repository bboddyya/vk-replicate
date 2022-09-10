import React from "react";
import SignIn from "../components/Auth/SignIn";
import Friends from "../components/pages/Friends/Friends";
import Home from "../components/pages/Home/Home";
import Registration from "../components/Auth/Registration/Registration";
import { IRoutes } from "../types/types";
import Auth from "../components/Auth/Auth";



export const routes:IRoutes[] = [
    
    {
        path:'/',
        exact:true,
        component:Home,
        auth:true  
    },
    {
        path:'/messages ',
        exact:true,
        component:Home,
        auth:true  
    },
    {
        path:'/profile',
        exact:false,
        component:Home,
        auth:true
    },
    {
        path:'/friends',
        exact:false,
        component:Home,
        auth:true
    },
    {
        path:'/news',
        exact:true,
        component:Home,
        auth:true
    },
    {
        path:'/groups',
        exact:false,
        component:Home,
        auth:true
    },

    {
        path:'/photos',
        exact:true,
        component:Friends,
        auth:true
    },
    {
        path:'/music',
        exact:true,
        component:Friends,
        auth:true
    },
    {
        path:'/video',
        exact:true,
        component:Friends,
        auth:true
    },
    // {
    //     path:'/auth',
    //     exact:true,
    //     component:SignIn,
    //     auth:true
    // },

    // {
    //     path:'/registration',
    //     exact:true,
    //     component:Registration,
    //     auth:true
    // },

    {
        path:'/auth',
        exact:true,
        component:Auth,
        auth:false        
    },
]