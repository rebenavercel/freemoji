"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { variant, setVariant, language } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant={variant} setVariant={setVariant} />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="font-display text-4xl md:text-5xl font-800 text-gray-900 mb-8">
          {language === "pl" ? "Polityka Prywatności" : "Privacy Policy"}
        </h1>

        <div className="prose prose-gray max-w-none">
          {language === "pl" ? <PrivacyContentPL /> : <PrivacyContentEN />}
        </div>
      </div>

      <Footer />
    </main>
  );
}

function PrivacyContentPL() {
  return (
    <>
      <p className="text-sm text-gray-500 mb-8">
        <strong>Uwaga implementacyjna:</strong> Dokument wymaga uzupełnienia adresu e-mail do zgłoszeń dotyczących danych osobowych, daty wejścia w życie oraz listy aktualnych podwykonawców przetwarzających dane.
      </p>

      <p className="text-sm text-gray-500 mb-8">
        <strong>Uwaga prawna:</strong> Niniejszy dokument jest projektem przygotowanym do dalszej weryfikacji. Przed publikacją zalecana jest konsultacja z prawnikiem znającym aktualne przepisy o ochronie danych osobowych.
      </p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§1. Postanowienia ogólne</h2>

      <p>1. Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych Użytkowników serwisu dostępnego pod adresem www.thefreemoji.com (dalej: "Serwis").</p>

      <p>2. Administratorem danych osobowych jest JAKUB SZLOSEK - FREEMOJI PROSTA SPÓŁKA AKCYJNA, ul. Złotnicka 28/---, 54-029 Wrocław, wpisana do rejestru przedsiębiorców KRS pod numerem 0001126579, NIP 6351872421 (dalej: "Administrator").</p>

      <p>3. Kontakt z Administratorem w sprawach związanych z ochroną danych osobowych jest możliwy pod adresem e-mail: hello@rebenagesta.com oraz telefonicznie: +48 654 456 546.</p>

      <p>4. Administrator przetwarza dane osobowe zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz właściwymi przepisami prawa polskiego.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§2. Definicje</h2>

      <p>1. "Serwis" - strona internetowa dostępna pod adresem www.thefreemoji.com.</p>

      <p>2. "Użytkownik" lub "Klient" - osoba fizyczna, której dane osobowe są przetwarzane w związku z korzystaniem z Serwisu.</p>

      <p>3. "Usługa BetterMessage" - usługa polegająca na analizie korespondencji lub innych materiałów tekstowych przesłanych przez Klienta.</p>

      <p>4. "Materiały" - e-maile, eksporty korespondencji, pliki PDF, wiadomości z komunikatorów, dokumenty tekstowe, zrzuty ekranu korespondencji lub inne treści przesyłane przez Klienta w celu wykonania Usługi BetterMessage.</p>

      <p>5. "AI" - narzędzia informatyczne wykorzystujące sztuczną inteligencję lub modele językowe wspierające świadczenie usług przez Administratora.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§3. Zakres i cele przetwarzania danych osobowych</h2>

      <p>Dane osobowe Użytkowników są przetwarzane w celu:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>zawarcia i wykonania umowy o świadczenie usług lub dostawę Produktów Cyfrowych,</li>
        <li>realizacji Usługi BetterMessage,</li>
        <li>obsługi zamówień, płatności i rozliczeń,</li>
        <li>obsługi zgłoszeń, reklamacji i korespondencji z Klientem,</li>
        <li>prowadzenia działań marketingowych własnych produktów i usług, o ile Użytkownik wyraził na to zgodę,</li>
        <li>wypełnienia obowiązków prawnych, w tym podatkowych i księgowych,</li>
        <li>ustalenia, dochodzenia lub obrony przed roszczeniami,</li>
        <li>zapewnienia bezpieczeństwa Serwisu i przeciwdziałania nadużyciom.</li>
      </ul>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§4. Podstawy prawne przetwarzania</h2>

      <p>Dane osobowe są przetwarzane na podstawie:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>art. 6 ust. 1 lit. b RODO - przetwarzanie niezbędne do wykonania umowy,</li>
        <li>art. 6 ust. 1 lit. c RODO - przetwarzanie niezbędne do wypełnienia obowiązku prawnego,</li>
        <li>art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes Administratora, w szczególności marketing własnych usług oraz ustalanie i dochodzenie roszczeń,</li>
        <li>art. 6 ust. 1 lit. a RODO - zgoda Użytkownika, w szczególności w zakresie plików cookies niezbędnych do celów innych niż techniczne.</li>
      </ul>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§5. Kategorie przetwarzanych danych</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>dane identyfikacyjne i kontaktowe: imię, nazwisko, adres e-mail, numer telefonu,</li>
        <li>dane dotyczące zamówień, płatności i rozliczeń,</li>
        <li>dane techniczne: adres IP, identyfikator urządzenia, dane przeglądarki, pliki cookies,</li>
        <li>treść korespondencji prowadzonej z Administratorem,</li>
        <li>Materiały przesłane w celu realizacji Usługi BetterMessage.</li>
      </ul>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§6. Materiały przesyłane w ramach Usługi BetterMessage</h2>

      <p>1. W ramach Usługi BetterMessage Klient może przesyłać Administratorowi Materiały zawierające dane osobowe, w tym dane osobowe osób trzecich, których dotyczy przesłana korespondencja.</p>

      <p>2. Klient jest wyłącznie odpowiedzialny za zgodność z prawem przesłania Materiałów, w tym za posiadanie odpowiedniej podstawy prawnej do udostępnienia danych osób trzecich Administratorowi.</p>

      <p>3. Administrator zaleca, aby przed przesłaniem Materiałów Klient usunął lub zanonimizował dane, które nie są niezbędne do wykonania Usługi BetterMessage, w szczególności dane szczególnych kategorii w rozumieniu art. 9 RODO.</p>

      <p>4. Szczegółowe zasady przesyłania i przetwarzania Materiałów określa Regulamin Serwisu.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§7. Wykorzystanie sztucznej inteligencji</h2>

      <p>1. Administrator może wykorzystywać narzędzia AI, w tym zewnętrznych dostawców, w szczególności OpenAI oraz Anthropic, w celu wsparcia analizy Materiałów w ramach Usługi BetterMessage.</p>

      <p>2. Dane przekazywane do narzędzi AI są przetwarzane w ramach ustawień i planów, które - zgodnie z deklaracjami tych dostawców - nie przewidują wykorzystywania danych wejściowych Klienta do trenowania modeli tych dostawców.</p>

      <p>3. Wynik działania narzędzi AI podlega weryfikacji, edycji lub nadzorowi personelu Administratora przed przekazaniem Klientowi.</p>

      <p>4. Administrator nie wykorzystuje Materiałów Klienta do sprzedaży danych osobowych, udostępniania danych brokerom danych ani do reklamy behawioralnej opartej na treści przesłanej korespondencji.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§8. Odbiorcy danych</h2>

      <p>Dane osobowe mogą być przekazywane podmiotom współpracującym z Administratorem, w szczególności:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>dostawcom usług hostingowych,</li>
        <li>dostawcom systemów płatności,</li>
        <li>dostawcom usług e-mail,</li>
        <li>dostawcom narzędzi AI, w szczególności OpenAI i Anthropic,</li>
        <li>podmiotom świadczącym usługi księgowe i prawne,</li>
        <li>organom państwowym, jeśli wynika to z obowiązujących przepisów prawa.</li>
      </ul>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§9. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>

      <p>1. W przypadku przekazywania danych osobowych poza Europejski Obszar Gospodarczy, Administrator zapewnia odpowiedni poziom ochrony danych, w szczególności na podstawie decyzji Komisji Europejskiej o adekwatności, udziału odbiorcy danych w programie EU-U.S. Data Privacy Framework, standardowych klauzul umownych lub innej odpowiedniej podstawy przewidzianej przepisami prawa.</p>

      <p>2. Użytkownik może uzyskać kopię odpowiednich mechanizmów ochrony danych, kontaktując się z Administratorem.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§10. Okres przechowywania danych</h2>

      <p>1. Materiały przesłane w celu wykonania Usługi BetterMessage są przechowywane nie dłużej niż 90 dni od dnia wykonania usługi, o ile wcześniejsze usunięcie nie jest możliwe i wnioskowane przez Klienta, lub dłuższy okres przechowywania nie wynika z przepisów prawa, obowiązków księgowych, bezpieczeństwa lub konieczności ustalenia, dochodzenia lub obrony przed roszczeniami.</p>

      <p>2. Po upływie wskazanego okresu Materiały są usuwane lub anonimizowane.</p>

      <p>3. Dane związane z zawarciem umowy, dokumentacja księgowa oraz korespondencja dotycząca reklamacji przechowywane są przez okres wymagany właściwymi przepisami prawa.</p>

      <p>4. Dane przetwarzane na podstawie zgody są przechowywane do momentu jej wycofania.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§11. Pliki cookies i podobne technologie</h2>

      <p>1. Serwis wykorzystuje pliki cookies oraz podobne technologie w celu zapewnienia prawidłowego działania Serwisu, analizy ruchu oraz, za zgodą Użytkownika, w celach marketingowych.</p>

      <p>2. Użytkownik może zarządzać ustawieniami plików cookies za pomocą banera zgody dostępnego w Serwisie oraz ustawień swojej przeglądarki internetowej.</p>

      <p>3. Wyłączenie niektórych plików cookies może ograniczyć funkcjonalność Serwisu.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§12. Prawa osób, których dane dotyczą</h2>

      <p>Użytkownikowi przysługuje prawo do:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>dostępu do swoich danych osobowych,</li>
        <li>sprostowania danych osobowych,</li>
        <li>usunięcia danych osobowych ("prawo do bycia zapomnianym"),</li>
        <li>ograniczenia przetwarzania danych osobowych,</li>
        <li>przenoszenia danych osobowych,</li>
        <li>wniesienia sprzeciwu wobec przetwarzania danych osobowych,</li>
        <li>wycofania zgody w każdym czasie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem,</li>
        <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeśli Użytkownik uzna, że przetwarzanie danych narusza przepisy prawa.</li>
      </ul>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§13. Zautomatyzowane podejmowanie decyzji</h2>

      <p>1. Analizy przygotowywane w ramach Usługi BetterMessage mają charakter wspierający, informacyjny i edukacyjny.</p>

      <p>2. Administrator nie podejmuje wobec Klientów ani osób trzecich decyzji wywołujących skutki prawne lub w podobny sposób istotnie na nich wpływających, wyłącznie na podstawie zautomatyzowanego przetwarzania, w tym profilowania.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§14. Bezpieczeństwo danych</h2>

      <p>1. Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu zapewnienia bezpieczeństwa przetwarzanych danych osobowych, w tym ochrony przed nieuprawnionym dostępem, utratą lub zniszczeniem danych.</p>

      <p>2. Dostęp do danych osobowych, w tym do Materiałów, mają wyłącznie osoby upoważnione przez Administratora, w zakresie niezbędnym do wykonywania powierzonych im zadań.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§15. Zmiany Polityki Prywatności</h2>

      <p>1. Administrator może zmieniać Politykę Prywatności w przypadku zmiany przepisów prawa, zmiany funkcjonalności Serwisu, zmiany dostawców technologii istotnych dla świadczenia usług lub innych uzasadnionych przyczyn.</p>

      <p>2. O zmianach Polityki Prywatności Administrator informuje poprzez opublikowanie nowej wersji w Serwisie.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§16. Kontakt i skargi</h2>

      <p>1. Wszelkie pytania, wnioski lub żądania dotyczące przetwarzania danych osobowych można zgłaszać na adres e-mail: hello@rebenagesta.com.</p>

      <p>2. Administrator rozpatruje zgłoszenia bez zbędnej zwłoki, nie później niż w terminach przewidzianych przepisami RODO.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§17. Postanowienia końcowe</h2>

      <p>1. Niniejsza Polityka Prywatności jest dostępna w Serwisie bezpłatnie, w sposób umożliwiający jej pobranie, zapisanie i wydrukowanie.</p>

      <p>2. Polityka Prywatności obowiązuje od dnia: [UZUPEŁNIĆ DATĘ].</p>

      <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
        <h3 className="font-display text-xl font-700 text-gray-900 mb-4">Lista kontrolna przed publikacją</h3>
        <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
          <li>Uzupełnić datę wejścia w życie Polityki Prywatności.</li>
          <li>Zweryfikować aktualną listę podwykonawców przetwarzających dane (hosting, e-mail, płatności, AI).</li>
          <li>Zweryfikować zgodność z aktualnym Regulaminem Serwisu i banerem cookies.</li>
          <li>Skonsultować dokument z prawnikiem przed publikacją.</li>
        </ol>
      </div>
    </>
  );
}

