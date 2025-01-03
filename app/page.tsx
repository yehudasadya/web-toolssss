import WhatsAppEncoder from './components/WhatsAppEncoder';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-green-600 text-white p-4">
        <h1 className="text-2xl font-bold">כלי אינטרנט שימושיים</h1>
      </nav>

      <div className="container mx-auto p-8">
        <WhatsAppEncoder />
      </div>
    </main>
  );
}