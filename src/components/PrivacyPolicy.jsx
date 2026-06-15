import { company } from '../data/siteData.js';

const sections = [
  {
    title: 'Toplanan bilgiler',
    content:
      'Servis talebi oluşturduğunuzda ad soyad, telefon numarası, adres veya ilçe bilgisi, cihaz ve arıza açıklaması gibi hizmet sunmak için gerekli bilgileri toplayabiliriz.',
  },
  {
    title: 'Bilgilerin kullanımı',
    content:
      'Bu bilgiler servis randevusu oluşturmak, talebinizle ilgili sizinle iletişime geçmek, hizmet kalitesini artırmak ve yasal yükümlülükleri yerine getirmek amacıyla kullanılır.',
  },
  {
    title: 'Reklam ve ölçümleme',
    content:
      'Google Ads ve benzeri reklam platformları üzerinden gelen ziyaretlerde, reklam performansını ölçmek için çerezler ve dönüşüm izleme teknolojileri kullanılabilir. Bu veriler reklamların etkinliğini anlamak ve iletişim taleplerini takip etmek içindir.',
  },
  {
    title: 'Bilgi paylaşımı',
    content:
      'Kişisel bilgileriniz, hizmetin sağlanması için gerekli durumlar ve yasal zorunluluklar dışında üçüncü kişilerle satılmaz veya paylaşılmaz.',
  },
  {
    title: 'Saklama süresi',
    content:
      'Kişisel verileriniz, hizmet talebinin tamamlanması, müşteri desteği ve yasal saklama süreleri için gerekli olan makul süre boyunca saklanır.',
  },
  {
    title: 'Haklarınız',
    content:
      'Kişisel verilerinizle ilgili bilgi talep etme, düzeltme, silme veya işlenmesine itiraz etme haklarınız bulunur. Bu talepler için bizimle iletişime geçebilirsiniz.',
  },
];

function PrivacyPolicy() {
  return (
    <section className="bg-slate-50 px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-36">
      <div className="mx-auto max-w-4xl">
        <a className="text-sm font-black text-brand-800 transition hover:text-brand-950" href="/#hero">
          Ana sayfaya dön
        </a>

        <div className="mt-6 rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-brand-700">Yasal bilgilendirme</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">Gizlilik Politikası</h1>
          <p className="mt-4 text-base font-medium leading-7 text-slate-700">
            {company.name} olarak, servis talepleriniz kapsamında paylaştığınız kişisel bilgilerin gizliliğine önem veririz.
            Bu politika, web sitemiz ve reklam formlarımız üzerinden toplanan bilgilerin nasıl kullanıldığını açıklar.
          </p>

          <div className="mt-8 space-y-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-black text-slate-950">{section.title}</h2>
                <p className="mt-2 text-sm font-medium leading-7 text-slate-700">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-md bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700">
            <p>
              <strong className="text-slate-950">İletişim:</strong> {company.phone} - {company.email}
            </p>
            <p>
              <strong className="text-slate-950">Adres:</strong> {company.address}
            </p>
            <p className="mt-2 text-xs text-slate-500">Son güncelleme: 15 Haziran 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
