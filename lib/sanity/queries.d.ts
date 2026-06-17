export interface SanityAsset {
  _id: string;
  url?: string;
  metadata?: any;
}

export interface SanityImageField {
  _type?: string;
  asset?: SanityAsset | null;
  [key: string]: any;
}

export interface Testimonial {
  pesan?: string;
  penulis?: string;
}

export interface BerandaPage {
  _id: string;
  _createdAt?: string;
  tahunAjaran?: string;
  carousel?: Array<SanityImageField & { [key: string]: any }>;
  banner1?: SanityImageField | null;
  testimoni?: Testimonial[];
  banner2?: SanityImageField | null;
}

export interface TentangKamiPage {
  _id: string;
  _createdAt?: string;
  tahunAjaran?: string;
  banner1?: SanityImageField | null;
  visiMisiDanPilar?: SanityImageField | null;
  nilaiNilai?: SanityImageField | null;
}

export interface AdmisiPage {
  _id: string;
  _createdAt?: string;
  tahunAjaran?: string;
  banner?: SanityImageField | null;
  biayaPendaftaran?: Array<SanityImageField & { [key: string]: any }> | null;
}

export interface Berita {
  _id: string;
  _createdAt?: string;
  judul?: string;
  slug?: string;
  thumbnail?: SanityImageField | null;
  thumbnailAlt?: string;
  konten?: any[];
}

export interface PustakaGaharu {
  _id: string;
  _createdAt?: string;
  judul?: string;
  cover?: SanityImageField | null;
  link?: string;
  caption?: string;
}

export interface ProgramPage {
  _id: string;
  _createdAt?: string;

  daycareLeaderImage?: SanityImageField | null;
  daycareCoordinator?: string | null;
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

export interface ProgramDetailPage {
  _id: string;
  tahunAkademik?: string;
  headerImage?: SanityImageField | null;
  contentImages?: Array<SanityImageField & { [key: string]: any }> | null;
  joinUsImage?: SanityImageField | null;
  galleryImages?: Array<SanityImageField & { [key: string]: any }> | null;
}

export interface EkstrakurikulerPage {
  _id: string;
  _createdAt?: string;
  basketBallThumbnail?: SanityImageField | null;
  taekwondoThumbnail?: SanityImageField | null;
  handletteringThumbnail?: SanityImageField | null;
  roboticClubThumbnail?: SanityImageField | null;
  archeryClubThumbnail?: SanityImageField | null;
  kpaThumbnail?: SanityImageField | null;
  artClubThumbnail?: SanityImageField | null;
  steamClubThumbnail?: SanityImageField | null;
  englishClubThumbnail?: SanityImageField | null;
}

export interface EkstrakurikulerItem {
  _id: string;
  _createdAt?: string;
  judul?: string;
  thumbnail?: SanityImageField | null;
  thumbnailAlt?: string;
  konten?: any[];
}
