"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

type MenuScreen = "auth" | "register" | "character" | "main" | "garage" | "shop" | "modeSelect" | "levelSelect" | "lobby" | "countdown" | "race" | "raceResult" | "cases" | "caseOpen" | "settings" | "graphics" | "language";
type GameLang = "en" | "ru" | "uz";
type Gender = "male" | "female";
type GameMode = "solo" | "friends";

const gameTranslations: Record<GameLang, Record<string, string>> = {
  en: {
    welcome: "WELCOME COMMANDER", login: "LOGIN", register: "REGISTER", username: "Username", password: "Password", confirmPassword: "Confirm Password", createAccount: "CREATE ACCOUNT", backToLogin: "Back to Login",
    selectCharacter: "SELECT YOUR COMMANDER", male: "MALE", female: "FEMALE", confirm: "CONFIRM",
    mainMenu: "COMMAND CENTER", race: "RACE", garage: "GARAGE", shop: "SHOP", cases: "CASES", settings: "SETTINGS", language: "LANGUAGE", logout: "LOGOUT",
    selectMode: "SELECT MODE", soloRace: "SOLO RACE", soloDesc: "Race against 9 AI tanks", playWithFriends: "PLAY WITH FRIENDS", friendsDesc: "Create or join a lobby",
    lobby: "LOBBY", waitingPlayers: "Waiting for players...", players: "PLAYERS", ready: "READY", startRace: "START RACE", leaveLobby: "LEAVE", inviteFriends: "INVITE FRIENDS", copyCode: "COPY CODE", lobbyCode: "LOBBY CODE",
    yourTank: "YOUR TANK", tankLevel: "LEVEL", upgrade: "UPGRADE", maxLevel: "MAX LEVEL", changeTank: "CHANGE TANK", tankDesign: "DESIGN",
    damage: "DAMAGE", armor: "ARMOR", speed: "SPEED",
    skins: "SKINS", ammo: "AMMO", buy: "BUY", owned: "OWNED", equipped: "EQUIPPED",
    searching: "FINDING RACE...", playersFound: "PLAYERS FOUND", raceStarting: "RACE STARTING", raceInProgress: "RACE!", position: "POSITION", lap: "LAP", shoot: "SHOOT",
    controls: "W/↑ = GAS | A/D = STEER | SPACE = SHOOT", tapControls: "TAP LEFT/RIGHT TO STEER | TAP CENTER TO SHOOT",
    victory: "1ST PLACE!", top5: "TOP 5!", finished: "FINISHED", yourPlace: "YOUR PLACE", reward: "REWARD", coins: "COINS", first: "1ST - 1000 COINS!", matchesUntilCases: "RACES UNTIL CASES", claimReward: "CLAIM REWARD",
    yourCases: "YOUR CASES", selectCase: "SELECT A CASE TO OPEN", openCase: "OPEN CASE", youWon: "YOU WON!", claim: "CLAIM",
    graphics: "GRAPHICS", quality: "QUALITY", low: "LOW", medium: "MEDIUM", high: "HIGH", ultra: "ULTRA", shadows: "SHADOWS", particles: "PARTICLES", antiAliasing: "ANTI-ALIASING", vsync: "V-SYNC", on: "ON", off: "OFF", apply: "APPLY",
    back: "BACK", play: "PLAY", quit: "QUIT", loading: "LOADING...",
  },
  ru: {
    welcome: "ДОБРО ПОЖАЛОВАТЬ, КОМАНДИР", login: "ВХОД", register: "РЕГИСТРАЦИЯ", username: "Имя пользователя", password: "Пароль", confirmPassword: "Подтвердите пароль", createAccount: "СОЗДАТЬ АККАУНТ", backToLogin: "Вернуться к входу",
    selectCharacter: "ВЫБЕРИТЕ КОМАНДИРА", male: "МУЖЧИНА", female: "ЖЕНЩИНА", confirm: "ПОДТВЕРДИТЬ",
    mainMenu: "КОМАНДНЫЙ ЦЕНТР", race: "ГОНКА", garage: "ГАРАЖ", shop: "МАГАЗИН", cases: "КЕЙСЫ", settings: "НАСТРОЙКИ", language: "ЯЗЫК", logout: "ВЫХОД",
    selectMode: "ВЫБОР РЕЖИМА", soloRace: "ОДИНОЧНАЯ ГОНКА", soloDesc: "Гонка против 9 ИИ танков", playWithFriends: "С ДРУЗЬЯМИ", friendsDesc: "Создать или войти в лобби",
    lobby: "ЛОББИ", waitingPlayers: "Ожидание игроков...", players: "ИГРОКИ", ready: "ГОТОВ", startRace: "НАЧАТЬ ГОНКУ", leaveLobby: "ВЫЙТИ", inviteFriends: "ПРИГЛАСИТЬ ДРУЗЕЙ", copyCode: "КОПИРОВАТЬ КОД", lobbyCode: "КОД ЛОББИ",
    yourTank: "ВАШ ТАНК", tankLevel: "УРОВЕНЬ", upgrade: "УЛУЧШИТЬ", maxLevel: "МАКС УРОВЕНЬ", changeTank: "СМЕНИТЬ ТАНК", tankDesign: "ДИЗАЙН",
    damage: "УРОН", armor: "БРОНЯ", speed: "СКОРОСТЬ",
    skins: "СКИНЫ", ammo: "СНАРЯДЫ", buy: "КУПИТЬ", owned: "КУПЛЕНО", equipped: "ОДЕТО",
    searching: "ПОИСК ГОНКИ...", playersFound: "ИГРОКОВ НАЙДЕНО", raceStarting: "ГОНКА НАЧИНАЕТСЯ", raceInProgress: "ГОНКА!", position: "ПОЗИЦИЯ", lap: "КРУГ", shoot: "ВЫСТРЕЛ",
    controls: "W/↑ = ГАЗ | A/D = РУЛЬ | ПРОБЕЛ = ВЫСТРЕЛ", tapControls: "НАЖМИТЕ ЛЕВО/ПРАВО | ЦЕНТР = ВЫСТРЕЛ",
    victory: "1-Е МЕСТО!", top5: "ТОП 5!", finished: "ФИНИШ", yourPlace: "ВАШЕ МЕСТО", reward: "НАГРАДА", coins: "МОНЕТЫ", first: "1-Е МЕСТО - 1000 МОНЕТ!", matchesUntilCases: "ГОНОК ДО КЕЙСОВ", claimReward: "ЗАБРАТЬ НАГРАДУ",
    yourCases: "ВАШИ КЕЙСЫ", selectCase: "ВЫБЕРИТЕ КЕЙС", openCase: "ОТКРЫТЬ КЕЙС", youWon: "ВЫ ВЫИГРАЛИ!", claim: "ЗАБРАТЬ",
    graphics: "ГРАФИКА", quality: "КАЧЕСТВО", low: "НИЗКОЕ", medium: "СРЕДНЕЕ", high: "ВЫСОКОЕ", ultra: "УЛЬТРА", shadows: "ТЕНИ", particles: "ЧАСТИЦЫ", antiAliasing: "СГЛАЖИВАНИЕ", vsync: "В-СИНК", on: "ВКЛ", off: "ВЫКЛ", apply: "ПРИМЕНИТЬ",
    back: "НАЗАД", play: "ИГРАТЬ", quit: "ВЫХОД", loading: "ЗАГРУЗКА...",
  },
  uz: {
    welcome: "XUSH KELIBSIZ, QOMONDOR", login: "KIRISH", register: "RO'YXATDAN O'TISH", username: "Foydalanuvchi nomi", password: "Parol", confirmPassword: "Parolni tasdiqlang", createAccount: "HISOB YARATISH", backToLogin: "Kirishga qaytish",
    selectCharacter: "QOMONDIRINGIZNI TANLANG", male: "ERKAK", female: "AYOL", confirm: "TASDIQLASH",
    mainMenu: "QOMONDON MARKAZI", race: "POYGA", garage: "GARAJ", shop: "DO'KON", cases: "KEYSLAR", settings: "SOZLAMALAR", language: "TIL", logout: "CHIQISH",
    selectMode: "REJIM TANLASH", soloRace: "YOLG'IZ POYGA", soloDesc: "9 ta AI tanklarga qarshi", playWithFriends: "DO'STLAR BILAN", friendsDesc: "Lobbi yaratish yoki qo'shilish",
    lobby: "LOBBI", waitingPlayers: "O'yinchilar kutilmoqda...", players: "O'YINCHILAR", ready: "TAYYOR", startRace: "POYGANI BOSHLASH", leaveLobby: "CHIQISH", inviteFriends: "DO'STLARNI TAKLIF QILISH", copyCode: "KODNI NUSXALASH", lobbyCode: "LOBBI KODI",
    yourTank: "TANKINGIZ", tankLevel: "DARAJA", upgrade: "YANGILASH", maxLevel: "MAKS DARAJA", changeTank: "TANK ALMASHTIRISH", tankDesign: "DIZAYN",
    damage: "ZARAR", armor: "ZIRH", speed: "TEZLIK",
    skins: "SKINLAR", ammo: "O'QLAR", buy: "SOTIB OLISH", owned: "SOTIB OLINGAN", equipped: "KIYILGAN",
    searching: "POYGA QIDIRILMOQDA...", playersFound: "O'YINCHILAR TOPILDI", raceStarting: "POYGA BOSHLANMOQDA", raceInProgress: "POYGA!", position: "POZITSIYA", lap: "AYLANISH", shoot: "OTISH",
    controls: "W/↑ = GAZ | A/D = BOSHQARISH | BO'SH JOY = OTISH", tapControls: "CHAP/O'NG BOSING | MARKAZ = OTISH",
    victory: "1-O'RIN!", top5: "TOP 5!", finished: "TUGADI", yourPlace: "SIZNING O'RNINGIZ", reward: "MUKOFOT", coins: "TANGALAR", first: "1-O'RIN - 1000 TANGA!", matchesUntilCases: "KEYSLARGACHA POYGALAR", claimReward: "MUKOFOTNI OLISH",
    yourCases: "KEYSLARINGIZ", selectCase: "KEYS TANLANG", openCase: "KEYS OCHISH", youWon: "SIZ YUTDINGIZ!", claim: "OLISH",
    graphics: "GRAFIKA", quality: "SIFAT", low: "PAST", medium: "O'RTA", high: "YUQORI", ultra: "ULTRA", shadows: "SOYALAR", particles: "ZARRACHALAR", antiAliasing: "TEKISLASH", vsync: "V-SINX", on: "YOQISH", off: "O'CHIRISH", apply: "QO'LLASH",
    back: "ORQAGA", play: "O'YNASH", quit: "CHIQISH", loading: "YUKLANMOQDA...",
  },
};

