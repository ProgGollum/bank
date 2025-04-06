import React, {FC} from 'react';
import {IMenu} from "@/types/types";
import s from "../../styles/Menu.module.css"
import Link from "next/link";
import classNames from "classnames";
import {useAuth} from "@/context/Authcontext";



interface MenuProps  {
    pages: IMenu[],
    active: boolean,
    setActive: (value:boolean) => void
}



const Menu:FC<MenuProps> = ({pages, active, setActive}) => {

    const auth = useAuth()

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
                {!auth?.isAuth
                    ? <div className="buttons">
                        <Link href="/signup" className="signup">Sign Up</Link>
                        <Link href="/login" className="login">Login</Link>
                    </div>
                    :
                    <button className="logout__menu">Logout</button>
                }
            </div>
        </div>
    );
};

export default Menu;