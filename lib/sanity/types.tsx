export interface SanityReference {
  _type: "reference";
  _ref: string;
}

export interface SanityImage {
  _type: "image";
  asset: SanityReference;
}

export interface SanitySpan {
  _type: "span";
  _key: string;
  text: string;
  marks: string[];
}

export interface SanityMarkDef {
  _type: string;
  _key: string;
  href?: string;
}

export interface SanityBlock {
  _type: "block";
  _key: string;
  style: string;
  markDefs: SanityMarkDef[];
  children: SanitySpan[];
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface Article {
  mainImage: SanityImage;
  title: string;
  slug: SanitySlug;
  desc: string;
  body: (SanityBlock | SanityImage)[];
  author: string;
  authorTitle: string;
  authorImage: SanityImage;
  publishedAt: string;
  authorName: string;
}

export interface Partner {
  city: string;
  name: string;
  state: string;
  contact: SanityBlock[];
}
