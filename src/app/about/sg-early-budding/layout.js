export const metadata = {
  title: "About SG Early Budding | Best Playschool in Hosur | ANBC & CPC Framework",
  description: "Discover SG Early Budding in Hosur. We blend Ancient Noble Bharat Culture with Corporate Professional Culture for holistic early childhood & preschool education.",
  keywords: "SG Early Budding Hosur, best playschool in Hosur, preschool education, ANBC & CPC framework, early childhood learning, early budding habit architecture, child safety playschool Hosur",
  alternates: {
    canonical: "https://sgeducations.in/about/sg-early-budding/"
  }
};

export default function SGEarlyBuddingLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "AboutPage",
            "@id": "https://sgeducations.in/about/sg-early-budding/#webpage",
            "url": "https://sgeducations.in/about/sg-early-budding/",
            "name": "About SG Early Budding | Best Playschool in Hosur",
            "description": "Discover SG Early Budding in Hosur. We blend Ancient Noble Bharat Culture with Corporate Professional Culture for holistic early childhood education.",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://sgeducations.in/#website",
              "url": "https://sgeducations.in/",
              "name": "SG Educations"
            }
          },
          {
            "@type": "EducationalOrganization",
            "@id": "https://sgeducations.in/#organization",
            "name": "SG Early Budding",
            "url": "https://sgeducations.in/about/sg-early-budding/",
            "parentOrganization": {
              "@type": "EducationalOrganization",
              "name": "SG Educations",
              "url": "https://sgeducations.in/"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hosur",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "description": "SG Early Budding offers early childhood and preschool education integrating Ancient Noble Bharat Culture (ANBC) and Corporate Professional Culture (CPC)."
          },
          {
            "@type": "FAQPage",
            "@id": "https://sgeducations.in/about/sg-early-budding/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes SG Early Budding unique compared to other playschools in Hosur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SG Early Budding uniquely integrates Ancient Noble Bharat Culture (ANBC) with Corporate Professional Culture (CPC). This framework balances traditional values, moral character, and cultural roots with modern structured habits, communication skills, hygiene standards, and personality development, preparing children holistically for future schooling and life."
                }
              },
              {
                "@type": "Question",
                "name": "What age group does SG Early Budding cater to?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SG Early Budding caters to early childhood learners, typically ranging from 2 to 6 years of age. Our programs cover Playschool, Nursery, Junior KG, and Senior KG, offering age-appropriate experiential learning and foundational habit-building routines for each stage of development."
                }
              },
              {
                "@type": "Question",
                "name": "How does the \"One Day, One Good Thing\" program work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The \"One Day, One Good Thing\" program is a daily habit framework where children practice one small positive action every day, such as sharing, tidying up, or thanking a peer. This consistent daily practice builds long-term empathy, personal responsibility, and strong moral character."
                }
              },
              {
                "@type": "Question",
                "name": "What safety and security measures are implemented on campus?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our campus features comprehensive CCTV monitoring, controlled access gates, child-safe furniture, continuous sanitization of learning tools, clean drinking water, and trained, background-verified support staff to ensure maximum child safety, hygiene, and well-being throughout the school day."
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
