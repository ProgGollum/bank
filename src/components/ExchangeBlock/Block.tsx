import React, {FC} from 'react';
import s from "../../styles/Block.module.css"
import classNames from "classnames";

interface BlockProps {
    value?: string | number;
    currency?: string;
    onChangeValue: (value: number ) => void;
    onChangeCurrency: (cur: string) => void;
}

const defaultCurrency = ['USD', 'EUR', 'GBP']

const Block: FC<BlockProps> = ({value, currency, onChangeValue, onChangeCurrency}) => {
    return (
        <div className={s.block}>
            <ul className={s.currencies}>
                {defaultCurrency.map((cur) => (
                    <li
                        onClick={() => onChangeCurrency(cur)}
                        className={classNames(s.li, { [s.active]: currency === cur })}
                        key={cur}
                    >
                        {cur}
                    </li>
                ))}
            </ul>
            <input
                type="number"
                value={value}
                onChange={(e) => onChangeValue(Number(e.target.value))}
                placeholder="0"
                className={s.input}
            />
        </div>
    );
};

export default Block;