function PrivacyContentEN() {
  return (
    <>
      <p className="text-sm text-gray-500 mb-8">
        <strong>Implementation note:</strong> This document requires completion of the data protection contact email, effective date, and the current list of subprocessors handling personal data.
      </p>

      <p className="text-sm text-gray-500 mb-8">
        <strong>Legal note:</strong> This document is a draft prepared for further verification. Consultation with a lawyer familiar with applicable data protection law is recommended before publication.
      </p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§1. General Provisions</h2>

      <p>1. This Privacy Policy sets out the rules for the processing and protection of personal data of users of the website available at www.thefreemoji.com (the "Service").</p>

      <p>2. The data controller is JAKUB SZLOSEK - FREEMOJI PROSTA SPÓŁKA AKCYJNA, ul. Złotnicka 28/---, 54-029 Wrocław, Poland, registered in the entrepreneurs register under KRS number 0001126579, Tax ID (NIP) 6351872421 (the "Controller").</p>

      <p>3. The Controller can be contacted regarding personal data protection matters at: hello@rebenagesta.com or by phone: +48 654 456 546.</p>

      <p>4. The Controller processes personal data in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (GDPR) and applicable provisions of Polish law.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§2. Definitions</h2>

      <p>1. "Service" - the website available at www.thefreemoji.com.</p>

      <p>2. "User" or "Client" - a natural person whose personal data is processed in connection with the use of the Service.</p>

      <p>3. "BetterMessage Service" - a service consisting of analyzing correspondence or other text materials submitted by the Client.</p>

      <p>4. "Materials" - emails, correspondence exports, PDF files, messenger messages, text documents, correspondence screenshots, or other content submitted by the Client for the purpose of performing the BetterMessage Service.</p>

      <p>5. "AI" - IT tools using artificial intelligence or language models supporting the provision of services by the Controller.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§3. Scope and Purposes of Personal Data Processing</h2>

      <p>Personal data of Users is processed for the purposes of:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>concluding and performing agreements for the provision of services or delivery of Digital Products,</li>
        <li>performing the BetterMessage Service,</li>
        <li>handling orders, payments, and billing,</li>
        <li>handling inquiries, complaints, and correspondence with the Client,</li>
        <li>conducting marketing activities for the Controller's own products and services, where the User has given consent,</li>
        <li>fulfilling legal obligations, including tax and accounting obligations,</li>
        <li>establishing, pursuing, or defending against claims,</li>
        <li>ensuring the security of the Service and preventing abuse.</li>
      </ul>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§4. Legal Bases for Processing</h2>

      <p>Personal data is processed on the basis of:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Article 6(1)(b) GDPR - processing necessary for the performance of a contract,</li>
        <li>Article 6(1)(c) GDPR - processing necessary for compliance with a legal obligation,</li>
        <li>Article 6(1)(f) GDPR - the Controller's legitimate interest, in particular marketing of its own services and establishing and pursuing claims,</li>
        <li>Article 6(1)(a) GDPR - the User's consent, in particular for cookies used for purposes other than strictly technical ones.</li>
      </ul>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§5. Categories of Personal Data Processed</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>identification and contact data: first name, last name, email address, phone number,</li>
        <li>order, payment, and billing data,</li>
        <li>technical data: IP address, device identifiers, browser data, cookies,</li>
        <li>content of correspondence with the Controller,</li>
        <li>Materials submitted for the performance of the BetterMessage Service.</li>
      </ul>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§6. Materials Submitted for the BetterMessage Service</h2>

      <p>1. As part of the BetterMessage Service, the Client may submit Materials to the Controller containing personal data, including personal data of third parties to whom the submitted correspondence relates.</p>

      <p>2. The Client is solely responsible for the legality of submitting Materials, including having an appropriate legal basis for disclosing third-party data to the Controller.</p>

      <p>3. The Controller recommends that, before submitting Materials, the Client remove or anonymize data that is not necessary to perform the BetterMessage Service, in particular special category data within the meaning of Article 9 GDPR.</p>

      <p>4. Detailed rules for submitting and processing Materials are set out in the Service's Terms of Service.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§7. Use of Artificial Intelligence</h2>

      <p>1. The Controller may use AI tools, including external providers, in particular OpenAI and Anthropic, to support the analysis of Materials as part of the BetterMessage Service.</p>

      <p>2. Data submitted to AI tools is processed under settings and plans which, according to these providers' declarations, do not provide for the use of the Client's input data to train these providers' models.</p>

      <p>3. The output of AI tools is reviewed, edited, or supervised by the Controller's personnel before being delivered to the Client.</p>

      <p>4. The Controller does not use Client Materials to sell personal data, share data with data brokers, or conduct behavioral advertising based on the content of submitted correspondence.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§8. Data Recipients</h2>

      <p>Personal data may be transferred to entities cooperating with the Controller, in particular:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hosting providers,</li>
        <li>payment system providers,</li>
        <li>email service providers,</li>
        <li>AI tool providers, in particular OpenAI and Anthropic,</li>
        <li>entities providing accounting and legal services,</li>
        <li>public authorities, where required by applicable law.</li>
      </ul>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§9. Transfer of Data Outside the European Economic Area</h2>

      <p>1. Where personal data is transferred outside the European Economic Area, the Controller ensures an adequate level of data protection, in particular based on an adequacy decision of the European Commission, the recipient's participation in the EU-U.S. Data Privacy Framework, standard contractual clauses, or another appropriate safeguard provided by law.</p>

      <p>2. The User may obtain a copy of the relevant data protection safeguards by contacting the Controller.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§10. Data Retention Period</h2>

      <p>1. Materials submitted for the performance of the BetterMessage Service are stored for no longer than 90 days from the date of service performance, unless earlier deletion is possible and requested by the Client, or a longer retention period is required by law, accounting obligations, security, or the need to establish, pursue, or defend against claims.</p>

      <p>2. After the specified period, Materials are deleted or anonymized.</p>

      <p>3. Data related to the conclusion of an agreement, accounting documentation, and complaint-related correspondence are stored for the period required by applicable law.</p>

      <p>4. Data processed on the basis of consent is stored until the consent is withdrawn.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§11. Cookies and Similar Technologies</h2>

      <p>1. The Service uses cookies and similar technologies to ensure the proper functioning of the Service, analyze traffic, and, with the User's consent, for marketing purposes.</p>

      <p>2. The User can manage cookie settings using the consent banner available in the Service and the settings of their web browser.</p>

      <p>3. Disabling certain cookies may limit the functionality of the Service.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§12. Rights of Data Subjects</h2>

      <p>The User has the right to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>access their personal data,</li>
        <li>rectify their personal data,</li>
        <li>erase their personal data ("right to be forgotten"),</li>
        <li>restrict the processing of their personal data,</li>
        <li>data portability,</li>
        <li>object to the processing of their personal data,</li>
        <li>withdraw consent at any time, without affecting the lawfulness of processing carried out before its withdrawal,</li>
        <li>lodge a complaint with the President of the Personal Data Protection Office (or another competent supervisory authority) if the User considers that the processing of their data violates the law.</li>
      </ul>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§13. Automated Decision-Making</h2>

      <p>1. Analyses prepared as part of the BetterMessage Service are supportive, informational, and educational in nature.</p>

      <p>2. The Controller does not make decisions producing legal effects or similarly significantly affecting Clients or third parties based solely on automated processing, including profiling.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§14. Data Security</h2>

      <p>1. The Controller applies appropriate technical and organizational measures to ensure the security of processed personal data, including protection against unauthorized access, loss, or destruction of data.</p>

      <p>2. Access to personal data, including Materials, is granted only to persons authorized by the Controller, to the extent necessary to perform their assigned tasks.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§15. Changes to the Privacy Policy</h2>

      <p>1. The Controller may amend this Privacy Policy in the event of changes in law, changes in the Service's functionality, changes of technology providers significant to the provision of services, or other justified reasons.</p>

      <p>2. The Controller informs about changes to the Privacy Policy by publishing a new version in the Service.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§16. Contact and Complaints</h2>

      <p>1. Any questions, requests, or demands regarding the processing of personal data may be submitted to: hello@rebenagesta.com.</p>

      <p>2. The Controller handles such requests without undue delay, no later than within the time limits provided by GDPR.</p>

      <h2 className="font-display text-2xl font-700 text-gray-900 mt-12 mb-4">§17. Final Provisions</h2>

      <p>1. This Privacy Policy is available in the Service free of charge, in a manner enabling its downloading, recording, and printing.</p>

      <p>2. This Privacy Policy is effective from: [INSERT DATE].</p>

      <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
        <h3 className="font-display text-xl font-700 text-gray-900 mb-4">Pre-Publication Checklist</h3>
        <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
          <li>Complete the effective date of the Privacy Policy.</li>
          <li>Verify the current list of subprocessors (hosting, email, payments, AI).</li>
          <li>Verify consistency with the current Terms of Service and cookie banner.</li>
          <li>Have the document reviewed by a lawyer before publication.</li>
        </ol>
      </div>
    </>
  );
}
