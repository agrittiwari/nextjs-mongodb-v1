import Head from 'next/head'
import GoalsList from '../Components/Goals/GoalsList'
import Link from 'next/link'
const Goals=()=>{
    return (
    <div className="container">
<Head>
        <title>All Goals</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
   
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"></link>

      </Head>

      <main className=' box-content  items-center px-10 py-4'>
        <h1 className="title box-content pt-4 ">Goals of our Generation 👀👀</h1>
        <strong >
            <img src="/pointer.png" alt="pointer icon" className="icon float-right" />
            <Link href='/goals' className="subtitle pt-2 float-right">
            You can add your goal to this list, here</Link>
            </strong>
        </main>
         <GoalsList/>
         <footer > 
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel 
        </a>
<strong> Made with ❣️</strong>
        <a href="https://www.twitter.com/agrit_tiwari"> @agrit_tiwari </a>
      </footer>
    </div>)
}

export default Goals