import WhatsAppEncoder from './components/WhatsAppEncoder';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-right">מחולל קישורי וואטסאפ</h1>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        <WhatsAppEncoder />
      </div>
    </main>
  );
}