"use client";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { useRouter } from 'next/navigation';

const toc = [
  { id: 'definitions', label: '1. Definitions' },
  { id: 'welcome', label: '2. Welcome and Introduction' },
  { id: 'disclaimers', label: '3. IQ Testing and Training Disclaimers' },
  { id: 'acceptance', label: '4. Acceptance of Terms' },
  { id: 'account', label: '5. Account Eligibility and Security' },
  { id: 'subscription', label: '6. Subscription Services' },
  { id: 'refund', label: '7. Refund Policy' },
  { id: 'ip', label: '8. Intellectual Property Rights' },
  { id: 'user-content', label: '9. User Content and Rights' },
  { id: 'sla', label: '10. Service Level Agreement (SLA)' },
  { id: 'technical', label: '11. Technical Requirements' },
  { id: 'support', label: '12. Customer Support and Complaints' },
  { id: 'liability', label: '13. Limitation of Liability' },
  { id: 'dispute', label: '14. Dispute Resolution' },
  { id: 'modifications', label: '15. Service Modifications' },
  { id: 'termination', label: '16. Account Termination' },
  { id: 'legal', label: '17. Legal Information' },
];

export default function TermsPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white">Terms &amp; Conditions</h1>
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-gray-600 hover:text-brand-plum flex items-center mb-6 text-sm font-medium"
          >
            &larr; Back
          </button>
          <h2 className="text-2xl font-bold mb-4">TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-6 mb-8 space-y-1">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-brand-plum underline hover:text-brand-plum/80">{item.label}</a>
              </li>
            ))}
          </ol>

          {/* 1. Definitions */}
          <section id="definitions" className="mb-8">
            <h3 className="text-xl font-bold mb-2">1. DEFINITIONS</h3>
            <h4 className="font-semibold mt-4 mb-1">1.1 Service and Platform Terms</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>ColorAnalysis: Operating as ColorAnalysis (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)</li>
              <li>Service: All features, functionalities, programs, and content available through ColorAnalysis</li>
              <li>Platform: Our website, applications, and related services accessible via any device</li>
              <li>User: Any individual or entity accessing or using our services (&quot;you&quot; or &quot;your&quot;)</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">1.2 Testing and Training Terms</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Color Analysis Test: An online assessment designed to evaluate your natural features, such as skin tone, hair, and eye color, to recommend a personalized color palette.</li>
              <li>Personal Color Palette: A selection of colors uniquely matched to your individual characteristics, designed to enhance your appearance and support confident style choices.</li>
              <li>Style Recommendations: Suggestions for clothing, makeup, and accessories based on your personalized palette and analysis results, aimed at helping you look and feel your best.</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">1.3 Subscription Terms</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Subscription: Recurring paid access to premium features</li>
              <li>Trial Period: Initial 7-day access period available for $1.00</li>
              <li>Standard Subscription: Recurring paid access following trial period</li>
              <li>Billing Cycle: The frequency of subscription charges (weekly, monthly, or quarterly)</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">1.4 Security Terms</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Authentication Code: Time-sensitive, single-use verification code for account access</li>
              <li>Account Security: Methods and procedures for protecting user access</li>
              <li>Access Credentials: Information used to verify user identity</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">1.5 Technical Terms</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Force Majeure: Circumstances beyond reasonable control preventing or delaying service delivery, including:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Natural disasters (earthquakes, floods, storms)</li>
                <li>Government actions or regulations</li>
                <li>War, terrorism, or civil unrest</li>
                <li>Cyber attacks or security incidents</li>
                <li>Network or infrastructure failures</li>
                <li>Pandemics or health emergencies</li>
                <li>Internet service provider outages</li>
                <li>Power grid failures</li>
                <li>Other circumstances beyond our reasonable control</li>
              </ul>
            </ul>
          </section>

          {/* 2. Welcome and Introduction */}
          <section id="welcome" className="mb-8">
            <h3 className="text-xl font-bold mb-2">2. WELCOME AND INTRODUCTION</h3>
            <h4 className="font-semibold mt-4 mb-1">2.1 Platform Overview</h4>
            <p className="mb-2">Welcome to ColorAnalysis! Our digital platform provides personalized color analysis and style recommendations, helping you discover your best colors for clothing, makeup, and accessories—all tailored to your unique features.</p>
            <h4 className="font-semibold mt-4 mb-1">2.2 Agreement to Terms</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>You agree to these terms and conditions</li>
              <li>You accept our <Link href="/privacy" className="text-brand-plum underline hover:text-brand-plum/80">Privacy Policy</Link></li>
              <li>You consent to our data practices</li>
              <li>You acknowledge our service limitations</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">2.3 Access Methods</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Web browsers</li>
              <li>Mobile devices</li>
              <li>Tablet computers</li>
              <li>Desktop applications</li>
              <li>Third-party integrations</li>
              <li>Any future access methods</li>
            </ul>
          </section>

          {/* 3. Color Analysis Disclaimers */}
          <section id="disclaimers" className="mb-8">
            <h3 className="text-xl font-bold mb-2">3. COLOR ANALYSIS DISCLAIMERS</h3>
            <h4 className="font-semibold mt-4 mb-1">3.1 Informational and Educational Purpose</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>ColorAnalysis provides color analysis tests and style recommendations for informational and educational purposes only.</li>
              <li>Our services are not a substitute for professional medical, dermatological, or psychological assessment.</li>
              <li>Analysis results and recommendations are intended for personal style guidance only.</li>
              <li>Results should not be used for medical, diagnostic, or therapeutic purposes.</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">3.2 Service Limitations</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Results are based on the information and images you provide.</li>
              <li>Results are influenced by factors such as lighting, camera quality, device display settings, and the accuracy of submitted information.</li>
              <li>Results may vary from user to user and are subject to interpretation.</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">3.3 No Professional Advice</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Our services do not replace consultation with qualified professionals.</li>
              <li>We do not provide medical, dermatological, or psychological advice.</li>
              <li>For health, dermatology, or mental health concerns, consult a licensed specialist.</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">3.4 User Responsibility</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>All use is at your own risk and discretion.</li>
              <li>No guarantees of specific results, satisfaction, or improvement are made.</li>
              <li>We are not liable for decisions made based on analysis results, style choices, purchases, or emotional responses to your results.</li>
            </ul>
          </section>

          {/* 4. Acceptance of Terms */}
          <section id="acceptance" className="mb-8">
            <h3 className="text-xl font-bold mb-2">4. ACCEPTANCE OF TERMS</h3>
            <h4 className="font-semibold mt-4 mb-1">4.1 Agreement to Terms</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>By accessing or using ColorAnalysis&apos;s website and services, you acknowledge that you have read, understood, and agree to be bound by these terms.</li>
              <li>If you do not agree with any part of these terms, you must not use our services.</li>
              <li>Your continued use of our services following any changes constitutes acceptance of those changes.</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">4.2 Modifications to Terms</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>We reserve the right to modify these terms at any time.</li>
              <li>We will notify users of material changes via email.</li>
              <li>Changes become effective:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>For new users: Immediately upon posting</li>
                <li>For existing users: 30 days after notification</li>
              </ul>
              <li>Your continued use after changes indicates acceptance of updated terms.</li>
            </ul>
          </section>

          {/* 5. Account Eligibility and Security */}
          <section id="account" className="mb-8">
            <h3 className="text-xl font-bold mb-2">5. ACCOUNT ELIGIBILITY AND SECURITY</h3>
            <h4 className="font-semibold mt-4 mb-1">5.1 Age Requirements</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Minimum age: 16 years</li>
              <li>Legal age in jurisdiction</li>
              <li>Age verification may be required</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">5.2 Account Creation</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>One account per user</li>
              <li>Valid email required</li>
              <li>Accurate information needed</li>
              <li>Regular updates required</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">5.3 Security Requirements</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Secure email management</li>
              <li>Protection of access codes</li>
              <li>Unauthorized access reporting</li>
              <li>Information accuracy maintenance</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">5.4 Account Protection</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Passwordless authentication</li>
              <li>Single-use verification codes</li>
              <li>Time-limited access</li>
              <li>Session security measures</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">5.5 Prohibited Activities</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Multiple accounts</li>
              <li>Credential sharing</li>
              <li>False information</li>
              <li>Unauthorized access</li>
              <li>Security bypasses</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">5.6 Organizational Usage</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Proper authority required</li>
              <li>Authorization verification</li>
              <li>Usage restrictions</li>
              <li>Authority changes reporting</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">5.7 Data Retention Policy</h4>
            <p className="mb-2">To ensure security and efficiency, we automatically remove inactive user accounts after 365 days of inactivity.</p>
            <ul className="list-disc pl-6 mb-2">
              <li>If a user has had at least one conversation in the past 365 days, their data remains active until their most recent conversation exceeds the 365-day limit.</li>
              <li>If a user has not interacted with our platform for over 365 days, their account and all associated data will be permanently deleted.</li>
            </ul>
            <p className="mb-2">Regular users remain active, but accounts inactive for over 365 days will be automatically removed. This policy ensures a secure and efficient platform. To keep your account active, engage with our platform periodically. For any questions, please contact our support team. Thank you for being a valued user!</p>
          </section>

          {/* 6. Subscription Services */}
          <section id="subscription" className="mb-8">
            <h3 className="text-xl font-bold mb-2">6. SUBSCRIPTION SERVICES</h3>
            <h4 className="font-semibold mt-4 mb-1">6.1 Subscription Options</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>7-day trial period</li>
              <li>One-time charge of $1.00</li>
              <li>Full access to all premium features</li>
              <li>Converts to selected plan rate after trial</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">Standard Subscription Pricing</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Begins after the trial period ends.</li>
              <li>Charged at the rate selected during signup.</li>
              <li>Regional pricing applies (see Section 6.2).</li>
              <li>No additional trial periods available.</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">Price Transition</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Trial price ($1.00) applies for the first 7 days only.</li>
              <li>Selected subscription rate begins immediately after the trial.</li>
              <li>First standard charge occurs on trial expiration.</li>
              <li>Users are notified of the exact pricing before the trial ends.</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">Example</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>If you select a $14.99/month plan with a trial:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Day 1-7: $1.00 total (trial period)</li>
                <li>Day 8 onwards: $14.99/month (standard rate)</li>
                <li>Option to cancel before standard rate begins</li>
              </ul>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">6.2 Standard Subscription Plans</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Base pricing in USD*:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Weekly Plans:</li>
                <ul className="list-disc pl-14 mb-2">
                  <li>Basic: $9.99/week</li>
                  <li>Standard: $11.99/week</li>
                  <li>Plus: $12.99/week</li>
                  <li>Premium: $14.99/week</li>
                </ul>
                <li>Monthly Plans:</li>
                <ul className="list-disc pl-14 mb-2">
                  <li>Starter: $14.99/month</li>
                  <li>Plus: $29.99/month</li>
                  <li>Pro: $39.99/month</li>
                  <li>Premium: $59.99/month</li>
                  <li>Ultimate: $69.99/month</li>
                </ul>
                <li>Quarterly Plan:</li>
                <ul className="list-disc pl-14 mb-2">
                  <li>Premium Quarterly: $29.99/quarter</li>
                </ul>
              </ul>
              <li>*Regional Pricing:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Prices may be displayed in your local currency.</li>
                <li>Your exact price will be clearly shown during sign-up process.</li>
                <li>Final rates vary based on:</li>
                <ul className="list-disc pl-14 mb-2">
                  <li>Local sales tax and VAT requirements</li>
                  <li>Regional pricing adjustments</li>
                  <li>Currency conversion rates</li>
                  <li>Geographic market conditions</li>
                  <li>Purchasing power parity</li>
                  <li>Current promotions</li>
                  <li>Seasonal offerings</li>
                </ul>
                <li>You will be charged the exact amount shown during your sign-up.</li>
                <li>The price displayed at sign-up will be your guaranteed rate.</li>
                <li>No hidden fees or additional charges will be added after sign-up.</li>
                <li>Any future changes to your subscription rate will be communicated in advance.</li>
                <li>Note: While base prices are listed in USD above, you will always see your actual local price before completing any purchase. The price shown during your sign-up process is the exact amount you will be charged, with all applicable regional factors already included.</li>
              </ul>
              <li>Trial Payment Processing:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Your trial payment of $1 may be processed as two separate charges of $0.50 each.</li>
                <li>The first payment activates your trial subscription.</li>
                <li>The second payment confirms that your payment method on file supports recurring charges.</li>
                <li>We process this verification because we are providing you with a 7-day trial at a nominal price to enable you to try our services, and we want to ensure your payment method is valid for future billing.</li>
                <li>This split payment processing may be applied based on your region, location, or payment method.</li>
                <li>The total amount charged remains $1 regardless of whether one or two transactions are processed.</li>
              </ul>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">6.3 Payment and Billing</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>PCI-DSS compliant payment processing</li>
              <li>Major credit/debit cards accepted</li>
              <li>Select regional payment methods supported</li>
              <li>Automatic billing on subscription renewal</li>
              <li>Price lock guarantee for existing subscribers</li>
              <li>Pricing changes only affect new subscriptions</li>
              <li>Multiple retry attempts over 30 days</li>
              <li>Account suspension after 30 days of failed payments</li>
              <li>Bank fees for declined payments are customer responsibility</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">6.4 Subscription Management</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Personal Portal available at <a href="https://app.color-analysis.pro" className="text-brand-plum underline hover:text-brand-plum/80" target="_blank" rel="noopener noreferrer">app.color-analysis.pro</a></li>
              <li>Customer support email: <a href="mailto:support@color-analysis.pro" className="text-brand-plum underline hover:text-brand-plum/80">support@color-analysis.pro</a></li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">Post-Cancellation Terms</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Service continues until current period ends.</li>
              <li>No automatic renewals after cancellation.</li>
              <li>No partial refunds for unused time.</li>
              <li>Account reactivation is available at current rates.</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">Important Notes</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>All subscriptions auto-renew until canceled.</li>
              <li>Cancel anytime before renewal to avoid charges.</li>
              <li>Subscription features may vary by region.</li>
              <li>Some features may be available as one-time purchases ($4.99-$14.99).</li>
            </ul>
          </section>

          {/* 7. Refund Policy */}
          <section id="refund" className="mb-8">
            <h3 className="text-xl font-bold mb-2">7. REFUND POLICY</h3>
            <h4 className="font-semibold mt-4 mb-1">7.1 Trial Period Refunds ($1.00)</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Eligible for full refund within 30 days of purchase if:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>First-time trial user</li>
                <li>No previous trial refunds on any account</li>
                <li>No terms of service violations</li>
                <li>Request submitted through official channels</li>
              </ul>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">7.2 Regular Subscription Refunds</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Not eligible for refunds except in these specific cases:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Service Unavailability: Documented downtime exceeding 24 consecutive hours. Not caused by scheduled maintenance or force majeure events.</li>
                <li>Technical Issues: Platform bugs preventing core feature access. Must be reported within 30 days of the charge and verified by our technical team.</li>
                <li>Billing Errors: Duplicate charges, incorrect amount charged, unauthorized transactions.</li>
                <li>Legal Requirements: As required by applicable laws in your jurisdiction.</li>
              </ul>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">7.3 Non-Refundable Cases</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Partial/unused subscription time after cancellation</li>
              <li>Plan downgrades</li>
              <li>Feature unavailability during maintenance</li>
              <li>Change of mind or no longer needing service</li>
              <li>Failure to cancel before renewal</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">7.4 Refund Process</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Submit a request through: Email: <a href="mailto:support@color-analysis.pro" className="text-brand-plum underline hover:text-brand-plum/80">support@color-analysis.pro</a></li>
              <li>Include: Account email, transaction details, reason for refund, supporting documentation</li>
              <li>Processing time: 3 business days</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">7.5 Currency Processing</h4>
            <h5 className="font-semibold mt-2 mb-1">7.5.1 Supported Currencies</h5>
            <ul className="list-disc pl-6 mb-2">
              <li>We process payments in local currency for:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>United States (USD)</li>
                <li>European Union (EUR)</li>
                <li>United Kingdom (GBP)</li>
                <li>Canada (CAD)</li>
                <li>Australia (AUD)</li>
              </ul>
              <li>For all other regions, charges will be processed in USD.</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">7.5.2 Currency Conversion</h5>
            <ul className="list-disc pl-6 mb-2">
              <li>Exchange rates are determined by your bank or card issuer.</li>
              <li>Any currency conversion fees charged by your bank are not refundable.</li>
              <li>You may see currency conversion charges on your statement from your bank.</li>
              <li>These conversion charges are separate from our service charges and are not controlled by ColorAnalysis.</li>
            </ul>
            <span className="block text-xs text-gray-500">Note: While we don&apos;t charge additional fees for currency conversion, your bank or card issuer may apply their own conversion fees or charges. Please check with your financial institution for details about their international transaction policies.</span>
          </section>

          {/* 8. Intellectual Property Rights */}
          <section id="ip" className="mb-8">
            <h3 className="text-xl font-bold mb-2">8. INTELLECTUAL PROPERTY RIGHTS</h3>
            <h4 className="font-semibold mt-4 mb-1">8.1 Ownership Rights</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>All platform content and functionality are owned by ColorAnalysis.</li>
              <li>Protected by international copyright laws.</li>
              <li>All trademarks and service marks are proprietary.</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">8.2 Licensed Content</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Personal, non-commercial use only</li>
              <li>Non-transferable license</li>
              <li>No modification permitted</li>
              <li>No source code extraction</li>
              <li>No redistribution allowed</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">8.3 Prohibited Actions</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Reverse engineering</li>
              <li>Content reproduction</li>
              <li>Copyright notice removal</li>
              <li>Derivative works creation</li>
              <li>Unauthorized distribution</li>
            </ul>
          </section>

          {/* 9. User Content and Rights */}
          <section id="user-content" className="mb-8">
            <h3 className="text-xl font-bold mb-2">9. USER CONTENT AND RIGHTS</h3>
            <h4 className="font-semibold mt-4 mb-1">9.1 User Ownership</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Users retain full ownership of submitted content</li>
              <li>Includes profile information, responses, and custom content</li>
              <li>Personal data remains user property</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">9.2 License to ColorAnalysis</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Users grant ColorAnalysis:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Non-exclusive license</li>
                <li>Worldwide usage rights</li>
                <li>Royalty-free terms</li>
                <li>Perpetual duration</li>
                <li>Transfer rights</li>
                <li>Sublicense permission</li>
              </ul>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">9.3 Content Usage Rights</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>ColorAnalysis may:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Display user content</li>
                <li>Optimize for technical purposes</li>
                <li>Analyze for improvements</li>
                <li>Use in anonymized research</li>
                <li>Include in statistics</li>
              </ul>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">9.4 Content Restrictions</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Users must not submit:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Copyrighted material</li>
                <li>Malicious code</li>
                <li>Harmful content</li>
                <li>Inappropriate material</li>
                <li>Deceptive information</li>
              </ul>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">9.5 Quality Standards</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>All content must meet:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Technical requirements</li>
                <li>Format specifications</li>
                <li>Quality guidelines</li>
                <li>Safety standards</li>
              </ul>
            </ul>
          </section>

          {/* 10. Service Level Agreement (SLA) */}
          <section id="sla" className="mb-8">
            <h3 className="text-xl font-bold mb-2">10. SERVICE LEVEL AGREEMENT (SLA)</h3>
            <h4 className="font-semibold mt-4 mb-1">10.1 Service Availability</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>97% annual uptime guarantee</li>
              <li>Maintenance exclusions</li>
              <li>Subject to Force Majeure events (as defined in Section 1.5)</li>
              <li>Performance monitoring</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">10.2 Change Categories</h4>
            <span className="block font-semibold mb-1">A. Standard Changes</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Feature updates</li>
              <li>Interface improvements</li>
              <li>Performance optimization</li>
              <li>15-day notice required</li>
              <li>User communication provided</li>
            </ul>
            <span className="block font-semibold mb-1">B. Emergency Changes</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Critical security updates</li>
              <li>Legal compliance requirements</li>
              <li>System stability issues</li>
              <li>Immediate implementation</li>
              <li>Post-change notification</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">10.3 Maintenance Windows</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Scheduled: 24-hour notice</li>
              <li>Emergency: Immediate when required</li>
              <li>Duration: Maximum 4 hours</li>
              <li>Timing: Low-usage periods</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">10.4 Service Credits</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>95-97% uptime: 3-day credit</li>
              <li>90-95% uptime: 7-day credit</li>
              <li>Below 90%: 14-day credit</li>
            </ul>
          </section>

          {/* 11. Technical Requirements */}
          <section id="technical" className="mb-8">
            <h3 className="text-xl font-bold mb-2">11. TECHNICAL REQUIREMENTS</h3>
            <h4 className="font-semibold mt-4 mb-1">11.1 Browser Support</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Google Chrome (version 90 or later)</li>
              <li>Mozilla Firefox (version 88 or later)</li>
              <li>Safari (version 14 or later)</li>
              <li>Microsoft Edge (Chromium-based version 90 or later)</li>
            </ul>
            <span className="block font-semibold mb-1">Update Requirements:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Security updates: Required within 60 days of release.</li>
              <li>Security patches: Mandatory installation.</li>
              <li>Legacy version support: 6 months.</li>
              <li>Feature deprecation notice: 30 days advance warning</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">11.2 Display Requirements</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Minimum screen resolution: 320x480 pixels</li>
              <li>Recommended resolution: 768x1024 pixels</li>
              <li>Responsive design support</li>
              <li>Automatic interface adaptation</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">11.3 Mobile Device Requirements</h4>
            <span className="block font-semibold mb-1">iOS Devices:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>iOS version 13.0 or later</li>
              <li>Compatible devices: iPhone 6s and newer, iPad Air 2 and newer, iPod Touch 7th generation and newer</li>
              <li>Regular security updates required</li>
              <li>Automatic updates recommended</li>
            </ul>
            <span className="block font-semibold mb-1">Android Devices:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Android version 8.0 (Oreo) or later</li>
              <li>Hardware acceleration support required</li>
              <li>Security patches mandatory</li>
              <li>System updates recommended</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">11.4 Internet Connection Requirements</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Minimum download speed: 1 Mbps</li>
              <li>Recommended speed: 5 Mbps or higher</li>
              <li>Stable connection required</li>
              <li>Maximum latency: 300ms</li>
              <li>Minimal packet loss tolerance</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">11.5 System Resources</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>RAM: 4GB (8GB recommended)</li>
              <li>Storage: 1GB available space</li>
              <li>Processor: Multi-core, 2GHz or faster</li>
              <li>Operating System: Latest security patches installed</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">11.6 Additional Requirements</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>JavaScript enabled</li>
              <li>Cookies enabled</li>
              <li>Modern web standards support</li>
              <li>Secure connection capability (HTTPS)</li>
              <li>Local storage access</li>
            </ul>
          </section>

          {/* 12. Customer Support and Complaints */}
          <section id="support" className="mb-8">
            <h3 className="text-xl font-bold mb-2">12. CUSTOMER SUPPORT AND COMPLAINTS</h3>
            <h4 className="font-semibold mt-4 mb-1">12.1 Support Availability</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Customer Support: Available 24/7/365</li>
              <li>Average response time: 24 hours</li>
              <li>All inquiries tracked with unique ticket numbers.</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">12.2 Support Channels</h4>
            <span className="block font-semibold mb-1">Primary Support Methods:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Email: <a href="mailto:support@color-analysis.pro" className="text-brand-plum underline hover:text-brand-plum/80">support@color-analysis.pro</a></li>
            </ul>
            <span className="block font-semibold mb-1">Self-Service Options:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Account management</li>
              <li>Subscription changes</li>
              <li>Troubleshooting guides</li>
              <li>FAQs and documentation</li>
              <li>Immediate automated assistance</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">12.3 Response Times</h4>
            <span className="block font-semibold mb-1">General Support:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Automatic acknowledgment: Immediate</li>
              <li>Initial response: Within 24 hours</li>
              <li>Average response time: 12 hours</li>
              <li>Resolution target: 3-5 business days</li>
            </ul>
            <span className="block font-semibold mb-1">Legal Matters:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Acknowledgment: 1-3 business days</li>
              <li>Resolution: Within 15 business days</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">12.4 Complaint Resolution Process</h4>
            <span className="block font-semibold mb-1">Initial Submission Requirements:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Full name and account email</li>
              <li>Detailed issue description</li>
              <li>Supporting documentation</li>
              <li>Timeline of events</li>
              <li>Previous communication references</li>
              <li>Submit to: <a href="mailto:info@color-analysis.pro" className="text-brand-plum underline hover:text-brand-plum/80">info@color-analysis.pro</a></li>
            </ul>
            <span className="block font-semibold mb-1">Resolution Process:</span>
            <span className="block mb-1">Acknowledgment Phase (24 hours):</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Automated receipt confirmation</li>
              <li>Case manager assignment</li>
              <li>Severity assessment</li>
              <li>Information verification</li>
            </ul>
            <span className="block mb-1">Investigation Phase (3-5 business days):</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Account history review</li>
              <li>Technical analysis</li>
              <li>Departmental consultation</li>
              <li>Solution development</li>
            </ul>
            <span className="block mb-1">Resolution Phase (3-5 business days):</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Solution implementation</li>
              <li>Effectiveness verification</li>
              <li>Customer confirmation</li>
              <li>Documentation completion</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">12.5 Escalation Procedure</h4>
            <span className="block mb-1">First-Level Escalation:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Email: <a href="mailto:info@color-analysis.pro" className="text-brand-plum underline hover:text-brand-plum/80">info@color-analysis.pro</a></li>
              <li>Include reference number</li>
              <li>Response within 5 business days</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">12.6 Quality Assurance</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>All support interactions are:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Tracked in secure system</li>
                <li>Reviewed for improvement</li>
                <li>Analyzed for patterns</li>
                <li>Used for staff training</li>
                <li>Monitored for compliance</li>
              </ul>
            </ul>
          </section>

          {/* 13. Limitation of Liability */}
          <section id="liability" className="mb-8">
            <h3 className="text-xl font-bold mb-2">13. LIMITATION OF LIABILITY</h3>
            <h4 className="font-semibold mt-4 mb-1">Scope of Limitations</h4>
            <p className="mb-2">While we strive to provide reliable and high-quality services, ColorAnalysis&apos;s liability is strictly limited under these terms. Our maximum aggregate liability for any claims arising from or related to our services shall not exceed the amount paid by you for the services during the twelve (12) months preceding the claim. This limitation applies regardless of the form of action, whether in contract, negligence, strict liability, or other legal theory.</p>
            <h4 className="font-semibold mt-4 mb-1">Excluded Damages</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Financial Losses:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Lost profits or revenue</li>
                <li>Business interruption costs</li>
                <li>Lost business opportunities</li>
                <li>Lost or damaged data</li>
                <li>Cost of substitute services</li>
                <li>Investment or business decisions based on our services</li>
              </ul>
              <li>Indirect Damages:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Consequential damages</li>
                <li>Incidental damages</li>
                <li>Punitive damages</li>
                <li>Special damages</li>
                <li>Emotional distress</li>
                <li>Reputational damage</li>
              </ul>
              <li>Technical Issues:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Temporary service interruptions</li>
                <li>Data transmission errors</li>
                <li>Third-party software failures</li>
                <li>Device compatibility issues</li>
                <li>Internet connectivity problems</li>
              </ul>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">Service-Related Limitations</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Accuracy of Color Analysis color analysis results</li>
              <li>Effectiveness of </li>
              <li>Achievement of specific cognitive improvements</li>
              <li>Personal or professional outcomes</li>
              <li>Decision-making based on our assessments</li>
            </ul>
            <p className="mb-2">Force Majeure: We are not liable for failures or delays resulting from Force Majeure events (as defined in Section 1.5).</p>
            <h4 className="font-semibold mt-4 mb-1">Indemnification Obligations</h4>
            <span className="block font-semibold mb-1">User Responsibilities:</span>
            <p className="mb-2">You agree to indemnify, defend, and hold harmless ColorAnalysis, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising from:</p>
            <ul className="list-disc pl-6 mb-2">
              <li>Service Usage:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Violation of these terms</li>
                <li>Unauthorized account access</li>
                <li>Misuse of services</li>
                <li>Content submitted or shared</li>
                <li>Interaction with other users</li>
              </ul>
              <li>Legal Compliance:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Violation of applicable laws</li>
                <li>Intellectual property infringement</li>
                <li>Privacy rights violations</li>
                <li>Data protection breaches</li>
                <li>Regulatory non-compliance</li>
              </ul>
              <li>Third-Party Claims:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Disputes with other users</li>
                <li>Claims from affected parties</li>
                <li>Regulatory investigations</li>
                <li>Legal proceedings</li>
                <li>Administrative actions</li>
              </ul>
            </ul>
          </section>

          {/* 14. Dispute Resolution */}
          <section id="dispute" className="mb-8">
            <h3 className="text-xl font-bold mb-2">14. DISPUTE RESOLUTION</h3>
            <h4 className="font-semibold mt-4 mb-1">Governing Law and Jurisdiction</h4>
            <p className="mb-2">These terms are governed by and construed in accordance with the laws of the United States, specifically the State of Delaware. Any legal action or proceeding arising out of or relating to these terms shall be exclusively filed in the state or federal courts located in Delaware, and you hereby consent and submit to the personal jurisdiction of such courts.</p>
            <h4 className="font-semibold mt-4 mb-1">14.1 Mandatory Arbitration Process</h4>
            <span className="block font-semibold mb-1">Initial Dispute Resolution:</span>
            <p className="mb-2">Before initiating any formal legal proceedings, we encourage users to contact us directly to resolve any disputes informally. We will make good-faith efforts to resolve any issues through direct communication within 30 days of notification.</p>
            <span className="block font-semibold mb-1">Formal Arbitration Requirements:</span>
            <p className="mb-2">If informal resolution is unsuccessful, all disputes shall be resolved through binding arbitration:</p>
            <h5 className="font-semibold mt-2 mb-1">14.1.1 Arbitration Rules</h5>
            <ul className="list-disc pl-6 mb-2">
              <li>Conducted by the Delaware Court of Chancery</li>
              <li>Following Commercial Arbitration Rules</li>
              <li>Administered in English language</li>
              <li>Single arbitrator appointment</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">14.1.2 Arbitration Process</h5>
            <ul className="list-disc pl-6 mb-2">
              <li>Written notice of dispute required</li>
              <li>Detailed claim description</li>
              <li>Supporting documentation</li>
              <li>Proposed resolution</li>
              <li>60-day resolution window</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">14.1.3 Arbitration Proceedings</h5>
            <ul className="list-disc pl-6 mb-2">
              <li>Virtual hearings</li>
              <li>Document submission requirements</li>
              <li>Witness testimony if necessary</li>
              <li>Expert evidence when relevant</li>
              <li>Reasoned written decision</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">14.2 Cost Allocation</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Filing fees shared equally</li>
              <li>Each party bears own legal costs</li>
              <li>Arbitrator fees split unless otherwise awarded</li>
              <li>Travel expenses responsibility of each party</li>
              <li>Document production costs borne by producing party</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">14.3 Class Action Waiver</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>By agreeing to these terms, you explicitly waive:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Right to participate in class actions</li>
                <li>Right to class-wide arbitration</li>
                <li>Consolidated claims procedures</li>
                <li>Representative actions</li>
                <li>Private attorney general actions</li>
              </ul>
            </ul>
            <span className="block font-semibold mb-1">This waiver means:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>All disputes must be resolved individually</li>
              <li>No joining or consolidating claims</li>
              <li>No class-wide relief</li>
              <li>Individual remedies only</li>
              <li>Separate proceedings for each claim</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">14.5 Exceptions to Arbitration</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>The following matters are exempt from mandatory arbitration:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Intellectual Property Disputes: Copyright infringement, violations, patent disputes, trade secret misappropriation</li>
                <li>Small Claims Court: Claims within jurisdictional limits, local venue requirements, individual capacity only, monetary relief only</li>
                <li>Emergency Relief: Temporary restraining orders, preliminary injunctions, other urgent equitable relief, immediate harm prevention</li>
                <li>Time Limitations: All claims must be brought within: Six months from incident date, discovery of claim basis, reasonable discovery time, statutory limitations, regulatory requirements</li>
              </ul>
            </ul>
          </section>

          {/* 15. Service Modifications */}
          <section id="modifications" className="mb-8">
            <h3 className="text-xl font-bold mb-2">15. SERVICE MODIFICATIONS</h3>
            <h4 className="font-semibold mt-4 mb-1">15.1 Modification Rights</h4>
            <p className="mb-2">ColorAnalysis reserves the right to modify, suspend, or discontinue any aspect of our services, with or without notice, subject to the notice requirements detailed below.</p>
            <h4 className="font-semibold mt-4 mb-1">15.2 Types of Changes</h4>
            <span className="block font-semibold mb-1">A. Platform Updates</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Addition or removal of features</li>
              <li>User interface improvements</li>
              <li>Performance optimizations</li>
              <li>Security enhancements</li>
              <li>Technical requirement updates</li>
              <li>Infrastructure modifications</li>
            </ul>
            <span className="block font-semibold mb-1">B. Content Changes</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Training program modifications</li>
              <li>Assessment tool updates</li>
              <li>Educational material revisions</li>
              <li>Resource availability adjustments</li>
              <li>Interactive content changes</li>
              <li>Curriculum updates</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">15.3 Notice Requirements</h4>
            <span className="block font-semibold mb-1">A. Standard Changes</span>
            <ul className="list-disc pl-6 mb-2">
              <li>For material changes to the service, we will provide:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>15 days advance notice via email</li>
                <li>Documentation updates</li>
                <li>Migration guidance when applicable</li>
                <li>Clear timeline for implementation</li>
                <li>Instructions for any required user actions</li>
              </ul>
            </ul>
            <span className="block font-semibold mb-1">B. Emergency Changes</span>
            <ul className="list-disc pl-6 mb-2">
              <li>We may implement immediate changes without a notice for:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Force Majeure events (as defined in Section 1.5)</li>
                <li>Critical security updates</li>
                <li>Legal compliance requirements</li>
                <li>System stability issues</li>
                <li>Critical bug fixes</li>
                <li>Emergency maintenance</li>
                <li>Infrastructure security</li>
              </ul>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">15.4 Change Implementation</h4>
            <span className="block font-semibold mb-1">A. Material Changes</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Require advance notice as specified above</li>
              <li>Include transition period when possible</li>
              <li>Provide user guidance and support</li>
              <li>May offer opt-out options when applicable</li>
            </ul>
            <span className="block font-semibold mb-1">B. Non-Material Changes</span>
            <ul className="list-disc pl-6 mb-2">
              <li>May be implemented without a notice</li>
              <li>Include but not limited to:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Minor bug fixes</li>
                <li>Performance improvements</li>
                <li>Content updates</li>
                <li>UI refinements</li>
                <li>Documentation updates</li>
              </ul>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">15.5 User Rights</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Users will be notified of significant changes affecting service use</li>
              <li>Users may terminate their subscription if they do not agree with material changes</li>
              <li>Continued use after changes constitutes acceptance</li>
              <li>Changes will not affect prior transactions</li>
            </ul>
          </section>

          {/* 16. Account Termination */}
          <section id="termination" className="mb-8">
            <h3 className="text-xl font-bold mb-2">16. ACCOUNT TERMINATION</h3>
            <h4 className="font-semibold mt-4 mb-1">16.1 User-Initiated Termination</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Users may terminate their account through: Support request (<a href="mailto:support@color-analysis.pro" className="text-brand-plum underline hover:text-brand-plum/80">support@color-analysis.pro</a>)</li>
            </ul>
            <span className="block font-semibold mb-1">Termination Terms:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Available at any time</li>
              <li>Takes effect immediately</li>
              <li>No termination fees</li>
              <li>Subject to current billing cycle completion</li>
              <li>No refunds for unused period</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">16.2 ColorAnalysis-Initiated Termination</h4>
            <span className="block font-semibold mb-1">We reserve the right to terminate accounts for:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Terms Violations:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Multiple or severe policy breaches</li>
                <li>Fraudulent activity</li>
                <li>Abusive behavior</li>
                <li>Security violations</li>
                <li>Payment defaults</li>
                <li>Account sharing</li>
                <li>False information provision</li>
              </ul>
              <li>Legal and Regulatory:</li>
              <ul className="list-disc pl-10 mb-2">
                <li>Regulatory compliance requirements</li>
                <li>Valid court orders</li>
                <li>Legal investigations</li>
                <li>Government requests</li>
                <li>Jurisdictional restrictions</li>
                <li>Age verification failures</li>
              </ul>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">16.3 Termination Process</h4>
            <span className="block font-semibold mb-1">Notice:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>User-initiated: Immediate confirmation</li>
              <li>ColorAnalysis-initiated: Written notice when applicable</li>
              <li>Emergency termination: Immediate effect for severe violations</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">16.4 Post-Termination Procedures</h4>
            <span className="block font-semibold mb-1">A. Access Management:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Immediate service discontinuation</li>
              <li>Authentication code deactivation</li>
              <li>API access revocation</li>
              <li>Third-party integration closure</li>
              <li>Account deactivation</li>
            </ul>
            <span className="block font-semibold mb-1">B. Data Handling:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Account data retained per legal requirements</li>
              <li>User content archived for 30 days</li>
              <li>Personal data handled per privacy policy</li>
            </ul>
            <span className="block font-semibold mb-1">C. Service Wind-Down:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Subscription cancellation</li>
              <li>Credit balance refund if applicable</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">16.5 Reactivation Policy</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Available within 30 days of termination</li>
              <li>Subject to current terms and pricing</li>
              <li>New account creation required after 30 days</li>
              <li>Previous username may not be available</li>
              <li>Reactivation subject to approval</li>
            </ul>
          </section>

          {/* 17. Legal Information */}
          <section id="legal" className="mb-8">
            <h3 className="text-xl font-bold mb-2">17. LEGAL INFORMATION</h3>
            <h4 className="font-semibold mt-4 mb-1">17.1 Corporate Identity</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Address: 2604 Whittier Place, Wilmington, DE, 19808, United States</li>
              <li>Country: United States</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">17.2 Official Communications</h4>
            <span className="block font-semibold mb-1">Legal Notices:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Email: <a href="mailto:info@color-analysis.pro" className="text-brand-plum underline hover:text-brand-plum/80">info@color-analysis.pro</a></li>
              <li>Correspondence: 2604 Whittier Place, Wilmington, DE, 19808, United States</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 