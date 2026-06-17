import { client } from "./client";
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

export const fetchBeranda = async () => {
  return await client.fetch<BerandaPage>(QUERY_BERANDA_PAGE);
};

export const fetchTentangKami = async () => {
  return await client.fetch<TentangKamiPage>(QUERY_TENTANG_KAMI_PAGE);
};

export const fetchAdmisi = async () => {
  return await client.fetch<AdmisiPage>(QUERY_ADMISI_PAGE);
};

export const fetchBerita = async () => {
  return await client.fetch<Berita[]>(QUERY_BERITA_PAGE);
};

export const fetchPustakaGaharu = async () => {
  return await client.fetch<PustakaGaharu[]>(QUERY_PUSTAKA_GAHARU_PAGE);
};

export const fetchProgram = async () => {
  return await client.fetch<ProgramPage>(QUERY_PROGRAM_PAGE);
};

export const fetchDaycareProgram = async () => {
  return await client.fetch<ProgramDetailPage>(QUERY_DAYCARE_PAGE);
};

export const fetchPlaygroupProgram = async () => {
  return await client.fetch<ProgramDetailPage>(QUERY_PLAYGROUP_PAGE);
};

export const fetchRaudhatulAthfalProgram = async () => {
  return await client.fetch<ProgramDetailPage>(QUERY_RAUDHATUL_ATHFAL_PAGE);
};

export const fetchMadrasahIbtidaiyahProgram = async () => {
  return await client.fetch<ProgramDetailPage>(QUERY_MADRASAH_IBTIDAIYAH_PAGE);
};

export const fetchMadrasahTsanawiyahProgram = async () => {
  return await client.fetch<ProgramDetailPage>(QUERY_MADRASAH_TSANAWIYAH_PAGE);
};

export const fetchSekolahAvicennaInklusiProgram = async () => {
  return await client.fetch<ProgramDetailPage>(
    QUERY_SEKOLAH_AVICENNA_INKLUSI_PAGE,
  );
};

export const fetchEkstrakurikulerProgram = async () => {
  return await client.fetch<EkstrakurikulerPage>(QUERY_EXTRACURICULAR_PAGE);
};

export const fetchEkstrakurikulerDetail = async (tipe: string) => {
  return await client.fetch<EkstrakurikulerItem[]>(
    QUERY_EXTRACURICULAR_DETAIL_PAGE,
    { tipe },
  );
};
