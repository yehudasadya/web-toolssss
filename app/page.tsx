import Link from 'next/link'

export default function Home() {
  const tools = [
    {
      title: "מחולל הודעות וואטסאפ",
      description: "צור קישורי וואטסאפ מותאמים אישית עם הודעה מוכנה מראש",
      icon: "📱",
      href: "/web-toolssss/whatsapp",
      color: "bg-green-500"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-right">
            כלי אינטרנט שימושיים
          </h1>
          <p className="text-xl opacity-90 text-right">
            אוסף כלים שימושיים לשימוש יומיומי
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Link href={tool.href} key={index}>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 cursor-pointer border border-gray-100">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h2 className="text-2xl font-semibold mb-2 text-right">{tool.title}</h2>
                <p className="text-gray-600 text-right">{tool.description}</p>
                <div className={`mt-4 ${tool.color} text-white px-4 py-2 rounded-lg text-center`}>
                  התחל להשתמש
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 כל הזכויות שמורות</p>
        </div>
      </footer>
    </main>
  );
}