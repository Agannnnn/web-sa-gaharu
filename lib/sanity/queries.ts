import { defineQuery } from "next-sanity";

export const QUERY_ABOUT_US = defineQuery(`*[_type == "aboutUs"][0]{
  _id,
  _createdAt,
  tahunAjaran,
  banner1{..., asset->{_id, url, metadata}},
  visiMisiDanPilar{..., asset->{_id, url, metadata}},
  nilaiNilai{..., asset->{_id, url, metadata}}
}`);

export const QUERY_LANDING_PAGE = defineQuery(`*[_type == "landingPage"][0]{
  _id,
  _createdAt,
  tahunAjaran,
  carousel[]{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  banner1{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  testimoni[]{
    pesan,
    penulis,
    jabatan
  },
  banner2{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  }
}`);

export const QUERY_ADMISSION_PAGE = defineQuery(`*[_type == "admission"][0]{
  _id,
  _createdAt,
  tahunAjaran,
  banner{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  biayaPendaftaran[]{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  }
}`);

export const QUERY_NEWS_PAGE =
  defineQuery(`*[_type == "news"]|order(_createdAt desc)[0...6]{
  _id,
  _createdAt,
  title,
  "slug": array::join(string::split(lower(title), " "), "_"),
  thumbnail{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  content[]{...}
}`);

export const QUERY_REPOSITORY_PAGE = defineQuery(`*[_type == "repository"]{
  _id,
  _createdAt,
  title,
  cover{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  documentPdf{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  }
}`);

export const QUERY_PROGRAMS_PAGE = defineQuery(`*[_type == "programs"][0]{
  _id,
  _createdAt,

  daycareLeaderImage{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  daycareThumbnail{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  daycareCoordinator,

  playgroupLeaderImage{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  playgroupThumbnail{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  playgroupCoordinator,

  raudhatulAthfalLeaderImage{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  raudhatulAthfalThumbnail{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  raudhatulAthfalCoordinator,

  madrasahIbtidaiyahLeaderImage{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  madrasahIbtidaiyahThumbnail{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  madrasahIbtidaiyahCoordinator,

  madrasahTsanawiyahLeaderImage{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  madrasahTsanawiyahThumbnail{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  madrasahTsanawiyahCoordinator,

  sekolahAvicennaInklusiLeaderImage{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  sekolahAvicennaInklusiThumbnail{
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  sekolahAvicennaInklusiCoordinator
}`);

export const QUERY_DAYCARE_PAGE = defineQuery(`*[_type == "daycare"][0]{
  _id,
  tahunAkademik,
  headerImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  contentImages[]{
    ...,
    asset->{
      _id,
      url
    }
  },
  joinUsImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  galleryImages[]{
    ...,
    asset->{
      _id,
      url
    }
  }
}`);

export const QUERY_PLAYGROUP_PAGE = defineQuery(`*[_type == "playgroup"][0]{
  _id,
  tahunAkademik,
  headerImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  contentImages[]{
    ...,
    asset->{
      _id,
      url
    }
  },
  joinUsImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  galleryImages[]{
    ...,
    asset->{
      _id,
      url
    }
  }
}`);

export const QUERY_RAUDHATUL_ATHFAL_PAGE =
  defineQuery(`*[_type == "raudhatulAthfal"][0]{
  _id,
  tahunAkademik,
  headerImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  contentImages[]{
    ...,
    asset->{
      _id,
      url
    }
  },
  joinUsImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  galleryImages[]{
    ...,
    asset->{
      _id,
      url
    }
  }
}`);

export const QUERY_MADRASAH_IBTIDAIYAH_PAGE =
  defineQuery(`*[_type == "madrasahIbtidaiyah"][0]{
  _id,
  tahunAkademik,
  headerImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  contentImages[]{
    ...,
    asset->{
      _id,
      url
    }
  },
  joinUsImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  galleryImages[]{
    ...,
    asset->{
      _id,
      url
    }
  }
}`);

export const QUERY_MADRASAH_TSANAWIYAH_PAGE =
  defineQuery(`*[_type == "madrasahTsanawiyah"][0]{
  _id,
  tahunAkademik,
  headerImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  contentImages[]{
    ...,
    asset->{
      _id,
      url
    }
  },
  joinUsImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  galleryImages[]{
    ...,
    asset->{
      _id,
      url
    }
  }
}`);

export const QUERY_SEKOLAH_AVICENNA_INKLUSI_PAGE =
  defineQuery(`*[_type == "sekolahAvicennaInklusi"][0]{
  _id,
  tahunAkademik,
  headerImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  contentImages[]{
    ...,
    asset->{
      _id,
      url
    }
  },
  joinUsImage{
    ...,
    asset->{
      _id,
      url
    }
  },
  galleryImages[]{
    ...,
    asset->{
      _id,
      url
    }
  }
}`);

// Re-export generated declaration types so importing "@/lib/sanity/queries"
// exposes both runtime query constants and type declarations.
export type {
  AboutUsQueryResult,
  AdmissionPageQueryResult,
  LandingPageQueryResult,
  LandingPageTestimoni,
  NewsItem,
  ProgramDetailPageResult,
  ProgramsPageQueryResult,
  RepositoryItem,
  SanityAsset,
  SanityImageField,
} from "./queries.d";

// Also export all types through a small types module to ensure
// module-resolution works consistently with path aliases.
export * from "./types";
