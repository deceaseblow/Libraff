import React from 'react'
import Footer from '../comp/Footer'
import { Link } from 'react-router-dom'
import OdenisPng from '../assets/Odenis.png'
function OdenisPage() {
    return (
        <div>
            <div className='container mx-auto px-20'>
                <div className='flex gap-2 text-gray-400 py-4 text-[16px]'>
                <Link to='/'><p>Əsas səhifə</p></Link>/ <p>Ödəniş və çatdırılma</p>
                </div>
                <h1 className="text-[30px] font-semibold text-[#000] py-2 ">Ödəniş və çatdırılma </h1>
                <img src={OdenisPng} alt="" />
                <h1 className='text-[25px] font-semibold text-[#000] py-4'> Məhsulun çatdırılması</h1>
                <div className='flex flex-col gap-2 py-3'> <p className='text-[14px]'>Sifarişiniz gün ərzində təsdiqləndikdən sonra əməkdaşlarımız sizinlə əlaqə saxlayır, ünvan və digər vacib məlumatları, ödəmə növünü dəqiqləşdirdikdən sonra 24 saat ərzində çatdırılma edilir</p>
                    <p className='text-[14px]'>Yaşadığınız ərazidən asılı olaraq, çatdırılma günləri və saatları fərqli ola bilər. Gecikmə halları olarsa, öncədən məlumatlandırılacaqsınız. Ölkədaxili və xarici çatdırılma xidmətlərimiz mövcuddur. Bölgələrə çatdırılmalar poçt vasitəsi və yalnız bank kartları ilə həyata keçirilir. Məsafədən asılı olmayaraq, bölgələrə çatdırılma məbləği 3.50 AZN təşkil edir və çatdırılmalar 3-5 iş günü ərzində reallaşır.</p>
                    <p className='text-[14px] italic font-bold'>Əgər sifarişiniz Bakı və Abşeron ərazisindəndirsə və məhsul(lar)ın ümumi dəyəri 30 AZN-dən çoxdursa, bu halda sifarişiniz kuryer tərəfindən pulsuz çatdırılacaqdır. (Sumqayıt istisna olmaqla)</p>
                </div>
                <h1 className='text-[25px] font-semibold text-[#000] py-4'> Çatdırılma formaları</h1>
                <div className='flex flex-col gap-2 py-3'> <p className='text-[14px]'>Kuryer vasitəsi ilə çatdırılma (ölkədaxili)</p>
                    <p className='text-[14px]'>Sifarişlərinizi mağazalarımızdan təhvil almaq imkanınız da vardır. ("Hava limanı" filialı istisna olmaqla)</p>
                    <p className='text-[14px] '>Sifarişləriniz tərəfdaşımız olan peşəkar kuryer şirkəti tərəfindən çatdırılır.</p>
                </div>
                <h1 className='text-[25px] font-semibold text-[#000] py-4'> Ödəniş</h1>
                <div className='flex flex-col gap-2 py-3 mb-8'>
                    <p className='text-[14px]'>Qapıda ödəniş (Bakı və Abşeron üzrə)</p>
                    <p className='text-[14px]'>Ödənişlərinizi debet və kredit kartlarınızla onlayn şəkildə edə bilərsiniz. Həmçinin qapıda nağd şəkildə ödəmək imkanınız da vardır.</p>
                    <p className='text-[14px] '>Korporativ alışlarla bağlı ətraflı məlumat almaq üçün <span className='text-red-600'>+994 50 290 78 11</span> nömrəsi ilə əlaqə saxlaya bilərsiniz.</p>
                    <p className='text-[14px]'>Məhsul axtarışlarınızı, ödənişlərinizi və s. xidmətlərimizdən istifadəni mobil telefon vasitəsi ilə də edə bilərsiniz.</p>
                    <p className='text-[14px]'>Sifarişlərizdə dəstəklə bağlı onlayn çağrı xidmətimizlə (Call center) əlaqə saxlaya bilərsiniz: <span className='text-red-600'>+994 50 290 44 96</span> </p>
                </div>
            </div>
        </div>
    )
}

export default OdenisPage
