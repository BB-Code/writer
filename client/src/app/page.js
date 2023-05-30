import Link from "next/link";

export default function AppPage(){
  return <>
    <Link href='/home'>Home Page</Link> <br/>
    <Link href='/setting'>Setting Page</Link>
  </>
}