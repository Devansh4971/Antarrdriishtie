"use client"
import { useRouter } from "next/navigation"

type Route2Props = {
    url: string
}

const RedirectButton = ({ url }: Route2Props) => {

    const router = useRouter()

    const redirect2calendly = () => {
        router.push(url)
    }

    return (
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-8" onClick={(e) => { redirect2calendly() }}>Get Started</button>
    )


}

export default RedirectButton