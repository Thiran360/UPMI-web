export const TOURNAMENTS = [
  {
    id: "tourney-1",
    title: "BGMI Ultimate Showdown 2026",
    subtitle: "Official Krafton Licensed Community Championship",
    game: "BGMI",
    gameLogo: "/assets/bgmi_badge.png",
    bannerImage: "/assets/bgmi_banner1.jpg",
    tier: "T1 Elite",
    type: "Paid Tournament",
    prizePool: "₹1,00,000",
    prizeBreakdown: {
      first: "₹50,000",
      second: "₹25,000",
      third: "₹15,000",
      fourth: "₹10,000",
      mvp: "₹5,000"
    },
    entryFee: "₹250 / Squad",
    totalSlots: 25,
    filledSlots: 21,
    status: "FILLING FAST",
    date: "Tomorrow, Oct 29",
    time: "07:00 PM IST",
    map: "Erangel + Miramar",
    format: "Squads (TPP) • 4 Players + 2 Subs",
    organizer: "STG Esports Official",
    isVerified: true,
    rules: [
      "No iPads, Emulators or external triggers allowed. Mobile phones only.",
      "Room ID & Password will be shared 15 minutes before match start in Discord & UPMI App.",
      "All 4 players must have BGMI Level 40+ and Tier Diamond or above.",
      "Any form of toxicity, teaming or hacking will lead to an immediate ban & slot forfeiture.",
      "Points calculated as per Official BGIS 10-Point System + 1 pt per kill."
    ]
  },
  {
    id: "tourney-2",
    title: "⚡ UPMI Night T1 Scrims (Battle Royale)",
    subtitle: "Tier 1 Daily Practice Room for Competitive Rosters",
    game: "BGMI",
    gameLogo: "/assets/bgmi_badge.png",
    bannerImage: "/assets/arena_stage.jpg",
    tier: "T1 Scrims",
    type: "Live Scrims",
    prizePool: "₹15,000",
    prizeBreakdown: {
      first: "₹8,000",
      second: "₹4,000",
      third: "₹3,000"
    },
    entryFee: "FREE (Pro Pass)",
    totalSlots: 25,
    filledSlots: 23,
    status: "LIVE TODAY",
    date: "Tonight",
    time: "08:30 PM IST",
    map: "Erangel",
    format: "Squad (TPP) • 25 Slots / Group",
    organizer: "UPMI Exclusive",
    isVerified: true,
    rules: [
      "Strictly for Tier 1 verified rosters and Pro Club members.",
      "Match 1: Erangel (08:30 PM), Match 2: Miramar (09:15 PM).",
      "Slots 1-20 are reserved for invited franchised clans.",
      "Live stream broadcast available on YouTube & UPMI App."
    ]
  },
  {
    id: "tourney-3",
    title: "BGMI Grinders Tier 2 Scrims",
    subtitle: "Open Qualifiers & Practice for Aspiring Pro Teams",
    game: "BGMI",
    gameLogo: "/assets/bgmi_badge.png",
    bannerImage: "/assets/bgmi_banner2.jpg",
    tier: "T2 Scrims",
    type: "Free Scrims",
    prizePool: "₹5,000",
    prizeBreakdown: {
      first: "₹3,000",
      second: "₹1,500",
      third: "₹500"
    },
    entryFee: "FREE",
    totalSlots: 25,
    filledSlots: 17,
    status: "OPEN",
    date: "Tonight",
    time: "09:45 PM IST",
    map: "Sanhok",
    format: "Squad (TPP) • 25 Slots / Group",
    organizer: "STG Community League",
    isVerified: false,
    rules: [
      "Open to all competitive squads looking to climb to T1.",
      "Slot allocation on first-come-first-serve basis.",
      "Recording of last circle gameplay mandatory for proof verification."
    ]
  },
  {
    id: "tourney-4",
    title: "Free Fire Warrior Cup Pro - Season 1",
    subtitle: "Clash of Squads & Battle Royale Championship",
    game: "Free Fire",
    gameLogo: "/assets/slot_template_ff.png",
    bannerImage: "/assets/airdrop_poster.jpg",
    tier: "T1 Elite",
    type: "Paid Tournament",
    prizePool: "₹30,000",
    prizeBreakdown: {
      first: "₹15,000",
      second: "₹9,000",
      third: "₹6,000"
    },
    entryFee: "₹150 / Squad",
    totalSlots: 16,
    filledSlots: 14,
    status: "FILLING FAST",
    date: "Oct 31",
    time: "06:00 PM IST",
    map: "Bermuda + Purgatory",
    format: "16 Slots / Group • Squad (BR)",
    organizer: "Virtuality Esports",
    isVerified: true,
    rules: [
      "No gun attributes in competitive mode.",
      "Gun property: Off, Character skill: Active/Passive allowed.",
      "16 slots maximum per lobby."
    ]
  },
  {
    id: "tourney-5",
    title: "BGMI Masters Arena Invitational",
    subtitle: "Tier 1 National Championship Qualifiers & Custom Lobby",
    game: "BGMI",
    gameLogo: "/assets/bgmi_badge.png",
    bannerImage: "/assets/bgmi_banner3.jpg",
    tier: "T1 Elite",
    type: "Paid Tournament",
    prizePool: "₹75,000",
    prizeBreakdown: {
      first: "₹40,000",
      second: "₹20,000",
      third: "₹10,000",
      fourth: "₹5,000"
    },
    entryFee: "₹200 / Squad",
    totalSlots: 25,
    filledSlots: 19,
    status: "FILLING FAST",
    date: "Oct 30",
    time: "08:00 PM IST",
    map: "Erangel + Vikendi",
    format: "Squads (TPP) • 25 Slots / Lobby",
    organizer: "UPMI Esports Arena",
    isVerified: true,
    rules: [
      "Standard BGIS 10-Point Scoring System + 1 pt per kill.",
      "Mobile devices only. External controllers or emulators prohibited.",
      "All squad members must have BGMI Level 45+.",
      "Instant room ID & password dispatch via WhatsApp & UPMI App.",
      "Top 4 squads qualify for the Grand Finals stage."
    ]
  },
  {
    id: "tourney-6",
    title: "Free Fire Clash Squad Showdown",
    subtitle: "Weekly Fast-Paced 4v4 Bracket Tournament",
    game: "Free Fire",
    gameLogo: "/assets/slot_template_ff.png",
    bannerImage: "/assets/airdrop_poster.jpg",
    tier: "T2 Open",
    type: "Free Scrims",
    prizePool: "₹10,000",
    prizeBreakdown: {
      first: "₹6,000",
      second: "₹3,000",
      third: "₹1,000"
    },
    entryFee: "FREE",
    totalSlots: 16,
    filledSlots: 12,
    status: "OPEN",
    date: "Nov 01",
    time: "05:30 PM IST",
    map: "Bermuda",
    format: "4v4 Clash Squad • Knockout",
    organizer: "STG Community League",
    isVerified: true,
    rules: [
      "No gun attributes allowed in competitive mode.",
      "Default character skill configurations only.",
      "Knockout bracket format with best of 3 rounds."
    ]
  }
];

