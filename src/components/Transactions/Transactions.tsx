import React, {FC} from 'react';
import {ITransaction} from "@/types/types";
import Image from "next/image";
import trans from "../../images/transaction.svg"
import s from "../../styles/Transactions.module.css"


interface TransactionsProps {
    transactions: ITransaction[];
}

const Transactions: FC<TransactionsProps> = ({transactions}) => {


    return (
        <div className={s.financeTransactions}>
            <h2 className={s.transactionsTitle}>Your Transactions</h2>
            {transactions.map(transaction =>
                <div key={transaction.id} className={s.transaction}>
                    <div className={s.transactionMain}>
                        <Image className={s.transactionMainImg} src={trans} alt={""}/>
                        <div>
                            <h3 className={s.transactionMainType}>{transaction.title}</h3>
                            <p className={s.transactionMainName}>{transaction.name}</p>
                        </div>
                    </div>
                    <div className={s.transactionCoast}>{transaction.cost}</div>
                </div>
            )}
        </div>
    );
};

export default Transactions;