export const metadata = {
  title: "Vision & Mission | SG Education Hosur | Values, ANBC & Leadership",
  description: "Explore the Vision & Mission of SG Education in Hosur. We integrate ancient values (ANBC) with corporate professional skills to build ethical, future-ready leaders.",
  keywords: "SG Education vision and mission, preschool philosophy Hosur, holistic education Hosur, ancient bharath culture school, early education values, ANBC and CPC Hosur, character building for kids",
  alternates: {
    canonical: "https://sgeducations.in/about/vision-mission/"
  }
};

export default function VisionMissionLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "AboutPage",
            "@id": "https://sgeducations.in/about/vision-mission/#webpage",
            "url": "https://sgeducations.in/about/vision-mission/",
            "name": "Vision & Mission | SG Education Hosur",
            "description": "Explore the Vision & Mission of SG Education in Hosur. Blending ancient values with corporate professional skills to build ethical, future-ready leaders.",
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
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rangopanditha Agraharam Village, Gokul Nagar",
              "addressLocality": "Hosur",
              "addressRegion": "Tamil Nadu",
              "postalCode": "635109",
              "addressCountry": "IN"
            },
            "slogan": "Cultivating Ancient Wisdom & Modern Excellence",
            "knowsAbout": [
              "Ancient Noble Bharat Culture (ANBC)",
              "Corporate Professional Culture (CPC)",
              "Early Childhood Education",
              "Holistic Child Development"
            ]
          },
          {
            "@type": "FAQPage",
            "@id": "https://sgeducations.in/about/vision-mission/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the primary educational mission of SG Education in Hosur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The mission of SG Education is to blend ancient cultural wisdom with modern professional excellence. By combining Ancient Noble Bharat Culture (ANBC) and Corporate Professional Culture (CPC), we cultivate intellectually curious, morally disciplined, and future-ready children from toddlerhood through primary grades."
                }
              },
              {
                "@type": "Question",
                "name": "How does SG Education define Ancient Noble Bharat Culture (ANBC)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ancient Noble Bharat Culture represents the timeless ethical traditions, moral values, respect for family, and self-discipline of ancient India. In our classrooms, ANBC is translated into daily good habits, respectful communication, and empathy toward peers and community."
                }
              },
              {
                "@type": "Question",
                "name": "Why does early childhood education need Corporate Professional Culture (CPC)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Corporate Professional Culture introduces essential 21st-century life competencies early—such as structured routines, time management, verbal clarity, team collaboration, and proactive problem-solving. This equips children with the confidence and adaptability needed for modern schooling and future careers."
                }
              },
              {
                "@type": "Question",
                "name": "How are parents involved in achieving SG Education’s mission?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We believe education is a tripartite partnership between teachers, parents, and students. SG Education conducts regular parent consultations, interactive developmental milestone updates, and family orientation workshops to ensure continuous, aligned growth at school and at home."
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