const tankSkins = [
  { id: "default", name: "Standard", color: "#4a5568", price: 0 },
  { id: "camo", name: "Desert Camo", color: "#8B7355", price: 500 },
  { id: "forest", name: "Forest Camo", color: "#3d5c3d", price: 500 },
  { id: "urban", name: "Urban Gray", color: "#5a5a5a", price: 750 },
  { id: "gold", name: "Gold Elite", color: "#d69e2e", price: 2000 },
  { id: "neon", name: "Neon Strike", color: "#ed64a6", price: 1500 },
  { id: "arctic", name: "Arctic White", color: "#a8d8ea", price: 1000 },
  { id: "lava", name: "Molten Lava", color: "#ff4500", price: 1800 },
];

const ammoTypes = [
  { id: "standard", name: "Standard", damage: 10, price: 0 },
  { id: "armor_piercing", name: "Armor Piercing", damage: 15, price: 300 },
  { id: "explosive", name: "Explosive", damage: 20, price: 500 },
  { id: "plasma", name: "Plasma", damage: 25, price: 800 },
];

const tankComponents = [
  { id: "engine", name: "Engine", icon: "⚙️", stat: "speed", maxLevel: 10 },
  { id: "cannon", name: "Cannon", icon: "💥", stat: "damage", maxLevel: 10 },
  { id: "armor", name: "Armor", icon: "🛡️", stat: "armor", maxLevel: 10 },
  { id: "tracks", name: "Tracks", icon: "⛓️", stat: "handling", maxLevel: 10 },
];

const caseRewards = [
  { type: "coins", amount: 100, rarity: "common", label: "100 Coins" },
  { type: "coins", amount: 500, rarity: "rare", label: "500 Coins" },
  { type: "skin", id: "camo", rarity: "rare", label: "Desert Camo" },
  { type: "skin", id: "forest", rarity: "rare", label: "Forest Camo" },
  { type: "coins", amount: 1000, rarity: "epic", label: "1000 Coins" },
  { type: "skin", id: "gold", rarity: "legendary", label: "Gold Elite!" },
  { type: "skin", id: "lava", rarity: "legendary", label: "Molten Lava!" },
];

const aiNames = ["Thunder", "Blaze", "Shadow", "Storm", "Viper", "Titan", "Ghost", "Fury", "Hawk"];
const aiColors = ["#e53e3e", "#dd6b20", "#38a169", "#3182ce", "#805ad5", "#d53f8c", "#319795", "#718096", "#d69e2e"];

// Level name parts for procedural generation
const levelNamePrefixes = ["Training", "Desert", "Urban", "Arctic", "Volcanic", "Night", "Elite", "Champion's", "Cyber", "Neon", "Shadow", "Thunder", "Crystal", "Inferno", "Frozen", "Storm", "Toxic", "Quantum", "Plasma", "Omega"];
const levelNameSuffixes = ["Ground", "Storm", "Warfare", "Base", "Path", "Ops", "Arena", "Road", "Zone", "Circuit", "Track", "Valley", "Peak", "Core", "Nexus", "Domain", "Realm", "Frontier", "Wastes", "Gauntlet"];

// Generate level data dynamically
const generateLevel = (id: number) => {
  const difficulty = id <= 2 ? "Easy" : id <= 5 ? "Medium" : id <= 10 ? "Hard" : id <= 20 ? "Expert" : "Legendary";
  // AI gets progressively faster but caps at reasonable level
  const aiSpeedMod = Math.min(0.7 + (id - 1) * 0.03, 1.3);
  // Rewards scale with level
  const rewardMod = 1.0 + (id - 1) * 0.15;
  // Generate name from parts based on level id
  const prefixIndex = (id - 1) % levelNamePrefixes.length;
  const suffixIndex = Math.floor((id - 1) / levelNamePrefixes.length) % levelNameSuffixes.length;
  const name = `${levelNamePrefixes[prefixIndex]} ${levelNameSuffixes[suffixIndex]}`;

  return { id, name, difficulty, aiSpeedMod, rewardMod };
};

// Calculate stars based on finish position
const getStarsFromPosition = (position: number): number => {
  if (position <= 2) return 3; // Top 1-2 = 3 stars
  if (position <= 5) return 2; // Top 3-5 = 2 stars
  return 1; // Top 6-10 = 1 star
};

interface GameSaveData {
  playerName: string;
  gender: Gender;
  coins: number;
  tankLevel: number;
  currentSkin: string;
  currentAmmo: string;
  ownedSkins: string[];
  ownedAmmo: string[];
  matchesPlayed: number;
  availableCases: number;
  gameLang: GameLang;
  graphicsQuality: number;
  shadows: boolean;
  particles: boolean;
  antiAliasing: boolean;
  vsync: boolean;
  tankComponentLevels: Record<string, number>;
  levelStars: Record<number, number>; // levelId -> stars (1-3)
}

const SAVE_KEY = "bi3_tanks_save";

