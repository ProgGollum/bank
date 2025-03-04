import React from "react";

export interface ITransaction {
    id: number;
    title: string;
    name: string;
    cost: string;
}

export interface IMenu {
    id: number;
    value: string;
    href: string;
    icon: React.ReactElement;
}