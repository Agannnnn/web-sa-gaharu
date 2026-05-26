// Auto-generated TypeScript declaration file for Sanity query outputs
// Keep this in sync with lib/sanity/queries.ts

export interface SanityAsset {
  _id: string;
  url?: string;
  originalFilename?: string;
  metadata?: any;
}

export interface SanityImageField {
  _type?: string;
  asset?: SanityAsset | null;
  [key: string]: any;
}

// About page
export interface AboutUsQueryResult {
  _id: string;
  _createdAt?: string;
  tahunAjaran?: string;
  banner1?: SanityImageField | null;
  visiMisiDanPilar?: SanityImageField | null;
  nilaiNilai?: SanityImageField | null;
}

// Landing page
export interface LandingPageTestimoni {
  pesan?: string;
  penulis?: string;
  jabatan?: string;
}

export interface LandingPageQueryResult {
  _id: string;
  _createdAt?: string;
  tahunAjaran?: string;
  carousel?: Array<SanityImageField & { [key: string]: any }>;
  banner1?: SanityImageField | null;
  testimoni?: LandingPageTestimoni[];
  banner2?: SanityImageField | null;
}

// Admission page
export interface AdmissionPageQueryResult {
  _id: string;
  _createdAt?: string;
  tahunAjaran?: string;
  banner?: SanityImageField | null;
  biayaPendaftaran?: Array<SanityImageField & { [key: string]: any }> | null;
}

// News
export interface NewsItem {
  _id: string;
  _createdAt?: string;
  title?: string;
  slug?: string;
  thumbnail?: SanityImageField | null;
  content?: any[];
}

// Repository
export interface RepositoryItem {
  _id: string;
  _createdAt?: string;
  title?: string;
  cover?: SanityImageField | null;
  documentPdf?: SanityImageField | null;
}

// Programs page
export interface ProgramsPageQueryResult {
  _id: string;
  _createdAt?: string;

  daycarePlaygroupLeaderImage?: SanityImageField | null;
  daycarePlaygroupCoordinator?: string | null;

  daycareThumbnail?: SanityImageField | null;

  playgroupThumbnail?: SanityImageField | null;

  raudhatulAthfalLeaderImage?: SanityImageField | null;
  raudhatulAthfalThumbnail?: SanityImageField | null;
  raudhatulAthfalCoordinator?: string | null;

  madrasahIbtidaiyahLeaderImage?: SanityImageField | null;
  madrasahIbtidaiyahThumbnail?: SanityImageField | null;
  madrasahIbtidaiyahCoordinator?: string | null;

  madrasahTsanawiyahLeaderImage?: SanityImageField | null;
  madrasahTsanawiyahThumbnail?: SanityImageField | null;
  madrasahTsanawiyahCoordinator?: string | null;

  sekolahAvicennaInklusiLeaderImage?: SanityImageField | null;
  sekolahAvicennaInklusiThumbnail?: SanityImageField | null;
  sekolahAvicennaInklusiCoordinator?: string | null;
}

export interface ProgramDetailPageResult {
  _id: string;
  tahunAkademik?: string;
  headerImage?: SanityImageField | null;
  contentImages?: Array<SanityImageField & { [key: string]: any }> | null;
  joinUsImage?: SanityImageField | null;
  galleryImages?: Array<SanityImageField & { [key: string]: any }> | null;
}

export interface Testimonial {
  message: string;
  owner: string;
  position: string;
}
