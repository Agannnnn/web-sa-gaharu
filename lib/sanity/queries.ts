import { defineQuery } from "next-sanity";

export const QUERY_TENTANG_KAMI_PAGE =
  defineQuery(`*[_type == "tentangKami"][0]{
  _id,
  banner1{..., asset->{_id, url, metadata}},
  visiMisiDanPilar{..., asset->{_id, url, metadata}},
  nilaiNilai{..., asset->{_id, url, metadata}}
}`);

export const QUERY_BERANDA_PAGE = defineQuery(`*[_type == "beranda"][0]{
  _id,
  carousel[]{..., asset->{_id, url, metadata}},
  banner1{..., asset->{_id, url, metadata}},
  testimoni[]{pesan, penulis},
  banner2{..., asset->{_id, url, metadata}}
}`);

export const QUERY_ADMISI_PAGE = defineQuery(`*[_type == "admisi"][0]{
  _id,
  banner{..., asset->{_id, url, metadata}},
  biayaPendaftaran[]{..., asset->{_id, url, metadata}}
}`);

export const QUERY_BERITA_PAGE =
  defineQuery(`*[_type == "berita"]|order(_createdAt desc)[0...6]{
  _id,
  judul,
  thumbnail{..., asset->{_id, url, metadata}},
  thumbnailAlt,
  konten[]{...}
}`);

export const QUERY_PUSTAKA_GAHARU_PAGE =
  defineQuery(`*[_type == "pustakaGaharu"]|order(_createdAt desc){
  _id,
  _createdAt,
  judul,
  cover{..., asset->{_id, url, metadata}},
  caption,
  link
}`);

export const QUERY_PROGRAM_PAGE = defineQuery(`*[_type == "program"][0]{
  _id,
  _createdAt,
  daycareLeaderImage{..., asset->{_id, url, metadata}},
  daycareThumbnail{..., asset->{_id, url, metadata}},
  daycareCoordinator,

  playgroupLeaderImage{..., asset->{_id, url, metadata}},
  playgroupThumbnail{..., asset->{_id, url, metadata}},
  playgroupCoordinator,

  raudhatulAthfalLeaderImage{..., asset->{_id, url, metadata}},
  raudhatulAthfalThumbnail{..., asset->{_id, url, metadata}},
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

export const QUERY_EXTRACURICULAR_PAGE =
  defineQuery(`*[_type == "ekstrakulikuler"][0]{
  _id,
  _createdAt,

  basketBallThumbnail{..., asset->{_id, url, metadata}},
  taekwondoThumbnail{..., asset->{_id, url, metadata}},
  handletteringThumbnail{..., asset->{_id, url, metadata}},
  roboticClubThumbnail{..., asset->{_id, url, metadata}},
  archeryClubThumbnail{..., asset->{_id, url, metadata}},
  kpaThumbnail{..., asset->{_id, url, metadata}},
  artClubThumbnail{..., asset->{_id, url, metadata}},
  steamClubThumbnail{..., asset->{_id, url, metadata}},
  englishClubThumbnail{..., asset->{_id, url, metadata}}
}`);

export const QUERY_EXTRACURICULAR_DETAIL_PAGE =
  defineQuery(`*[_type == "ekstrakurikulerItems" && tipe == $tipe][0..6]{
  _id,
  _createdAt,
  judul,
  thumbnail{..., asset->{_id, url, metadata}},
  thumbnailAlt,
  konten
}`);

export type {
  SanityAsset,
  SanityImageField,
  Testimonial,
  BerandaPage,
  TentangKamiPage,
  AdmisiPage,
  Berita,
  PustakaGaharu,
  ProgramPage,
  ProgramDetailPage,
  EkstrakurikulerPage,
  EkstrakurikulerItem,
} from "./queries.d";

export * from "./types";