export const INITIAL_SLOTS = [
  { slot: 1, teamName: "Soul Esports", igl: "Manya", tag: "SOUL", status: "CONFIRMED", logo: "👑" },
  { slot: 2, teamName: "GodLike Esports", igl: "Jonathan", tag: "GODL", status: "CONFIRMED", logo: "⚡" },
  { slot: 3, teamName: "Team Tamilas", igl: "MrIGL", tag: "TT", status: "CONFIRMED", logo: "🔥" },
  { slot: 4, teamName: "Blind Esports", igl: "Spower", tag: "BLIND", status: "CONFIRMED", logo: "🎯" },
  { slot: 5, teamName: "Entity Gaming", igl: "Saumraj", tag: "ENTITY", status: "CONFIRMED", logo: "🛡️" },
  { slot: 6, teamName: "Orangutan", igl: "Ash", tag: "OG", status: "CONFIRMED", logo: "🦍" },
  { slot: 7, teamName: "Revenant Esports", igl: "Sensei", tag: "RNT", status: "CONFIRMED", logo: "💀" },
  { slot: 8, teamName: "Global Esports", igl: "Mavi", tag: "GE", status: "CONFIRMED", logo: "🌐" },
  { slot: 9, teamName: "Gladiators Esports", igl: "Destro", tag: "GLAD", status: "CONFIRMED", logo: "⚔️" },
  { slot: 10, teamName: "Team XSpark", igl: "Shadow", tag: "TX", status: "CONFIRMED", logo: "✨" },
  { slot: 11, teamName: "Hyderabad Hydras", igl: "Striker", tag: "HH", status: "CONFIRMED", logo: "🐉" },
  { slot: 12, teamName: "Medal Esports", igl: "Kyoya", tag: "MEDAL", status: "CONFIRMED", logo: "🏅" },
  { slot: 13, teamName: "Enigma Gaming", igl: "Rex", tag: "EG", status: "CONFIRMED", logo: "🎭" },
  { slot: 14, teamName: "Reckoning Esports", igl: "Aaru", tag: "RKG", status: "CONFIRMED", logo: "🌪️" },
  { slot: 15, teamName: "Big Brother Esports", igl: "Nishant", tag: "BB", status: "CONFIRMED", logo: "🦁" },
  { slot: 16, teamName: "Team Insane", igl: "Darklord", tag: "INSANE", status: "CONFIRMED", logo: "☣️" },
  { slot: 17, teamName: "Numen Gaming", igl: "ClutchGod", tag: "NUMEN", status: "CONFIRMED", logo: "🦅" },
  { slot: 18, teamName: "Gujarat Tigers", igl: "Wizz", tag: "GT", status: "CONFIRMED", logo: "🐅" },
  { slot: 19, teamName: "WSB Gaming", igl: "Frosty", tag: "WSB", status: "CONFIRMED", logo: "🐺" },
  { slot: 20, teamName: "Team Forever", igl: "Owais", tag: "4EVE", status: "CONFIRMED", logo: "♾️" },
  { slot: 21, teamName: "Team Strikers", igl: "Falcon", tag: "STRK", status: "CONFIRMED", logo: "⚡" },
  { slot: 22, teamName: "Open Slot", igl: "Available", tag: "-", status: "OPEN", logo: "➕" },
  { slot: 23, teamName: "Open Slot", igl: "Available", tag: "-", status: "OPEN", logo: "➕" },
  { slot: 24, teamName: "Open Slot", igl: "Available", tag: "-", status: "OPEN", logo: "➕" },
  { slot: 25, teamName: "Open Slot", igl: "Available", tag: "-", status: "OPEN", logo: "➕" }
];

