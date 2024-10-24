"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [counter, setCounter] = useState(10);

    function addOne() {
        setCounter(counter + 10);
    }

    return (
        <main>
            <div>Counter: {counter}</div>
            <button onClick={addOne}>addone</button>
            <Link href="/about">about</Link>
            <Link href="/notes">notes</Link>
        </main>
    );
}
