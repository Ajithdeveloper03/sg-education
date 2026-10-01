export const metadata = {
  title: "School Motto: Educate, Empower, Elevate | SG Education Hosur",
  description: "Discover the motto of SG Education Hosur: Educate, Empower, Elevate. We blend ANBC cultural roots with modern CPC life skills to nurture confident young leaders.",
  keywords: "school motto SG education, educate empower elevate hosur, preschool core values hosur, ancient bharath culture school, early education values hosur, holistic child growth Hosur, ANBC and CPC Hosur",
  alternates: {
    canonical: "https://sgeducations.in/about/school-motto/"
  }
};

export default function SchoolMottoLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "AboutPage",
            "@id": "https://sgeducations.in/about/school-motto/#webpage",
            "url": "https://sgeducations.in/about/school-motto/",
            "name": "School Motto: Educate, Empower, Elevate | SG Education Hosur",
            "description": "Discover the school motto of SG Education Hosur: Educate, Empower, Elevate. Blending ancient cultural values with modern early life skills.",
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
            "name": "SG Education",
            "url": "https://sgeducations.in/",
            "slogan": "Educate, Empower, Elevate",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "181, Gopikrishna Colony, R K Road, Gokul Nagar",
              "addressLocality": "Hosur",
              "addressRegion": "Tamil Nadu",
              "postalCode": "635109",
              "addressCountry": "IN"
            }
          },
          {
            "@type": "FAQPage",
            "@id": "https://sgeducations.in/about/school-motto/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the official school motto of SG Education Hosur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The official motto of SG Education and SG Early Budding is 'Educate, Empower, Elevate.' It represents our holistic mission to impart conceptual knowledge, instill practical 21st-century life competencies, and elevate children’s moral and intellectual character."
                }
              },
              {
                "@type": "Question",
                "name": "How does SG Education apply 'Educate, Empower, Elevate' to preschool students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For early learners in Toddler, Nursery, and Kindergarten, 'Educate' focuses on sensory discovery and language; 'Empower' builds self-expression and motor independence; and 'Elevate' instills foundational values through our daily 'One Day, One Good Thing' habit routine."
                }
              },
              {
                "@type": "Question",
                "name": "How does the school motto connect with Ancient Noble Bharat Culture (ANBC)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The 'Elevate' pillar of our motto directly stems from ANBC values. It teaches children respect for teachers, parents, and nature, personal humility, and social responsibility, ensuring academic growth is always paired with strong moral character."
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
