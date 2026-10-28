import corelinkImg from '@public/images/codyol/products/corelink.webp';
import klubyolImg from '@public/images/codyol/products/klubyol.webp';
import labyolImg from '@public/images/codyol/products/labyol.webp';
import plotyolImg from '@public/images/codyol/products/plotyol.webp';
import { StaticImageData } from 'next/image';

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  image: StaticImageData;
  // Ürünün marka rengi (kart vurguları için)
  color: string;
  url?: string;
}

// Not: Görseller örnek verilerle hazırlanmış temsili panellerdir.
export const products: Product[] = [
  {
    slug: 'plotyol',
    name: 'PlotYol',
    category: 'İnşaat & Gayrimenkul',
    tagline: 'Ada ve parselden dakikalar içinde imar etüdü',
    description:
      'Ada, parsel ve plan notunu girin; PlotYol imar hesabını, kat dağılımını, vaziyet planını ve 3D kütle modelini çıkarıp PDF teknik rapora dönüştürsün.',
    features: ['TAKS / KAKS ve emsal hesabı', 'Kat ve daire dağılımı senaryoları', '3D kütle ve PDF rapor'],
    image: plotyolImg,
    color: '#0f766e',
    url: 'https://plotyol.com',
  },
  {
    slug: 'labyol',
    name: 'LabYol',
    category: 'Yapı Malzemesi Laboratuvarları',
    tagline: 'Beton test laboratuvarları için uçtan uca yönetim',
    description:
      'Numune kabulünden kür takibine, deney sonuçlarından EBİSTR bildirimine kadar akredite beton laboratuvarlarının tüm iş akışını tek panelde toplar.',
    features: ['EBİSTR entegrasyonu', 'Kür ve kırım takibi', 'Cari, fatura ve SMS bildirimleri'],
    image: labyolImg,
    color: '#2563eb',
  },
  {
    slug: 'klubyol',
    name: 'Klubyol',
    category: 'Spor Kulüpleri',
    tagline: 'Amatör futbol kulüplerine hazır web sitesi',
    description:
      'Kulüpler; haber, fikstür, kadro, galeri ve sponsorlarını tek panelden yönetir. Alan adı, kurulum ve yayına alma süreci otomatik ilerler.',
    features: ['Kulübe özel hazır şablonlar', 'Haber, fikstür ve kadro yönetimi', 'Otomatik alan adı ve yayın'],
    image: klubyolImg,
    color: '#16a34a',
    url: 'https://klubyol.com.tr',
  },
  {
    slug: 'corelink',
    name: 'Corelink',
    category: 'Yangın Güvenliği',
    tagline: 'Yangın söndürme firmaları için ERP + CRM',
    description:
      'Yangın tüpü ve söndürme sistemi satan firmalar müşterilerini, ekipmanlarını, dolum ve bakım işlerini takip eder; müşterileri de kendi portallarından durumlarını izler.',
    features: ['Ekipman ve bakım takvimi', 'Servis talepleri ve teklifler', 'Müşteri portalı'],
    image: corelinkImg,
    color: '#dc2626',
  },
];
