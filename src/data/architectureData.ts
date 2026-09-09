import { ArchitectureBranch, ThingsItem, GatheringItem, FaqItem } from '../types';

export const SITE_ARCHITECTURE: ArchitectureBranch[] = [
  {
    id: 'home',
    title: 'HOME',
    label: {
      en: 'Home',
      ja: 'ホーム',
      ko: '홈',
    },
  },
  {
    id: 'house',
    title: 'HOUSE',
    label: {
      en: 'The House',
      ja: '町家・空間',
      ko: '고택 공간',
    },
    subItems: [
      {
        id: 'fushimi',
        title: 'Fushimi',
        label: { en: 'Fushimi', ja: '伏見の町', ko: '후시미' },
      },
      {
        id: 'garden',
        title: 'Garden',
        label: { en: 'Garden', ja: '中庭・苔壁', ko: '정원과 이끼벽' },
      },
      {
        id: 'spaces',
        title: 'Spaces',
        label: { en: 'Spaces', ja: '館内構成', ko: '공간별 구성' },
      },
      {
        id: 'our-story',
        title: 'Our Story',
        label: { en: 'Our Story', ja: '再生の物語', ko: '우리의 이야기' },
      },
    ],
  },
  {
    id: 'tea',
    title: 'TEA',
    label: {
      en: 'Tea',
      ja: '日本茶',
      ko: '일본 전통 차',
    },
    subItems: [
      {
        id: 'our-approach',
        title: 'Our Approach',
        label: { en: 'Our Approach', ja: '茶の哲学', ko: '차를 대하는 태도' },
      },
      {
        id: 'gyokuro',
        title: 'Gyokuro',
        label: { en: 'Gyokuro', ja: '玉露', ko: '옥로 (교쿠로)' },
      },
      {
        id: 'matcha',
        title: 'Matcha',
        label: { en: 'Matcha', ja: '抹茶', ko: '말차' },
      },
      {
        id: 'hojicha',
        title: 'Hojicha',
        label: { en: 'Hojicha', ja: '焙じ茶', ko: '호지차' },
      },
      {
        id: 'other-teas',
        title: 'Other Teas',
        label: { en: 'Other Teas', ja: '煎茶・草根木皮', ko: '센차 및 식물차' },
      },
      {
        id: 'sparkling-gyokuro',
        title: 'Sparkling Gyokuro',
        label: { en: 'Sparkling Gyokuro', ja: '発泡玉露', ko: '스파클링 옥로' },
      },
    ],
  },
  {
    id: 'experience',
    title: 'EXPERIENCE',
    label: {
      en: 'Experience',
      ja: '体験',
      ko: '체험 및 세션',
    },
    subItems: [
      {
        id: 'drink-tea',
        title: 'Drink Tea',
        label: { en: 'Drink Tea', ja: '日常の一杯', ko: '차 한 잔' },
      },
      {
        id: 'tea-experience',
        title: 'Tea Experience',
        label: { en: 'Tea Experience', ja: '茶室セッション', ko: '다실 가이드 세션' },
      },
      {
        id: 'garden-experience',
        title: 'Garden',
        label: { en: 'Garden', ja: '庭園での時間', ko: '정원 감상' },
      },
      {
        id: 'seasonal-programme',
        title: 'Seasonal Programme',
        label: { en: 'Seasonal Programme', ja: '季節の催し', ko: '시즌 프로그램' },
      },
      {
        id: 'private-experiences',
        title: 'Private Experiences',
        label: { en: 'Private Experiences', ja: '貸切・個別体験', ko: '프라이빗 세션' },
      },
    ],
  },
  {
    id: 'things',
    title: 'THINGS',
    label: {
      en: 'Things',
      ja: '品々・工芸',
      ko: '공예품과 물건들',
    },
    subItems: [
      {
        id: 'things-tea',
        title: 'Tea',
        label: { en: 'Tea', ja: '茶缶・茶葉', ko: '찻잎 틴' },
      },
      {
        id: 'things-sparkling-tea',
        title: 'Sparkling Tea',
        label: { en: 'Sparkling Tea', ja: '発泡瓶茶', ko: '스파클링 티 바틀' },
      },
      {
        id: 'things-financiers',
        title: 'Financiers',
        label: { en: 'Financiers', ja: '焼菓子・木製包み', ko: '피낭시에 세트' },
      },
      {
        id: 'things-ceramics',
        title: 'Ceramics',
        label: { en: 'Ceramics', ja: '急須・茶器', ko: '교토 도자기 다기' },
      },
      {
        id: 'things-objects',
        title: 'Objects',
        label: { en: 'Objects', ja: '暮らしの道具', ko: '오브제와 도구' },
      },
      {
        id: 'things-gifts',
        title: 'Gifts',
        label: { en: 'Gifts', ja: '贈答品', ko: '기프트 세트' },
      },
    ],
  },
  {
    id: 'stories',
    title: 'STORIES',
    label: {
      en: 'Stories',
      ja: '物語・記録',
      ko: '이야기와 기록',
    },
    subItems: [
      {
        id: 'story-tea',
        title: 'Tea',
        label: { en: 'Tea', ja: '茶の記憶', ko: '차에 관한 글' },
      },
      {
        id: 'story-people',
        title: 'People',
        label: { en: 'People', ja: '人々の眼差し', ko: '만드는 사람들' },
      },
      {
        id: 'story-making',
        title: 'Making',
        label: { en: 'Making', ja: 'つくること', ko: '제작과 장인정신' },
      },
      {
        id: 'story-places',
        title: 'Places',
        label: { en: 'Places', ja: '伏見の風土', ko: '장소와 풍토' },
      },
      {
        id: 'story-seasons',
        title: 'Seasons',
        label: { en: 'Seasons', ja: '二十四節気', ko: '계절의 순환' },
      },
    ],
  },
  {
    id: 'gatherings',
    title: 'GATHERINGS',
    label: {
      en: 'Gatherings',
      ja: '集いと催事',
      ko: '모임과 전시',
    },
    subItems: [
      {
        id: 'whats-on',
        title: "What's On",
        label: { en: "What's On", ja: '開催中の催し', ko: '진행 중인 프로그램' },
      },
      {
        id: 'collaborations',
        title: 'Collaborations',
        label: { en: 'Collaborations', ja: '協働・蔵元・茶人', ko: '협업 프로젝트' },
      },
      {
        id: 'residencies',
        title: 'Residencies',
        label: { en: 'Residencies', ja: '作家レジデンス', ko: '레지던시' },
      },
      {
        id: 'open-call',
        title: 'Open Call',
        label: { en: 'Open Call', ja: '公募・対話', ko: '오픈 콜' },
      },
    ],
  },
  {
    id: 'visit',
    title: 'VISIT',
    label: {
      en: 'Visit',
      ja: 'ご来訪',
      ko: '방문 안내',
    },
    subItems: [
      {
        id: 'visit-hours',
        title: 'Hours',
        label: { en: 'Hours', ja: '営業時間', ko: '운영 시간' },
      },
      {
        id: 'visit-directions',
        title: 'Directions',
        label: { en: 'Directions', ja: '道順・交通', ko: '오시는 길' },
      },
      {
        id: 'visit-reservations',
        title: 'Reservations',
        label: { en: 'Reservations', ja: '茶室予約', ko: '예약 신청' },
      },
      {
        id: 'visit-menu',
        title: 'Menu',
        label: { en: 'Menu', ja: 'お品書き', ko: '메뉴 전체' },
      },
      {
        id: 'visit-faq',
        title: 'FAQ',
        label: { en: 'FAQ', ja: 'よくあるご質問', ko: '자주 묻는 질문' },
      },
    ],
  },
];

