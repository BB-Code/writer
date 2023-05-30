"use client"
import { useRouter } from "next/navigation";
export default function SettingPage() {
    const router = useRouter();
    return (
        <>
            <h1>SettingPage</h1>
            <button type="button" onClick={()=>{
                router.push('/')
            }}>To AppPage</button>
        </>
    );
  }