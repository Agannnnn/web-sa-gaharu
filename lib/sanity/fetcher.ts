import { sanityFetch } from "./live";
import {
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
} from "./queries";

export const fetchBeranda = async () => {
  const { data } = await sanityFetch({ query: QUERY_BERANDA_PAGE });
  return data;
};

export const fetchTentangKami = async () => {
  const { data } = await sanityFetch({ query: QUERY_TENTANG_KAMI_PAGE });
  return data;
};

export const fetchAdmisi = async () => {
  const { data } = await sanityFetch({ query: QUERY_ADMISI_PAGE });
  return data;
};

export const fetchBerita = async () => {
  const { data } = await sanityFetch({ query: QUERY_BERITA_PAGE });
  return data;
};

export const fetchPustakaGaharu = async () => {
  const { data } = await sanityFetch({ query: QUERY_PUSTAKA_GAHARU_PAGE });
  return data;
};

export const fetchProgram = async () => {
  const { data } = await sanityFetch({ query: QUERY_PROGRAM_PAGE });
  return data;
};

export const fetchDaycareProgram = async () => {
  const { data } = await sanityFetch({ query: QUERY_DAYCARE_PAGE });
  return data;
};

export const fetchPlaygroupProgram = async () => {
  const { data } = await sanityFetch({ query: QUERY_PLAYGROUP_PAGE });
  return data;
};

export const fetchRaudhatulAthfalProgram = async () => {
  const { data } = await sanityFetch({ query: QUERY_RAUDHATUL_ATHFAL_PAGE });
  return data;
};

export const fetchMadrasahIbtidaiyahProgram = async () => {
  const { data } = await sanityFetch({ query: QUERY_MADRASAH_IBTIDAIYAH_PAGE });
  return data;
};

export const fetchMadrasahTsanawiyahProgram = async () => {
  const { data } = await sanityFetch({ query: QUERY_MADRASAH_TSANAWIYAH_PAGE });
  return data;
};

export const fetchSekolahAvicennaInklusiProgram = async () => {
  const { data } = await sanityFetch({
    query: QUERY_SEKOLAH_AVICENNA_INKLUSI_PAGE,
  });
  return data;
};

export const fetchEkstrakurikulerProgram = async () => {
  const { data } = await sanityFetch({ query: QUERY_EXTRACURICULAR_PAGE });
  return data;
};

export const fetchEkstrakurikulerDetail = async (tipe: string) => {
  const { data } = await sanityFetch({
    query: QUERY_EXTRACURICULAR_DETAIL_PAGE,
    params: { tipe },
  });
  return data;
};
