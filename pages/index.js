import Head from 'next/head'
import { GoalForm } from '../Components'
import clientPromise from '../lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <div className="container ">
      <Head>
        <title>Write your Life Goal</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
   
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>

      </Head>

      <main className='box-content  items-center px-10'>
        <h1 className="title box-content  pt-4 ">
          Write about your life Goal 🥇💭
        </h1>

        {isConnected ? (
          <h2 className="subtitle pt-2 ">See the List of all wonderful Goals people are working on</h2>
        ) : (
          <h2 className="subtitle box-content  ">
          There is no access to Dreamland
          </h2>
        )}
</main>
      <div>
        <GoalForm/>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the folloing code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
