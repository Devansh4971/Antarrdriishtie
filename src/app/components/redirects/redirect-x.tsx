

"use client"

import {  Twitter } from "lucide-react"
import { useRouter } from "next/navigation"
type Route2Props = {
    url: string
}
const Route2Twitter = ({ url }: Route2Props) => {
    const router = useRouter()

    const handleRedirect = () => {
        router.push(url)

    }
    return (

        <Twitter className="text-white cursor-pointer" onClick={(e) => { handleRedirect() }}></Twitter>

    )
}

export default Route2Twitter