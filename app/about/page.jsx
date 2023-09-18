import Image from "next/image";
import Maqueta from "@/app/components/dadComponent";
import Buttons from "../components/button";


export default function Home() {

    return (
        <div className="flex flex-col items-center justify-center min-h-[10vh]">
            <Maqueta>
                <Buttons />
            </Maqueta>
        </div>
    )
}