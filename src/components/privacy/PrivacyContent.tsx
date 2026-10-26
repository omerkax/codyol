import privacy from '@public/images/privacy/privacy.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface PrivacySection {
  title: string;
  content: string;
}

interface ListSection {
  title: string;
  description?: string;
  items: ListItem[];
}

interface ListItem {
  title?: string;
  content: string;
  link?: {
    url: string;
    text: string;
  };
}

interface FormField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

const personalInfoSection: PrivacySection = {
  title: 'Toplanan Kişisel Veriler',
  content:
    'Web sitemizi ziyaret ettiğinizde, cihazınıza ve kullanım alışkanlıklarınıza ilişkin bazı teknik bilgiler otomatik olarak toplanabilir. Bu bilgiler; web tarayıcısı, IP adresi, zaman dilimi ve çerezleri kapsar. Ayrıca site üzerindeki sayfa görüntüleme ve etkileşim verileri analiz edilir. Bu veriler <span class="text-secondary dark:text-accent">"Cihaz Bilgileri"</span> olarak adlandırılır.',
};


const deviceInfoItems: ListItem[] = [
  {
    title: 'Çerezler (Cookies)',
    content:
      'Web sitesinin düzgün çalışması ve kullanıcı deneyiminin iyileştirilmesi amacıyla cihazınıza kaydedilen küçük veri dosyalarıdır. (Detaylı bilgi için: <a href="http://www.allaboutcookies.org" class="text-secondary">allaboutcookies.org</a>)',
  },
  {
    title: 'Log Kayıtları',
    content:
      'IP adresi, tarayıcı türü, ziyaret zamanı ve yönlendirme sayfaları gibi teknik verileri içerir.',
  },
  {
    title: 'Analitik Araçlar',
    content:
      'Site kullanımını ve performansı ölçmek amacıyla anonim analiz verileri toplanır.',
  },
];

// const orderInfoText =
//   'When you make or attempt to purchase through the Site, we collect information such as your name, email address, billing address, shipping address, payment details, and any other relevant data necessary to process your order.';

// const formFields: FormField[] = [
//   {
//     id: 'name',
//     name: 'name',
//     label: 'Your name',
//     placeholder: 'Enter your name',
//     type: 'text',
//   },
//   {
//     id: 'billing-shipping-addresses',
//     name: 'billing-shipping-addresses',
//     label: 'Billing and shipping addresses',
//     placeholder: 'Billing and shipping addresses',
//     type: 'text',
//   },
//   {
//     id: 'payment-information',
//     name: 'payment-information',
//     label: 'Payment information',
//     placeholder: 'credit card, PayPal, or bank details',
//     type: 'text',
//   },
//   {
//     id: 'email',
//     name: 'email',
//     label: 'Email address',
//     placeholder: 'Enter your email address',
//     type: 'email',
//   },
// ];

const useInfoSection: ListSection = {
  title: 'Kişisel Verilerin Kullanım Amaçları',
  description: 'Toplanan kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:',
  items: [
    { content: 'Web sitesinin güvenli ve kesintisiz çalışmasını sağlamak' },
    { content: 'Kullanıcı deneyimini iyileştirmek' },
    { content: 'İletişim ve teklif taleplerine yanıt vermek' },
    { content: 'Hizmetlerimiz hakkında bilgilendirme yapmak' },
  ],
};


const deviceInfoUsage: ListItem[] = [
  { content: 'Site performansını analiz etmek' },
  { content: 'Kullanıcı davranışlarını anonim olarak incelemek' },
  { content: 'Güvenlik risklerini tespit etmek' },
];


const sharingInfoSection: ListSection = {
  title: 'Kişisel Verilerin Paylaşımı',
  description:
    'Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz.',
  items: [
    {
      content:
        'Anonim analiz verileri, yalnızca site performansını ölçmek amacıyla analiz hizmetleri kapsamında kullanılabilir.',
    },
  ],
};


const rightsSection: ListSection = {
  title: 'Kullanıcı Hakları',
  description: '6698 sayılı KVKK kapsamında kullanıcılar:',
  items: [
    { content: 'Kişisel verilerinin işlenip işlenmediğini öğrenme' },
    { content: 'Kişisel verilere erişme ve düzeltilmesini talep etme' },
    { content: 'Verilerin silinmesini veya yok edilmesini isteme' },
    {
      content:
        'Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz: <a href="mailto:info@codyol.com" class="text-secondary dark:text-accent">info@codyol.com</a>',
    },
  ],
};


const simpleSections: PrivacySection[] = [
  {
    title: 'Çerez Tercihleri',
    content:
      'Tarayıcınız üzerinden çerez ayarlarınızı dilediğiniz zaman değiştirebilirsiniz.',
  },
  {
    title: 'Veri Güvenliği',
    content:
      'Codyol, kişisel verilerin güvenliğini sağlamak için gerekli teknik ve idari önlemleri almaktadır.',
  },
  {
    title: '18 Yaş Altı Kullanım',
    content: 'Web sitemiz 18 yaş altındaki bireylere yönelik değildir.',
  },
  {
    title: 'Politika Değişiklikleri',
    content:
      'Bu Gizlilik Politikası gerekli görüldüğünde güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır.',
  },
];

const PrivacyContent = () => {
  return (
    <section className="pb-[100px] pt-[100px]">
      <div className="main-container">
        <div className="space-y-[75px] privacy-policy">
          {/* Header Section */}
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h1 className="text-heading-5 sm:text-heading-4 md:text-heading-3 xl:text-heading-2 font-normal">Gizlilik Politikası</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Codyol Dijital Ajans olarak, codyol.com web sitesini ziyaret eden kullanıcıların gizliliğine önem veriyoruz.
                Bu Gizlilik Politikası, kişisel verilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.</p>

            </RevealAnimation>
          </div>

          {/* Policy Intro */}
          {/* <RevealAnimation delay={0.3}>
            <div className="space-y-2">
              <h4>Toplanan Kişisel Veriler</h4>
              <p>
                Web sitemizi ziyaret ettiğinizde veya bizimle iletişime geçtiğinizde aşağıdaki veriler toplanabilir. */}
                {/* <Link href="https://codyol.com" className="text-secondary dark:text-accent">
                  https://codyol.com
                </Link> */}
              {/* </p>
            </div>
          </RevealAnimation> */}
          {/* Personal Information Collection */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4>{personalInfoSection.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: personalInfoSection.content }} />
            </div>
            <RevealAnimation delay={0.5}>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                {deviceInfoItems.map((item, index) => (
                  <li key={index}>
                    <strong className="text-secondary dark:text-accent font-normal">{item.title} – </strong>
                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>
          {/* How We Use Information */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{useInfoSection.title}</h4>
                <p>{useInfoSection.description}</p>
              </div>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                {useInfoSection.items.map((item, index) => (
                  <li key={index}>{item.content}</li>
                ))}
              </ul>
              <div>
                <p className="text-secondary dark:text-accent">Toplanan teknik veriler aşağıdaki amaçlarla kullanılır:</p>
                <ul className="space-y-6 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                  {deviceInfoUsage.map((item, index) => (
                    <li key={index}>{item.content}</li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>

          {/* Sharing Information */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{sharingInfoSection.title}</h4>
                <p>{sharingInfoSection.description}</p>
              </div>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                {sharingInfoSection.items.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Your Rights */}
          <RevealAnimation delay={0.8}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{rightsSection.title}</h4>
                <p>{rightsSection.description}</p>
              </div>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                {rightsSection.items.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Simple Sections */}
          {simpleSections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.7 + index * 0.1}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4>{section.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
