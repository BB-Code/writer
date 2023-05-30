"use client"
import { useRouter } from "next/navigation";
export default function HomePage() {
    const router = useRouter();
    return (
        <>
            <h1>HomePage</h1>
            <button type="button" onClick={()=>{
                router.push('/')
            }}>To AppPage</button>
        </>
    );
  }