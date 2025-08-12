import React from "react";

const footerData = [
  {
    title: "Hesabım",
    type: "links",
    items: [
      { text: "Daxil ol", href: "#" },
      { text: "Qeydiyyatdan keç", href: "#" }
    ]
  },
  {
    title: "Şirkət",
    type: "links",
    items: [
      { text: "Haqqımızda", href: "#" },
      { text: "Əlaqə", href: "#" },
      { text: "Vakansiyalar", href: "#" },
      { text: "Sayt Xəritəsi", href: "#" }
    ]
  },
  {
    title: "Müştəri Xidməti",
    type: "links",
    items: [
      { text: "Dəyişdirmə və qaytarılma", href: "#" },
      { text: "Ödəniş və çatdırılma", href: "#" },
      { text: "Sifarişiniz haqqında", href: "#" },
      { text: "Seçilmişlər", href: "#" }
    ]
  },
  {
    title: "Əlaqə",
    type: "contact",
    items: [
      { text: "Bakı, Badamdar qəs., Mikayıl Müşfiq küç. 1c", type: "address" },
      { text: "(Badamdar Estates)", type: "address" },
      { text: "+994-50-290-44-96", type: "phone" },
      { text: "B.e - B. 9.00 - 18.00", type: "hours" },
      { text: "online@librari.az", href: "mailto:online@librari.az", type: "link" },
      { text: "Xəritədə bax", href: "#", type: "link" }
    ]
  }
]

function Footer() {
  return (
    <div className='bg-gray-50'>
      <div className="container mx-auto px-20">
        <footer className="bg-gray-50 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerData.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-gray-800 mb-4">
                   {section.title}
                </h3>
                <ul className="space-y-0.5">
                   {section.items.map((item, i) => (
                     <li key={i}>
                       {item.href ? (
                         <a
                           href={item.href}
                           className="text-gray-600 hover:text-red-600 transition-colors text-sm py-0.5 block"
                         >
                           {item.text}
                         </a>
                       ) : (
                         <span className="text-gray-600 text-sm py-0.5 block">
                           {item.text}
                         </span>
                       )}

                     </li>
                   ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-[#000] text-sm">
            © 2025 — Libraff.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Footer;
