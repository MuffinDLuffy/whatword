// src/data/dictionary.ts

export interface WordData {
  word: string;
  etymology: string;
  commonUses: string[];
  inRealLife: string;
  translations?: Record<string, {
    word?: string;
    etymology?: string;
    commonUses?: string[];
    inRealLife?: string;
  }>;
}

export const wordDatabase: Record<string, WordData> = {
  "WIND": {
    word: "WIND",
    etymology: "Old English 'wind', of Germanic origin; from an Indo-European root meaning 'to blow'.",
    commonUses: [
      "The perceptible natural movement of the air.",
      "Breath as needed in physical exertion."
    ],
    // Tying the word back to concrete nouns and literary concepts
    inRealLife: "A cornerstone elemental reference in traditional Japanese Haikus, often utilized to symbolize sudden change, the collective unconscious, or the fleeting nature of a moment."
  },
  "AURA": {
    word: "AURA",
    etymology: "From Latin 'aura' (breeze, breath of air), derived from Greek 'aurā'.",
    commonUses: [
      "A distinctive but intangible quality surrounding a person or thing.",
      "A subtle sensory stimulus."
    ],
    inRealLife: "Explored heavily in metamodern philosophy to describe the 'vibe' of a space. It's also a recurring atmospheric motif in progressive rap to denote stage presence."
  }
  ,"LIGHT": {
    word: "LIGHT",
    etymology: "Old English 'lēoht', from Proto-Germanic *leukhtam; related to Latin 'lux'.",
    commonUses: [
      "Electromagnetic radiation visible to the human eye.",
      "A metaphor for knowledge or revelation."
    ],
    inRealLife: "Common in visual arts and photography as a central compositional element; also used metaphorically in literature and UX design to indicate clarity."
  },
  "STONE": {
    word: "STONE",
    etymology: "Old English 'stān', from Proto-Germanic *stainaz; related to Latin 'stānus' variants.",
    commonUses: [
      "A naturally occurring solid aggregate.",
      "A unit of weight in some English-speaking countries."
    ],
    inRealLife: "Foundational material in architecture and sculpture; used symbolically to indicate permanence or burden."
  },
  "RIVER": {
    word: "RIVER",
    etymology: "Old French 'riviere', from Latin 'ripa' meaning riverbank.",
    commonUses: [
      "A natural flowing watercourse.",
      "A channel of cultural or economic exchange."
    ],
    inRealLife: "Rivers shape landscapes and civilizations; often invoked in poetry to signal passage of time."
  },
  "CLOUD": {
    word: "CLOUD",
    etymology: "Old English 'clud' (mass of rock), later sense shift to moisture masses in the sky.",
    commonUses: [
      "A visible mass of condensed water vapor in the atmosphere.",
      "A networked data storage metaphor in computing."
    ],
    inRealLife: "Used both in meteorology and in tech as shorthand for remote services; a frequent motif in dreamlike or ephemeral imagery."
  },
  "HEART": {
    word: "HEART",
    etymology: "Old English 'heorte', from Proto-Germanic *hertan; related to Latin 'cor'.",
    commonUses: [
      "The muscular organ pumping blood.",
      "A symbol of love and emotional center."
    ],
    inRealLife: "Central in medical, poetic, and design contexts to represent core or central importance."
  },
  "BRAVE": {
    word: "BRAVE",
    etymology: "From French 'brave' meaning courageous, ultimately from Late Latin 'bravus'.",
    commonUses: [
      "Showing courage or resolve.",
      "Bold or splendid in appearance."
    ],
    inRealLife: "Used in storytelling and branding to evoke heroism and boldness."
  },
  "SMILE": {
    word: "SMILE",
    etymology: "Old English 'smilian', related to expressions of the face.",
    commonUses: [
      "A facial expression indicating pleasure or amusement.",
      "A social signal of friendliness."
    ],
    inRealLife: "Studied in psychology and used in marketing to convey approachability and warmth."
  },
  "OCEAN": {
    word: "OCEAN",
    etymology: "From Greek 'ōkeanos' meaning large sea or river encircling the world.",
    commonUses: [
      "A vast body of saline water.",
      "A metaphor for vastness or depth."
    ],
    inRealLife: "Central to climate science, marine ecosystems, and cultural metaphors for scale and mystery."
  },
  "TRUTH": {
    word: "TRUTH",
    etymology: "Old English 'triewð' meaning faithfulness or accordance with fact.",
    commonUses: [
      "Conformity to reality or fact.",
      "Sincerity in speech or action."
    ],
    inRealLife: "A philosophical and legal cornerstone; often explored in literature and journalism."
  },
  "FLAME": {
    word: "FLAME",
    etymology: "Old English 'flam', from Proto-Germanic *flammaz.",
    commonUses: [
      "The visible, gaseous part of a fire.",
      "A passionate or intense feeling."
    ],
    inRealLife: "Used in visual motifs, ceremonial purposes, and as a metaphor for desire or anger."
  },
  "GRAIN": {
    word: "GRAIN",
    etymology: "Old French 'graine', from Latin 'granum' meaning seed.",
    commonUses: [
      "Seed of a cereal plant.",
      "A small hard particle or texture descriptor."
    ],
    inRealLife: "Important in agriculture and food systems; used metaphorically for small, essential parts."
  },
  "SHORE": {
    word: "SHORE",
    etymology: "Old English 'sceor' or 'scor', meaning coast or bank.",
    commonUses: [
      "Land along the edge of a sea, lake, or river.",
      "To support or prop (archaic)."
    ],
    inRealLife: "Sites of cultural exchange and leisure; frequently appears in travel writing and coastal planning."
  },
  "CROWN": {
    word: "CROWN",
    etymology: "Old French 'corone', from Latin 'corona' meaning garland or wreath.",
    commonUses: [
      "A royal head ornament.",
      "The top or highest point of something."
    ],
    inRealLife: "Symbolic in politics and ceremonies; used in dentistry and design language to indicate the apex."
  },
  "GUEST": {
    word: "GUEST",
    etymology: "Old English 'gæst' meaning stranger or visitor.",
    commonUses: [
      "A person invited to visit or stay.",
      "A featured participant in a show or event."
    ],
    inRealLife: "Important in hospitality, media, and community events; studied in service design."
  },
  "BRICK": {
    word: "BRICK",
    etymology: "Middle English 'brike', from Old English 'bric' (break).",
    commonUses: [
      "A block of ceramic material used in building.",
      "A slang term for a heavy, solid object."
    ],
    inRealLife: "Core building material in many architectural traditions; metaphorically used to denote reliability."
  },
  "MUSIC": {
    word: "MUSIC",
    etymology: "From Greek 'mousike' (art of the Muses) via Latin and Old French.",
    commonUses: [
      "An art form using sound organized in time.",
      "Audio content for entertainment or ritual."
    ],
    inRealLife: "Central to culture, industry, and technology; shapes social identity and spaces."
  },
  "PLANT": {
    word: "PLANT",
    etymology: "Old English 'plante', from Latin 'planta' meaning sprout or cutting.",
    commonUses: [
      "A living organism of the kingdom Plantae.",
      "To place or set in the ground."
    ],
    inRealLife: "Important for ecology, food systems, and design; widely used in therapeutic contexts."
  },
  "BLOOM": {
    word: "BLOOM",
    etymology: "Old English 'blōma', related to blossom.",
    commonUses: [
      "The flowering condition of a plant.",
      "A period of rapid growth or success."
    ],
    inRealLife: "Appears in horticulture, branding, and metaphorical language for flourishing states."
  },
  "WATER": {
    word: "WATER",
    etymology: "Old English 'wæter', from Proto-Germanic *watar.",
    commonUses: [
      "A transparent fluid forming seas, lakes, rivers.",
      "To supply plants or soil with water."
    ],
    inRealLife: "Crucial to life, infrastructure, and ritual; central to environmental policy and design."
  },
  "SLEEP": {
    word: "SLEEP",
    etymology: "Old English 'slǣp', from Proto-Germanic *slepą.",
    commonUses: [
      "A natural periodic state of rest.",
      "To be in a state of inactivity or dormancy."
    ],
    inRealLife: "Studied across medicine, psychology and productivity literature; used metaphorically for inactivity."
  },
  "FOREST": {
    word: "FOREST",
    etymology: "From Old French 'forest', via Medieval Latin 'foresta'.",
    commonUses: [
      "A large area dominated by trees.",
      "A habitat supporting diverse wildlife."
    ],
    inRealLife: "Forests are central to ecosystems, carbon cycles, and cultural imagery; essential for conservation efforts."
  },
  "PLANET": {
    word: "PLANET",
    etymology: "From Greek 'planētēs' meaning 'wanderer', via Latin 'planeta'.",
    commonUses: [
      "A celestial body orbiting a star.",
      "Used metaphorically to indicate scale or worldview."
    ],
    inRealLife: "Planets shape astronomy and education; 'planet' is central to science communication and exploration narratives."
  },
  "CASTLE": {
    word: "CASTLE",
    etymology: "From Latin 'castellum' (fort), via Old English 'cæstel'.",
    commonUses: [
      "A fortified building or complex.",
      "Appears in historical and fictional contexts."
    ],
    inRealLife: "Castles are subjects of architectural study and heritage tourism; frequent settings in storytelling and games."
  },
  "BRIDGE": {
    word: "BRIDGE",
    etymology: "Old English 'brycg', from Proto-Germanic *brugjo.",
    commonUses: [
      "A structure carrying a route over obstacles.",
      "A metaphor for connection between people or ideas."
    ],
    inRealLife: "Bridges are vital infrastructure in engineering and a common motif for transition and connection in culture."
  },
  "ISLAND": {
    word: "ISLAND",
    etymology: "Old English 'īegland' meaning 'watery land'.",
    commonUses: [
      "Land surrounded by water.",
      "Used metaphorically for isolation or retreat."
    ],
    inRealLife: "Islands play important roles in ecology, geopolitics, and tourism; often used to explore isolation or sanctuary in literature."
  },
  "ORCHID": {
    word: "ORCHID",
    etymology: "From Greek 'orkhis' (testicle), later the plant family Orchidaceae.",
    commonUses: [
      "A diverse family of flowering plants.",
      "Popular as ornamental plants and in perfumery."
    ],
    inRealLife: "Orchids are prized in horticulture and symbolism for rarity and elegance; important to botanical study."
  },
  "STREAM": {
    word: "STREAM",
    etymology: "Old English 'stream', related to flowing water.",
    commonUses: [
      "A small, flowing body of water.",
      "A continuous flow of media or data."
    ],
    inRealLife: "Streams support freshwater ecosystems and recreational activities; 'stream' also describes modern media delivery."
  },
  "CANDLE": {
    word: "CANDLE",
    etymology: "From Latin 'candela' via Old English 'candel'.",
    commonUses: [
      "A wax object burned to give light.",
      "Used ceremonially or decoratively."
    ],
    inRealLife: "Candles feature in rituals, design and commerce; used symbolically for remembrance and ambience."
  },
  "GALAXY": {
    word: "GALAXY",
    etymology: "From Greek 'galaxias' (milky), from 'gala' meaning milk.",
    commonUses: [
      "A vast system of stars and interstellar matter.",
      "Used metaphorically to indicate vast collections."
    ],
    inRealLife: "Galaxies are central to astronomy and science outreach; the term is used widely in branding and metaphor."
  },
  "MARKET": {
    word: "MARKET",
    etymology: "From Latin 'mercatus' (trade), via Old French.",
    commonUses: [
      "A place for buying and selling goods.",
      "An economic sector or audience segment."
    ],
    inRealLife: "Markets underpin commerce, economics and urban life; a focus of study in business and planning."
  },
  "SEASON": {
    word: "SEASON",
    etymology: "From Old French 'saison', from Latin roots related to sowing.",
    commonUses: [
      "A division of the year marked by weather patterns.",
      "To add flavor to food."
    ],
    inRealLife: "Seasons structure agriculture, culture and sport scheduling; they are central to many traditions and economies."
  },
  "HARBOR": {
    word: "HARBOR",
    etymology: "Old English 'herebeorg' meaning shelter; later sense shifted to maritime shelter.",
    commonUses: [
      "A sheltered area for ships to dock.",
      "To hold an idea or feeling secretly."
    ],
    inRealLife: "Harbors are core to maritime trade, naval history and coastal economies; often used metaphorically for refuge."
  },
  "MEADOW": {
    word: "MEADOW",
    etymology: "Old English 'mædwe' from Proto-Germanic origins.",
    commonUses: [
      "A field of grass or wildflowers.",
      "A pastoral landscape in art and literature."
    ],
    inRealLife: "Meadows support biodiversity and grazing; they're valued in conservation and cultural imagery."
  },
  "SUNSET": {
    word: "SUNSET",
    etymology: "Compound of 'sun' + 'set', describing the sun's descent.",
    commonUses: [
      "The daily disappearance of the sun below the horizon.",
      "A metaphor for endings and transitions."
    ],
    inRealLife: "Sunsets are prominent in photography, tourism and cultural symbolism; often used to mark closure."
  },
  "JUNGLE": {
    word: "JUNGLE",
    etymology: "From Hindi 'jangal' via Sanskrit, meaning uncultivated land.",
    commonUses: [
      "A dense tropical forest.",
      "A metaphor for chaotic or lawless places."
    ],
    inRealLife: "Jungles are biodiverse ecosystems vital to conservation; they're also powerful literary and cultural settings."
  },
  "SIGNAL": {
    word: "SIGNAL",
    etymology: "From Latin 'signum' meaning sign or mark.",
    commonUses: [
      "A transmitted sign or message.",
      "An indicator in data or behavior."
    ],
    inRealLife: "Signals are central to communication, electronics, and behavioral analysis; used broadly in modern tech."
  },
  "STUDIO": {
    word: "STUDIO",
    etymology: "From Latin 'studium' meaning study or zeal.",
    commonUses: [
      "A workspace for artists, producers or creators.",
      "A small apartment or single-room unit."
    ],
    inRealLife: "Studios host creative production across music, film and art; they're hubs for practice and collaboration."
  },
  "LAPTOP": {
    word: "LAPTOP",
    etymology: "Compound of 'lap' + 'top', originally denoting a portable computer used on the lap.",
    commonUses: [
      "A portable personal computer.",
      "A device for remote work and study."
    ],
    inRealLife: "Laptops are central to modern work, education and mobility; core to remote workflows and productivity."
  },
  "MUSEUM": {
    word: "MUSEUM",
    etymology: "From Greek 'mouseion' (seat of the Muses).",
    commonUses: [
      "A place to preserve and exhibit objects of historical or artistic interest.",
      "An institution for research and education."
    ],
    inRealLife: "Museums preserve cultural heritage and support education and research; they're critical to public history and curation."
  },
  "SHOWER": {
    word: "SHOWER",
    etymology: "Old English 'scūr' (a brief fall of rain), later used for bathing fixtures.",
    commonUses: [
      "A short rainfall or bathing fixture.",
      "An event where gifts are given in celebration."
    ],
    inRealLife: "Showers appear in both meteorology and domestic life; 'baby shower' is a well-known social ritual."
  }
};

export function getWordData(word: string): WordData | undefined {
  return wordDatabase[word];
}