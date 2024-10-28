"use client"
import Image from "next/image"
import { Loader2 } from "lucide-react"

export default function Spinner() {
    return <div className="flex justify-center items-center h-screen">
    <Image src="/spinner.svg" alt="Loading..." width={100} height={100} />
    </div>
}