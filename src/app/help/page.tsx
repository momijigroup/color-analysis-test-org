import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export default function HelpPage() {
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
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>&gt;</span>
          <span className="font-semibold text-gray-900">Help Center</span>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Subscription Management */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col gap-2">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🏠</span>
              <span className="font-semibold text-lg">Subscription Management</span>
            </div>
            <Link href="/help/cancel" className="flex items-center justify-between text-gray-700 hover:text-brand-plum transition block">
              <span>Cancelling your subscription</span>
              <span className="text-gray-400 ml-2">&gt;</span>
            </Link>
            <Link href="/help/renew" className="flex items-center justify-between text-gray-700 hover:text-brand-plum transition block">
              <span>Does my subscription automatically renew?</span>
              <span className="text-gray-400 ml-2">&gt;</span>
            </Link>
            <Link href="/help/updating-email" className="flex items-center justify-between text-gray-700 hover:text-brand-plum transition block">
              <span>Updating email address</span>
              <span className="text-gray-400 ml-2">&gt;</span>
            </Link>
          </section>
          {/* Billing & Payments */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col gap-2">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🧡</span>
              <span className="font-semibold text-lg">Billing & Payments</span>
            </div>
            <Link href="/help/where-is-my-refund" className="flex items-center justify-between text-gray-700 hover:text-brand-plum transition block">
              <span>Where is my refund?</span>
              <span className="text-gray-400 ml-2">&gt;</span>
            </Link>
            <Link href="/help/i-didnt-authorize-a-subscription-or-recurring-charge" className="flex items-center justify-between text-gray-700 hover:text-brand-plum transition block">
              <span>I didn&apos;t authorize a subscription or recurring charge</span>
              <span className="text-gray-400 ml-2">&gt;</span>
            </Link>
            <Link href="/help/i-was-unaware-of-the-charges" className="flex items-center justify-between text-gray-700 hover:text-brand-plum transition block">
              <span>I was unaware of the charges</span>
              <span className="text-gray-400 ml-2">&gt;</span>
            </Link>
          </section>
          {/* Legal & Policies */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col gap-2">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🧑‍⚖️</span>
              <span className="font-semibold text-lg">Legal & Policies</span>
            </div>
            <Link href="/privacy" className="flex items-center justify-between text-gray-700 hover:text-brand-plum transition block">
              <span>Privacy Policy</span>
              <span className="text-gray-400 ml-2">&gt;</span>
            </Link>
            <Link href="/terms" className="flex items-center justify-between text-gray-700 hover:text-brand-plum transition block">
              <span>Terms & Conditions</span>
              <span className="text-gray-400 ml-2">&gt;</span>
            </Link>
            <Link href="/cookie" className="flex items-center justify-between text-gray-700 hover:text-brand-plum transition block">
              <span>Cookie Policy</span>
              <span className="text-gray-400 ml-2">&gt;</span>
            </Link>
            <Link href="/terms#refund" className="flex items-center justify-between text-gray-700 hover:text-brand-plum transition block">
              <span>Refund Policy</span>
              <span className="text-gray-400 ml-2">&gt;</span>
            </Link>
          </section>
          {/* Connect with Support */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col gap-2">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">💪</span>
              <span className="font-semibold text-lg">Connect with ColorAnalysis Support</span>
            </div>
            <Link href="/help/contact-support" className="flex items-center justify-between text-gray-700 hover:text-brand-plum transition block">
              <span>Contact ColorAnalysis Support</span>
              <span className="text-gray-400 ml-2">&gt;</span>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 