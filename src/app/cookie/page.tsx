"use client";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { useRouter } from 'next/navigation';

export default function CookiePolicyPage() {
  const router = useRouter();
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
          <h1 className="text-3xl md:text-4xl font-bold text-white">Cookie Policy</h1>
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-block mb-4 text-brand-plum hover:underline"
          >
            &larr; Back
          </button>
          <h2 className="text-xl font-bold mb-4">Cookie Policy</h2>
          <p className="mb-4">This Cookie Policy outlines the use of cookies and similar technologies on our website ColorAnalysis&apos;s Website (herein referred to as &quot;ColorAnalysis&quot;). It details how cookies are used to enhance your experience and improve our services.</p>
          <p className="mb-4">ColorAnalysis oversees the collection of information via cookies on your device. For any inquiries or further information, please contact us via our <Link href="/contact-us" className="text-brand-plum underline hover:text-brand-plum/80">contact page</Link>.</p>
          <p className="mb-4">This Cookie Policy should be considered in conjunction with our <Link href="/privacy" className="text-brand-plum underline hover:text-brand-plum/80">Privacy Policy</Link> and <Link href="/terms" className="text-brand-plum underline hover:text-brand-plum/80">Terms and Conditions</Link>.</p>
          <p className="mb-4">By interacting with ColorAnalysis&apos;s website, you consent to our use of cookies in accordance with this Cookie Policy.</p>

          <h3 className="text-lg font-bold mt-8 mb-2">General Information</h3>
          <p className="mb-4">If you prefer not to allow cookies on your device, you have the option to adjust your internet browser&apos;s settings to reject some or all cookies and to alert you when a cookie is set. However, doing so may affect your ability to use or access certain parts of the website. For specifics on adjusting your browser settings, refer to the browser&apos;s help, tool, or edit sections.</p>
          <p className="mb-4">Should you wish to delete cookies that are already stored on your device, this can be done manually at any time. Keep in mind, that this will not prevent ColorAnalysis from setting new cookies on your device unless you adjust your browser settings accordingly.</p>
          <p className="mb-4">For managing and blocking cookies, consult the below guides depending on your browser:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-brand-plum underline hover:text-brand-plum/80">Microsoft Edge</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-brand-plum underline hover:text-brand-plum/80">Firefox</a></li>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-plum underline hover:text-brand-plum/80">Chrome</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-plum underline hover:text-brand-plum/80">Safari</a></li>
            <li><a href="https://help.opera.com/en/latest/web-preferences/" target="_blank" rel="noopener noreferrer" className="text-brand-plum underline hover:text-brand-plum/80">Opera</a></li>
          </ul>
          <p className="mb-4">Mobile users can manage cookies through their device settings:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>For Android, refer to <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-brand-plum underline hover:text-brand-plum/80">Google&apos;s Support</a>.</li>
            <li>For iOS, visit <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-brand-plum underline hover:text-brand-plum/80">Apple Support</a>.</li>
          </ul>

          <h3 className="text-lg font-bold mt-8 mb-2">Cookies Utilized by ColorAnalysis</h3>
          <p className="mb-4">ColorAnalysis uses several cookies essential for website functionality, security, performance analytics, and enhancing user experience including, but not limited to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><b>Type:</b> Essential/Security/Analytics</li>
            <li><b>Duration:</b> Session/Persistent</li>
            <li><b>Purpose:</b> Ensure website functionality, security, and gather analytics to improve our services.</li>
          </ul>
          <p className="mb-4">We engage Google Analytics to better understand how you interact with our site and to improve your user experience. For more detailed information, review <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-plum underline hover:text-brand-plum/80">Google&apos;s Privacy Policy</a>.</p>

          <h3 className="text-lg font-bold mt-8 mb-2">Contact Us</h3>
          <p className="mb-4">For any questions or if you seek clarification regarding our Cookie Policy or how we handle your data, kindly reach out via our <Link href="/contact-us" className="text-brand-plum underline hover:text-brand-plum/80">contact page</Link>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 