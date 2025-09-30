
export interface DNSServer {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  ping?: number;
  type: 'gaming' | 'download' | 'general';
  ipVersion: 'ipv4' | 'ipv6';
  location: string;
}

export interface Game {
  id: string;
  name: string;
  icon: string;
  category: string;
}

export interface Device {
  id: string;
  name: string;
  icon: string;
  games: Game[];
}

// Enhanced games list with 150+ games per device
export const devices: Device[] = [
  {
    id: 'pc',
    name: 'PC / Windows',
    icon: '💻',
    games: [
      // FPS Games
      { id: 'valorant', name: 'Valorant', icon: '🎯', category: 'FPS' },
      { id: 'csgo', name: 'CS:GO', icon: '🔫', category: 'FPS' },
      { id: 'cs2', name: 'Counter-Strike 2', icon: '🔫', category: 'FPS' },
      { id: 'overwatch', name: 'Overwatch 2', icon: '🦸', category: 'FPS' },
      { id: 'cod_mw', name: 'Call of Duty: Modern Warfare', icon: '💥', category: 'FPS' },
      { id: 'cod_warzone', name: 'Call of Duty: Warzone', icon: '🪂', category: 'FPS' },
      { id: 'cod_bo', name: 'Call of Duty: Black Ops', icon: '💀', category: 'FPS' },
      { id: 'battlefield', name: 'Battlefield 2042', icon: '💣', category: 'FPS' },
      { id: 'rainbow6', name: 'Rainbow Six Siege', icon: '🏠', category: 'FPS' },
      { id: 'titanfall', name: 'Titanfall 2', icon: '🤖', category: 'FPS' },
      { id: 'doom', name: 'DOOM Eternal', icon: '👹', category: 'FPS' },
      { id: 'quake', name: 'Quake Champions', icon: '⚡', category: 'FPS' },
      { id: 'hunt', name: 'Hunt: Showdown', icon: '🔍', category: 'FPS' },
      { id: 'escape_tarkov', name: 'Escape from Tarkov', icon: '🎒', category: 'FPS' },
      { id: 'insurgency', name: 'Insurgency: Sandstorm', icon: '🏜️', category: 'FPS' },
      
      // Battle Royale
      { id: 'fortnite', name: 'Fortnite', icon: '🏗️', category: 'Battle Royale' },
      { id: 'pubg', name: 'PUBG', icon: '🪂', category: 'Battle Royale' },
      { id: 'apex', name: 'Apex Legends', icon: '🎮', category: 'Battle Royale' },
      { id: 'warzone', name: 'Warzone 2.0', icon: '🌍', category: 'Battle Royale' },
      { id: 'fall_guys', name: 'Fall Guys', icon: '🏃', category: 'Battle Royale' },
      { id: 'super_animal', name: 'Super Animal Royale', icon: '🐾', category: 'Battle Royale' },
      { id: 'naraka', name: 'Naraka: Bladepoint', icon: '⚔️', category: 'Battle Royale' },
      { id: 'vampire_survivors', name: 'Vampire Survivors', icon: '🧛', category: 'Battle Royale' },
      
      // MOBA
      { id: 'lol', name: 'League of Legends', icon: '⚔️', category: 'MOBA' },
      { id: 'dota2', name: 'Dota 2', icon: '🛡️', category: 'MOBA' },
      { id: 'hots', name: 'Heroes of the Storm', icon: '🌟', category: 'MOBA' },
      { id: 'smite', name: 'SMITE', icon: '⚡', category: 'MOBA' },
      
      // MMORPG
      { id: 'wow', name: 'World of Warcraft', icon: '🗡️', category: 'MMORPG' },
      { id: 'wow_classic', name: 'WoW Classic', icon: '🏰', category: 'MMORPG' },
      { id: 'ffxiv', name: 'Final Fantasy XIV', icon: '🐉', category: 'MMORPG' },
      { id: 'eso', name: 'Elder Scrolls Online', icon: '📜', category: 'MMORPG' },
      { id: 'gw2', name: 'Guild Wars 2', icon: '⚔️', category: 'MMORPG' },
      { id: 'swtor', name: 'Star Wars: The Old Republic', icon: '🌌', category: 'MMORPG' },
      { id: 'lost_ark', name: 'Lost Ark', icon: '🏺', category: 'MMORPG' },
      { id: 'new_world', name: 'New World', icon: '🌍', category: 'MMORPG' },
      { id: 'albion', name: 'Albion Online', icon: '🏛️', category: 'MMORPG' },
      { id: 'bdo', name: 'Black Desert Online', icon: '🏜️', category: 'MMORPG' },
      
      // Action/Adventure
      { id: 'gta5', name: 'GTA V', icon: '🚗', category: 'Action' },
      { id: 'rdr2', name: 'Red Dead Redemption 2', icon: '🤠', category: 'Action' },
      { id: 'cyberpunk', name: 'Cyberpunk 2077', icon: '🤖', category: 'Action' },
      { id: 'witcher3', name: 'The Witcher 3', icon: '🗡️', category: 'Action' },
      { id: 'assassins_creed', name: 'Assassin\'s Creed Valhalla', icon: '🏹', category: 'Action' },
      { id: 'far_cry', name: 'Far Cry 6', icon: '🏝️', category: 'Action' },
      { id: 'watch_dogs', name: 'Watch Dogs Legion', icon: '📱', category: 'Action' },
      { id: 'saints_row', name: 'Saints Row', icon: '👑', category: 'Action' },
      { id: 'mafia', name: 'Mafia: Definitive Edition', icon: '🕴️', category: 'Action' },
      { id: 'sleeping_dogs', name: 'Sleeping Dogs', icon: '🐕', category: 'Action' },
      
      // Racing
      { id: 'forza_horizon', name: 'Forza Horizon 5', icon: '🏎️', category: 'Racing' },
      { id: 'forza_motorsport', name: 'Forza Motorsport', icon: '🏁', category: 'Racing' },
      { id: 'gran_turismo', name: 'Gran Turismo 7', icon: '🚗', category: 'Racing' },
      { id: 'f1_22', name: 'F1 22', icon: '🏎️', category: 'Racing' },
      { id: 'dirt_rally', name: 'DiRT Rally 2.0', icon: '🏔️', category: 'Racing' },
      { id: 'nfs_heat', name: 'Need for Speed Heat', icon: '🔥', category: 'Racing' },
      { id: 'nfs_unbound', name: 'Need for Speed Unbound', icon: '🎨', category: 'Racing' },
      { id: 'crew_2', name: 'The Crew 2', icon: '🌎', category: 'Racing' },
      { id: 'wreckfest', name: 'Wreckfest', icon: '💥', category: 'Racing' },
      
      // Sports
      { id: 'fifa', name: 'FIFA 24', icon: '⚽', category: 'Sports' },
      { id: 'pes', name: 'eFootball PES', icon: '⚽', category: 'Sports' },
      { id: 'nba2k', name: 'NBA 2K24', icon: '🏀', category: 'Sports' },
      { id: 'nfl', name: 'Madden NFL 24', icon: '🏈', category: 'Sports' },
      { id: 'nhl', name: 'NHL 24', icon: '🏒', category: 'Sports' },
      { id: 'rocket', name: 'Rocket League', icon: '🚀', category: 'Sports' },
      { id: 'tony_hawk', name: 'Tony Hawk\'s Pro Skater', icon: '🛹', category: 'Sports' },
      { id: 'wwe2k', name: 'WWE 2K23', icon: '🤼', category: 'Sports' },
      
      // Strategy
      { id: 'age_empires', name: 'Age of Empires IV', icon: '🏰', category: 'Strategy' },
      { id: 'civilization', name: 'Civilization VI', icon: '🌍', category: 'Strategy' },
      { id: 'total_war', name: 'Total War: Warhammer III', icon: '⚔️', category: 'Strategy' },
      { id: 'starcraft', name: 'StarCraft II', icon: '🚀', category: 'Strategy' },
      { id: 'command_conquer', name: 'Command & Conquer', icon: '💣', category: 'Strategy' },
      { id: 'crusader_kings', name: 'Crusader Kings III', icon: '👑', category: 'Strategy' },
      { id: 'europa_universalis', name: 'Europa Universalis IV', icon: '🗺️', category: 'Strategy' },
      { id: 'hearts_iron', name: 'Hearts of Iron IV', icon: '⚔️', category: 'Strategy' },
      { id: 'cities_skylines', name: 'Cities: Skylines', icon: '🏙️', category: 'Strategy' },
      { id: 'tropico', name: 'Tropico 6', icon: '🏝️', category: 'Strategy' },
      
      // Simulation
      { id: 'minecraft', name: 'Minecraft', icon: '🧱', category: 'Sandbox' },
      { id: 'terraria', name: 'Terraria', icon: '⛏️', category: 'Sandbox' },
      { id: 'sims4', name: 'The Sims 4', icon: '🏠', category: 'Simulation' },
      { id: 'cities_skylines_sim', name: 'Cities: Skylines', icon: '🏗️', category: 'Simulation' },
      { id: 'planet_coaster', name: 'Planet Coaster', icon: '🎢', category: 'Simulation' },
      { id: 'farming_sim', name: 'Farming Simulator 22', icon: '🚜', category: 'Simulation' },
      { id: 'euro_truck', name: 'Euro Truck Simulator 2', icon: '🚛', category: 'Simulation' },
      { id: 'american_truck', name: 'American Truck Simulator', icon: '🚚', category: 'Simulation' },
      { id: 'flight_sim', name: 'Microsoft Flight Simulator', icon: '✈️', category: 'Simulation' },
      { id: 'train_sim', name: 'Train Simulator', icon: '🚂', category: 'Simulation' },
      
      // Horror/Survival
      { id: 'phasmophobia', name: 'Phasmophobia', icon: '👻', category: 'Horror' },
      { id: 'dead_daylight', name: 'Dead by Daylight', icon: '🔦', category: 'Horror' },
      { id: 'resident_evil', name: 'Resident Evil 4', icon: '🧟', category: 'Horror' },
      { id: 'outlast', name: 'Outlast Trinity', icon: '📹', category: 'Horror' },
      { id: 'amnesia', name: 'Amnesia: The Bunker', icon: '🕯️', category: 'Horror' },
      { id: 'subnautica', name: 'Subnautica', icon: '🌊', category: 'Survival' },
      { id: 'green_hell', name: 'Green Hell', icon: '🌿', category: 'Survival' },
      { id: 'forest', name: 'The Forest', icon: '🌲', category: 'Survival' },
      { id: 'raft', name: 'Raft', icon: '🛟', category: 'Survival' },
      { id: 'valheim', name: 'Valheim', icon: '⚔️', category: 'Survival' },
      
      // Indie Games
      { id: 'hades', name: 'Hades', icon: '🔥', category: 'Indie' },
      { id: 'hollow_knight', name: 'Hollow Knight', icon: '🗡️', category: 'Indie' },
      { id: 'celeste', name: 'Celeste', icon: '🏔️', category: 'Indie' },
      { id: 'ori', name: 'Ori and the Will of the Wisps', icon: '🌟', category: 'Indie' },
      { id: 'cuphead', name: 'Cuphead', icon: '☕', category: 'Indie' },
      { id: 'undertale', name: 'Undertale', icon: '❤️', category: 'Indie' },
      { id: 'stardew_valley', name: 'Stardew Valley', icon: '🌾', category: 'Indie' },
      { id: 'among_us_pc', name: 'Among Us', icon: '👾', category: 'Indie' },
      { id: 'fall_guys_pc', name: 'Fall Guys', icon: '🏃', category: 'Indie' },
      { id: 'rocket_league_pc', name: 'Rocket League', icon: '🚀', category: 'Indie' },
      
      // Platform Games
      { id: 'steam', name: 'Steam Games', icon: '🎮', category: 'Platform' },
      { id: 'epic_games', name: 'Epic Games Store', icon: '🎯', category: 'Platform' },
      { id: 'origin', name: 'EA Origin', icon: '🎮', category: 'Platform' },
      { id: 'uplay', name: 'Ubisoft Connect', icon: '🎮', category: 'Platform' },
      { id: 'battle_net', name: 'Battle.net', icon: '⚔️', category: 'Platform' },
      { id: 'gog', name: 'GOG Galaxy', icon: '🎮', category: 'Platform' },
      { id: 'xbox_pc', name: 'Xbox Game Pass PC', icon: '🎮', category: 'Platform' },
      
      // Fighting Games
      { id: 'street_fighter', name: 'Street Fighter 6', icon: '👊', category: 'Fighting' },
      { id: 'tekken8', name: 'Tekken 8', icon: '🥊', category: 'Fighting' },
      { id: 'mortal_kombat', name: 'Mortal Kombat 1', icon: '💀', category: 'Fighting' },
      { id: 'guilty_gear', name: 'Guilty Gear Strive', icon: '⚔️', category: 'Fighting' },
      { id: 'dragon_ball', name: 'Dragon Ball FighterZ', icon: '🐉', category: 'Fighting' },
      { id: 'injustice', name: 'Injustice 2', icon: '🦸', category: 'Fighting' },
      { id: 'king_fighters', name: 'The King of Fighters XV', icon: '👑', category: 'Fighting' },
      
      // Puzzle Games
      { id: 'portal2', name: 'Portal 2', icon: '🌀', category: 'Puzzle' },
      { id: 'tetris_effect', name: 'Tetris Effect', icon: '🧩', category: 'Puzzle' },
      { id: 'witness', name: 'The Witness', icon: '🔍', category: 'Puzzle' },
      { id: 'baba_is_you', name: 'Baba Is You', icon: '🐑', category: 'Puzzle' },
      { id: 'return_obra', name: 'Return of the Obra Dinn', icon: '🚢', category: 'Puzzle' },
      
      // RPG Games
      { id: 'elden_ring', name: 'Elden Ring', icon: '💍', category: 'RPG' },
      { id: 'dark_souls', name: 'Dark Souls III', icon: '🗡️', category: 'RPG' },
      { id: 'sekiro', name: 'Sekiro: Shadows Die Twice', icon: '🥷', category: 'RPG' },
      { id: 'bloodborne', name: 'Bloodborne', icon: '🩸', category: 'RPG' },
      { id: 'skyrim', name: 'The Elder Scrolls V: Skyrim', icon: '🐉', category: 'RPG' },
      { id: 'fallout4', name: 'Fallout 4', icon: '☢️', category: 'RPG' },
      { id: 'mass_effect', name: 'Mass Effect Legendary Edition', icon: '🚀', category: 'RPG' },
      { id: 'dragon_age', name: 'Dragon Age: Inquisition', icon: '🐲', category: 'RPG' },
      { id: 'divinity', name: 'Divinity: Original Sin 2', icon: '🔮', category: 'RPG' },
      { id: 'baldurs_gate', name: 'Baldur\'s Gate 3', icon: '🎲', category: 'RPG' },
      { id: 'pathfinder', name: 'Pathfinder: Wrath of the Righteous', icon: '⚔️', category: 'RPG' },
      { id: 'pillars_eternity', name: 'Pillars of Eternity II', icon: '📜', category: 'RPG' },
      { id: 'disco_elysium', name: 'Disco Elysium', icon: '🕵️', category: 'RPG' },
      { id: 'persona5', name: 'Persona 5 Royal', icon: '🎭', category: 'RPG' },
      { id: 'nier_automata', name: 'NieR: Automata', icon: '🤖', category: 'RPG' },
      
      // Co-op Games
      { id: 'it_takes_two', name: 'It Takes Two', icon: '👫', category: 'Co-op' },
      { id: 'a_way_out', name: 'A Way Out', icon: '🏃‍♂️', category: 'Co-op' },
      { id: 'overcooked', name: 'Overcooked! 2', icon: '👨‍🍳', category: 'Co-op' },
      { id: 'moving_out', name: 'Moving Out', icon: '📦', category: 'Co-op' },
      { id: 'portal2_coop', name: 'Portal 2 Co-op', icon: '🌀', category: 'Co-op' },
      { id: 'left4dead2', name: 'Left 4 Dead 2', icon: '🧟‍♂️', category: 'Co-op' },
      { id: 'deep_rock', name: 'Deep Rock Galactic', icon: '⛏️', category: 'Co-op' },
      { id: 'sea_thieves', name: 'Sea of Thieves', icon: '🏴‍☠️', category: 'Co-op' },
      { id: 'dont_starve', name: 'Don\'t Starve Together', icon: '🔥', category: 'Co-op' },
      { id: 'risk_rain', name: 'Risk of Rain 2', icon: '☔', category: 'Co-op' }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile / Android',
    icon: '📱',
    games: [
      // Battle Royale Mobile
      { id: 'pubgm', name: 'PUBG Mobile', icon: '📱', category: 'Battle Royale' },
      { id: 'codm', name: 'Call of Duty Mobile', icon: '🎯', category: 'FPS' },
      { id: 'freefire', name: 'Free Fire', icon: '🔥', category: 'Battle Royale' },
      { id: 'fortnitem', name: 'Fortnite Mobile', icon: '🏗️', category: 'Battle Royale' },
      { id: 'apex_mobile', name: 'Apex Legends Mobile', icon: '🎮', category: 'Battle Royale' },
      { id: 'rules_survival', name: 'Rules of Survival', icon: '🏃', category: 'Battle Royale' },
      { id: 'knives_out', name: 'Knives Out', icon: '🔪', category: 'Battle Royale' },
      { id: 'cyber_hunter', name: 'Cyber Hunter', icon: '🤖', category: 'Battle Royale' },
      { id: 'creative_destruction', name: 'Creative Destruction', icon: '💥', category: 'Battle Royale' },
      { id: 'battlelands', name: 'Battlelands Royale', icon: '👑', category: 'Battle Royale' },
      
      // MOBA Mobile
      { id: 'ml', name: 'Mobile Legends', icon: '⚔️', category: 'MOBA' },
      { id: 'aov', name: 'Arena of Valor', icon: '🏟️', category: 'MOBA' },
      { id: 'wild_rift', name: 'League of Legends: Wild Rift', icon: '🎮', category: 'MOBA' },
      { id: 'heroes_evolved', name: 'Heroes Evolved', icon: '🦸', category: 'MOBA' },
      { id: 'vainglory', name: 'Vainglory', icon: '⚡', category: 'MOBA' },
      { id: 'onmyoji_arena', name: 'Onmyoji Arena', icon: '👹', category: 'MOBA' },
      { id: 'extraordinary_ones', name: 'Extraordinary Ones', icon: '🌟', category: 'MOBA' },
      { id: 'marvel_super_war', name: 'Marvel Super War', icon: '🦸‍♂️', category: 'MOBA' },
      
      // Strategy Mobile
      { id: 'clash', name: 'Clash of Clans', icon: '🏰', category: 'Strategy' },
      { id: 'clashroy', name: 'Clash Royale', icon: '👑', category: 'Strategy' },
      { id: 'boom_beach', name: 'Boom Beach', icon: '🏖️', category: 'Strategy' },
      { id: 'hay_day', name: 'Hay Day', icon: '🌾', category: 'Strategy' },
      { id: 'rise_kingdoms', name: 'Rise of Kingdoms', icon: '🏛️', category: 'Strategy' },
      { id: 'lords_mobile', name: 'Lords Mobile', icon: '🏰', category: 'Strategy' },
      { id: 'state_survival', name: 'State of Survival', icon: '🧟', category: 'Strategy' },
      { id: 'guns_glory', name: 'Guns of Glory', icon: '🔫', category: 'Strategy' },
      { id: 'king_avalon', name: 'King of Avalon', icon: '👑', category: 'Strategy' },
      { id: 'art_war', name: 'Art of War: Legions', icon: '⚔️', category: 'Strategy' },
      { id: 'plants_zombies', name: 'Plants vs. Zombies 2', icon: '🌱', category: 'Strategy' },
      { id: 'tower_defense', name: 'Kingdom Rush', icon: '🏰', category: 'Strategy' },
      { id: 'bloons_td', name: 'Bloons TD 6', icon: '🎈', category: 'Strategy' },
      { id: 'age_empires_mobile', name: 'Age of Empires Mobile', icon: '🏛️', category: 'Strategy' },
      { id: 'civilization_mobile', name: 'Civilization VI Mobile', icon: '🌍', category: 'Strategy' },
      
      // Action Mobile
      { id: 'brawl', name: 'Brawl Stars', icon: '⭐', category: 'Action' },
      { id: 'shadow_fight', name: 'Shadow Fight 3', icon: '🥷', category: 'Action' },
      { id: 'dead_trigger', name: 'Dead Trigger 2', icon: '🧟', category: 'Action' },
      { id: 'into_dead', name: 'Into the Dead 2', icon: '💀', category: 'Action' },
      { id: 'zombie_catchers', name: 'Zombie Catchers', icon: '🎣', category: 'Action' },
      { id: 'jetpack_joyride', name: 'Jetpack Joyride', icon: '🚀', category: 'Action' },
      { id: 'dan_the_man', name: 'Dan The Man', icon: '👨', category: 'Action' },
      { id: 'vector', name: 'Vector', icon: '🏃‍♂️', category: 'Action' },
      { id: 'ninja_arashi', name: 'Ninja Arashi', icon: '🥷', category: 'Action' },
      { id: 'metal_slug', name: 'Metal Slug Attack', icon: '🔫', category: 'Action' },
      
      // RPG Mobile
      { id: 'genshin', name: 'Genshin Impact', icon: '🗡️', category: 'RPG' },
      { id: 'honkai_impact', name: 'Honkai Impact 3rd', icon: '⚡', category: 'RPG' },
      { id: 'honkai_star_rail', name: 'Honkai: Star Rail', icon: '🚂', category: 'RPG' },
      { id: 'epic_seven', name: 'Epic Seven', icon: '⚔️', category: 'RPG' },
      { id: 'summoners_war', name: 'Summoners War', icon: '🐉', category: 'RPG' },
      { id: 'raid_shadow', name: 'Raid: Shadow Legends', icon: '🛡️', category: 'RPG' },
      { id: 'afk_arena', name: 'AFK Arena', icon: '🏰', category: 'RPG' },
      { id: 'idle_heroes', name: 'Idle Heroes', icon: '🦸', category: 'RPG' },
      { id: 'seven_knights', name: 'Seven Knights', icon: '⚔️', category: 'RPG' },
      { id: 'king_fighters_all', name: 'The King of Fighters ALLSTAR', icon: '👑', category: 'RPG' },
      { id: 'final_fantasy_brave', name: 'Final Fantasy Brave Exvius', icon: '🗡️', category: 'RPG' },
      { id: 'dragon_ball_legends', name: 'Dragon Ball Legends', icon: '🐉', category: 'RPG' },
      { id: 'bleach_brave', name: 'Bleach: Brave Souls', icon: '⚔️', category: 'RPG' },
      { id: 'naruto_blazing', name: 'Naruto Shippuden: Ultimate Ninja Blazing', icon: '🍥', category: 'RPG' },
      { id: 'one_piece', name: 'One Piece Treasure Cruise', icon: '🏴‍☠️', category: 'RPG' },
      
      // Racing Mobile
      { id: 'asphalt9', name: 'Asphalt 9: Legends', icon: '🏎️', category: 'Racing' },
      { id: 'real_racing', name: 'Real Racing 3', icon: '🏁', category: 'Racing' },
      { id: 'csr_racing', name: 'CSR Racing 2', icon: '🚗', category: 'Racing' },
      { id: 'need_speed_mobile', name: 'Need for Speed: No Limits', icon: '🔥', category: 'Racing' },
      { id: 'drag_racing', name: 'Drag Racing', icon: '🏎️', category: 'Racing' },
      { id: 'hill_climb', name: 'Hill Climb Racing 2', icon: '🏔️', category: 'Racing' },
      { id: 'traffic_rider', name: 'Traffic Rider', icon: '🏍️', category: 'Racing' },
      { id: 'moto_gp', name: 'MotoGP Racing', icon: '🏍️', category: 'Racing' },
      { id: 'f1_mobile', name: 'F1 Mobile Racing', icon: '🏎️', category: 'Racing' },
      { id: 'carx_drift', name: 'CarX Drift Racing 2', icon: '🚗', category: 'Racing' },
      
      // Sports Mobile
      { id: 'fifa_mobile', name: 'FIFA Mobile', icon: '⚽', category: 'Sports' },
      { id: 'pes_mobile', name: 'eFootball PES Mobile', icon: '⚽', category: 'Sports' },
      { id: 'nba_live', name: 'NBA Live Mobile', icon: '🏀', category: 'Sports' },
      { id: 'nba2k_mobile', name: 'NBA 2K Mobile', icon: '🏀', category: 'Sports' },
      { id: 'madden_mobile', name: 'Madden NFL Mobile', icon: '🏈', category: 'Sports' },
      { id: 'wwe_champions', name: 'WWE Champions', icon: '🤼', category: 'Sports' },
      { id: 'golf_clash', name: 'Golf Clash', icon: '⛳', category: 'Sports' },
      { id: 'tennis_clash', name: 'Tennis Clash', icon: '🎾', category: 'Sports' },
      { id: 'bowling_king', name: 'Bowling King', icon: '🎳', category: 'Sports' },
      { id: 'pool_8_ball', name: '8 Ball Pool', icon: '🎱', category: 'Sports' },
      
      // Puzzle Mobile
      { id: 'candy', name: 'Candy Crush Saga', icon: '🍭', category: 'Puzzle' },
      { id: 'candy_soda', name: 'Candy Crush Soda Saga', icon: '🥤', category: 'Puzzle' },
      { id: 'candy_friends', name: 'Candy Crush Friends Saga', icon: '👫', category: 'Puzzle' },
      { id: 'farm_heroes', name: 'Farm Heroes Saga', icon: '🌾', category: 'Puzzle' },
      { id: 'pet_rescue', name: 'Pet Rescue Saga', icon: '🐾', category: 'Puzzle' },
      { id: 'bubble_witch', name: 'Bubble Witch 3 Saga', icon: '🔮', category: 'Puzzle' },
      { id: 'gardenscapes', name: 'Gardenscapes', icon: '🌺', category: 'Puzzle' },
      { id: 'homescapes', name: 'Homescapes', icon: '🏠', category: 'Puzzle' },
      { id: 'fishdom', name: 'Fishdom', icon: '🐠', category: 'Puzzle' },
      { id: 'township', name: 'Township', icon: '🏘️', category: 'Puzzle' },
      { id: 'june_journey', name: 'June\'s Journey', icon: '🔍', category: 'Puzzle' },
      { id: 'word_cookies', name: 'Word Cookies', icon: '🍪', category: 'Puzzle' },
      { id: 'wordscapes', name: 'Wordscapes', icon: '📝', category: 'Puzzle' },
      { id: 'crossword', name: 'Crossword Puzzle', icon: '📋', category: 'Puzzle' },
      { id: 'sudoku', name: 'Sudoku', icon: '🔢', category: 'Puzzle' },
      
      // Casual Mobile
      { id: 'subway', name: 'Subway Surfers', icon: '🚇', category: 'Endless' },
      { id: 'temple', name: 'Temple Run 2', icon: '🏃', category: 'Endless' },
      { id: 'angry', name: 'Angry Birds 2', icon: '🐦', category: 'Puzzle' },
      { id: 'angry_friends', name: 'Angry Birds Friends', icon: '🐤', category: 'Puzzle' },
      { id: 'cut_rope', name: 'Cut the Rope 3', icon: '🍭', category: 'Puzzle' },
      { id: 'fruit_ninja', name: 'Fruit Ninja', icon: '🥝', category: 'Arcade' },
      { id: 'doodle_jump', name: 'Doodle Jump', icon: '🦘', category: 'Arcade' },
      { id: 'flappy_bird', name: 'Flappy Bird', icon: '🐦', category: 'Arcade' },
      { id: 'crossy_road', name: 'Crossy Road', icon: '🐔', category: 'Arcade' },
      { id: 'piano_tiles', name: 'Piano Tiles 2', icon: '🎹', category: 'Music' },
      
      // Social Mobile
      { id: 'among', name: 'Among Us', icon: '👾', category: 'Social' },
      { id: 'fall_guys_mobile', name: 'Fall Guys Mobile', icon: '🏃', category: 'Social' },
      { id: 'stumble_guys', name: 'Stumble Guys', icon: '🤸', category: 'Social' },
      { id: 'roblox', name: 'Roblox', icon: '🎮', category: 'Social' },
      { id: 'minecraft_mobile', name: 'Minecraft', icon: '🧱', category: 'Social' },
      { id: 'terraria_mobile', name: 'Terraria', icon: '⛏️', category: 'Social' },
      { id: 'animal_crossing', name: 'Animal Crossing: Pocket Camp', icon: '🐾', category: 'Social' },
      { id: 'pokemon', name: 'Pokemon GO', icon: '🐾', category: 'AR' },
      { id: 'pokemon_unite', name: 'Pokemon UNITE', icon: '⚡', category: 'MOBA' },
      { id: 'pokemon_masters', name: 'Pokemon Masters EX', icon: '🎯', category: 'RPG' },
      
      // Simulation Mobile
      { id: 'sims_mobile', name: 'The Sims Mobile', icon: '🏠', category: 'Simulation' },
      { id: 'simcity', name: 'SimCity BuildIt', icon: '🏙️', category: 'Simulation' },
      { id: 'cooking_fever', name: 'Cooking Fever', icon: '👨‍🍳', category: 'Simulation' },
      { id: 'cooking_diary', name: 'Cooking Diary', icon: '📖', category: 'Simulation' },
      { id: 'cooking_madness', name: 'Cooking Madness', icon: '🍳', category: 'Simulation' },
      { id: 'design_home', name: 'Design Home', icon: '🏡', category: 'Simulation' },
      { id: 'episode', name: 'Episode - Choose Your Story', icon: '📚', category: 'Simulation' },
      { id: 'chapters', name: 'Chapters: Interactive Stories', icon: '📖', category: 'Simulation' },
      { id: 'choices', name: 'Choices: Stories You Play', icon: '🎭', category: 'Simulation' },
      { id: 'bitlife', name: 'BitLife', icon: '👶', category: 'Simulation' },
      
      // Adventure Mobile
      { id: 'monument_valley', name: 'Monument Valley 2', icon: '🏛️', category: 'Adventure' },
      { id: 'alto_odyssey', name: 'Alto\'s Odyssey', icon: '🏂', category: 'Adventure' },
      { id: 'limbo', name: 'LIMBO', icon: '🌑', category: 'Adventure' },
      { id: 'inside', name: 'INSIDE', icon: '🔦', category: 'Adventure' },
      { id: 'badland', name: 'BADLAND', icon: '🌲', category: 'Adventure' },
      { id: 'leo_fortune', name: 'Leo\'s Fortune', icon: '💰', category: 'Adventure' },
      { id: 'rayman', name: 'Rayman Adventures', icon: '🎮', category: 'Adventure' },
      { id: 'ori_mobile', name: 'Ori and the Blind Forest', icon: '🌟', category: 'Adventure' },
      
      // Card Games Mobile
      { id: 'hearthstone', name: 'Hearthstone', icon: '🃏', category: 'Card' },
      { id: 'clash_royale_card', name: 'Clash Royale', icon: '👑', category: 'Card' },
      { id: 'legends_runeterra', name: 'Legends of Runeterra', icon: '🗡️', category: 'Card' },
      { id: 'gwent', name: 'GWENT: The Witcher Card Game', icon: '🃏', category: 'Card' },
      { id: 'magic_gathering', name: 'Magic: The Gathering Arena', icon: '🔮', category: 'Card' },
      { id: 'yu_gi_oh', name: 'Yu-Gi-Oh! Duel Links', icon: '🎴', category: 'Card' },
      { id: 'shadowverse', name: 'Shadowverse', icon: '👤', category: 'Card' },
      { id: 'pokemon_tcg', name: 'Pokemon TCG Online', icon: '🎴', category: 'Card' }
    ]
  },
  {
    id: 'console',
    name: 'Console / PlayStation',
    icon: '🎮',
    games: [
      // Exclusive PlayStation Games
      { id: 'spiderman', name: 'Spider-Man', icon: '🕷️', category: 'Action' },
      { id: 'spiderman_miles', name: 'Spider-Man: Miles Morales', icon: '🕸️', category: 'Action' },
      { id: 'spiderman2', name: 'Spider-Man 2', icon: '🕷️', category: 'Action' },
      { id: 'god', name: 'God of War', icon: '⚔️', category: 'Action' },
      { id: 'god_ragnarok', name: 'God of War Ragnarök', icon: '🔨', category: 'Action' },
      { id: 'horizon', name: 'Horizon Zero Dawn', icon: '🏹', category: 'Adventure' },
      { id: 'horizon_west', name: 'Horizon Forbidden West', icon: '🌅', category: 'Adventure' },
      { id: 'tlou', name: 'The Last of Us', icon: '🧟', category: 'Survival' },
      { id: 'tlou2', name: 'The Last of Us Part II', icon: '🧟‍♀️', category: 'Survival' },
      { id: 'uncharted', name: 'Uncharted 4', icon: '🗺️', category: 'Adventure' },
      { id: 'uncharted_legacy', name: 'Uncharted: The Lost Legacy', icon: '💎', category: 'Adventure' },
      { id: 'bloodborne', name: 'Bloodborne', icon: '🩸', category: 'RPG' },
      { id: 'ghost_tsushima', name: 'Ghost of Tsushima', icon: '🗡️', category: 'Action' },
      { id: 'days_gone', name: 'Days Gone', icon: '🏍️', category: 'Action' },
      { id: 'death_stranding', name: 'Death Stranding', icon: '👶', category: 'Adventure' },
      { id: 'ratchet_clank', name: 'Ratchet & Clank: Rift Apart', icon: '🔧', category: 'Action' },
      { id: 'returnal', name: 'Returnal', icon: '🌀', category: 'Action' },
      { id: 'demon_souls', name: 'Demon\'s Souls', icon: '👹', category: 'RPG' },
      { id: 'sackboy', name: 'Sackboy: A Big Adventure', icon: '🧸', category: 'Platform' },
      { id: 'astro_playroom', name: 'Astro\'s Playroom', icon: '🤖', category: 'Platform' },
      
      // Multi-platform Console Games
      { id: 'fifa_ps', name: 'FIFA 24', icon: '⚽', category: 'Sports' },
      { id: 'cod_ps', name: 'Call of Duty: Modern Warfare III', icon: '💥', category: 'FPS' },
      { id: 'cod_warzone_ps', name: 'Call of Duty: Warzone', icon: '🪂', category: 'FPS' },
      { id: 'fortnite_ps', name: 'Fortnite', icon: '🏗️', category: 'Battle Royale' },
      { id: 'apex_ps', name: 'Apex Legends', icon: '🎮', category: 'Battle Royale' },
      { id: 'gta_ps', name: 'Grand Theft Auto V', icon: '🚗', category: 'Action' },
      { id: 'gta_online', name: 'GTA Online', icon: '🌐', category: 'Action' },
      { id: 'rdr2_ps', name: 'Red Dead Redemption 2', icon: '🤠', category: 'Action' },
      { id: 'rdr_online', name: 'Red Dead Online', icon: '🏜️', category: 'Action' },
      { id: 'cyberpunk_ps', name: 'Cyberpunk 2077', icon: '🤖', category: 'Action' },
      { id: 'witcher3_ps', name: 'The Witcher 3: Wild Hunt', icon: '🗡️', category: 'RPG' },
      { id: 'assassins_ps', name: 'Assassin\'s Creed Valhalla', icon: '🏹', category: 'Action' },
      { id: 'assassins_mirage', name: 'Assassin\'s Creed Mirage', icon: '🗡️', category: 'Action' },
      { id: 'far_cry_ps', name: 'Far Cry 6', icon: '🏝️', category: 'Action' },
      { id: 'watch_dogs_ps', name: 'Watch Dogs: Legion', icon: '📱', category: 'Action' },
      
      // Fighting Games Console
      { id: 'mortal', name: 'Mortal Kombat 1', icon: '👊', category: 'Fighting' },
      { id: 'tekken8_ps', name: 'Tekken 8', icon: '🥊', category: 'Fighting' },
      { id: 'street_fighter_ps', name: 'Street Fighter 6', icon: '👊', category: 'Fighting' },
      { id: 'guilty_gear_ps', name: 'Guilty Gear Strive', icon: '⚔️', category: 'Fighting' },
      { id: 'dragon_ball_ps', name: 'Dragon Ball FighterZ', icon: '🐉', category: 'Fighting' },
      { id: 'injustice_ps', name: 'Injustice 2', icon: '🦸', category: 'Fighting' },
      { id: 'king_fighters_ps', name: 'The King of Fighters XV', icon: '👑', category: 'Fighting' },
      { id: 'soul_calibur', name: 'Soulcalibur VI', icon: '⚔️', category: 'Fighting' },
      
      // Sports Console
      { id: 'nba', name: 'NBA 2K24', icon: '🏀', category: 'Sports' },
      { id: 'nfl_ps', name: 'Madden NFL 24', icon: '🏈', category: 'Sports' },
      { id: 'nhl_ps', name: 'NHL 24', icon: '🏒', category: 'Sports' },
      { id: 'mlb_ps', name: 'MLB The Show 23', icon: '⚾', category: 'Sports' },
      { id: 'rocket_ps', name: 'Rocket League', icon: '🚀', category: 'Sports' },
      { id: 'tony_hawk_ps', name: 'Tony Hawk\'s Pro Skater 1 + 2', icon: '🛹', category: 'Sports' },
      { id: 'wwe2k_ps', name: 'WWE 2K23', icon: '🤼', category: 'Sports' },
      { id: 'f1_ps', name: 'F1 23', icon: '🏎️', category: 'Sports' },
      { id: 'gran_turismo_ps', name: 'Gran Turismo 7', icon: '🚗', category: 'Racing' },
      
      // Racing Console
      { id: 'forza_horizon_ps', name: 'Forza Horizon 5', icon: '🏎️', category: 'Racing' },
      { id: 'need_speed_ps', name: 'Need for Speed Unbound', icon: '🎨', category: 'Racing' },
      { id: 'dirt_rally_ps', name: 'DiRT Rally 2.0', icon: '🏔️', category: 'Racing' },
      { id: 'crew_ps', name: 'The Crew Motorfest', icon: '🌺', category: 'Racing' },
      { id: 'wreckfest_ps', name: 'Wreckfest', icon: '💥', category: 'Racing' },
      { id: 'burnout_ps', name: 'Burnout Paradise Remastered', icon: '🔥', category: 'Racing' },
      
      // RPG Console
      { id: 'elden_ring_ps', name: 'Elden Ring', icon: '💍', category: 'RPG' },
      { id: 'dark_souls_ps', name: 'Dark Souls III', icon: '🗡️', category: 'RPG' },
      { id: 'sekiro_ps', name: 'Sekiro: Shadows Die Twice', icon: '🥷', category: 'RPG' },
      { id: 'skyrim_ps', name: 'The Elder Scrolls V: Skyrim', icon: '🐉', category: 'RPG' },
      { id: 'fallout4_ps', name: 'Fallout 4', icon: '☢️', category: 'RPG' },
      { id: 'mass_effect_ps', name: 'Mass Effect Legendary Edition', icon: '🚀', category: 'RPG' },
      { id: 'dragon_age_ps', name: 'Dragon Age: Inquisition', icon: '🐲', category: 'RPG' },
      { id: 'baldurs_gate_ps', name: 'Baldur\'s Gate 3', icon: '🎲', category: 'RPG' },
      { id: 'divinity_ps', name: 'Divinity: Original Sin 2', icon: '🔮', category: 'RPG' },
      { id: 'persona5_ps', name: 'Persona 5 Royal', icon: '🎭', category: 'RPG' },
      { id: 'nier_ps', name: 'NieR: Automata', icon: '🤖', category: 'RPG' },
      { id: 'final_fantasy_ps', name: 'Final Fantasy XVI', icon: '🗡️', category: 'RPG' },
      { id: 'final_fantasy7_ps', name: 'Final Fantasy VII Remake', icon: '⚔️', category: 'RPG' },
      { id: 'kingdom_hearts_ps', name: 'Kingdom Hearts III', icon: '👑', category: 'RPG' },
      { id: 'tales_arise', name: 'Tales of Arise', icon: '🌟', category: 'RPG' },
      
      // Action/Adventure Console
      { id: 'tomb_raider_ps', name: 'Shadow of the Tomb Raider', icon: '🏺', category: 'Adventure' },
      { id: 'metro_exodus', name: 'Metro Exodus', icon: '🚇', category: 'Adventure' },
      { id: 'control_ps', name: 'Control', icon: '🔮', category: 'Adventure' },
      { id: 'alan_wake', name: 'Alan Wake 2', icon: '🔦', category: 'Adventure' },
      { id: 'resident_evil_ps', name: 'Resident Evil 4', icon: '🧟', category: 'Horror' },
      { id: 'resident_evil2', name: 'Resident Evil 2', icon: '🧟‍♂️', category: 'Horror' },
      { id: 'resident_evil3', name: 'Resident Evil 3', icon: '🧟‍♀️', category: 'Horror' },
      { id: 'resident_evil_village', name: 'Resident Evil Village', icon: '🏰', category: 'Horror' },
      { id: 'silent_hill', name: 'Silent Hill 2', icon: '🌫️', category: 'Horror' },
      { id: 'dead_space', name: 'Dead Space', icon: '👽', category: 'Horror' },
      
      // Multiplayer Console
      { id: 'destiny', name: 'Destiny 2', icon: '🌌', category: 'FPS' },
      { id: 'overwatch_ps', name: 'Overwatch 2', icon: '🦸', category: 'FPS' },
      { id: 'rainbow6_ps', name: 'Rainbow Six Siege', icon: '🏠', category: 'FPS' },
      { id: 'battlefield_ps', name: 'Battlefield 2042', icon: '💣', category: 'FPS' },
      { id: 'titanfall_ps', name: 'Titanfall 2', icon: '🤖', category: 'FPS' },
      { id: 'borderlands_ps', name: 'Borderlands 3', icon: '🔫', category: 'FPS' },
      { id: 'left4dead_ps', name: 'Left 4 Dead 2', icon: '🧟‍♂️', category: 'Co-op' },
      { id: 'deep_rock_ps', name: 'Deep Rock Galactic', icon: '⛏️', category: 'Co-op' },
      { id: 'sea_thieves_ps', name: 'Sea of Thieves', icon: '🏴‍☠️', category: 'Co-op' },
      { id: 'it_takes_two_ps', name: 'It Takes Two', icon: '👫', category: 'Co-op' },
      { id: 'a_way_out_ps', name: 'A Way Out', icon: '🏃‍♂️', category: 'Co-op' },
      
      // Simulation Console
      { id: 'minecraft_ps', name: 'Minecraft', icon: '🧱', category: 'Sandbox' },
      { id: 'terraria_ps', name: 'Terraria', icon: '⛏️', category: 'Sandbox' },
      { id: 'no_mans_sky', name: 'No Man\'s Sky', icon: '🚀', category: 'Sandbox' },
      { id: 'cities_skylines_ps', name: 'Cities: Skylines', icon: '🏗️', category: 'Simulation' },
      { id: 'planet_coaster_ps', name: 'Planet Coaster', icon: '🎢', category: 'Simulation' },
      { id: 'farming_sim_ps', name: 'Farming Simulator 22', icon: '🚜', category: 'Simulation' },
      { id: 'euro_truck_ps', name: 'Euro Truck Simulator 2', icon: '🚛', category: 'Simulation' },
      { id: 'flight_sim_ps', name: 'Microsoft Flight Simulator', icon: '✈️', category: 'Simulation' },
      
      // Strategy Console
      { id: 'civilization_ps', name: 'Civilization VI', icon: '🌍', category: 'Strategy' },
      { id: 'xcom_ps', name: 'XCOM 2', icon: '👽', category: 'Strategy' },
      { id: 'total_war_ps', name: 'Total War: Rome Remastered', icon: '⚔️', category: 'Strategy' },
      { id: 'crusader_kings_ps', name: 'Crusader Kings III', icon: '👑', category: 'Strategy' },
      { id: 'stellaris_ps', name: 'Stellaris', icon: '🌌', category: 'Strategy' },
      { id: 'tropico_ps', name: 'Tropico 6', icon: '🏝️', category: 'Strategy' },
      
      // Indie Console
      { id: 'hades_ps', name: 'Hades', icon: '🔥', category: 'Indie' },
      { id: 'hollow_knight_ps', name: 'Hollow Knight', icon: '🗡️', category: 'Indie' },
      { id: 'celeste_ps', name: 'Celeste', icon: '🏔️', category: 'Indie' },
      { id: 'ori_ps', name: 'Ori and the Will of the Wisps', icon: '🌟', category: 'Indie' },
      { id: 'cuphead_ps', name: 'Cuphead', icon: '☕', category: 'Indie' },
      { id: 'undertale_ps', name: 'Undertale', icon: '❤️', category: 'Indie' },
      { id: 'stardew_valley_ps', name: 'Stardew Valley', icon: '🌾', category: 'Indie' },
      { id: 'dead_cells', name: 'Dead Cells', icon: '🗡️', category: 'Indie' },
      { id: 'katana_zero', name: 'Katana ZERO', icon: '🗡️', category: 'Indie' },
      { id: 'hotline_miami', name: 'Hotline Miami Collection', icon: '📞', category: 'Indie' },
      
      // Platform Console
      { id: 'crash_bandicoot', name: 'Crash Bandicoot 4', icon: '🦊', category: 'Platform' },
      { id: 'spyro', name: 'Spyro Reignited Trilogy', icon: '🐉', category: 'Platform' },
      { id: 'rayman_ps', name: 'Rayman Legends', icon: '🎮', category: 'Platform' },
      { id: 'sonic_ps', name: 'Sonic Frontiers', icon: '💙', category: 'Platform' },
      { id: 'mario_ps', name: 'Super Mario Odyssey', icon: '🍄', category: 'Platform' },
      
      // VR Console
      { id: 'beat_saber', name: 'Beat Saber', icon: '🎵', category: 'VR' },
      { id: 'half_life_alyx', name: 'Half-Life: Alyx', icon: '🔬', category: 'VR' },
      { id: 'astro_bot', name: 'Astro Bot Rescue Mission', icon: '🤖', category: 'VR' },
      { id: 'resident_evil7_vr', name: 'Resident Evil 7 VR', icon: '👻', category: 'VR' },
      { id: 'skyrim_vr', name: 'The Elder Scrolls V: Skyrim VR', icon: '🐲', category: 'VR' },
      { id: 'no_mans_sky_vr', name: 'No Man\'s Sky VR', icon: '🚀', category: 'VR' }
    ]
  }
];

// Enhanced DNS servers with more options
const baseDNSServers = {
  gaming: {
    ipv4: [
      { name: 'Cloudflare Gaming', primary: '1.1.1.1', secondary: '1.0.0.1', location: 'Global' },
      { name: 'Google Gaming', primary: '8.8.8.8', secondary: '8.8.4.4', location: 'Global' },
      { name: 'OpenDNS Gaming', primary: '208.67.222.222', secondary: '208.67.220.220', location: 'US' },
      { name: 'Quad9 Gaming', primary: '9.9.9.9', secondary: '149.112.112.112', location: 'Global' },
      { name: 'Level3 Gaming', primary: '4.2.2.1', secondary: '4.2.2.2', location: 'US' },
      { name: 'Comodo Gaming', primary: '8.26.56.26', secondary: '8.20.247.20', location: 'Global' },
      { name: 'Norton Gaming', primary: '199.85.126.10', secondary: '199.85.127.10', location: 'US' },
      { name: 'Verisign Gaming', primary: '64.6.64.6', secondary: '64.6.65.6', location: 'US' },
      { name: 'AdGuard Gaming', primary: '94.140.14.14', secondary: '94.140.15.15', location: 'Global' },
      { name: 'DNS.WATCH Gaming', primary: '84.200.69.80', secondary: '84.200.70.40', location: 'Germany' },
      { name: 'Alternate Gaming', primary: '76.76.19.19', secondary: '76.223.100.101', location: 'US' },
      { name: 'Freenom Gaming', primary: '80.80.80.80', secondary: '80.80.81.81', location: 'Global' },
      { name: 'Yandex Gaming', primary: '77.88.8.8', secondary: '77.88.8.1', location: 'Russia' },
      { name: 'CleanBrowsing Gaming', primary: '185.228.168.9', secondary: '185.228.169.9', location: 'Global' },
      { name: 'SafeDNS Gaming', primary: '195.46.39.39', secondary: '195.46.39.40', location: 'Global' },
      { name: 'Neustar Gaming', primary: '156.154.70.1', secondary: '156.154.71.1', location: 'US' },
      { name: 'Dyn Gaming', primary: '216.146.35.35', secondary: '216.146.36.36', location: 'US' },
      { name: 'Hurricane Electric', primary: '74.82.42.42', secondary: '74.82.42.43', location: 'US' },
      { name: 'puntCAT Gaming', primary: '109.69.8.51', secondary: '109.69.8.52', location: 'Spain' },
      { name: 'Strongarm Gaming', primary: '54.174.40.213', secondary: '52.3.100.184', location: 'US' },
      { name: 'SafeSurfer Gaming', primary: '104.197.28.121', secondary: '104.155.237.225', location: 'Global' },
      { name: 'Uncensored Gaming', primary: '91.239.100.100', secondary: '89.233.43.71', location: 'Global' },
      { name: 'OpenNIC Gaming', primary: '192.71.245.208', secondary: '94.247.43.254', location: 'Global' },
      { name: 'Mullvad Gaming', primary: '194.242.2.2', secondary: '194.242.2.3', location: 'Sweden' },
      { name: 'NextDNS Gaming', primary: '45.90.28.0', secondary: '45.90.30.0', location: 'Global' }
    ],
    ipv6: [
      { name: 'Cloudflare Gaming IPv6', primary: '2606:4700:4700::1111', secondary: '2606:4700:4700::1001', location: 'Global' },
      { name: 'Google Gaming IPv6', primary: '2001:4860:4860::8888', secondary: '2001:4860:4860::8844', location: 'Global' },
      { name: 'Quad9 Gaming IPv6', primary: '2620:fe::fe', secondary: '2620:fe::9', location: 'Global' },
      { name: 'OpenDNS Gaming IPv6', primary: '2620:119:35::35', secondary: '2620:119:53::53', location: 'US' },
      { name: 'AdGuard Gaming IPv6', primary: '2a10:50c0::ad1:ff', secondary: '2a10:50c0::ad2:ff', location: 'Global' },
      { name: 'DNS.WATCH Gaming IPv6', primary: '2001:1608:10:25::1c04:b12f', secondary: '2001:1608:10:25::9249:d69b', location: 'Germany' },
      { name: 'Yandex Gaming IPv6', primary: '2a02:6b8::feed:0ff', secondary: '2a02:6b8:0:1::feed:0ff', location: 'Russia' },
      { name: 'CleanBrowsing Gaming IPv6', primary: '2a0d:2a00:1::2', secondary: '2a0d:2a00:2::2', location: 'Global' },
      { name: 'Neustar Gaming IPv6', primary: '2610:a1:1018::1', secondary: '2610:a1:1019::1', location: 'US' },
      { name: 'Hurricane Electric IPv6', primary: '2001:470:20::2', secondary: '2001:470:0:76::2', location: 'US' },
      { name: 'Mullvad Gaming IPv6', primary: '2a07:e340::2', secondary: '2a07:e340::3', location: 'Sweden' },
      { name: 'NextDNS Gaming IPv6', primary: '2a07:a8c0::', secondary: '2a07:a8c1::', location: 'Global' }
    ]
  },
  download: {
    ipv4: [
      { name: 'Cloudflare Download', primary: '1.1.1.1', secondary: '1.0.0.1', location: 'Global' },
      { name: 'Google Download', primary: '8.8.8.8', secondary: '8.8.4.4', location: 'Global' },
      { name: 'OpenDNS Download', primary: '208.67.222.222', secondary: '208.67.220.220', location: 'US' },
      { name: 'Quad9 Download', primary: '9.9.9.9', secondary: '149.112.112.112', location: 'Global' },
      { name: 'AdGuard Download', primary: '94.140.14.14', secondary: '94.140.15.15', location: 'Global' },
      { name: 'DNS.WATCH Download', primary: '84.200.69.80', secondary: '84.200.70.40', location: 'Germany' },
      { name: 'Alternate Download', primary: '76.76.19.19', secondary: '76.223.100.101', location: 'US' },
      { name: 'Freenom Download', primary: '80.80.80.80', secondary: '80.80.81.81', location: 'Global' },
      { name: 'Yandex Download', primary: '77.88.8.8', secondary: '77.88.8.1', location: 'Russia' },
      { name: 'CleanBrowsing Download', primary: '185.228.168.168', secondary: '185.228.169.168', location: 'Global' },
      { name: 'SafeDNS Download', primary: '195.46.39.39', secondary: '195.46.39.40', location: 'Global' },
      { name: 'Neustar Download', primary: '156.154.70.1', secondary: '156.154.71.1', location: 'US' },
      { name: 'Dyn Download', primary: '216.146.35.35', secondary: '216.146.36.36', location: 'US' },
      { name: 'Hurricane Electric Download', primary: '74.82.42.42', secondary: '74.82.42.43', location: 'US' },
      { name: 'puntCAT Download', primary: '109.69.8.51', secondary: '109.69.8.52', location: 'Spain' },
      { name: 'Strongarm Download', primary: '54.174.40.213', secondary: '52.3.100.184', location: 'US' },
      { name: 'SafeSurfer Download', primary: '104.197.28.121', secondary: '104.155.237.225', location: 'Global' },
      { name: 'Uncensored Download', primary: '91.239.100.100', secondary: '89.233.43.71', location: 'Global' },
      { name: 'OpenNIC Download', primary: '192.71.245.208', secondary: '94.247.43.254', location: 'Global' },
      { name: 'Mullvad Download', primary: '194.242.2.2', secondary: '194.242.2.3', location: 'Sweden' },
      { name: 'NextDNS Download', primary: '45.90.28.0', secondary: '45.90.30.0', location: 'Global' },
      { name: 'Control D Download', primary: '76.76.2.0', secondary: '76.76.10.0', location: 'Global' },
      { name: 'Cisco Umbrella', primary: '208.67.222.123', secondary: '208.67.220.123', location: 'Global' },
      { name: 'Comodo Secure', primary: '8.26.56.26', secondary: '8.20.247.20', location: 'Global' },
      { name: 'Norton ConnectSafe', primary: '199.85.126.20', secondary: '199.85.127.20', location: 'US' }
    ],
    ipv6: [
      { name: 'Cloudflare Download IPv6', primary: '2606:4700:4700::1111', secondary: '2606:4700:4700::1001', location: 'Global' },
      { name: 'Google Download IPv6', primary: '2001:4860:4860::8888', secondary: '2001:4860:4860::8844', location: 'Global' },
      { name: 'Quad9 Download IPv6', primary: '2620:fe::fe', secondary: '2620:fe::9', location: 'Global' },
      { name: 'AdGuard Download IPv6', primary: '2a10:50c0::ad1:ff', secondary: '2a10:50c0::ad2:ff', location: 'Global' },
      { name: 'DNS.WATCH Download IPv6', primary: '2001:1608:10:25::1c04:b12f', secondary: '2001:1608:10:25::9249:d69b', location: 'Germany' },
      { name: 'Yandex Download IPv6', primary: '2a02:6b8::feed:0ff', secondary: '2a02:6b8:0:1::feed:0ff', location: 'Russia' },
      { name: 'CleanBrowsing Download IPv6', primary: '2a0d:2a00:1::1', secondary: '2a0d:2a00:2::1', location: 'Global' },
      { name: 'Neustar Download IPv6', primary: '2610:a1:1018::1', secondary: '2610:a1:1019::1', location: 'US' },
      { name: 'Hurricane Electric Download IPv6', primary: '2001:470:20::2', secondary: '2001:470:0:76::2', location: 'US' },
      { name: 'Mullvad Download IPv6', primary: '2a07:e340::2', secondary: '2a07:e340::3', location: 'Sweden' },
      { name: 'NextDNS Download IPv6', primary: '2a07:a8c0::', secondary: '2a07:a8c1::', location: 'Global' },
      { name: 'Control D Download IPv6', primary: '2606:1a40::', secondary: '2606:1a40:1::', location: 'Global' }
    ]
  },
  general: {
    ipv4: [
      { name: 'Cloudflare', primary: '1.1.1.1', secondary: '1.0.0.1', location: 'Global' },
      { name: 'Google Public DNS', primary: '8.8.8.8', secondary: '8.8.4.4', location: 'Global' },
      { name: 'OpenDNS', primary: '208.67.222.222', secondary: '208.67.220.220', location: 'US' },
      { name: 'Quad9', primary: '9.9.9.9', secondary: '149.112.112.112', location: 'Global' },
      { name: 'Level3', primary: '4.2.2.1', secondary: '4.2.2.2', location: 'US' },
      { name: 'Comodo Secure DNS', primary: '8.26.56.26', secondary: '8.20.247.20', location: 'Global' },
      { name: 'Norton ConnectSafe', primary: '199.85.126.10', secondary: '199.85.127.10', location: 'US' },
      { name: 'Verisign Public DNS', primary: '64.6.64.6', secondary: '64.6.65.6', location: 'US' },
      { name: 'AdGuard DNS', primary: '94.140.14.14', secondary: '94.140.15.15', location: 'Global' },
      { name: 'DNS.WATCH', primary: '84.200.69.80', secondary: '84.200.70.40', location: 'Germany' },
      { name: 'Alternate DNS', primary: '76.76.19.19', secondary: '76.223.100.101', location: 'US' },
      { name: 'Freenom World', primary: '80.80.80.80', secondary: '80.80.81.81', location: 'Global' },
      { name: 'Yandex DNS', primary: '77.88.8.8', secondary: '77.88.8.1', location: 'Russia' },
      { name: 'CleanBrowsing', primary: '185.228.168.168', secondary: '185.228.169.168', location: 'Global' },
      { name: 'SafeDNS', primary: '195.46.39.39', secondary: '195.46.39.40', location: 'Global' },
      { name: 'Neustar UltraDNS', primary: '156.154.70.1', secondary: '156.154.71.1', location: 'US' },
      { name: 'Dyn DNS', primary: '216.146.35.35', secondary: '216.146.36.36', location: 'US' },
      { name: 'Hurricane Electric', primary: '74.82.42.42', secondary: '74.82.42.43', location: 'US' },
      { name: 'puntCAT', primary: '109.69.8.51', secondary: '109.69.8.52', location: 'Spain' },
      { name: 'Strongarm', primary: '54.174.40.213', secondary: '52.3.100.184', location: 'US' },
      { name: 'SafeSurfer', primary: '104.197.28.121', secondary: '104.155.237.225', location: 'Global' },
      { name: 'Uncensored DNS', primary: '91.239.100.100', secondary: '89.233.43.71', location: 'Global' },
      { name: 'OpenNIC', primary: '192.71.245.208', secondary: '94.247.43.254', location: 'Global' },
      { name: 'Mullvad DNS', primary: '194.242.2.2', secondary: '194.242.2.3', location: 'Sweden' },
      { name: 'NextDNS', primary: '45.90.28.0', secondary: '45.90.30.0', location: 'Global' },
      { name: 'Control D', primary: '76.76.2.0', secondary: '76.76.10.0', location: 'Global' },
      { name: 'Cisco Umbrella', primary: '208.67.222.123', secondary: '208.67.220.123', location: 'Global' },
      { name: 'Quad101', primary: '101.101.101.101', secondary: '101.102.103.104', location: 'Taiwan' },
      { name: 'CNNIC SDNS', primary: '1.2.4.8', secondary: '210.2.4.8', location: 'China' },
      { name: 'OneDNS', primary: '117.50.10.10', secondary: '52.80.52.52', location: 'China' }
    ],
    ipv6: [
      { name: 'Cloudflare IPv6', primary: '2606:4700:4700::1111', secondary: '2606:4700:4700::1001', location: 'Global' },
      { name: 'Google Public DNS IPv6', primary: '2001:4860:4860::8888', secondary: '2001:4860:4860::8844', location: 'Global' },
      { name: 'Quad9 IPv6', primary: '2620:fe::fe', secondary: '2620:fe::9', location: 'Global' },
      { name: 'OpenDNS IPv6', primary: '2620:119:35::35', secondary: '2620:119:53::53', location: 'US' },
      { name: 'AdGuard DNS IPv6', primary: '2a10:50c0::ad1:ff', secondary: '2a10:50c0::ad2:ff', location: 'Global' },
      { name: 'DNS.WATCH IPv6', primary: '2001:1608:10:25::1c04:b12f', secondary: '2001:1608:10:25::9249:d69b', location: 'Germany' },
      { name: 'Yandex DNS IPv6', primary: '2a02:6b8::feed:0ff', secondary: '2a02:6b8:0:1::feed:0ff', location: 'Russia' },
      { name: 'CleanBrowsing IPv6', primary: '2a0d:2a00:1::1', secondary: '2a0d:2a00:2::1', location: 'Global' },
      { name: 'Neustar UltraDNS IPv6', primary: '2610:a1:1018::1', secondary: '2610:a1:1019::1', location: 'US' },
      { name: 'Hurricane Electric IPv6', primary: '2001:470:20::2', secondary: '2001:470:0:76::2', location: 'US' },
      { name: 'Mullvad DNS IPv6', primary: '2a07:e340::2', secondary: '2a07:e340::3', location: 'Sweden' },
      { name: 'NextDNS IPv6', primary: '2a07:a8c0::', secondary: '2a07:a8c1::', location: 'Global' },
      { name: 'Control D IPv6', primary: '2606:1a40::', secondary: '2606:1a40:1::', location: 'Global' }
    ]
  }
};

// Function to generate new DNS servers on each search
export const generateDNSServers = (type: 'gaming' | 'download' | 'general', ipVersion: 'ipv4' | 'ipv6', count: number = 8): DNSServer[] => {
  const servers = baseDNSServers[type][ipVersion];
  const shuffled = [...servers].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, servers.length));
  
  return selected.map((server, index) => ({
    id: `${type}_${ipVersion}_${Date.now()}_${index}`,
    name: server.name,
    primary: server.primary,
    secondary: server.secondary,
    type,
    ipVersion,
    location: server.location,
    ping: undefined
  }));
};

