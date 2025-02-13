"use client"

import { Linkedin } from "lucide-react"
import { useRouter } from "next/navigation"
type Route2Props = {
    url: string
}
const Route2Linkedin = ({ url }: Route2Props) => {
    const router = useRouter()

    const handleRedirect = () => {
        router.push(url)

    }
    return (

        <Linkedin className="text-white cursor-pointer" onClick={(e) => { handleRedirect() }}></Linkedin>

    )
}

export default Route2Linkedin