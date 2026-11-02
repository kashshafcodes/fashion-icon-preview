// Preview for Fashion Icon by EUNA (facebook.com/fashion.icon.euna)
// No WhatsApp number on the page, so orders go through Messenger.
// Product names and prices are SAMPLE values until the seller confirms real ones.

export const store = {
  name: "ফ্যাশন আইকন",
  nameLatin: "Fashion Icon by EUNA",
  tagline: "লিমিটেড এডিশন মেয়েদের ড্রেস, সেরা মানে আর সাধ্যের দামে।",
  about:
    "প্রতিটি ডিজাইন সীমিত সংখ্যায় আনা হয়, তাই একই ড্রেস সবার গায়ে দেখবেন না। মহাখালী থেকে সারা দেশে ডেলিভারি।",

  previewNote: "এটি একটি ডেমো। পণ্যের নাম ও দাম নমুনা — আপনার আসল তথ্য বসিয়ে দেওয়া হবে।",

  whatsapp: "",
  messengerUsername: "fashion.icon.euna",
  facebookUrl: "https://www.facebook.com/fashion.icon.euna",
  phoneDisplay: "",
  address: "মহাখালী, ঢাকা ১২১২",
  hours: "প্রতিদিন খোলা",

  delivery: [
    { id: "dhaka", label: "ঢাকার ভেতরে", fee: 70, time: "১–২ দিন" },
    { id: "bd", label: "ঢাকার বাইরে", fee: 130, time: "৩–৫ দিন" },
  ],
  payment: ["ক্যাশ অন ডেলিভারি", "বিকাশ"],

  lang: "bn",
  builtBy: "Kazi Marzuk",
  builtByUrl: "https://kashshafcodes.github.io/",

  categories: [
    { id: "threepiece", label: "থ্রি-পিস" },
    { id: "unstitched", label: "আনস্টিচড" },
  ],

  products: [
    {
      id: "f1",
      name: "সবুজ প্রিন্ট লন থ্রি-পিস",
      category: "threepiece",
      price: 2450,
      image: "photos/f1.jpg",
      sizes: ["M", "L", "XL"],
      description: "সবুজ জমিনে প্রিন্ট কামিজ, প্রিন্টেড ওড়না আর সালোয়ার।",
      tag: "লিমিটেড",
    },
    {
      id: "f2",
      name: "বেগুনি প্রিন্ট লন থ্রি-পিস",
      category: "threepiece",
      price: 2450,
      image: "photos/f2.jpg",
      sizes: ["M", "L", "XL"],
      description: "গাঢ় বেগুনি আর সাদার মিশেলে প্রিন্ট, মানানসই ওড়না সহ।",
    },
    {
      id: "f3",
      name: "মিন্ট প্রিন্ট লন থ্রি-পিস",
      category: "threepiece",
      price: 2450,
      image: "photos/f3.jpg",
      sizes: ["M", "L", "XL"],
      description: "হালকা মিন্ট রঙে ফুলের প্রিন্ট, গরমে আরামদায়ক।",
    },
    {
      id: "f4",
      name: "গোলাপি প্রিন্ট লন থ্রি-পিস",
      category: "threepiece",
      price: 2450,
      image: "photos/f4.jpg",
      sizes: ["M", "L", "XL"],
      description: "গোলাপি জমিনে প্রিন্ট, ম্যাজেন্টা ওড়না সহ।",
    },
    {
      id: "f5",
      name: "ডিজিটাল প্রিন্ট আনস্টিচড সেট",
      category: "unstitched",
      price: 1950,
      image: "photos/f5.jpg",
      description: "নিজের মাপে বানিয়ে নেওয়ার জন্য কাপড়ের সেট।",
    },
  ],
};
