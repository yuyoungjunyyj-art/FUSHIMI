import { SpaceItem, TeaItem, FinancierItem, ExperienceItem, StoryItem } from '../types';
import { HOUSE_IMAGES } from './imagery';

export const SPACES_DATA: SpaceItem[] = [
  {
    id: 'main-gate',
    number: '01',
    title: {
      en: 'Main Gate & Machiya Facade',
      ja: '表構え — 町家の主門',
      ko: '마치야 전면 — 메인 게이트',
    },
    subtitle: {
      en: 'A Kyoto machiya shaped by timber, tatami, garden, water and light.',
      ja: '木、畳、庭、水、そして光に形づくられた京都の町家。',
      ko: '목재, 다다미, 정원, 물, 그리고 빛이 빚어낸 교토의 오래된 마치야.',
    },
    kicker: {
      en: '01 — FUSHIMI',
      ja: '01 — 伏見',
      ko: '01 — 후시미',
    },
    description: {
      en: 'An old house. A living place. A short walk from Fushimi Inari, Ie occupies a Kyoto machiya restored with architectural clarity. We have kept what the house gives us and introduced what brings it back to life.',
      ja: '古い家。生き続ける場所。伏見稲荷からほど近い静かな街路に佇む「家（Ie）」は、時を重ねた町家の骨格を受け継ぎ、今を生きる場として息を吹き返しました。',
      ko: '오래된 집. 살아 숨 쉬는 공간. 후시미이나리에서 조금 걸어 들어오면, 목재와 기와의 오랜 결을 간직한 마치야가 자리하고 있습니다. 집이 건네는 본연의 아름다움을 남겨두고 새로운 생명력을 더했습니다.',
    },
    extendedDescription: {
      en: 'Begin outside. Fushimi is not a backdrop to Ie; it is the living neighbourhood around it. The exterior has been cleanly refined — preserving the aged roof tiles (kawara) and vertical cedar louvers while letting daylight enter the threshold.',
      ja: '通りから始まる時間。街路の喧騒から一歩踏み入れると、整えられた千本格子と黒瓦の陰影が静かな迎賓の気配を漂わせます。',
      ko: '거리에서 시작되는 여정. 주변의 불필요한 번잡함을 비워내고, 정갈하게 정돈된 격자 목재 루버와 기와 처마, 은은한 내부의 불빛이 방문객을 맞이합니다.',
    },
    imageUrl: HOUSE_IMAGES.mainGateClean.url,
    originalReferenceName: '1. IE FUSHIMI - IE.HOUSE Main Gate',
    cleanedDescription: {
      en: 'Cleaned architectural representation: Overhead cables, utility pole, and street posters removed to showcase the pure, peaceful machiya facade.',
      ja: '電柱や架線、貼り紙などの雑音を丁寧に取り除き、町家本来の端正な木組みと陰影を際立たせた景観。',
      ko: '전신주와 전선, 유리창 스티커 등 불필요한 시각 요소를 정돈하여 전통 마치야 고유의 기와와 목재 루버를 온전히 드러냈습니다.',
    },
    features: [
      {
        en: 'Aged Kyoto Kawara Roof Tiles',
        ja: '歳月を重ねた京瓦の瓦葺き',
        ko: '세월을 품은 전통 교토 기와 지붕',
      },
      {
        en: 'Darkened Cedar Louvers (Koshi)',
        ja: '陰影を生む杉の縦格子',
        ko: '차분한 음영을 드리우는 삼나무 격자 루버',
      },
      {
        en: 'Natural Earthen Threshold (Doma)',
        ja: '通りと内をつなぐ土間の敷居',
        ko: '거리와 내부를 이어주는 흙바닥 토마(Doma)',
      },
    ],
  },
  {
    id: 'first-floor-cafe',
    number: '02',
    title: {
      en: '1st Floor Cafe Area & Tea Counter',
      ja: '1階 カフェ空間と茶台',
      ko: '1층 카페 공간과 티 카운터',
    },
    subtitle: {
      en: 'Where things begin. Tea is brewed. Financiers bake.',
      ja: 'すべてが始まる場所。茶が淹れられ、フィナンシェが焼き上がる。',
      ko: '모든 것이 시작되는 곳. 차가 우려지고, 피낭시에가 구워지는 공간.',
    },
    kicker: {
      en: '02 — TEA COUNTER & TATAMI',
      ja: '02 — 茶台と畳',
      ko: '02 — 티 카운터와 다다미',
    },
    description: {
      en: 'Tea is prepared downstairs. Financiers come warm from the oven. Guests sit on stone plinths topped with fragrant igusa tatami or along the engawa, watching light filter across the tactile earthen walls.',
      ja: '階下で茶を淹れ、香ばしいフィナンシェがオーブンから取り出される。柔らかな光を放つ和紙の提灯、足元を照らす間接光、そして苔を纏った盆栽が佇む畳石台。',
      ko: '1층에서는 정성스럽게 찻잎이 우려지고 오븐에서는 갓 구운 피낭시에의 향기가 피어납니다. 부드러운 은은한 한지 조명 아래, 자연스러운 다다미 석재 좌석과 소나무 분재가 따스한 정취를 자아냅니다.',
    },
    extendedDescription: {
      en: 'There is no grand lobby. You have entered a house. The timber counter is where hojicha is roasted, spices warm, and bottles of Sparkling Gyokuro are opened before your eyes.',
      ja: '華美なロビーはありません。ここは一軒の「家」です。低く腰掛け、ゆっくりと茶を飲み、言葉を交わす、あるいはただ静けさに浸る時間が流れます。',
      ko: '거창한 로비는 없습니다. 그저 오래된 집에 편안히 들어선 느낌입니다. 낮게 걸터앉아 잔잔하게 흐르는 공기와 온기를 느끼며 온전히 차에 집중할 수 있습니다.',
    },
    imageUrl: HOUSE_IMAGES.firstFloorCafe.url,
    originalReferenceName: '2. IE FUSHIMI - IE.HOUSE 1st Floor Cafe Area',
    cleanedDescription: {
      en: 'Enhanced atmospheric mood: Honey-toned timber slats, sculptural spherical washi lantern, floating tatami benches, and living bonsai composition.',
      ja: '温もりのある木調タイル、和紙ペンダントの温光、足元に間接光を配した畳石台と盆栽による静謐な陰影。',
      ko: '목재 타일 벽체와 둥근 한지 조명, 하부 조명이 은은한 다다미 석재 좌대와 소나무 분재가 어우러진 감성적 인테리어.',
    },
    features: [
      {
        en: 'Sculptural Spherical Akari Lantern',
        ja: '空間に浮かぶ和紙の球体照明',
        ko: '공간을 부드럽게 감싸는 구형 한지 조명',
      },
      {
        en: 'Honed Stone Plinths with Igusa Tatami',
        ja: '足元に間接光を宿した畳張りの石台',
        ko: '하부 간접 조명을 품은 다다미 석재 좌석',
      },
      {
        en: 'Living Bonsai Anchor in Moss Bed',
        ja: '苔庭と呼応する盆栽の佇まい',
        ko: '이끼 정원과 교감하는 고고한 분재',
      },
    ],
  },
  {
    id: 'the-garden',
    number: '03',
    title: {
      en: 'THE Garden — A Room Without a Roof',
      ja: '中庭 — 屋根のない部屋',
      ko: '정원 — 지붕 없는 방 (THE Garden)',
    },
    subtitle: {
      en: 'Stone. Moss. Water. One tree marking the season.',
      ja: '石。苔。水。そして季節を刻む一本の樹。',
      ko: '돌. 이끼. 물. 그리고 계절을 알리는 한 그루의 나무.',
    },
    kicker: {
      en: '03 — THE COURTYARD',
      ja: '03 — 中庭',
      ko: '03 — 중정 정원',
    },
    description: {
      en: 'The garden sits at the centre of the house, between its rooms and beneath the open sky. Japanese gardens are often experienced only from their edges; ours invites you to enter, feel stone underfoot, and listen to water moving.',
      ja: '家の中心、部屋と部屋の間に広がる空の下の庭。眺めるだけでなく、踏み入り、足元の石の感触や流れる水の音を間近に感じるための生きた庭です。',
      ko: '정원은 집의 중심에서 하늘을 오롯이 품고 있습니다. 멀리서 바라보기만 하는 정원이 아닌, 직접 걸어 들어가 돌의 촉감을 느끼고 잔잔한 물소리에 귀 기울일 수 있는 공간입니다.',
    },
    extendedDescription: {
      en: 'An immense natural boulder commands the stone courtyard, giving root to a graceful blossoming tree. A linear black stone rill carries clear Fushimi spring water, while daybeds line the engawa for unhurried reverie.',
      ja: '庭の中央には巨石が座し、そこから一本の樹が天へと伸びています。漆黒の石組み水路を澄んだ水が静かに流れ、縁側のベンチに腰掛けて光の移ろいを眺めることができます。',
      ko: '정원 한가운데 거대한 자연석과 그 위에 뻗어난 나무, 맑은 물이 흐르는 석조 수로, 그리고 툇마루(엔가와)의 편안한 데이베드가 계절의 빛과 바람을 전합니다.',
    },
    imageUrl: HOUSE_IMAGES.theGarden.url,
    originalReferenceName: '3. IE FUSHIMI - IE.HOUSE THE Garden',
    cleanedDescription: {
      en: 'Framed courtyard perspective highlighting the monumental center stone, delicate spring blossoms, running water channel, and daybed cushions.',
      ja: '巨石と樹木、黒御影石の水路、そして奥に連なる苔壁が織りなす立体的な庭園風景。',
      ko: '중앙의 웅장한 거석과 계절 나무, 맑게 흐르는 수로와 툇마루 데이베드가 어우러진 고요한 정원.',
    },
    features: [
      {
        en: 'Monumental Natural Granite Boulder',
        ja: '庭の重心となる自然の巨石',
        ko: '정원의 중심을 단단히 잡는 거대한 자연석',
      },
      {
        en: 'Linear Stone Spring Water Rill',
        ja: '伏見の地下水がせせらぐ石造り水路',
        ko: '후시미의 맑은 지하수가 흐르는 석조 수로',
      },
      {
        en: 'Linen Engawa Daybeds Under the Eaves',
        ja: '空と庭に対峙する縁側のデイベッド',
        ko: '처마 아래 정원을 오롯이 마주하는 툇마루 데이베드',
      },
    ],
  },
  {
    id: 'moss-wall',
    number: '04',
    title: {
      en: 'THE MOSS WALL — Living Architectural Relief',
      ja: '苔壁 — 生きている立体壁画',
      ko: '모스 월 — 살아있는 이끼 벽 (MOSS WALL)',
    },
    subtitle: {
      en: 'Deep verdant cushions drinking Kyoto moisture and light.',
      ja: '京都の湿潤な気候と柔らかな光を吸い込む、深い緑の層。',
      ko: '교토의 자연 습도와 은은한 건축 조명을 머금은 깊고 그윽한 초록의 군락.',
    },
    kicker: {
      en: '04 — VERTICAL LANDSCAPE',
      ja: '04 — 垂直の庭',
      ko: '04 — 수직의 풍경',
    },
    description: {
      en: 'Rising against the courtyard interior wall, the Moss Wall forms an imposing, textural living vertical landscape. Kyoto varieties of velvety moss cling in undulating folds alongside delicate mountain ferns and aged wood.',
      ja: '中庭の奥壁一面を覆う苔壁。起伏に富んだ深い緑のクッションが、柔らかなダウンライトに照らされ、しっとりとした湿度と太古の森のような陰影を空間にもたらします。',
      ko: '정원 안쪽 벽면을 가득 채운 모스 월(MOSS WALL)은 마치 교토의 깊은 원시림을 옮겨놓은 듯한 입체감을 선사합니다. 부드러운 이끼와 야생 고사리, 고목이 건축적 빛 속에서 숨 쉽니다.',
    },
    extendedDescription: {
      en: 'Concealed micro-irrigation preserves the velvety emerald pillows of moss without artificial chemicals. As light changes from morning dawn to evening tea sessions, the moss reveals shifting nuances of green and shadow.',
      ja: '伏見の名水による微細な灌水システムが、苔本来の生命力としっとりとした潤いを保ち続けます。時間帯によって光の射す角度が変わり、異なる緑の表情を愉しめます。',
      ko: '후시미의 맑은 수분 공급을 통해 사계절 내내 푸른 생명력을 유지하며, 아침의 햇살부터 저녁의 차 모임까지 시간에 따라 다채로운 녹음의 농담을 보여줍니다.',
    },
    imageUrl: HOUSE_IMAGES.mossWall.url,
    originalReferenceName: '4. IE FUSHIMI - IE.HOUSE MOSS WALL',
    cleanedDescription: {
      en: 'Focus on undulating textures of moss cushions, wild mountain ferns, and architectural spotlight grazing from above.',
      ja: '立体的に重なり合う苔の隆起、繊細なシダの葉、上部からのスポットライトが描く陰影美の表現。',
      ko: '풍성하고 입체적인 이끼 덩어리와 야생 고사리 잎, 상부 스포트라이트가 연출하는 신비로운 녹색 텍스처.',
    },
    features: [
      {
        en: 'Indigenous Kyoto Moss Varieties',
        ja: '京都固有の瑞々しい天然苔',
        ko: '교토의 기후에 맞춘 자생 이끼 군락',
      },
      {
        en: 'Textural Mountain Fern Fronds',
        ja: '陰影に揺れる山生息のシダ植物',
        ko: '그늘 속에서 피어나는 섬세한 야생 양치식물',
      },
      {
        en: 'Architectural Grazing Spotlights',
        ja: '苔の凹凸を際立たせる建築照明',
        ko: '이끼의 입체적 질감을 살려주는 세련된 건축 조명',
      },
    ],
  },
  {
    id: 'second-floor',
    number: '05',
    title: {
      en: 'View of the Second Floor & Upper Machiya',
      ja: '2階の全景 — 静寂の茶室へ',
      ko: '2층 전경 — 차가 깊어지는 다실',
    },
    subtitle: {
      en: 'Upstairs, tea slows down. A slower cadence.',
      ja: '2階へ上がると、茶の時間はさらにゆっくりと流れる。',
      ko: '2층으로 올라가면, 차의 시간은 더욱 깊고 고요해집니다.',
    },
    kicker: {
      en: '05 — UPPER HOUSE',
      ja: '05 — 2階空間',
      ko: '05 — 2층 공간',
    },
    description: {
      en: 'Go deeper. Upstairs is where we hold guided tea tastings, private infusions, and cultural gatherings. The high-angle view looks across weathered kawara tile roofs and down into the verdant courtyard below.',
      ja: '階上では、より深く茶を探求するセッションや学びの時間が開かれます。窓からは、瓦屋根の重なりと階下の中庭に佇む石灯籠や木々の息吹が見渡せます。',
      ko: '계단을 따라 2층으로 오르면 차를 더 깊이 탐구하는 가이드 티 테이스팅과 프라이빗 티 세션이 펼쳐집니다. 창밖으로는 정갈한 기와지붕의 흐름과 중정의 석등, 나무가 한눈에 내려다보입니다.',
    },
    extendedDescription: {
      en: 'As requested, the visual perspective has been thoughtfully cleansed of the former industrial steel deck on the left, restoring the pure machiya roofline and wooden balcony. Note: Detailed interior photographs of the second floor will be revealed in our upcoming seasonal update.',
      ja: '左手に見えていた鉄骨の非常デッキを美しく整理し、町家本来の木製手すりと瓦の連なりが際立つ構図に仕上げました。（※2階の詳細写真は追って公開予定です）',
      ko: '기존 사진 좌측에 보이던 번잡한 철제 데크를 깔끔하게 정돈하여, 고택 본연의 목재 난간과 기와지붕의 고즈넉한 선을 온전히 복원했습니다. (※ 2층의 상세한 인테리어 사진은 곧 추가 공개될 예정입니다).',
    },
    imageUrl: HOUSE_IMAGES.secondFloorView.url,
    originalReferenceName: '5. IE FUSHIMI - IE.HOUSE View of the second floor',
    cleanedDescription: {
      en: 'Cleaned vantage: The left-hand rusted steel bridge has been removed, highlighting the authentic Kyoto roof tiles, timber balustrade, and courtyard stone lantern.',
      ja: '左側の鉄骨デッキを除去し、本来の京町家らしい瓦屋根の重なりと中庭の石灯籠の調和を強調。',
      ko: '좌측의 지저분한 철제 구조물을 깨끗하게 삭제하여 기와지붕과 고풍스러운 목재 발코니, 중정의 석등이 이루는 정취를 정돈했습니다.',
    },
    features: [
      {
        en: 'Overlook Across Courtyard & Stone Lantern',
        ja: '中庭の石灯籠を見下ろす静かな視界',
        ko: '중정의 석등과 정원을 내려다보는 고요한 조망',
      },
      {
        en: 'Restored Machiya Balustrade (Tesuri)',
        ja: '職人の手で修復された木製手すり',
        ko: '장인의 손길로 복원된 고목재 난간',
      },
      {
        en: 'Dedicated Guided Tasting Sanctuary',
        ja: '深遠なる茶の探求のための上階茶室',
        ko: '온전히 차에 몰입할 수 있는 2층 전용 다실',
      },
    ],
  },
];

