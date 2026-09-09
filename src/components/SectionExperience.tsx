import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, CupSoda, Clock, Users, Calendar, Crown, Trees } from 'lucide-react';
import { Language } from '../types';
import { formatFloorHeading } from '../utils/typography';

interface SectionExperienceProps {
  currentLang: Language;
  onOpenReserve: () => void;
}

interface ArchitecturalExperience {
  id: string;
  category: 'drink-tea' | 'tea-experience' | 'garden' | 'seasonal-programme' | 'private-experiences';
  subTitle: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  duration: string;
  capacity: string;
  description: Record<Language, string>;
  included: Record<Language, string>[];
  price: string;
  isReservationRequired: boolean;
}

export const SectionExperience: React.FC<SectionExperienceProps> = ({
  currentLang,
  onOpenReserve,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const experiences: ArchitecturalExperience[] = [
    {
      id: 'drink-tea',
      category: 'drink-tea',
      subTitle: '01 · DRINK TEA',
      title: {
        en: 'Drink Tea (Walk-In Ground Floor)',
        ja: '日常の一杯（1階カフェ＆縁側）',
        ko: '차 한 잔 (1층 카페 및 툇마루)',
        zh: '日常一盏（一楼茶席与檐廊）',
      },
      subtitle: {
        en: 'Drop in. A single cup of hot or cold tea and freshly baked financiers.',
        ja: '予約不要。ふらりと立ち寄り、温かいお茶や冷製茶と焼きたてフィナンシェを。',
        ko: '예약 불필요. 언제든 편안히 들러 따뜻한 차나 냉제차, 갓 구운 피낭시에를 즐깁니다.',
        zh: '无需预约。随时推门而入，享用冷热香茗与现焙费南雪。',
      },
      duration: 'Unhurried / 30–60 min',
      capacity: 'Walk-in welcome',
      description: {
        en: 'Sit along the honed stone tatami plinths under the Akari lantern, or perch upon the courtyard engawa. Watch leaves steep and financiers bake in real time.',
        ja: '和紙の提灯が灯る石畳のベンチや、中庭を臨む縁側に腰掛けて。静かに立ち上る湯気と、オーブンから漂う焦がしバターの香り。',
        ko: '은은한 한지 조명 아래 다다미 석재 좌대나 중정을 마주한 툇마루에 앉아, 차가 우려지는 시간과 갓 구운 피낭시에의 온기를 누립니다.',
        zh: '于野口勇和纸提灯映照的石阶榻榻米或中庭檐廊下安坐，静赏茶叶舒展，闻焦化黄油微香。',
      },
      included: [
        {
          en: 'Choice of single-origin Gyokuro, Sencha, or Cold Sparkling Gyokuro',
          ja: '単一品種の玉露・煎茶、または名物発泡玉露',
          ko: '단일 품종 교쿠로, 센차 또는 시그니처 스파클링 교쿠로 선택',
          zh: '单品玉露、煎茶或招牌气泡玉露任选',
        },
        {
          en: 'One warm brown butter financier baked downstairs',
          ja: '1階で焼き上げた温かい焦がしバターフィナンシェ',
          ko: '1층에서 갓 구워낸 따뜻한 브라운 버터 피낭시에',
          zh: '一楼现出炉焦化黄油费南雪一枚',
        },
      ],
      price: '',
      isReservationRequired: false,
    },
    {
      id: 'tea-experience',
      category: 'tea-experience',
      subTitle: '02 · TEA EXPERIENCE',
      title: {
        en: 'Upper House Guided Tea Session',
        ja: '2階茶室 ガイド付きテイスティング',
        ko: '2층 다실 가이드 테이스팅 세션',
        zh: '二楼茶室 侍茶引导品鉴席',
      },
      subtitle: {
        en: 'Seated upstairs. Guided comparative tasting across rare shaded teas.',
        ja: '2階の静寂な茶室で。極上覆下茶の4段階抽出と五感の対話。',
        ko: '2층 조용한 다실에 마주 앉아. 최고급 옥로의 4단계 추출과 감각의 대화.',
        zh: '登临二楼静室。由侍茶师引导顶级覆光茶四段式温控萃取。',
      },
      duration: '60 minutes',
      capacity: 'Max 6 guests per table',
      description: {
        en: 'Conducted in our second-floor machiya room overlooking the tiled courtyard. A dedicated tea practitioner guides you through the progression of umami, aroma, leaf eating, and seasonal confectionery.',
        ja: '瓦屋根の中庭を見下ろす2階町家にて、専任の茶人がご案内。1煎目から4煎目への味わいの変化、抽出後の茶葉の試食、季節の生菓子をご堪能いただけます。',
        ko: '기와 지붕과 중정이 내려다보이는 2층 다실에서 전문 다인이 이끕니다. 1포부터 4포까지 변화하는 감칠맛의 층위, 우려낸 찻잎 시식, 계절 생과자를 경험합니다.',
        zh: '俯瞰瓦垄中庭的二楼町家茶寮中，茶人亲侍。领略从第一泡至第四泡的风味层变、品尝温润茶青配自酿柚子醋，佐以当季手作和菓子。',
      },
      included: [
        {
          en: 'Four successive temperature-controlled infusions of rare Uji Gyokuro',
          ja: '特撰宇治玉露の温度を変えた4段階の抽出',
          ko: '추출 온도를 조절하며 맛보는 특선 우지 옥로 4포 테이스팅',
          zh: '珍品宇治玉露四阶段温控循序冲泡',
        },
        {
          en: 'Direct tasting of tender spent tea leaves with house citrus ponzu',
          ja: '抽出を終えた柔らかな茶葉のポン酢お浸し',
          ko: '차를 우려낸 부드러운 찻잎을 시트러스 폰즈와 함께 맛보는 미식',
          zh: '萃后鲜嫩茶叶佐特调柑橘醋浸尝',
        },
        {
          en: 'Handmade seasonal Kyoto wagashi confection & warm financier',
          ja: '京都名匠による季節の生菓子と焼きたてフィナンシェ',
          ko: '교토 명장의 계절 화과자 및 갓 구운 피낭시에 페어링',
          zh: '京都名匠时令手作和菓子与现烤费南雪',
        },
      ],
      price: '',
      isReservationRequired: true,
    },
    {
      id: 'garden-experience',
      category: 'garden',
      subTitle: '03 · GARDEN',
      title: {
        en: 'Courtyard & Moss Wall Immersion',
        ja: '中庭と苔壁の静思体験',
        ko: '중정과 이끼 벽의 명상적 시간',
        zh: '中庭与生苔石壁 沉浸幽寂',
      },
      subtitle: {
        en: 'A garden designed as an architectural room without a roof.',
        ja: '天井が空であるもうひとつの部屋。石と水と苔の呼吸に触れる。',
        ko: '하늘을 천장으로 삼은 또 하나의 방. 돌과 물과 이끼의 호흡을 마주합니다.',
        zh: '以青空为穹顶的庭院之室。感悟石、水与苍苔的同频呼吸。',
      },
      duration: 'Open all day',
      capacity: 'Courtyard capacity 12',
      description: {
        en: 'Step across the honed stepping stones into the inner courtyard. Listen to the rhythmic drops into the stone rill, feel the moisture radiating from the living moss wall, and rest beneath the seasonal cherry canopy.',
        ja: '飛び石を渡り、中庭の中心へ。石の水路に落ちる水滴のリズム、奥壁の生き生きとした苔が放つ湿度、そして季節の木陰に身をゆだねる静謐な時間。',
        ko: '디딤돌을 밟고 중정 안으로 걸어 들어갑니다. 석조 수로로 똑똑 떨어지는 물방울 소리, 살아있는 이끼 벽이 전하는 촉촉한 숨결, 계절 벚나무 그늘 아래 머무는 고요한 쉼.',
        zh: '步履踏上玄关石汀步步入中庭，聆听落入石水渠的清泉节律，感受垂直苔壁散发的微润清凉，休歇于季候樱木树荫下。',
      },
      included: [
        {
          en: 'Access to stepping stones, stone daybed, and living moss wall',
          ja: '飛び石の散策、巨石ベンチ、生きた苔壁の鑑賞',
          ko: '디딤돌 산책, 자연석 벤치 및 수직 이끼 벽 감상',
          zh: '石汀步庭径散策、天然石榻及整面绿苔壁静赏',
        },
        {
          en: 'Complimentary pour of chilled Fushimi aquifer spring water',
          ja: '伏見名水の冷たい一口サーブ',
          ko: '후시미 천연 암반수 시원한 한 잔 제공',
          zh: '奉送伏见古水脉清洌甘泉一盏',
        },
      ],
      price: '',
      isReservationRequired: false,
    },
    {
      id: 'seasonal-programme',
      category: 'seasonal-programme',
      subTitle: '04 · SEASONAL PROGRAMME',
      title: {
        en: 'Seasonal Programme & Workshops',
        ja: '季節の催事・茶の探求プログラム',
        ko: '시즌 특별 프로그램 및 워크숍',
        zh: '时序研习 · 茶道工艺工坊',
      },
      subtitle: {
        en: 'Courses examining Fushimi groundwater, roasting hojicha, and craft.',
        ja: '伏見の水質探求、自家製ほうじ茶の焙煎、京都の職人と歩む対話。',
        ko: '후시미 지하수 수질 분석, 호지차 자가 로스팅, 교토 장인과의 대화.',
        zh: '探研伏见泉脉、古法手焙焙茶及京都匠作对谈。',
      },
      duration: '90–120 minutes',
      capacity: 'Scheduled weekends · 8 seats',
      description: {
        en: 'Quarterly masterclasses investigating the minerality of Fushimi water, ceramic braziers roasting hojicha, and sensory comparisons of spring shincha vs autumn aged tencha.',
        ja: '季節ごとに開催される特別プログラム。セラミック焙煎器を用いた自家焙煎ほうじ茶の体験や、春の新茶と秋の熟成茶の比較鑑賞など、知的好奇心を深める時間。',
        ko: '계절마다 열리는 특별 강좌. 세라믹 화로를 이용해 직접 호지차를 볶아보는 체험과 봄 햇차 vs 가을 숙성차 블라인드 테이스팅 등 깊이 있는 차 탐구를 나눕니다.',
        zh: '按季举行的茶艺大师课。体验陶制焙炉手工烘焙香茶，比对春季头采新茶与秋季藏陈碾茶的风味演变。',
      },
      included: [
        {
          en: 'Hands-on tea roasting or cupping workshop with tea blenders',
          ja: '茶師による実践的な焙煎またはテイスティング講義',
          ko: '전문 차 블렌더와 함께하는 핸즈온 로스팅 또는 커핑 실습',
          zh: '茶师亲授焙煎工艺与杯测试饮工坊',
        },
        {
          en: 'Freshly roasted tea batch packaged to take home',
          ja: 'ご自身で焙じたての茶葉のお持ち帰りギフト',
          ko: '직접 볶은 갓 만든 찻잎 패키지 기념 선물',
          zh: '手焙现作茶叶特制包装随行手礼',
        },
      ],
      price: '',
      isReservationRequired: true,
    },
    {
      id: 'private-experiences',
      category: 'private-experiences',
      subTitle: '05 · PRIVATE EXPERIENCES',
      title: {
        en: 'Private Machiya Buyout & Curated Sessions',
        ja: '茶室貸切・プライベートセッション',
        ko: '고택 다실 프라이빗 대관 및 맞춤 세션',
        zh: '町家茶寮私享包场与定制茶席',
      },
      subtitle: {
        en: 'Exclusive access to the upper house, private tea master, bespoke pairings.',
        ja: '2階茶室の専有。専属茶人による完全オーダーメイドの呈茶。',
        ko: '2층 다실 독점 공간 이용. 전담 티 마스터의 맞춤형 페어링 코스.',
        zh: '二楼茶室全席独享，专属侍茶师度身定制茶果盛筵。',
      },
      duration: '120 minutes',
      capacity: 'Private 1–8 guests',
      description: {
        en: 'Designed for private gatherings, visiting architects, collectors, and celebratory moments. The entire upper floor is reserved for your party with customized tea flights and rare vintage bottles.',
        ja: '大切な方との語らい、建築や文化の探求、記念日のために。2階茶室全体を貸し切り、特別なヴィンテージ茶葉や発泡玉露のフルペアリングをご用意します。',
        ko: '소중한 분들과의 모임, 건축 및 문화 답사, 프라이빗 행사를 위한 코스. 2층 다실 전체를 단독 대관하며 희귀 빈티지 옥로와 맞춤형 코스가 제공됩니다.',
        zh: '专为私人雅集、建筑考察与庆典纪念量身设定。整座二楼全席包揽，呈奉典藏陈茶与气泡玉露全阶搭配。',
      },
      included: [
        {
          en: 'Full private buyout of the Upper Machiya tea salon',
          ja: '2階茶室フロア完全プライベート専有',
          ko: '2층 마치야 다실 전 층 단독 프라이빗 대관',
          zh: '二楼町家茶寮全楼层私密独享',
        },
        {
          en: 'Dedicated tea master with bespoke 5-course tea and confectionery pairing',
          ja: '専任茶人による5品の特製茶・菓子フルコース',
          ko: '전담 다인이 선보이는 5코스 프리미엄 티 & 디저트 페어링',
          zh: '专属茶人呈奉五道式茗茶与和果子美宴',
        },
      ],
      price: '',
      isReservationRequired: true,
    },
  ];

  const filteredExperiences =
    activeFilter === 'all'
      ? experiences
      : experiences.filter((e) => e.category === activeFilter);

  return (
    <section id="experience" className="py-24 px-6 sm:px-12 bg-[#FAF8F5] border-t border-[#1C1A17]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
              {currentLang === 'ja'
                ? '体験と巡り · 06'
                : currentLang === 'ko'
                ? '차를 만나는 다양한 방법 · 06'
                : currentLang === 'zh'
                ? '茶事体验 · 06'
                : 'WAYS OF ENGAGING · 06'}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1C1A17]">
              {currentLang === 'ja'
                ? '茶を愉しむ道は、ひとつではありません。'
                : currentLang === 'ko'
                ? '차를 마시는 방법은 한 가지만이 아닙니다.'
                : currentLang === 'zh'
                ? '品茶之道，不止一途。'
                : 'There is more than one way to drink tea.'}
            </h2>
            <p className="text-base sm:text-lg text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
              {currentLang === 'ja'
                ? '日常の一杯から、2階茶室でのガイド付きテイスティング、中庭の静思、季節の催事、そしてプライベートな貸切まで。'
                : currentLang === 'ko'
                ? '가볍게 들러 마시는 차 한 잔부터, 2층 다실 가이드 테이스팅, 중정 명상, 시즌 워크숍, 그리고 프라이빗 대관 세션까지.'
                : currentLang === 'zh'
                ? '从中庭檐廊下的闲适一盏，到二楼深邃的导师品茗席、四季工艺研习以至私享包场。'
                : 'From an unhurried single cup in the courtyard to deep guided explorations upstairs, seasonal masterclasses, and private buyouts.'}
            </p>
          </div>

          {/* Sub-item categories */}
          <div className="flex flex-wrap gap-1.5 text-xs font-sans-clean">
            {[
              { key: 'all', labelEn: 'All 5 Ways', labelJa: 'すべての体験', labelKo: '전체', labelZh: '全部体验' },
              { key: 'drink-tea', labelEn: 'Drink Tea', labelJa: '日常の一杯', labelKo: '차 한 잔', labelZh: '日常一盏' },
              { key: 'tea-experience', labelEn: 'Tea Experience', labelJa: '茶室セッション', labelKo: '다실 세션', labelZh: '茶室品鉴' },
              { key: 'garden', labelEn: 'Garden', labelJa: '中庭の静思', labelKo: '정원 감상', labelZh: '庭院幽寂' },
              { key: 'seasonal-programme', labelEn: 'Seasonal Programme', labelJa: '季節の催し', labelKo: '시즌 프로그램', labelZh: '时序研习' },
              { key: 'private-experiences', labelEn: 'Private Experiences', labelJa: 'プライベート貸切', labelKo: '프라이빗', labelZh: '私享包场' },
            ].map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveFilter(cat.key)}
                className={`px-3 py-1.5 rounded-full transition-all text-[11px] tracking-wide cursor-pointer ${
                  activeFilter === cat.key
                    ? 'bg-[#1C1A17] text-[#FAF8F5] font-medium shadow-xs'
                    : 'bg-[#1C1A17]/5 text-[#1C1A17]/70 hover:bg-[#1C1A17]/10'
                }`}
              >
                {currentLang === 'ja'
                  ? cat.labelJa
                  : currentLang === 'ko'
                  ? cat.labelKo
                  : currentLang === 'zh'
                  ? cat.labelZh
                  : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="p-8 rounded-xl bg-[#FAF8F5] border border-[#1C1A17]/15 hover:border-[#1C1A17]/40 transition-all flex flex-col justify-between shadow-[0_8px_24px_-8px_rgba(28,26,23,0.06)] relative"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest text-[#3E4B39] font-sans-clean font-medium px-2 py-0.5 rounded-sm bg-[#3E4B39]/10">
                    {exp.subTitle}
                  </span>
                  <span className="text-xs text-[#1C1A17]/50 font-sans-clean">
                    {exp.duration}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-editorial text-2xl text-[#1C1A17] tracking-tight [word-break:keep-all]">
                    {formatFloorHeading(exp.title[currentLang] || exp.title.en, currentLang === 'ko')}
                  </h3>
                  <p className="font-editorial text-xs italic text-[#1C1A17]/70">
                    {exp.subtitle[currentLang] || exp.subtitle.en}
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-sans-clean text-[#1C1A17]/75 leading-relaxed font-light">
                  {exp.description[currentLang] || exp.description.en}
                </p>

                {/* Inclusions */}
                <div className="pt-4 border-t border-[#1C1A17]/10 space-y-2 text-xs font-sans-clean">
                  {exp.included.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-[#1C1A17]">
                      <Check className="w-3.5 h-3.5 text-[#3E4B39] shrink-0 mt-0.5" />
                      <span>{item[currentLang] || item.en}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Access & CTA */}
              <div className="pt-8 mt-6 border-t border-[#1C1A17]/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#1C1A17]/50 tracking-wider block font-sans-clean">
                    {currentLang === 'ja'
                      ? '利用方式'
                      : currentLang === 'ko'
                      ? '이용 방식'
                      : currentLang === 'zh'
                      ? '参与方式'
                      : 'Access'}
                  </span>
                  <span className="font-editorial text-base font-medium text-[#1C1A17]">
                    {exp.isReservationRequired
                      ? currentLang === 'ja'
                        ? '事前予約制'
                        : currentLang === 'ko'
                        ? '사전 예약제'
                        : currentLang === 'zh'
                        ? '需提前预约'
                        : 'By Reservation'
                      : currentLang === 'ja'
                      ? '予約不要 · 自由利用'
                      : currentLang === 'ko'
                      ? '예약 불필요 · 자유 이용'
                      : currentLang === 'zh'
                      ? '随时到访'
                      : 'Walk-in Welcome'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onOpenReserve}
                  className="inline-flex items-center space-x-1 text-xs bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#3E4B39] px-4 py-2 rounded-full font-sans-clean transition-colors font-medium shadow-xs cursor-pointer"
                >
                  <span>
                    {exp.isReservationRequired
                      ? currentLang === 'ja'
                        ? '予約する'
                        : currentLang === 'ko'
                        ? '예약 신청'
                        : currentLang === 'zh'
                        ? '预约席位'
                        : 'Reserve'
                      : currentLang === 'ja'
                      ? 'ご案内'
                      : currentLang === 'ko'
                      ? '이용 안내'
                      : currentLang === 'zh'
                      ? '前往探访'
                      : 'Visit'}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