export const POINT_SYSTEM = [
  { rank: 1, points: 10, label: "Winner Winner Chicken Dinner" },
  { rank: 2, points: 6, label: "2nd Place" },
  { rank: 3, points: 5, label: "3rd Place" },
  { rank: 4, points: 4, label: "4th Place" },
  { rank: 5, points: 3, label: "5th Place" },
  { rank: 6, points: 2, label: "6th Place" },
  { rank: "7-8", points: 1, label: "7th & 8th Place" },
  { rank: "9-16", points: 0, label: "9th to 16th Place" },
  { rank: "Per Kill", points: 1, label: "1 Finish / Kill Point" }
];

export const TALENT_PROFILES = [
  {
    id: "coach-1",
    type: "Coach",
    name: "Coach Mayank 'Raptor'",
    title: "Head Strategy Coach",
    matchesCount: 340,
    metricLabel: "Matches Coached",
    experience: "5+ Years Competitive (BGIS / BGPS)",
    rate: "₹1,500 / Hr Session",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=11",
    badge: "VERIFIED COACH",
    bio: "Ex-Tier 1 player turned strategic coach. Specializes in edge rotations, split-pushes, and zone prediction algorithms."
  },
  {
    id: "caster-1",
    type: "Commentator",
    name: "Caster Ankit 'Vortex'",
    title: "Esports Caster & Desk Host",
    matchesCount: 520,
    metricLabel: "Matches Casted",
    experience: "Hindi & English Dual Casting",
    rate: "₹3,500 / Series",
    rating: 5.0,
    avatar: "https://i.pravatar.cc/150?img=12",
    badge: "OFFICIAL CASTER",
    bio: "High-adrenaline play-by-play casting with deep game analytics. Casted over 40 major national invitationals."
  },
  {
    id: "streamer-1",
    type: "Streamer",
    name: "ViperGamer Live",
    title: "Esports Broadcast Partner",
    matchesCount: 280,
    metricLabel: "Streams Hosted",
    experience: "185K+ Subscribers on YouTube",
    rate: "₹2,000 / Stream",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=33",
    badge: "YOUTUBE PARTNER",
    bio: "Full 1080p 60FPS multi-camera tournament broadcasting with custom overlay stinger graphics & sponsor integration."
  },
  {
    id: "org-1",
    type: "Organiser",
    name: "Upthrust Esports League",
    title: "Tier 1 Scrims & League Host",
    matchesCount: 150,
    metricLabel: "Tournaments Hosted",
    experience: "Licensed Krafton Tournament Org",
    rate: "Full Production House",
    rating: 5.0,
    avatar: "https://i.pravatar.cc/150?img=60",
    badge: "VERIFIED ORG",
    bio: "Specializing in automated slot allocation, anti-cheat refereeing, and rapid prize distribution payouts."
  },
  {
    id: "coach-2",
    type: "Coach",
    name: "Coach Rohan 'Matrix'",
    title: "VOD Analyst & Performance Coach",
    matchesCount: 410,
    metricLabel: "Matches Analyzed",
    experience: "Krafton Certified Esports Analyst",
    rate: "₹2,000 / Hr Session",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=68",
    badge: "VERIFIED ANALYST",
    bio: "Data-driven match breakdown and team fight positioning for aspiring Tier 1 rosters competing in BGIS & BMPS."
  },
  {
    id: "caster-2",
    type: "Commentator",
    name: "Caster Priya 'Phoenix'",
    title: "Bilingual Shoutcaster & Desk Host",
    matchesCount: 380,
    metricLabel: "Matches Casted",
    experience: "English & Hindi Tier 1 Finals",
    rate: "₹3,000 / Series",
    rating: 5.0,
    avatar: "https://i.pravatar.cc/150?img=47",
    badge: "OFFICIAL CASTER",
    bio: "Dynamic play-by-play casting with high energy hypes, player backstory knowledge, and live audience crowd engagement."
  }
];

