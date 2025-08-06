import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function ContactSupportPage() {
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
            <span className="font-semibold text-gray-900">Contact ColorAnalysis Support</span>
          </nav>
          <h2 className="text-3xl font-bold mb-6">Contact ColorAnalysis Support</h2>
          <p className="mb-4">Our customer support is available 24/7 and you can expect a response within 24 hours. It might take longer on weekends and bank holidays.</p>
          <p className="mb-4">We encourage you to explore our <Link href="/help" className="text-brand-plum underline">Help Articles</Link>. You&apos;ll discover answers to most of your questions there, and we&apos;re constantly updating them to keep the information as current as can be! This way, you can get the assistance you need even faster.</p>
          <p>If you need to contact us directly, you can email us at <a href="mailto:support@color-analysis.pro" className="text-brand-plum underline">support@color-analysis.pro</a> or use the <Link href="/contact-us" className="text-brand-plum underline">contact form</Link> available on our website. We&apos;re here to help!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 