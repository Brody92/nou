import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
    router.push("/");
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">{isRegister ? "Înregistrare" : "Autentificare"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border" />
        <input type="password" placeholder="Parola" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">{isRegister ? "Creează cont" : "Intră"}</button>
        <button type="button" onClick={() => setIsRegister(!isRegister)} className="text-sm underline">{isRegister ? "Ai deja cont?" : "Nu ai cont?"}</button>
      </form>
    </div>
  );
}