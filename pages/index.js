import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";
import Form from "@/components/form";
import Table from "@/components/table";

export default function Home() {
  return (
    <section>
      <Head>
        <title>CRUD Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="flex left gap-3">
            <button className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-indigo-500 hover:text-gray-800">
              Add Employee
              <BiUserPlus size={32} />
            </button>
          </div>
        </div>
        {/* Collapsable form */}
        <div className="container mx-auto py-5">
          <Form></Form>
        </div>
        {/* Table */}
        <div className="container mx-auto">
          <Table></Table>
        </div>
      </main>
    </section>
  );
}
