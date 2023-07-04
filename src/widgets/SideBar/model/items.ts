import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';

export interface SidebarItemType{
    path:string;
    text:string;
    Icon:React.FC<React.SVGProps<SVGSVGElement>>;
    authOnly?:boolean;
}

export const SidebarItemsList = (userOwnId:string | undefined) => {
    const items:SidebarItemType[] = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: 'main_page_link',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'about_page_link',
        },
        {
            path: `${RoutePath.profile}${userOwnId}`,
            Icon: ProfileIcon,
            text: 'profile_page_link',
            authOnly: true,
        },

        {
            path: RoutePath.articles,
            Icon: ArticlesIcon,
            text: 'articles_page_link',
            authOnly: true,
        },
    ];
    return items;
};
