'use client'
import React, {useEffect} from "react";
import Welcome from "@/components/Welcome/Welcome";
import Product from "@/components/Tabs/Product Tabs/Product";
import Cases from "@/components/Cases/Cases";
import Features from "@/components/Tabs/Features Tabs/Features";
import Faq from "@/components/FAQ/Faq";
import Testimonials from "@/components/Tabs/Testimonials/Testimonials";
import Banner from "@/components/Banner/Banner";
import {useAuth} from "@/context/Authcontext";
import {useRouter} from "next/navigation";

export default function () {
    const auth = useAuth()
    const router = useRouter()

    useEffect(() => {
        const checkAuth = async () => {
            const isAuth = await auth?.check();
            if (!isAuth) {
                router.push("/signup");
            }
        };

        checkAuth();
    }, [auth]);

    return (
        <main>
            <Welcome/>
            <Product/>
            <Cases/>
            <Features/>
            <Faq/>
            <Testimonials/>
            <Banner/>
        </main>
    )
}