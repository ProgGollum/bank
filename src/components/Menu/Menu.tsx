import React, {FC} from 'react';
import {IMenu} from "@/types/types";
import s from "../../styles/Menu.module.css"
import Link from "next/link";
import classNames from "classnames";



interface MenuProps  {
    pages: IMenu[],
    active: boolean,
    setActive: (value:boolean) => void
}



const Menu:FC<MenuProps> = ({pages, active, setActive}) => {



    return (
        <div className={classNames(s.menu, active ? s.menu__active : {})}>
            <div className={s.menu__content}>
                <ul className={s.menu__list}>
                    {pages.map(page =>
                        <li key={page?.id} className={s.menu__list_item}>
                            {page.icon}
                            <Link href={page.href}>{page.value}</Link>
                        </li>
                    )}
                </ul>
                <div className={s.menu__buttons}>
                    <Link href="/signup" className={s.signup}>Sign Up</Link>
                    <Link href="/login" className={s.login}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;