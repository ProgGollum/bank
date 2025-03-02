'use client'

import React, {useEffect, useState} from 'react';
import axios from "axios";
import s from "../../styles/Faq.module.css"

import {Button} from '@mantine/core';
import {IoIosArrowDown} from "react-icons/io";
import classNames from "classnames";

const Faq = () => {

    const [items, setItems] = useState<any[]>([]);
    const [visible, setVisible] = useState<number>(4);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
            setItems(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const loadMoreFaq = () => {
        setVisible(prevValue => prevValue + 6);
    }

    return (
        <section className={s.question}>
            <div className="container">
                <h2 className="sectionTitle"><span>Frequently</span> Asked Questions</h2>
                <p className={s.question__info}>Still you have any questions? Contact our Team via <a
                    href="mailto:support@yourbank.com">support@yourbank.com</a></p>
                <ul className={classNames(s.question__list, visible === 4 ? s.question__blackout : {})}>
                    {items.slice(0, visible).map((item) =>
                        <li className={s.question__list_item} key={item.id}>
                            <h3 className={s.item__title}>{item.title}</h3>
                            <p className={s.item__text}>{item.body}</p>
                        </li>
                    )}
                </ul>
                <Button onClick={loadMoreFaq} className={classNames(s.load_button, visible === 10 ? "hidden" : {})}
                        variant="transparent" color="white" size="md" radius="lg"
                        rightSection={<IoIosArrowDown color={"#ffffff"} size={18}/>}>Load All FAQs</Button>
            </div>
        </section>
    );
};

export default Faq;