'use client'

import React, {FC, useEffect, useRef, useState} from 'react';
import Image from "next/image";
import check from "@/images/check.svg";
import { CiCirclePlus } from "react-icons/ci";

import Link from "next/link";
import s from "../../styles/Welcome.module.css"
import Transactions from "@/components/Transactions/Transactions";
import {ITransaction} from "@/types/types";
import Block from "@/components/ExchangeBlock/Block";
import axios from 'axios'

interface RateData {
    [key: string]: number; // любой ключ - это строка, а значение - число
}


const Welcome: FC = () => {

    const transactions: ITransaction[] = [
        {id: 1, title: "Transaction", name: "Dzubenko Konstantin", cost: "-$15.00"},
        {id: 2, title: "Transaction", name: "Bondarenko Cyrill", cost: "-$57.00"},
        {id: 3, title: "Transaction", name: "Dann Nikolay", cost: "+$100.00"}
    ]

    const [fromCurrency, setFromCurrency] = useState<string>('USD')
    const [toCurrency, setToCurrency] = useState<string>('EUR')
    const [fromPrice, setFromPrice] = useState<number>(1)
    const [toPrice, setToPrice] = useState<number>(0)

    // const [rates, setRates] = useState<RateData>({})
    const ratesRef = useRef<RateData>({})
    const fetchData = async () => {
        try {
            const response = await axios("https://www.cbr-xml-daily.ru/latest.js")
            ratesRef.current = response.data.rates;
            onChangeFromPrice(1);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    const onChangeFromPrice = (value: number) => {
        if (ratesRef.current[fromCurrency] && ratesRef.current[toCurrency]) {
            const price = value / ratesRef.current[fromCurrency];
            const result = price * ratesRef.current[toCurrency];
            setFromPrice(value);
            setToPrice(result);
        } else {
            console.warn("Rates are not loaded or invalid currency");
        }
    }

    const onChangeToPrice = (value: number) => {
        if (ratesRef.current[fromCurrency] && ratesRef.current[toCurrency]) {
            const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
            setFromPrice(result);
            setToPrice(value);
        } else {
            console.warn("Rates are not loaded or invalid currency");
        }
    }

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCurrency]);

    useEffect(() => {
        if (toPrice >= 0) { // Проверяем, что toPrice не отрицательный
            onChangeToPrice(toPrice);
        }
    }, [toCurrency]);

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
                            <div>
                                <h3 className={s.finance__exchangeTitle}>Money Exchange</h3>
                                <div>
                                    <Block
                                        value={fromPrice}
                                        currency={fromCurrency}
                                        onChangeCurrency={setFromCurrency}
                                        onChangeValue={onChangeFromPrice}
                                    />
                                    <Block
                                        value={toPrice}
                                        currency={toCurrency}
                                        onChangeCurrency={setToCurrency}
                                        onChangeValue={onChangeToPrice}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={s.profit}>
                            <CiCirclePlus className={s.profit__img}/>
                            <div>
                                <p className={s.profit__value}>+ $5000,00</p>
                                <p className={s.profit__text}>Monthly Income</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Welcome;