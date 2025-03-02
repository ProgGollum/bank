import React, {FC} from 'react';
import {IMenu} from "@/types/types";
import s from "../../styles/Menu.module.css"
import Link from "next/link";
import classNames from "classnames";

interface MenuProps  {
    pages?: IMenu[],
    active: boolean,
    setActive: (value:boolean) => void
}

const Menu:FC<MenuProps> = ({pages, active, setActive}) => {

    const closeMenu = () => {
        setActive(false);
        console.log(active);
    }

    return (
        <div className={classNames(s.menu, active ? s.menu__active : {})}>
            <div className={s.menu__content}>
                <ul className={s.menu__list}>
                    {pages?.map(page =>
                        <li key={page?.id} className={s.menu__list_item}>
                            <Link href={page.href} onClick={() => closeMenu}>{page.value}</Link>
                        </li>
                    )}
                </ul>
                <div className={s.menu__buttons}>
                    <Link href="" className="signup">Sign Up</Link>
                    <Link href="" className="login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;