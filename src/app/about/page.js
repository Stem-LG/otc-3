"use client";

import Link from "next/link";

export default function About() {
    return (
        <div>
            about page
            <Link href="/">home</Link>
            <MyName />
            <MyName />
            <MyName />
            <MyName />
        </div>
    );
}

function MyName() {
    console.log("hello");

    return <div>louay</div>;
}
