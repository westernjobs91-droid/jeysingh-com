type Store = { name: string; where: string; price: string; href: string };

type Props = {
  name: string;
  description: string;
  path: string;
  image: string;
  pages: number;
  datePublished: string;
  about: string[];
  stores: Store[];
};

const SITE = "https://www.jeysingh.com";

// Turns "US$15", "from US$15" or "CA$29.99" into a schema.org Offer.
function toOffer(s: Store) {
  const m = s.price.match(/(US|CA)\$([\d.]+)/);
  if (!m) return null;
  return {
    "@type": "Offer",
    name: `${s.name} on ${s.where}`,
    price: m[2],
    priceCurrency: m[1] === "US" ? "USD" : "CAD",
    url: s.href,
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: s.where },
  };
}

export default function BookJsonLd(p: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: p.name,
    description: p.description,
    url: `${SITE}${p.path}`,
    image: `${SITE}${p.image}`,
    author: { "@type": "Person", name: "Jey Singh", url: SITE },
    bookFormat: "https://schema.org/EBook",
    inLanguage: "en",
    numberOfPages: p.pages,
    datePublished: p.datePublished,
    about: p.about,
    offers: p.stores.map(toOffer).filter(Boolean),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
