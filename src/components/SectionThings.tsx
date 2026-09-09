import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Filter, Check, ArrowRight } from 'lucide-react';
import { Language, ThingsItem } from '../types';
import { THINGS_DATA } from '../data/architectureData';

interface SectionThingsProps {
  currentLang: Language;
  onOpenImageModal: (image: { title: string; url: string; caption?: string; note?: string }) => void;
  onOpenMenu: () => void;
}

export const SectionThings: React.FC<SectionThingsProps> = ({
  currentLang,
  onOpenImageModal,
  onOpenMenu,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', labelEn: 'All Things', labelJa: 'すべての品', labelKo: '전체', labelZh: '全部器物' },
    { key: 'tea', labelEn: 'Tea', labelJa: '茶葉・缶', labelKo: '찻잎 틴', labelZh: '茶叶·茶罐' },
    { key: 'sparkling-tea', labelEn: 'Sparkling Tea', labelJa: '発泡瓶茶', labelKo: '스파클링 티', labelZh: '气泡瓶装茶' },
    { key: 'financiers', labelEn: 'Financiers', labelJa: '焼菓子', labelKo: '피낭시에', labelZh: '手作茶点' },
    { key: 'ceramics', labelEn: 'Ceramics', labelJa: '京焼・急須', labelKo: '도자기 다기', labelZh: '京烧·急须' },
    { key: 'objects', labelEn: 'Objects', labelJa: '暮らしの道具', labelKo: '오브제', labelZh: '生活雅器' },
    { key: 'gifts', labelEn: 'Gifts', labelJa: '桐箱贈答', labelKo: '기프트 세트', labelZh: '桐木礼盒' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? THINGS_DATA
      : THINGS_DATA.filter((item) => item.category === activeCategory);

  const getItemName = (item: ThingsItem) => {
    if (currentLang === 'zh') {
      const zhNames: Record<string, string> = {
        'tea-uji-gyokuro-tin': '京都宇治 覆下栽培 特选玉露茶罐 (50g)',
        'tea-ceremonial-matcha-tin': '石臼现磨 宇治御抹茶 (30g)',
        'sparkling-tea-bottle-750': 'Ie 伏水冷萃发泡玉露 典藏瓶装 (750ml)',
        'financiers-cedar-box': '焦化黄油手作费南雪 杉木礼盒 (8枚入)',
        'ceramics-kyoto-kyusu': '京都清水烧 灰釉柴烧宝瓶·急须 (大师手作)',
        'ceramics-yunomi-pair': '薄口炻器汲出茶碗 对杯组 (两客装)',
        'objects-brass-tea-scoop': '手工锻打纯黄铜茶匙 (茶杓)',
        'gifts-fushimi-curated-set': 'Ie Fushimi 桐木特选雅致伴手礼盒',
      };
      return zhNames[item.id] || item.name.en;
    }
    return item.name[currentLang] || item.name.en;
  };

  const getItemDescription = (item: ThingsItem) => {
    if (currentLang === 'zh') {
      const zhDesc: Record<string, string> = {
        'tea-uji-gyokuro-tin': '在和束町传统稻草遮光棚下手采的珍稀初展茶芽。浓郁的海苔出汁鲜甜，伴随松针清香与持久玉色茶汤。',
        'tea-ceremonial-matcha-tin': '天然花岗岩石臼每小时仅精磨40克。质地如丝绒般幼滑，翠绿微沫，鲜爽回甘而不涩。',
        'sparkling-tea-bottle-750': '以伏见深层软水历经18小时低温冷萃，融入微密气泡并以香槟软木塞封存，展现极致清润。',
        'financiers-cedar-box': '严选法国诺曼底焦化黄油与玛尔科纳杏仁每日现烤。装入京都天然杉木木盒，烙印伏见朱印。',
        'ceramics-kyoto-kyusu': '京都五条坂柴烧登窑出窑。柔润灰釉泛微青色，铁斑点缀，重心专为单手出汤设计。',
        'ceramics-yunomi-pair': '薄口圆润的杯沿能够将茶汤温热与香气纯粹地引至唇齿，外壁保留陶土自然肌理。',
        'objects-brass-tea-scoop': '京都老铺匠人手工敲打延展纯黄铜板制作，随着经年使用呈现越发沉静的岁月古金色。',
        'gifts-fushimi-curated-set': '涵盖宅邸代表性风物：特选玉露茶罐、6枚现烤费南雪、手工铜匙，桐木盒外裹京都蓝染风吕敷。',
      };
      return zhDesc[item.id] || item.description.en;
    }
    return item.description[currentLang] || item.description.en;
  };

  const getItemDetails = (item: ThingsItem) => {
    if (currentLang === 'zh') {
      const zhDetails: Record<string, string> = {
        'tea-uji-gyokuro-tin': '产地: 和束町 · 品种: 朝日/五香 · 采摘: 5月头采手摘',
        'tea-ceremonial-matcha-tin': '宇治单一园碾茶 · 石臼精磨 · 铝膜遮光密封罐',
        'sparkling-tea-bottle-750': '无酒精 · 需冷藏 (4℃) · 优质软木塞封存',
        'financiers-cedar-box': '原味焦化黄油4枚 + 宇治抹茶玉露4枚',
        'ceramics-kyoto-kyusu': '容量: 180ml · 粗陶 (陶质一体滤网)',
        'ceramics-yunomi-pair': '容量: 各90ml · 桐木盒装 两客组',
        'objects-brass-tea-scoop': '天然无涂层黄铜 · 长度 9.5cm · 附亚麻布袋',
        'gifts-fushimi-curated-set': '顶级桐木箱 · 京都蓝染风吕敷布包 · 火漆印封',
      };
      return zhDetails[item.id] || item.details.en;
    }
    return item.details[currentLang] || item.details.en;
  };

  return (
    <section id="things" className="py-24 px-6 sm:px-12 bg-[#FAF8F5] border-t border-[#1C1A17]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>
                {currentLang === 'ja'
                  ? '道具と味わい · 05'
                  : currentLang === 'ko'
                  ? '기물과 미식 · 05'
                  : currentLang === 'zh'
                  ? '器物与风物 · 05'
                  : 'OBJECTS & TASTES · 05'}
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1C1A17]">
              {currentLang === 'ja'
                ? '家のための道具と味覚。'
                : currentLang === 'ko'
                ? '집을 위한 기물과 미식.'
                : currentLang === 'zh'
                ? '常日相伴的器物与茶点。'
                : 'Things for the House.'}
            </h2>
            <p className="text-base sm:text-lg text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
              {currentLang === 'ja'
                ? '茶缶、ボトル発泡玉露、焼きたてフィナンシェ、京焼の急須、真鍮の茶匙、そして手漉き和紙の桐箱ギフト。私たちが選び、愛用する道具と味覚を日常にお持ち帰りいただけます。'
                : currentLang === 'ko'
                ? '단일 다원 찻잎 틴, 보틀 스파클링 교쿠로, 갓 구운 피낭시에, 교토 도예가의 다관, 수공 황동 차스쿱, 그리고 오동나무 기프트 세트. 집에서 마주한 온기를 일상으로 이어갑니다.'
                : currentLang === 'zh'
                ? '单一茶园茶罐、气泡瓶装玉露、出炉费南雪、手作清水烧急须、锻打铜匙与桐木礼盒。将宅邸里的清雅与温润带回日常。'
                : 'Selected teas, bottled sparkling gyokuro, fresh financiers, handcrafted Kyoto teapots, brass scoops, and paulownia gift sets for life at home.'}
            </p>
          </div>

          {/* Sub-item categories */}
          <div className="flex flex-wrap gap-1.5 text-xs font-sans-clean">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-1.5 rounded-full transition-all text-[11px] tracking-wide cursor-pointer ${
                  activeCategory === cat.key
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

        {/* Grid of Things */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#1C1A17]/15 hover:border-[#1C1A17]/40 transition-all flex flex-col justify-between shadow-[0_12px_28px_-8px_rgba(28,26,23,0.12)] ring-1 ring-[#1C1A17]/8 group"
            >
              <div>
                <div
                  className="relative aspect-[4/3] bg-[#EAE6DF] overflow-hidden cursor-pointer"
                  onClick={() =>
                    onOpenImageModal({
                      title: getItemName(item),
                      url: item.imageUrl,
                      caption: getItemDescription(item),
                      note: getItemDetails(item),
                    })
                  }
                >
                  <img
                    src={item.imageUrl}
                    alt={getItemName(item)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C1A17]/65 via-[#1C1A17]/15 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#FAF8F5]/10" />

                  {/* Category chip */}
                  <div className="relative z-10 absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#1C1A17] text-[10px] font-sans-clean font-medium px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-xs">
                    {item.category.replace('-', ' ')}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-editorial italic text-[#3E4B39] block">
                    {item.japaneseName}
                  </span>
                  <h3 className="font-editorial text-xl text-[#1C1A17] tracking-tight group-hover:text-[#3E4B39] transition-colors">
                    {getItemName(item)}
                  </h3>
                  <p className="text-xs text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
                    {getItemDescription(item)}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-3 border-t border-[#1C1A17]/10 mt-2">
                <p className="text-[11px] text-[#1C1A17]/60 font-sans-clean">
                  {getItemDetails(item)}
                </p>

                <div className="flex items-center justify-between pt-1 text-xs font-sans-clean">
                  <span className="text-[11px] text-[#3E4B39] flex items-center space-x-1">
                    <Check className="w-3 h-3" />
                    <span>
                      {currentLang === 'ja'
                        ? '店頭にて購入可'
                        : currentLang === 'ko'
                        ? '매장 수령 가능'
                        : currentLang === 'zh'
                        ? '宅邸堂内可取'
                        : 'Available in House'}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={onOpenMenu}
                    className="text-[11px] underline underline-offset-4 text-[#1C1A17] hover:text-[#3E4B39] cursor-pointer"
                  >
                    {currentLang === 'ja'
                      ? '詳細'
                      : currentLang === 'ko'
                      ? '상세 안내'
                      : currentLang === 'zh'
                      ? '详情'
                      : 'Details'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
