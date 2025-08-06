import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function CancelPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white">Cancel Your Subscription</h1>
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
            <span className="font-semibold text-gray-900">Cancel Your Subscription</span>
          </nav>
          <h2 className="text-xl font-bold mb-4">To cancel your subscription:</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>
              Log in to <a href="https://app.color-analysis.pro" target="_blank" rel="noopener noreferrer" className="text-brand-plum underline hover:text-brand-plum/80">app.color-analysis.pro</a> using your email address.
            </li>
            <li>
              After logging in, go to the <b>My Style</b> tab and scroll down to the <b>Change Settings</b> button.
            </li>
            <li>
              There you&apos;ll find a link to the Stripe customer portal, where you can manage or cancel your subscription.
            </li>
          </ol>
          <p className="mb-2">You can also request cancellation by emailing us at <a href="mailto:support@color-analysis.pro" className="text-brand-plum underline hover:text-brand-plum/80">support@color-analysis.pro</a>.</p>
          <p className="mb-4">Or, submit a request through our <Link href="/contact-us" className="text-brand-plum underline hover:text-brand-plum/80">contact form</Link>.</p>
          <p className="mb-4">When you cancel a subscription you&apos;ll still be able to use your subscription for the time you&apos;ve already paid.</p>
          <p className="mb-2">For example, if you buy a one-year subscription on January 1st for $35 and decide to cancel your subscription on July 1st:</p>
          <ul className="list-disc pl-6 mb-2">
            <li>You&apos;ll have access to the subscription until December 31st.</li>
            <li>You won&apos;t be charged another yearly subscription of $35 the following January 1st.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
} 