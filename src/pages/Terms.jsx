import React from "react";
import LegalLayout, { Section } from "./LegalLayout.jsx";

export default function Terms() {
  return (
    <LegalLayout title="Terms and Conditions" effectiveDate="June 18, 2026" lastUpdated="June 18, 2026">
      <p>
        Welcome to the website of Apex Global Facility Management LLC ("Apex," "we," "us," or "our"). These Terms
        and Conditions ("Terms") are a binding agreement between you and Apex governing your use of this website.
        By accessing or using the website, checking a box indicating your acceptance, or submitting information
        through our forms, you acknowledge that you have read, understood, and agree to these Terms and our{" "}
        <a href="#/privacy" className="text-sky-600 underline">
          Privacy Policy
        </a>
        . If you do not agree, do not use this website.
      </p>

      <Section heading="1. Eligibility">
        <p>
          You must be at least 18 years old and legally able to enter into a binding agreement to use this
          website.
        </p>
      </Section>

      <Section heading="2. Use of Website">
        <p>
          You agree to use this website only for lawful purposes. You must not use the website in any way that
          may damage, disrupt, or impair its functionality, attempt unauthorized access, or interfere with other
          users.
        </p>
      </Section>

      <Section heading="3. Services; Service Agreement Controls">
        <p>
          Apex provides facility-management services, including but not limited to maintenance, cleaning, and
          operational support. All services are subject to a separate written agreement, proposal, or contract.{" "}
          <span className="font-semibold text-slate-900">
            If anything in these Terms conflicts with a signed service agreement, the service agreement governs
            the services.
          </span>{" "}
          These Terms govern use of this website only. They do not define the rights, obligations, warranties,
          insurance, or liability that apply to physical services, which are set out exclusively in the
          applicable service agreement.
        </p>
      </Section>

      <Section heading="4. Intellectual Property">
        <p>
          All content on this website, including text, graphics, logos, and images, is the property of Apex and
          is protected by applicable intellectual-property laws. You may not reproduce, distribute, or use any
          content without our prior written permission.
        </p>
      </Section>

      <Section heading="5. User Submissions">
        <p>
          Any information you submit must be accurate and not misleading. By submitting information, you grant us
          a limited right to use it solely to respond to you and provide our services, in accordance with our
          Privacy Policy. We are under no obligation to treat submissions as confidential except as required by
          our Privacy Policy or applicable law.
        </p>
      </Section>

      <Section heading="6. SMS & Messaging Compliance">
        <p>
          By providing your phone number and opting in, you consent to receive SMS (text) messages from Apex,
          including service updates, appointment reminders, account notifications, and customer-support
          communications.
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>Message frequency may vary.</li>
          <li>Standard message and data rates may apply.</li>
          <li>
            Opt out at any time by replying STOP. For help, reply HELP or contact us at{" "}
            <a href="tel:+13028100018" className="text-sky-600 underline">
              (302) 810-0018
            </a>{" "}
            or{" "}
            <a href="mailto:info@apexglobalfm.com" className="text-sky-600 underline">
              info@apexglobalfm.com
            </a>
            .
          </li>
        </ul>
        <p>
          We do not share or sell your mobile information with third parties for marketing purposes. Messaging
          consent is not a condition of purchase. Wireless carriers are not liable for delayed or undelivered
          messages.
        </p>
      </Section>

      <Section heading="7. Electronic Communications & Consent">
        <p>
          By using this website or providing your contact information, you consent to receive communications from
          us electronically (by email, SMS, or website notice), and you agree that all agreements, notices,
          disclosures, and other communications we provide electronically satisfy any legal requirement that they
          be in writing, to the extent permitted by applicable law.
        </p>
      </Section>

      <Section heading="8. Privacy">
        <p>
          Your use of this website is also governed by our{" "}
          <a href="#/privacy" className="text-sky-600 underline">
            Privacy Policy
          </a>
          , which is incorporated into these Terms by reference.
        </p>
      </Section>

      <Section heading="9. Disclaimer of Warranties">
        <p>
          The website and its content are provided on an "AS IS" and "AS AVAILABLE" basis. To the fullest extent
          permitted by law, we disclaim all warranties, express or implied, including the implied warranties of
          merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the
          website will be uninterrupted, error-free, secure, or free of harmful components.
        </p>
      </Section>

      <Section heading="10. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Apex shall not be liable for any indirect, incidental,
          special, consequential, exemplary, or punitive damages, or for lost profits, data, or goodwill,
          arising from or relating to your use of this website.{" "}
          <span className="font-semibold text-slate-900">
            Our total aggregate liability arising out of or relating to the website shall not exceed the greater
            of (a) the total amounts you paid to us, if any, in the twelve (12) months preceding the claim, or
            (b) one hundred U.S. dollars ($100).
          </span>{" "}
          Nothing in these Terms limits liability that cannot be limited under applicable law, including
          liability for gross negligence, willful misconduct, fraud, or personal injury. Because some
          jurisdictions do not allow certain exclusions or limitations, some of the above may not apply to you,
          and in such jurisdictions our liability is limited to the greatest extent permitted by law.
        </p>
      </Section>

      <Section heading="11. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless Apex and its officers, employees, and agents from
          any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising
          from your use or misuse of the website, your violation of these Terms, or your violation of any law or
          third-party right.
        </p>
      </Section>

      <Section heading="12. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible for the content or
          practices of those websites.
        </p>
      </Section>

      <Section heading="13. Termination">
        <p>
          We reserve the right to suspend, restrict, or terminate your access to the website at any time, at our
          discretion, with or without notice. Provisions that by their nature should survive termination
          (including Intellectual Property, Disclaimer of Warranties, Limitation of Liability, Indemnification,
          and Governing Law) will survive.
        </p>
      </Section>

      <Section heading="14. Force Majeure">
        <p>
          We are not liable for any failure or delay in operating the website or performing caused by events
          beyond our reasonable control, including acts of God, natural disasters, utility or internet failures,
          labor disputes, or governmental actions.
        </p>
      </Section>

      <Section heading="15. Governing Law and Venue">
        <p>
          These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-law
          principles. The exclusive jurisdiction and venue for any dispute shall be the state and federal courts
          located in Delaware. This choice of law and venue does not deprive you of the protections of mandatory
          consumer-protection laws of your state of residence.
        </p>
      </Section>

      <Section heading="16. Entire Agreement">
        <p>
          These Terms, together with our Privacy Policy and any applicable signed service agreement, make up the
          entire agreement between you and Apex regarding the website and supersede any prior understandings.
        </p>
      </Section>

      <Section heading="17. Severability">
        <p>
          If any provision of these Terms is found unenforceable, that provision will be limited or severed to
          the minimum extent necessary, and the remaining provisions will stay in full force and effect.
        </p>
      </Section>

      <Section heading="18. No Waiver">
        <p>Our failure to enforce any provision is not a waiver of our right to enforce it later.</p>
      </Section>

      <Section heading="19. Assignment">
        <p>
          You may not assign your rights under these Terms without our consent. We may assign ours, including in
          connection with a merger, acquisition, or sale of assets.
        </p>
      </Section>

      <Section heading="20. Modifications">
        <p>
          We reserve the right to update or modify these Terms at any time. Changes are effective upon posting to
          this page with an updated date, and your continued use of the website after changes constitutes
          acceptance.
        </p>
      </Section>

      <Section heading="21. Headings">
        <p>Headings are for convenience only and do not affect interpretation.</p>
      </Section>

      <Section heading="22. Contact Information">
        <p>
          Apex Global Facility Management LLC
          <br />
          101 Ipswich Ct, Dover, Delaware 19901
          <br />
          <a href="mailto:info@apexglobalfm.com" className="text-sky-600 underline">
            info@apexglobalfm.com
          </a>
          <br />
          <a href="tel:+13028100018" className="text-sky-600 underline">
            (302) 810-0018
          </a>
        </p>
      </Section>

      <p className="border-t border-slate-200 pt-6 font-medium text-slate-700">
        By accessing or using our website, checking a box indicating acceptance, or submitting information
        through our forms, you acknowledge that you have read, understood, and agree to these Terms and
        Conditions.
      </p>
    </LegalLayout>
  );
}
