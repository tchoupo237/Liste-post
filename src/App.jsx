import React, { useState } from "react";
import Navbar from "./composents/Navbar";
import Post from "./composents/Post";

export default function App() {
  // donner des psotes
  const [data,setData] = useState(
    [
    {
      id: 1,
      titre: "Rober kiosaki",
      description:
        "un auteur de livre de finance personnel et d'investissement",
      liker: false,
    },
    {
      id: 2,
      titre: "Elon musk",
      description:
        "un entrepreneur et ingénieur connu pour son travail dans les domaines de l'aérospatiale, de l'énergie renouvelable et de la technologie automobile",
      liker: false,
    },
    {
      id: 3,
      titre: "Bill gates",
      description:
        "un entrepreneur et philanthrope connu pour avoir cofondé Microsoft et pour son travail dans les domaines de la technologie et de la santé mondiale",
        liker: false,
    },
    {
      id: 4,
      titre: "Mark zuckerberg",
      description:
        "un entrepreneur et informaticien connu pour avoir cofondé Facebook et pour son travail dans les domaines de la technologie et de la philanthropie",
      liker: false,
    },
    {
      id: 5,
      titre: "Jeff bezos",
      description:
        "un entrepreneur et investisseur connu pour avoir fondé Amazon et pour son travail dans les domaines de l'e-commerce et de l'aérospatiale",
      liker: false,
    },
  ]
  );

  // fonction pour liker
  const liker = (post)=>{
    const donnerCopier = [...data];
    const index = data.indexOf(post);
    donnerCopier[index] = {...post, liker: !post.liker};
    setData(donnerCopier); 
    console.log(data);
  }
  // suprimer poste
  const suprimer = (id)=>{
    const nouvelleDonner = data.filter(p => p.id !== id);
    setData(nouvelleDonner);
  }
  const nombrePosteLiker = data.filter(post => post.liker);
  return (
    <div className="flex flex-col items-center justify-center w0full min-h-[100vh] py-5 bg-gray-900">
      <Navbar nbrliker={nombrePosteLiker.length}/>
      <div className="max-w-2xl m-2 flex flex-col gap-4">
        {/* Affichage de la liste des posts */}
        {data.map((post) => (
          <Post key={post.id} data={post} liker={liker} delete={suprimer}/>
        ))}
      </div>
    </div>
  );
}
