import Head from 'next/head'
import GoalsList from '../Components/Goals/GoalsList'
const Goals=()=>{
    return (
    <div className="container">
<Head>
        <title>All Goals</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
   
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"></link>

      </Head>

      <main className='box-content  items-center px-12'>
        <h1 className="title box-content pt-4 ">Goals of our Generation</h1>
        <GoalsList/>
        </main>
    </div>)
}

export default Goals