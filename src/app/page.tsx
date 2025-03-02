import React from "react";
import Welcome from "@/components/Welcome/Welcome";
import Product from "@/components/Tabs/Product Tabs/Product";
import Cases from "@/components/Cases/Cases";
import Features from "@/components/Tabs/Features Tabs/Features";
import Faq from "@/components/FAQ/Faq";
import Testimonials from "@/components/Tabs/Testimonials/Testimonials";
import Banner from "@/components/Banner/Banner";

export default function () {
    return (
        <main>
            <Welcome/>
            <Product/>
            {/*<Cases/>*/}
            {/*<Features/>*/}
            {/*<Faq/>*/}
            {/*height bag fix pls*/}
            {/*<Testimonials/>*/}
            {/*swiper bag with tabs fix pls*/}
            {/*<Banner/>*/}
        </main>
    )
}