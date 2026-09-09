import React, { useState } from 'react';
import { Calendar, Users, Sparkles, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Language, GatheringItem } from '../types';
import { GATHERINGS_DATA } from '../data/architectureData';

interface SectionGatheringsProps {
  currentLang: Language;
  onOpenReserve: () => void;
}

export const SectionGatherings: React.FC<SectionGatheringsProps> = ({
  currentLang,
  onOpenReserve,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { key: 'all', labelEn: 'All Gatherings', labelJa: 'すべての催事', labelKo: '전체 모임', labelZh: '全部聚会' },
    { key: 'whats-on', labelEn: "What's On", labelJa: '開催中の催し', labelKo: '진행 프로그램', labelZh: '当季茶会' },
    { key: 'collaborations', labelEn: 'Collaborations', labelJa: '協働プロジェクト', labelKo: '협업 프로젝트', labelZh: '名酿联名' },
    { key: 'residencies', labelEn: 'Residencies', labelJa: '滞在制作', labelKo: '레지던시', labelZh: '驻地创作' },
    { key: 'open-call', labelEn: 'Open Call', labelJa: '公募・対話', labelKo: '오픈 콜', labelZh: '公开招募' },
  ];

  const filteredItems =
    activeTab === 'all'
      ? GATHERINGS_DATA
      : GATHERINGS_DATA.filter((item) => item.category === activeTab);

  const getItemTitle = (item: GatheringItem) => {
    if (currentLang === 'zh') {
      const zhTitles: Record<string, string> = {
        'gathering-uji-first-flush': '头采春茶（新茶）品鉴与茶叶对比茶会',
        'gathering-sake-tea-collab': '伏见水脉之缘 — 百年酒造 × 禅意茶居对话夜',
      };
      return zhTitles[item.id] || item.title.en;
    }
    return item.title[currentLang] || item.title.en;
  };

  const getItemSubtitle = (item: GatheringItem) => {
    if (currentLang === 'zh') {
      const zhSubtitles: Record<string, string> = {
        'gathering-uji-first-flush': '细品2026年和束町早春头采四款单一茶树品种的独特风貌。',
        'gathering-sake-tea-collab': '源自同一深层地下水脉的纯米大吟酿清酒与特选玉露餐茶搭配。',
      };
      return zhSubtitles[item.id] || item.subtitle.en;
    }
    return item.subtitle[currentLang] || item.subtitle.en;
  };

  const getItemDate = (item: GatheringItem) => {
    if (currentLang === 'zh') {
      const zhDates: Record<string, string> = {
        'gathering-uji-first-flush': '每周六、周日 · 14:00 — 16:00',
        'gathering-sake-tea-collab': '每月最后一个周五 · 17:30 — 19:30',
      };
      return zhDates[item.id] || item.dateOrPeriod.en;
    }
    return item.dateOrPeriod[currentLang] || item.dateOrPeriod.en;
  };

  const getItemHost = (item: GatheringItem) => {
    if (currentLang === 'zh') {
      const zhHosts: Record<string, string> = {
        'gathering-uji-first-flush': '宇治茶师 清水耕平 先生亲自主持',
        'gathering-sake-tea-collab': '伏见松本酒造 × Ie Fushimi 联合呈现',
      };
      return zhHosts[item.id] || item.hostOrCollaborator.en;
    }
    return item.hostOrCollaborator[currentLang] || item.hostOrCollaborator.en;
  };

  const getItemDescription = (item: GatheringItem) => {
    if (currentLang === 'zh') {
      const zhDesc: Record<string, string> = {
        'gathering-uji-first-flush': '在二楼安静的町家茶室中，以不同水温与时长精冲五香、佐绿、薮北、朝日四种单一品种。以五感对比茶叶形态、干香、汤色与喉韵，搭配京都名匠时令茶点。',
        'gathering-sake-tea-collab': '伏见数百年酿酒史与名水“伏水”密不可分。黄昏时分在中庭露台，品尝未经滤过的纯米原酒、冷萃发泡玉露以及以茶熏制的清雅酒肴。',
      };
      return zhDesc[item.id] || item.description.en;
    }
    return item.description[currentLang] || item.description.en;
  };

  const getItemPoints = (item: GatheringItem) => {
    if (currentLang === 'zh') {
      const zhPoints: Record<string, string[]> = {
        'gathering-uji-first-flush': [
          '四款单一品种头采新茶品鉴席',
          '茶师亲制水温与冲泡时长对照指南',
          '京都和果子名家手工练切和果子配茶',
        ],
        'gathering-sake-tea-collab': [
          '三款精选清酒与三款冷萃特选茶配对',
          '伏见地下古水脉与酿酒、制茶历史深度解说',
        ],
      };
      return zhPoints[item.id] || item.bulletPoints.map((p) => p.en);
    }
    return item.bulletPoints.map((p) => p[currentLang] || p.en);
  };

  return (
    <section id="gatherings" className="py-24 px-6 sm:px-12 bg-[#FAF8F5] border-t border-[#1C1A17]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
              <Users className="w-3.5 h-3.5" />
              <span>
                {currentLang === 'ja'
                  ? '集いと対話 · 07'
                  : currentLang === 'ko'
                  ? '모임과 교류 · 07'
                  : currentLang === 'zh'
                  ? '聚会与雅集 · 07'
                  : 'GATHERINGS · DIALOGUE & CRAFT'}
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1C1A17]">
              {currentLang === 'ja'
                ? '家での集いと対話。'
                : currentLang === 'ko'
                ? '이 집에서의 만남과 대화.'
                : currentLang === 'zh'
                ? '老屋里的聚会与对话。'
                : 'Gatherings at the House.'}
            </h2>
            <p className="text-base sm:text-lg text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
              {currentLang === 'ja'
                ? 'Ie Fushimiはただ茶を供するだけでなく、茶師、陶芸家、伏見の酒蔵、そして訪れる人々との対話が交差する生きた町家です。'
                : currentLang === 'ko'
                ? 'Ie Fushimi는 단순한 찻집을 넘어, 우지의 차 장인, 교토의 도예가, 후시미의 명문 주조장과 방문객이 만나 대화를 나누는 살아 숨 쉬는 고택입니다.'
                : currentLang === 'zh'
                ? 'Ie Fushimi不仅提供一杯清茶，更是茶师、陶艺家、伏见古老酒造与旅人交流思想的活态町家。'
                : 'Ie Fushimi is an inhabited machiya brought to life through discourse — convening tea blenders, ceramicists, local sake brewers, and researchers.'}
            </p>
          </div>

          {/* Sub-item categories */}
          <div className="flex flex-wrap gap-1.5 text-xs font-sans-clean">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-1.5 rounded-full transition-all text-[11px] tracking-wide cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-[#1C1A17] text-[#FAF8F5] font-medium shadow-xs'
                    : 'bg-[#1C1A17]/5 text-[#1C1A17]/70 hover:bg-[#1C1A17]/10'
                }`}
              >
                {currentLang === 'ja'
                  ? tab.labelJa
                  : currentLang === 'ko'
                  ? tab.labelKo
                  : currentLang === 'zh'
                  ? tab.labelZh
                  : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Gatherings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl p-8 bg-[#FAF8F5] border border-[#1C1A17]/15 hover:border-[#1C1A17]/40 transition-all flex flex-col justify-between space-y-6 shadow-[0_12px_28px_-8px_rgba(28,26,23,0.08)] ring-1 ring-[#1C1A17]/6"
            >
              <div className="space-y-4">
                {/* Meta Bar */}
                <div className="flex items-center justify-between text-xs font-sans-clean">
                  <span className="uppercase tracking-widest text-[#3E4B39] font-medium text-[10px] px-2 py-0.5 rounded-sm bg-[#3E4B39]/10">
                    {item.category.replace('-', ' ')}
                  </span>
                  <span className="text-[#1C1A17]/60 text-[11px]">
                    {getItemDate(item)}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-editorial text-2xl text-[#1C1A17] tracking-tight">
                    {getItemTitle(item)}
                  </h3>
                  <p className="text-xs font-editorial italic text-[#3E4B39]">
                    {getItemSubtitle(item)}
                  </p>
                </div>

                <p className="text-xs text-[#1C1A17]/60 font-sans-clean">
                  {getItemHost(item)}
                </p>

                <p className="text-sm text-[#1C1A17]/80 font-sans-clean font-light leading-relaxed">
                  {getItemDescription(item)}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-[#1C1A17]/10">
                  {getItemPoints(item).map((pointText, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-[#1C1A17]/75 font-sans-clean">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4B39] shrink-0 mt-0.5" />
                      <span>{pointText}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#1C1A17]/10 flex items-center justify-between">
                <span className="text-xs font-sans-clean text-[#1C1A17]/60">
                  {currentLang === 'ja'
                    ? '場所: IE FUSHIMI 2階茶室または中庭'
                    : currentLang === 'ko'
                    ? '장소: IE FUSHIMI 2층 다실 또는 중정'
                    : currentLang === 'zh'
                    ? '地点: IE FUSHIMI 二楼茶室或中庭'
                    : 'Location: IE FUSHIMI Upper House or Courtyard'}
                </span>
                <button
                  type="button"
                  onClick={onOpenReserve}
                  className="inline-flex items-center space-x-1.5 text-xs font-sans-clean bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#3E4B39] px-4 py-1.5 rounded-full transition-colors font-medium shadow-xs cursor-pointer"
                >
                  <span>
                    {currentLang === 'ja'
                      ? '詳細・予約'
                      : currentLang === 'ko'
                      ? '신청 및 문의'
                      : currentLang === 'zh'
                      ? '席位预约'
                      : 'Inquire'}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
