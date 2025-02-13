"use client"
import { useRouter } from "next/navigation"

type Route2Props = {
    url: string,
    label: string
}
const Route2Page = ({ url, label }: Route2Props) => {
    const router = useRouter()

    const handleRedirect = () => {
        router.push(url)
    }
    return (
        <a href="#" className="text-[#0b3558]" onClick={(e) => {
            e.preventDefault()
            handleRedirect()
        }}>{label}</a>
    )

}

export default Route2Page;