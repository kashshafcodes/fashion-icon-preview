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
  builtByUrl: "https://wa.me/8801700000000",

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
      image: "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/879103984_1643852974427278_5698089952537778034_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1536&ctp=s1024x1536&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cVrz5LhLEewQ7kNvwHZimw6&_nc_oc=AdpD4DecrkQlfOYBLnYVrgzZZubqR24aNFOZQPmnEO7as_7mYKHz1W6A4OxcAWGtUYw&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=ZQUSiIIN4Bl15QfDHekIMg&_nc_ss=792a8&oh=00_AQQCtHvzFoQd2iAOIjpheY3FAiAUvg5_N5KdLAEXx8E1SA&oe=6AEE935E",
      sizes: ["M", "L", "XL"],
      description: "সবুজ জমিনে প্রিন্ট কামিজ, প্রিন্টেড ওড়না আর সালোয়ার।",
      tag: "লিমিটেড",
    },
    {
      id: "f2",
      name: "বেগুনি প্রিন্ট লন থ্রি-পিস",
      category: "threepiece",
      price: 2450,
      image: "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/880244696_1643852894427286_6733354946575485814_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1536&ctp=s1024x1536&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=S6bJzqHSVHQQ7kNvwEF36bA&_nc_oc=Adr89VjBFDXyy4WK-6bFsvlcBnzC12rQN1lRp6YN6IqTUifYnLvwKDkeLFwXXx4xUmw&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=1H3cQhnrl1Ks0HBcHJzG0Q&_nc_ss=792a8&oh=00_AQSpnSfHQZg7FZZXCDYamO0kR1Ap4MG4BrWAKxyg5RnB0A&oe=6AEEA218",
      sizes: ["M", "L", "XL"],
      description: "গাঢ় বেগুনি আর সাদার মিশেলে প্রিন্ট, মানানসই ওড়না সহ।",
    },
    {
      id: "f3",
      name: "মিন্ট প্রিন্ট লন থ্রি-পিস",
      category: "threepiece",
      price: 2450,
      image: "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/884830288_1643852814427294_4308363339645744161_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1536&ctp=s1024x1536&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-LVuPvfSsMsQ7kNvwHkk3gp&_nc_oc=AdoSTZyU4aIL4tjFkDyq0gd7fcppFPBEoDBblRAzwElXpo4X3OMMPyqjZRTJ6KI78pg&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=6ZUu47P4EWbZl5WOvnKRjA&_nc_ss=792a8&oh=00_AQSQ1yPvX0jd-W79nyzkNGkN4YyYv36OR_CTMtGGNXpQLg&oe=6AEE9ED5",
      sizes: ["M", "L", "XL"],
      description: "হালকা মিন্ট রঙে ফুলের প্রিন্ট, গরমে আরামদায়ক।",
    },
    {
      id: "f4",
      name: "গোলাপি প্রিন্ট লন থ্রি-পিস",
      category: "threepiece",
      price: 2450,
      image: "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/884830295_1643852717760637_8448458666731639026_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1536&ctp=s1024x1536&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SQzhs2Cr9GIQ7kNvwF97zwk&_nc_oc=AdopxjmV6ktRdlI53OwOIstarQizDWMUSFIM6Keot_rSBHSK05npy6JVuuJi3ZUT3f0&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=S4ZGlZOA8nFb_zG9kaL2_Q&_nc_ss=792a8&oh=00_AQT_tPnvk1RqBQD4wRpwnTwH0kFjo_EkeWX6lnK_cqr6Lw&oe=6AEEBE5A",
      sizes: ["M", "L", "XL"],
      description: "গোলাপি জমিনে প্রিন্ট, ম্যাজেন্টা ওড়না সহ।",
    },
    {
      id: "f5",
      name: "ডিজিটাল প্রিন্ট আনস্টিচড সেট",
      category: "unstitched",
      price: 1950,
      image: "https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/879512421_1643853034427272_8532440092197629775_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1600&ctp=s1200x1600&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GUUu4CFaUbgQ7kNvwEE9gMZ&_nc_oc=Adqo-1EcJboEcnUEioE8txagrNOyHkqRGsHz3CupPmQ1H6zmW3i05k5ch_QYyZzx6dY&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=THfgSj4-FR_NPr0Zbf_dow&_nc_ss=792a8&oh=00_AQQlO7bhLHN5pp3ybcv7bmzxGbOfjESF1vv53TFtB-4ZNQ&oe=6AEEB64C",
      description: "নিজের মাপে বানিয়ে নেওয়ার জন্য কাপড়ের সেট।",
    },
  ],
};