export const TEAS_DATA: TeaItem[] = [
  {
    id: 'sparkling-gyokuro',
    name: {
      en: 'Sparkling Gyokuro',
      ja: '発泡 玉露',
      ko: '스파클링 옥로 (Sparkling Gyokuro)',
    },
    japaneseName: 'スパークリング玉露',
    type: 'sparkling',
    origin: 'Uji, Kyoto',
    temperature: '4°C Chilled',
    infusions: 1,
    isSignature: true,
    tastingNotes: {
      en: 'Deep sea broth umami, vibrant mineral effervescence, crystalline green melon finish.',
      ja: '凝縮された出汁のような旨味、繊細な炭酸、清涼な青メロンの余韻。',
      ko: '바다의 감칠맛, 청량하고 섬세한 기포, 맑고 투명한 풋멜론의 여운.',
    },
    description: {
      en: 'Gyokuro. With bubbles. The depth and umami of Japanese shaded gyokuro, served with a fine effervescence. Tea. Water. Carbonation. Nothing unnecessary. Made exclusively at Ie Fushimi.',
      ja: '玉露に、泡を。覆下栽培された極上玉露の濃厚な旨味を、微細な炭酸とともに楽しむ新しい体験。茶、水、炭酸。余計なものは一切ない、Ie Fushimiのシグネチャー。',
      ko: '차광 재배한 일본 최고급 교쿠로의 깊은 감칠맛을 섬세한 탄산과 함께 즐기는 시그니처. 오직 찻잎과 맑은 물, 탄산만으로 완성한 정직한 맛.',
    },
    price: '',
  },
  {
    id: 'uji-asahi-gyokuro',
    name: {
      en: 'Uji Asahi Single Cultivar Gyokuro',
      ja: '宇治 あさひ 単一品種 玉露',
      ko: '우지 아사히 단일품종 옥로',
    },
    japaneseName: '宇治玉露 あさひ',
    type: 'gyokuro',
    origin: 'Kyotanabe, Kyoto',
    temperature: '50°C',
    infusions: 3,
    tastingNotes: {
      en: 'Sweet seaweed, toasted kombu, rich velvety broth, long lasting cooling sweetness.',
      ja: '甘い海苔、昆布出汁、とろりとした舌触り、口いっぱいに広がる甘露。',
      ko: '달콤한 해조류의 향, 농밀한 다시마 감칠맛, 입안을 감싸는 실크 같은 단맛.',
    },
    description: {
      en: 'Shaded under reed screens and straw for 28 days. Brewed drop by drop at low temperature with soft Fushimi water.',
      ja: 'よしずと藁で28日間遮光された希少茶。伏見の軟水を用い、低温で一滴ずつ抽出します。',
      ko: '28일간 차광막 아래서 정성껏 기른 찻잎. 부드러운 후시미 지하수로 저온에서 한 방울씩 우려냅니다.',
    },
    price: '',
  },
  {
    id: 'ceremonial-uji-matcha',
    name: {
      en: 'Ceremonial Stone-Ground Uji Matcha',
      ja: '石臼挽き 手摘み 宇治濃茶・薄茶',
      ko: '맷돌 제분 수제 우지 말차',
    },
    japaneseName: '宇治抹茶 手摘み',
    type: 'matcha',
    origin: 'Shirakawa, Uji',
    temperature: '75°C',
    infusions: 1,
    tastingNotes: {
      en: 'Vibrant jade froth, toasted hazelnut, velvety creaminess, zero astringency.',
      ja: '鮮やかな翡翠色の泡立ち、香ばしいナッツ香、クリーミーな深みと柔らかな苦味。',
      ko: '비취색의 고운 거품, 고소한 견과류 풍미, 부드러운 크리미함과 은은한 단맛.',
    },
    description: {
      en: 'Ground slowly on granite millstones. Whisked fresh in handmade Kyoto ceramic chawan bowl.',
      ja: '御影石の石臼で1時間にわずか40gずつ挽かれる極上の抹茶。京都の作家による茶碗で点てられます。',
      ko: '천연 화강암 맷돌로 천천히 제분한 최상급 말차. 교토 도예가의 다완에서 정성껏 격불합니다.',
    },
    price: '',
  },
  {
    id: 'roasted-hojicha-karigane',
    name: {
      en: 'House-Roasted Hojicha Karigane',
      ja: '自家焙煎 雁ヶ音 ほうじ茶',
      ko: '자가 배전 카리가네 호지차',
    },
    japaneseName: '焙じ茶 雁ヶ音',
    type: 'hojicha',
    origin: 'Wazuka, Kyoto',
    temperature: '95°C',
    infusions: 2,
    tastingNotes: {
      en: 'Warm cedar wood, roasted barley, warm caramel, soothing toasted grain comfort.',
      ja: '香ばしい杉の香り、麦焦がし、焦がしキャラメルのような温かな甘み。',
      ko: '따스한 삼나무 향, 구수한 보리와 곡물 향, 은은한 카라멜 여운.',
    },
    description: {
      en: 'Lightly roasted inside the house tea counter throughout the morning, filling the machiya with comforting aroma.',
      ja: '1階の茶台で毎朝丁寧に焙じ上げられ、香ばしい香りが町家全体を包み込みます。',
      ko: '1층 티 카운터에서 매일 아침 직접 볶아내어 매장 가득 구수한 향기를 채웁니다.',
    },
    price: '',
  },
  {
    id: 'cold-brew-mizudashi',
    name: {
      en: 'Cold-Brew Mizudashi Sencha with Yuzu Peel',
      ja: '水出し 煎茶 柚子仕立て',
      ko: '미즈다시 냉침 센차 & 유자',
    },
    japaneseName: '水出し煎茶',
    type: 'sencha',
    origin: 'Wazuka, Kyoto',
    temperature: 'Ice Chilled',
    infusions: 1,
    tastingNotes: {
      en: 'Crisp green apple, fresh cut grass, bright yuzu citrus brightness.',
      ja: '清々しい青林檎、青葉の息吹、ほのかな京都産柚子の芳香。',
      ko: '상큼한 풋사과, 갓 벤 풀내음, 상쾌한 교토 유자의 은은한 시트러스.',
    },
    description: {
      en: 'Steeped for 12 hours in ice-cold Fushimi spring water to extract natural amino acids without tannins.',
      ja: '伏見の清らかな地下水で12時間かけてじっくりと低温抽出し、渋みを抑えた清冽な味わい。',
      ko: '차고 맑은 후시미 지하수에서 12시간 동안 냉침하여 떫은맛 없이 단맛과 향을 극대화했습니다.',
    },
    price: '',
  },
];