// Legacy exports for backward compatibility
export const gamingDNSServers: DNSServer[] = generateDNSServers('gaming', 'ipv4', 12);
export const downloadDNSServers: DNSServer[] = generateDNSServers('download', 'ipv4', 12);
export const generalDNSServers: DNSServer[] = generateDNSServers('general', 'ipv4', 12);

// Simulate ping measurement with more realistic values
export const measurePing = async (dnsServer: string): Promise<number> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
  
  // Return random ping between 10-200ms based on DNS server with more realistic distribution
  const baseLatency: { [key: string]: number } = {
    '1.1.1.1': 12,
    '1.0.0.1': 15,
    '8.8.8.8': 18,
    '8.8.4.4': 22,
    '9.9.9.9': 28,
    '149.112.112.112': 32,
    '208.67.222.222': 35,
    '208.67.220.220': 38,
    '4.2.2.1': 42,
    '4.2.2.2': 45,
    '8.26.56.26': 48,
    '8.20.247.20': 52,
    '199.85.126.10': 55,
    '199.85.127.10': 58,
    '64.6.64.6': 62,
    '64.6.65.6': 65,
    '94.140.14.14': 25,
    '94.140.15.15': 28,
    '84.200.69.80': 68,
    '84.200.70.40': 72,
    '76.76.19.19': 75,
    '76.223.100.101': 78,
    '80.80.80.80': 82,
    '80.80.81.81': 85,
    '77.88.8.8': 88,
    '77.88.8.1': 92,
    '185.228.168.168': 38,
    '185.228.169.168': 42,
    '195.46.39.39': 95,
    '195.46.39.40': 98,
    '156.154.70.1': 45,
    '156.154.71.1': 48,
    '216.146.35.35': 52,
    '216.146.36.36': 55,
    '74.82.42.42': 58,
    '74.82.42.43': 62,
    '109.69.8.51': 105,
    '109.69.8.52': 108,
    '54.174.40.213': 65,
    '52.3.100.184': 68,
    '104.197.28.121': 72,
    '104.155.237.225': 75,
    '91.239.100.100': 115,
    '89.233.43.71': 118,
    '192.71.245.208': 125,
    '94.247.43.254': 128,
    '194.242.2.2': 85,
    '194.242.2.3': 88,
    '45.90.28.0': 32,
    '45.90.30.0': 35,
    '76.76.2.0': 38,
    '76.76.10.0': 42,
    '208.67.222.123': 45,
    '208.67.220.123': 48,
    '101.101.101.101': 135,
    '101.102.103.104': 138,
    '1.2.4.8': 145,
    '210.2.4.8': 148,
    '117.50.10.10': 152,
    '52.80.52.52': 155
  };
  
  const base = baseLatency[dnsServer] || 75;
  const variation = Math.floor(Math.random() * 20) - 10; // ±10ms variation
  return Math.max(5, base + variation); // Minimum 5ms ping
};
