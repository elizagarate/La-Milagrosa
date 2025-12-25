
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Parroquia La Milagrosa`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default SEO;

// Datos Estructurados para la Parroquia (JSON-LD)
export const ParishSchema = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Church",
      "name": "Parroquia Nuestra Señora la Milagrosa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Federico García Lorca, 24",
        "addressLocality": "El Puerto de Santa María",
        "addressRegion": "Cádiz",
        "postalCode": "11500",
        "addressCountry": "ES"
      },
      "telephone": "+34956856561",
      "url": "https://parroquiamedallamilagrosa.es",
      "openingHours": "Mo-Fr 09:30-13:30, 17:30-20:45",
      "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.2880411756432!2d-6.243164323771478!3d36.59537117921828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dd0200e88049d%3A0xbad3285aeb766853!2sParroquia%20de%20La%20Virgen%20de%20la%20Medalla%20Milagrosa!5e0!3m2!1ses!2ses!4v1766564825654!5m2!1ses!2ses"
    })}
  </script>
);
