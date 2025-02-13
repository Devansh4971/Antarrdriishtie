"use client"
import { useRouter } from "next/navigation"
type Route2Prop = {
    url: string
}

const Redirect2Services = ({ url }: Route2Prop) => {
    const router = useRouter()

    const redirectServices = () => {
        router.push(url)
    }

    return (
        <button className="bg-[#006bff] text-[1.rem] hover:bg-blue-600 text-white p-[.5rem] font-bold font-inter rounded-[6px] " onClick={(e) => {
            redirectServices()
        }}>Get Started</button>
    )
}


export default Redirect2Services