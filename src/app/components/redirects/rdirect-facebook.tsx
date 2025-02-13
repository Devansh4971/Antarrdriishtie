"use client"

import { Facebook, } from "lucide-react"
import { useRouter } from "next/navigation"
type Route2Props = {
    url: string
}
const Route2Facebook = ({ url }: Route2Props) => {
    const router = useRouter()

    const handleRedirect = () => {
        router.push(url)

    }
    return (

        <Facebook className="text-white cursor-pointer" onClick={(e) => { handleRedirect() }}></Facebook>

    )
}

export default Route2Facebook