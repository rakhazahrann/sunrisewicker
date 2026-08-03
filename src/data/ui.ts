export type Lang = 'en' | 'id';
export type Page = 'home' | 'about' | 'products' | 'contact';

export const content = {
  en: {
    nav: { home: 'Home', about: 'About', products: 'Products', contact: 'Contact' },
    hero: { eyebrow: 'PE Synthetic Wicker / Made in Indonesia', title: 'Engineered to outlast the outdoors.', text: 'High-quality synthetic wicker shaped by advanced extrusion, thoughtful chemistry, and a deep understanding of woven furniture.', primary: 'Explore products', secondary: 'Talk to us' },
    benefits: ['UV stabilized', 'Cold resistant', 'Recyclable', 'Heat resistant', 'Rain resistant'],
    about: { eyebrow: 'About SUNRISE™', title: 'Made beyond standard quality.', text: 'SUNRISE™ is a high-quality Polyethylene (PE) synthetic wicker for outdoor furniture and indoor applications. It is highly durable, environmentally friendly, 100% recyclable, and resistant to harsh weather conditions and temperature differences.', link: 'About SUNRISE™' },
    product: { eyebrow: 'Product system', title: 'One material. Seven profiles. Endless expressions.', text: 'Explore 88 carefully developed combinations of profile, color, dimension, and surface.', all: 'All profiles', search: 'Search color or profile', count: 'products', more: 'Load more', catalog: 'Download catalog', empty: 'No products match this filter.' },
    aboutPage: { eyebrow: 'About SUNRISE™', title: 'High-quality Polyethylene (PE) synthetic wicker.', lead: 'SUNRISE™ is made beyond standard quality for outdoor furniture and indoor applications.', tech: 'Latest extrusion technology', techText: 'SUNRISE™ synthetic wicker is manufactured using the latest extrusion technology and high-quality chemical formulations: in-house color compounding, antioxidants, and light stabilizers for protection against UV rays.', responsible: 'Product advantages', responsibleText: 'SUNRISE™ synthetic wicker is highly durable, environmentally friendly, and 100% recyclable. Resistance to harsh weather conditions and temperature differences are key advantages of our product.' },
    contact: { eyebrow: 'Start a conversation', title: 'Let\u2019s build something that lasts.', text: 'Discuss specifications, colors, samples, or your next furniture collection with our team.', wa: 'Chat on WhatsApp', email: 'Send an email' },
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
      title: 'Product facts.',
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
      formTitle: 'Send us an inquiry',
      formDesc: 'Fill out the form below and our team will get back to you within one business day.',
    },
    footer: 'High-quality PE synthetic wicker by PT. Karya Mandiri Indoplast.',
    backToTop: 'Back to top',
    requestSample: 'Request sample',
  },
  id: {
    nav: { home: 'Beranda', about: 'Tentang', products: 'Produk', contact: 'Kontak' },
    hero: { eyebrow: 'Rotan Sintetis PE / Buatan Indonesia', title: 'Dirancang untuk melampaui cuaca.', text: 'Rotan sintetis berkualitas tinggi, dibentuk melalui ekstrusi modern, formulasi terukur, dan pemahaman mendalam tentang furnitur anyaman.', primary: 'Jelajahi produk', secondary: 'Hubungi kami' },
    benefits: ['Stabilisasi UV', 'Tahan dingin', 'Dapat didaur ulang', 'Tahan panas', 'Tahan hujan'],
    about: { eyebrow: 'Tentang SUNRISE™', title: 'Dibuat melampaui standar kualitas.', text: 'SUNRISE™ adalah rotan sintetis Polyethylene (PE) berkualitas tinggi untuk furnitur outdoor maupun aplikasi indoor. Produk ini sangat tahan lama, ramah lingkungan, 100% dapat didaur ulang, serta tahan terhadap kondisi cuaca berat dan perbedaan suhu.', link: 'Tentang SUNRISE™' },
    product: { eyebrow: 'Sistem produk', title: 'Satu material. Tujuh profil. Ekspresi tanpa batas.', text: 'Jelajahi 88 kombinasi profil, warna, dimensi, dan permukaan yang dikembangkan secara teliti.', all: 'Semua profil', search: 'Cari warna atau profil', count: 'produk', more: 'Tampilkan lainnya', catalog: 'Unduh katalog', empty: 'Tidak ada produk yang cocok.' },
    aboutPage: { eyebrow: 'Tentang SUNRISE™', title: 'Rotan sintetis Polyethylene (PE) berkualitas tinggi.', lead: 'SUNRISE™ dibuat melampaui standar kualitas untuk furnitur outdoor maupun aplikasi indoor.', tech: 'Teknologi ekstrusi terbaru', techText: 'Rotan sintetis SUNRISE™ diproduksi menggunakan teknologi ekstrusi terbaru dan formulasi bahan kimia berkualitas tinggi: peracikan warna internal, antioksidan, dan light stabilizer untuk perlindungan terhadap sinar UV.', responsible: 'Keunggulan produk', responsibleText: 'Rotan sintetis SUNRISE™ sangat tahan lama, ramah lingkungan, dan 100% dapat didaur ulang. Ketahanan terhadap kondisi cuaca berat dan perbedaan suhu menjadi keunggulan utama produk kami.' },
    contact: { eyebrow: 'Mulai percakapan', title: 'Mari membuat sesuatu yang bertahan lama.', text: 'Diskusikan spesifikasi, warna, sampel, atau koleksi furnitur Anda berikutnya bersama tim kami.', wa: 'Chat WhatsApp', email: 'Kirim email' },
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
      title: 'Fakta produk.',
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
      formTitle: 'Kirim pertanyaan Anda',
      formDesc: 'Isi formulir di bawah dan tim kami akan menghubungi Anda dalam satu hari kerja.',
    },
    footer: 'Rotan sintetis PE berkualitas tinggi oleh PT. Karya Mandiri Indoplast.',
    backToTop: 'Kembali ke atas',
    requestSample: 'Minta sampel',
  },
} as const;

export const pathFor = (lang: Lang, page: Page) => `${lang === 'id' ? '/id' : ''}${page === 'home' ? '/' : `/${page}`}`.replace('//', '/');
