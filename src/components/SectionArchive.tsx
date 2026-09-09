import React, { useState } from 'react';
import { Archive, Eye, Filter } from 'lucide-react';
import { Language } from '../types';
import { REFERENCE_ARCHIVE } from '../data/imagery';

interface SectionArchiveProps {
  currentLang: Language;
  onOpenImageModal: (image: { title: string; url: string; caption?: string; note?: string }) => void;
}

export const SectionArchive: React.FC<SectionArchiveProps> = ({
  currentLang,
  onOpenImageModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', labelEn: 'All References', labelJa: '全資料', labelKo: '전체 자료', labelZh: '全部档案' },
    { key: 'Exterior', labelEn: 'Exterior', labelJa: '外観', labelKo: '외관', labelZh: '建筑立面' },
    { key: 'Interior', labelEn: 'Interior', labelJa: '内部空間', labelKo: '내부 공간', labelZh: '室内空间' },
    { key: 'Garden', labelEn: 'Garden & Moss', labelJa: '庭園・苔', labelKo: '정원 및 이끼', labelZh: '庭院与苍苔' },
    { key: 'Craft', labelEn: 'Craft & Beam', labelJa: '工芸・木組み', labelKo: '공예 및 상량', labelZh: '工法榫卯' },
    { key: 'Archive', labelEn: 'Historic Fabric', labelJa: '歴史遺構', labelKo: '역사 고증', labelZh: '历史遗构' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? REFERENCE_ARCHIVE
      : REFERENCE_ARCHIVE.filter((item) => item.category === selectedCategory);

  const getTitle = (item: (typeof REFERENCE_ARCHIVE)[0]) => {
    if (currentLang === 'ja') return item.titleJa;
    if (currentLang === 'ko') return item.titleKo;
    if (currentLang === 'zh') {
      const zhTitles: Record<string, string> = {
        'REF 01': '町家正门与建筑立面',
        'REF 02': '一楼茶席与悬浮榻榻米石阶',
        'REF 03': '中庭庭园 — 天然巨石坐榻与清冽水渠',
        'REF 04': '垂直生长苍苔石壁',
        'REF 05': '二楼俯瞰瓦垄与中庭绿意',
        'REF 06': '町家百年松木大梁与上梁墨书',
        'REF 07': '地下冷泉酒窖天然石阶',
        'REF 08': '二楼幽寂茶寮榻榻米席位',
        'REF 09': '手作黑陶水渠与清泉跌水',
        'REF 10': '野口勇和纸球形提灯柔光',
        'REF 11': '京都传统杉木格栅光影',
        'REF 12': '百年瓦当与苍苔瓦垄',
        'REF 13': '手打纯铜水钵与落叶',
        'REF 14': '焦化黄油手作费南雪与杉木纸筒',
      };
      return zhTitles[item.number] || item.titleEn;
    }
    return item.titleEn;
  };

  const getDescription = (item: (typeof REFERENCE_ARCHIVE)[0]) => {
    if (currentLang === 'ko') return item.descriptionKo;
    if (currentLang === 'ja') return item.titleJa + ' — ' + item.detail;
    if (currentLang === 'zh') {
      const zhDescriptions: Record<string, string> = {
        'REF 01': '京都传统双层町家沿街立面，典雅杉木格栅与瓦垄斜檐构建整肃街景。',
        'REF 02': '温润木地板、地面泛光悬浮榻榻米石榻、典雅盆景与野口勇大型球形和纸灯。',
        'REF 03': '以青空为穹顶的庭院之室，天然巨石伴樱树而卧，石砌浅水渠潺潺流淌。',
        'REF 04': '多种京都天然苍苔与山野蕨类构筑的垂直生态石壁，借中庭温润水汽常青。',
        'REF 05': '倚窗俯瞰深青色日本传统黑熏瓦、中庭樱树与石汀步的静美视角。',
        'REF 06': '明治时期古法榫卯黑松大梁，梁上留存保佑家宅平安的上梁祭文与匠师题字。',
        'REF 07': '通向清凉地下冷泉地窖的原始青石台阶，见证百余年水脉湿度与古老储茶智慧。',
        'REF 08': '二楼恬淡静谧的纯正榻榻米茶室，透过低矮横窗洒入柔和漫射天光。',
        'REF 09': '暗色粗陶长水渠中水滴叮咚作响，洗练线条与石阶光影辉映。',
        'REF 10': '传统和纸骨架均匀漫射柔光，在石木质感间投下温润阴翳之美。',
        'REF 11': '垂直木格栅筛选烈日与街头嘈杂，营造宁静内省的半隐蔽空间。',
        'REF 12': '百年风雨浸润的瓦垄覆以薄苔，承载京都伏见岁月的重力与静默。',
        'REF 13': '手工敲打锻造的纯铜手水钵，倒映四时光影与季候漂浮的落叶。',
        'REF 14': '焦化黄油出炉微温费南雪，置于印有红色伏见印章的天然杉木锥筒中。',
      };
      return zhDescriptions[item.number] || item.descriptionEn;
    }
    return item.descriptionEn;
  };

  return (
    <section id="archive" className="py-24 px-6 sm:px-12 bg-[#FAF8F5] border-t border-[#1C1A17]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
              <Archive className="w-3.5 h-3.5" />
              <span>
                {currentLang === 'ja'
                  ? '建築参考資料 · 08'
                  : currentLang === 'ko'
                  ? '건축 레퍼런스 아카이브 · 08'
                  : currentLang === 'zh'
                  ? '建筑档案 · 08'
                  : 'REFERENCE ARCHIVE · 08'}
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1C1A17]">
              {currentLang === 'ja'
                ? '素材の研究と建築アーカイブ。'
                : currentLang === 'ko'
                ? '소재 연구 및 레퍼런스 아카이브.'
                : currentLang === 'zh'
                ? '材质研习与建筑档案。'
                : 'Material Studies & Reference Archive.'}
            </h2>
            <p className="text-sm sm:text-base text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
              {currentLang === 'ja'
                ? 'IE.HOUSEの再生にあたり記録された14点の建築原点資料。古材の梁、地下への石段、土壁に射す光、そして時を重ねたディテール。'
                : currentLang === 'ko'
                ? 'IE.HOUSE의 복원과 정체성을 기록한 14편의 건축 레퍼런스 아카이브. 대들보의 묵서, 지하 냉천 돌계단, 흙벽의 음영과 세월의 숨결.'
                : currentLang === 'zh'
                ? '记录Ie Fushimi重修再生精神的十四份原点研习档案——从百年松木大梁到地窖石阶。'
                : 'The 14 foundational reference studies documenting the restorative spirit of Ie Fushimi — from pine roof beams to cellar stone stairs.'}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 text-xs font-sans-clean">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 rounded-full transition-all text-[11px] tracking-wide cursor-pointer ${
                  selectedCategory === cat.key
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.number}
              className="group rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#1C1A17]/10 hover:border-[#1C1A17]/35 transition-all shadow-[0_12px_28px_-8px_rgba(28,26,23,0.12)] ring-1 ring-[#1C1A17]/8 flex flex-col justify-between cursor-pointer"
              onClick={() =>
                onOpenImageModal({
                  title: `${item.number} — ${getTitle(item)}`,
                  url: item.imageUrl,
                  caption: getDescription(item),
                  note: item.detail,
                })
              }
            >
              <div>
                <div className="relative aspect-[4/3] bg-[#EAE6DF] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={getTitle(item)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C1A17]/65 via-[#1C1A17]/15 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#FAF8F5]/10" />

                  {/* Ref number chip */}
                  <div className="relative z-10 absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#1C1A17] text-[10px] font-sans-clean font-medium px-2 py-0.5 rounded-sm tracking-widest shadow-xs">
                    {item.number}
                  </div>

                  <div className="relative z-10 absolute bottom-3 right-3 p-1.5 bg-[#FAF8F5]/90 backdrop-blur-xs rounded-full text-[#1C1A17] opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-baseline text-[11px] font-sans-clean text-[#3E4B39]">
                    <span className="uppercase tracking-wider">{item.category}</span>
                  </div>
                  <h4 className="font-editorial text-lg text-[#1C1A17] tracking-tight group-hover:text-[#3E4B39] transition-colors leading-snug">
                    {getTitle(item)}
                  </h4>
                  <p className="text-xs text-[#1C1A17]/70 font-sans-clean line-clamp-2 font-light leading-relaxed">
                    {getDescription(item)}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 text-[11px] text-[#1C1A17]/50 font-sans-clean border-t border-[#1C1A17]/5 mt-2">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
