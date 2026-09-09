import React, { useState } from 'react';
import { MapPin, Clock, Calendar, ArrowUpRight, Compass, Info, HelpCircle, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { FAQ_DATA } from '../data/architectureData';

interface SectionVisitProps {
  currentLang: Language;
  onOpenReserve: () => void;
  onOpenMenu: () => void;
}

export const SectionVisit: React.FC<SectionVisitProps> = ({
  currentLang,
  onOpenReserve,
  onOpenMenu,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const getFaqQuestion = (faq: (typeof FAQ_DATA)[0]) => {
    if (currentLang === 'zh') {
      const zhQ: Record<string, string> = {
        'faq-reservations': '前往一楼咖啡区或庭园需要提前预约吗？',
        'faq-sparkling-gyokuro': '“发泡玉露”含有酒精成分吗？',
        'faq-children-pets': '可以携带儿童和宠物一同入内吗？',
        'faq-photography': '在宅邸内和庭园中可以拍照吗？',
        'faq-access-luggage': '是否有行李寄存以及无障碍通道？',
      };
      return zhQ[faq.id] || faq.question.en;
    }
    return faq.question[currentLang] || faq.question.en;
  };

  const getFaqAnswer = (faq: (typeof FAQ_DATA)[0]) => {
    if (currentLang === 'zh') {
      const zhA: Record<string, string> = {
        'faq-reservations': '一楼咖啡吧台、中庭檐廊坐席以及费南雪外带均无需预约，营业时间内（周四至周一 10:00 — 18:00）随时恭候光临。仅二楼由茶师主持的茶室品鉴席需要提前预约。',
        'faq-sparkling-gyokuro': '完全不含酒精（0.0%）。原料仅选用宇治传统覆下栽培玉露、伏见深层清冽软水与细腻微气泡，宛如年份香槟般芳醇清爽。',
        'faq-children-pets': '能够共同维护安静冥想氛围的儿童非常欢迎在一楼及庭园小憩。为保护百年町家古木、传统榻榻米和石水渠，宠物暂无法入内。',
        'faq-photography': '非常欢迎为手边的茶品、茶点、建筑细节与中庭拍照留念。为尊重其他客人的清净空间，未经事先许可严禁使用三脚架、闪光灯或进行商业拍摄。',
        'faq-access-luggage': '一楼玄关土间设有隐蔽的行李角，可寄存小型随身行李。由于百年传统町家保留了木质门槛与石汀步，二楼需攀爬传统木阶梯，敬请谅解。',
      };
      return zhA[faq.id] || faq.answer.en;
    }
    return faq.answer[currentLang] || faq.answer.en;
  };

  return (
    <section id="visit" className="py-24 px-6 sm:px-12 bg-[#FAF8F5] border-t border-[#1C1A17]/10">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
              {currentLang === 'ja'
                ? '訪問案内・アクセス · 08'
                : currentLang === 'ko'
                ? '방문 안내 및 오시는 길 · 08'
                : currentLang === 'zh'
                ? '拜访与指南 · 08'
                : 'VISIT & ACCESSIBILITY · 08'}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1C1A17]">
              {currentLang === 'ja'
                ? '家を訪ねる。'
                : currentLang === 'ko'
                ? '이곳을 찾아오시는 길.'
                : currentLang === 'zh'
                ? '造访老屋。'
                : 'Find the House.'}
            </h2>
            <p className="text-base sm:text-lg text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
              {currentLang === 'ja'
                ? '伏見稲荷の賑わいから路地を少し曲がると、そこに静かに佇む町家があります。営業時間、交通アクセス、ご予約、お品書き、そしてよくあるご質問。'
                : currentLang === 'ko'
                ? '후시미이나리의 활기찬 길목을 지나 골목 안으로 들어오면 시간의 온기를 품은 고택이 방문객을 맞이합니다. 운영 시간, 오시는 길, 예약, 메뉴 및 자주 묻는 질문.'
                : currentLang === 'zh'
                ? '自伏见稻荷的喧嚣步入静巷，静静伫立着这座百年町家。营业时间、交通指南、席位预约、茶点单及常见问题。'
                : 'A quiet Kyoto machiya nestled a short walk from Fushimi Inari station. Hours, directions, reservations, menu, and house FAQ.'}
            </p>
          </div>

          {/* Sub-item architectural anchors */}
          <div className="flex flex-wrap gap-2 text-xs font-sans-clean">
            <a
              href="#visit-hours"
              className="px-3 py-1.5 rounded-full bg-[#1C1A17]/5 hover:bg-[#1C1A17]/10 text-[#1C1A17] transition-colors"
            >
              {currentLang === 'ja'
                ? '営業時間'
                : currentLang === 'ko'
                ? '운영 시간'
                : currentLang === 'zh'
                ? '营业时间'
                : 'Hours'}
            </a>
            <a
              href="#visit-directions"
              className="px-3 py-1.5 rounded-full bg-[#1C1A17]/5 hover:bg-[#1C1A17]/10 text-[#1C1A17] transition-colors"
            >
              {currentLang === 'ja'
                ? '道順・交通'
                : currentLang === 'ko'
                ? '오시는 길'
                : currentLang === 'zh'
                ? '交通路线'
                : 'Directions'}
            </a>
            <button
              type="button"
              onClick={onOpenReserve}
              className="px-3 py-1.5 rounded-full bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#3E4B39] transition-colors cursor-pointer"
            >
              {currentLang === 'ja'
                ? '茶室予約'
                : currentLang === 'ko'
                ? '예약 신청'
                : currentLang === 'zh'
                ? '茶室预约'
                : 'Reservations'}
            </button>
            <button
              type="button"
              onClick={onOpenMenu}
              className="px-3 py-1.5 rounded-full border border-[#1C1A17]/20 hover:border-[#1C1A17] text-[#1C1A17] transition-colors cursor-pointer"
            >
              {currentLang === 'ja'
                ? 'お品書き'
                : currentLang === 'ko'
                ? '메뉴 전체'
                : currentLang === 'zh'
                ? '茶事单'
                : 'Menu'}
            </button>
            <a
              href="#visit-faq"
              className="px-3 py-1.5 rounded-full bg-[#3E4B39]/10 text-[#3E4B39] hover:bg-[#3E4B39]/20 transition-colors"
            >
              {currentLang === 'ja'
                ? 'よくある質問 (FAQ)'
                : currentLang === 'ko'
                ? '자주 묻는 질문'
                : currentLang === 'zh'
                ? '常见疑问 (FAQ)'
                : 'FAQ'}
            </a>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Location & Directions */}
          <div id="visit-directions" className="lg:col-span-7 space-y-8 scroll-mt-28">
            <div className="p-8 rounded-xl bg-[#EFECE6]/50 border border-[#1C1A17]/10 space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#3E4B39] shrink-0 mt-1" />
                <div className="space-y-1 font-sans-clean">
                  <h3 className="font-editorial text-2xl text-[#1C1A17]">
                    Ie Fushimi — House of Tea
                  </h3>
                  <p className="text-sm text-[#1C1A17]/80">
                    {currentLang === 'ja'
                      ? '京都府京都市伏見区（伏見稲荷駅・稲荷駅 徒歩4分）'
                      : currentLang === 'ko'
                      ? '일본 교토부 교토시 후시미구 (후시미이나리역 및 이나리역 도보 4분)'
                      : currentLang === 'zh'
                      ? '日本京都府京都市伏见区（伏见稻荷站·稻荷站步行4分钟）'
                      : 'Fushimi-ku, Kyoto · 4 min walk from Keihan Fushimi Inari Station'}
                  </p>
                </div>
              </div>

              {/* Transit Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-clean pt-4 border-t border-[#1C1A17]/10">
                <div className="space-y-1">
                  <span className="text-[#1C1A17]/50 uppercase tracking-wider block">
                    {currentLang === 'ja'
                      ? '京阪本線'
                      : currentLang === 'ko'
                      ? '게이한 본선'
                      : currentLang === 'zh'
                      ? '京阪本线'
                      : 'Keihan Main Line'}
                  </span>
                  <p className="text-[#1C1A17] font-medium">
                    {currentLang === 'ja'
                      ? '「伏見稲荷駅」より徒歩4分'
                      : currentLang === 'ko'
                      ? '후시미이나리역 도보 4분'
                      : currentLang === 'zh'
                      ? '“伏见稻荷站”步行4分钟'
                      : 'Fushimi Inari Station (4 min)'}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[#1C1A17]/50 uppercase tracking-wider block">
                    {currentLang === 'ja'
                      ? 'JR奈良線'
                      : currentLang === 'ko'
                      ? 'JR 나라선'
                      : currentLang === 'zh'
                      ? 'JR奈良线'
                      : 'JR Nara Line'}
                  </span>
                  <p className="text-[#1C1A17] font-medium">
                    {currentLang === 'ja'
                      ? '「稲荷駅」より徒歩5分'
                      : currentLang === 'ko'
                      ? '이나리역 도보 5분'
                      : currentLang === 'zh'
                      ? '“稻荷站”步行5分钟'
                      : 'Inari Station (5 min)'}
                  </p>
                </div>
              </div>

              {/* Interactive map badge */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Fushimi+Kyoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs text-[#1C1A17] hover:text-[#3E4B39] font-sans-clean transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#3E4B39]" />
                  <span className="underline underline-offset-4">
                    {currentLang === 'ja'
                      ? 'Google マップで地図を開く'
                      : currentLang === 'ko'
                      ? '구글 맵으로 길찾기'
                      : currentLang === 'zh'
                      ? '在谷歌地图中打开'
                      : 'Open in Google Maps'}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* House Guidelines */}
            <div className="p-6 rounded-lg bg-[#FAF8F5] border border-[#1C1A17]/10 space-y-3 text-xs font-sans-clean">
              <div className="flex items-center space-x-2 text-[#3E4B39]">
                <Info className="w-4 h-4" />
                <span className="font-medium tracking-wide uppercase">
                  {currentLang === 'ja'
                    ? '館内でのお願い'
                    : currentLang === 'ko'
                    ? '공간 이용 안내'
                    : currentLang === 'zh'
                    ? '老屋礼仪'
                    : 'House Etiquette'}
                </span>
              </div>
              <p className="text-[#1C1A17]/75 leading-relaxed font-light">
                {currentLang === 'ja'
                  ? '町家本来の静けさと木の温もりを守るため、足音や話し声をお控えめに。1階のカフェや中庭はご予約不要でいつでもふらりとお越しいただけます。'
                  : currentLang === 'ko'
                  ? '마치야 본연의 고요함과 나무의 숨결을 위해 작은 목소리로 대화를 나누어 주시길 부탁드립니다. 1층 카페와 중정 정원은 예약 없이 언제든 편안히 방문하실 수 있습니다.'
                  : currentLang === 'zh'
                  ? '为守护町家纯粹的静谧与木质温存，请轻声漫步、温和细语。一楼咖啡席与庭园无须预约，随时欢迎入内小憩。'
                  : 'We ask guests to step lightly, speak gently, and allow the quiet cadence of the machiya to remain intact. Downstairs tea and courtyard seating are always walk-in.'}
              </p>
            </div>
          </div>

          {/* Opening Hours & Reservation Card */}
          <div id="visit-hours" className="lg:col-span-5 space-y-6 scroll-mt-28">
            <div className="p-8 rounded-xl bg-[#FAF8F5] border border-[#1C1A17]/15 space-y-6 shadow-xs">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#3E4B39]" />
                <h3 className="font-editorial text-2xl text-[#1C1A17]">
                  {currentLang === 'ja'
                    ? '営業時間'
                    : currentLang === 'ko'
                    ? '운영 시간'
                    : currentLang === 'zh'
                    ? '营业时间'
                    : 'Operating Hours'}
                </h3>
              </div>

              <div className="space-y-3 text-xs font-sans-clean">
                <div className="flex justify-between py-2 border-b border-[#1C1A17]/10">
                  <span className="text-[#1C1A17]/70">
                    {currentLang === 'ja'
                      ? '木曜日 〜 月曜日'
                      : currentLang === 'ko'
                      ? '목요일 — 월요일'
                      : currentLang === 'zh'
                      ? '周四至周一'
                      : 'Thursday — Monday'}
                  </span>
                  <span className="font-medium text-[#1C1A17]">10:00 — 18:00</span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#1C1A17]/10">
                  <span className="text-[#1C1A17]/70">
                    {currentLang === 'ja'
                      ? '定休日'
                      : currentLang === 'ko'
                      ? '정기 휴무'
                      : currentLang === 'zh'
                      ? '定休日'
                      : 'Closed'}
                  </span>
                  <span className="text-[#3E4B39] font-medium">
                    {currentLang === 'ja'
                      ? '火曜日・水曜日'
                      : currentLang === 'ko'
                      ? '매주 화요일 및 수요일'
                      : currentLang === 'zh'
                      ? '每周二、周三'
                      : 'Tuesdays & Wednesdays'}
                  </span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-[#1C1A17]/70">
                    {currentLang === 'ja'
                      ? '2階 茶室セッション'
                      : currentLang === 'ko'
                      ? '2층 다실 가이드 세션'
                      : currentLang === 'zh'
                      ? '二楼茶室品鉴'
                      : 'Upper House Sessions'}
                  </span>
                  <span className="font-medium text-[#1C1A17]">
                    {currentLang === 'ja'
                      ? '事前予約制'
                      : currentLang === 'ko'
                      ? '사전 예약제'
                      : currentLang === 'zh'
                      ? '需提前预约'
                      : 'By Reservation'}
                  </span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  type="button"
                  onClick={onOpenReserve}
                  className="w-full py-3 px-4 bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#3E4B39] rounded-full text-xs font-sans-clean font-medium tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  {currentLang === 'ja'
                    ? '2階 茶室セッションの予約'
                    : currentLang === 'ko'
                    ? '2층 다실 세션 예약 신청'
                    : currentLang === 'zh'
                    ? '预约二楼茶席会'
                    : 'Book a Guided Tea Session'}
                </button>

                <button
                  type="button"
                  onClick={onOpenMenu}
                  className="w-full py-3 px-4 border border-[#1C1A17]/20 hover:border-[#1C1A17] text-[#1C1A17] rounded-full text-xs font-sans-clean tracking-wider transition-colors cursor-pointer"
                >
                  {currentLang === 'ja'
                    ? '茶・菓子の全メニューを見る'
                    : currentLang === 'ko'
                    ? '전체 메뉴 둘러보기'
                    : currentLang === 'zh'
                    ? '查看茶事完整餐单'
                    : 'View Full Menu'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section FAQ: Frequently Asked Questions */}
        <div id="visit-faq" className="pt-8 border-t border-[#1C1A17]/10 space-y-8 scroll-mt-28">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="font-editorial text-3xl text-[#1C1A17] tracking-tight">
              {currentLang === 'ja'
                ? 'よくあるご質問'
                : currentLang === 'ko'
                ? '자주 묻는 질문'
                : currentLang === 'zh'
                ? '常见问题'
                : 'Common Inquiries'}
            </h3>
            <p className="text-xs text-[#1C1A17]/60 font-sans-clean">
              {currentLang === 'ja'
                ? 'ご予約、空間の利用作法、写真撮影、お子様や手荷物について。'
                : currentLang === 'ko'
                ? '예약, 사진 촬영, 어린이 동반 및 수하물에 대한 안내입니다.'
                : currentLang === 'zh'
                ? '关于席位预约、老屋礼仪、摄影准则、儿童随行与行李寄存。'
                : 'Key details regarding reservations, walk-ins, photography, and house etiquette.'}
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-[#1C1A17]/15 bg-[#FAF8F5] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-[#1C1A17]/5 transition-colors gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-sans-clean uppercase tracking-wider text-[#3E4B39]">
                        {faq.category}
                      </span>
                      <h4 className="font-editorial text-lg sm:text-xl text-[#1C1A17] tracking-tight">
                        {getFaqQuestion(faq)}
                      </h4>
                    </div>
                    <div className="p-1 rounded-full text-[#1C1A17]/60 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#1C1A17]/10 text-xs sm:text-sm font-sans-clean text-[#1C1A17]/80 leading-relaxed font-light">
                      <p>{getFaqAnswer(faq)}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