export const THINGS_DATA: ThingsItem[] = [
  {
    id: 'tea-uji-gyokuro-tin',
    category: 'tea',
    name: {
      en: 'Kyoto Uji Heritage Gyokuro (50g)',
      ja: '京都宇治 覆下栽培 特選玉露 (50g)',
      ko: '교토 우지 최고급 교쿠로 틴 (50g)',
    },
    japaneseName: '宇治 極上玉露',
    description: {
      en: 'Hand-picked under traditional straw shading screens in Wazuka. Deep sea-broth umami, sweet pine undertones, and prolonged jade clarity.',
      ja: '和束の伝統的な藁覆いの下で手摘みされた特選茶葉。濃厚な出汁のような旨味と、長く続く翡翠の余韻。',
      ko: '와즈카 전통 짚 차광막 아래서 손으로 딴 최상급 옥로. 깊은 감칠맛과 맑은 비취색 수색이 돋보입니다.',
    },
    details: {
      en: 'Origin: Wazuka, Uji · Cultivar: Asahi / Goko · Harvest: First Flush May',
      ja: '産地: 和束町 · 品種: あさひ/ごこう · 収穫: 一番茶 手摘み',
      ko: '원산지: 우지 와즈카 · 품종: 아사히/고코 · 수확: 5월 첫물차',
    },
    price: '',
    materialOrOrigin: 'Uji, Kyoto',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
  {
    id: 'tea-ceremonial-matcha-tin',
    category: 'tea',
    name: {
      en: 'Ceremonial Stone-Ground Matcha (30g)',
      ja: '石臼挽き 宇治抹茶 (30g)',
      ko: '의식용 맷돌 분쇄 우지 말차 (30g)',
    },
    japaneseName: '石臼挽き 宇治抹茶',
    description: {
      en: 'Granite stone ground at 40 grams per hour. Silky micro-foam, velvety texture, and vivid emerald brilliance without bitterness.',
      ja: '花崗岩の石臼で1時間にわずか40gずつ丁寧に挽き上げた逸品。絹のようにきめ細やかな泡立ちと甘み。',
      ko: '화강암 맷돌로 시간당 40g씩 곱게 갈아낸 말차. 실크처럼 고운 거품과 떫지 않은 우아한 단맛.',
    },
    details: {
      en: 'Stone-ground tencha · Single garden Uji · Aluminum-sealed airtight tin',
      ja: '宇治単一碾茶 · 石臼挽き · アルミ気密遮光缶',
      ko: '단일 다원 텐차 · 맷돌 분쇄 · 알루미늄 차광 밀폐 틴',
    },
    price: '',
    materialOrOrigin: 'Shirakawa, Uji',
    imageUrl: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
  {
    id: 'sparkling-tea-bottle-750',
    category: 'sparkling-tea',
    name: {
      en: 'Ie Reserve Sparkling Gyokuro (750ml Bottle)',
      ja: 'Ie 発泡玉露 リザーブボトル (750ml)',
      ko: 'Ie 리저브 스파클링 교쿠로 바틀 (750ml)',
    },
    japaneseName: '瓶詰 発泡玉露',
    description: {
      en: 'The house signature cold-extracted over 18 hours in pure Fushimi aquifer water, carbonated with gentle effervescence and cork-sealed.',
      ja: '伏見の軟水で18時間じっくり水出しした玉露に、微炭酸を溶け込ませた特製ボトル。シャンパングラスで。',
      ko: '후시미 지하수로 18시간 동안 냉침한 옥로에 미세한 탄산을 더한 시그니처 바틀. 샴페인 잔에 차갑게 즐깁니다.',
    },
    details: {
      en: 'Non-alcoholic · Keep refrigerated (4°C) · Champagne cork finish',
      ja: 'ノンアルコール · 要冷蔵 (4℃) · コルク栓',
      ko: '논알코올 · 4°C 냉장 보관 · 코르크 밀봉',
    },
    price: '',
    materialOrOrigin: 'Fushimi, Kyoto',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
  {
    id: 'financiers-cedar-box',
    category: 'financiers',
    name: {
      en: 'Brown Butter Financiers Gift Box (8 pieces)',
      ja: '焦がしバターのフィナンシェ 木箱詰め合わせ (8個入)',
      ko: '브라운 버터 피낭시에 삼나무 선물함 (8구)',
    },
    japaneseName: '焦がしバター フィナンシェ',
    description: {
      en: 'Baked fresh using browned Normandy butter and Spanish Marcona almonds. Packed inside a fragrant Kyoto cedar gift box with vermilion seal.',
      ja: '焦がしバターとマルコナアーモンドの芳醇な香り。京都産杉の木箱に伏見の朱印を捺してお包みします。',
      ko: '헤이즐넛 버터와 고급 아몬드로 갓 구워낸 피낭시에. 교토산 삼나무 상자에 붉은 직인을 날인해 정성껏 포장합니다.',
    },
    details: {
      en: '4 Original Butter + 4 Shaded Gyokuro Green · Best consumed within 5 days',
      ja: 'プレーン焦がしバター 4個 + 宇治抹茶玉露 4個',
      ko: '플레인 브라운 버터 4개 + 옥로 말차 4개',
    },
    price: '',
    materialOrOrigin: 'Baked Daily at Ie',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
  {
    id: 'ceramics-kyoto-kyusu',
    category: 'ceramics',
    name: {
      en: 'Handcrafted Kyoto Ash-Glazed Kyusu Teapot',
      ja: '清水焼 灰釉 宝瓶・急須 (手仕事)',
      ko: '교토 키요미즈야키 천연 재유 다관 (수공예)',
    },
    japaneseName: '京焼 灰釉 急須',
    description: {
      en: 'Fired in a wood kiln in Gojozaka. Organic celadon tones with delicate iron speckling, weighted for effortless single-hand pouring.',
      ja: '京都・五条坂の登り窯で焼成。柔らかな灰釉の青緑と鉄粉の表情。片手で軽やかに注げる重心設計。',
      ko: '교토 장인이 장작 가마에서 소성한 자연 재유 다관. 한 손으로 편안히 쥐고 섬세하게 찻물을 따를 수 있습니다.',
    },
    details: {
      en: 'Capacity: 180ml · Clay ceramic · Built-in ceramic mesh filter',
      ja: '容量: 180ml · 陶器 (陶製茶こし)',
      ko: '용량: 180ml · 도자기 (도자기 일체형 거름망)',
    },
    price: '',
    materialOrOrigin: 'Kyoto Potter T. Morita',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
  {
    id: 'ceramics-yunomi-pair',
    category: 'ceramics',
    name: {
      en: 'Thin-Lip Stone-Clay Yunomi Teacups (Pair)',
      ja: '薄口 炻器 汲出茶碗 (2客組)',
      ko: '극박 도기 찻잔 세트 (2인 1조)',
    },
    japaneseName: '薄口 汲出茶碗',
    description: {
      en: 'Designed specifically to preserve the cold aromatics of sparkling gyokuro and the steam of fresh sencha. Sensual matte raw exterior with glazed lip.',
      ja: '唇に触れた瞬間の温度と香りを純粋に伝える極薄の飲み口。外側は土の質感を残した素焼き。',
      ko: '차의 온기와 향기를 입술에 온전히 전해주는 극박 림 디자인. 외면은 무광 천연 흙의 질감을 살렸습니다.',
    },
    details: {
      en: 'Capacity: 90ml each · Set of 2 in paulownia box',
      ja: '容量: 各90ml · 桐箱入 2客揃え',
      ko: '각 90ml · 오동나무 상자 포함 2개 세트',
    },
    price: '',
    materialOrOrigin: 'Fushimi Clay Kiln',
    imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
  {
    id: 'objects-brass-tea-scoop',
    category: 'objects',
    name: {
      en: 'Hammered Brass Tea Chasaji (Tea Scoop)',
      ja: '手打ち 真鍮 茶匙',
      ko: '수공 단조 황동 차숟가락 (차사지)',
    },
    japaneseName: '手打 真鍮茶匙',
    description: {
      en: 'Hand-hammered from solid brass plate in a small metalwork atelier in Kamigyo. Gently deepens to a golden patina with years of tea service.',
      ja: '京都・上京区の工房で鍛金された真鍮の茶匙。使い込むほどに深い飴色の経年変化を愉しめます。',
      ko: '교토 금속 공방에서 손으로 두드려 빚은 황동 차스쿱. 쓸수록 우아한 고색(Patina)이 깊어집니다.',
    },
    details: {
      en: 'Solid untreated brass · Length 9.5cm · Linen pouch included',
      ja: '無垢真鍮 · 長さ 9.5cm · 麻布袋付',
      ko: '무광 천연 황동 · 길이 9.5cm · 린넨 파우치 포함',
    },
    price: '',
    materialOrOrigin: 'Kyoto Metalcraft',
    imageUrl: 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
  {
    id: 'gifts-fushimi-curated-set',
    category: 'gifts',
    name: {
      en: 'The Ie Fushimi Complete House Gift Set',
      ja: 'Ie Fushimi 桐箱 特撰贈答詰合せ',
      ko: 'Ie Fushimi 오동나무 시그니처 기프트 세트',
    },
    japaneseName: '特撰 桐箱詰合せ',
    description: {
      en: 'A comprehensive collection of our house signatures: Rare Uji Gyokuro Tin, 6 fresh financiers, hammered brass scoop, and handmade Mino washi tea paper.',
      ja: '特選玉露缶、焼きたてフィナンシェ6個、手打ち真鍮茶匙を最高級桐箱に収め、手漉き和紙で結んだ至高の贈り物。',
      ko: '최고급 옥로 틴, 갓 구운 피낭시에 6구, 황동 차사지를 전통 오동나무 상자에 담아 장인이 만든 한지로 감쌌습니다.',
    },
    details: {
      en: 'Paulownia wooden box · Kyoto indigo furoshiki cloth wrapping · House wax seal',
      ja: '高級桐箱 · 京都藍染め風呂敷包み · 封蝋押印',
      ko: '천연 오동나무 함 · 교토 쪽염색 보자기 포장 · 실링 왁스 날인',
    },
    price: '',
    materialOrOrigin: 'Ie Fushimi Curated',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    inStock: true,
  },
];

export const GATHERINGS_DATA: GatheringItem[] = [
  {
    id: 'gathering-uji-first-flush',
    category: 'whats-on',
    title: {
      en: 'First Pluck (Shincha) Tasting & Leaf Comparison',
      ja: '新茶初摘み 飲み比べと茶葉鑑賞会',
      ko: '첫물차(신차) 테이스팅 및 찻잎 비교 시음회',
    },
    subtitle: {
      en: 'Comparing four single cultivars from the 2026 early spring harvest in Wazuka.',
      ja: '和束町の2026年新茶から、単一品種4種の個性を紐解く。',
      ko: '2026년 봄 와즈카 다원에서 갓 수확한 네 가지 단일 품종 신차의 깊은 향미를 탐색합니다.',
    },
    dateOrPeriod: {
      en: 'Saturday & Sunday · 14:00 — 16:00',
      ja: '土曜日・日曜日 14:00 — 16:00',
      ko: '매주 토·일요일 오후 2시 — 4시',
    },
    hostOrCollaborator: {
      en: 'Led by Master Tea Blender K. Shimizu (Uji)',
      ja: '茶師 清水耕平氏 (宇治)',
      ko: '우지 차 블렌더 시미즈 코헤이 진행',
    },
    description: {
      en: 'A sensory seated tasting in the upper machiya. Guests will experience comparative infusions across Goko, Samidori, Yabukita, and Asahi cultivars, served with seasonal wagashi.',
      ja: '2階の静かな茶室で、五香・さみどり・やぶきた・あさひの4品種を温度を変えて丁寧に淹れ分けます。茶葉の形状、香気、水色、そして喉越しの余韻を五感で比較します。',
      ko: '2층 다실에서 고코, 사미도리, 야부키타, 아사히 등 4가지 단일 품종을 각기 다른 온도와 시간으로 추출하여 찻잎의 형태, 향기, 수색을 비교 테이스팅합니다.',
    },
    bulletPoints: [
      {
        en: '4 distinct single-cultivar Shincha flights',
        ja: '4種の単一品種新茶フライト',
        ko: '4가지 단일 품종 신차 테이스팅 코스',
      },
      {
        en: 'Guided water temperature matrix sheet',
        ja: '抽出温度と時間マトリクス表の配布',
        ko: '추출 온도 및 시간 가이드 매트릭스 제공',
      },
      {
        en: 'Seasonal confectionery by Kyoto wagashi master',
        ja: '京都名匠による季節の練り切り和菓子',
        ko: '교토 명장이 빚은 계절 네리키리 화과자 페어링',
      },
    ],
    status: 'upcoming',
    actionLabel: {
      en: 'Reserve Seat',
      ja: '席を予約する',
      ko: '좌석 예약하기',
    },
  },
  {
    id: 'gathering-sake-tea-collab',
    category: 'collaborations',
    title: {
      en: 'The Water of Fushimi: Sake Brewer x Tea House',
      ja: '伏見の水が結ぶ — 酒蔵 × 茶の対話',
      ko: '후시미의 물이 잇는 인연 — 명문 주조장 × 차의 페어링',
    },
    subtitle: {
      en: 'An evening tasting exploring the same subterranean aquifer used for sake brewing and gyokuro.',
      ja: '同じ地下水脈から生まれる清酒と極上茶のペアリング。',
      ko: '동일한 지하 암반수에서 빚어지는 프리미엄 준마이다이긴죠와 옥로의 페어링 나이트.',
    },
    dateOrPeriod: {
      en: 'Last Friday of Every Month · 17:30 — 19:30',
      ja: '毎月最終金曜日 17:30 — 19:30',
      ko: '매월 마지막 주 금요일 저녁 5시 30분',
    },
    hostOrCollaborator: {
      en: 'In Collaboration with Matsumoto Brewery (Fushimi)',
      ja: '松本酒造 × Ie Fushimi 協働',
      ko: '마츠모토 주조장 × Ie Fushimi 공동 기획',
    },
    description: {
      en: 'Fushimi’s brewing history is inseparable from its water. We pair cold unfiltered sake brews with sparkling gyokuro and tea-smoked delicate savoury bites in the courtyard.',
      ja: '伏見の酒造りの歴史は、名水「伏水」とともにあります。中庭の夕暮れの中、未濾過の純米酒と冷製発泡玉露、そして茶葉で燻製した酒肴をお楽しみいただけます。',
      ko: '후시미 양조 역사의 심장인 지하 명수를 테마로, 무여과 순미주와 스파클링 옥로, 찻잎 훈제 핑거푸드를 중정의 해질녘 정취 속에서 함께 즐깁니다.',
    },
    bulletPoints: [
      {
        en: '3 curated sake expressions + 3 tea cold brews',
        ja: '厳選清酒3種 + 冷抽出茶3種ペアリング',
        ko: '엄선된 사케 3종과 콜드브루 티 3종 페어링',
      },
      {
        en: 'Historical commentary on the Fushimi aquifer',
        ja: '伏見水脈と酒・茶の歴史解説',
        ko: '후시미 수맥과 사케·차의 역사에 관한 도슨트',
      },
    ],
    status: 'upcoming',
    actionLabel: {
      en: 'Inquire Evening Guestlist',
      ja: '参加申込',
      ko: '참가 신청',
    },
  },
  {
    id: 'gathering-residency-ceramicist',
    category: 'residencies',
    title: {
      en: 'Artist-in-Residence: Ceramicist in the Upper Machiya',
      ja: '作家滞在制作: 2階茶室での陶芸家レジデンス',
      ko: '아티스트 레지던시: 2층 다실의 도예가 입주 작업',
    },
    subtitle: {
      en: 'A Kyoto ceramicist working with local Fushimi clay and tea-ash glazes.',
      ja: '伏見の土と茶殻の灰釉を用いた茶器の制作と展示。',
      ko: '후시미의 천연 흙과 찻잎 재유를 활용한 다기 제작 및 현장 전시.',
    },
    dateOrPeriod: {
      en: 'Autumn Season (October — November)',
      ja: '秋季滞在 (10月 — 11月)',
      ko: '가을 시즌 (10월 — 11월)',
    },
    hostOrCollaborator: {
      en: 'Resident Potter: M. Inoue (Kyoto Ceramic Studio)',
      ja: '滞在作家: 井上真理氏',
      ko: '레지던트 도예가: 이노우에 마리',
    },
    description: {
      en: 'During the residency, the upper machiya will host open studio days where guests can watch the burnishing and carving of clay teapots, followed by a tea ceremony using the finished vessels.',
      ja: '滞在期間中、町家の2階がオープンスタジオとなり、急須の削りや釉薬掛けの現場を間近でご覧いただけます。制作された茶器でのお茶会も開催予定です。',
      ko: '레지던시 기간 동안 2층 다실이 오픈 스튜디오로 전환되어 다관 성형 및 조각 과정을 참관할 수 있으며, 완성된 기물로 진행하는 특별 다회에 참여할 수 있습니다.',
    },
    bulletPoints: [
      {
        en: 'Open studio walkthrough on selected weekdays',
        ja: '特定平日のオープンスタジオ見学',
        ko: '특정 평일 오픈 스튜디오 견학',
      },
      {
        en: 'Limited release of 20 serialized tea bowls',
        ja: '限定20客のエディション茶碗販売',
        ko: '20점 한정 에디션 다완 특별 판매',
      },
    ],
    status: 'ongoing',
  },
  {
    id: 'gathering-open-call-makers',
    category: 'open-call',
    title: {
      en: 'Open Call: Kyoto Makers, Crafts & Tea Researchers',
      ja: '公募: 工芸作家・茶文化研究者・料理人の皆様へ',
      ko: '오픈 콜: 교토 공예 작가, 차 연구자, 식문화 기획자 공모',
    },
    subtitle: {
      en: 'We invite practitioners working with wood, clay, textiles, stone, and culinary tea.',
      ja: '木、土、布、石、そして食を通じて茶の空間を共に育てる協働者の募集。',
      ko: '나무, 흙, 패브릭, 돌, 그리고 미식을 통해 공간과 차를 새롭게 해석할 협업자를 모십니다.',
    },
    dateOrPeriod: {
      en: 'Submissions accepted year-round',
      ja: '通年募集・随時選考',
      ko: '연중 상시 접수 및 분기별 리뷰',
    },
    hostOrCollaborator: {
      en: 'Curated by IE FUSHIMI Cultural Committee',
      ja: 'IE FUSHIMI 企画室',
      ko: 'IE FUSHIMI 큐레이션 팀',
    },
    description: {
      en: 'Ie is not a closed museum; it is an inhabited machiya that thrives through dialogue. If you are a maker producing objects for tea, an architect studying timber restoration, or a chef exploring tea pairings, our doors are open.',
      ja: 'Ieは閉ざされた空間ではなく、対話によって呼吸を続ける生きた町家です。茶を彩る道具の作り手、伝統木構法の研究者、茶を用いた食の探求者など、志を共にする方々からのご提案を心よりお待ちしております。',
      ko: 'Ie Fushimi는 닫힌 공간이 아닌, 장인과 연구자들의 대화로 숨 쉬는 살아있는 집입니다. 차 도구를 빚는 공예가, 전통 목구조를 연구하는 건축가, 차를 활용한 미식을 실험하는 셰프의 제안을 환영합니다.',
    },
    bulletPoints: [
      {
        en: 'Space grant for approved courtyard or upper house exhibitions',
        ja: '中庭および2階茶室での企画展示スペース無償提供',
        ko: '선정된 프로젝트에 대한 중정 및 다실 전시 공간 지원',
      },
      {
        en: 'Archival documentation and photo publication',
        ja: '公式アーカイブでの記録写真とエッセイの刊行',
        ko: '공식 아카이브 사진 기록 및 에세이 발행 지원',
      },
    ],
    status: 'open',
    actionLabel: {
      en: 'Submit Portfolio / Proposal',
      ja: '提案書・ポートフォリオ提出',
      ko: '제안서 및 포트폴리오 접수',
    },
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-reservations',
    category: 'Reservations & Walk-ins',
    question: {
      en: 'Do I need a reservation to visit the 1st floor cafe or garden?',
      ja: '1階のカフェや中庭の利用に予約は必要ですか？',
      ko: '1층 카페와 중정 정원을 이용할 때 예약이 필요한가요?',
    },
    answer: {
      en: 'No reservation is needed for the ground floor cafe, garden engawa, or financier purchases. You are welcome to walk in during our regular operating hours (Thursday — Monday, 10:00 — 18:00). Reservations are only required for the guided Upper House tea sessions on the second floor.',
      ja: 'いいえ、1階のカフェカウンター、中庭の縁側席、およびフィナンシェのテイクアウトはご予約不要でいつでもふらりとご利用いただけます。2階茶室でのガイド付きテイスティングセッションのみ事前予約制となっております。',
      ko: '아닙니다. 1층 티 카운터, 중정 툇마루 좌석 및 피낭시에 구매는 예약 없이 운영 시간 내(목—월 10:00~18:00) 언제든 자유롭게 방문하실 수 있습니다. 오직 2층 다실에서 진행되는 가이드 테이스팅 세션만 사전 예약제로 운영됩니다.',
    },
  },
  {
    id: 'faq-sparkling-gyokuro',
    category: 'Tea & Food',
    question: {
      en: 'Is the Sparkling Gyokuro alcoholic?',
      ja: '「発泡玉露」にはアルコールが含まれていますか？',
      ko: '스파클링 교쿠로에 알코올이 포함되어 있나요?',
    },
    answer: {
      en: 'No, our Sparkling Gyokuro is 100% non-alcoholic. It is crafted solely from shaded Uji gyokuro tea leaves, pure Fushimi aquifer water, and fine carbonation. It possesses the mouthfeel and elegance of vintage champagne with zero alcohol.',
      ja: '完全なノンアルコールです。使用している原材料は、厳選された宇治の覆下栽培玉露、伏見の清らかな地下水、そしてきめ細かな炭酸のみです。上質なシャンパーニュのような芳醇なコクと泡立ちを安心してお楽しみいただけます。',
      ko: '완전한 0.0% 무알코올 음료입니다. 엄선된 우지 차광 재배 교쿠로 찻잎, 후시미 지하 암반수, 미세한 탄산만을 사용하여 제조됩니다. 빈티지 샴페인 같은 풍미와 우아함을 누구나 즐기실 수 있습니다.',
    },
  },
  {
    id: 'faq-children-pets',
    category: 'House Etiquette',
    question: {
      en: 'Are children and pets welcome in the machiya?',
      ja: '子どもやペットの同伴は可能ですか？',
      ko: '어린이나 반려동물 동반이 가능한가요?',
    },
    answer: {
      en: 'Children who appreciate a gentle, contemplative environment are very welcome downstairs and in the courtyard. Due to historic tatami preservation, fragile antique timber, and stone rills, pets are not permitted inside. We ask all guests to walk lightly and preserve the house’s serene cadence.',
      ja: '静かに過ごしていただけるお子様のご利用は大歓迎です。なお、築年数を経た町家の古材、繊細な畳、および水路保護のため、ペットの同伴はご遠慮いただいております。静謐な空間の維持にご理解をお願い申し上げます。',
      ko: '고요한 공간 분위기를 함께 존중해 주시는 어린이는 1층 및 중정 공간에 편안히 입장할 수 있습니다. 다만 100년 넘은 고택 목재와 다다미, 천연 석조 수로의 보존을 위해 반려동물 동반은 제한됩니다.',
    },
  },
  {
    id: 'faq-photography',
    category: 'Photography',
    question: {
      en: 'Can I take photographs inside the house and garden?',
      ja: '館内や庭園の写真撮影は可能ですか？',
      ko: '실내와 정원에서 사진 촬영이 가능한가요?',
    },
    answer: {
      en: 'Personal photography of your tea, the architecture, and the garden is warmly welcome. To respect the sanctuary of our guests, commercial photography, tripods, model shoots, and flash are strictly prohibited without prior written permission from the house.',
      ja: 'ご自身の手元、ご注文いただいたお茶やお菓子、建築や庭園の静かなスナップ撮影はご自由にどうぞ。他のお客様のプライバシー保護のため、三脚やフラッシュの使用、商業目的の撮影、長時間の専유はご遠慮いただいております。',
      ko: '주문하신 차와 디저트, 고택의 디테일과 정원의 개인적 스냅 촬영은 환영합니다. 다른 손님들의 휴식을 방해하지 않도록 플래시나 삼각대 사용, 상업용 촬영 및 과도한 포즈 촬영은 엄격히 제한됩니다.',
    },
  },
  {
    id: 'faq-access-luggage',
    category: 'Access & Amenities',
    question: {
      en: 'Is there luggage storage and wheelchair access?',
      ja: '荷物の預かりや車椅子の利用について教えてください。',
      ko: '수하물 보관 및 휠체어 이용이 가능한가요?',
    },
    answer: {
      en: 'We have a discreet luggage nook on the ground floor for daypacks and small carry-on suitcases. As a historic traditional machiya with raised timber thresholds and stone stepping paths, the ground floor has small steps, and the second floor is accessed via a steep traditional timber stairway.',
      ja: '1階の土間スペースにて、小型のキャリーケースやお荷物を一時的にお預かり可能です。なお、伝統的な町家の構造上、敷居や庭の飛石に段差があり、2階へは急な木製階段となりますことをあらかじめご了承ください。',
      ko: '1층 토마 구역에 여행용 소형 캐리어와 짐을 보관할 수 있는 공간이 마련되어 있습니다. 전통 마치야 고택 구조상 실내와 정원에 약간의 단차가 있으며, 2층은 전통 원목 계단으로 연결되어 있습니다.',
    },
  },
];
