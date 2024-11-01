import HeroSection from '@/components/HeroSection';
import CategoryFilter from '@/components/CategoryFilter';
import TradesList from '@/components/TradesList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <CategoryFilter />
        <TradesList />
      </div>
    </main>
  );
}