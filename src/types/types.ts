import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import React, { Dispatch, SetStateAction } from "react"
import { ISignIn } from "../components/Auth/SignIn"


export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IRoutes {
    path:string
    exact:boolean
    component:React.FunctionComponent | React.FunctionComponent<any> 
    auth:boolean
}

export interface IMenu {
    title:string
    path:string
    icon:OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }
}

export interface IUser {
    id: string
    avatar: string
    name: string
    isOnline: boolean
} 

export interface IPost {
    user: IUser
    title: string
    date:string
    images: string[]
} 