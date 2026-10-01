export const metadata = {
  title: "World-Class Campus Facilities in Hosur | SG Education",
  description: "Explore modern, child-safe facilities at SG Education Hosur: CCTV-enabled campus, smart classrooms, sensory play zones, and hygienic dining. Book a tour!",
  keywords: "preschool facilities in hosur, school infrastructure hosur, daycare facilities gokul nagar hosur, best kindergarten campus hosur, cctv school hosur, smart classrooms hosur, safe play area for kids hosur, child hygiene school hosur",
  alternates: {
    canonical: "https://sgeducations.in/facilities/"
  }
};

export default function FacilitiesLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://sgeducations.in/facilities/#webpage",
            "url": "https://sgeducations.in/facilities/",
            "name": "World-Class Campus Facilities in Hosur | SG Education",
            "description": "Explore modern, child-safe facilities at SG Education Hosur: CCTV-enabled campus, smart classrooms, sensory play zones, and hygienic dining.",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://sgeducations.in/#website",
              "url": "https://sgeducations.in/",
              "name": "SG Educations"
            }
          },
          {
            "@type": ["EducationalOrganization", "School"],
            "@id": "https://sgeducations.in/#organization",
            "name": "SG Education",
            "url": "https://sgeducations.in/",
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "24/7 CCTV Campus Surveillance",
                "value": "true"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Smart Audio-Visual Classrooms",
                "value": "true"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Indoor Sensory Play Gym",
                "value": "true"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Safe Outdoor Play Park",
                "value": "true"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Child-Safe Dining & RO Purified Water",
                "value": "true"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "GPS-Tracked School Transport",
                "value": "true"
              }
            ],
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
            "@id": "https://sgeducations.in/facilities/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What safety and security facilities are available at SG Education Hosur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SG Education features 24/7 CCTV surveillance across all classrooms and grounds, gated security entry, child-safe rounded furniture, fire extinguishers, first-aid stations, and trained female caretakers to ensure 100% physical and emotional safety for toddlers and young learners."
                }
              },
              {
                "@type": "Question",
                "name": "Does the school provide transportation facilities in Hosur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. SG Education operates safe, GPS-monitored school transport vans with trained drivers and female attendants, connecting Gokul Nagar, R K Road, and major residential neighborhoods across Hosur."
                }
              },
              {
                "@type": "Question",
                "name": "How does SG Education maintain hygiene in preschool play areas and restrooms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All classrooms, indoor play gyms, and child-sized restrooms undergo scheduled multi-stage sanitization twice daily using child-safe disinfectants. Restrooms are maintained by dedicated female staff with strict hygiene standards."
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
