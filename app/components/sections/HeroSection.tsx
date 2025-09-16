export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          DevFest Kocaeli 2025
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Google teknolojileri ve yazılım geliştirme üzerine bir etkinlik
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          Kayıt Ol
        </button>
      </div>
    </section>
  );
}
