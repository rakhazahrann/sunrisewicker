export type Lang = 'en' | 'id';
export type Page = 'home' | 'about' | 'products' | 'contact';

export const content = {
  en: {
    nav: { home: 'Home', about: 'About', products: 'Products', contact: 'Contact' },
    hero: { eyebrow: 'PE Synthetic Wicker / Made in Indonesia', title: 'Engineered to outlast the outdoors.', text: 'High-quality synthetic wicker shaped by advanced extrusion, thoughtful chemistry, and a deep understanding of woven furniture.', primary: 'Explore products', secondary: 'Talk to us' },
    benefits: ['Weather resistant', 'UV stabilized', '100% recyclable', 'Indoor & outdoor'],
    about: { eyebrow: 'Made beyond standards', title: 'Material innovation, woven into every strand.', text: 'SUNRISE(TM) is a high-quality Polyethylene synthetic wicker for outdoor furniture and indoor applications. Our latest extrusion technology combines in-house color compounding, antioxidants, and light stabilizers for lasting performance.', link: 'Discover our process' },
    product: { eyebrow: 'Product system', title: 'One material. Seven profiles. Endless expressions.', text: 'Explore 88 carefully developed combinations of profile, color, dimension, and surface.', all: 'All profiles', search: 'Search color or profile', count: 'products', more: 'Load more', catalog: 'Download catalog', empty: 'No products match this filter.' },
    aboutPage: { eyebrow: 'About SUNRISE', title: 'Built for weather. Designed for possibility.', lead: 'We manufacture PE synthetic wicker that gives furniture makers the freedom of natural texture without natural material limitations.', tech: 'Technology behind the texture', techText: 'Our extrusion process controls form, color, and finish with precision. In-house compounding builds character into each strand, while antioxidants and light stabilizers help protect material against demanding outdoor conditions and UV exposure.', responsible: 'A more responsible material', responsibleText: 'SUNRISE wicker is highly durable, environmentally friendly, and 100% recyclable. Long service life and material recoverability guide how we think about quality.' },
    contact: { eyebrow: 'Start a conversation', title: 'Let\u2019s build something that lasts.', text: 'Discuss specifications, colors, samples, or your next furniture collection with our team.', wa: 'Chat on WhatsApp', email: 'Send an email', address: 'Visit our facility', map: 'Open in Maps' },
    trust: {
      eyebrow: 'Why SUNRISE',
      title: 'Built on experience.',
      text: 'Numbers that reflect our commitment to quality and consistency.',
      stats: [
        { value: '88', label: 'Product variants', desc: 'Colors, profiles & surfaces' },
        { value: '7', label: 'Profile families', desc: 'Diverse shapes for every design' },
        { value: '100%', label: 'Recyclable', desc: 'Environmentally responsible PE' },
      ],
    },
    keyNumbers: {
      eyebrow: 'SUNRISE in numbers',
      title: 'Measured by results.',
      items: [
        { value: '88', label: 'Carefully developed product variants' },
        { value: '7', label: 'Distinct profile families' },
        { value: '100%', label: 'Recyclable PE material' },
      ],
    },
    form: {
      name: 'Full name',
      email: 'Email address',
      company: 'Company name',
      product: 'Product of interest',
      productOptions: ['Halfmoon Peel', 'Flat Oval', 'Flat Flat', 'Hollow', 'Round Core', 'U-Profile', 'Twisted Hyacinth', 'Other / General inquiry'],
      message: 'Your message',
      submit: 'Send inquiry',
      selectPlaceholder: 'Select a product family',
      hours: 'Operating hours',
      hoursValue: 'Mon — Fri, 08:00 — 17:00 WIB',
      formTitle: 'Send us an inquiry',
      formDesc: 'Fill out the form below and our team will get back to you within one business day.',
      mapTitle: 'Our location',
    },
    footer: 'High-quality PE synthetic wicker by PT. Karya Mandiri Indoplast.',
    backToTop: 'Back to top',
    requestSample: 'Request sample',
  },
  id: {
    nav: { home: 'Beranda', about: 'Tentang', products: 'Produk', contact: 'Kontak' },
    hero: { eyebrow: 'Rotan Sintetis PE / Buatan Indonesia', title: 'Dirancang untuk melampaui cuaca.', text: 'Rotan sintetis berkualitas tinggi, dibentuk melalui ekstrusi modern, formulasi terukur, dan pemahaman mendalam tentang furnitur anyaman.', primary: 'Jelajahi produk', secondary: 'Hubungi kami' },
    benefits: ['Tahan cuaca', 'Stabilisasi UV', '100% dapat didaur ulang', 'Indoor & outdoor'],
    about: { eyebrow: 'Dibuat melampaui standar', title: 'Inovasi material dalam setiap helai.', text: 'SUNRISE(TM) adalah rotan sintetis Polyethylene berkualitas tinggi untuk furnitur outdoor maupun aplikasi indoor. Teknologi ekstrusi terbaru memadukan pewarnaan internal, antioksidan, dan light stabilizer untuk performa tahan lama.', link: 'Kenali proses kami' },
    product: { eyebrow: 'Sistem produk', title: 'Satu material. Tujuh profil. Ekspresi tanpa batas.', text: 'Jelajahi 88 kombinasi profil, warna, dimensi, dan permukaan yang dikembangkan secara teliti.', all: 'Semua profil', search: 'Cari warna atau profil', count: 'produk', more: 'Tampilkan lainnya', catalog: 'Unduh katalog', empty: 'Tidak ada produk yang cocok.' },
    aboutPage: { eyebrow: 'Tentang SUNRISE', title: 'Tangguh menghadapi cuaca. Bebas untuk berkarya.', lead: 'Kami memproduksi rotan sintetis PE yang memberi kebebasan tekstur alami tanpa keterbatasan material alami.', tech: 'Teknologi di balik tekstur', techText: 'Proses ekstrusi kami mengendalikan bentuk, warna, dan hasil akhir secara presisi. Peracikan warna internal membangun karakter setiap helai, sementara antioksidan dan light stabilizer membantu melindungi material dari kondisi outdoor dan paparan UV.', responsible: 'Material yang lebih bertanggung jawab', responsibleText: 'Rotan SUNRISE sangat tahan lama, ramah lingkungan, dan 100% dapat didaur ulang. Usia pakai panjang dan pemulihan material menjadi bagian dari cara kami memandang kualitas.' },
    contact: { eyebrow: 'Mulai percakapan', title: 'Mari membuat sesuatu yang bertahan lama.', text: 'Diskusikan spesifikasi, warna, sampel, atau koleksi furnitur Anda berikutnya bersama tim kami.', wa: 'Chat WhatsApp', email: 'Kirim email', address: 'Kunjungi fasilitas kami', map: 'Buka di Maps' },
    trust: {
      eyebrow: 'Mengapa SUNRISE',
      title: 'Dibangun dari pengalaman.',
      text: 'Angka yang mencerminkan komitmen kami terhadap kualitas dan konsistensi.',
      stats: [
        { value: '88', label: 'Varian produk', desc: 'Warna, profil & permukaan' },
        { value: '7', label: 'Keluarga profil', desc: 'Beragam bentuk untuk setiap desain' },
        { value: '100%', label: 'Dapat didaur ulang', desc: 'PE yang ramah lingkungan' },
      ],
    },
    keyNumbers: {
      eyebrow: 'SUNRISE dalam angka',
      title: 'Diukur dari hasil.',
      items: [
        { value: '88', label: 'Varian produk yang dikembangkan' },
        { value: '7', label: 'Keluarga profil berbeda' },
        { value: '100%', label: 'Material PE dapat didaur ulang' },
      ],
    },
    form: {
      name: 'Nama lengkap',
      email: 'Alamat email',
      company: 'Nama perusahaan',
      product: 'Produk yang diminati',
      productOptions: ['Halfmoon Peel', 'Flat Oval', 'Flat Flat', 'Hollow', 'Round Core', 'U-Profile', 'Twisted Hyacinth', 'Lainnya / Pertanyaan umum'],
      message: 'Pesan Anda',
      submit: 'Kirim pertanyaan',
      selectPlaceholder: 'Pilih keluarga produk',
      hours: 'Jam operasional',
      hoursValue: 'Senin — Jumat, 08:00 — 17:00 WIB',
      formTitle: 'Kirim pertanyaan Anda',
      formDesc: 'Isi formulir di bawah dan tim kami akan menghubungi Anda dalam satu hari kerja.',
      mapTitle: 'Lokasi kami',
    },
    footer: 'Rotan sintetis PE berkualitas tinggi oleh PT. Karya Mandiri Indoplast.',
    backToTop: 'Kembali ke atas',
    requestSample: 'Minta sampel',
  },
} as const;

export const pathFor = (lang: Lang, page: Page) => `${lang === 'id' ? '/id' : ''}${page === 'home' ? '/' : `/${page}`}`.replace('//', '/');