export const FINANCIERS_DATA: FinancierItem[] = [
  {
    id: 'classic-beurre-noisette',
    name: {
      en: 'Warm Brown Butter Financier',
      ja: '焦がしバターの焼きたてフィナンシェ',
      ko: '브라운 버터 갓 구운 피낭시에',
    },
    japaneseName: '焦がしバターのフィナンシェ',
    description: {
      en: 'Baked in small batches throughout the day. Brown butter, crisp golden edges, moist soft centre. Served warm in a wooden cone with tea.',
      ja: '1日を通して小さなオーブンで何度も焼き上げられます。焦がし発酵バターの豊かなコクと、外はカリッ、中はしっとりとした焼き立ての温もり。',
      ko: '하루 종일 소량씩 정성껏 구워냅니다. 태운 발효 버터의 깊은 풍미, 바삭한 가장자리와 촉촉하고 따뜻한 속. 우드 콘에 담겨 차와 함께 제공됩니다.',
    },
    pairing: {
      en: 'Pairs perfectly with Sparkling Gyokuro or Hot Uji Sencha',
      ja: '発泡玉露や熱い宇治煎茶との相性が抜群です',
      ko: '스파클링 옥로 또는 따뜻한 우지 센차와 최상의 궁합',
    },
    price: '',
  },
  {
    id: 'roasted-hojicha-financier',
    name: {
      en: 'Roasted Hojicha & Smoked Salt Financier',
      ja: '自家焙煎ほうじ茶と燻製塩のフィナンシェ',
      ko: '자가 배전 호지차 & 훈제 소금 피낭시에',
    },
    japaneseName: 'ほうじ茶フィナンシェ',
    description: {
      en: 'Infused with house-roasted hojicha powder and finished with a crystalline touch of Japanese smoked sea salt.',
      ja: '自家製ほうじ茶の粉末を練り込み、仕上げに海塩の結晶をひと粒添えた香ばしい一品。',
      ko: '직접 볶은 호지차 분말의 구수한 풍미와 훈제 천일염의 짭조름한 조화.',
    },
    pairing: {
      en: 'Pairs with Roasted Hojicha Karigane or Cold Brew',
      ja: '温かい雁ヶ音ほうじ茶と共にお召し上がりください',
      ko: '따뜻한 카리가네 호지차와 함께 즐겨보세요',
    },
    price: '',
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'drink',
    type: 'drink',
    title: {
      en: 'DRINK',
      ja: '茶を愉しむ (DRINK)',
      ko: '가벼운 찻자리 (DRINK)',
    },
    subtitle: {
      en: 'Come for tea. Stay for a financier or the garden.',
      ja: 'ふらりと立ち寄り、茶を一杯。庭やフィナンシェと共に。',
      ko: '언제든 편안하게 들러 차와 갓 구운 피낭시에, 정원을 즐기는 시간.',
    },
    duration: 'Walk-in Welcome (45–60 min)',
    capacity: '1–4 guests per group',
    description: {
      en: 'Drop in without reservation. Enjoy a cup of Sparkling Gyokuro or hot hand-brewed sencha at the counter or tatami plinths, and feel the breeze from the courtyard.',
      ja: 'ご予約なしでお立ち寄りいただけます。1階の茶台や畳ベンチで、季節のお茶や焼きたてフィナンシェを気ままにお楽しみください。',
      ko: '예약 없이 자유롭게 방문할 수 있습니다. 1층 카운터나 다다미 좌석에 앉아 시그니처 차와 정원의 계절감을 음미해보세요.',
    },
    included: [
      {
        en: 'Choice of single-origin tea or sparkling gyokuro',
        ja: '選べる単一品種茶、または発泡玉露',
        ko: '단일 품종 차 또는 스파클링 옥로 1잔 선택',
      },
      {
        en: 'Freshly baked warm brown butter financier',
        ja: '焼きたての焦がしバターフィナンシェ',
        ko: '매일 갓 구운 따뜻한 피낭시에',
      },
      {
        en: 'Open access to garden engawa seating',
        ja: '中庭・縁側ベンチの自由なご利用',
        ko: '중정 정원 및 툇마루 자유 이용',
      },
    ],
    price: '',
  },
  {
    id: 'experience',
    type: 'experience',
    title: {
      en: 'EXPERIENCE',
      ja: '茶の探求 (EXPERIENCE)',
      ko: '티 익스피리언스 (EXPERIENCE)',
    },
    subtitle: {
      en: 'Spend more time with a tea. Guided infusion session.',
      ja: '茶とじっくり向き合う。専門の淹れ手によるご案内。',
      ko: '차와 더 깊이 마주하는 시간. 전문 티 마스터의 가이드 세션.',
    },
    duration: '75 minutes (Reservation required)',
    capacity: 'Limited to 6 guests upstairs',
    description: {
      en: 'Upstairs in the quiet upper machiya, explore leaf, water temperature, aroma, and successive infusions. Contrast shaded gyokuro with wild mountain teas alongside curated seasonal wagashi.',
      ja: '2階の静寂な和室にて。水温、茶葉の開き、香りの変化、そして何煎も重ねることで現れる味のグラデーションを丁寧に紐解きます。',
      ko: '2층의 정갈한 다실에서 찻잎, 물의 온도, 향, 그리고 우림 횟수에 따라 다채롭게 피어나는 맛의 변화를 오롯이 탐구합니다.',
    },
    included: [
      {
        en: 'Four successive infusions of rare reserve Gyokuro & Sencha',
        ja: '極上玉露と煎茶の4段階抽出テイスティング',
        ko: '희귀 옥로 및 센차 4단계 테이스팅',
      },
      {
        en: 'Direct tasting of tender tea leaves with Kyoto citrus ponzu',
        ja: '抽出後の茶葉のお浸し体験',
        ko: '우려낸 부드러운 찻잎을 맛보는 특별한 경험',
      },
      {
        en: 'Exclusive seasonal artisan confectionery (Wagashi)',
        ja: '季節の特製和菓子と焼きたてフィナンシェ',
        ko: '교토 명인의 계절 화과자 및 피낭시에',
      },
    ],
    price: '',
  },
  {
    id: 'learn',
    type: 'learn',
    title: {
      en: 'LEARN',
      ja: '学びと集い (LEARN)',
      ko: '배움과 워크숍 (LEARN)',
    },
    subtitle: {
      en: 'Courses, visiting practitioners, makers, sake, and workshops.',
      ja: '茶人、陶芸家、蔵元を迎えた季節のプログラム。',
      ko: '차 생산자, 공예 작가, 양조장 장인과 함께하는 시즌 프로그램.',
    },
    duration: '90–120 minutes',
    capacity: 'Seasonal schedule',
    description: {
      en: 'Workshops examining Fushimi groundwater minerality, tea roasting over ceramic braziers, sake and tea fermentation, and traditional Kyoto craftsmanship.',
      ja: '伏見の水質探求、自家製ほうじ茶の焙煎体験、京都の工芸作家や酒蔵とのコラボレーションなど、知的好奇心を満たす特別講義。',
      ko: '후시미 지하수 수질 분석, 세라믹 화로를 이용한 호지차 로스팅, 사케와 차 발효 워크숍 등 깊이 있는 문화 교류를 엽니다.',
    },
    included: [
      {
        en: 'Hands-on tea roasting or brewing masterclass',
        ja: '実践的な焙煎または点前マスタークラス',
        ko: '직접 체험하는 호지차 로스팅 및 브루잉 마스터클래스',
      },
      {
        en: 'Take-home freshly roasted tea batch and brew vessel guide',
        ja: '焙じたて茶葉のギフトとお持ち帰り',
        ko: '직접 볶은 찻잎 선물 패키지 제공',
      },
    ],
    price: '',
  },
];

