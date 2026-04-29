import React from 'react'

export default function Post({data, liker, delete: suprimer}) {
    const {id,titre, description, liker:posteLiker} = data;
  return (
    <div className={`w-full p-4 rounded-2xl flex gap-4 ${posteLiker ? "bg-green-200" : "bg-white"}`}>
        <div className="flex flex-col">
            <h1 className='font-bold text-2xl'>{titre}</h1>
            <p className='max-w-[400px]'>{description} </p>
        </div>
        <div className="flex gap-2 items-center">
            <button onClick={()=>liker(data)} className='h-fit bg-gray-200  font-bold rounded-2xl px-8 py-2 active:scale-[.9]'>{posteLiker ?  "Disliker": "Liker"}</button>
            <button onClick={()=>suprimer()} className='h-fit bg-red-300 font-bold  text-red-700 rounded-2xl px-8 py-2 active:scale-[.9]'>Suprimer</button>
        </div>
    </div>
  )
}