export const SQUAD_FINDER_POSTS = [
  {
    id: "post-1",
    teamName: "Team Strikers",
    tag: "STRK",
    lookingFor: "Aggressive Assaulter / Entry Fragger",
    game: "BGMI",
    requirements: "Tier 1/2 experience, BGMI F/D Ratio 5.0+, Device: iPhone 13+ / 90 FPS",
    contactIGL: "Falcon_99 (IGL)",
    postedAgo: "2 hours ago",
    urgency: "HIGH",
    avatar: "⚡"
  },
  {
    id: "post-2",
    teamName: "Vortex Gaming",
    tag: "VTX",
    lookingFor: "In-Game Leader (IGL) / Caller",
    game: "BGMI",
    requirements: "Deep zone rotation knowledge, calm shot-caller under pressure, BGIS experience preferred",
    contactIGL: "Vtx_Manager",
    postedAgo: "5 hours ago",
    urgency: "MEDIUM",
    avatar: "🌪️"
  },
  {
    id: "post-3",
    teamName: "Free Agent: ShadowSniper",
    tag: "LFP",
    lookingFor: "Looking for Competitive Squad (T1/T2)",
    game: "BGMI",
    requirements: "Role: DMR / Support Sniper. 4 years comp experience. Available for daily 8 PM scrims",
    contactIGL: "Shadow_BGMI (52194821)",
    postedAgo: "1 day ago",
    urgency: "OPEN",
    avatar: "🎯"
  }
];

export const PRO_STORE_ITEMS = [
  {
    id: "prod-1",
    title: "UPMI Official Esports Pro Jersey",
    subtitle: "Custom Nickname & Clan Tag Print • Breathable Dry-Fit",
    price: "₹1,299",
    originalPrice: "₹1,899",
    badge: "BESTSELLER",
    image: "/assets/arena_stage.jpg",
    category: "Apparel"
  },
  {
    id: "prod-2",
    title: "Carbon Fiber Pro Gaming Finger Sleeves (Pack of 4)",
    subtitle: "Zero Sweat • 100% Touch Sensitivity • Sweat-proof Silver Fiber",
    price: "₹399",
    originalPrice: "₹599",
    badge: "PRO ACCESSORY",
    image: "/assets/airdrop_poster.jpg",
    category: "Accessories"
  },
  {
    id: "prod-3",
    title: "UPMI VIP Scrims Monthly Pass",
    subtitle: "Guaranteed Tier 1 Scrims Slot Everyday • Pro Flyer Templates",
    price: "₹499 / Month",
    originalPrice: "₹999",
    badge: "VIP PASS",
    image: "/assets/bgmi_banner1.jpg",
    category: "Membership"
  }
];
