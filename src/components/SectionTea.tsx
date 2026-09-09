import React, { useState } from 'react';
import { Sparkles, Thermometer, Clock, ArrowRight, Check } from 'lucide-react';
import { Language, TeaItem } from '../types';
import { TEAS_DATA } from '../data/houseData';
import { HOUSE_IMAGES } from '../data/imagery';

interface SectionTeaProps {
  currentLang: Language;
  onOpenMenu: () => void;
  onOpenImageModal: (image: { title: string; url: string; caption?: string; note?: string }) => void;
}

export const SectionTea: React.FC<SectionTeaProps> = ({
  currentLang,
  onOpenMenu,
  onOpenImageModal,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedTeaId, setSelectedTeaId] = useState<string>(TEAS_DATA[0].id);

  const teaBranches = [
    { key: 'all', labelEn: 'All Tea', labelJa: 'すべてのお茶', labelKo: '전체 차', labelZh: '全部茶品' },
    { key: 'our-approach', labelEn: 'Our Approach', labelJa: '茶の哲学', labelKo: '차의 철학', labelZh: '萃茶理念' },
    { key: 'gyokuro', labelEn: 'Gyokuro', labelJa: '玉露', labelKo: '옥로 (교쿠로)', labelZh: '玉露' },
    { key: 'matcha', labelEn: 'Matcha', labelJa: '抹茶', labelKo: '말차', labelZh: '抹茶' },
    { key: 'hojicha', labelEn: 'Hojicha', labelJa: '焙じ茶', labelKo: '호지차', labelZh: '焙茶' },
    { key: 'other-teas', labelEn: 'Other Teas', labelJa: '煎茶・草根木皮', labelKo: '센차 및 식물차', labelZh: '煎茶与草木' },
    { key: 'sparkling-gyokuro', labelEn: 'Sparkling Gyokuro', labelJa: '発泡玉露', labelKo: '스파클링 옥로', labelZh: '气泡玉露' },
  ];

  const filteredTeas =
    activeTab === 'all' || activeTab === 'our-approach'
      ? TEAS_DATA
      : activeTab === 'other-teas'
      ? TEAS_DATA.filter((t) => t.type === 'sencha' || t.type === 'botanical')
      : activeTab === 'sparkling-gyokuro'
      ? TEAS_DATA.filter((t) => t.type === 'sparkling')
      : TEAS_DATA.filter((t) => t.type === activeTab);

  const activeTea =
    filteredTeas.find((t) => t.id === selectedTeaId) || filteredTeas[0] || TEAS_DATA[0];

  return (
    <section id="tea" className="py-24 px-6 sm:px-12 bg-[#FAF8F5] border-t border-[#1C1A17]/10">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
              {currentLang === 'ja'
                ? '茶の哲学と所作 · 04'
                : currentLang === 'ko'
                ? '차의 철학과 본질 · 04'
                : currentLang === 'zh'
                ? '茶之哲思与萃取 · 04'
                : 'PHILOSOPHY & CRAFT · 04'}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1C1A17]">
              {currentLang === 'ja'
                ? '茶葉。水。時間。'
                : currentLang === 'ko'
                ? '찻잎. 물. 시간.'
                : currentLang === 'zh'
                ? '茶叶。泉水。时光。'
                : 'Leaf. Water. Time.'}
            </h2>
            <p className="text-base sm:text-lg text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
              {currentLang === 'ja'
                ? '茶は、極めて簡潔であり得ます。一枚の茶葉。清らかな水。適切な湯温。そして満ち足りた時間。京都・宇治をはじめとする近郊の小規模茶農家から届く本物の日本茶。'
                : currentLang === 'ko'
                ? '차는 단순할 수 있습니다. 찻잎 하나. 좋은 물. 알맞은 온도. 충분한 시간. 교토 우지와 인근 소규모 다원에서 정성껏 길러낸 진정한 일본 차를 전합니다.'
                : currentLang === 'zh'
                ? '茶事可至至简。一瓣嫩叶，一泓伏水，相宜汤温，充盈时光。采自京都宇治及邻近独立茶园的地道日本茶。'
                : 'Tea can be simple. A leaf. Good water. The right temperature. Enough time. At Ie, we begin with Japanese tea — gyokuro, matcha, roasted teas, and cold infusions.'}
            </p>
          </div>

          {/* 6 Sub-branch pills */}
          <div className="flex flex-wrap gap-1.5 text-xs font-sans-clean">
            {teaBranches.map((branch) => (
              <button
                key={branch.key}
                type="button"
                onClick={() => {
                  setActiveTab(branch.key);
                  const matching =
                    branch.key === 'other-teas'
                      ? TEAS_DATA.find((t) => t.type === 'sencha' || t.type === 'botanical')
                      : branch.key === 'sparkling-gyokuro'
                      ? TEAS_DATA.find((t) => t.type === 'sparkling')
                      : TEAS_DATA.find((t) => t.type === branch.key);
                  if (matching) setSelectedTeaId(matching.id);
                }}
                className={`px-3 py-1.5 rounded-full transition-all text-[11px] tracking-wide cursor-pointer ${
                  activeTab === branch.key
                    ? 'bg-[#1C1A17] text-[#FAF8F5] font-medium shadow-xs'
                    : 'bg-[#1C1A17]/5 text-[#1C1A17]/70 hover:bg-[#1C1A17]/10'
                }`}
              >
                {currentLang === 'ja'
                  ? branch.labelJa
                  : currentLang === 'ko'
                  ? branch.labelKo
                  : currentLang === 'zh'
                  ? branch.labelZh
                  : branch.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Our Approach Focus Block */}
        {(activeTab === 'all' || activeTab === 'our-approach') && (
          <div id="tea-approach" className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl bg-[#EFECE6]/60 border border-[#1C1A17]/10">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#3E4B39]">01 · THE AQUIFER</span>
              <h3 className="font-editorial text-xl text-[#1C1A17]">
                {currentLang === 'ja'
                  ? '伏見の伏流水'
                  : currentLang === 'ko'
                  ? '후시미 지하 연수'
                  : currentLang === 'zh'
                  ? '伏见天然软水'
                  : 'Fushimi Aquifer'}
              </h3>
              <p className="text-xs font-sans-clean text-[#1C1A17]/75 font-light leading-relaxed">
                {currentLang === 'ja'
                  ? '鉄分を含まない極めて柔らかな軟水が、苦味を抑え茶葉本来の甘露とアミノ酸（テアニン）を清らかに引き出します。'
                  : currentLang === 'ko'
                  ? '철분이 없는 극도로 부드러운 천연 연수로 우려내어, 떫은맛 없이 찻잎 고유의 단맛과 테아닌 감칠맛을 온전히 우려냅니다.'
                  : currentLang === 'zh'
                  ? '不含铁质的极致软水，抑制单宁苦涩，澄澈激发出茶叶内蕴的天然甘露与茶氨酸鲜甜。'
                  : 'Pure iron-free soft water gently dissolves delicate amino acids without extracting harsh tannins.'}
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#3E4B39]">02 · SHADING</span>
              <h3 className="font-editorial text-xl text-[#1C1A17]">
                {currentLang === 'ja'
                  ? '伝統的な覆下栽培'
                  : currentLang === 'ko'
                  ? '전통 차광 재배'
                  : currentLang === 'zh'
                  ? '本图草席覆光'
                  : 'Straw Honzu Shading'}
              </h3>
              <p className="text-xs font-sans-clean text-[#1C1A17]/75 font-light leading-relaxed">
                {currentLang === 'ja'
                  ? '収穫前の約1ヶ月間日光を遮ることで、光合成を抑え、濃厚な出汁のような旨味成分を濃縮させます。'
                  : currentLang === 'ko'
                  ? '수확 전 한 달 동안 햇빛을 차단하여 찻잎 속에 감칠맛 성분을 농축시켜 바다와 같은 깊은 풍미를 완성합니다.'
                  : currentLang === 'zh'
                  ? '采摘前遮光一个月以阻断光合转化，将氨基酸浓缩为如海潮出汁般浓醇的甘鲜滋味。'
                  : 'Blocking sunlight for 30 days keeps L-theanine from converting to catechin, producing rich sea-broth umami.'}
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#3E4B39]">03 · TEMPERATURE</span>
              <h3 className="font-editorial text-xl text-[#1C1A17]">
                {currentLang === 'ja'
                  ? '温度と時間の規律'
                  : currentLang === 'ko'
                  ? '온도와 시간의 규율'
                  : currentLang === 'zh'
                  ? '温控与时间韵律'
                  : 'Precision Infusion'}
              </h3>
              <p className="text-xs font-sans-clean text-[#1C1A17]/75 font-light leading-relaxed">
                {currentLang === 'ja'
                  ? '45℃の極低温で抽出する玉露から、100℃の熱湯で香気を立ち上げる焙じ茶まで、葉ごとの最適を厳守します。'
                  : currentLang === 'ko'
                  ? '45℃ 저온으로 우려내는 교쿠로부터 100℃ 끓는 물로 향을 깨우는 호지차까지, 각 찻잎에 맞춘 완벽한 온도를 지킵니다.'
                  : currentLang === 'zh'
                  ? '从45°C慢速低温萃取的玉露，到100°C沸水瞬时迸发香气的焙茶，严守每种茶叶的黄金温度。'
                  : 'From 45°C slow extraction for shaded gyokuro to rapid 100°C for roasted hojicha aroma.'}
              </p>
            </div>
          </div>
        )}


        {/* 03 SIGNATURE HIGHLIGHT: SPARKLING GYOKURO */}
        <div className="rounded-2xl bg-[#F4EFEA] border border-[#1C1A17]/10 overflow-hidden p-8 sm:p-12 lg:p-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#3E4B39]/10 text-[#3E4B39] px-3 py-1 rounded-full text-xs font-sans-clean">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="tracking-wider uppercase font-medium">
                  {currentLang === 'ja'
                    ? '03 — 看板茶（シグネチャー）'
                    : currentLang === 'ko'
                    ? '03 — 시그니처 티'
                    : currentLang === 'zh'
                    ? '03 — 招牌茗饮'
                    : '03 — SIGNATURE TEA'}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-editorial text-4xl sm:text-5xl text-[#1C1A17] tracking-tight">
                  Sparkling Gyokuro
                </h3>
                <p className="font-editorial text-xl italic text-[#3E4B39]">
                  {currentLang === 'ja'
                    ? '玉露に、気泡の輝きを。'
                    : currentLang === 'ko'
                    ? '옥로에 섬세한 기포를 더하다.'
                    : currentLang === 'zh'
                    ? '玉露与微细气泡的澄澈交融。'
                    : 'Gyokuro. With bubbles.'}
                </p>
              </div>

              <div className="space-y-4 font-sans-clean text-sm sm:text-base text-[#1C1A17]/80 leading-relaxed font-light">
                <p>
                  {currentLang === 'ja'
                    ? '日本最高峰の覆下栽培玉露が秘める深淵な旨味と甘露を、きめ細かな炭酸の泡とともに。冷涼、澄明、そしてかつてない新鮮な驚き。'
                    : currentLang === 'ko'
                    ? '차광 재배한 일본 최고급 교쿠로의 깊은 감칠맛을 미세하고 섬세한 탄산과 함께 즐깁니다. 차갑고, 투명하며, 마법 같은 첫 모금.'
                    : currentLang === 'zh'
                    ? '日本草席遮光顶级玉露的深邃甘鲜与如高汤般的醇厚，藉由绵密气泡在舌尖轻盈绽放。冷冽、澄澈，前所未有的茶之觉醒。'
                    : 'The depth and umami of Japanese gyokuro, served with a fine effervescence. Cold. Clear. Unexpected.'}
                </p>
                <p className="text-xs text-[#1C1A17]/65">
                  {currentLang === 'ja'
                    ? '茶。伏見の水。炭酸。余計なものは何ひとつ足さない。Ie Fushimiだけで作られる特別な一杯。'
                    : currentLang === 'ko'
                    ? '찻잎. 후시미의 맑은 지하수. 탄산. 불필요한 것은 아무것도 넣지 않았습니다. 오직 Ie Fushimi에서만 만날 수 있는 맛.'
                    : currentLang === 'zh'
                    ? '茶、伏见甘泉、纯净气泡。绝无冗余修饰，唯在Ie Fushimi方能领略的静心一盏。'
                    : 'Tea. Water. Carbonation. Nothing unnecessary. Made exclusively at Ie Fushimi.'}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1C1A17]/10 text-xs font-sans-clean">
                <div>
                  <span className="text-[#1C1A17]/50 block text-[10px] uppercase tracking-wider">
                    {currentLang === 'ja' ? '産地' : currentLang === 'ko' ? '원산지' : currentLang === 'zh' ? '产地' : 'Origin'}
                  </span>
                  <span className="font-medium text-[#1C1A17]">Uji, Kyoto</span>
                </div>
                <div>
                  <span className="text-[#1C1A17]/50 block text-[10px] uppercase tracking-wider">
                    {currentLang === 'ja' ? '提供温度' : currentLang === 'ko' ? '서빙 온도' : currentLang === 'zh' ? '适饮温度' : 'Temperature'}
                  </span>
                  <span className="font-medium text-[#1C1A17]">4°C Chilled</span>
                </div>
                <div>
                  <span className="text-[#1C1A17]/50 block text-[10px] uppercase tracking-wider">
                    {currentLang === 'ja' ? '香気・味わい' : currentLang === 'ko' ? '테이스팅' : currentLang === 'zh' ? '风味特征' : 'Tasting Notes'}
                  </span>
                  <span className="font-medium text-[#1C1A17]">Umami, Sea Broth</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenMenu}
                  className="inline-flex items-center space-x-2 bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#3E4B39] text-xs px-5 py-2.5 rounded-full font-sans-clean tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  <span>
                    {currentLang === 'ja'
                      ? 'お品書きで詳しく見る'
                      : currentLang === 'ko'
                      ? '메뉴에서 확인하기'
                      : currentLang === 'zh'
                      ? '查阅完整茶单'
                      : 'Explore Tea Menu'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Image with refined shadow */}
            <div className="lg:col-span-6">
              <div
                className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#E5E0D8] shadow-[0_16px_36px_-10px_rgba(28,26,23,0.14)] ring-1 ring-[#1C1A17]/8 cursor-pointer group"
                onClick={() =>
                  onOpenImageModal({
                    title: 'Signature Sparkling Gyokuro',
                    url: HOUSE_IMAGES.sparklingGyokuro.url,
                    caption: 'Chilled effervescent gyokuro poured into fine crystal glassware.',
                    note: 'Crafted exclusively at Ie Fushimi with local spring water and shade-grown leaves.',
                  })
                }
              >
                <img
                  src={HOUSE_IMAGES.sparklingGyokuro.url}
                  alt="Sparkling Gyokuro at Ie Fushimi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C1A17]/65 via-[#1C1A17]/15 to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#FAF8F5]/10" />

                <div className="relative z-10 absolute bottom-4 left-4 right-4 text-[#FAF8F5] text-xs font-sans-clean flex justify-between items-end">
                  <div>
                    <span className="text-[11px] opacity-80 uppercase tracking-widest block font-mono">
                      {currentLang === 'ja' ? '看板茶' : currentLang === 'ko' ? '시그니처' : currentLang === 'zh' ? '招牌' : 'Signature'}
                    </span>
                    <span className="font-editorial text-lg text-[#FAF8F5]">Sparkling Gyokuro</span>
                  </div>
                  <span className="text-[11px] bg-[#FAF8F5]/25 backdrop-blur-xs px-2.5 py-1 rounded-sm text-[#FAF8F5] font-sans-clean">
                    {currentLang === 'ja'
                      ? '冷製炭酸抽出'
                      : currentLang === 'ko'
                      ? '냉침 탄산 추출'
                      : currentLang === 'zh'
                      ? '冷萃气泡浸出'
                      : 'Cold Brew Carbonated'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tea Selector & Brewing Parameters */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#3E4B39] font-sans-clean font-medium">
                LEAVES & INFUSIONS
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1C1A17]">
                {currentLang === 'ja'
                  ? '厳選された日本茶の品揃え'
                  : currentLang === 'ko'
                  ? 'Ie의 차 셀렉션'
                  : currentLang === 'zh'
                  ? '精选日本单品茶'
                  : 'Selected Single-Origin Teas'}
              </h3>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 text-xs font-sans-clean">
              {TEAS_DATA.map((tea) => (
                <button
                  key={tea.id}
                  type="button"
                  onClick={() => setSelectedTeaId(tea.id)}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    selectedTeaId === tea.id
                      ? 'bg-[#1C1A17] text-[#FAF8F5] font-medium shadow-xs'
                      : 'bg-[#1C1A17]/5 text-[#1C1A17]/70 hover:bg-[#1C1A17]/10'
                  }`}
                >
                  {tea.name[currentLang] || tea.name.en}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tea Detailed Card */}
          <div className="p-8 rounded-xl bg-[#FAF8F5] border border-[#1C1A17]/15 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-xs uppercase tracking-wider text-[#3E4B39] font-sans-clean font-medium">
                  {activeTea.origin}
                </span>
                <span className="text-xs text-[#1C1A17]/40">·</span>
                <span className="text-xs text-[#1C1A17]/60 font-editorial italic text-base">
                  {activeTea.japaneseName}
                </span>
              </div>

              <h4 className="font-editorial text-3xl text-[#1C1A17] tracking-tight">
                {activeTea.name[currentLang] || activeTea.name.en}
              </h4>

              <p className="text-sm font-sans-clean text-[#1C1A17]/80 leading-relaxed font-light">
                {activeTea.description[currentLang] || activeTea.description.en}
              </p>

              {/* Tasting notes */}
              <div className="p-3.5 bg-[#EFECE6]/60 rounded-lg text-xs font-sans-clean space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#1C1A17]/50 block">
                  {currentLang === 'ja'
                    ? '風味・ノート'
                    : currentLang === 'ko'
                    ? '테이스팅 노트'
                    : currentLang === 'zh'
                    ? '品鉴风味'
                    : 'Flavor Profile'}
                </span>
                <p className="text-[#1C1A17] font-medium italic">
                  "{activeTea.tastingNotes[currentLang] || activeTea.tastingNotes.en}"
                </p>
              </div>
            </div>

            {/* Brewing Metrics */}
            <div className="md:col-span-5 p-6 rounded-lg bg-[#EFECE6]/40 border border-[#1C1A17]/10 space-y-4 text-xs font-sans-clean">
              <span className="text-[11px] uppercase tracking-wider text-[#1C1A17]/50 font-medium block">
                {currentLang === 'ja'
                  ? '抽出の作法'
                  : currentLang === 'ko'
                  ? '추출 기준'
                  : currentLang === 'zh'
                  ? '冲泡指引'
                  : 'Brewing Parameters'}
              </span>

              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-[#1C1A17]/10">
                  <div className="flex items-center space-x-2 text-[#1C1A17]/70">
                    <Thermometer className="w-4 h-4 text-[#3E4B39]" />
                    <span>
                      {currentLang === 'ja'
                        ? '最適湯温'
                        : currentLang === 'ko'
                        ? '추출 온도'
                        : currentLang === 'zh'
                        ? '适宜水温'
                        : 'Water Temp'}
                    </span>
                  </div>
                  <span className="font-medium text-[#1C1A17] text-sm">{activeTea.temperature}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#1C1A17]/10">
                  <div className="flex items-center space-x-2 text-[#1C1A17]/70">
                    <Clock className="w-4 h-4 text-[#3E4B39]" />
                    <span>
                      {currentLang === 'ja'
                        ? '煎数'
                        : currentLang === 'ko'
                        ? '추출 횟수'
                        : currentLang === 'zh'
                        ? '冲泡次数'
                        : 'Infusions'}
                    </span>
                  </div>
                  <span className="font-medium text-[#1C1A17] text-sm">
                    {activeTea.infusions} {currentLang === 'ja' ? '煎' : currentLang === 'ko' ? '회' : currentLang === 'zh' ? '泡' : 'steeps'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-2 text-[#1C1A17]/70">
                    <Sparkles className="w-4 h-4 text-[#3E4B39]" />
                    <span>
                      {currentLang === 'ja'
                        ? '提供席'
                        : currentLang === 'ko'
                        ? '이용 좌석'
                        : currentLang === 'zh'
                        ? '适宜席位'
                        : 'Seating'}
                    </span>
                  </div>
                  <span className="font-medium text-[#1C1A17] text-sm">
                    {currentLang === 'ja'
                      ? '1階 茶台 · 中庭席'
                      : currentLang === 'ko'
                      ? '1층 티 카운터 · 중정석'
                      : currentLang === 'zh'
                      ? '1楼 茶席 · 中庭席'
                      : '1F Counter & Courtyard'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
