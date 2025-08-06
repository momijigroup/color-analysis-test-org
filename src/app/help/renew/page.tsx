import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function RenewPage() {
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
            <span className="font-semibold text-gray-900">Does my subscription automatically renew?</span>
          </nav>
          <h2 className="text-3xl font-bold mb-6">Does my subscription automatically renew?</h2>
          <p className="mb-4">As per our <Link href="/terms" className="text-brand-plum underline">Terms & Conditions</Link>, which you accepted when signing up for ColorAnalysis services, all subscriptions automatically renew until canceled. During your sign-up process, we clearly presented you with both the trial price ($1.00) and your selected subscription rate that would apply after the trial period.</p>
          <p className="mb-4">As per Section 6.1 of our Terms & Conditions, all subscriptions begin with a 7-day trial period for $1.00, which automatically converts to your selected subscription rate after the trial period ends. Upon sign-up, we sent you a welcome email which included your subscription details:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your subscription terms and conditions</li>
            <li>Information about upcoming charges</li>
            <li>Trial period duration</li>
            <li>Post-trial subscription rate</li>
            <li>Cancellation instructions</li>
          </ul>
          <p className="mb-4">According to Section 6.4 of our Terms & Conditions, your subscription will renew automatically to maintain uninterrupted access to all premium features. The renewal process (Section 6.3) includes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Automatic billing on your subscription renewal date</li>
            <li>Price lock guarantee for existing subscribers</li>
            <li>Renewal at your current subscription rate</li>
          </ul>
          <p className="mb-4">You can <a href="https://app.color-analysis.pro" target="_blank" rel="noopener noreferrer" className="text-brand-plum underline">cancel your subscription through self-service portal</a> or by sending an email to <a href="mailto:support@color-analysis.pro" className="text-brand-plum underline">support@color-analysis.pro</a></p>
          <p>To avoid future charges, you must cancel before your renewal date. As stated in Section 7.3, there are no refunds for partial or unused subscription periods after renewal.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 