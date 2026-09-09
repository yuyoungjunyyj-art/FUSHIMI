import React, { useState } from 'react';
import { BookOpen, ArrowRight, ChevronDown, ChevronUp, Feather } from 'lucide-react';
import { Language } from '../types';

interface SectionStoriesProps {
  currentLang: Language;
}

interface ArchitecturalStory {
  id: string;
  category: 'story-tea' | 'story-people' | 'story-making' | 'story-places' | 'story-seasons';
  categoryLabel: string;
  number: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  readingTime: string;
  excerpt: Record<Language, string>;
  content: Record<Language, string[]>;
}

export const SectionStories: React.FC<SectionStoriesProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedStoryId, setExpandedStoryId] = useState<string | null>('places-water');

  const storyBranches = [
    { key: 'all', labelEn: 'All Stories', labelJa: 'すべての記録', labelKo: '전체 이야기', labelZh: '全部志记' },
    { key: 'story-tea', labelEn: 'Tea', labelJa: '茶の記憶', labelKo: '차에 관한 글', labelZh: '茶之记忆' },
    { key: 'story-people', labelEn: 'People', labelJa: '人々の眼差し', labelKo: '만드는 사람들', labelZh: '匠人凝望' },
    { key: 'story-making', labelEn: 'Making', labelJa: 'つくること', labelKo: '제작과 장인정신', labelZh: '手作工艺' },
    { key: 'story-places', labelEn: 'Places', labelJa: '伏見の風土', labelKo: '장소와 풍토', labelZh: '伏见水土' },
    { key: 'story-seasons', labelEn: 'Seasons', labelJa: '二十四節気', labelKo: '계절의 순환', labelZh: '二十四节气' },
  ];

  const stories: ArchitecturalStory[] = [
    {
      id: 'tea-gyokuro-sea',
      category: 'story-tea',
      categoryLabel: '01 · TEA',
      number: '01',
      title: {
        en: 'Why Gyokuro Tastes Like the Sea',
        ja: '玉露が「海の記憶」を宿す理由',
        ko: '교쿠로(옥로)에서 바다의 감칠맛이 느껴지는 이유',
        zh: '为何玉露蕴含大海般的鲜甜？',
      },
      subtitle: {
        en: 'Shade, amino acids, and the extraordinary savoury character of Japanese shaded tea.',
        ja: '遮光栽培、アミノ酸、そして日本の茶が持つ類まれな旨味の秘密。',
        ko: '차광 재배, 아미노산, 그리고 일본 차가 지닌 경이로운 감칠맛(Umami).',
        zh: '覆光遮阳栽培、氨基酸与日本覆光茶惊艳的醇厚鲜味。',
      },
      readingTime: '5 min read',
      excerpt: {
        en: 'First-time drinkers of high-grade gyokuro are often startled. Instead of grassiness or bitterness, the tongue meets rich dashi broth, kombu sweetness, and sea mist.',
        ja: '初めて極上の玉露を口にした人は、皆一様に驚きます。苦味や渋みではなく、まるで上質なお出汁や昆布のような、濃厚な海の旨味が広がるからです。',
        ko: '최고급 교쿠로를 처음 맛보는 이들은 종종 놀랍니다. 떫은맛 대신 농밀한 다시마 육수, 부드러운 단맛, 바다의 깊은 감칠맛이 혀끝을 감싸기 때문입니다.',
        zh: '初次品尝顶级玉露的人常会深感震撼。舌尖感触到的不是草本的涩意，而是宛若上乘高汤、昆布回甘与海风气息般交融的醇厚鲜味。',
      },
      content: {
        en: [
          'For nearly a month before harvest, tea bushes in Uji are cloaked under thick straw screens (honzu). Denied sunlight, the plant ceases converting L-theanine into bitter catechins. The amino acids concentrate inside the deep green leaves.',
          'When brewed at 45–50°C, the result is pure savory bliss. In our Signature Sparkling Gyokuro, this umami is lifted by micro-carbonation, creating an exhilarating dance between rich broth and champagne-like crispness.',
        ],
        ja: [
          '収穫前の約1ヶ月間、茶畑は黒い覆いや伝統的な藁で覆われます。日光を遮られた茶樹は、甘味成分であるテアニンを苦味成分であるカテキンに変えるのを止め、葉の中に旨味を濃縮させます。',
          'これを50度前後の低温でゆっくりと抽出すると、極上の旨味が生まれます。「発泡玉露」では、この濃厚な出汁のような味わいを炭酸の気泡が軽やかに昇華させ、未体験の爽快感をもたらします。',
        ],
        ko: [
          '수확 전 약 한 달 동안, 찻잎은 햇빛을 차단하는 전통 차광막 아래서 자랍니다. 햇빛이 차단되면 찻잎은 아미노산(테아닌)을 떫은 카테킨으로 변환하지 못하고 잎 속에 풍부한 감칠맛을 축적합니다.',
          '저온에서 방울방울 우려내면 마법 같은 맛이 탄생합니다. Ie의 스파클링 교쿠로는 이 농후한 감칠맛에 미세한 탄산을 더해, 샴페인처럼 경쾌하면서도 묵직한 깊이를 느끼게 합니다.',
        ],
        zh: [
          '采摘前近一个月，宇治的茶树会被厚重的本遮（传统稻草席）或遮光网覆盖。被阻隔阳光的茶树停止将茶氨酸转化为苦涩的儿茶素，将丰盈的鲜美氨基酸紧紧锁在墨绿叶片之中。',
          '当以45–50°C的温润低温缓缓唤醒时，纯粹的高汤般旨味便在口中绽放。而在我们的招牌“气泡玉露”中，细密的微气泡将浓郁鲜韵轻盈扬起，在似鲜醇高汤与如香槟微漾间灵动回旋。',
        ],
      },
    },
    {
      id: 'people-tea-farmer',
      category: 'story-people',
      categoryLabel: '02 · PEOPLE',
      number: '02',
      title: {
        en: 'The Fourth-Generation Tea Farmer in Wazuka',
        ja: '和束の谷で茶を継ぐ四代目の眼差し',
        ko: '와즈카 골짜기에서 차를 잇는 4대 농부의 손길',
        zh: '和束茶谷第四代茶农的凝眸',
      },
      subtitle: {
        en: 'Walking the mountain slopes where mist lingers between morning and noon.',
        ja: '朝霧が山肌を抱く急斜面で、土と樹と対話する日々。',
        ko: '아침 안개가 산비탈을 감싸 안는 급경사지에서, 흙과 나무와 대화하는 나날.',
        zh: '在晨雾萦绕的山谷斜坡上，日复一日倾听泥土与茶树的低语。',
      },
      readingTime: '4 min read',
      excerpt: {
        en: 'Wazuka produces over forty percent of Kyoto’s Uji tea. High elevation, extreme day-to-night temperature shifts, and persistent morning fogs shelter the leaves from scorch.',
        ja: '京都・宇治茶の4割以上を産出する和束町。山深い冷涼な気候と、朝夕の激しい寒暖差が、肉厚で香気豊かな茶葉を育みます。',
        ko: '교토 우지 차의 40% 이상을 수확하는 와즈카. 깊은 산세의 서늘한 기후와 일교차, 짙은 아침 안개가 찻잎을 부드럽고 향기롭게 감싸줍니다.',
        zh: '出产京都宇治茶四成以上的和束町，拥有高海拔、悬殊昼夜温差与萦绕的朝雾，天然庇护着柔嫩鲜叶免受焦灼。',
      },
      content: {
        en: [
          '“We do not force the tea,” Shimizu-san explains as he crumbles organic compost between his fingers. “A tea bush requires seven years before the first commercial pluck. You are tasting the memory of seven winters.”',
          'At Ie, we source directly from single small family plots. We know which corner of the slope received the morning dew, and we preserve that provenance in every steep.',
        ],
        ja: [
          '「茶の樹を無理やり急かすことはできません」と清水さんは笑います。「植樹から最初の茶摘みまで7年。茶を飲むということは、7度の冬を越えた樹の記憶をいただくことなのです」。',
          'Ie Fushimiでは、特定の区画で丁寧に育てられた単一農家の茶葉のみを直接仕入れています。谷のどの斜面で朝露を受けた茶葉なのか、その土地の物語を一杯に込めてお届けします。',
        ],
        ko: [
          '“우리는 차나무를 재촉하지 않습니다.” 4대 농부 시미즈 씨가 흙을 어루만지며 말합니다. “묘목을 심고 첫 찻잎을 따기까지 7년이 걸립니다. 차 한 잔을 마신다는 것은 일곱 번의 겨울을 견뎌낸 나무의 기억을 음미하는 일입니다.”',
          'Ie Fushimi는 단일 다원의 작은 구획에서 난 찻잎만을 직거래합니다. 어느 비탈에서 아침 이슬을 머금었는지 그 고유한 테루아를 찻잔에 고스란히 담아냅니다.',
        ],
        zh: [
          '“我们从不催逼茶树生长。”清水先生一边捻碎指尖的有机土壤一边说道，“从栽种到第一次采摘需要漫长七年。当您饮下一盏茶，品尝的是那棵树熬过七度严冬的记忆。”',
          '在Ie Fushimi，我们直接采办自家族单品小茶园。我们熟知哪一处山坡披拂了晨露，并将这份风土的印记完好呈现在每一泡茶汤之中。',
        ],
      },
    },
    {
      id: 'making-slow-roasting',
      category: 'story-making',
      categoryLabel: '03 · MAKING',
      number: '03',
      title: {
        en: 'Slow Roasting Hojicha on a Cold Morning',
        ja: '冬の朝、素焼きの焙烙で茶を炒る音',
        ko: '차가운 아침, 세라믹 호로쿠로 찻잎을 볶는 온기',
        zh: '清寒晨光中以陶质焙烙细炒香茶',
      },
      subtitle: {
        en: 'Why freshly roasted tea is an architectural scent that awakens the house.',
        ja: '焙じたての香気は、町家を目覚めさせる建築的な呼吸。',
        ko: '갓 볶아낸 차의 향기는 고택을 깨우는 공간의 숨결.',
        zh: '现焙烘茶之香，是唤醒古雅町家的空间呼吸。',
      },
      readingTime: '3 min read',
      excerpt: {
        en: 'Before the doors open at ten, the earthen cafe downstairs fills with toasted malt, caramel, and smoky hazelnut. It is the ritual of the ceramic horoku.',
        ja: '午前10時の開門前、1階の土間は香ばしい麦芽やキャラメル、ヘーゼルナッツのような温かい香気に包まれます。素焼きの器「焙烙」で茶葉を炒る日課です。',
        ko: '오전 10시 문이 열리기 전, 1층 토마 공간은 구수한 몰트와 캐러멜, 은은한 견과류 향으로 가득 찹니다. 세라믹 호로쿠(焙烙)로 찻잎을 천천히 볶아내는 아침의 의식입니다.',
        zh: '在上午十点开门之前，一楼土间里便已盈溢着烤麦芽、焦糖与坚果木炭般的暖香——那是陶焙焙烙每日晨起的炒茶仪式。',
      },
      content: {
        en: [
          'High temperature releases pyrazines while driving out lingering moisture and astringency. The green leaves turn rich chestnut brown within ninety seconds, dancing over open flame.',
          'Paired with our warm brown butter financiers straight from the oven, the roasted aromatics interlock with browned dairy solids, creating an irreplaceable comfort on a Kyoto morning.',
        ],
        ja: [
          '強火で素早く火を通すことでピラジンが生まれ、渋みが抜けて芳醇な香ばしさが立ち上がります。わずか90秒で、緑の葉は美しい栗色へと姿を変えます。',
          '焼き上がったばかりの焦がしバターフィナンシェと合わせると、焙じ茶の香気とバターのコクが溶け合い、唯一無二の朝のやすらぎをもたらします。',
        ],
        ko: [
          '높은 열이 피라진 성분을 깨우며 떫은맛을 날려 보냅니다. 90초 만에 푸른 찻잎은 윤기 나는 밤색으로 물들며 은은한 향을 뿜어냅니다.',
          '오븐에서 갓 꺼낸 따뜻한 브라운 버터 피낭시에와 함께 곁들이면, 볶은 차의 구수한 향미와 버터의 진한 풍미가 어우러져 교토 아침의 특별한 안식을 선물합니다.',
        ],
        zh: [
          '高温激发出吡嗪芳香，同时挥发散落的湿气与涩味。九十秒之内，青绿的叶片在炭火轻摇下蜕变为温润栗褐色。',
          '伴着烤炉中初出的焦化黄油费南雪，焙火茶香与黄油焦香在唇齿间缱绻交融，织就京都清晨无法取代的治愈暖意。',
        ],
      },
    },
    {
      id: 'places-water',
      category: 'story-places',
      categoryLabel: '04 · PLACES',
      number: '04',
      title: {
        en: 'The Water Beneath Fushimi',
        ja: '伏見の地下を流れる水脈の記憶',
        ko: '후시미 지하를 흐르는 물의 이야기',
        zh: '伏流于伏见地下的清冽水脉',
      },
      subtitle: {
        en: 'The soft subterranean aquifer that has shaped sake breweries and tea masters.',
        ja: '酒蔵と茶人を育ててきた、伏見の清らかな軟水。',
        ko: '수백 년 동안 양조장과 다인을 키워낸 맑은 연수의 수맥.',
        zh: '滋养了数百年名酿酒造与一代代茶人的甘澈软水。',
      },
      readingTime: '4 min read',
      excerpt: {
        en: 'Fushimi takes its name from fusu-mizu — "hidden water". Beneath our machiya lies an ancient basin of soft, iron-free water that gives our tea uncanny silkiness.',
        ja: '「伏見」の名は「伏す水（地下に潜む水）」に由来します。町家の地下深くには、鉄分を含まない清らかな軟水が悠久の時を刻んで流れています。',
        ko: '후시미(伏見)의 이름은 숨겨진 물(伏す水)에서 유래했습니다. 고택 바닥 아래에는 수백 년 동안 사랑받아 온 부드럽고 맑은 천연 연수가 흐릅니다.',
        zh: '“伏见”之名，源自“潜伏之清泉”。在百年町家之下，深藏着不含铁质的古老极软水脉，赋予茶汤不可思议的绢丝般柔顺。',
      },
      content: {
        en: [
          'Tea is 99% water. The mineral composition dictates how amino acids and polyphenols dissolve from the leaf. Hard water binds tannins, muddling clarity. In contrast, Fushimi’s celebrated soft water gently coaxes out sweet theanine and umami compounds.',
          'At Ie, every drop used for brewing our single-origin gyokuro and sparkling infusions is drawn fresh from the Fushimi aquifer. It gives the tea an uncanny silkiness, clean finish, and crystalline resonance that cannot be replicated elsewhere.',
        ],
        ja: [
          '茶の99%は水です。どのような水で抽出するかによって、アミノ酸やカテキンの溶け出し方は劇的に変わります。硬水では苦渋味が強調されてしまいますが、伏見の軟水は茶葉が秘めた純粋な旨味と甘露を静かに引き出します。',
          'Ie Fushimiで淹れるすべての茶、そして発泡玉露は、この伏見の伏流水を用いています。口に含んだ瞬間に広がるシルクのような舌触りは、この土地の恵みそのものです。',
        ],
        ko: [
          '차의 99%는 물입니다. 미네랄의 성분에 따라 찻잎의 아미노산과 감칠맛이 어떻게 우러나는지가 결정됩니다. 후시미의 부드러운 연수는 교쿠로 본연의 테아닌과 깊은 바다향 같은 감칠맛을 부드럽게 이끌어냅니다.',
          'Ie의 모든 단일 품종 차와 스파클링 옥로는 후시미 지하 암반수를 사용합니다. 다른 어디에서도 모방할 수 없는 투명하고 부드러운 질감과 긴 여운을 선사합니다.',
        ],
        zh: [
          '茶的百分之九十九皆是水。矿物质的微妙平衡决定着氨基酸与茶多酚如何从叶片中析出。硬水易束缚单宁造成混浊，而伏见盛名的极软水，能温厚无声地引出清甜茶氨酸与回甘。',
          '在Ie Fushimi，每一滴冲泡单品玉露与气泡茶的水，皆汲取自伏见古水脉。它赋予茶汤无以复刻的绢丝感、清朗回韵与晶莹共鸣。',
        ],
      },
    },
    {
      id: 'seasons-garden-room',
      category: 'story-seasons',
      categoryLabel: '05 · SEASONS',
      number: '05',
      title: {
        en: 'The Garden as Another Room & Twenty-Four Solars',
        ja: 'もうひとつの部屋としての庭と二十四節気',
        ko: '또 하나의 방으로서의 정원과 24절기의 순환',
        zh: '作为另一处室的中庭与二十四节气',
      },
      subtitle: {
        en: 'Why the courtyard at Ie changes its light, moisture, and sound every two weeks.',
        ja: '2週間ごとに光と湿度と水音が表情を変える、生きた中庭。',
        ko: '2주마다 빛과 습도, 물소리가 결을 바꾸는 살아있는 중정 정원.',
        zh: '为何Ie的中庭每隔两周，光影、湿度与清音便换新容颜。',
      },
      readingTime: '4 min read',
      excerpt: {
        en: 'Traditional tsuboniwa courtyard gardens are often visual paintings viewed through shoji frames. At Ie, we treated the garden as an architectural room whose ceiling happens to be the sky.',
        ja: '町家の坪庭は、障子越しに眺める「一枚の絵」として作られることが通例でした。しかしIeでは、庭を「天井が空であるもうひとつの部屋」として設計しました。',
        ko: '전통적인 츠보니와는 문틈으로 바라보는 그림처럼 꾸며집니다. 하지만 Ie Fushimi의 정원은 하늘을 천장으로 삼은 또 하나의 방으로 설계되었습니다.',
        zh: '传统町家坪庭往往是隔着障子远眺的画卷。而在Ie，我们将中庭筑造为一间建筑之室——只不过它的天顶，恰好是青空。',
      },
      content: {
        en: [
          'Stepping stones invite you onto the honed gravel. The stone water channel invites touch. The monumental rock offers a place to pause beneath the seasonal cherry canopy, while the living moss wall breathes moisture into the air.',
          'Sitting on the engawa with a warm financier and cold glass of tea, the boundary between interior timber and exterior stone dissolves. The house and the garden become one living entity across Japan’s micro-seasons.',
        ],
        ja: [
          '足元を踏みしめる石の感触、指先で触れる水路の清涼さ、巨石に腰掛けて見上げる一本の樹。そして奥壁の苔が放つ大地の呼吸。',
          '縁側で焼きたてのフィナンシェをかじり、冷たい茶を飲む時、室内の木と屋外の石の境界は溶け合い、家と庭が二十四節気の巡りと共に呼吸をはじめます。',
        ],
        ko: [
          '단단한 디딤돌을 밟고 들어서면 맑은 수로와 거대한 자연석이 방문객을 맞이합니다. 계절 나무 아래 머물며 살아있는 이끼 벽이 전하는 촉촉한 숨결을 마주할 수 있습니다.',
          '따뜻한 피낭시에와 차 한 잔을 손에 쥐고 툇마루에 앉아 있으면, 실내의 목재와 야외의 석재 사이의 경계가 스르륵 허물어지며 24절기의 계절감을 온전히 호흡하게 됩니다.',
        ],
        zh: [
          '天然石汀步迎您步入细砂石庭。清澈石水渠可触可感。巨石坐榻在时令樱树下供人憩息，垂直生长的苔壁向虚空吞吐温润水汽。',
          '端坐于木质檐廊上，手握一枚温热的费南雪与一杯冰茶，室内梁木与室外原石的边界悄然消融。整座宅邸与庭园，在二十四节气的流转中同频呼吸。',
        ],
      },
    },
  ];

  const filteredStories =
    activeTab === 'all'
      ? stories
      : stories.filter((s) => s.category === activeTab);

  const toggleStory = (id: string) => {
    setExpandedStoryId(expandedStoryId === id ? null : id);
  };

  return (
    <section id="stories" className="py-24 px-6 sm:px-12 bg-[#FAF8F5] border-t border-[#1C1A17]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
              {currentLang === 'ja'
                ? '随筆と記録 · 07'
                : currentLang === 'ko'
                ? '에세이와 기록들 · 07'
                : currentLang === 'zh'
                ? '宅邸随笔 · 07'
                : 'ESSAYS & PERSPECTIVES · 07'}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1C1A17]">
              {currentLang === 'ja'
                ? 'この家に息づく物語。'
                : currentLang === 'ko'
                ? '이 집에서 피어난 이야기들.'
                : currentLang === 'zh'
                ? '老屋岁时志。'
                : 'Stories from the House.'}
            </h2>
            <p className="text-base sm:text-lg text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
              {currentLang === 'ja'
                ? '茶、人、制作、場所、そして季節の巡り。伏見の水、茶葉が抱く海の記憶、職人の手仕事についての随筆と記録。'
                : currentLang === 'ko'
                ? '차, 사람, 제작, 장소, 그리고 계절의 순환. 후시미의 지하수, 교쿠로가 품은 바다의 감칠맛, 장인의 손길에 관한 기록들.'
                : currentLang === 'zh'
                ? '茶、人、器物手作、风土与二十四节气。记录伏见古水脉、覆光茶之鲜甜及京都匠作记忆。'
                : 'Tea, People, Making, Places, and Seasons. Essays on groundwater, shaded tea leaves, makers, and Kyoto time.'}
            </p>
          </div>

          {/* 5 Sub-branch filters from Website Architecture */}
          <div className="flex flex-wrap gap-1.5 text-xs font-sans-clean">
            {storyBranches.map((branch) => (
              <button
                key={branch.key}
                type="button"
                onClick={() => setActiveTab(branch.key)}
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

        {/* Story List */}
        <div className="space-y-6">
          {filteredStories.map((story) => {
            const isExpanded = expandedStoryId === story.id;
            return (
              <div
                key={story.id}
                className="p-8 sm:p-10 rounded-xl bg-[#FAF8F5] border border-[#1C1A17]/15 hover:border-[#1C1A17]/35 transition-all shadow-[0_8px_24px_-8px_rgba(28,26,23,0.06)]"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] uppercase tracking-widest text-[#3E4B39] font-sans-clean font-medium px-2 py-0.5 rounded-sm bg-[#3E4B39]/10">
                        {story.categoryLabel}
                      </span>
                      <span className="text-xs text-[#1C1A17]/40">·</span>
                      <span className="text-xs text-[#1C1A17]/50 font-sans-clean">
                        {story.readingTime}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#1C1A17] tracking-tight">
                      {story.title[currentLang] || story.title.en}
                    </h3>
                    <p className="font-editorial text-base italic text-[#1C1A17]/70">
                      {story.subtitle[currentLang] || story.subtitle.en}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleStory(story.id)}
                    className="inline-flex items-center space-x-2 text-xs text-[#1C1A17] border border-[#1C1A17]/20 hover:border-[#1C1A17] px-4 py-2 rounded-full font-sans-clean transition-colors self-start md:self-auto shrink-0 cursor-pointer"
                  >
                    <span>
                      {isExpanded
                        ? currentLang === 'ja'
                          ? '閉じる'
                          : currentLang === 'ko'
                          ? '접기'
                          : currentLang === 'zh'
                          ? '收起'
                          : 'Close'
                        : currentLang === 'ja'
                        ? 'エッセイを読む'
                        : currentLang === 'ko'
                        ? '전문 읽기'
                        : currentLang === 'zh'
                        ? '阅读志记'
                        : 'Read Story'}
                    </span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Excerpt */}
                <p className="mt-4 text-sm font-sans-clean text-[#1C1A17]/75 font-light leading-relaxed max-w-3xl">
                  {story.excerpt[currentLang] || story.excerpt.en}
                </p>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="mt-8 pt-6 border-t border-[#1C1A17]/10 space-y-4 max-w-3xl font-sans-clean text-sm sm:text-base text-[#1C1A17]/85 font-light leading-relaxed animate-fade-in">
                    {(story.content[currentLang] || story.content.en).map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

