import React from "react";
import LegalLayout, { Section, Bullets } from "./LegalLayout.jsx";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="June 18, 2026" lastUpdated="June 18, 2026">
      <p>
        Apex Global Facility Management LLC ("Apex," "we," "us," or "our") respects your privacy and is
        committed to protecting your personal information. This Privacy Policy explains how we collect, use,
        disclose, and safeguard information when you visit our website, contact us, apply for employment, or use
        our services, including communications via SMS in compliance with applicable 10DLC requirements. It
        applies to residents of all U.S. states, and where a state grants you additional rights, those rights
        are described in Section 10 (State-Specific Privacy Rights). If you need this Policy in an alternative
        accessible format, contact us using the details in Section 14.
      </p>

      <Section heading="1. Information We Collect">
        <p>
          We collect the following categories of personal information, depending on how you interact with us:
        </p>
        <Bullets
          items={[
            <>
              <span className="font-semibold text-slate-900">Identifiers &amp; contact data:</span> full name,
              phone number, email address, company name, mailing/service address, and similar identifiers.
            </>,
            <>
              <span className="font-semibold text-slate-900">Commercial/service data:</span> services
              requested, quotes, scheduling, and records of services performed.
            </>,
            <>
              <span className="font-semibold text-slate-900">Information collected during physical services:</span>{" "}
              service-location and site-access details (including, where applicable, access codes or credentials
              provided to us), photographs documenting work performed, and, where facilities we service use
              them, security camera footage. We use this solely to deliver, document, and secure our services.
            </>,
            <>
              <span className="font-semibold text-slate-900">Internet/device activity:</span> browser type,
              device information, IP address, and website usage data collected automatically.
            </>,
            <>
              <span className="font-semibold text-slate-900">Employment/applicant data:</span> if you apply for
              or hold a job with us, information necessary for recruitment, employment, and legal compliance,
              handled under applicable law and any separate employee privacy notice.
            </>,
            <>
              <span className="font-semibold text-slate-900">Communications:</span> the content of messages you
              send us by form, email, phone, or SMS.
            </>,
          ]}
        />
        <p>
          <span className="font-semibold text-slate-900">Sources.</span> We collect this information directly
          from you, automatically through your use of our website, and from your authorized representatives or
          the clients whose facilities we service.
        </p>
        <p>
          <span className="font-semibold text-slate-900">Sensitive personal information.</span> We do not seek
          to collect sensitive personal information (such as Social Security number, precise geolocation, or
          biometric data) through our website. If any sensitive information is provided to us in connection with
          employment or services, we use and disclose it only for permitted purposes and, where required, with
          your consent. We do not use or disclose sensitive personal information for the purpose of inferring
          characteristics about you.
        </p>
      </Section>

      <Section heading="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <Bullets
          items={[
            "provide, manage, and document our facility-management services;",
            "respond to inquiries, quotes, and customer-service requests;",
            "send service updates, notifications, and administrative messages;",
            "recruit, evaluate, and manage employees and applicants;",
            "operate, maintain, secure, and improve our website and services;",
            "detect, prevent, and address fraud, security incidents, and misuse; and",
            "comply with legal obligations and enforce our agreements.",
          ]}
        />
        <p>
          We do not use your information for purposes that are incompatible with those described above without
          providing notice or obtaining consent where required by law.
        </p>
      </Section>

      <Section heading="3. SMS / Text Messaging">
        <p>
          By providing your phone number and opting in, you consent to receive SMS (text) messages from Apex
          Global Facility Management LLC, which may include service updates, appointment confirmations,
          operational notifications, and customer-support responses.
        </p>
        <Bullets
          items={[
            "Message frequency varies based on your interactions with us.",
            "Message and data rates may apply, based on your mobile carrier.",
            "You may opt out at any time by replying STOP. For assistance, reply HELP or contact us using the details below.",
            "We will not send marketing or promotional messages without your prior express consent.",
          ]}
        />
        <p className="font-semibold text-slate-900">
          No mobile information will be shared with third parties or affiliates for marketing or promotional
          purposes. All other categories of information exclude text-messaging originator opt-in data and
          consent; this information will not be shared with any third parties. Messaging consent is not a
          condition of purchase.
        </p>
      </Section>

      <Section heading="4. Cookies and Tracking Technologies">
        <p>
          Our website uses cookies and similar technologies that are necessary for the site to function and to
          improve your experience. We do not use third-party advertising cookies or sell/share your information
          for cross-context behavioral advertising. You can control or disable cookies through your browser
          settings; disabling some cookies may affect site functionality. Where required by law, we honor
          recognized browser-based opt-out preference signals, including the Global Privacy Control (GPC).
          Because there is no consistent industry standard, we also treat properly configured "Do Not Track"
          signals as opt-out requests where legally required.
        </p>
      </Section>

      <Section heading="5. How We Disclose Information">
        <p>
          We do not sell your personal information, and we do not "share" it for cross-context behavioral
          advertising, as those terms are defined under applicable state law. We disclose personal information
          only:
        </p>
        <Bullets
          items={[
            "to service providers, contractors, and vendors who perform functions on our behalf, bound by contract to use it only for our specified purposes and to protect its confidentiality;",
            "to comply with the law, legal process, or enforceable governmental requests;",
            "to protect the rights, safety, and property of Apex, our clients, or others; and",
            "in connection with a merger, acquisition, financing, or sale of assets, subject to this Policy.",
          ]}
        />
        <p>
          In the preceding 12 months, we may have disclosed identifiers, commercial/service data, internet
          activity, and communications to service providers for the operational purposes described above. We
          have not sold or shared personal information.
        </p>
      </Section>

      <Section heading="6. Data Retention">
        <p>
          We retain each category of personal information only as long as reasonably necessary for the purposes
          described in this Policy — to provide and document services, maintain business records, comply with
          legal, tax, and recordkeeping obligations, resolve disputes, and enforce our agreements. Retention
          periods are determined by the nature and sensitivity of the data, legal requirements, and our
          legitimate operational needs, after which we securely delete or de-identify it.
        </p>
      </Section>

      <Section heading="7. Data Security & Breach Notification">
        <p>
          We use appropriate technical, administrative, and organizational measures designed to protect personal
          information from unauthorized access, disclosure, alteration, or misuse. However, no method of
          transmission or electronic storage is 100% secure, and we cannot guarantee absolute security. In the
          event of a data breach affecting your personal information, we will notify you and any relevant
          authorities as required by applicable state and federal law.
        </p>
      </Section>

      <Section heading="8. Your Privacy Rights (All Residents)">
        <p>
          Subject to applicable law and verification of your identity, you may have the right to:
        </p>
        <Bullets
          items={[
            "confirm whether we process your personal information and access a copy of it;",
            "correct inaccuracies in your personal information;",
            "request deletion of your personal information;",
            "obtain a portable copy of personal information you provided to us;",
            "opt out of any sale of personal information, targeted advertising, or certain profiling;",
            "limit the use and disclosure of sensitive personal information;",
            "withdraw consent for communications at any time; and",
            "appeal a decision we make about your request.",
          ]}
        />
        <p>
          We will not discriminate or retaliate against you for exercising any of these rights.
        </p>
      </Section>

      <Section heading="9. How to Exercise Your Rights">
        <p>
          Submit a request by email to{" "}
          <a href="mailto:info@apexglobalfm.com" className="text-sky-600 underline">
            info@apexglobalfm.com
          </a>{" "}
          or by phone at{" "}
          <a href="tel:+13028100018" className="text-sky-600 underline">
            (302) 810-0018
          </a>
          . We will acknowledge and respond within the time required by applicable law (generally within 45
          days, with one extension of up to 45 additional days where permitted, and we will notify you of any
          extension). To protect your information, we may need to verify your identity before acting on a request
          and may decline requests we cannot reasonably verify. You may use an authorized agent to submit a
          request where permitted by law, provided we can verify the agent's authority and your identity. If we
          deny your request, you may appeal by replying to our decision or contacting us at the same address; if
          your appeal is denied, you may contact your state Attorney General or applicable regulator.
        </p>
      </Section>

      <Section heading="10. State-Specific Privacy Rights">
        <Bullets
          items={[
            <>
              <span className="font-semibold text-slate-900">California (CCPA/CPRA):</span> California residents
              have the rights described above, including the rights to know the categories and specific pieces
              of personal information collected, the categories of sources, the business purposes for
              collection, and the categories of third parties to whom information is disclosed; to delete and
              correct; to opt out of sale/sharing; and to limit use of sensitive personal information. We do not
              sell or share personal information and do not offer financial incentives for personal information.
              Under California's "Shine the Light" law, you may request information about disclosures to third
              parties for their direct marketing purposes; we do not make such disclosures.
            </>,
            <>
              <span className="font-semibold text-slate-900">
                Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, Delaware, and other states with
                comprehensive privacy laws:
              </span>{" "}
              residents have the rights to access, correct, delete, obtain a portable copy, and opt out of
              targeted advertising, sale, and certain profiling, plus the right to appeal as described in
              Section 9.
            </>,
            <>
              <span className="font-semibold text-slate-900">Nevada:</span> residents may submit a verified
              request to opt out of the sale of certain covered information; we do not sell such information.
            </>,
          ]}
        />
        <p>
          If you are unsure which rights apply to you, contact us and we will honor the rights available under
          your state's law.
        </p>
      </Section>

      <Section heading="11. Children's Privacy">
        <p>
          Our website and services are not directed to children, and we do not knowingly collect personal
          information from anyone under 16. We do not knowingly sell or share the personal information of
          consumers under 16. If you believe a child under 16 has provided us personal information, please
          contact us and we will delete it.
        </p>
      </Section>

      <Section heading="12. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy
          practices or content of those external sites, and we encourage you to review their policies.
        </p>
      </Section>

      <Section heading="13. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes are effective when posted on this page
          with an updated "Last Updated" date, and we will provide additional notice of material changes where
          required by law.
        </p>
      </Section>

      <Section heading="14. Contact Us">
        <p>
          Apex Global Facility Management LLC
          <br />
          Attn: Privacy
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
    </LegalLayout>
  );
}
