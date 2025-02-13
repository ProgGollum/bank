import React, {FC} from 'react';
import Image from "next/image";
import check from "@/images/check.svg";
import Link from "next/link";
import s from "../../styles/Welcome.module.css"
import Transactions from "@/components/Transactions/Transactions";
import {Itransaction} from "@/types/types";

const Welcome:FC = () => {

    const transactions: Itransaction[] = [
        {id: 1, title: "Transaction", name: "Dzubenko Konstantin", cost: "-$15.00"},
        {id: 2, title: "Transaction", name: "Bondarenko Cyrill", cost: "-$57.00"},
        {id: 3, title: "Transaction", name: "Dann Nikolay", cost: "-$100.00"}
    ]

    return (
        <section>
            <div className="container">
                <div className={s.welcomeInner}>
                    <div className={s.welcomeGen}>
                        <div className={s.genChecked}>
                            <Image src={check} alt={""}/>
                            <p>No LLC Required, No Credit Check.</p>
                        </div>
                        <h1 className="sectionTitle">
                            Welcome to YourBank <br/>
                            Empowering Your <span>Financial Journey</span>
                        </h1>
                        <p className={s.genText}>
                            At YourBank, our mission is to provide comprehensive banking solutions that empower
                            individuals and
                            businesses to achieve their financial goals. We are committed to delivering personalized and
                            innovative services that prioritize our customers' needs.
                        </p>
                        <Link className={s.genButton} href={"#!"}>Open Account</Link>
                    </div>

                    <div className={s.welcomeFinance}>
                        <div className={s.financeGroup}>
                            <Transactions transactions={transactions}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;