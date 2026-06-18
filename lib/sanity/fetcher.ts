import { sanityFetch } from "./live";
import {
  AdmisiPage,
  BerandaPage,
  Berita,
  EkstrakurikulerItem,
  EkstrakurikulerPage,
  ProgramDetailPage,
  ProgramPage,
  PustakaGaharu,
  QUERY_ADMISI_PAGE,
  QUERY_BERANDA_PAGE,
  QUERY_BERITA_PAGE,
  QUERY_DAYCARE_PAGE,
  QUERY_EXTRACURICULAR_DETAIL_PAGE,
  QUERY_EXTRACURICULAR_PAGE,
  QUERY_MADRASAH_IBTIDAIYAH_PAGE,
  QUERY_MADRASAH_TSANAWIYAH_PAGE,
  QUERY_PLAYGROUP_PAGE,
  QUERY_PROGRAM_PAGE,
  QUERY_PUSTAKA_GAHARU_PAGE,
  QUERY_RAUDHATUL_ATHFAL_PAGE,
  QUERY_SEKOLAH_AVICENNA_INKLUSI_PAGE,
  QUERY_TENTANG_KAMI_PAGE,
  TentangKamiPage,
} from "./queries";

export const fetchBeranda = async (): Promise<BerandaPage | null> => {
  const { data } = await sanityFetch({ query: QUERY_BERANDA_PAGE });
  return data as BerandaPage | null;
};

export const fetchTentangKami = async (): Promise<TentangKamiPage | null> => {
  const { data } = await sanityFetch({ query: QUERY_TENTANG_KAMI_PAGE });
  return data as TentangKamiPage | null;
};

export const fetchAdmisi = async (): Promise<AdmisiPage | null> => {
  const { data } = await sanityFetch({ query: QUERY_ADMISI_PAGE });
  return data as AdmisiPage | null;
};

export const fetchBerita = async (): Promise<Berita | null> => {
  const { data } = await sanityFetch({ query: QUERY_BERITA_PAGE });
  return data as Berita | null;
};

export const fetchPustakaGaharu = async (): Promise<PustakaGaharu | null> => {
  const { data } = await sanityFetch({ query: QUERY_PUSTAKA_GAHARU_PAGE });
  return data as PustakaGaharu | null;
};

export const fetchProgram = async (): Promise<ProgramPage | null> => {
  const { data } = await sanityFetch({ query: QUERY_PROGRAM_PAGE });
  return data as PustakaGaharu | null;
};

export const fetchDaycareProgram =
  async (): Promise<ProgramDetailPage | null> => {
    const { data } = await sanityFetch({ query: QUERY_DAYCARE_PAGE });
    return data as ProgramDetailPage | null;
  };

export const fetchPlaygroupProgram =
  async (): Promise<ProgramDetailPage | null> => {
    const { data } = await sanityFetch({ query: QUERY_PLAYGROUP_PAGE });
    return data as ProgramDetailPage | null;
  };

export const fetchRaudhatulAthfalProgram =
  async (): Promise<ProgramDetailPage | null> => {
    const { data } = await sanityFetch({ query: QUERY_RAUDHATUL_ATHFAL_PAGE });
    return data as ProgramDetailPage | null;
  };

export const fetchMadrasahIbtidaiyahProgram =
  async (): Promise<ProgramDetailPage | null> => {
    const { data } = await sanityFetch({
      query: QUERY_MADRASAH_IBTIDAIYAH_PAGE,
    });
    return data as ProgramDetailPage | null;
  };

export const fetchMadrasahTsanawiyahProgram =
  async (): Promise<ProgramDetailPage | null> => {
    const { data } = await sanityFetch({
      query: QUERY_MADRASAH_TSANAWIYAH_PAGE,
    });
    return data as ProgramDetailPage | null;
  };

export const fetchSekolahAvicennaInklusiProgram =
  async (): Promise<ProgramDetailPage | null> => {
    const { data } = await sanityFetch({
      query: QUERY_SEKOLAH_AVICENNA_INKLUSI_PAGE,
    });
    return data as ProgramDetailPage | null;
  };

export const fetchEkstrakurikulerProgram =
  async (): Promise<EkstrakurikulerPage | null> => {
    const { data } = await sanityFetch({ query: QUERY_EXTRACURICULAR_PAGE });
    return data as EkstrakurikulerPage | null;
  };

export const fetchEkstrakurikulerDetail = async (
  tipe: string,
): Promise<EkstrakurikulerItem[] | null> => {
  const { data } = await sanityFetch({
    query: QUERY_EXTRACURICULAR_DETAIL_PAGE,
    params: { tipe },
  });
  return data as EkstrakurikulerItem[] | null;
};
