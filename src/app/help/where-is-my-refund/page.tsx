import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function WhereIsMyRefundPage() {
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
            <span className="font-semibold text-gray-900">Where is my refund?</span>
          </nav>
          <h2 className="text-3xl font-bold mb-6">Where is my refund?</h2>
          <p className="mb-4">Please note that your eligibility for refund is defined in Section 7 (Refund Policy) of our <Link href="/terms" className="text-brand-plum underline">Terms & Conditions</Link>, which you accepted upon sign-up.</p>
          <p className="mb-4">As per Section 7.4 of our Terms & Conditions, once approved, refund processing typically takes 3 business days from our side. While most refunds appear in your account within 1-2 business days after processing, in some instances it might take up to 5-10 business days, depending on your bank&apos;s processing times.</p>
          <p className="mb-4">For currency conversion cases (Section 7.5.2):</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Exchange rates are determined by your bank or card issuer</li>
            <li>Any currency conversion fees from your bank are not refundable</li>
            <li>You may see separate currency conversion charges on your bank statement</li>
          </ol>
          <p className="mb-4">Once the refund has been issued from our system, we are unable to monitor its status in your bank&apos;s processing system. If you haven&apos;t received your refund after 10 business days (which is rare), we recommend contacting your bank with your transaction details.</p>
          <p className="mb-4">Please note the refund will be returned to the original payment method, and we cannot issue refunds to any other payment method but the original one that was used upon sign-up for our services.</p>
          <p>In case your card is expired or blocked, no worries, your financial institution should still receive and credit money back to your account balance.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 