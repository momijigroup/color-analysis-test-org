import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function UpdatingEmailPage() {
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
            <span className="font-semibold text-gray-900">Updating email address</span>
          </nav>
          <h2 className="text-3xl font-bold mb-6">Updating email address</h2>
          <p className="mb-4">Our support agents can assist you with this request and they&apos;d be happy to update and/or correct your email on their end.</p>
          <p className="mb-4">Please write to us at <a href="mailto:support@color-analysis.pro" className="text-brand-plum underline hover:text-brand-plum/80">support@color-analysis.pro</a> or use the <Link href="/contact-us" className="text-brand-plum underline hover:text-brand-plum/80">contact form</Link> and provide the new email address you&apos;d like to use.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 