export const STORIES_DATA: StoryItem[] = [
  {
    id: 'water-fushimi',
    number: '01',
    title: {
      en: 'The Water Beneath Fushimi',
      ja: '伏見の地下を流れる水',
      ko: '후시미 지하를 흐르는 물의 이야기',
    },
    subtitle: {
      en: 'The water that has shaped a neighbourhood — and what it means for tea.',
      ja: 'この街を育んできた水、そして茶にとっていかに重要か。',
      ko: '도시를 빚어낸 맑은 물줄기, 그리고 차에 불어넣는 생명력.',
    },
    readingTime: '4 min read',
    excerpt: {
      en: 'Fushimi takes its name from fusu-mizu — "hidden water". Beneath our machiya lies an ancient basin of soft, iron-free water that sake brewers and tea masters have revered for centuries.',
      ja: '「伏見」の名は「伏す水（地下に潜む水）」に由来します。町家の地下深くには、鉄分を含まない清らかな軟水が悠久の時を刻んで流れています。',
      ko: '후시미(伏見)의 이름은 숨겨진 물(伏す水)에서 유래했습니다. 고택 바닥 아래에는 수백 년 동안 사케 양조 장인과 다인들이 사랑해 온 부드럽고 맑은 천연 연수가 흐릅니다.',
    },
    content: {
      en: [
        'Tea is 99% water. The mineral composition dictates how amino acids and polyphenols dissolve from the leaf. Hard water binds tannins, muddling the clarity. In contrast, Fushimi’s celebrated soft water gently coax out sweet theanine and umami compounds.',
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
    },
    imageAlt: 'Fushimi clean spring water over stone basin',
  },
  {
    id: 'why-gyokuro-sea',
    number: '02',
    title: {
      en: 'Why Gyokuro Tastes Like the Sea',
      ja: '玉露が「海の記憶」を宿す理由',
      ko: '교쿠로(옥로)에서 바다의 감칠맛이 느껴지는 이유',
    },
    subtitle: {
      en: 'Shade, amino acids, and the extraordinary savoury character of Japanese shaded tea.',
      ja: '遮光栽培、アミノ酸、そして日本の茶が持つ類まれな旨味の秘密。',
      ko: '차광 재배, 아미노산, 그리고 일본 차가 지닌 경이로운 감칠맛(Umami).',
    },
    readingTime: '5 min read',
    excerpt: {
      en: 'First-time drinkers of high-grade gyokuro are often startled. Instead of grassiness or bitterness, the tongue meets rich dashi broth, kombu sweetness, and sea mist.',
      ja: '初めて極上の玉露を口にした人は、皆一様に驚きます。苦味や渋みではなく、まるで上質なお出汁や昆布のような、濃厚な海の旨味が広がるからです。',
      ko: '최고급 교쿠로를 처음 맛보는 이들은 종종 놀랍니다. 떫은맛 대신 농밀한 다시마 육수, 부드러운 단맛, 바다의 깊은 감칠맛이 혀끝을 감싸기 때문입니다.',
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
    },
    imageAlt: 'Shaded tea leaves glistening with dew',
  },
  {
    id: 'garden-another-room',
    number: '03',
    title: {
      en: 'The Garden as Another Room',
      ja: 'もうひとつの部屋としての庭',
      ko: '또 하나의 방으로서의 정원',
    },
    subtitle: {
      en: 'Why the garden at Ie is made to be entered rather than observed from its edge.',
      ja: '縁側から眺めるだけでなく、身を委ねて足を踏み入れる庭。',
      ko: '경계 너머로 바라보기만 하는 것이 아닌, 직접 걸어 들어가는 정원.',
    },
    readingTime: '4 min read',
    excerpt: {
      en: 'Traditional tsuboniwa courtyard gardens are often visual paintings viewed through shoji frames. At Ie, we treated the garden as an architectural room whose ceiling happens to be the sky.',
      ja: '町家の坪庭は、障子越しに眺める「一枚の絵」として作られることが通例でした。しかしIeでは、庭を「天井が空であるもうひとつの部屋」として設計しました。',
      ko: '전통적인 츠보니와(작은 중정)는 보통 문틈으로 바라보는 그림처럼 꾸며집니다. 하지만 Ie Fushimi의 정원은 하늘을 천장으로 삼은 또 하나의 방으로 설계되었습니다.',
    },
    content: {
      en: [
        'Stepping stones invite you onto the honed gravel. The stone water channel invites touch. The monumental rock offers a place to pause beneath the seasonal cherry canopy, while the living moss wall breathes moisture into the air.',
        'Sitting on the engawa with a warm financier and cold glass of tea, the boundary between interior timber and exterior stone dissolves. The house and the garden become one living entity.',
      ],
      ja: [
        '足元を踏みしめる石の感触、指先で触れる水路の清涼さ、巨石に腰掛けて見上げる一本の樹。そして奥壁の苔が放つ大地の呼吸。',
        '縁側で焼きたてのフィナンシェをかじり、冷たい茶を飲む時、室内の木と屋外の石の境界は溶け合い、家と庭がひとつの呼吸をはじめます。',
      ],
      ko: [
        '단단한 디딤돌을 밟고 들어서면 맑은 수로와 거대한 자연석이 방문객을 맞이합니다. 계절 나무 아래 머물며 살아있는 이끼 벽이 전하는 촉촉한 숨결을 마주할 수 있습니다.',
        '따뜻한 피낭시에와 차 한 잔을 손에 쥐고 툇마루에 앉아 있으면, 실내의 목재와 야외의 석재 사이의 경계가 스르륵 허물어집니다.',
      ],
    },
    imageAlt: 'Courtyard garden engawa and stone water channel',
  },
];
