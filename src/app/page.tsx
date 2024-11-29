"use client"
import {bomdia} from "./scripts/teste";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={bomdia} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        clica
      </button>

    </div>
  );
}