export default function TankGamePage() {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState<MenuScreen>("auth");
  const [gameLang, setGameLang] = useState<GameLang>("en");
  const [gameMode, setGameMode] = useState<GameMode>("solo");
  const gameRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Auth states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Player states
  const [playerName, setPlayerName] = useState("");
  const [gender, setGender] = useState<Gender>("male");
  const [coins, setCoins] = useState(1000);
  const [tankLevel, setTankLevel] = useState(1);
  const [currentSkin, setCurrentSkin] = useState("default");
  const [currentAmmo, setCurrentAmmo] = useState("standard");
  const [ownedSkins, setOwnedSkins] = useState(["default"]);
  const [ownedAmmo, setOwnedAmmo] = useState(["standard"]);
  const [matchesPlayed, setMatchesPlayed] = useState(0);
  const [availableCases, setAvailableCases] = useState(0);

  // Graphics settings
  const [graphicsQuality, setGraphicsQuality] = useState(2);
  const [shadows, setShadows] = useState(true);
  const [particles, setParticles] = useState(true);
  const [antiAliasing, setAntiAliasing] = useState(true);
  const [vsync, setVsync] = useState(true);

  // Lobby states
  const [lobbyCode, setLobbyCode] = useState("");
  const [lobbyPlayers, setLobbyPlayers] = useState<{name: string, ready: boolean}[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Race states
  const [countdown, setCountdown] = useState(3);
  const [raceTime, setRaceTime] = useState(0);
  const [playerPosition, setPlayerPosition] = useState(0);
  const [playerLane, setPlayerLane] = useState(1);
  const [playerSpeed, setPlayerSpeed] = useState(0);
  const [playerPlace, setPlayerPlace] = useState(0);
  const [raceReward, setRaceReward] = useState(0);
  const [isAccelerating, setIsAccelerating] = useState(false);
  const [bullets, setBullets] = useState<{x: number, y: number, lane: number}[]>([]);
  const [lastShot, setLastShot] = useState(0);
  const [aiTanks, setAiTanks] = useState<{name: string, color: string, position: number, lane: number, speed: number, stunned: number; lastShot: number}[]>([]);
  const [raceFinished, setRaceFinished] = useState(false);
  const [finishOrder, setFinishOrder] = useState<string[]>([]);

  // Player health system
  const [playerHealth, setPlayerHealth] = useState(100);
  const [playerStunned, setPlayerStunned] = useState(0);
  const [enemyBullets, setEnemyBullets] = useState<{x: number, y: number, lane: number, fromAi: string}[]>([]);
  const [damageFlash, setDamageFlash] = useState(false);

  // Case states
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [caseReward, setCaseReward] = useState<typeof caseRewards[0] | null>(null);
  const [isOpening, setIsOpening] = useState(false);

  // Shop tab
  const [shopTab, setShopTab] = useState<"skins" | "ammo">("skins");

  // Tank component upgrades
  const [tankComponentLevels, setTankComponentLevels] = useState<Record<string, number>>({
    engine: 1, cannon: 1, armor: 1, tracks: 1
  });

  // Level system
  const [levelStars, setLevelStars] = useState<Record<number, number>>({});
  const [currentLevel, setCurrentLevel] = useState(1);
  const [earnedStars, setEarnedStars] = useState(0);

  const gt = (key: string) => gameTranslations[gameLang][key] || key;
  const qualityLabels = ["low", "medium", "high", "ultra"];

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Calculate upgrade costs
  const getComponentUpgradeCost = (componentId: string) => {
    const level = tankComponentLevels[componentId] || 1;
    return Math.floor(100 * Math.pow(1.5, level - 1));
  };

  // Load saved game data on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(SAVE_KEY);
        if (saved) {
          const data: GameSaveData = JSON.parse(saved);
          setPlayerName(data.playerName || "");
          setGender(data.gender || "male");
          setCoins(data.coins ?? 1000);
          setTankLevel(data.tankLevel ?? 1);
          setCurrentSkin(data.currentSkin || "default");
          setCurrentAmmo(data.currentAmmo || "standard");
          setOwnedSkins(data.ownedSkins || ["default"]);
          setOwnedAmmo(data.ownedAmmo || ["standard"]);
          setMatchesPlayed(data.matchesPlayed ?? 0);
          setAvailableCases(data.availableCases ?? 0);
          setGameLang(data.gameLang || "en");
          setGraphicsQuality(data.graphicsQuality ?? 2);
          setShadows(data.shadows ?? true);
          setParticles(data.particles ?? true);
          setAntiAliasing(data.antiAliasing ?? true);
          setVsync(data.vsync ?? true);
          if (data.tankComponentLevels) setTankComponentLevels(data.tankComponentLevels);
          if (data.levelStars) setLevelStars(data.levelStars);
          if (data.playerName) setCurrentScreen("main");
        }
      } catch (e) {
        console.error("Failed to load save data:", e);
      }
      setIsLoaded(true);
    }
  }, []);

  // Save game data
  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') return;
    const saveData: GameSaveData = {
      playerName, gender, coins, tankLevel, currentSkin, currentAmmo,
      ownedSkins, ownedAmmo, matchesPlayed, availableCases, gameLang,
      graphicsQuality, shadows, particles, antiAliasing, vsync, tankComponentLevels, levelStars,
    };
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
    } catch (e) {
      console.error("Failed to save game data:", e);
    }
  }, [isLoaded, playerName, gender, coins, tankLevel, currentSkin, currentAmmo, ownedSkins, ownedAmmo, matchesPlayed, availableCases, gameLang, graphicsQuality, shadows, particles, antiAliasing, vsync, tankComponentLevels, levelStars]);

  // Calculate tank stats
  const getTankStats = () => ({
    damage: 10 + (tankComponentLevels.cannon - 1) * 8,
    armor: 30 + (tankComponentLevels.armor - 1) * 12,
    speed: 50 + (tankComponentLevels.engine - 1) * 10,
    handling: 50 + (tankComponentLevels.tracks - 1) * 10,
  });

  const FINISH_LINE = 500;
  const engineLevel = tankComponentLevels.engine || 1;
  const MAX_SPEED = 1.5 + engineLevel * 0.12;
  const currentLevelData = generateLevel(currentLevel);
  const AI_BASE_SPEED = 0.7 * currentLevelData.aiSpeedMod;
  const PLAYER_ARMOR = 30 + (tankComponentLevels.armor - 1) * 12;

  // Check if level is unlocked (level 1 always unlocked, others need 2+ stars on previous level)
  const isLevelUnlocked = (levelId: number): boolean => {
    if (levelId === 1) return true;
    const prevLevelStars = levelStars[levelId - 1] || 0;
    return prevLevelStars >= 2;
  };

  // Upgrade tank component
  const upgradeComponent = (componentId: string) => {
    const level = tankComponentLevels[componentId] || 1;
    const cost = getComponentUpgradeCost(componentId);
    if (coins >= cost && level < 10) {
      setCoins(prev => prev - cost);
      setTankComponentLevels(prev => ({ ...prev, [componentId]: level + 1 }));
    }
  };

  // Auth handlers
  const handleLogin = () => {
    if (username.trim()) {
      setPlayerName(username);
      setCurrentScreen("character");
    }
  };

  const handleRegister = () => {
    if (username.trim() && password.trim()) {
      setPlayerName(username);
      setCurrentScreen("character");
    }
  };

  // Start race
  const startRace = useCallback(() => {
    const ais = aiNames.map((name, i) => ({
      name, color: aiColors[i], position: 0, lane: i % 3, speed: 0, stunned: 0, lastShot: 0,
    }));
    setAiTanks(ais);
    setPlayerPosition(0);
    setPlayerLane(1);
    setPlayerSpeed(0);
    setPlayerHealth(100);
    setPlayerStunned(0);
    setEnemyBullets([]);
    setRaceFinished(false);
    setFinishOrder([]);
    setBullets([]);
    setCountdown(3);
    setCurrentScreen("countdown");

    let count = 3;
    const countdownInterval = setInterval(() => {
      count--;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(countdownInterval);
        setCurrentScreen("race");
        setRaceTime(0);
      }
    }, 1000);
  }, []);

  // Handle keyboard input
  useEffect(() => {
    if (currentScreen !== "race") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "w" || e.key === "W" || e.key === "ArrowUp") setIsAccelerating(true);
      if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft") setPlayerLane(prev => Math.max(0, prev - 1));
      if (e.key === "d" || e.key === "D" || e.key === "ArrowRight") setPlayerLane(prev => Math.min(2, prev + 1));
      if (e.key === " ") {
        e.preventDefault();
        const now = Date.now();
        if (now - lastShot > 500) {
          setLastShot(now);
          setBullets(prev => [...prev, { x: playerPosition + 5, y: 0, lane: playerLane }]);
        }
      }
      if (e.key === "Escape") router.push("/services/games");
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "w" || e.key === "W" || e.key === "ArrowUp") setIsAccelerating(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [currentScreen, playerPosition, playerLane, lastShot, router]);

  // Game loop
  useEffect(() => {
    if (currentScreen !== "race" || raceFinished) return;
    const gameLoop = setInterval(() => {
      const now = Date.now();
      setRaceTime(prev => prev + 1);

      if (playerStunned > 0) setPlayerStunned(prev => prev - 1);

      // Update player speed and position
      setPlayerSpeed(prev => {
        if (playerStunned > 0) return Math.max(prev - 0.15, 0);
        if (isAccelerating) return Math.min(prev + 0.08, MAX_SPEED);
        return Math.max(prev - 0.05, 0);
      });

      setPlayerPosition(prev => {
        const newPos = prev + playerSpeed;
        if (newPos >= FINISH_LINE && !finishOrder.includes("player")) {
          setFinishOrder(order => [...order, "player"]);
        }
        return Math.min(newPos, FINISH_LINE);
      });

      // Update AI
      setAiTanks(prev => prev.map(ai => {
        if (ai.stunned > 0) return { ...ai, stunned: ai.stunned - 1, speed: 0 };
        const targetSpeed = AI_BASE_SPEED + Math.random() * 0.5;
        const newSpeed = ai.speed + (targetSpeed - ai.speed) * 0.04;
        const newPosition = Math.min(ai.position + newSpeed, FINISH_LINE);
        let newLane = ai.lane;
        if (Math.random() < 0.008) newLane = Math.floor(Math.random() * 3);

        let newLastShot = ai.lastShot;
        const distToPlayer = ai.position - playerPosition;
        if (distToPlayer > 5 && distToPlayer < 60 && now - ai.lastShot > 2500 + Math.random() * 3000) {
          if (Math.abs(ai.lane - playerLane) <= 1 && Math.random() < 0.25) {
            setEnemyBullets(bullets => [...bullets, { x: ai.position - 3, y: 0, lane: ai.lane, fromAi: ai.name }]);
            newLastShot = now;
          }
        }
        return { ...ai, speed: newSpeed, position: newPosition, lane: newLane, lastShot: newLastShot };
      }));

      // Update bullets
      setBullets(prev => {
        const newBullets = prev.map(b => ({ ...b, x: b.x + 2.0 })).filter(b => b.x < FINISH_LINE + 10);
        newBullets.forEach(bullet => {
          setAiTanks(ais => ais.map(ai => {
            if (ai.lane === bullet.lane && Math.abs(ai.position - bullet.x) < 6 && ai.stunned <= 0) {
              return { ...ai, stunned: 50, speed: 0 };
            }
            return ai;
          }));
        });
        return newBullets.filter(b => !aiTanks.some(ai => ai.lane === b.lane && Math.abs(ai.position - b.x) < 6));
      });

      // Update enemy bullets
      setEnemyBullets(prev => {
        const newBullets = prev.map(b => ({ ...b, x: b.x - 1.5 })).filter(b => b.x > playerPosition - 20);
        newBullets.forEach(bullet => {
          if (bullet.lane === playerLane && Math.abs(bullet.x - playerPosition) < 5 && playerStunned <= 0) {
            const damage = Math.max(5, 15 - Math.floor(PLAYER_ARMOR / 10));
            setPlayerHealth(hp => Math.max(0, hp - damage));
            setPlayerStunned(20);
            setDamageFlash(true);
            setTimeout(() => setDamageFlash(false), 200);
          }
        });
        return newBullets.filter(b => !(b.lane === playerLane && Math.abs(b.x - playerPosition) < 5));
      });

      // Check finish
      setAiTanks(prev => {
        prev.forEach(ai => {
          if (ai.position >= FINISH_LINE && !finishOrder.includes(ai.name)) {
            setFinishOrder(order => [...order, ai.name]);
          }
        });
        return prev;
      });
    }, 50);
    return () => clearInterval(gameLoop);
  }, [currentScreen, raceFinished, isAccelerating, playerSpeed, playerStunned, playerLane, playerPosition, finishOrder, MAX_SPEED, AI_BASE_SPEED, PLAYER_ARMOR, aiTanks]);

  // Check race end
  useEffect(() => {
    if (finishOrder.length >= 10 && !raceFinished) {
      setRaceFinished(true);
      const place = finishOrder.indexOf("player") + 1;
      setPlayerPlace(place);

      // Calculate stars based on position
      const stars = getStarsFromPosition(place);
      setEarnedStars(stars);

      // Update level stars (keep best score)
      setLevelStars(prev => ({
        ...prev,
        [currentLevel]: Math.max(prev[currentLevel] || 0, stars)
      }));

      // Calculate reward with level modifier
      let baseReward = 0;
      if (place === 1) baseReward = 1000;
      else if (place === 2) baseReward = 500;
      else if (place === 3) baseReward = 300;
      else if (place === 4) baseReward = 200;
      else if (place === 5) baseReward = 100;
      else baseReward = 20;
      const reward = Math.floor(baseReward * currentLevelData.rewardMod);
      setRaceReward(reward);

      const newMatchCount = matchesPlayed + 1;
      setMatchesPlayed(newMatchCount);
      if (newMatchCount % 5 === 0) setAvailableCases(prev => prev + 6);
      setTimeout(() => setCurrentScreen("raceResult"), 1500);
    }
  }, [finishOrder, raceFinished, matchesPlayed, currentLevel, currentLevelData.rewardMod]);

  // Claim reward
  const claimRaceReward = () => {
    setCoins(prev => prev + raceReward);
    setCurrentScreen("levelSelect");
  };

  // Open case
  const openCase = () => {
    if (selectedCase === null || availableCases <= 0) return;
    setIsOpening(true);
    setCurrentScreen("caseOpen");
    setTimeout(() => {
      const reward = caseRewards[Math.floor(Math.random() * caseRewards.length)];
      setCaseReward(reward);
      setIsOpening(false);
      setAvailableCases(prev => prev - 1);
      if (reward.type === "coins") setCoins(prev => prev + (reward.amount || 0));
      else if (reward.type === "skin" && reward.id) setOwnedSkins(prev => [...new Set([...prev, reward.id!])]);
      else if (reward.type === "ammo" && reward.id) setOwnedAmmo(prev => [...new Set([...prev, reward.id!])]);
    }, 2000);
  };

  // Buy items
  const buySkin = (skin: typeof tankSkins[0]) => {
    if (coins >= skin.price && !ownedSkins.includes(skin.id)) {
      setCoins(prev => prev - skin.price);
      setOwnedSkins(prev => [...prev, skin.id]);
    }
  };

  const buyAmmo = (ammo: typeof ammoTypes[0]) => {
    if (coins >= ammo.price && !ownedAmmo.includes(ammo.id)) {
      setCoins(prev => prev - ammo.price);
      setOwnedAmmo(prev => [...prev, ammo.id]);
    }
  };

  // Render tank
  const renderTank = (size: "small" | "large" = "large") => {
    const skinColor = tankSkins.find(s => s.id === currentSkin)?.color || "#4a5568";
    const scale = size === "large" ? 1 : 0.6;
    return (
      <div className="relative" style={{ transform: `scale(${scale})` }}>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/30 rounded-full blur-sm" />
        <div className="relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-6 rounded-t-lg border-2 border-black/20"
            style={{ background: `linear-gradient(180deg, ${skinColor} 0%, ${skinColor}99 100%)`, boxShadow: `0 0 20px ${skinColor}40` }}>
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-8 -rotate-45 origin-bottom rounded-full"
              style={{ background: `linear-gradient(90deg, #1a1a1a 0%, #333 50%, #1a1a1a 100%)`, transform: "translateX(-50%) translateY(-100%) rotate(-15deg)" }} />
          </div>
          <div className="w-24 h-10 rounded-lg border-2 border-black/20"
            style={{ background: `linear-gradient(180deg, ${skinColor} 0%, ${skinColor}bb 50%, ${skinColor}88 100%)`, boxShadow: `inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.3), 0 4px 20px ${skinColor}40` }}>
            <div className="absolute top-2 left-2 w-4 h-4 rounded bg-black/20" />
            <div className="absolute top-2 right-2 w-4 h-4 rounded bg-black/20" />
          </div>
          <div className="absolute -bottom-2 left-0 w-full flex justify-between px-1">
            <div className="w-8 h-4 bg-gradient-to-b from-gray-700 to-gray-900 rounded-sm border border-gray-600">
              <div className="flex h-full">{[...Array(4)].map((_, i) => <div key={i} className="flex-1 border-r border-gray-600 last:border-0" />)}</div>
            </div>
            <div className="w-8 h-4 bg-gradient-to-b from-gray-700 to-gray-900 rounded-sm border border-gray-600">
              <div className="flex h-full">{[...Array(4)].map((_, i) => <div key={i} className="flex-1 border-r border-gray-600 last:border-0" />)}</div>
            </div>
          </div>
        </div>
        {size === "large" && (
          <div className="absolute -top-6 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-xs font-bold text-black border-2 border-yellow-300 shadow-lg">
            {tankLevel}
          </div>
        )}
      </div>
    );
  };

  // Screen title
  const getScreenTitle = () => {
    switch (currentScreen) {
      case "auth": return gt("login");
      case "register": return gt("register");
      case "character": return gt("selectCharacter");
      case "main": return gt("mainMenu");
      case "garage": return gt("garage");
      case "shop": return gt("shop");
      case "modeSelect": return gt("selectMode");
      case "levelSelect": return "SELECT LEVEL";
      case "lobby": return gt("lobby");
      case "countdown": return "";
      case "race": return "";
      case "raceResult": return "";
      case "cases": return gt("cases");
      case "caseOpen": return gt("openCase");
      case "settings": return gt("settings");
      case "graphics": return gt("graphics");
      case "language": return gt("language");
      default: return "";
    }
  };

  // Auth screen
  const renderAuth = () => (
    <div className="space-y-4 px-2 max-w-md mx-auto">
      <div className="text-center mb-4">
        <div className="text-2xl font-bold text-[var(--neon-green)]">{gt("welcome")}</div>
      </div>
      <div className="space-y-3">
        <input type="text" placeholder={gt("username")} value={username} onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 bg-black/50 border border-[var(--neon-green)]/30 rounded-lg text-white text-sm font-mono focus:border-[var(--neon-green)] focus:outline-none" />
        <input type="password" placeholder={gt("password")} value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-black/50 border border-[var(--neon-green)]/30 rounded-lg text-white text-sm font-mono focus:border-[var(--neon-green)] focus:outline-none" />
      </div>
      <div className="flex gap-2">
        <button onClick={handleLogin} className="flex-1 py-3 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all text-sm">{gt("login")}</button>
        <button onClick={() => setCurrentScreen("register")} className="flex-1 py-3 border border-[var(--neon-green)]/50 text-[var(--neon-green)] font-bold rounded-lg hover:bg-[var(--neon-green)]/10 transition-all text-sm">{gt("register")}</button>
      </div>
      <Link href="/services/games" className="block w-full py-2 text-[var(--muted)] text-xs hover:text-white transition-colors text-center">{gt("quit")}</Link>
    </div>
  );

  // Register screen
  const renderRegister = () => (
    <div className="space-y-4 px-2 max-w-md mx-auto">
      <div className="text-center mb-4"><div className="text-2xl font-bold text-[var(--neon-green)]">{gt("register")}</div></div>
      <div className="space-y-3">
        <input type="text" placeholder={gt("username")} value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-3 bg-black/50 border border-[var(--neon-green)]/30 rounded-lg text-white text-sm font-mono focus:border-[var(--neon-green)] focus:outline-none" />
        <input type="password" placeholder={gt("password")} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 bg-black/50 border border-[var(--neon-green)]/30 rounded-lg text-white text-sm font-mono focus:border-[var(--neon-green)] focus:outline-none" />
        <input type="password" placeholder={gt("confirmPassword")} className="w-full px-4 py-3 bg-black/50 border border-[var(--neon-green)]/30 rounded-lg text-white text-sm font-mono focus:border-[var(--neon-green)] focus:outline-none" />
      </div>
      <button onClick={handleRegister} className="w-full py-3 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all text-sm">{gt("createAccount")}</button>
      <button onClick={() => setCurrentScreen("auth")} className="w-full py-2 text-[var(--muted)] text-xs hover:text-white transition-colors">{gt("backToLogin")}</button>
    </div>
  );

  // Character select
  const renderCharacterSelect = () => (
    <div className="space-y-4 text-center max-w-md mx-auto">
      <div className="text-lg font-bold text-[var(--neon-green)] mb-4">{gt("selectCharacter")}</div>
      <div className="flex justify-center gap-4">
        {(["male", "female"] as Gender[]).map((g) => (
          <button key={g} onClick={() => setGender(g)} className={`relative p-4 rounded-xl border-2 transition-all ${gender === g ? "border-[var(--neon-green)] bg-[var(--neon-green)]/10 shadow-[0_0_20px_var(--neon-green)/30]" : "border-[var(--border)] hover:border-[var(--neon-green)]/50"}`}>
            <div className="w-16 h-20 relative">
              <div className={`w-10 h-10 mx-auto rounded-full ${g === "male" ? "bg-blue-500" : "bg-pink-500"}`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-amber-200" />
              </div>
              <div className={`w-12 h-10 mx-auto mt-1 rounded-t-lg ${g === "male" ? "bg-blue-600" : "bg-pink-600"}`} />
            </div>
            <div className="text-sm font-mono mt-2 text-white">{gt(g)}</div>
            {gender === g && <div className="absolute -top-1 -right-1 w-6 h-6 bg-[var(--neon-green)] rounded-full flex items-center justify-center text-black text-xs">✓</div>}
          </button>
        ))}
      </div>
      <button onClick={() => setCurrentScreen("main")} className="w-full py-4 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all">{gt("confirm")}</button>
    </div>
  );

  // Main menu
  const renderMainMenu = () => (
    <div className="space-y-3 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-full ${gender === "male" ? "bg-blue-500" : "bg-pink-500"} flex items-center justify-center text-sm`}>{playerName.charAt(0).toUpperCase()}</div>
          <span className="text-sm font-mono text-white">{playerName}</span>
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-yellow-500/20 rounded-full">
          <span className="text-yellow-400 text-sm">🪙</span>
          <span className="text-sm font-bold text-yellow-400">{coins.toLocaleString()}</span>
        </div>
      </div>
      {[
        { label: "BATTLE", action: () => setCurrentScreen("modeSelect"), color: "from-red-500 to-orange-600", icon: "⚔️" },
        { label: gt("garage"), action: () => setCurrentScreen("garage"), color: "from-blue-500 to-cyan-600", icon: "🔧" },
        { label: gt("shop"), action: () => setCurrentScreen("shop"), color: "from-purple-500 to-pink-600", icon: "🛒" },
        { label: `${gt("cases")} ${availableCases > 0 ? `(${availableCases})` : ""}`, action: () => setCurrentScreen("cases"), color: "from-yellow-500 to-amber-600", icon: "📦", badge: availableCases },
        { label: gt("settings"), action: () => setCurrentScreen("settings"), color: "", icon: "⚙️" },
        { label: gt("logout"), action: () => { setCurrentScreen("auth"); setPlayerName(""); }, color: "", icon: "🚪" },
      ].map((item) => (
        <button key={item.label} onClick={item.action} className={`w-full py-3 px-4 text-left font-mono text-base transition-all duration-200 rounded-lg border flex items-center gap-3 ${item.color ? `bg-gradient-to-r ${item.color} border-transparent text-white hover:opacity-90` : "border-[var(--border)] text-[var(--muted)] hover:border-white/50 hover:text-white"}`}>
          <span className="text-xl">{item.icon}</span>
          <span className="flex-1">{item.label}</span>
          {item.badge && item.badge > 0 && <span className="px-2 py-0.5 bg-green-500 rounded-full text-xs text-white font-bold">+{item.badge > 999 ? '999+' : item.badge}</span>}
        </button>
      ))}
    </div>
  );

  // Mode select
  const renderModeSelect = () => (
    <div className="space-y-4 max-w-md mx-auto">
      <button onClick={() => { setGameMode("solo"); setCurrentScreen("levelSelect"); }} className="w-full p-5 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 border-2 border-transparent hover:border-white/30 transition-all">
        <div className="flex items-center gap-4">
          <span className="text-3xl">🎮</span>
          <div className="text-left">
            <div className="font-bold text-white text-lg">{gt("soloRace")}</div>
            <div className="text-sm text-white/70">{gt("soloDesc")}</div>
          </div>
        </div>
      </button>
      <button onClick={() => { setGameMode("friends"); setLobbyCode(Math.random().toString(36).substring(2, 8).toUpperCase()); setLobbyPlayers([{name: playerName, ready: false}]); setCurrentScreen("lobby"); }} className="w-full p-5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-transparent hover:border-white/30 transition-all">
        <div className="flex items-center gap-4">
          <span className="text-3xl">👥</span>
          <div className="text-left">
            <div className="font-bold text-white text-lg">{gt("playWithFriends")}</div>
            <div className="text-sm text-white/70">{gt("friendsDesc")}</div>
          </div>
        </div>
      </button>
      <button onClick={() => setCurrentScreen("main")} className="w-full py-3 mt-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-base rounded-lg border border-gray-600 hover:border-white/50 transition-all flex items-center justify-center gap-2">
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  // Level select
  const renderLevelSelect = () => {
    const renderStars = (stars: number, maxStars: number = 3) => (
      <div className="flex gap-1">
        {[...Array(maxStars)].map((_, i) => (
          <span key={i} className={`text-lg ${i < stars ? "text-yellow-400" : "text-gray-600"}`}>★</span>
        ))}
      </div>
    );

    // Calculate highest unlocked level
    let highestUnlocked = 1;
    while (isLevelUnlocked(highestUnlocked + 1)) {
      highestUnlocked++;
    }

    // Show 100 levels at a time (endless scrolling)
    const levelsToShow = 100;
    const levels = Array.from({ length: levelsToShow }, (_, i) => generateLevel(i + 1));

    // Calculate total stars
    const totalStars = Object.values(levelStars).reduce((sum, s) => sum + s, 0);

    return (
      <div className="space-y-4 max-w-lg mx-auto">
        <div className="text-center mb-4">
          <div className="text-sm text-gray-400 mb-2">SELECT LEVEL</div>
          <div className="text-xs text-gray-500">Get 2+ stars (Top 5) to unlock next level</div>
          <div className="text-xs text-yellow-400 mt-2">⭐ Total Stars: {totalStars}</div>
        </div>

        <div className="space-y-2 max-h-80 overflow-y-auto game-scrollbar pr-2">
          {levels.map((level) => {
            const stars = levelStars[level.id] || 0;
            const unlocked = isLevelUnlocked(level.id);
            const difficultyColor = level.difficulty === "Easy" ? "text-green-400" : level.difficulty === "Medium" ? "text-yellow-400" : level.difficulty === "Hard" ? "text-orange-400" : level.difficulty === "Expert" ? "text-red-400" : "text-purple-400";

            return (
              <button
                key={level.id}
                onClick={() => {
                  if (unlocked) {
                    setCurrentLevel(level.id);
                    startRace();
                  }
                }}
                disabled={!unlocked}
                className={`w-full flex items-center gap-4 p-3 rounded-xl border-2 transition-all ${
                  unlocked
                    ? "border-[var(--neon-green)]/30 bg-black/30 hover:border-[var(--neon-green)] hover:bg-[var(--neon-green)]/10"
                    : "border-gray-700 bg-gray-900/50 opacity-60 cursor-not-allowed"
                }`}
              >
                {/* Level number badge */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 ${
                  unlocked ? "bg-[var(--neon-green)] text-black" : "bg-gray-700 text-gray-400"
                }`}>
                  {level.id}
                </div>

                {/* Level info */}
                <div className="flex-1 text-left">
                  <div className="font-bold text-white text-sm">{level.name}</div>
                  <div className={`text-xs ${difficultyColor}`}>{level.difficulty} • x{level.rewardMod.toFixed(1)} rewards</div>
                </div>

                {/* Stars */}
                <div className="flex-shrink-0">
                  {unlocked ? renderStars(stars) : <span className="text-xl">🔒</span>}
                </div>
              </button>
            );
          })}
        </div>

        <button onClick={() => setCurrentScreen("modeSelect")} className="w-full py-3 mt-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-base rounded-lg border border-gray-600 hover:border-white/50 transition-all flex items-center justify-center gap-2">
          <span>◀</span> {gt("back")}
        </button>
      </div>
    );
  };

  // Lobby
  const renderLobby = () => (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="text-center p-4 bg-black/30 rounded-lg">
        <div className="text-xs text-gray-400">{gt("lobbyCode")}</div>
        <div className="text-2xl font-bold text-[var(--neon-green)] font-mono tracking-widest">{lobbyCode}</div>
        <button onClick={() => navigator.clipboard?.writeText(lobbyCode)} className="text-xs text-blue-400 hover:text-blue-300 mt-1">{gt("copyCode")}</button>
      </div>
      <div className="space-y-2">
        <div className="text-sm text-gray-400">{gt("players")} ({lobbyPlayers.length}/10)</div>
        <div className="max-h-40 overflow-y-auto space-y-1">
          {lobbyPlayers.map((p, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
              <span className="text-base text-white">{p.name}</span>
              {p.ready && <span className="text-sm text-green-400">{gt("ready")}</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => setIsReady(!isReady)} className={`flex-1 py-3 rounded-lg font-bold text-base transition-all ${isReady ? "bg-green-500 text-black" : "bg-gray-600 text-white hover:bg-gray-500"}`}>{gt("ready")}</button>
        <button onClick={startRace} className="flex-1 py-3 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all text-base">{gt("startRace")}</button>
      </div>
      <button onClick={() => setCurrentScreen("modeSelect")} className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-base rounded-lg border border-gray-600 transition-all flex items-center justify-center gap-2">
        <span>◀</span> {gt("leaveLobby")}
      </button>
    </div>
  );

  // Countdown
  const renderCountdown = () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="text-8xl font-black text-[var(--neon-green)] animate-pulse">{countdown > 0 ? countdown : "GO!"}</div>
        <div className="text-lg text-gray-400 mt-4">{gt("raceStarting")}</div>
      </div>
    </div>
  );

  // Race
  const renderRace = () => {
    const skinColor = tankSkins.find(s => s.id === currentSkin)?.color || "#4a5568";
    const allRacers = [
      { name: "player", position: playerPosition, lane: playerLane, color: skinColor, isPlayer: true, stunned: playerStunned },
      ...aiTanks.map(ai => ({ ...ai, isPlayer: false }))
    ].sort((a, b) => b.position - a.position);
    const playerRacePosition = allRacers.findIndex(r => r.name === "player") + 1;
    const viewRange = 40;
    const visibleTanks = aiTanks.filter(ai => {
      const diff = ai.position - playerPosition;
      return diff > -15 && diff < viewRange;
    });
    const progressPercent = (playerPosition / FINISH_LINE) * 100;

    return (
      <div className={`h-full flex flex-col ${damageFlash ? 'bg-red-900/30' : ''}`} ref={gameRef}>
        {damageFlash && <div className="absolute inset-0 bg-red-500/30 pointer-events-none z-50 animate-pulse" />}

        {/* HUD */}
        <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 rounded-lg mb-2 border border-gray-700">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-black text-white">P<span className="text-[var(--neon-green)]">{playerRacePosition}</span><span className="text-sm text-gray-400">/10</span></div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-red-400">❤️</span>
              <div className="w-24 h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
                <div className={`h-full transition-all duration-200 ${playerHealth > 60 ? 'bg-gradient-to-r from-green-500 to-green-400' : playerHealth > 30 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' : 'bg-gradient-to-r from-red-500 to-red-400 animate-pulse'}`} style={{ width: `${playerHealth}%` }} />
              </div>
              <span className="text-sm text-white font-mono">{playerHealth}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-32 h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
              <div className="h-full bg-gradient-to-r from-[var(--neon-green)] to-emerald-400 transition-all duration-100" style={{ width: `${progressPercent}%` }} />
            </div>
            <span className="text-sm text-white font-mono ml-1">{Math.round(progressPercent)}%</span>
          </div>
          <div className="text-base text-yellow-400 font-bold">🪙 {coins}</div>
        </div>

        <div className="flex-1 flex gap-3">
          {/* Race view */}
          <div className="flex-1 relative rounded-lg overflow-hidden border border-gray-700" style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 30%, #1a1a2e 100%)" }}>
            <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-indigo-900/50 to-transparent" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 0%, transparent 20%, #2d2d2d 20%, #2d2d2d 100%)`, clipPath: "polygon(35% 25%, 65% 25%, 100% 100%, 0% 100%)" }}>
              {[48, 38, 58].map((pos, idx) => (
                <div key={idx} className="absolute inset-0" style={{
                  background: `repeating-linear-gradient(180deg, transparent 0px, transparent 20px, #ffd700 20px, #ffd700 40px)`,
                  clipPath: idx === 0 ? "polygon(48% 25%, 52% 25%, 52% 100%, 48% 100%)" : idx === 1 ? "polygon(38% 25%, 42% 25%, 35% 100%, 25% 100%)" : "polygon(58% 25%, 62% 25%, 75% 100%, 65% 100%)",
                  animation: `roadMove ${Math.max(0.3, 1 - playerSpeed / 5)}s linear infinite`
                }} />
              ))}
            </div>

            {/* AI Tanks */}
            {visibleTanks.map((ai) => {
              const relativePos = ai.position - playerPosition;
              const verticalPercent = Math.max(30, Math.min(75, 75 - (relativePos * 2)));
              const scale = Math.max(0.3, Math.min(1, 1 - (relativePos / viewRange) * 0.7));
              const laneOffset = (ai.lane - 1) * 25 * scale;
              return (
                <div key={ai.name} className="absolute transition-all duration-75" style={{ left: `calc(50% + ${laneOffset}px)`, top: `${verticalPercent}%`, transform: `translate(-50%, -50%) scale(${scale})`, zIndex: Math.round((1 - scale) * 100), opacity: ai.stunned > 0 ? 0.5 : 1 }}>
                  <div className="relative">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-black/40 rounded-full blur-sm" />
                    <div className="w-16 h-10 rounded-lg relative" style={{ background: `linear-gradient(180deg, ${ai.color} 0%, ${ai.color}aa 50%, ${ai.color}66 100%)`, boxShadow: ai.stunned > 0 ? "0 0 20px red, 0 4px 8px rgba(0,0,0,0.5)" : `0 0 15px ${ai.color}80, 0 4px 8px rgba(0,0,0,0.5)`, border: `2px solid ${ai.color}` }}>
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-6 rounded-md" style={{ background: `linear-gradient(180deg, ${ai.color} 0%, ${ai.color}88 100%)` }} />
                      <div className="absolute top-3 left-1/2 w-10 h-2 rounded-r-full" style={{ background: "#333", marginLeft: "4px" }} />
                      <div className="absolute -left-1 top-1 bottom-1 w-2 bg-gray-800 rounded" />
                      <div className="absolute -right-1 top-1 bottom-1 w-2 bg-gray-800 rounded" />
                    </div>
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/70 rounded text-[10px] text-white font-bold whitespace-nowrap">{ai.name}</div>
                    {ai.stunned > 0 && <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-red-500 text-lg animate-bounce">💥</div>}
                  </div>
                </div>
              );
            })}

            {/* Bullets */}
            {bullets.map((bullet, i) => {
              const relativePos = bullet.x - playerPosition;
              if (relativePos < -5 || relativePos > viewRange) return null;
              const verticalPercent = Math.max(35, Math.min(70, 70 - (relativePos * 1.2)));
              const scale = Math.max(0.4, 1 - (relativePos / viewRange) * 0.6);
              const laneOffset = (bullet.lane - 1) * 25 * scale;
              return (
                <div key={`bullet-${i}`} className="absolute" style={{ left: `calc(50% + ${laneOffset}px)`, top: `${verticalPercent}%`, transform: `translate(-50%, -50%) scale(${scale})`, zIndex: 50 }}>
                  <div className="w-4 h-4 rounded-full bg-yellow-400" style={{ boxShadow: "0 0 15px yellow, 0 0 30px orange" }} />
                </div>
              );
            })}

            {/* Enemy bullets */}
            {enemyBullets.map((bullet, i) => {
              const relativePos = bullet.x - playerPosition;
              if (relativePos < -10 || relativePos > viewRange) return null;
              const verticalPercent = Math.max(40, Math.min(85, 85 - (relativePos * 1.0)));
              const scale = Math.max(0.5, Math.min(1.2, 1.2 - (relativePos / viewRange) * 0.7));
              const laneOffset = (bullet.lane - 1) * 25 * scale;
              return (
                <div key={`enemy-${i}`} className="absolute" style={{ left: `calc(50% + ${laneOffset}px)`, top: `${verticalPercent}%`, transform: `translate(-50%, -50%) scale(${scale})`, zIndex: 55 }}>
                  <div className="w-5 h-5 rounded-full bg-red-500 animate-pulse" style={{ boxShadow: "0 0 15px red, 0 0 30px #ff4444" }} />
                </div>
              );
            })}

            {/* Player tank */}
            <div className={`absolute bottom-12 transition-all duration-100 ${playerStunned > 0 ? 'animate-pulse' : ''}`} style={{ left: `calc(50% + ${(playerLane - 1) * 60}px)`, transform: "translateX(-50%)", zIndex: 100, opacity: playerStunned > 0 ? 0.7 : 1 }}>
              {playerStunned > 0 && <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-red-500 text-2xl animate-bounce">💥</div>}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black/50 rounded-full blur-md" />
              <div className="w-24 h-14 rounded-lg relative" style={{ background: playerStunned > 0 ? `linear-gradient(180deg, #ff4444 0%, #ff444488 50%, #ff444466 100%)` : `linear-gradient(180deg, ${skinColor} 0%, ${skinColor}aa 50%, ${skinColor}66 100%)`, boxShadow: playerStunned > 0 ? `0 0 25px rgba(255,0,0,0.8), 0 6px 12px rgba(0,0,0,0.5)` : `0 0 25px ${skinColor}80, 0 6px 12px rgba(0,0,0,0.5)`, border: playerStunned > 0 ? `3px solid #ff4444` : `3px solid ${skinColor}` }}>
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-8 rounded-md" style={{ background: playerStunned > 0 ? `linear-gradient(180deg, #ff4444 0%, #ff444488 100%)` : `linear-gradient(180deg, ${skinColor} 0%, ${skinColor}88 100%)` }} />
                <div className="absolute top-3 left-1/2 w-14 h-3 rounded-r-full bg-gray-800" style={{ marginLeft: "6px" }} />
                <div className="absolute -left-2 top-1 bottom-1 w-3 bg-gray-800 rounded" />
                <div className="absolute -right-2 top-1 bottom-1 w-3 bg-gray-800 rounded" />
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-[var(--neon-green)] rounded-full flex items-center justify-center text-black text-sm font-black">{tankLevel}</div>
              </div>
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded text-sm font-black ${playerStunned > 0 ? 'bg-red-500 text-white' : 'bg-[var(--neon-green)] text-black'}`}>{playerStunned > 0 ? 'HIT!' : 'YOU'}</div>
              {isAccelerating && playerStunned <= 0 && (
                <>
                  <div className="absolute -bottom-1 -left-5 text-orange-400 text-xl animate-pulse">🔥</div>
                  <div className="absolute -bottom-1 -right-5 text-orange-400 text-xl animate-pulse">🔥</div>
                </>
              )}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="w-36 bg-black/60 rounded-lg border border-gray-700 p-3 flex flex-col">
            <div className="text-xs text-gray-400 font-bold mb-2 text-center border-b border-gray-700 pb-2">POSITIONS</div>
            <div className="flex-1 overflow-hidden">
              {allRacers.slice(0, 10).map((racer, idx) => (
                <div key={racer.name} className={`flex items-center gap-1 py-1 px-2 rounded text-xs mb-1 ${racer.isPlayer ? "bg-[var(--neon-green)]/30 border border-[var(--neon-green)]" : "bg-gray-800/50"}`}>
                  <span className={`font-bold w-4 ${idx < 3 ? "text-yellow-400" : "text-gray-400"}`}>{idx + 1}</span>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: racer.color }} />
                  <span className={`truncate ${racer.isPlayer ? "text-[var(--neon-green)] font-bold" : "text-white"}`}>{racer.isPlayer ? "YOU" : racer.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 mt-3">
          <button onTouchStart={() => setPlayerLane(prev => Math.max(0, prev - 1))} onClick={() => setPlayerLane(prev => Math.max(0, prev - 1))} className="flex-1 py-4 bg-gradient-to-b from-blue-500/40 to-blue-600/40 rounded-xl text-white text-3xl font-bold active:from-blue-500 active:to-blue-600 border border-blue-400/50 transition-all">◀</button>
          <button onTouchStart={() => setIsAccelerating(true)} onTouchEnd={() => setIsAccelerating(false)} onMouseDown={() => setIsAccelerating(true)} onMouseUp={() => setIsAccelerating(false)} onMouseLeave={() => setIsAccelerating(false)}
            className={`flex-[2] py-4 rounded-xl text-white text-xl font-bold border transition-all ${isAccelerating ? "bg-gradient-to-b from-green-400 to-green-600 border-green-300 shadow-lg shadow-green-500/50" : "bg-gradient-to-b from-green-500/40 to-green-600/40 border-green-400/50"}`}>
            ▲ GAS
          </button>
          <button onClick={() => { const now = Date.now(); if (now - lastShot > 500) { setLastShot(now); setBullets(prev => [...prev, { x: playerPosition + 5, y: 0, lane: playerLane }]); } }}
            className="flex-1 py-4 bg-gradient-to-b from-red-500/40 to-red-600/40 rounded-xl text-white text-3xl active:from-red-500 active:to-red-600 border border-red-400/50 transition-all">💥</button>
          <button onTouchStart={() => setPlayerLane(prev => Math.min(2, prev + 1))} onClick={() => setPlayerLane(prev => Math.min(2, prev + 1))} className="flex-1 py-4 bg-gradient-to-b from-blue-500/40 to-blue-600/40 rounded-xl text-white text-3xl font-bold active:from-blue-500 active:to-blue-600 border border-blue-400/50 transition-all">▶</button>
        </div>

        <style jsx>{`
          @keyframes roadMove { 0% { background-position-y: 0px; } 100% { background-position-y: 40px; } }
        `}</style>
      </div>
    );
  };

  // Race result
  const renderRaceResult = () => (
    <div className="space-y-4 text-center max-w-md mx-auto">
      {/* Level info */}
      <div className="text-sm text-gray-400">
        Level {currentLevel}: {currentLevelData.name}
      </div>

      <div className={`text-4xl font-black ${playerPlace === 1 ? "text-yellow-400 animate-pulse" : playerPlace <= 5 ? "text-[var(--neon-green)]" : "text-red-400"}`}>
        {playerPlace === 1 ? gt("victory") : playerPlace <= 5 ? gt("top5") : gt("finished")}
      </div>
      <div className="text-7xl font-bold text-white">#{playerPlace}</div>

      {/* Stars earned */}
      <div className="flex justify-center gap-2 py-2">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className={`text-4xl transition-all duration-500 ${i < earnedStars ? "text-yellow-400 animate-bounce" : "text-gray-700"}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            ★
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-400">
        {earnedStars === 3 ? "PERFECT! 🏆" : earnedStars === 2 ? "Great job! Next level unlocked!" : "Get Top 5 to unlock next level"}
      </div>

      {playerPlace === 1 && <div className="text-base text-yellow-400 animate-bounce">{gt("first")}</div>}
      <div className="bg-yellow-500/20 px-8 py-4 rounded-lg inline-block">
        <div className="text-3xl font-bold text-yellow-400">+{raceReward} 🪙</div>
        <div className="text-sm text-yellow-300">{gt("reward")}</div>
      </div>
      {matchesPlayed % 5 === 0 && <div className="text-base text-purple-400 animate-bounce">+6 {gt("cases")}! 🎁</div>}
      <button onClick={claimRaceReward} className="w-full py-4 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all text-lg">{gt("claimReward")}</button>
    </div>
  );

  // Settings
  const renderSettings = () => (
    <div className="space-y-3 max-w-md mx-auto">
      {[{ label: gt("graphics"), action: () => setCurrentScreen("graphics"), icon: "🎨" }, { label: gt("language"), action: () => setCurrentScreen("language"), icon: "🌐" }].map((item) => (
        <button key={item.label} onClick={item.action} className="w-full py-3 px-4 text-left font-mono text-base transition-all duration-200 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:border-white/50 hover:text-white flex items-center gap-3">
          <span className="text-xl">{item.icon}</span><span className="flex-1">{item.label}</span><span>▶</span>
        </button>
      ))}
      <button onClick={() => setCurrentScreen("main")} className="w-full py-3 mt-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-base rounded-lg border border-gray-600 hover:border-white/50 transition-all flex items-center justify-center gap-2">
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  // Graphics
  const renderGraphics = () => (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="space-y-2">
        <div className="text-sm text-gray-400">{gt("quality")}</div>
        <div className="grid grid-cols-4 gap-2">
          {qualityLabels.map((label, i) => (
            <button key={label} onClick={() => setGraphicsQuality(i)} className={`py-2 text-xs font-mono rounded transition-all ${graphicsQuality === i ? "bg-[var(--neon-green)] text-black" : "bg-black/30 text-gray-400 hover:bg-black/50"}`}>{gt(label)}</button>
          ))}
        </div>
      </div>
      {[{ label: gt("shadows"), value: shadows, setter: setShadows }, { label: gt("particles"), value: particles, setter: setParticles }, { label: gt("antiAliasing"), value: antiAliasing, setter: setAntiAliasing }, { label: gt("vsync"), value: vsync, setter: setVsync }].map((setting) => (
        <div key={setting.label} className="flex items-center justify-between">
          <span className="text-sm text-gray-300">{setting.label}</span>
          <button onClick={() => setting.setter(!setting.value)} className={`px-4 py-2 text-sm font-mono rounded transition-all ${setting.value ? "bg-[var(--neon-green)]/20 border border-[var(--neon-green)] text-[var(--neon-green)]" : "bg-black/30 border border-gray-600 text-gray-400"}`}>{setting.value ? gt("on") : gt("off")}</button>
        </div>
      ))}
      <button onClick={() => setCurrentScreen("settings")} className="w-full py-3 bg-[var(--neon-green)] text-black font-bold rounded-lg hover:opacity-90 transition-all text-base mt-4">{gt("apply")}</button>
      <button onClick={() => setCurrentScreen("settings")} className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-base rounded-lg border border-gray-600 transition-all flex items-center justify-center gap-2">
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  // Language
  const renderLanguageMenu = () => (
    <div className="space-y-3 max-w-md mx-auto">
      {(["en", "ru", "uz"] as GameLang[]).map((lang) => (
        <button key={lang} onClick={() => setGameLang(lang)} className={`w-full py-3 px-4 text-left font-mono text-base transition-all duration-200 rounded-lg border flex items-center gap-3 ${gameLang === lang ? "border-[var(--neon-green)] bg-[var(--neon-green)]/10 text-[var(--neon-green)]" : "border-[var(--border)] text-[var(--muted)] hover:border-white/50 hover:text-white"}`}>
          <span className="text-xl">{lang === "en" ? "🇺🇸" : lang === "ru" ? "🇷🇺" : "🇺🇿"}</span>
          <span className="flex-1">{lang === "en" ? "English" : lang === "ru" ? "Русский" : "O'zbekcha"}</span>
          {gameLang === lang && <span className="text-[var(--neon-green)]">✓</span>}
        </button>
      ))}
      <button onClick={() => setCurrentScreen("settings")} className="w-full py-3 mt-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-base rounded-lg border border-gray-600 transition-all flex items-center justify-center gap-2">
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  // Garage
  const renderGarage = () => {
    const stats = getTankStats();
    return (
      <div className="space-y-4 max-w-lg mx-auto">
        <div className="flex justify-center py-3">{renderTank("large")}</div>
        <div className="grid grid-cols-4 gap-2 text-center">
          {[{ label: "DMG", value: stats.damage, color: "text-red-400" }, { label: "ARM", value: stats.armor, color: "text-blue-400" }, { label: "SPD", value: stats.speed, color: "text-green-400" }, { label: "HND", value: stats.handling, color: "text-yellow-400" }].map((stat) => (
            <div key={stat.label} className="bg-black/30 rounded-lg p-2">
              <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-400 text-center">Upgrade tank components</div>
        <div className="space-y-2">
          {tankComponents.map((comp) => {
            const level = tankComponentLevels[comp.id] || 1;
            const cost = getComponentUpgradeCost(comp.id);
            const canAfford = coins >= cost;
            const isMaxed = level >= comp.maxLevel;
            return (
              <div key={comp.id} className="p-3 rounded-lg bg-blue-900/20 border border-blue-500/30">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{comp.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-white">{comp.name}</span>
                      <span className="text-sm text-yellow-400">Lv.{level}</span>
                    </div>
                    <div className="text-xs text-gray-400">+{level * 8} {comp.stat}</div>
                  </div>
                  <button onClick={() => upgradeComponent(comp.id)} disabled={!canAfford || isMaxed} className={`px-3 py-1.5 text-xs font-bold rounded ${isMaxed ? 'bg-gray-600 text-gray-400' : canAfford ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:opacity-90' : 'bg-gray-700 text-gray-500'}`}>{isMaxed ? 'MAX' : `⬆️ ${cost}🪙`}</button>
                </div>
                <div className="mt-2 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${(level / comp.maxLevel) * 100}%` }} />
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={() => setCurrentScreen("main")} className="w-full py-3 mt-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-base rounded-lg border border-gray-600 transition-all flex items-center justify-center gap-2">
          <span>◀</span> {gt("back")}
        </button>
      </div>
    );
  };

  // Shop
  const renderShop = () => (
    <div className="space-y-4 max-w-lg mx-auto">
      <div className="flex gap-2">
        {(["skins", "ammo"] as const).map((tab) => (
          <button key={tab} onClick={() => setShopTab(tab)} className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${shopTab === tab ? "bg-[var(--neon-pink)] text-black" : "bg-black/30 text-[var(--muted)] hover:text-white"}`}>{gt(tab)}</button>
        ))}
      </div>
      <div className="space-y-2 max-h-72 overflow-y-auto game-scrollbar">
        {shopTab === "skins" ? (
          tankSkins.map((skin) => (
            <div key={skin.id} className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
              <div className="w-10 h-10 rounded" style={{ backgroundColor: skin.color }} />
              <div className="flex-1">
                <div className="text-sm font-bold text-white">{skin.name}</div>
                <div className="text-xs text-gray-400">{skin.price > 0 ? `${skin.price} 🪙` : "FREE"}</div>
              </div>
              {ownedSkins.includes(skin.id) ? (
                <button onClick={() => setCurrentSkin(skin.id)} className={`px-3 py-1.5 text-xs rounded ${currentSkin === skin.id ? "bg-green-500 text-black" : "bg-gray-600 text-white hover:bg-gray-500"}`}>{currentSkin === skin.id ? gt("equipped") : gt("owned")}</button>
              ) : (
                <button onClick={() => buySkin(skin)} disabled={coins < skin.price} className={`px-3 py-1.5 text-xs rounded ${coins >= skin.price ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-gray-700 text-gray-500"}`}>{gt("buy")}</button>
              )}
            </div>
          ))
        ) : (
          ammoTypes.map((ammo) => (
            <div key={ammo.id} className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-xl">💥</div>
              <div className="flex-1">
                <div className="text-sm font-bold text-white">{ammo.name}</div>
                <div className="text-xs text-red-400">+{ammo.damage} {gt("damage")}</div>
              </div>
              {ownedAmmo.includes(ammo.id) ? (
                <button onClick={() => setCurrentAmmo(ammo.id)} className={`px-3 py-1.5 text-xs rounded ${currentAmmo === ammo.id ? "bg-green-500 text-black" : "bg-gray-600 text-white hover:bg-gray-500"}`}>{currentAmmo === ammo.id ? gt("equipped") : gt("owned")}</button>
              ) : (
                <button onClick={() => buyAmmo(ammo)} disabled={coins < ammo.price} className={`px-3 py-1.5 text-xs rounded ${coins >= ammo.price ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-gray-700 text-gray-500"}`}>{ammo.price > 0 ? `${ammo.price} 🪙` : "FREE"}</button>
              )}
            </div>
          ))
        )}
      </div>
      <button onClick={() => setCurrentScreen("main")} className="w-full py-3 mt-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-base rounded-lg border border-gray-600 transition-all flex items-center justify-center gap-2">
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  // Cases
  const renderCases = () => (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="text-center">
        <div className="text-lg font-bold text-yellow-400">{gt("yourCases")}: {availableCases}</div>
        <div className="text-sm text-gray-400 mt-1">{gt("matchesUntilCases")}: {5 - (matchesPlayed % 5)}</div>
      </div>
      {availableCases > 0 ? (
        <>
          <div className="text-sm text-center text-gray-400">{gt("selectCase")}</div>
          <div className="grid grid-cols-3 gap-3">
            {[...Array(Math.min(6, availableCases))].map((_, i) => (
              <button key={i} onClick={() => setSelectedCase(i)} className={`aspect-square rounded-lg border-2 transition-all flex items-center justify-center text-3xl ${selectedCase === i ? "border-yellow-400 bg-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.3)] scale-110" : "border-[var(--border)] bg-black/30 hover:border-yellow-400/50"}`}>📦</button>
            ))}
          </div>
          <button onClick={openCase} disabled={selectedCase === null} className={`w-full py-3 rounded-lg font-bold text-base transition-all ${selectedCase !== null ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black hover:opacity-90" : "bg-gray-700 text-gray-500"}`}>{gt("openCase")}</button>
        </>
      ) : (
        <div className="text-center py-10 text-gray-500 text-base">Play more battles to earn cases!</div>
      )}
      <button onClick={() => setCurrentScreen("main")} className="w-full py-3 mt-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-base rounded-lg border border-gray-600 transition-all flex items-center justify-center gap-2">
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  // Case open
  const renderCaseOpen = () => (
    <div className="text-center space-y-6 py-8 max-w-md mx-auto">
      {isOpening ? (
        <>
          <div className="text-8xl animate-bounce">📦</div>
          <div className="text-xl font-bold text-yellow-400 animate-pulse">{gt("loading")}</div>
        </>
      ) : caseReward ? (
        <>
          <div className="text-lg text-[var(--neon-green)]">{gt("youWon")}</div>
          <div className={`text-6xl ${caseReward.rarity === "legendary" ? "animate-pulse" : ""}`}>{caseReward.type === "coins" ? "🪙" : "🎨"}</div>
          <div className={`text-2xl font-bold ${caseReward.rarity === "common" ? "text-gray-400" : caseReward.rarity === "rare" ? "text-blue-400" : caseReward.rarity === "epic" ? "text-purple-400" : "text-yellow-400 animate-pulse"}`}>{caseReward.label}</div>
          <div className={`text-sm uppercase tracking-wider ${caseReward.rarity === "legendary" ? "text-yellow-400" : "text-gray-500"}`}>{caseReward.rarity}</div>
          <button onClick={() => { setCaseReward(null); setSelectedCase(null); setCurrentScreen("cases"); }} className="w-full py-3 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all text-lg">{gt("claim")}</button>
        </>
      ) : null}
    </div>
  );

  // Content renderer
  const renderContent = () => {
    switch (currentScreen) {
      case "auth": return renderAuth();
      case "register": return renderRegister();
      case "character": return renderCharacterSelect();
      case "main": return renderMainMenu();
      case "garage": return renderGarage();
      case "shop": return renderShop();
      case "modeSelect": return renderModeSelect();
      case "levelSelect": return renderLevelSelect();
      case "lobby": return renderLobby();
      case "countdown": return renderCountdown();
      case "race": return renderRace();
      case "raceResult": return renderRaceResult();
      case "cases": return renderCases();
      case "caseOpen": return renderCaseOpen();
      case "settings": return renderSettings();
      case "graphics": return renderGraphics();
      case "language": return renderLanguageMenu();
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#071018] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--neon-green)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20">
        <Link href="/services/games" className="flex items-center gap-2 text-[var(--muted)] hover:text-white transition-colors">
          <span className="text-xl">←</span>
          <span className="text-sm font-mono">Exit Game</span>
        </Link>

        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-green)] via-emerald-400 to-teal-400">BI3</span>
            <span className="text-white ml-2">TANKS</span>
          </h1>
          <p className="text-xs font-mono text-[var(--neon-green)]/60">3D TANK RACING</p>
        </div>

        <button onClick={toggleFullscreen} className="flex items-center gap-2 text-[var(--muted)] hover:text-white transition-colors">
          <span className="text-sm font-mono">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
          <span className="text-xl">{isFullscreen ? '⊡' : '⛶'}</span>
        </button>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center pt-20 pb-8 px-6">
        <div className="w-full max-w-4xl max-h-full overflow-y-auto game-scrollbar">
          {!["countdown", "race", "raceResult", "caseOpen"].includes(currentScreen) && getScreenTitle() && (
            <div className="text-center mb-6">
              <span className="text-sm font-mono text-[var(--neon-green)]/70 tracking-widest">{"[ "}{getScreenTitle()}{" ]"}</span>
            </div>
          )}
          {renderContent()}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[var(--neon-green)]/50" />
      <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-[var(--neon-green)]/50" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-[var(--neon-green)]/50" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[var(--neon-green)]/50" />

      {/* Status bar */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-6 text-xs font-mono text-[var(--neon-green)]/40">
        <span>3D ENGINE</span>
        <span>•</span>
        <span>60 FPS</span>
        <span>•</span>
        <span>ONLINE</span>
      </div>
    </div>
  );
}
