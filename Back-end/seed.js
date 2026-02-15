// seed.js (COMPLETE VERSION)
const mongoose = require("mongoose");
require("dotenv").config();

// Importing my models
const Connection = require("./models/ops");
const Item = require("./models/item");
const Income = require("./models/income");
const girl = require("./models/girls");
const bases = require("./models/bases");
const pilots = require("./models/pilots");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedAll = async () => {
  try {
    await Connection.deleteMany({});
    await Item.deleteMany({});
    await Income.deleteMany({});
    await girl.deleteMany({});
    await bases.deleteMany({});
    await pilots.deleteMany({});

    const basesdata = [
      {
        location:"PK",
        city: "karachi base",
        year:1991
      },
      {
        location:"IND",
        city:"delhi base",
        year:1990
      }
    ]
const connectionData = [
  
  {
    op_name: "Operation Desert Storm",
    op_year: 1991,
    op_goal: "The Gulf War (1990–1991) was a conflict triggered by Iraq's invasion of Kuwait, prompting a U.S.-led coalition to intervene under the banner of the United Nations. Central to the war was the overwhelming use of air power, marking a turning point in modern warfare. Operation Desert Storm began with a massive aerial bombardment on January 17, 1991, targeting Iraqi command centers, radar installations, airfields, and infrastructure. Over 100,000 sorties were flown by coalition aircraft, using precision-guided munitions, stealth technology (notably the F-117 Nighthawk), and extensive electronic warfare to cripple Iraqi defenses before any ground troops advanced. Air superiority was quickly established, allowing coalition forces to dominate the battlefield and minimize casualties, ultimately leading to Iraq’s retreat from Kuwait within 100 hours of the ground assault.",
    image : "storm.png",
    jets_used: [
    "F-117 Nighthawk", "F-15C Eagle", "F-16 Fighting Falcon", 
    "F/A-18 Hornet", "A-10 Thunderbolt II", "B-52 Stratofortress",
    "F-14 Tomcat", "F-4G Wild Weasel", "EF-111 Raven", "EA-6B Prowler"
  ],
    op_status: "completed"
  },

  {
    op_name: "Operation Rolling Thunder",
    op_year: 1965,
    op_goal: "Operation Rolling Thunder was a sustained aerial bombing campaign conducted by the United States against North Vietnam from March 1965 to November 1968 during the Vietnam War. Its primary objective was to weaken the North Vietnamese resolve and disrupt their support to the Viet Cong insurgency in the South. Utilizing aircraft like the F-4 Phantom, B-52 Stratofortress, and A-4 Skyhawk, the U.S. dropped over a million tons of ordnance on strategic targets including supply routes, industrial sites, and infrastructure. However, the operation faced stiff resistance from North Vietnamese air defenses, including Soviet-supplied SAMs and MiG fighters, resulting in heavy American aircraft losses. Despite its scale, Rolling Thunder failed to achieve its political and military objectives, and it became a symbol of the limitations of air power in asymmetric warfare.",
    image : "thunder.png",
    jets_used : [
    "F-105 Thunderchief", "F-4 Phantom II", "B-52 Stratofortress",
    "A-4 Skyhawk", "A-6 Intruder", "F-100 Super Sabre", 
    "F-104 Starfighter"
  ],
    op_status: "completed"
  },
  {
    op_name: "Operation Linebacker",
    op_year: 1972,
    op_goal: "Operation Linebacker was a major U.S. air campaign launched in May 1972 during the Vietnam War, aimed at halting the North Vietnamese Easter Offensive and pressuring them into peace negotiations. Unlike earlier operations, Linebacker allowed U.S. pilots to strike a broader range of strategic targets, including supply lines, bridges, railways, and military installations in both North and South Vietnam. It marked the first time since World War II that precision-guided bombs (laser-guided smart bombs) were used extensively in combat, greatly increasing the effectiveness of the bombing runs. American aircraft such as the F-4 Phantom, B-52 Stratofortress, and A-6 Intruder played central roles in the campaign. Linebacker significantly disrupted North Vietnam's logistics and helped shift the momentum back toward South Vietnamese and U.S. forces, paving the way for renewed peace talks in Paris.",
    image : "line.png",
    jets_used: [
    "B-52 Stratofortress", "F-4 Phantom II", "A-7 Corsair II",
    "F-111 Aardvark", "A-6 Intruder", "EB-66 Destroyer"
  ],
    op_status: "completed"
  },
    {
    op_name: "Operation Swift Retort",
    op_year: 2019,
    op_goal: "Operation Swift Retort was Pakistan’s military response to India's airstrike in Balakot on February 26, 2019, which India claimed targeted terrorist camps following the Pulwama attack. On February 27, 2019, the Pakistan Air Force (PAF) launched airstrikes near Indian military installations across the Line of Control (LoC) in Jammu and Kashmir, deliberately avoiding casualties to demonstrate capability and restraint. During the operation, PAF fighter jets shot down an Indian MiG-21 Bison, and the pilot, Wing Commander Abhinandan Varthaman, was captured and later released as a peace gesture. The operation was hailed in Pakistan as a successful show of deterrence and national resolve.",
    image : "swift.png",
    jets_used:  [
    "JF-17 Thunder", "F-16 Fighting Falcon", 
  ],
    op_status: "completed"
  },
  {
    op_name: "Operation Focus",
    op_year: 1967,
    op_goal: "Operation Focus was a preemptive airstrike conducted by Israel during the Six-Day War in June 1967. The operation aimed to destroy the Egyptian Air Force while it was still on the ground, thereby gaining air superiority for the duration of the conflict. On June 5, 1967, Israel launched a surprise attack against Egyptian airbases, using a combination of fast jets and bombers. The operation was highly successful, resulting in the destruction of a significant portion of the Egyptian Air Force and allowing Israeli ground forces to advance with minimal aerial opposition. Operation Focus is often cited as a classic example of the effectiveness of preemptive strikes in modern warfare.",
    image : "focus.png",
    jets_used:  [
    "Mirage III", "Mystère IV", "Super Mystère", 
    "Fouga Magister", "Nord Noratlas"
  ],
    op_status: "completed"
  },
  {
    op_name: "Operation Bunyan Al Marsoos",
    op_year: 1967,
    op_goal: "Operation Bunyan al Marsoos was Pakistan’s May 2025 military campaign launched in response to Indian strikes, targeting key Indian airbases and missile sites to defend national sovereignty",
    image : "hafiz.png",
    jets_used:  [
    "F-16", "JF-17 thunder", "J10C"
  ],
    op_status: "completed"
  }
];


    
    const itemData =  [
  { 
    name: "Lockheed Martin", 
    founded: 1912, 
    specialization: "Aerospace & Defense", 
    headquarters: "Bethesda, Maryland, USA", 
    notableproject: "F-35 Lightning II",
    image: "martin.png"
  },
  { 
    name: "General Dynamics", 
    founded: 1952, 
    specialization: "Marine Systems, Combat Systems", 
    headquarters: "Reston, Virginia, USA", 
    notableproject: "Virginia-class submarines",
    image: "general.png"
  },
  { 
    name: "Northrop Grumman", 
    founded: 1939, 
    specialization: "Space Systems, Autonomous Systems", 
    headquarters: "Falls Church, Virginia, USA", 
    notableproject: "B-21 Raider stealth bomber",
    image: "b2.png"
  },
  { 
    name: "Raytheon Technologies", 
    founded: 1922, 
    specialization: "Missiles & Defense", 
    headquarters: "Waltham, Massachusetts, USA", 
    notableproject: "Patriot missile systems",
    image: "ray.png"
  },
  { 
    name: "Boeing Defense", 
    founded: 1916, 
    specialization: "Military Aircraft", 
    headquarters: "Arlington, Virginia, USA", 
    notableproject: "AH-64 Apache helicopter",
    image: "boe.png"
  },
  { 
    name: "BAE Systems", 
    founded: 1999, 
    specialization: "Electronic Warfare", 
    headquarters: "London, UK", 
    notableproject: "Eurofighter Typhoon",
    image: "bae.png"
  },
  { 
    name: "L3Harris Technologies", 
    founded: 2019, 
    specialization: "Space & Airborne Systems", 
    headquarters: "Melbourne, Florida, USA", 
    notableproject: "Military communications systems",
    image: "l3.png"
  },
  { 
    name: "Leidos", 
    founded: 1969, 
    specialization: "Defense IT Solutions", 
    headquarters: "Reston, Virginia, USA", 
    notableproject: "DoD cybersecurity systems",
    image: "lei.png"
  }
];
  const girlData = [
  {
    jetname: "F-22 Raptor",
    pse: "The Ghost of the Sky",
    features: "Stealth, Supercruise, Advanced Avionics",
    year: 2005,
    image: "f22.png",
    rating: 5,
    kills: 15,
    likeher: true,
    eth: "USA",
    weight: 19700,
    desc: "An air superiority beast with unmatched stealth and speed."
  },
  {
    jetname: "Su-57 Felon",
    pse: "Russian Phantom",
    features: "Stealth, Thrust Vectoring",
    year: 2020,
    image: "su57.png",
    rating: 4,
    kills: 4,
    likeher: false,
    eth: "Russia",
    weight: 18000,
    desc: "Russia's 5th-gen answer to the F-22 with raw power."
  },
  {
    jetname: "JF-17 Thunder",
    pse: "Pakistan's Agile Falcon",
    features: "Multirole, Affordable, Lightweight",
    year: 2007,
    image: "jf17.png",
    rating: 4,
    kills: 2,
    likeher: false,
    eth: "Pakistan",
    weight: 9800,
    desc: "A joint Sino-Pakistani fighter that's combat-proven and cost-effective."
  },
  {
    jetname: "Dassault Rafale",
    pse: "French Precision Blade",
    features: "Omnirole, Electronic Warfare",
    year: 2001,
    image: "rafale.png",
    rating: 4,
    kills: 3,
    likeher: false,
    eth: "France",
    weight: 10000,
    desc: "Advanced multirole jet known for its maneuverability and tech."
  },
  {
    jetname: "Eurofighter Typhoon",
    pse: "The Tornado's Legacy",
    features: "Multirole, High Agility",
    year: 2003,
    image: "typhoon.png",
    rating: 3,
    kills: 1,
    likeher: false,
    eth: "Europe",
    weight: 11000,
    desc: "Built by a European consortium with performance in mind."
  },
  {
    jetname: "F-35 Lightning II",
    pse: "Silent Strike",
    features: "Stealth, Sensor Fusion, Networked Warfare",
    year: 2015,
    image: "f35.png",
    rating: 5,
    kills: 6,
    likeher: false,
    eth: "USA",
    weight: 13500,
    desc: "Most advanced fighter jet globally, used by many allies."
  },
  {
    jetname: "MiG-29 Fulcrum",
    pse: "Cold War Raptor",
    features: "Twin Engine, Air Superiority",
    year: 1983,
    image: "mig29.png",
    rating: 3,
    kills: 8,
    likeher: false,
    eth: "Russia",
    weight: 11000,
    desc: "One of the most famous Soviet-era jets still flying."
  },
  {
    jetname: "F-16 Falcon",
    pse: "The Viper",
    features: "Dogfighter, Versatile",
    year: 1978,
    image: "f16.png",
    rating: 4,
    kills: 10,
    likeher: false,
    eth: "USA",
    weight: 8500,
    desc: "A widely exported jet, still highly relevant today."
  },
  {
    jetname: "Tejas Mk1",
    pse: "Indigenous Eagle",
    features: "Lightweight, Agile",
    year: 2015,
    image: "tejas.png",
    rating: 3,
    kills: 0,
    likeher: false,
    eth: "India",
    weight: 6500,
    desc: "India's homegrown multirole fighter showing steady progress."
  },
  {
    jetname: "Chengdu J-20",
    pse: "Mighty Dragon",
    features: "Stealth, Long Range",
    year: 2017,
    image: "j20.png",
    rating: 4,
    kills: 1,
    likeher: true,
    eth: "China",
    weight: 19000,
    desc: "China’s leap into stealth fighter tech with growing dominance."
  },
  
  {
    "jetname": "Shenyang J-35",
    "pse": "Falcon Eagle",
    "features": "Stealth, Carrier-Based, Multirole",
    "year": 2025, // Expected IOC
    "image": "j35.png",
    "rating": 4.5, // Potentially superior to J-20
    "kills": 0, // Not yet operational
    "likeher": true,
    "eth": "China",
    "weight": 13500, // kg (estimated empty weight)
    "desc": "China’s answer to the F-35, optimized for naval operations and export markets."
  },
  {
    "jetname": "Northrop Grumman B-2 Spirit",
    "pse": "Stealth Bomber",
    "features": "Stealth, Nuclear Capable, Intercontinental Range",
    "year": 1997,
    "image": "b2r.png",
    "rating": 5, // Most advanced stealth bomber
    "kills": 0, // No air-to-air kills (bomber role)
    "likeher": true,
    "eth": "USA",
    "weight": 71700, // kg (empty weight)
    "desc": "The world’s only operational stealth bomber, capable of penetrating any air defense system."
  },
    {
    jetname: "F-15C Eagle",
    pse: "Sky Dominator",
    features: "Air Superiority, Twin Engine, Long Range",
    year: 1976,
    image: "f15.png",
    rating: 5,
    kills: 104,
    likeher: false,
    eth: "USA",
    weight: 12700,
    desc: "A legendary air superiority fighter with an unbeaten air-to-air combat record."
  },
  {
    jetname: "F/A-18 Hornet",
    pse: "Carrier’s Spear",
    features: "Carrier-Based, Multirole, Agile",
    year: 1983,
    image: "fa18.png",
    rating: 4,
    kills: 13,
    likeher: false,
    eth: "USA",
    weight: 10400,
    desc: "A versatile jet built for the U.S. Navy and Marines with combat-proven capabilities."
  },
  {
    jetname: "A-10 Thunderbolt II",
    pse: "Warthog",
    features: "Close Air Support, Tank Killer",
    year: 1977,
    image: "a10.png",
    rating: 4,
    kills: 7,
    likeher: true,
    eth: "USA",
    weight: 11300,
    desc: "Known for its survivability and the GAU-8 Avenger gun, it dominates low-altitude battles."
  },
  {
    jetname: "F-14 Tomcat",
    pse: "Top Gun Icon",
    features: "Variable-Sweep Wing, Fleet Defense",
    year: 1974,
    image: "f14.png",
    rating: 4,
    kills: 38,
    likeher: true,
    eth: "USA",
    weight: 18100,
    desc: "Famed for its role in Top Gun and real-world combat with advanced long-range missiles."
  },
  {
    jetname: "F-4 Phantom II",
    pse: "Twin-Tail Thunder",
    features: "Multirole, Two-Seat, High Payload",
    year: 1960,
    image: "f4.png",
    rating: 4,
    kills: 280,
    likeher: false,
    eth: "USA",
    weight: 13760,
    desc: "A workhorse of the Cold War, used by multiple countries across decades of conflict."
  },
  {
    jetname: "F-105 Thunderchief",
    pse: "Thud",
    features: "Supersonic Bomber, Nuclear Capable",
    year: 1958,
    image: "f105.png",
    rating: 3,
    kills: 27,
    likeher: false,
    eth: "USA",
    weight: 11800,
    desc: "Designed for low-altitude penetration and bombing runs during the Vietnam War."
  },
  {
    jetname: "A-6 Intruder",
    pse: "All-Weather Bomber",
    features: "Carrier-Based, Night Attack",
    year: 1963,
    image: "a6.png",
    rating: 3,
    kills: 0,
    likeher: false,
    eth: "USA",
    weight: 12300,
    desc: "A key naval bomber known for operating in bad weather and low-visibility missions."
  },
  {
    jetname: "A-4 Skyhawk",
    pse: "Scooter",
    features: "Light Bomber, Nimble",
    year: 1956,
    image: "a4.png",
    rating: 3,
    kills: 4,
    likeher: false,
    eth: "USA",
    weight: 4900,
    desc: "A compact, carrier-capable attack jet with a big combat record in Vietnam and beyond."
  },
  {
    jetname: "F-100 Super Sabre",
    pse: "Hun",
    features: "Supersonic, Fighter-Bomber",
    year: 1954,
    image: "f100.png",
    rating: 2,
    kills: 7,
    likeher: false,
    eth: "USA",
    weight: 8600,
    desc: "First U.S. fighter to reach supersonic speed in level flight, used in early Vietnam War."
  },
  {
    jetname: "Mirage III",
    pse: "Desert Falcon",
    features: "Delta Wing, Supersonic Interceptor",
    year: 1961,
    image: "mirage3.png",
    rating: 4,
    kills: 60,
    likeher: false,
    eth: "France",
    weight: 7000,
    desc: "A classic delta-wing jet that served Israel and others with notable combat success."
  },
  {
    jetname: "F-111 Aardvark",
    pse: "Swingwing Striker",
    features: "Variable Sweep Wing, Precision Strike",
    year: 1967,
    image: "f111.png",
    rating: 4,
    kills: 3,
    likeher: false,
    eth: "USA",
    weight: 21000,
    desc: "Fast, deep-strike bomber with terrain-following radar and high payload."
  },
  {
    jetname: "A-7 Corsair II",
    pse: "The Short Sword",
    features: "Carrier-Based, Ground Attack",
    year: 1967,
    image: "a7.png",
    rating: 3,
    kills: 2,
    likeher: false,
    eth: "USA",
    weight: 8700,
    desc: "Compact attack aircraft with a solid record in Vietnam and the Gulf War."
  },
  {
    jetname: "EB-66 Destroyer",
    pse: "Jammer King",
    features: "Electronic Warfare, Recon",
    year: 1959,
    image: "eb66.png",
    rating: 3,
    kills: 0,
    likeher: false,
    eth: "USA",
    weight: 25000,
    desc: "Provided critical electronic jamming support in high-threat enemy territory."
  },
  {
    jetname: "Mystère IV",
    pse: "Vintage Blaster",
    features: "Early Jet Fighter-Bomber",
    year: 1953,
    image: "am4.png",
    rating: 2,
    kills: 5,
    likeher: false,
    eth: "France",
    weight: 6200,
    desc: "Used by Israel in the Six-Day War, this early French jet packed a punch in its day."
  },
  {
    jetname: "Super Mystère",
    pse: "Sonic Flash",
    features: "Supersonic Interceptor",
    year: 1958,
    image: "sm1.png",
    rating: 3,
    kills: 3,
    likeher: false,
    eth: "France",
    weight: 6700,
    desc: "France’s first supersonic aircraft, saw action with Israeli forces."
  },
  {
    jetname: "Fouga Magister",
    pse: "Jet Trainer Turned Fighter",
    features: "Trainer, Light Attack",
    year: 1952,
    image: "fg.png",
    rating: 2,
    kills: 1,
    likeher: false,
    eth: "France",
    weight: 2800,
    desc: "Primarily a trainer, but used in combat roles by Israel during the Six-Day War."
  },
  {
    jetname: "Nord Noratlas",
    pse: "Flying Mule",
    features: "Transport, Paratroop Carrier",
    year: 1953,
    image: "nfw.png",
    rating: 1,
    kills: 0,
    likeher: false,
    eth: "France",
    weight: 13500,
    desc: "Twin-boom transport aircraft used for logistics and paratrooper drops, not combat."
  }


];


    const incomeData = [
      { type: "Web 3", amount: 3000, curve: 4 },
      { type: "Marketing", amount: 2000, curve: 2 },
      { type: "Cloud Computing", amount: 3000, curve: 3 }
    ];

    //new model and route for pilot, seed here!xoxo
    const pilotData = [
     {
    name: "Muhammad Mahmood Alam",
    status: "Deceased",
    country: "Pakistan",
    kills: 9,
    awards: "Sitara-e-Jurat",
    image: "mm.jpg"
  },
  {
    name: "Erich Hartmann",
    status: "Deceased",
    country: "Germany",
    kills: 352,
    awards: "Knight's Cross of the Iron Cross",
    image: "erich.jpg"
  },
  {
    name: "Chuck Yeager",
    status: "Deceased",
    country: "United States",
    kills: 11,
    awards: "Distinguished Service Medal",
    image: "chuck.jpg"
  },
  {
    name: "Adolf Galland",
    status: "Deceased",
    country: "Germany",
    kills: 104,
    awards: "Knight's Cross with Oak Leaves",
    image: "adolf.jpg"
  },
  {
    name: "Douglas Bader",
    status: "Deceased",
    country: "United Kingdom",
    kills: 22,
    awards: "Distinguished Service Order",
    image: "douglas.jpg"
  },
  {
    name: "Indra Lal Roy",
    status: "Deceased",
    country: "India",
    kills: 10,
    awards: "Distinguished Flying Cross",
    image: "indra.jpg"
  },
  {
    name: "Richard Bong",
    status: "Deceased",
    country: "United States",
    kills: 40,
    awards: "Medal of Honor",
    image: "richard.jpg"
  },
  {
    name: "James Jabara",
    status: "Deceased",
    country: "United States",
    kills: 15,
    awards: "Distinguished Service Cross",
    image: "james.jpg"
  },
  {
    name: "Colin Gray",
    status: "Deceased",
    country: "New Zealand",
    kills: 27,
    awards: "Distinguished Service Order",
    image: "colin.jpg"
  },
  
    ]
    // Seed all collections
  
    await Connection.insertMany(connectionData);
    console.log("Initial data seeded!");
    await pilots.insertMany(pilotData);
    console.log('Pilots data seeded!');  
    await Item.insertMany(itemData);
    console.log("Operation data seeded!");
    
    await Income.insertMany(incomeData);
    console.log("More data seeded!");
    


    await girl.insertMany(girlData);
    console.log("Jets data seeded!");

    await bases.insertMany(basesdata);
    console.log("bases data updated!");
    console.log("All data seeded successfully!");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error Seeding with Jet info!", error);
    mongoose.disconnect();
  }
};

seedAll();