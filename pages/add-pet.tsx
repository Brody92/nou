import { useState } from "react";
import { db, auth } from "../src/lib/firebase";  
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export default function AddPetPage() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;
    await addDoc(collection(db, `users/${user.uid}/pets`), {
      name,
      species,
      breed,
      createdAt: new Date(),
    });
    router.push("/");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Adaugă un animal</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Nume" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border" />
        <input placeholder="Specie (ex: câine, pisică)" value={species} onChange={(e) => setSpecies(e.target.value)} className="w-full p-2 border" />
        <input placeholder="Rasă" value={breed} onChange={(e) => setBreed(e.target.value)} className="w-full p-2 border" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">Salvează</button>
      </form>
    </div>
  );
}
