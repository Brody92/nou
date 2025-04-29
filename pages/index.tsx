import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Dosar Medical Animale</h1>
      <p className="mb-4">Bine ai venit! Începe prin a merge la:</p>
      <Link href="/login" className="text-blue-600 underline text-lg">Autentificare / Înregistrare</Link>
    </div>
  );
}