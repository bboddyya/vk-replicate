import * as Icon from '@mui/icons-material'
import { IMenu } from '../../../../types/types'



export const dataMenu:IMenu[] = [
    
    {
        title:'Сообщения',
        path:'/messages ',
        icon:Icon.Forum
    },
    {
        title:'Моя страница',
        path:'/profile',
        icon:Icon.Home
    },
    {
        title:'Друзья',
        path:'/friends',
        icon:Icon.Person
    },

    {
        title:'Сообщения',
        path:'/messages',
        icon:Icon.Message
    },
    {
        title:'Новости',
        path:'/news',
        icon:Icon.Article
    },
    {
        title:'Сообщества',
        path:'/groups',
        icon:Icon.Group
    },
    {
        title:'Фотографии',
        path:'/photos',
        icon:Icon.Photo
    },
    {
        title:'Музыка',
        path:'/music',
        icon:Icon.Audiotrack
    },
    {
        title:'Видео',
        path:'/video',
        icon:Icon.Theaters
    },
    
]