export const metadata = {
  title: "Founder's Message | SG Education Hosur | Ms. Mamatha M.C.",
  description: "Read the inspiring Founder's Message by Ms. Mamatha M.C. of SG Education, Hosur. Discover our commitment to blending Indian values with modern early education.",
  keywords: "founder message SG education, Mamatha M.C SG education, preschool founder Hosur, ancient bharath culture school, early education leadership Hosur, holistic child growth Hosur, Sarathi Groups education",
  alternates: {
    canonical: "https://sgeducations.in/about/founders-message/"
  }
};

export default function FoundersMessageLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfilePage",
            "@id": "https://sgeducations.in/about/founders-message/#webpage",
            "url": "https://sgeducations.in/about/founders-message/",
            "name": "Founder's Message | SG Education Hosur | Ms. Mamatha M.C.",
            "description": "Founder's message by Ms. Mamatha M.C. of SG Education, Hosur. Blending ancient Indian values with modern early childhood education.",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://sgeducations.in/#website",
              "url": "https://sgeducations.in/",
              "name": "SG Educations"
            }
          },
          {
            "@type": "Person",
            "@id": "https://sgeducations.in/about/founders-message/#founder",
            "name": "Ms. Mamatha M.C.",
            "jobTitle": "Founder & Chairperson",
            "worksFor": {
              "@type": "EducationalOrganization",
              "name": "SG Education",
              "url": "https://sgeducations.in/"
            },
            "affiliation": {
              "@type": "Organization",
              "name": "Sarathi Groups"
            },
            "description": "Founder & Chairperson of SG Education and Co-Founder of Sarathi Groups, dedicated to value-based holistic early childhood education."
          },
          {
            "@type": "FAQPage",
            "@id": "https://sgeducations.in/about/founders-message/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is the founder of SG Education in Hosur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SG Education and SG Early Budding were founded by Ms. Mamatha M.C., who serves as Founder & Chairperson. Supported by strategic mentor Mr. Shashi Kiran K.N. and backed by the institutional credibility of Sarathi Groups, she established the institution to provide value-based early childhood and primary schooling in Hosur."
                }
              },
              {
                "@type": "Question",
                "name": "What is the core vision behind the founding of SG Early Budding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The core vision of SG Early Budding is to synthesize Ancient Noble Bharat Culture (ANBC) with modern Corporate Professional Culture (CPC). This unique curriculum nurtures children with strong moral character, empathy, disciplined habits, and future-ready 21st-century leadership skills."
                }
              },
              {
                "@type": "Question",
                "name": "How does the founder ensure child safety and hygiene at the Hosur campus?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Under Ms. Mamatha M.C.'s leadership, SG Education implements strict safety protocols, including round-the-clock CCTV campus surveillance, daily sanitized play spaces, child-safe infrastructure, low student-teacher ratios, and dedicated female support staff for attentive toddler supervision."
                }
              }
            ]
          }
        ]
      }) }} />
      {children}
    </>
  );
}
