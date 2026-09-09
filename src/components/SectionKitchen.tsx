import React from 'react';
import { Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { FINANCIERS_DATA } from '../data/houseData';
import { HOUSE_IMAGES } from '../data/imagery';

interface SectionKitchenProps {
  currentLang: Language;
  onOpenMenu: () => void;
  onOpenImageModal: (image: { title: string; url: string; caption?: string; note?: string }) => void;
}

export const SectionKitchen: React.FC<SectionKitchenProps> = ({
  currentLang,
  onOpenMenu,
  onOpenImageModal,
}) => {
  return (
    <section id="kitchen" className="py-24 px-6 sm:px-12 bg-[#FAF8F5] border-t border-[#1C1A17]/10">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
            <Flame className="w-3.5 h-3.5" />
            <span>
              {currentLang === 'ja'
                ? '焼きたての台所 · 05'
                : currentLang === 'ko'
                ? '키친에서 구워내는 · 05'
                : currentLang === 'zh'
                ? '现焙茶点 · 05'
                : 'FROM THE KITCHEN · 05'}
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1C1A17]">
            {currentLang === 'ja'
              ? 'ここで焼き、温かいうちに味わう。'
              : currentLang === 'ko'
              ? '여기서 구워, 따뜻할 때 전합니다.'
              : currentLang === 'zh'
              ? '于此现焙，趁温而尝。'
              : 'Baked here. Eaten warm.'}
          </h2>
          <p className="text-base sm:text-lg text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
            {currentLang === 'ja'
              ? '小さなフィナンシェを、1日を通して幾度も焼き上げます。焦がしバター、カリッと香ばしい縁、しっとりとした中心。オーブンから出したての温もりを木製コーンに包んで、茶と共にお出しします。'
              : currentLang === 'ko'
              ? '하루 종일 매장에서 작은 피낭시에를 갓 구워냅니다. 브라운 버터, 바삭한 가장자리, 촉촉한 속. 오븐에서 갓 나온 온기 그대로 나무 콘에 담아 정갈한 차와 함께 냅니다.'
              : currentLang === 'zh'
              ? '终日分批小量现烤费南雪。焦化黄油馥郁，边缘微酥，内芯温润绵软。趁出炉温热盛于木质圆锥筒中，伴茶而奉。'
              : 'Small financiers baked throughout the day. Brown butter. Crisp edges. Soft centres. Served warm from the oven, in a wooden cone, alongside tea.'}
          </p>
        </div>

        {/* Featured Visual & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 space-y-4">
            <div
              className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#EAE6DF] shadow-[0_16px_36px_-10px_rgba(28,26,23,0.14)] ring-1 ring-[#1C1A17]/8 cursor-pointer group"
              onClick={() =>
                onOpenImageModal({
                  title: 'Warm Financiers in Wooden Cone',
                  url: HOUSE_IMAGES.financiers.url,
                  caption: 'Small brown butter financiers nestled inside a branded cedar cone with green maple leaves.',
                  note: 'REF 14: 焦がしバターの小さなフィナンシェ (Baked throughout the day at Ie Fushimi)',
                })
              }
            >
              <img
                src={HOUSE_IMAGES.financiers.url}
                alt="Financiers at Ie Fushimi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C1A17]/65 via-[#1C1A17]/15 to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#FAF8F5]/10" />

              <div className="relative z-10 absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#1C1A17] text-[11px] font-sans-clean px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-xs">
                {currentLang === 'ja'
                  ? '焼きたて木製コーン'
                  : currentLang === 'ko'
                  ? '우드 콘 서빙'
                  : currentLang === 'zh'
                  ? '杉木纸筒现烤盛装'
                  : 'Served in Wood Cone'}
              </div>

              <div className="relative z-10 absolute bottom-4 left-4 right-4 text-[#FAF8F5] text-xs font-sans-clean space-y-0.5">
                <p className="font-editorial text-lg text-[#FAF8F5]">焦がしバターのフィナンシェ</p>
                <p className="text-[11px] text-[#FAF8F5]/85 font-light">
                  {currentLang === 'ja'
                    ? '木製コーンには伏見の朱印が捺され、季節の青紅葉が添えられます。'
                    : currentLang === 'ko'
                    ? '붉은 직인이 찍힌 천연 우드 콘에 계절 단풍잎과 함께 따스하게 담겨 나옵니다.'
                    : currentLang === 'zh'
                    ? '印有伏见朱印的木质锥筒，点缀当季青枫，带着刚出炉的微温。'
                    : 'Stamped with the red cinnabar Ie seal and seasonal maple leaf.'}
                </p>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 font-sans-clean text-sm sm:text-base text-[#1C1A17]/80 leading-relaxed font-light">
              <p>
                {currentLang === 'ja'
                  ? '一般的なパティスリーのように大量に作り置きすることはしません。1階の茶台の奥にある小さなオーブンで、お客様の訪れに合わせて少量ずつ焼き上げます。'
                  : currentLang === 'ko'
                  ? '미리 대량으로 구워두지 않습니다. 1층 티 카운터 안쪽 오븐에서 하루에도 수차례 소량씩 구워내어, 언제 방문하셔도 갓 구운 고소한 버터의 온기를 전합니다.'
                  : currentLang === 'zh'
                  ? '我们从不预先大量烘烤陈列。在1楼茶台后方的小烤箱中，随着客人的到访分次少批量烘烤，让焦化黄油与刚出炉的微脆边缘温暖相伴。'
                  : 'We do not bake large batches in advance. Baked in small trays throughout the day, ensuring every guest experiences the intoxicating crispness and fragrance of warm brown butter.'}
              </p>
            </div>

            {/* Financier Varieties */}
            <div className="space-y-4 pt-2">
              {FINANCIERS_DATA.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-lg bg-[#EFECE6]/50 border border-[#1C1A17]/10 space-y-2 text-xs font-sans-clean"
                >
                  <div className="flex justify-between items-baseline">
                    <span className="font-editorial text-xl text-[#1C1A17] font-medium">
                      {item.name[currentLang] || item.name.en}
                    </span>
                    <span className="text-[11px] bg-[#3E4B39]/10 text-[#3E4B39] px-2.5 py-0.5 rounded-full font-sans-clean font-medium">
                      {currentLang === 'ja'
                        ? '焼きたて'
                        : currentLang === 'ko'
                        ? '갓 구움'
                        : currentLang === 'zh'
                        ? '现烤出炉'
                        : 'Freshly Baked'}
                    </span>
                  </div>
                  <p className="text-[#1C1A17]/75 font-light leading-relaxed">
                    {item.description[currentLang] || item.description.en}
                  </p>
                  <div className="flex items-center space-x-1.5 text-[#3E4B39] text-[11px] pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.pairing[currentLang] || item.pairing.en}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenMenu}
                className="inline-flex items-center space-x-2 text-xs tracking-wider border border-[#1C1A17]/25 hover:border-[#1C1A17] text-[#1C1A17] px-4 py-2 rounded-full font-sans-clean transition-colors cursor-pointer"
              >
                <span>
                  {currentLang === 'ja'
                    ? '菓子の全品書きを見る'
                    : currentLang === 'ko'
                    ? '전체 디저트 메뉴 보기'
                    : currentLang === 'zh'
                    ? '查阅全款茶点'
                    : 'Explore Kitchen Menu'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
