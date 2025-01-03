import WhatsAppEncoder from '../components/WhatsAppEncoder';

export default function WhatsAppPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-white hover:text-gray-200">חזרה לדף הבית</a>
          <h1 className="text-2xl font-bold">מחולל הודעות וואטסאפ</h1>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        <WhatsAppEncoder />
      </div>
    </main>
  );
}