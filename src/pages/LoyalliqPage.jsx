import React from 'react'
import LoyalliqPng from '../assets/Loyalliq.png'
import { Link } from 'react-router-dom'
function LoyalliqPage() {
    return (
        <div>
            <div className='container mx-auto px-20'>
                <div className='flex gap-2 text-gray-400 py-4 text-[16px]'>
                    <Link to='/'><p>Əsas səhifə</p></Link>/ <p>Loyallıq Kartı</p>
                </div>
                <h1 className="text-[30px] font-semibold text-[#000] py-2 ">Loyallıq Kartı </h1>
                <img src={LoyalliqPng} alt="" />
                 <div className='flex flex-col gap-2 py-10'>
                    <p className='text-[14px] font-bold'>YENİLİK!</p>
                    <p className='text-[14px]'> <span className='font-bold'>˝LIBRAFF˝ </span>Mağazalar şəbəkəsindən etdiyiniz hər alış-verişə görə 3% ˝Cashback˝ qazanacaqsınız! Bu sizə əlavə imkanlar və yeni seçimlər yaradacaqdır.</p>
                    <p className='text-[14px]'>Bunun üçün ˝Loyallıq kartı˝mızı əldə etməyiniz kifayətdir. Kartda yığılan vəsaiti həm nağd, həm də onlayn alışlar zamanı istifadə etmək mümkündür.</p>
                    <p className='text-[14px] '>Loyallıq kartı olan hər kəs mağazalarımızdakı endirim kampaniyaları və yeniliklər barədə mütəmadi məlumat əldə edə biləcək. Həmçinin etdiyiniz alış-verişə uyğun SİZƏ ÖZƏL təkliflərimiz olacaq!</p>
                    <p className='text-[14px]'>Məlumat üçün bildirək ki, endirimdə olan məhsullar üçün keşbek nəzərdə tutulmayıb və toplanan vəsaiti nağdlaşdırmaq qeyri-mümkündür.</p>
                    <p className='text-[14px]'>Kartları əldə etmək üçün mağazalarımıza yaxınlaşıb, “Loyallıq Kartı Aktivləşdirmə Anketi”ni doldurmağınız kifayətdir.</p>
                </div>
            </div>
        </div>
    )
}

export default LoyalliqPage
