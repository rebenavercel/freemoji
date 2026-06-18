"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { variant, setVariant } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant={variant} setVariant={setVariant} />
      
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="font-display text-4xl md:text-5xl font-800 text-gray-900 mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-sm text-gray-500 mb-8">
            <strong>Implementation note:</strong> This document requires completion of Service Provider data, effective date, email address, phone number, payment operator information, and decision regarding out-of-court consumer dispute resolution.
          </p>

          <p className="text-sm text-gray-500 mb-8">
            <strong>Legal note:</strong> This document is a draft prepared for further verification. If actively targeting US-based companies, additional consultation with a lawyer familiar with applicable state and federal regulations is recommended.
          </p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§1. Definitions</h2>
          
          <p>1. These Terms of Service govern the use of the website available at www.thefreemoji.com, including the rules for placing orders, purchasing digital products, using digital services, and submitting materials for analysis.</p>

          <p>2. For the purposes of these Terms, the following definitions apply:</p>

          <p>a) "Service" - the website available at www.thefreemoji.com.</p>

          <p>b) "Service Provider" - JAKUB SZLOSEK - FREEMOJI PROSTA SPÓŁKA AKCYJNA, ul. ZŁOTNICKA 28/--- 54-029 WROCŁAW, POLAND, registered in the entrepreneurs register under KRS number 0001126579, Tax ID (NIP) 6351872421, hereinafter referred to as the "Service Provider".</p>

          <p>c) "Client" or "Service Recipient" - a natural person, legal entity, or organizational unit using the Service or entering into an agreement with the Service Provider.</p>

          <p>d) "Consumer" - a natural person entering into an agreement with the Service Provider that is not directly related to their business or professional activity.</p>

          <p>e) "Entrepreneur with Consumer Rights" - a natural person entering into an agreement directly related to their business activity, if the content of the agreement indicates that it does not have a professional character for that person, resulting in particular from the subject of their business activity disclosed in the Central Register and Information on Economic Activity (CEIDG).</p>

          <p>f) "Entrepreneur" - a Client who is neither a Consumer nor an Entrepreneur with Consumer Rights.</p>

          <p>g) "Digital Product" - digital content or digital material offered in the Service, in particular a report, instruction, educational material, file, document, template, or other material delivered in electronic form.</p>

          <p>h) "BetterMessage Service" - a service consisting of analyzing correspondence or other text materials submitted by the Client and preparing a report, communication profile, interpretation of communication style, or communication recommendations.</p>

          <p>i) "Materials" - emails, correspondence exports, PDF files, messenger messages, text documents, correspondence screenshots, or other content submitted by the Client for the purpose of performing the BetterMessage Service.</p>

          <p>j) "Analysis" - the result of the BetterMessage Service prepared by the Service Provider, in particular a report, description, recommendation, interpretation, communication profile, or other output material.</p>

          <p>k) "AI" - IT tools using artificial intelligence, language models, or automatic text analysis systems supporting the provision of services by the Service Provider.</p>

          <p>l) "Business Day" - a day from Monday to Friday, excluding statutory non-working days in Poland.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§2. General Provisions</h2>

          <p>1. The owner and administrator of the Service is the Service Provider.</p>

          <p>2. These Terms are made available to the Client free of charge before entering into an agreement in a manner enabling their acquisition, reproduction, recording, and storage.</p>

          <p>3. Use of the Service is voluntary.</p>

          <p>4. The Service is intended for adults. Only persons who have reached the age of 18 and have full legal capacity may use the Service, unless they act on behalf of a legal entity or organizational unit based on appropriate authorization.</p>

          <p>5. A person placing an order on behalf of a company, organization, or other entity declares that they are authorized to act on behalf of that entity.</p>

          <p>6. These Terms constitute an integral part of the agreement concluded between the Client and the Service Provider.</p>

          <p>7. Detailed rules for the processing of personal data are set out in the Privacy Policy. These Terms do not replace the Privacy Policy, cookie information, or any data processing agreement.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§3. Scope of Services</h2>

          <p>1. The Service is used to offer and sell Digital Products and services related to communication analysis, online communication, and digital body language.</p>

          <p>2. Within the Service, the Service Provider may offer in particular:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>reports and educational materials,</li>
            <li>Digital Products,</li>
            <li>consultations,</li>
            <li>BetterMessage Service,</li>
            <li>other services or products described in the Service.</li>
          </ul>

          <p>3. The BetterMessage Service consists of analyzing Materials submitted by the Client and preparing one or more forms of development, in particular:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>communication profile of the interlocutor,</li>
            <li>analysis of communication style,</li>
            <li>interpretation of communication behaviors,</li>
            <li>recommendations for more effective communication,</li>
            <li>identification of potential communication risks,</li>
            <li>indication of possible directions for further communication.</li>
          </ul>

          <p>4. The BetterMessage Service is analytical, informational, and educational in nature. It does not constitute a psychological, psychiatric, medical, legal, financial, investment, HR, or any binding assessment of the person to whom the correspondence relates.</p>

          <p>5. The Service Provider does not provide psychological, psychiatric, medical, legal, detective, debt collection, investment services, or advice on making decisions with legal effects on third parties.</p>

          <p>6. Analyses prepared as part of BetterMessage should not be used as the sole or decisive basis for making decisions regarding employment, promotion, dismissal, credit, insurance, treatment, legal disputes, assessment of a person's credibility, or other decisions that may significantly affect the rights or situation of a natural person.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§4. Technical Conditions for Using the Service</h2>

          <p>1. Proper use of the Service requires:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>a device with Internet access,</li>
            <li>current version of a web browser supporting HTML5,</li>
            <li>active email address,</li>
            <li>enabled JavaScript and cookies, if necessary for the operation of a given function of the Service,</li>
            <li>software enabling reading of PDF files, if the Digital Product or Analysis is delivered in such format.</li>
          </ul>

          <p>2. The Client is obliged to use the Service in accordance with the law, these Terms, good practices, and the purpose of the Service.</p>

          <p>3. It is prohibited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>interfere with the technical structure of the Service,</li>
            <li>attempt unauthorized access to data, accounts, systems, or infrastructure,</li>
            <li>provide code, files, or data that may disrupt the operation of the Service,</li>
            <li>use the Service for unlawful activities,</li>
            <li>violate the rights of the Service Provider, other Clients, or third parties,</li>
            <li>submit Materials obtained unlawfully,</li>
            <li>submit Materials containing content that the Client has no right to process or share.</li>
          </ul>

          <p>4. The Service Provider may temporarily limit the availability of the Service for technical, maintenance, security, or organizational reasons.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§5. Orders and Conclusion of Agreement</h2>

          <p>1. Information presented in the Service, including descriptions of Digital Products and services, constitutes an invitation to conclude an agreement, unless the content of the Service clearly indicates otherwise.</p>

          <p>2. Placing an order is done by performing the actions indicated in the Service, in particular selecting a product or service, providing required data, accepting required declarations, and making payment.</p>

          <p>3. The agreement is concluded upon confirmation of acceptance of the order by the Service Provider or upon successful payment, depending on which of these actions occurs later.</p>

          <p>4. Before placing an order, the Client should have the opportunity to familiarize themselves with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Terms of Service,</li>
            <li>Privacy Policy,</li>
            <li>product or service description,</li>
            <li>total price,</li>
            <li>deadline and method of performance,</li>
            <li>information about the right of withdrawal or its absence,</li>
            <li>information on how to file complaints.</li>
          </ul>

          <p>5. After placing an order, the Client receives an order confirmation to the email address provided when placing the order.</p>

          <p>6. In the case of the BetterMessage Service, after payment, the Client receives instructions on how to submit Materials for analysis, in particular the ability to send a PDF file, other text file, or forward correspondence using the "forward/send to" function in their email inbox.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§6. Performance of BetterMessage Service</h2>

          <p>1. Performance of the BetterMessage Service begins after the following conditions are cumulatively met:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>placing an order,</li>
            <li>making payment, unless the parties agree otherwise,</li>
            <li>accepting required declarations,</li>
            <li>submitting Materials necessary to perform the service by the Client.</li>
          </ul>

          <p>2. The Service Provider performs the BetterMessage Service within 30 days from the date of receiving complete Materials from the Client, unless the service description, offer, or individual arrangements with the Client provide for a different deadline.</p>

          <p>3. If the submitted Materials are incomplete, illegible, damaged, excessively extensive, contain content unrelated to the service, or prevent the performance of the service, the Service Provider may request the Client to supplement, limit, anonymize, or resend them.</p>

          <p>4. The deadline for performing the service may be extended by the time of waiting for supplementation, correction, or resubmission of Materials by the Client.</p>

          <p>5. The Analysis is delivered to the Client in electronic form, in particular as a PDF file, email message, text document, or other form indicated in the service description.</p>

          <p>6. The Service Provider is not obliged to analyze Materials beyond the scope of the ordered service.</p>

          <p>7. The Service Provider may refuse to perform the service or discontinue its performance if the Materials:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>were submitted with obvious violation of law,</li>
            <li>contain unlawful content,</li>
            <li>contain data whose processing would involve disproportionate legal risk,</li>
            <li>concern minors,</li>
            <li>contain special category data, medical data, criminal conviction data, document numbers, payment data, passwords, or other information whose submission is not necessary to perform the service,</li>
            <li>could violate the rights of third parties.</li>
          </ul>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§7. Submitting Materials for Analysis</h2>

          <p>1. The Client may submit Materials to the Service Provider in the form of a file, email message, forwarded correspondence, or other form agreed with the Service Provider.</p>

          <p>2. The Client declares that they have appropriate consents, authorizations, legal bases, or other title enabling the submission of Materials and data contained in these Materials to the Service Provider.</p>

          <p>3. The Client is responsible for the legality of obtaining, possessing, and submitting Materials to the Service Provider.</p>

          <p>4. Before submitting Materials, the Client should, as far as possible, remove or anonymize data that is not necessary to perform the BetterMessage Service, in particular surnames, email addresses, phone numbers, residential addresses, payment data, identification data, medical data, data concerning children, and other excessive information.</p>

          <p>5. If complete anonymization of Materials would make it impossible to perform the service, the Client should limit the scope of submitted data to the minimum necessary to perform the service.</p>

          <p>6. The Client should not submit to the Service Provider:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>data of minors,</li>
            <li>health data,</li>
            <li>data concerning sexual life or sexual orientation,</li>
            <li>data revealing racial or ethnic origin,</li>
            <li>data revealing political opinions, religious or philosophical beliefs,</li>
            <li>data concerning trade union membership,</li>
            <li>biometric or genetic data,</li>
            <li>data concerning criminal convictions and offenses,</li>
            <li>identity document numbers,</li>
            <li>payment card data, bank data, passwords, tokens, API keys, and other access data,</li>
            <li>protected health information within the meaning of HIPAA provisions, if the Client is subject to such provisions.</li>
          </ul>

          <p>7. The Service Provider does not enter into a Business Associate Agreement within the meaning of HIPAA provisions as part of the standard BetterMessage Service and does not provide the BetterMessage Service as a business associate of an entity covered by HIPAA.</p>

          <p>8. The Service Provider is not obliged to actively, fully, and prior verify the legality of Materials submitted by the Client. This does not exclude the Service Provider's right to refuse to perform the service, remove Materials, or request their supplementation or anonymization if it has justified doubts about their legality, scope, or security.</p>

          <p>9. In the event of third-party claims related to Materials submitted by the Client, the Client undertakes to cooperate with the Service Provider to clarify the matter and to release the Service Provider from liability to the extent that claims result from unlawful, unauthorized, or excessive submission of Materials by the Client, if permitted by mandatory law.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§8. Use of Artificial Intelligence</h2>

          <p>1. The Service Provider may use AI as a tool supporting the provision of services, in particular for text analysis, information organization, identification of communication patterns, and preparation of draft elements of the Analysis.</p>

          <p>2. The BetterMessage Service is performed in a human + AI model, which means that AI tools may support the analysis, but the final result may be subject to evaluation, editing, or control by the Service Provider's personnel.</p>

          <p>3. The Service Provider may use external AI tool providers, in particular OpenAI and Anthropic. The current list of significant providers used in the processing of personal data should be indicated in the Privacy Policy.</p>

          <p>4. Adding a new significant AI provider that processes personal data or Client Materials should be reflected in the Privacy Policy or other appropriate information document.</p>

          <p>5. The Service Provider does not use Client Materials to sell personal data, share data with data brokers, or conduct behavioral advertising based on the content of submitted correspondence.</p>

          <p>6. The Service Provider does not use Client Materials to train public artificial intelligence models, create public datasets, or share Materials with third parties for independent training of AI models.</p>

          <p>7. The Service Provider may use experience, operational knowledge, anonymized or aggregated conclusions, repeatable communication patterns, analytical schemes, and general work rules resulting from the provision of services for internal improvement of the quality of the BetterMessage Service, analysis methodology, work procedures, instructions, prompts, AI tool configurations, and the operation of the internal AI agent.</p>

          <p>8. The activities referred to in paragraph 7 should not lead to the identification of the Client, the Client's interlocutors, or other persons whose data may be contained in the Materials, or to the reconstruction of the content of specific correspondence, a specific case study, or a specific Analysis. The Service Provider does not use previous Analyses in a manner involving disclosure, comparison, or reference to one Client of matters, Materials, or cases concerning other Clients.</p>

          <p>9. The Client should not treat the Analysis as an automatic decision, diagnosis, or objective assessment of a third party.</p>

          <p>10. To the extent that the Service Provider uses external AI tool providers, in particular OpenAI or Anthropic, the Service Provider uses settings, plans, or configurations that, according to provider declarations, do not provide for the use of Client input data and results to train these providers' models.</p>

          <p>11. AI tools used in performing the BetterMessage Service serve a supporting function. The final Analysis is prepared, verified, or supervised by a human who may introduce corrections, additions, interpretations, selection of conclusions, and quality assessment of results generated or supported by AI tools.</p>

          <p>12. The Client acknowledges that AI tools may generate results that are incomplete, imprecise, outdated, incorrect, or requiring interpretation. The Analysis does not constitute a guarantee of true recognition of the intentions, personality, mental state, motivations, emotions, or future behaviors of the person to whom the correspondence relates.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§9. Personal Data and Privacy</h2>

          <p>1. Personal data is processed in accordance with applicable law, in particular GDPR, if applicable.</p>

          <p>2. Detailed rules for the processing of personal data, including information about the data controller, purposes, legal bases, data recipients, transfers outside the EEA, data retention periods, and the rights of data subjects, are set out in the Privacy Policy.</p>

          <p>3. Depending on the circumstances, the Service Provider may act as a data controller or as a data processor on behalf of the Client. If the nature of cooperation requires concluding a data processing agreement, the parties should conclude such an agreement separately before submitting Materials.</p>

          <p>4. The Client acknowledges that the submission of Materials may include personal data of third parties, including email addresses, first names, surnames, positions, content of statements, and other information resulting from correspondence.</p>

          <p>5. The Client should inform third parties about the submission of their data to the Service Provider if required by applicable law and possible under the circumstances.</p>

          <p>6. Personal data may be transferred to entities cooperating with the Service Provider, in particular hosting providers, email, payment systems, AI tools, security systems, IT support, accounting, and legal services.</p>

          <p>7. If personal data is transferred outside the European Economic Area, the transfer takes place in accordance with appropriate legal mechanisms, in particular based on an adequacy decision, the recipient's participation in the EU-U.S. Data Privacy Framework, standard contractual clauses, or other appropriate basis provided by law.</p>

          <p>8. The Client should familiarize themselves with the Privacy Policy before submitting Materials.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§10. Material Retention Period</h2>

          <p>1. Materials submitted for the performance of the BetterMessage Service are stored for a period no longer than 90 days from the date of service performance, unless earlier deletion is possible and requested by the Client, or longer storage is required by law, accounting obligations, security, pursuing claims, or defense against claims.</p>

          <p>2. After the specified period, Materials are deleted or anonymized.</p>

          <p>3. The Client may request earlier deletion of Materials, provided it is not prevented by legal, accounting, evidentiary, security obligations, or the need to establish, pursue, or defend claims.</p>

          <p>4. The Service Provider may store anonymized statistical information for service development purposes, provided it does not allow identification of the Client or third parties.</p>

          <p>5. The very fact of concluding an agreement, accounting data, correspondence regarding complaints, confirmations of consents and declarations, and accounting documents may be stored for the period required by law or justified by the limitation period for claims.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§11. Prices and Payments</h2>

          <p>1. Prices of Digital Products and services are indicated in the Service or in an individual offer.</p>

          <p>2. Prices should be presented in an unambiguous manner, with information on whether they are net or gross prices, include taxes, and whether additional fees may apply.</p>

          <p>3. Before placing an order, the Client receives information about the total price of the product or service.</p>

          <p>4. Payment is made using the methods made available in the Service or indicated by the Service Provider.</p>

          <p>5. Access to the Digital Product or commencement of the BetterMessage Service may depend on payment posting or confirmation by the payment operator.</p>

          <p>6. In the case of payments handled by an external payment operator, the Client may be subject to that operator's terms and privacy policy.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§12. Delivery of Digital Products</h2>

          <p>1. The Digital Product is delivered to the Client in electronic form, in particular via a link, downloadable file, email message, access to a page, user panel, or other form indicated in the product description.</p>

          <p>2. The Digital Product should be delivered immediately after payment, unless the product description, offer, or individual arrangements provide for a different deadline.</p>

          <p>3. The Client should check whether the email address provided is correct and whether the message from the Service Provider has not ended up in the spam, offers, or other folder.</p>

          <p>4. In case of problems with access to the Digital Product, the Client should contact the Service Provider at the email address indicated in the Service.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§13. Right of Withdrawal</h2>

          <p>1. A Consumer and an Entrepreneur with Consumer Rights have the right to withdraw from a distance contract within 14 days, unless an exception provided by law applies.</p>

          <p>2. The period to withdraw from the contract is 14 days from the date of conclusion of the contract, unless specific provisions provide for a different start of the period.</p>

          <p>3. To exercise the right of withdrawal, the Client should inform the Service Provider of their decision in an unequivocal statement, for example via an email sent to the Service Provider's address.</p>

          <p>4. In the case of the BetterMessage Service, a Client who is a Consumer or Entrepreneur with Consumer Rights may request commencement of service performance before the expiry of the 14-day withdrawal period.</p>

          <p>5. If the Client requests commencement of the BetterMessage Service before the expiry of the withdrawal period and then withdraws from the contract before full performance of the service, they may be obliged to pay for services performed until the moment of withdrawal, proportionally to the scope of the performed service, if permitted by law.</p>

          <p>6. The Client loses the right to withdraw from the contract for the provision of the BetterMessage Service after full performance of the service by the Service Provider, if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>the Client expressly requested commencement of performance before the expiry of the withdrawal period,</li>
            <li>the Client was informed before commencement of performance that after performance of the service by the Service Provider they will lose the right of withdrawal,</li>
            <li>the Client accepted this information,</li>
            <li>the Service Provider provided the Client with the required confirmation of conclusion of the contract.</li>
          </ul>

          <p>7. In the case of Digital Products not delivered on a tangible medium, the Client loses the right to withdraw from the contract if delivery of the Digital Product began with their express and prior consent before the expiry of the withdrawal period, after informing them of the loss of the right of withdrawal and after accepting this information by the Client.</p>

          <p>8. The Service Provider should obtain from the Client separate, active declarations regarding commencement of performance before the expiry of the withdrawal period and awareness of loss of the right of withdrawal. Checkboxes should not be checked by default.</p>

          <p>9. The provisions of this paragraph do not limit the mandatory rights of a Consumer or Entrepreneur with Consumer Rights.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§14. Complaints and Conformity of Product or Service with Contract</h2>

          <p>1. The Client may file a complaint regarding the operation of the Service, Digital Product, BetterMessage Service, or method of performance of the contract.</p>

          <p>2. A complaint may be filed electronically to the Service Provider's email address: [INSERT EMAIL ADDRESS].</p>

          <p>3. The complaint should contain at least:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>first and last name or company name of the Client,</li>
            <li>email address used when placing the order,</li>
            <li>order number or other data allowing identification of the transaction,</li>
            <li>description of the problem,</li>
            <li>Client's request, if the Client wishes to indicate it.</li>
          </ul>

          <p>4. The Service Provider considers complaints within 14 days from the date of receipt, unless the law provides for a different deadline.</p>

          <p>5. The response to the complaint is sent to the Client's email address, unless the Client indicates another method of contact.</p>

          <p>6. In the case of Consumers and Entrepreneurs with Consumer Rights, the Service Provider's liability for conformity of the Digital Product or service with the contract results from applicable law, in particular the Consumer Rights Act.</p>

          <p>7. If the Digital Product or digital service is not in conformity with the contract, the Client may have the rights provided by law, in particular the right to demand that it be brought into conformity with the contract, price reduction, or withdrawal from the contract, in the cases and on the terms provided by law.</p>

          <p>8. No provision of these Terms limits the statutory rights of a Consumer or Entrepreneur with Consumer Rights.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§15. Service Provider's Liability</h2>

          <p>1. The Service Provider undertakes to perform services with due care.</p>

          <p>2. Analyses, reports, communication profiles, and recommendations prepared as part of BetterMessage are interpretative, informational, and educational in nature.</p>

          <p>3. The Service Provider does not guarantee that the Analysis:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>fully reflects the actual intentions of a third party,</li>
            <li>allows prediction of a third party's behavior,</li>
            <li>will lead to a specific business, professional, private, or communication result,</li>
            <li>will be free from subjective interpretation,</li>
            <li>can replace consultation with a specialist.</li>
          </ul>

          <p>4. The Client independently makes decisions based on the Analysis and is responsible for the manner of using the received information.</p>

          <p>5. The Service Provider is not liable for the consequences of decisions made by the Client based on the Analysis, unless such liability results from mandatory law.</p>

          <p>6. The Service Provider is not responsible for Materials submitted by the Client, in particular for their truthfulness, completeness, legality, scope, method of acquisition, or third party rights to these Materials.</p>

          <p>7. Towards Entrepreneurs, the Service Provider's liability, to the maximum extent permitted by law, is limited to the amount of remuneration actually paid by the given Entrepreneur for the service or product to which the claim relates.</p>

          <p>8. Towards Entrepreneurs, the Service Provider is not liable for lost profits, indirect damages, loss of revenue, loss of reputation, loss of data, business interruptions, or third-party claims resulting from the Client's unlawful actions, unless mandatory law provides otherwise.</p>

          <p>9. Liability limitations do not apply to the extent they would be inadmissible under mandatory law, in particular in the case of damage caused intentionally.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§16. Prohibited Uses of Analysis</h2>

          <p>1. The Client may not use the Analysis:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>for unlawful profiling of persons,</li>
            <li>for harassment, blackmail, manipulation, discrimination, or violation of third-party privacy,</li>
            <li>as the sole basis for decisions on employment, dismissal, promotion, remuneration, credit, insurance, treatment, legal liability, or other decisions significantly affecting a natural person,</li>
            <li>to circumvent the law,</li>
            <li>to violate trade secrets, professional secrets, correspondence secrets, or other legally protected secrets.</li>
          </ul>

          <p>2. The Client is responsible for using the Analysis in a manner inconsistent with these Terms, law, or good practices.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§17. Intellectual Property</h2>

          <p>1. All elements of the Service, including its layout, content, name, logo, graphics, materials, Digital Products, Analyses, reports, texts, concepts, and designations, are subject to legal protection, in particular under copyright and intellectual property law.</p>

          <p>2. The Client retains rights to Materials they submit to the Service Provider, to the extent such rights belong to them.</p>

          <p>3. By submitting Materials, the Client grants the Service Provider a non-exclusive, free, temporary authorization to use the Materials only to the extent necessary to perform the service, handle the order, ensure security, billing, and establish, pursue, or defend claims.</p>

          <p>4. Digital Products and Analyses provided by the Service Provider are intended for the Client's own use, unless the product description, offer, or individual agreement provides otherwise.</p>

          <p>5. The Client may not sell, resell, publish, distribute, sublicense, make publicly available, or commercially use Digital Products or Analyses beyond the scope agreed with the Service Provider.</p>

          <p>6. In the case of a Client who is an Entrepreneur, the Analysis may be used internally within the Client's organization, provided it does not lead to its public distribution or violation of the Service Provider's rights.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§18. Confidentiality</h2>

          <p>1. The Service Provider undertakes to maintain the confidentiality of Materials submitted by the Client, subject to cases where disclosure is necessary to perform the service, results from law, a request from an authorized authority, the need for technical support, billing, security, or establishing, pursuing, or defending claims.</p>

          <p>2. Access to Materials should be granted only to persons or entities for whom it is necessary to perform the service, technical support, security, billing, or legal support.</p>

          <p>3. The confidentiality obligation does not apply to information that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>is publicly available,</li>
            <li>was known to the Service Provider before its submission by the Client,</li>
            <li>was disclosed in accordance with law by a third party,</li>
            <li>must be disclosed pursuant to law or a decision of an authorized authority.</li>
          </ul>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§19. Required Declarations and Checkboxes</h2>

          <p>1. Before concluding an agreement, the Client should make active declarations by checking appropriate checkboxes. Checkboxes may not be checked by default.</p>

          <p>2. Depending on the type of order, the Client should in particular make the following declarations:</p>

          <p>a) "I declare that I have read the Terms of Service and Privacy Policy, I accept the Terms, I confirm receipt of information about the processing of personal data, and I declare that I am 18 years of age and have full legal capacity or I act on behalf of the entity I represent."</p>

          <p>b) "I declare that I have an appropriate legal basis to submit Materials to the Service Provider, including correspondence and data contained in these Materials, and that before submitting them I removed or limited data that is not necessary to perform the service, to the extent possible."</p>

          <p>c) "I acknowledge that the BetterMessage Service is analytical, informational, and educational in nature, may be performed using artificial intelligence tools under human supervision, and does not constitute a psychological, medical, legal, financial diagnosis or guarantee of achieving a specific result."</p>

          <p>d) "I request commencement of the BetterMessage Service before the expiry of the 14-day withdrawal period and I acknowledge that after full performance of the service I will lose the right to withdraw from the contract."</p>

          <p>e) "I consent to commencement of delivery of the Digital Product before the expiry of the withdrawal period and I acknowledge that after commencement of delivery of the Digital Product I will lose the right to withdraw from the contract."</p>

          <p>3. Failure to make a required declaration may prevent conclusion of the contract or performance of the service.</p>

          <p>4. The Service Provider may record the date, time, email address, order identifier, IP address, or other technical confirmation of making declarations, to the extent necessary to demonstrate conclusion of the contract, protect the Service Provider's rights, handle complaints, or fulfill legal obligations.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§20. Out-of-Court Consumer Dispute Resolution</h2>

          <p>1. A Consumer may use out-of-court methods of handling complaints and pursuing claims if available under applicable law.</p>

          <p>2. Information on out-of-court methods of consumer dispute resolution in Poland is available on the websites of relevant consumer protection authorities.</p>

          <p>3. The Service Provider informs whether it consents to participate in out-of-court proceedings for consumer dispute resolution: [INSERT: CONSENTS / DOES NOT CONSENT / DECIDES INDIVIDUALLY AFTER DISPUTE ARISES].</p>

          <p>4. The provisions of this paragraph do not limit the Consumer's right to pursue claims before a competent court.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§21. Changes to Terms</h2>

          <p>1. The Service Provider may change the Terms in the event of:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>change in law,</li>
            <li>change in Service functionality,</li>
            <li>change in the method of providing services,</li>
            <li>introduction of new services or products,</li>
            <li>change of technology providers significant to the provision of services,</li>
            <li>organizational, technical, or security changes,</li>
            <li>need to adapt the Terms to decisions of authorities, court judgments, or recommendations of supervisory authorities,</li>
            <li>need to clarify the provisions of the Terms, provided it does not violate the acquired rights of Clients.</li>
          </ul>

          <p>2. Changes to the Terms do not affect contracts concluded before the effective date of the changes, unless:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>the change results from mandatory law,</li>
            <li>the Client consents to application of the new version of the Terms,</li>
            <li>the change is only technical, editorial, or beneficial to the Client.</li>
          </ul>

          <p>3. Orders placed before the changes take effect are subject to the Terms in force at the time of conclusion of the contract, unless the law or individual arrangements of the parties provide otherwise.</p>

          <p>4. The Service Provider informs about changes to the Terms by publishing a new version in the Service.</p>

          <p>5. Continued use of the Service after the changes take effect means acceptance of the Terms for future services and future orders.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§22. Applicable Law and Jurisdiction</h2>

          <p>1. These Terms and contracts concluded on their basis are subject to Polish law, subject to mandatory provisions of law applicable to the Consumer.</p>

          <p>2. The choice of Polish law does not deprive the Consumer of protection granted by mandatory provisions of law of the state of their habitual residence, if such provisions apply.</p>

          <p>3. In the case of Clients who are Entrepreneurs, disputes arising from the Terms, Service, or contracts concluded with the Service Provider will be resolved by the court with jurisdiction over the Service Provider's registered office, unless mandatory law provides otherwise.</p>

          <p>4. If the Client uses the Service from outside Poland, in particular from the territory of the United States of America, they acknowledge that the Service Provider is an entity headquartered in Poland and the service is provided in accordance with Polish law, subject to mandatory provisions that may apply to the given Client.</p>

          <p>5. The Service is not intended for minors or for submitting data of children.</p>

          <p>6. If the Client is subject to special industry regulations, in particular HIPAA, GLBA, FERPA, provisions on professional secrecy, trade secrets, confidential information, or regulated data, the Client is responsible for assessing whether they may submit Materials to the Service Provider.</p>

          <p>7. If the Client uses the Service from the territory of the United States of America or acts as an entity headquartered or conducting business in the USA, they acknowledge that the BetterMessage Service is not intended for processing data regulated by special industry provisions, in particular medical, educational, financial data, children's data, data subject to professional secrecy, or other data whose submission requires fulfillment of additional legal obligations, unless the parties conclude separate written arrangements.</p>

          <p>8. The Client is responsible for assessing whether submission of Materials to the Service Provider is in accordance with the law applicable to the Client, their industry, place of business, and type of data contained in the Materials. This applies in particular to Clients operating in the American market or subject to state or federal US provisions.</p>

          <p>9. The Service Provider does not make declarations to Clients from the USA regarding compliance of the BetterMessage Service with specific American industry regulations, in particular HIPAA, GLBA, FERPA, COPPA, or state privacy provisions, unless such compliance is expressly confirmed in a separate written agreement.</p>

          <p>10. All information published in the Service regarding AI operation, data security, privacy, confidentiality, effectiveness of analyses, or scope of use of Materials should be interpreted in accordance with the Terms, Privacy Policy, and actual method of providing services by the Service Provider. The Service Provider does not guarantee that the Analysis will allow achieving a specific business, negotiation, sales, recruitment, legal, or interpersonal result.</p>

          <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§23. Final Provisions</h2>

          <p>1. Matters not regulated by these Terms are subject to applicable provisions of Polish law, in particular the Civil Code, the Act on Provision of Electronic Services, and the Consumer Rights Act, as well as other provisions applicable in a given case.</p>

          <p>2. Invalidity or ineffectiveness of any provision of the Terms does not affect the validity of the remaining provisions.</p>

          <p>3. Instead of an invalid or ineffective provision, appropriate provisions of law apply. The parties should strive to replace such provision with a valid and effective provision as close as possible to the original economic purpose, if permitted by law.</p>

          <p>4. The Terms are available free of charge in the Service in a manner enabling their downloading, recording, reproduction, and printing.</p>

          <p>5. These Terms are effective from: [INSERT DATE].</p>

          <p>6. For publication, all comments in brackets indicating audit explanations should be removed.</p>

          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <h3 className="font-display text-xl font-700 text-gray-900 mb-4">Implementation Checklist Before Publication</h3>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>Complete full data of the Company: name, registered office, address, KRS, Tax ID, REGON, email, phone.</li>
              <li>Complete email address for complaints and contact.</li>
              <li>Complete the effective date of the Terms.</li>
              <li>Indicate the payment operator and check compliance of its terms with the purchase process.</li>
              <li>Prepare or update the Privacy Policy with a list of providers: hosting, email, payments, OpenAI, Anthropic, and any other subcontractors.</li>
              <li>Do not enter Gemini as a used provider until it is actually implemented.</li>
              <li>Prepare separate checkboxes for: acceptance of Terms, age 18+, legal basis for submitting Materials, awareness of the nature of service, AI, withdrawal from contract, and digital content.</li>
              <li>Set checkboxes as unchecked by default.</li>
              <li>Record date, time, order identifier, and checkbox confirmations.</li>
              <li>Prepare procedure for deleting Materials 90 days after service performance.</li>
              <li>Prepare a template data processing agreement for B2B clients if they will submit personal data as controllers.</li>
            </ol>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
