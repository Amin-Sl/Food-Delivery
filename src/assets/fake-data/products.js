const products = [
  {
    id: 1,
    title: "زرشک پلو با مرغ (ران)",
    desc: "مرغ ران سرخ شده با سس مرغ، چلوکره ایرانی، دورچین",
    price: 130,
    img: "https://static.delino.com/Image/Restaurant/Food/tg3hbo4z.ods_280x175.jpg",
    category: "غذای ایرانی",
    rate: "4.8"
  },
  {
    id: 2,
    title: "چلو خورشت قورمه سبزی",
    desc: "کاسه خورشت قورمه سبزی چلوکره ایرانی",
    price: 120,
    img: "https://static.delino.com/Image/Restaurant/Food/wgbromla.lpx_280x175.jpg",
    category: "غذای ایرانی",
    rate: "4.5"
  },
  {
    id: 3,
    title: "چلو خورشت قیمه بادمجان با سیب زمینی",
    desc: "چلو خورشت قیمه بادمجان با سیب زمینی",
    price: 110,
    img: "https://static.delino.com/Image/Restaurant/Food/iind5hcx.tmu_280x175.jpg",
    category: "غذای ایرانی",
    rate: "4.1"
  },
  {
    id: 4,
    title: "خورشت قیمه بادمجان با سیب زمینی",
    desc: "خورشت قیمه بادمجان با سیب زمینی (اضافه) بدون برنج",
    price: 78,
    img: "https://static.delino.com/Image/Restaurant/Food/10ld0mxs.rnk_280x175.jpg",
    category: "غذای ایرانی",
    rate: "4"
  },
  {
    id: 5,
    title: "چلو ماهی قزل آلا",
    desc: "ماهی قزل آلا بدون استخوان",
    price: 98,
    img: "https://static.delino.com/Image/Restaurant/Food/dd2ukb4c.qir_280x175.jpg",
    category: "غذای ایرانی",
    rate: "4.3"
  },
  {
    id: 6,
    title: "چلو خورشت قیمه",
    desc: "250 گرم خورشت قیمه بامجان 60 گرم گوشت گوساله بامجان 350 گرم برنج پخته شده ایرانی",
    price: 89,
    img: "https://static.delino.com/Image/Restaurant/Food/vmvrmt2l.0yp_280x175.jpg",
    category: "غذای ایرانی",
    rate: "3.9"
  },
  {
    id: 7,
    title: "خورشت قورمه سبزی",
    desc: "خورشت قورمه سبزی (اضافه) بدون برنج",
    price: 37,
    img: "https://static.delino.com/Image/Restaurant/Food/uaadwxww.ajz_280x175.jpg",
    category: "غذای ایرانی",
    rate: "3.9"
  },
  {
    id: 8,
    title: "چلو کباب کوبیده مخصوص",
    desc: "350 گرم برنج ایرانی, دو سیخ کباب کوبیده 130 گرمی, گوجه, کره, سماق, لیمو, فلفل",
    price: 95,
    img: "https://static.delino.com/Image/Restaurant/Food/sd4oz0lq.d4p_280x175.jpg",
    category: "چلوکباب",
    rate: "4"
  },
  {
    id: 9,
    title: "چلو کباب کوبیده معمولی",
    desc: "دو سیخ کباب کوبیده گوشت گوساله و گوسفندی 110 گرمی , 350 گرم برنج پخته ایرانی, دورچین",
    price: 75,
    img: "https://static.delino.com/Image/Restaurant/Food/dlin5aok.trl_280x175.jpg",
    category: "چلوکباب",
    rate: "4.1"
  },
  {
    id: 10,
    title: "چلو کباب کوبیده نگین دار",
    desc: "دو سیخ کباب کوبیده نگین دار120 گرمی مخلوط گوشت گوساله و گوسفندی و جوجه نگینی, 350گرم برنج پخته ایرانی, دورچین",
    price: 120,
    img: "https://static.delino.com/Image/Restaurant/Food/jrnvelud.cwe_280x175.jpg",
    category: "چلوکباب",
    rate: "4.2"
  },
  {
    id: 11,
    title: "چلو کباب لقمه",
    desc: "یک سیخ کباب لقمه گوشت گوساله و گوسفندی 220 گرمی, 350 گرم برنج پخته ایرانی, دورچین",
    price: 90,
    img: "https://static.delino.com/Image/Restaurant/Food/kfnwzier.kz1_280x175.jpg",
    category: "چلوکباب",
    rate: "3.6"
  },
  {
    id: 12,
    title: "چلو کباب میکس مخصوص",
    desc: "یک سیخ کباب کوبیده، یک سیخ جوجه کباب",
    price: 145,
    img: "https://static.delino.com/Image/Restaurant/Food/yaykgjnn.x3p_280x175.jpg",
    category: "چلوکباب",
    rate: "4.5"
  },
  {
    id: 13,
    title: "  چلو بال کبابی",
    desc: "بال کبابی همراه با چلو ایرانی",
    price: 69,
    img: "https://static.delino.com/Image/Restaurant/Food/a5nah11t.wzh_280x175.jpg",
    category: "چلوکباب",
    rate: "3.9"
  },
  {
    id: 14,
    title: "سوپ جو",
    desc: "۴۵۰-۵۰۰ گرم سوپ جو، یکنفره",
    price: 50,
    img: "https://static.delino.com/Image/Restaurant/Food/suhhavze.3zn_280x175.jpg",
    category: "سوپ",
    rate: "4"
  },
  {
    id: 29,
    title: "قوطی کوکا",
    desc: "",
    price: 15,
    img: "https://static.delino.com/data/restmenu/default/food/kli1ebyn.y4j_280x175.jpg",
    category: "نوشیدنی",
    rate: ""
  },
  {
    id: 30,
    title: "دلستر لیمو",
    desc: "",
    price: 15,
    img: "https://static.delino.com/data/restmenu/default/food/eduxj4e1.cgb_280x175.jpg",
    category: "نوشیدنی",
    rate: ""
  },
  {
    id: 31,
    title: "دوغ",
    desc: "",
    price: 12,
    img: "https://static.delino.com/Image/Restaurant/Food/mzi03edm.quq_280x175.jpg",
    category: "نوشیدنی",
    rate: ""
  },
  {
    id: 32,
    title: "نوشابه خانواده کوکاکولا",
    desc: "",
    price: 20,
    img: "https://static.delino.com/data/restmenu/default/food/jo2mqmkp.lbu_280x175.jpg",
    category: "نوشیدنی",
    rate: ""
  },
  {
    id: 40,
    title: "سالاد سزار با فیله گریل",
    desc: "کاهو، فیله مرغ، زیتون، گوجه، پنیر پارمزان، سس سزار",
    price: 209,
    img: "https://static.delino.com/Image/Restaurant/Food/5z1taa1w.afa_280x175.jpg",
    category: "سالاد",
    rate: "4.2"
  },
  {
    id: 41,
    title: "سالاد آنتروکت تک پرسی",
    desc: "شارلوت سبز، راکت، برگ خردل، بی بی اسفناج، سس وینگیریت،کاهو",
    price: 130,
    img: " https://static.delino.com/Image/Restaurant/Food/j0nhq1iw.tim_280x175.jpg",
    category: "سالاد",
    rate: "4"
  },
  {
    id: 42,
    title: "سکنجبین و خاکشیر",
    desc: "",
    price: 75,
    img: "https://static.delino.com/Image/Restaurant/Food/kcftdbit.zns_280x175.jpg",
    category: "نوشیدنی",
    rate: "4.5"
  },
  {
    id: 43,
    // title: "https://static.delino.com/Image/Restaurant/Food/oflcyldi.xzp_280x175.jpg",
    desc: "",
    price: 84,
    img: "https://static.delino.com/Image/Restaurant/Food/oflcyldi.xzp_280x175.jpg",
    category: "نوشیدنی",
    rate: "4.4"
  },
  {
    id: 44,
    title: "آلوورا و تخم شربتی",
    desc: "",
    price: 76,
    img: "https://static.delino.com/Image/Restaurant/Food/jeeysqac.wdk_280x175.jpg",
    category: "نوشیدنی",
    rate: ""
  }
]

export default products