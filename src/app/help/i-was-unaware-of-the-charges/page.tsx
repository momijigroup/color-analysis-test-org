import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function UnawareOfChargesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex items-center space-x-2 py-6">
          <Link href="/">
            <Image src="/lovable-uploads/logo1.png" alt="ColorAnalysis logo" width={64} height={64} />
          </Link>
        </div>
      </header>
      {/* Purple Banner */}
      <div className="bg-brand-plum w-full">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">ColorAnalysis Help Center</h1>
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <Link href="/help" className="hover:underline">Help Center</Link>
            <span>&gt;</span>
            <span className="font-semibold text-gray-900">I was unaware of the charges</span>
          </nav>
          <h2 className="text-3xl font-bold mb-6">I was unaware of the charges</h2>
          <p className="mb-4">ColorAnalysis is a premium subscription-based service. To create an ColorAnalysis account, it&apos;s essential to provide your email address and select a payment method. You&apos;ll also be prompted to choose a trial price, which will be displayed on the screen. Please be aware that you won&apos;t be able to proceed without selecting a trial price and agreeing to the subscription plan.</p>
          <p>Additionally, upon registration, we send a comprehensive Welcome email containing all the pertinent subscription details and instructions on how to manage your account.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 