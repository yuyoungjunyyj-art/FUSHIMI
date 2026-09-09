import React, { useState } from 'react';
import { X, Sparkles, Flame, Check } from 'lucide-react';
import { Language } from '../types';
import { TEAS_DATA, FINANCIERS_DATA } from '../data/houseData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, currentLang }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'tea' | 'kitchen'>('all');

  if (!isOpen) return null;

  const getTeaName = (tea: (typeof TEAS_DATA)[0]) => {
    if (currentLang === 'zh') {
      const zhNames: Record<string, string> = {
        'tea-uji-gyokuro': '京都宇治 特选覆下玉露',
        'tea-sparkling-gyokuro': '伏见冷萃 微气泡玉露 (冷瓶)',
        'tea-matcha-ceremonial': '石臼现磨 宇治御抹茶 (附时令果子)',
        'tea-sencha-single-estate': '和束町 浅蒸单一园煎茶',
        'tea-roasted-hojicha': '炭火焙煎 伏见茎焙茶 (茎茶)',
      };
      return zhNames[tea.id] || tea.name.en;
    }
    return tea.name[currentLang] || tea.name.en;
  };

  const getTeaDescription = (tea: (typeof TEAS_DATA)[0]) => {
    if (currentLang === 'zh') {
      const zhDesc: Record<string, string> = {
        'tea-uji-gyokuro': '历经和束町25天遮光覆盖培植。初泡以45℃伏见温润软水慢沏，茶汤如海苔昆布般鲜甜浓厚；二泡则释放清雅松香。',
        'tea-sparkling-gyokuro': '无酒精。冷萃玉露经18小时低温出汤，注入微细气泡并以香槟软木塞封存，展现无与伦比的优雅清冽。',
        'tea-matcha-ceremonial': '宇治传统石臼慢速研磨。茶汤细腻如翡翠天鹅绒，滋味清甘回甘，配以手工时令茶点。',
        'tea-sencha-single-estate': '选用高海拔山坡单一园头采茶芽，浅蒸工艺保留青草与柑橘类芳香，清透澄明。',
        'tea-roasted-hojicha': '以京都老铺炭火细致焙煎春采茶茎。坚果焦香扑鼻，咖啡因极低，适宜黄昏时分静心品饮。',
      };
      return zhDesc[tea.id] || tea.description.en;
    }
    return tea.description[currentLang] || tea.description.en;
  };

  const getTeaNotes = (tea: (typeof TEAS_DATA)[0]) => {
    if (currentLang === 'zh') {
      const zhNotes: Record<string, string> = {
        'tea-uji-gyokuro': '海苔甘鲜 · 露水松针 · 丝绒般滑润',
        'tea-sparkling-gyokuro': '青葡萄香 · 柔密气泡 · 清爽白花',
        'tea-matcha-ceremonial': '开心果香 · 浓郁醇厚 · 翠绿微沫',
        'tea-sencha-single-estate': '初摘嫩竹 · 柑橘香气 · 清冽回甘',
        'tea-roasted-hojicha': '焦香坚果 · 杉木芬芳 · 温润舒缓',
      };
      return zhNotes[tea.id] || tea.tastingNotes.en;
    }
    return tea.tastingNotes[currentLang] || tea.tastingNotes.en;
  };

  const getFinancierName = (item: (typeof FINANCIERS_DATA)[0]) => {
    if (currentLang === 'zh') {
      const zhNames: Record<string, string> = {
        'fin-burnt-butter': '焦化黄油原味费南雪',
        'fin-uji-matcha': '宇治御抹茶 浓郁费南雪',
        'fin-hojicha-chestnut': '炭焙茎焙茶 糖渍栗子费南雪',
      };
      return zhNames[item.id] || item.name.en;
    }
    return item.name[currentLang] || item.name.en;
  };

  const getFinancierDesc = (item: (typeof FINANCIERS_DATA)[0]) => {
    if (currentLang === 'zh') {
      const zhDesc: Record<string, string> = {
        'fin-burnt-butter': '使用法国诺曼底焦化黄油与玛尔科纳杏仁粉，烘烤至外层微脆微焦、内里湿润柔软。',
        'fin-uji-matcha': '融入高浓度宇治手采抹茶，微苦与焦化黄油的甘润完美平衡。',
        'fin-hojicha-chestnut': '焙茶面糊包裹整颗丹波秋栗慢烤，焦香浓郁。',
      };
      return zhDesc[item.id] || item.description.en;
    }
    return item.description[currentLang] || item.description.en;
  };

  const getFinancierPairing = (item: (typeof FINANCIERS_DATA)[0]) => {
    if (currentLang === 'zh') {
      const zhPairings: Record<string, string> = {
        'fin-burnt-butter': '推荐搭配: 特选覆下玉露',
        'fin-uji-matcha': '推荐搭配: 浅蒸单一园煎茶',
        'fin-hojicha-chestnut': '推荐搭配: 炭火焙煎茎焙茶',
      };
      return zhPairings[item.id] || item.pairing.en;
    }
    return item.pairing[currentLang] || item.pairing.en;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1A17]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-3xl max-h-[88vh] rounded-2xl border border-[#1C1A17]/15 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#1C1A17]/10 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#3E4B39] font-sans-clean font-medium block">
              IE FUSHIMI · MENU
            </span>
            <h3 className="font-editorial text-3xl text-[#1C1A17]">
              {currentLang === 'ja'
                ? 'お品書き'
                : currentLang === 'ko'
                ? '메뉴 전체보기'
                : currentLang === 'zh'
                ? '茶事单'
                : 'The Tea & Kitchen Menu'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#1C1A17]/5 text-[#1C1A17]/70 hover:text-[#1C1A17] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Filters */}
        <div className="px-6 pt-4 flex space-x-2 border-b border-[#1C1A17]/10 pb-3 text-xs font-sans-clean">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#1C1A17] text-[#FAF8F5] font-medium'
                : 'text-[#1C1A17]/70 hover:bg-[#1C1A17]/5'
            }`}
          >
            {currentLang === 'ja'
              ? 'すべて'
              : currentLang === 'ko'
              ? '전체 보기'
              : currentLang === 'zh'
              ? '全部单品'
              : 'All Offerings'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tea')}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'tea'
                ? 'bg-[#1C1A17] text-[#FAF8F5] font-medium'
                : 'text-[#1C1A17]/70 hover:bg-[#1C1A17]/5'
            }`}
          >
            {currentLang === 'ja'
              ? '日本茶'
              : currentLang === 'ko'
              ? '일본 차'
              : currentLang === 'zh'
              ? '单一园日本茶'
              : 'Japanese Teas'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('kitchen')}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'kitchen'
                ? 'bg-[#1C1A17] text-[#FAF8F5] font-medium'
                : 'text-[#1C1A17]/70 hover:bg-[#1C1A17]/5'
            }`}
          >
            {currentLang === 'ja'
              ? '焼菓子'
              : currentLang === 'ko'
              ? '피낭시에'
              : currentLang === 'zh'
              ? '烤制茶点'
              : 'Financiers'}
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8">
          {/* Teas */}
          {(activeTab === 'all' || activeTab === 'tea') && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#3E4B39] font-sans-clean font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {currentLang === 'ja'
                    ? '日本茶・宇治茶'
                    : currentLang === 'ko'
                    ? '일본 전통 차'
                    : currentLang === 'zh'
                    ? '单一园日本茶·宇治茶'
                    : 'Single-Origin Japanese Tea'}
                </span>
              </div>
              <div className="space-y-4">
                {TEAS_DATA.map((tea) => (
                  <div
                    key={tea.id}
                    className="p-4 rounded-xl bg-[#FAF8F5] border border-[#1C1A17]/10 hover:border-[#1C1A17]/25 transition-colors space-y-1.5"
                  >
                    <div className="flex justify-between items-baseline">
                      <div className="flex items-center space-x-2">
                        <span className="font-editorial text-xl text-[#1C1A17]">
                          {getTeaName(tea)}
                        </span>
                        {tea.isSignature && (
                          <span className="text-[10px] bg-[#3E4B39]/10 text-[#3E4B39] px-2 py-0.5 rounded-full font-sans-clean">
                            Signature
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-[#1C1A17]/60 font-sans-clean">
                        {tea.origin}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-[11px] text-[#1C1A17]/60 font-sans-clean">
                      <span>{tea.origin}</span>
                      <span>·</span>
                      <span>{tea.temperature}</span>
                    </div>
                    <p className="text-xs text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
                      {getTeaDescription(tea)}
                    </p>
                    <p className="text-[11px] text-[#3E4B39] font-sans-clean italic">
                      "{getTeaNotes(tea)}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Financiers */}
          {(activeTab === 'all' || activeTab === 'kitchen') && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#3E4B39] font-sans-clean font-medium">
                <Flame className="w-3.5 h-3.5" />
                <span>
                  {currentLang === 'ja'
                    ? '焼きたて菓子'
                    : currentLang === 'ko'
                    ? '갓 구운 피낭시에'
                    : currentLang === 'zh'
                    ? '现烤出炉茶点'
                    : 'Warm From The Oven'}
                </span>
              </div>
              <div className="space-y-4">
                {FINANCIERS_DATA.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-[#FAF8F5] border border-[#1C1A17]/10 space-y-1.5"
                  >
                    <div className="flex justify-between items-baseline">
                      <span className="font-editorial text-xl text-[#1C1A17]">
                        {getFinancierName(item)}
                      </span>
                      <span className="text-[11px] bg-[#3E4B39]/10 text-[#3E4B39] px-2 py-0.5 rounded-full font-sans-clean">
                        {currentLang === 'ja'
                          ? '焼きたて'
                          : currentLang === 'ko'
                          ? '갓 구움'
                          : currentLang === 'zh'
                          ? '每日现烤'
                          : 'Freshly Baked'}
                      </span>
                    </div>
                    <p className="text-xs text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
                      {getFinancierDesc(item)}
                    </p>
                    <div className="flex items-center space-x-1.5 text-[11px] text-[#3E4B39] font-sans-clean pt-0.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>{getFinancierPairing(item)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#EFECE6]/50 border-t border-[#1C1A17]/10 text-center text-xs font-sans-clean text-[#1C1A17]/60">
          {currentLang === 'ja'
            ? '※ 1階カフェおよび中庭席はご注文後すぐにご利用いただけます。'
            : currentLang === 'ko'
            ? '※ 1층 카페 및 중정 정원 좌석은 예약 없이 바로 주문 및 이용 가능합니다.'
            : currentLang === 'zh'
            ? '※ 一楼咖啡席与中庭庭园入内点单后即可随意入座享用，无需预约。'
            : 'Downstairs cafe and garden seating are open for immediate walk-in enjoyment.'}
        </div>
      </div>
    </div>
  );
};
