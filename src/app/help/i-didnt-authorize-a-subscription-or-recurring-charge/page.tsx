import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function DidntAuthorizePage() {
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
            <span className="font-semibold text-gray-900">I didn&apos;t authorize a subscription or recurring charge</span>
          </nav>
          <h2 className="text-3xl font-bold mb-6">I didn&apos;t authorize a subscription or recurring charge</h2>
          <p className="mb-4">This subscription policy is part of our <Link href="/terms" className="text-brand-plum underline">Terms & Conditions</Link>, which you accepted when signing up for ColorAnalysis services. During your sign-up process, we clearly presented you with both the trial price ($1.00) and your subscription rate that would apply after the trial period, requiring your explicit acknowledgment before proceeding.</p>
          <p className="mb-4">As per Section 6.1 of our Terms & Conditions, all subscriptions begin with a 7-day trial period for $1.00, which automatically converts to your subscription rate after the trial period ends. Upon sign-up, we sent you a welcome email that included:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your subscription terms and conditions</li>
            <li>Information about upcoming charges</li>
            <li>Trial period duration</li>
            <li>Post-trial subscription rate</li>
            <li>Cancellation instructions</li>
          </ul>
          <p className="mb-4">According to Section 6.4 of our Terms & Conditions:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>All subscriptions auto-renew until canceled</li>
            <li>You must cancel before renewal to avoid charges</li>
            <li><Link href="https://app.color-analysis.pro" className="text-brand-plum underline">You can cancel anytime through our self-service portal.</Link></li>
          </ul>
          <p className="mb-4">When you signed up for ColorAnalysis, you agreed to our Terms & Conditions (Section 4.1), which includes authorization for automatic payments and subscription renewals. As stated in Section 6.3, we use PCI-DSS compliant payment processing, and billing occurs automatically on subscription renewal dates.</p>
          <p className="mb-4">For clarity on pricing, Section 6.2 outlines our standard subscription plans, and Section 6.1 details how the trial transitions to regular pricing:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Day 1-7: $1.00 total (trial period)</li>
            <li>Day 8 onwards: Your subscription rate applies</li>
            <li>You have the option to cancel before the standard rate begins</li>
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  );
} 