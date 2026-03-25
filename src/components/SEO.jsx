import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, canonical, ogImage, keywords, schemaOrg }) {
  const siteName = 'GREENSTRIX'
  const defaultOgImage = '/img/greenstrix-homepage-new.webp'
  const defaultCanonical = 'https://greenstrix.com/'

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical || defaultCanonical} />

      {/* International SEO */}
      <link rel="alternate" href={canonical || defaultCanonical} hrefLang="x-default" />
      <link rel="alternate" href={canonical || defaultCanonical} hrefLang="en" />
      <link rel="alternate" href={canonical || defaultCanonical} hrefLang="en-GB" />
      <link rel="alternate" href={canonical || defaultCanonical} hrefLang="de-DE" />
      <link rel="alternate" href={canonical || defaultCanonical} hrefLang="nl-NL" />
      <link rel="alternate" href={canonical || defaultCanonical} hrefLang="pl-PL" />
      <link rel="alternate" href={canonical || defaultCanonical} hrefLang="it-IT" />
      <link rel="alternate" href={canonical || defaultCanonical} hrefLang="fr-FR" />
      <link rel="alternate" href={canonical || defaultCanonical} hrefLang="es-PE" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || defaultCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="de_DE" />
      <meta property="og:locale:alternate" content="nl_NL" />
      <meta property="og:locale:alternate" content="pl_PL" />
      <meta property="og:locale:alternate" content="it_IT" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="es_PE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      {/* Schema.org JSON-LD */}
      {schemaOrg && (
        <script type="application/ld+json">
          {JSON.stringify(schemaOrg)}
        </script>
      )}
    </Helmet>
  )
}
