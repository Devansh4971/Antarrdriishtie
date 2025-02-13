"use client"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

type Route2Props = {
    url: string,

}
const Route2Explore = ({ url }: Route2Props) => {
    const router = useRouter()

    const handleRedirect = () => {
        router.push(url)
    }
    return (
        <div className="flex">
            <a href="#" className="text-black font-medium hover:underline cursor-pointer" onClick={(e) => {
                e.preventDefault()
                handleRedirect()
            }}>
                Explore

            </a>
            <ArrowRight className="text-black font-medium text-[16px] w-[16px] h-[16px] mt-[0.275rem]"></ArrowRight>
        </div>
    )

}

export default Route2Explore;