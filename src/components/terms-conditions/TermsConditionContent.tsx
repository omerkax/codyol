import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TermsConditionContent = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] pt-[100px]">
      <div className="main-container">
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Kullanım Koşulları</h2>
            <div className="space-y-7">
              <p>
                Bu web sitesi (codyol.com) Codyol Digital Agency (bundan sonra “Codyol” olarak anılacaktır) tarafından işletilmektedir. Siteyi ziyaret eden veya hizmetlerimizden yararlanan herkes aşağıda belirtilen şartları kabul etmiş sayılır.

              </p>
              <p>
                Bu koşulları kabul etmiyorsanız, lütfen siteyi kullanmayınız.
              </p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>1. Sorumluluğun Sınırlandırılması</h3>
              <p>
                Codyol, web sitesi veya sunulan hizmetlerin kullanımından ya da kullanılamamasından doğabilecek doğrudan veya dolaylı zararlardan sorumlu tutulamaz. Buna; veri kaybı, iş kesintisi, kâr kaybı veya benzeri durumlar dahildir.
              </p>
              <p>
                Site üzerindeki içerikler “olduğu gibi” sunulmakta olup, herhangi bir garanti verilmemektedir.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>2. Hizmet ve Lisans</h3>
              <p>
                Codyol tarafından sunulan tüm web tasarım, yazılım, dijital danışmanlık ve benzeri hizmetler ticari sözleşme kapsamında sağlanır. Satın alınan hizmet yalnızca ilgili müşteri için geçerlidir ve üçüncü kişilere devredilemez.
              </p>
              <p>
                Codyol’un yazılı izni olmadan hizmetlerin kopyalanması, yeniden satılması veya dağıtılması yasaktır.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>3. Fikri Mülkiyet Hakları</h3>
              <p>
                Bu web sitesinde yer alan tüm içerikler (tasarım, metin, görsel, logo, kod vb.) Codyol'a aittir veya lisanslı olarak kullanılmaktadır. İzinsiz kullanım, kopyalama veya çoğaltma yasaktır.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>4. İade Politikası</h3>
              <p>
                Codyol, müşteri memnuniyetini ön planda tutar. Hizmetten memnun kalmamanız durumunda, proje başlangıcından itibaren 14 gün içinde yazılı talep ile iade talebinde bulunabilirsiniz.
              </p>
              <p>
                Tamamlanmış veya teslim edilmiş projeler için iade hakkı bulunmamaktadır. Özel talepler doğrultusunda geliştirilen hizmetlerde iade şartları proje sözleşmesine göre değerlendirilir.
              </p>
            </div>
          </RevealAnimation>
          {/* <RevealAnimation delay={0.4}>
            <Link 
              href="/refund-policy"
              className="section-button btn dark:btn-accent hover:btn-primary btn-xl btn-secondary">
              İade Politikası Hakkında Detaylı Bilgi
            </Link>
          </RevealAnimation> */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>5. Garanti</h3>
              <p>
            Codyol tarafından sunulan hizmetler, tarayıcı, cihaz veya üçüncü parti sistemlerle tam uyumluluk garantisi verilmeksizin sunulur. Hizmet almadan önce detaylar tarafınıza açıkça iletilir.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>6. Hesap Askıya Alma ve Sonlandırma</h3>
              <p>
               Codyol, aşağıdaki durumlarda kullanıcı erişimini geçici veya kalıcı olarak sonlandırma hakkını saklı tutar:
              </p>
              <ul>
                <li>Kötüye kullanım veya kötü niyetli davranış</li>
                <li>Yanıltıcı bilgi paylaşımı</li>
                <li>İzinsiz kullanım veya kopyalama</li>
                <li>Güvenlik ihlali oluşturabilecek faaliyetler</li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>7. Gizlilik Politikası</h3>
              <p>
             Codyol, kullanıcı gizliliğine önem verir. Kişisel verileriniz üçüncü kişilerle paylaşılmaz, satılmaz veya kiralanmaz.
              </p>
               <p>
            Toplanan veriler yalnızca şu amaçlarla kullanılır:
              </p>
              <ul>
                <li>Hizmet sunumu</li>
                <li>İletişim ve destek</li>
                <li>Faturalandırma işlemleri</li>
                <li>Yasal yükümlülükler</li> 
              </ul>
              <p>
               Siteyi kullanarak gizlilik politikamızı kabul etmiş olursunuz.
              </p>
            </div>
          </RevealAnimation>
          {/* <RevealAnimation delay={0.4}>
            <Link
              href="/refund-policy"
              className="section-button btn btn-xl dark:btn-accent hover:btn-primary btn-secondary">
              Gizlilik Politikası Detayları
            </Link>
          </RevealAnimation> */}
        </article>
      </div>
    </section>
  );
};

export default TermsConditionContent;
