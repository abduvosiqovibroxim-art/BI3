"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

type MenuScreen = "auth" | "register" | "character" | "main" | "garage" | "shop" | "modeSelect" | "lobby" | "countdown" | "race" | "raceResult" | "cases" | "caseOpen" | "settings" | "graphics" | "language";
type GameLang = "en" | "ru" | "uz";
type Gender = "male" | "female";
type GameMode = "solo" | "friends";

const gameTranslations: Record<GameLang, Record<string, string>> = {
  en: {
    // Auth
    welcome: "WELCOME COMMANDER",
    login: "LOGIN",
    register: "REGISTER",
    username: "Username",
    password: "Password",
    confirmPassword: "Confirm Password",
    createAccount: "CREATE ACCOUNT",
    backToLogin: "Back to Login",
    // Character
    selectCharacter: "SELECT YOUR COMMANDER",
    male: "MALE",
    female: "FEMALE",
    confirm: "CONFIRM",
    // Main Menu
    mainMenu: "COMMAND CENTER",
    race: "RACE",
    garage: "GARAGE",
    shop: "SHOP",
    cases: "CASES",
    settings: "SETTINGS",
    language: "LANGUAGE",
    logout: "LOGOUT",
    // Mode Select
    selectMode: "SELECT MODE",
    soloRace: "SOLO RACE",
    soloDesc: "Race against 9 AI tanks",
    playWithFriends: "PLAY WITH FRIENDS",
    friendsDesc: "Create or join a lobby",
    // Lobby
    lobby: "LOBBY",
    waitingPlayers: "Waiting for players...",
    players: "PLAYERS",
    ready: "READY",
    startRace: "START RACE",
    leaveLobby: "LEAVE",
    inviteFriends: "INVITE FRIENDS",
    copyCode: "COPY CODE",
    lobbyCode: "LOBBY CODE",
    // Garage
    yourTank: "YOUR TANK",
    tankLevel: "LEVEL",
    upgrade: "UPGRADE",
    maxLevel: "MAX LEVEL",
    changeTank: "CHANGE TANK",
    tankDesign: "DESIGN",
    // Stats
    damage: "DAMAGE",
    armor: "ARMOR",
    speed: "SPEED",
    // Shop
    skins: "SKINS",
    ammo: "AMMO",
    buy: "BUY",
    owned: "OWNED",
    equipped: "EQUIPPED",
    // Race
    searching: "FINDING RACE...",
    playersFound: "PLAYERS FOUND",
    raceStarting: "RACE STARTING",
    raceInProgress: "RACE!",
    position: "POSITION",
    lap: "LAP",
    shoot: "SHOOT",
    // Controls
    controls: "W/↑ = GAS | A/D = STEER | SPACE = SHOOT",
    tapControls: "TAP LEFT/RIGHT TO STEER | TAP CENTER TO SHOOT",
    // Results
    victory: "1ST PLACE!",
    top5: "TOP 5!",
    finished: "FINISHED",
    yourPlace: "YOUR PLACE",
    reward: "REWARD",
    coins: "COINS",
    first: "1ST - 1000 COINS!",
    matchesUntilCases: "RACES UNTIL CASES",
    claimReward: "CLAIM REWARD",
    // Cases
    yourCases: "YOUR CASES",
    selectCase: "SELECT A CASE TO OPEN",
    openCase: "OPEN CASE",
    youWon: "YOU WON!",
    claim: "CLAIM",
    // Settings
    graphics: "GRAPHICS",
    quality: "QUALITY",
    low: "LOW",
    medium: "MEDIUM",
    high: "HIGH",
    ultra: "ULTRA",
    shadows: "SHADOWS",
    particles: "PARTICLES",
    antiAliasing: "ANTI-ALIASING",
    vsync: "V-SYNC",
    on: "ON",
    off: "OFF",
    apply: "APPLY",
    // General
    back: "BACK",
    play: "PLAY",
    quit: "QUIT",
    loading: "LOADING...",
  },
  ru: {
    // Auth
    welcome: "ДОБРО ПОЖАЛОВАТЬ, КОМАНДИР",
    login: "ВХОД",
    register: "РЕГИСТРАЦИЯ",
    username: "Имя пользователя",
    password: "Пароль",
    confirmPassword: "Подтвердите пароль",
    createAccount: "СОЗДАТЬ АККАУНТ",
    backToLogin: "Вернуться к входу",
    // Character
    selectCharacter: "ВЫБЕРИТЕ КОМАНДИРА",
    male: "МУЖЧИНА",
    female: "ЖЕНЩИНА",
    confirm: "ПОДТВЕРДИТЬ",
    // Main Menu
    mainMenu: "КОМАНДНЫЙ ЦЕНТР",
    race: "ГОНКА",
    garage: "ГАРАЖ",
    shop: "МАГАЗИН",
    cases: "КЕЙСЫ",
    settings: "НАСТРОЙКИ",
    language: "ЯЗЫК",
    logout: "ВЫХОД",
    // Mode Select
    selectMode: "ВЫБОР РЕЖИМА",
    soloRace: "ОДИНОЧНАЯ ГОНКА",
    soloDesc: "Гонка против 9 ИИ танков",
    playWithFriends: "С ДРУЗЬЯМИ",
    friendsDesc: "Создать или войти в лобби",
    // Lobby
    lobby: "ЛОББИ",
    waitingPlayers: "Ожидание игроков...",
    players: "ИГРОКИ",
    ready: "ГОТОВ",
    startRace: "НАЧАТЬ ГОНКУ",
    leaveLobby: "ВЫЙТИ",
    inviteFriends: "ПРИГЛАСИТЬ ДРУЗЕЙ",
    copyCode: "КОПИРОВАТЬ КОД",
    lobbyCode: "КОД ЛОББИ",
    // Garage
    yourTank: "ВАШ ТАНК",
    tankLevel: "УРОВЕНЬ",
    upgrade: "УЛУЧШИТЬ",
    maxLevel: "МАКС УРОВЕНЬ",
    changeTank: "СМЕНИТЬ ТАНК",
    tankDesign: "ДИЗАЙН",
    // Stats
    damage: "УРОН",
    armor: "БРОНЯ",
    speed: "СКОРОСТЬ",
    // Shop
    skins: "СКИНЫ",
    ammo: "СНАРЯДЫ",
    buy: "КУПИТЬ",
    owned: "КУПЛЕНО",
    equipped: "ОДЕТО",
    // Race
    searching: "ПОИСК ГОНКИ...",
    playersFound: "ИГРОКОВ НАЙДЕНО",
    raceStarting: "ГОНКА НАЧИНАЕТСЯ",
    raceInProgress: "ГОНКА!",
    position: "ПОЗИЦИЯ",
    lap: "КРУГ",
    shoot: "ВЫСТРЕЛ",
    // Controls
    controls: "W/↑ = ГАЗ | A/D = РУЛЬ | ПРОБЕЛ = ВЫСТРЕЛ",
    tapControls: "НАЖМИТЕ ЛЕВО/ПРАВО | ЦЕНТР = ВЫСТРЕЛ",
    // Results
    victory: "1-Е МЕСТО!",
    top5: "ТОП 5!",
    finished: "ФИНИШ",
    yourPlace: "ВАШЕ МЕСТО",
    reward: "НАГРАДА",
    coins: "МОНЕТЫ",
    first: "1-Е МЕСТО - 1000 МОНЕТ!",
    matchesUntilCases: "ГОНОК ДО КЕЙСОВ",
    claimReward: "ЗАБРАТЬ НАГРАДУ",
    // Cases
    yourCases: "ВАШИ КЕЙСЫ",
    selectCase: "ВЫБЕРИТЕ КЕЙС",
    openCase: "ОТКРЫТЬ КЕЙС",
    youWon: "ВЫ ВЫИГРАЛИ!",
    claim: "ЗАБРАТЬ",
    // Settings
    graphics: "ГРАФИКА",
    quality: "КАЧЕСТВО",
    low: "НИЗКОЕ",
    medium: "СРЕДНЕЕ",
    high: "ВЫСОКОЕ",
    ultra: "УЛЬТРА",
    shadows: "ТЕНИ",
    particles: "ЧАСТИЦЫ",
    antiAliasing: "СГЛАЖИВАНИЕ",
    vsync: "В-СИНК",
    on: "ВКЛ",
    off: "ВЫКЛ",
    apply: "ПРИМЕНИТЬ",
    // General
    back: "НАЗАД",
    play: "ИГРАТЬ",
    quit: "ВЫХОД",
    loading: "ЗАГРУЗКА...",
  },
  uz: {
    // Auth
    welcome: "XUSH KELIBSIZ, QOMONDOR",
    login: "KIRISH",
    register: "RO'YXATDAN O'TISH",
    username: "Foydalanuvchi nomi",
    password: "Parol",
    confirmPassword: "Parolni tasdiqlang",
    createAccount: "HISOB YARATISH",
    backToLogin: "Kirishga qaytish",
    // Character
    selectCharacter: "QOMONDIRINGIZNI TANLANG",
    male: "ERKAK",
    female: "AYOL",
    confirm: "TASDIQLASH",
    // Main Menu
    mainMenu: "QOMONDON MARKAZI",
    race: "POYGA",
    garage: "GARAJ",
    shop: "DO'KON",
    cases: "KEYSLAR",
    settings: "SOZLAMALAR",
    language: "TIL",
    logout: "CHIQISH",
    // Mode Select
    selectMode: "REJIM TANLASH",
    soloRace: "YOLG'IZ POYGA",
    soloDesc: "9 ta AI tanklarga qarshi",
    playWithFriends: "DO'STLAR BILAN",
    friendsDesc: "Lobbi yaratish yoki qo'shilish",
    // Lobby
    lobby: "LOBBI",
    waitingPlayers: "O'yinchilar kutilmoqda...",
    players: "O'YINCHILAR",
    ready: "TAYYOR",
    startRace: "POYGANI BOSHLASH",
    leaveLobby: "CHIQISH",
    inviteFriends: "DO'STLARNI TAKLIF QILISH",
    copyCode: "KODNI NUSXALASH",
    lobbyCode: "LOBBI KODI",
    // Garage
    yourTank: "TANKINGIZ",
    tankLevel: "DARAJA",
    upgrade: "YANGILASH",
    maxLevel: "MAKS DARAJA",
    changeTank: "TANK ALMASHTIRISH",
    tankDesign: "DIZAYN",
    // Stats
    damage: "ZARAR",
    armor: "ZIRH",
    speed: "TEZLIK",
    // Shop
    skins: "SKINLAR",
    ammo: "O'QLAR",
    buy: "SOTIB OLISH",
    owned: "SOTIB OLINGAN",
    equipped: "KIYILGAN",
    // Race
    searching: "POYGA QIDIRILMOQDA...",
    playersFound: "O'YINCHILAR TOPILDI",
    raceStarting: "POYGA BOSHLANMOQDA",
    raceInProgress: "POYGA!",
    position: "POZITSIYA",
    lap: "AYLANISH",
    shoot: "OTISH",
    // Controls
    controls: "W/↑ = GAZ | A/D = BOSHQARISH | BO'SH JOY = OTISH",
    tapControls: "CHAP/O'NG BOSING | MARKAZ = OTISH",
    // Results
    victory: "1-O'RIN!",
    top5: "TOP 5!",
    finished: "TUGADI",
    yourPlace: "SIZNING O'RNINGIZ",
    reward: "MUKOFOT",
    coins: "TANGALAR",
    first: "1-O'RIN - 1000 TANGA!",
    matchesUntilCases: "KEYSLARGACHA POYGALAR",
    claimReward: "MUKOFOTNI OLISH",
    // Cases
    yourCases: "KEYSLARINGIZ",
    selectCase: "KEYS TANLANG",
    openCase: "KEYS OCHISH",
    youWon: "SIZ YUTDINGIZ!",
    claim: "OLISH",
    // Settings
    graphics: "GRAFIKA",
    quality: "SIFAT",
    low: "PAST",
    medium: "O'RTA",
    high: "YUQORI",
    ultra: "ULTRA",
    shadows: "SOYALAR",
    particles: "ZARRACHALAR",
    antiAliasing: "TEKISLASH",
    vsync: "V-SINX",
    on: "YOQISH",
    off: "O'CHIRISH",
    apply: "QO'LLASH",
    // General
    back: "ORQAGA",
    play: "O'YNASH",
    quit: "CHIQISH",
    loading: "YUKLANMOQDA...",
  },
};

// Tank skins data
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

// Tank component upgrades (engine, cannon, armor, tracks)
const tankComponents = [
  { id: "engine", name: "Engine", icon: "⚙️", stat: "speed", maxLevel: 10 },
  { id: "cannon", name: "Cannon", icon: "💥", stat: "damage", maxLevel: 10 },
  { id: "armor", name: "Armor", icon: "🛡️", stat: "armor", maxLevel: 10 },
  { id: "tracks", name: "Tracks", icon: "⛓️", stat: "handling", maxLevel: 10 },
];

// Training ground obstacles
const obstacles = [
  { type: "barrier", icon: "🚧" },
  { type: "sandbag", icon: "📦" },
  { type: "target", icon: "🎯" },
  { type: "cone", icon: "🔶" },
];

// Case rewards
const caseRewards = [
  { type: "coins", amount: 100, rarity: "common", label: "100 Coins" },
  { type: "coins", amount: 500, rarity: "rare", label: "500 Coins" },
  { type: "skin", id: "camo", rarity: "rare", label: "Desert Camo" },
  { type: "skin", id: "forest", rarity: "rare", label: "Forest Camo" },
  { type: "coins", amount: 1000, rarity: "epic", label: "1000 Coins" },
  { type: "skin", id: "gold", rarity: "legendary", label: "Gold Elite!" },
  { type: "skin", id: "lava", rarity: "legendary", label: "Molten Lava!" },
];

// Ammo types
const ammoTypes = [
  { id: "standard", name: "Standard", damage: 10, price: 0 },
  { id: "armor_piercing", name: "Armor Piercing", damage: 15, price: 300 },
  { id: "explosive", name: "Explosive", damage: 20, price: 500 },
  { id: "incendiary", name: "Incendiary", damage: 18, price: 450 },
  { id: "emp", name: "EMP Round", damage: 12, price: 600 },
  { id: "plasma", name: "Plasma Shot", damage: 25, price: 1000 },
];

// AI tank names
const aiNames = ["Thunder", "Blaze", "Shadow", "Storm", "Viper", "Titan", "Ghost", "Fury", "Hawk"];
const aiColors = ["#e53e3e", "#dd6b20", "#38a169", "#3182ce", "#805ad5", "#d53f8c", "#319795", "#718096", "#d69e2e"];

// Save game data interface
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
}

const SAVE_KEY = "bi3_tanks_save";

function GameMenuDemo() {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState<MenuScreen>("auth");
  const [gameLang, setGameLang] = useState<GameLang>("en");
  const [gameMode, setGameMode] = useState<GameMode>("solo");
  const gameRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

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

  // Tank component upgrades (engine, cannon, armor, tracks)
  const [tankComponentLevels, setTankComponentLevels] = useState<Record<string, number>>({
    engine: 1, cannon: 1, armor: 1, tracks: 1
  });

  const gt = (key: string) => gameTranslations[gameLang][key] || key;
  const qualityLabels = ["low", "medium", "high", "ultra"];

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
          // If player has saved data, skip to main menu
          if (data.playerName) {
            setCurrentScreen("main");
          }
        }
      } catch (e) {
        console.error("Failed to load save data:", e);
      }
      setIsLoaded(true);
    }
  }, []);

  // Save game data whenever important state changes
  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') return;

    const saveData: GameSaveData = {
      playerName,
      gender,
      coins,
      tankLevel,
      currentSkin,
      currentAmmo,
      ownedSkins,
      ownedAmmo,
      matchesPlayed,
      availableCases,
      gameLang,
      graphicsQuality,
      shadows,
      particles,
      antiAliasing,
      vsync,
      tankComponentLevels,
    };

    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
    } catch (e) {
      console.error("Failed to save game data:", e);
    }
  }, [isLoaded, playerName, gender, coins, tankLevel, currentSkin, currentAmmo, ownedSkins, ownedAmmo, matchesPlayed, availableCases, gameLang, graphicsQuality, shadows, particles, antiAliasing, vsync, tankComponentLevels]);

  // Calculate tank stats based on component levels
  const getTankStats = () => ({
    damage: 10 + (tankComponentLevels.cannon - 1) * 8,
    armor: 30 + (tankComponentLevels.armor - 1) * 12,
    speed: 50 + (tankComponentLevels.engine - 1) * 10,
    handling: 50 + (tankComponentLevels.tracks - 1) * 10,
  });

  const upgradeCost = (level: number) => level * 200;
  const FINISH_LINE = 500; // Much longer race
  const engineLevel = tankComponentLevels.engine || 1;
  const MAX_SPEED = 1.5 + engineLevel * 0.12; // Speed based on engine
  const AI_BASE_SPEED = 0.7; // Slower AI tanks
  const PLAYER_ARMOR = 30 + (tankComponentLevels.armor - 1) * 12;

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
    // Initialize AI tanks with lastShot for shooting capability
    const ais = aiNames.map((name, i) => ({
      name,
      color: aiColors[i],
      position: 0,
      lane: i % 3,
      speed: 0,
      stunned: 0,
      lastShot: 0,
    }));
    setAiTanks(ais);
    setPlayerPosition(0);
    setPlayerLane(1);
    setPlayerSpeed(0);
    setPlayerHealth(100); // Reset player health
    setPlayerStunned(0);
    setEnemyBullets([]); // Reset enemy bullets
    setRaceFinished(false);
    setFinishOrder([]);
    setBullets([]);

    setCountdown(3);
    setCurrentScreen("countdown");

    // Countdown
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
      if (e.key === "w" || e.key === "W" || e.key === "ArrowUp") {
        setIsAccelerating(true);
      }
      if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft") {
        setPlayerLane(prev => Math.max(0, prev - 1));
      }
      if (e.key === "d" || e.key === "D" || e.key === "ArrowRight") {
        setPlayerLane(prev => Math.min(2, prev + 1));
      }
      if (e.key === " ") {
        e.preventDefault();
        const now = Date.now();
        if (now - lastShot > 500) {
          setLastShot(now);
          setBullets(prev => [...prev, { x: playerPosition + 5, y: 0, lane: playerLane }]);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "w" || e.key === "W" || e.key === "ArrowUp") {
        setIsAccelerating(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [currentScreen, playerPosition, playerLane, lastShot]);

  // Game loop
  useEffect(() => {
    if (currentScreen !== "race" || raceFinished) return;

    const gameLoop = setInterval(() => {
      const now = Date.now();
      setRaceTime(prev => prev + 1);

      // Update player stun
      if (playerStunned > 0) {
        setPlayerStunned(prev => prev - 1);
      }

      // Update player speed and position (slower acceleration for realism)
      setPlayerSpeed(prev => {
        if (playerStunned > 0) {
          return Math.max(prev - 0.15, 0); // Slow down when stunned
        }
        if (isAccelerating) {
          return Math.min(prev + 0.08, MAX_SPEED);
        }
        return Math.max(prev - 0.05, 0); // Slower deceleration
      });

      setPlayerPosition(prev => {
        const newPos = prev + playerSpeed;
        if (newPos >= FINISH_LINE && !finishOrder.includes("player")) {
          setFinishOrder(order => [...order, "player"]);
        }
        return Math.min(newPos, FINISH_LINE);
      });

      // Update AI tanks with shooting behavior
      setAiTanks(prev => prev.map(ai => {
        if (ai.stunned > 0) {
          return { ...ai, stunned: ai.stunned - 1, speed: 0 };
        }

        // Slower, more realistic AI speed
        const targetSpeed = AI_BASE_SPEED + Math.random() * 0.5;
        const newSpeed = ai.speed + (targetSpeed - ai.speed) * 0.04;
        const newPosition = Math.min(ai.position + newSpeed, FINISH_LINE);

        // Random lane change (less frequent)
        let newLane = ai.lane;
        if (Math.random() < 0.008) {
          newLane = Math.floor(Math.random() * 3);
        }

        // AI shooting at player (if player is behind and in same lane or nearby)
        let newLastShot = ai.lastShot;
        const distToPlayer = ai.position - playerPosition;
        if (distToPlayer > 5 && distToPlayer < 60 && now - ai.lastShot > 2500 + Math.random() * 3000) {
          if (Math.abs(ai.lane - playerLane) <= 1 && Math.random() < 0.25) {
            setEnemyBullets(bullets => [...bullets, {
              x: ai.position - 3,
              y: 0,
              lane: ai.lane,
              fromAi: ai.name
            }]);
            newLastShot = now;
          }
        }

        return { ...ai, speed: newSpeed, position: newPosition, lane: newLane, lastShot: newLastShot };
      }));

      // Update player bullets and check collisions with AI
      setBullets(prev => {
        const newBullets = prev.map(b => ({ ...b, x: b.x + 2.0 })).filter(b => b.x < FINISH_LINE + 10);

        // Check collisions with AI
        newBullets.forEach(bullet => {
          setAiTanks(ais => ais.map(ai => {
            if (ai.lane === bullet.lane && Math.abs(ai.position - bullet.x) < 6 && ai.stunned <= 0) {
              return { ...ai, stunned: 50, speed: 0 };
            }
            return ai;
          }));
        });

        return newBullets.filter(b => {
          const hit = aiTanks.some(ai => ai.lane === b.lane && Math.abs(ai.position - b.x) < 6);
          return !hit;
        });
      });

      // Update enemy bullets and check collisions with player
      setEnemyBullets(prev => {
        const newBullets = prev.map(b => ({ ...b, x: b.x - 1.5 })).filter(b => b.x > playerPosition - 20);

        // Check collisions with player
        newBullets.forEach(bullet => {
          if (bullet.lane === playerLane && Math.abs(bullet.x - playerPosition) < 5 && playerStunned <= 0) {
            // Player takes damage
            const damage = Math.max(5, 15 - Math.floor(PLAYER_ARMOR / 10));
            setPlayerHealth(hp => Math.max(0, hp - damage));
            setPlayerStunned(20);
            setDamageFlash(true);
            setTimeout(() => setDamageFlash(false), 200);
          }
        });

        return newBullets.filter(b => {
          const hit = b.lane === playerLane && Math.abs(b.x - playerPosition) < 5;
          return !hit;
        });
      });

      // Check finish order for AI
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

      // Calculate reward
      let reward = 0;
      if (place === 1) reward = 1000;
      else if (place === 2) reward = 500;
      else if (place === 3) reward = 300;
      else if (place === 4) reward = 200;
      else if (place === 5) reward = 100;
      else reward = 20;

      setRaceReward(reward);

      // Check for cases
      const newMatchCount = matchesPlayed + 1;
      setMatchesPlayed(newMatchCount);
      if (newMatchCount % 5 === 0) {
        setAvailableCases(prev => prev + 6);
      }

      setTimeout(() => setCurrentScreen("raceResult"), 1500);
    }
  }, [finishOrder, raceFinished, matchesPlayed]);

  // Claim race reward
  const claimRaceReward = () => {
    setCoins(prev => prev + raceReward);
    setCurrentScreen("main");
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

      // Apply reward
      if (reward.type === "coins") {
        setCoins(prev => prev + (reward.amount || 0));
      } else if (reward.type === "skin" && reward.id) {
        setOwnedSkins(prev => [...new Set([...prev, reward.id!])]);
      } else if (reward.type === "ammo" && reward.id) {
        setOwnedAmmo(prev => [...new Set([...prev, reward.id!])]);
      }
    }, 2000);
  };

  // Buy item
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

  // Upgrade tank/base
  const upgradeTank = () => {
    const cost = upgradeCost(tankLevel);
    if (coins >= cost && tankLevel < 10) {
      setCoins(prev => prev - cost);
      setTankLevel(prev => prev + 1);
    }
  };

  const upgradeBase = () => {
    const cost = upgradeCost(baseLevel);
    if (coins >= cost && baseLevel < 10) {
      setCoins(prev => prev - cost);
      setBaseLevel(prev => prev + 1);
    }
  };

  // Render 3D-style tank
  const renderTank = (size: "small" | "large" = "large") => {
    const skinColor = tankSkins.find(s => s.id === currentSkin)?.color || "#4a5568";
    const scale = size === "large" ? 1 : 0.6;

    return (
      <div className="relative" style={{ transform: `scale(${scale})` }}>
        {/* Tank shadow */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/30 rounded-full blur-sm" />

        {/* Tank body */}
        <div className="relative">
          {/* Turret */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-6 rounded-t-lg border-2 border-black/20"
            style={{
              background: `linear-gradient(180deg, ${skinColor} 0%, ${skinColor}99 100%)`,
              boxShadow: `0 0 20px ${skinColor}40`
            }}
          >
            {/* Barrel */}
            <div
              className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-8 -rotate-45 origin-bottom rounded-full"
              style={{
                background: `linear-gradient(90deg, #1a1a1a 0%, #333 50%, #1a1a1a 100%)`,
                transform: "translateX(-50%) translateY(-100%) rotate(-15deg)"
              }}
            />
          </div>

          {/* Main hull */}
          <div
            className="w-24 h-10 rounded-lg border-2 border-black/20"
            style={{
              background: `linear-gradient(180deg, ${skinColor} 0%, ${skinColor}bb 50%, ${skinColor}88 100%)`,
              boxShadow: `inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.3), 0 4px 20px ${skinColor}40`
            }}
          >
            {/* Hull details */}
            <div className="absolute top-2 left-2 w-4 h-4 rounded bg-black/20" />
            <div className="absolute top-2 right-2 w-4 h-4 rounded bg-black/20" />
          </div>

          {/* Tracks */}
          <div className="absolute -bottom-2 left-0 w-full flex justify-between px-1">
            <div className="w-8 h-4 bg-gradient-to-b from-gray-700 to-gray-900 rounded-sm border border-gray-600">
              <div className="flex h-full">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex-1 border-r border-gray-600 last:border-0" />
                ))}
              </div>
            </div>
            <div className="w-8 h-4 bg-gradient-to-b from-gray-700 to-gray-900 rounded-sm border border-gray-600">
              <div className="flex h-full">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex-1 border-r border-gray-600 last:border-0" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Level badge */}
        {size === "large" && (
          <div className="absolute -top-6 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-xs font-bold text-black border-2 border-yellow-300 shadow-lg">
            {tankLevel}
          </div>
        )}
      </div>
    );
  };

  // Render base icon (visual)
  const renderBaseIcon = () => (
    <div className="relative w-20 h-16">
      {/* Base building */}
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-lg border-2 border-gray-500">
        {/* Windows */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-400/80 rounded-sm" />
        <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400/80 rounded-sm" />
        {/* Door */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-5 bg-gray-900 rounded-t-sm" />
      </div>
      {/* Roof */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-6 bg-gradient-to-b from-red-700 to-red-900 clip-triangle"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
      {/* Level */}
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white border-2 border-blue-300">
        {baseLevel}
      </div>
    </div>
  );

  // AUTH SCREEN
  const renderAuth = () => (
    <div className="space-y-4 px-2">
      <div className="text-center mb-4">
        <div className="text-lg font-bold text-[var(--neon-green)]">{gt("welcome")}</div>
      </div>

      <div className="space-y-3">
        <input
          type="text"
          placeholder={gt("username")}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 bg-black/50 border border-[var(--neon-green)]/30 rounded-lg text-white text-sm font-mono focus:border-[var(--neon-green)] focus:outline-none"
        />
        <input
          type="password"
          placeholder={gt("password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-black/50 border border-[var(--neon-green)]/30 rounded-lg text-white text-sm font-mono focus:border-[var(--neon-green)] focus:outline-none"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleLogin}
          className="flex-1 py-2 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all text-sm"
        >
          {gt("login")}
        </button>
        <button
          onClick={() => setCurrentScreen("register")}
          className="flex-1 py-2 border border-[var(--neon-green)]/50 text-[var(--neon-green)] font-bold rounded-lg hover:bg-[var(--neon-green)]/10 transition-all text-sm"
        >
          {gt("register")}
        </button>
      </div>

      <button
        onClick={() => router.push("/")}
        className="w-full py-2 text-[var(--muted)] text-xs hover:text-white transition-colors"
      >
        {gt("quit")}
      </button>
    </div>
  );

  // REGISTER SCREEN
  const renderRegister = () => (
    <div className="space-y-4 px-2">
      <div className="text-center mb-4">
        <div className="text-lg font-bold text-[var(--neon-green)]">{gt("register")}</div>
      </div>

      <div className="space-y-3">
        <input
          type="text"
          placeholder={gt("username")}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 bg-black/50 border border-[var(--neon-green)]/30 rounded-lg text-white text-sm font-mono focus:border-[var(--neon-green)] focus:outline-none"
        />
        <input
          type="password"
          placeholder={gt("password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-black/50 border border-[var(--neon-green)]/30 rounded-lg text-white text-sm font-mono focus:border-[var(--neon-green)] focus:outline-none"
        />
        <input
          type="password"
          placeholder={gt("confirmPassword")}
          className="w-full px-4 py-2 bg-black/50 border border-[var(--neon-green)]/30 rounded-lg text-white text-sm font-mono focus:border-[var(--neon-green)] focus:outline-none"
        />
      </div>

      <button
        onClick={handleRegister}
        className="w-full py-2 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all text-sm"
      >
        {gt("createAccount")}
      </button>

      <button
        onClick={() => setCurrentScreen("auth")}
        className="w-full py-2 text-[var(--muted)] text-xs hover:text-white transition-colors"
      >
        {gt("backToLogin")}
      </button>
    </div>
  );

  // CHARACTER SELECT
  const renderCharacterSelect = () => (
    <div className="space-y-4 text-center">
      <div className="text-sm font-bold text-[var(--neon-green)] mb-4">{gt("selectCharacter")}</div>

      <div className="flex justify-center gap-4">
        {(["male", "female"] as Gender[]).map((g) => (
          <button
            key={g}
            onClick={() => setGender(g)}
            className={`relative p-3 rounded-xl border-2 transition-all ${
              gender === g
                ? "border-[var(--neon-green)] bg-[var(--neon-green)]/10 shadow-[0_0_20px_var(--neon-green)/30]"
                : "border-[var(--border)] hover:border-[var(--neon-green)]/50"
            }`}
          >
            {/* Character icon */}
            <div className="w-12 h-16 relative">
              <div className={`w-8 h-8 mx-auto rounded-full ${g === "male" ? "bg-blue-500" : "bg-pink-500"}`}>
                {/* Face */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-amber-200" />
              </div>
              {/* Body */}
              <div className={`w-10 h-8 mx-auto mt-1 rounded-t-lg ${g === "male" ? "bg-blue-600" : "bg-pink-600"}`} />
            </div>
            <div className="text-xs font-mono mt-2 text-white">{gt(g)}</div>
            {gender === g && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--neon-green)] rounded-full flex items-center justify-center text-black text-xs">✓</div>
            )}
          </button>
        ))}
      </div>

      <button
        onClick={() => setCurrentScreen("main")}
        className="w-full py-3 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all"
      >
        {gt("confirm")}
      </button>
    </div>
  );

  // MAIN MENU
  const renderMainMenu = () => {
    return (
      <div className="space-y-2">
        {/* Player info bar */}
        <div className="flex items-center justify-between mb-2 px-2">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full ${gender === "male" ? "bg-blue-500" : "bg-pink-500"} flex items-center justify-center text-xs`}>
              {playerName.charAt(0).toUpperCase()}
            </div>
            <span className="text-xs font-mono text-white">{playerName}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 rounded-full">
            <span className="text-yellow-400 text-xs">🪙</span>
            <span className="text-xs font-bold text-yellow-400">{coins.toLocaleString()}</span>
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
          <button
            key={item.label}
            onClick={item.action}
            className={`w-full py-2 px-4 text-left font-mono text-sm transition-all duration-200 rounded-lg border flex items-center gap-3 ${
              item.color
                ? `bg-gradient-to-r ${item.color} border-transparent text-white hover:opacity-90`
                : "border-[var(--border)] text-[var(--muted)] hover:border-white/50 hover:text-white"
            }`}
          >
            <span>{item.icon}</span>
            <span className="flex-1">{item.label}</span>
            {item.badge && item.badge > 0 && (
              <span className="px-2 py-0.5 bg-green-500 rounded-full text-[10px] text-white font-bold">
                +{item.badge > 999 ? '999+' : item.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    );
  };

  // MODE SELECT
  const renderModeSelect = () => (
    <div className="space-y-4">
      <button
        onClick={() => { setGameMode("solo"); startRace(); }}
        className="w-full p-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 border-2 border-transparent hover:border-white/30 transition-all"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎮</span>
          <div className="text-left">
            <div className="font-bold text-white">{gt("soloRace")}</div>
            <div className="text-xs text-white/70">{gt("soloDesc")}</div>
          </div>
        </div>
      </button>

      <button
        onClick={() => { setGameMode("friends"); setLobbyCode(Math.random().toString(36).substring(2, 8).toUpperCase()); setLobbyPlayers([{name: playerName, ready: false}]); setCurrentScreen("lobby"); }}
        className="w-full p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-transparent hover:border-white/30 transition-all"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">👥</span>
          <div className="text-left">
            <div className="font-bold text-white">{gt("playWithFriends")}</div>
            <div className="text-xs text-white/70">{gt("friendsDesc")}</div>
          </div>
        </div>
      </button>

      <button
        onClick={() => setCurrentScreen("main")}
        className="w-full py-3 mt-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-sm rounded-lg border border-gray-600 hover:border-white/50 hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2"
      >
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  // LOBBY
  const renderLobby = () => (
    <div className="space-y-4">
      <div className="text-center p-3 bg-black/30 rounded-lg">
        <div className="text-[10px] text-gray-400">{gt("lobbyCode")}</div>
        <div className="text-xl font-bold text-[var(--neon-green)] font-mono tracking-widest">{lobbyCode}</div>
        <button
          onClick={() => navigator.clipboard?.writeText(lobbyCode)}
          className="text-[10px] text-blue-400 hover:text-blue-300 mt-1"
        >
          {gt("copyCode")}
        </button>
      </div>

      <div className="space-y-2">
        <div className="text-xs text-gray-400">{gt("players")} ({lobbyPlayers.length}/10)</div>
        <div className="max-h-32 overflow-y-auto space-y-1">
          {lobbyPlayers.map((p, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-black/20 rounded-lg">
              <span className="text-sm text-white">{p.name}</span>
              {p.ready && <span className="text-xs text-green-400">{gt("ready")}</span>}
            </div>
          ))}
          {[...Array(Math.max(0, 3 - lobbyPlayers.length))].map((_, i) => (
            <div key={`empty-${i}`} className="flex items-center justify-center p-2 bg-black/10 rounded-lg border border-dashed border-gray-700">
              <span className="text-xs text-gray-500">{gt("waitingPlayers")}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setIsReady(!isReady)}
          className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
            isReady ? "bg-green-500 text-black" : "bg-gray-600 text-white hover:bg-gray-500"
          }`}
        >
          {gt("ready")}
        </button>
        <button
          onClick={startRace}
          className="flex-1 py-2 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all text-sm"
        >
          {gt("startRace")}
        </button>
      </div>

      <button
        onClick={() => setCurrentScreen("modeSelect")}
        className="w-full py-3 mt-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-sm rounded-lg border border-gray-600 hover:border-white/50 hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2"
      >
        <span>◀</span> {gt("leaveLobby")}
      </button>
    </div>
  );

  // COUNTDOWN
  const renderCountdown = () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="text-6xl font-black text-[var(--neon-green)] animate-pulse">
          {countdown > 0 ? countdown : "GO!"}
        </div>
        <div className="text-sm text-gray-400 mt-4">{gt("raceStarting")}</div>
      </div>
    </div>
  );

  // RACE
  const renderRace = () => {
    const skinColor = tankSkins.find(s => s.id === currentSkin)?.color || "#4a5568";

    // Calculate current race positions
    const allRacers = [
      { name: "player", position: playerPosition, lane: playerLane, color: skinColor, isPlayer: true, stunned: playerStunned },
      ...aiTanks.map(ai => ({ ...ai, isPlayer: false }))
    ].sort((a, b) => b.position - a.position);

    const playerRacePosition = allRacers.findIndex(r => r.name === "player") + 1;

    // Get tanks visible relative to player (within view range)
    const viewRange = 40; // Increased view range for longer race
    const visibleTanks = aiTanks.filter(ai => {
      const diff = ai.position - playerPosition;
      return diff > -15 && diff < viewRange; // See more ahead than behind
    });

    // Calculate progress percentage
    const progressPercent = (playerPosition / FINISH_LINE) * 100;

    return (
      <div className={`h-full flex flex-col ${damageFlash ? 'bg-red-900/30' : ''}`} ref={gameRef}>
        {/* Damage flash overlay */}
        {damageFlash && (
          <div className="absolute inset-0 bg-red-500/30 pointer-events-none z-50 animate-pulse" />
        )}

        {/* Top HUD Bar */}
        <div className="flex justify-between items-center px-3 py-2 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 rounded-lg mb-2 border border-gray-700">
          <div className="flex items-center gap-3">
            <div className="text-lg font-black text-white">
              P<span className="text-[var(--neon-green)]">{playerRacePosition}</span>
              <span className="text-xs text-gray-400">/10</span>
            </div>
            {/* Player Health Bar */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-red-400">❤️</span>
              <div className="w-16 h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
                <div
                  className={`h-full transition-all duration-200 ${
                    playerHealth > 60 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                    playerHealth > 30 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                    'bg-gradient-to-r from-red-500 to-red-400 animate-pulse'
                  }`}
                  style={{ width: `${playerHealth}%` }}
                />
              </div>
              <span className="text-[10px] text-white font-mono">{playerHealth}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-24 h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
              <div
                className="h-full bg-gradient-to-r from-[var(--neon-green)] to-emerald-400 transition-all duration-100"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs text-white font-mono ml-1">{Math.round(progressPercent)}%</span>
          </div>
          <div className="text-sm text-yellow-400 font-bold">🪙 {coins}</div>
        </div>

        <div className="flex-1 flex gap-2">
          {/* Main Race View - 3D Perspective */}
          <div className="flex-1 relative rounded-lg overflow-hidden border border-gray-700" style={{
            background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 30%, #1a1a2e 100%)"
          }}>
            {/* Sky/Horizon */}
            <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-indigo-900/50 to-transparent" />

            {/* Road with perspective */}
            <div className="absolute inset-0" style={{
              background: `
                linear-gradient(180deg,
                  transparent 0%,
                  transparent 20%,
                  #2d2d2d 20%,
                  #2d2d2d 100%
                )
              `,
              clipPath: "polygon(35% 25%, 65% 25%, 100% 100%, 0% 100%)"
            }}>
              {/* Lane dividers with perspective */}
              <div className="absolute inset-0" style={{
                background: `
                  repeating-linear-gradient(
                    180deg,
                    transparent 0px,
                    transparent 20px,
                    #ffd700 20px,
                    #ffd700 40px
                  )
                `,
                clipPath: "polygon(48% 25%, 52% 25%, 52% 100%, 48% 100%)",
                animation: `roadMove ${Math.max(0.3, 1 - playerSpeed / 5)}s linear infinite`
              }} />
              <div className="absolute inset-0" style={{
                background: `
                  repeating-linear-gradient(
                    180deg,
                    transparent 0px,
                    transparent 20px,
                    #ffd700 20px,
                    #ffd700 40px
                  )
                `,
                clipPath: "polygon(38% 25%, 42% 25%, 35% 100%, 25% 100%)",
                animation: `roadMove ${Math.max(0.3, 1 - playerSpeed / 5)}s linear infinite`
              }} />
              <div className="absolute inset-0" style={{
                background: `
                  repeating-linear-gradient(
                    180deg,
                    transparent 0px,
                    transparent 20px,
                    #ffd700 20px,
                    #ffd700 40px
                  )
                `,
                clipPath: "polygon(58% 25%, 62% 25%, 75% 100%, 65% 100%)",
                animation: `roadMove ${Math.max(0.3, 1 - playerSpeed / 5)}s linear infinite`
              }} />

              {/* Road edges */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/50" style={{
                clipPath: "polygon(0 25%, 100% 25%, 100% 100%, 0 100%)",
                transform: "translateX(calc(35% * (100vw / 100)))"
              }} />
            </div>

            {/* Finish line indicator when close */}
            {playerPosition > 85 && (
              <div className="absolute top-1/4 left-1/4 right-1/4 h-4 flex">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-white' : 'bg-black'}`} />
                ))}
              </div>
            )}

            {/* AI Tanks rendered with perspective based on relative position */}
            {visibleTanks.map((ai) => {
              const relativePos = ai.position - playerPosition;
              // Calculate vertical position (further = higher on screen, closer to horizon)
              const verticalPercent = Math.max(30, Math.min(75, 75 - (relativePos * 2)));
              // Calculate size (further = smaller)
              const scale = Math.max(0.3, Math.min(1, 1 - (relativePos / viewRange) * 0.7));
              // Calculate horizontal position based on lane
              const laneOffset = (ai.lane - 1) * 25 * scale;

              return (
                <div
                  key={ai.name}
                  className="absolute transition-all duration-75"
                  style={{
                    left: `calc(50% + ${laneOffset}px)`,
                    top: `${verticalPercent}%`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    zIndex: Math.round((1 - scale) * 100),
                    opacity: ai.stunned > 0 ? 0.5 : 1
                  }}
                >
                  {/* Tank body */}
                  <div className="relative">
                    {/* Shadow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-black/40 rounded-full blur-sm" />
                    {/* Tank hull */}
                    <div
                      className="w-16 h-10 rounded-lg relative"
                      style={{
                        background: `linear-gradient(180deg, ${ai.color} 0%, ${ai.color}aa 50%, ${ai.color}66 100%)`,
                        boxShadow: ai.stunned > 0
                          ? "0 0 20px red, 0 4px 8px rgba(0,0,0,0.5)"
                          : `0 0 15px ${ai.color}80, 0 4px 8px rgba(0,0,0,0.5)`,
                        border: `2px solid ${ai.color}`
                      }}
                    >
                      {/* Turret */}
                      <div
                        className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-6 rounded-md"
                        style={{ background: `linear-gradient(180deg, ${ai.color} 0%, ${ai.color}88 100%)` }}
                      />
                      {/* Barrel */}
                      <div
                        className="absolute top-3 left-1/2 w-10 h-2 rounded-r-full"
                        style={{ background: "#333", marginLeft: "4px" }}
                      />
                      {/* Tracks */}
                      <div className="absolute -left-1 top-1 bottom-1 w-2 bg-gray-800 rounded" />
                      <div className="absolute -right-1 top-1 bottom-1 w-2 bg-gray-800 rounded" />
                    </div>
                    {/* Name tag */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/70 rounded text-[10px] text-white font-bold whitespace-nowrap">
                      {ai.name}
                    </div>
                    {/* Stunned indicator */}
                    {ai.stunned > 0 && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-red-500 text-lg animate-bounce">💥</div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Player Bullets (shooting forward) */}
            {bullets.map((bullet, i) => {
              const relativePos = bullet.x - playerPosition;
              if (relativePos < -5 || relativePos > viewRange) return null;
              const verticalPercent = Math.max(35, Math.min(70, 70 - (relativePos * 1.2)));
              const scale = Math.max(0.4, 1 - (relativePos / viewRange) * 0.6);
              const laneOffset = (bullet.lane - 1) * 25 * scale;

              return (
                <div
                  key={`player-bullet-${i}`}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${laneOffset}px)`,
                    top: `${verticalPercent}%`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    zIndex: 50
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full bg-yellow-400"
                    style={{ boxShadow: "0 0 15px yellow, 0 0 30px orange" }}
                  />
                  {/* Bullet trail */}
                  <div
                    className="absolute top-1/2 -left-3 w-6 h-1 bg-gradient-to-l from-yellow-400 to-transparent rounded-full"
                    style={{ transform: "translateY(-50%)" }}
                  />
                </div>
              );
            })}

            {/* Enemy Bullets (shooting towards player) */}
            {enemyBullets.map((bullet, i) => {
              const relativePos = bullet.x - playerPosition;
              if (relativePos < -10 || relativePos > viewRange) return null;
              const verticalPercent = Math.max(40, Math.min(85, 85 - (relativePos * 1.0)));
              const scale = Math.max(0.5, Math.min(1.2, 1.2 - (relativePos / viewRange) * 0.7));
              const laneOffset = (bullet.lane - 1) * 25 * scale;

              return (
                <div
                  key={`enemy-bullet-${i}`}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${laneOffset}px)`,
                    top: `${verticalPercent}%`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    zIndex: 55
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full bg-red-500 animate-pulse"
                    style={{ boxShadow: "0 0 15px red, 0 0 30px #ff4444" }}
                  />
                  {/* Bullet trail */}
                  <div
                    className="absolute top-1/2 left-3 w-8 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"
                    style={{ transform: "translateY(-50%)" }}
                  />
                </div>
              );
            })}

            {/* Player Tank (always at bottom center) */}
            <div
              className={`absolute bottom-8 transition-all duration-100 ${playerStunned > 0 ? 'animate-pulse' : ''}`}
              style={{
                left: `calc(50% + ${(playerLane - 1) * 50}px)`,
                transform: "translateX(-50%)",
                zIndex: 100,
                opacity: playerStunned > 0 ? 0.7 : 1
              }}
            >
              {/* Damage indicator */}
              {playerStunned > 0 && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-red-500 text-2xl animate-bounce">
                  💥
                </div>
              )}
              {/* Shadow */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/50 rounded-full blur-md" />
              {/* Tank hull */}
              <div
                className="w-20 h-12 rounded-lg relative"
                style={{
                  background: playerStunned > 0
                    ? `linear-gradient(180deg, #ff4444 0%, #ff444488 50%, #ff444466 100%)`
                    : `linear-gradient(180deg, ${skinColor} 0%, ${skinColor}aa 50%, ${skinColor}66 100%)`,
                  boxShadow: playerStunned > 0
                    ? `0 0 25px rgba(255,0,0,0.8), 0 6px 12px rgba(0,0,0,0.5)`
                    : `0 0 25px ${skinColor}80, 0 6px 12px rgba(0,0,0,0.5)`,
                  border: playerStunned > 0 ? `3px solid #ff4444` : `3px solid ${skinColor}`
                }}
              >
                {/* Turret */}
                <div
                  className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-7 rounded-md"
                  style={{ background: playerStunned > 0 ? `linear-gradient(180deg, #ff4444 0%, #ff444488 100%)` : `linear-gradient(180deg, ${skinColor} 0%, ${skinColor}88 100%)` }}
                />
                {/* Barrel */}
                <div
                  className="absolute top-3 left-1/2 w-12 h-3 rounded-r-full bg-gray-800"
                  style={{ marginLeft: "5px" }}
                />
                {/* Tracks */}
                <div className="absolute -left-2 top-1 bottom-1 w-3 bg-gray-800 rounded" />
                <div className="absolute -right-2 top-1 bottom-1 w-3 bg-gray-800 rounded" />
                {/* Level badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--neon-green)] rounded-full flex items-center justify-center text-black text-xs font-black">
                  {tankLevel}
                </div>
              </div>
              {/* Player label */}
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded text-xs font-black ${playerStunned > 0 ? 'bg-red-500 text-white' : 'bg-[var(--neon-green)] text-black'}`}>
                {playerStunned > 0 ? 'HIT!' : 'YOU'}
              </div>
              {/* Speed indicator */}
              {isAccelerating && playerStunned <= 0 && (
                <>
                  <div className="absolute -bottom-1 -left-4 text-orange-400 text-lg animate-pulse">🔥</div>
                  <div className="absolute -bottom-1 -right-4 text-orange-400 text-lg animate-pulse">🔥</div>
                </>
              )}
              {/* Smoke when damaged */}
              {playerHealth < 50 && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-gray-400 text-sm animate-bounce opacity-60">💨</div>
              )}
            </div>

            {/* Speed lines when accelerating */}
            {isAccelerating && playerSpeed > 1 && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 bg-white/20 rounded-full"
                    style={{
                      height: `${20 + Math.random() * 30}%`,
                      left: `${10 + i * 12}%`,
                      bottom: 0,
                      animation: `speedLine 0.3s linear infinite`,
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Live Leaderboard Panel */}
          <div className="w-28 bg-black/60 rounded-lg border border-gray-700 p-2 flex flex-col">
            <div className="text-[10px] text-gray-400 font-bold mb-1 text-center border-b border-gray-700 pb-1">
              POSITIONS
            </div>
            <div className="flex-1 overflow-hidden">
              {allRacers.slice(0, 10).map((racer, idx) => (
                <div
                  key={racer.name}
                  className={`flex items-center gap-1 py-0.5 px-1 rounded text-[9px] mb-0.5 ${
                    racer.isPlayer
                      ? "bg-[var(--neon-green)]/30 border border-[var(--neon-green)]"
                      : "bg-gray-800/50"
                  }`}
                >
                  <span className={`font-bold w-4 ${idx < 3 ? "text-yellow-400" : "text-gray-400"}`}>
                    {idx + 1}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: racer.color }}
                  />
                  <span className={`truncate ${racer.isPlayer ? "text-[var(--neon-green)] font-bold" : "text-white"}`}>
                    {racer.isPlayer ? "YOU" : racer.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Power-up bar (Blur style) */}
        <div className="flex gap-1 mt-1 justify-center">
          {powerUpTypes.slice(0, 6).map((pu) => {
            const count = storedPowerUps[pu.id] || 0;
            const isOnCooldown = powerUpCooldown > 0;
            return (
              <button
                key={pu.id}
                onClick={() => usePowerUp(pu.id)}
                disabled={count <= 0 || isOnCooldown}
                className={`px-2 py-1 rounded text-sm transition-all ${
                  count > 0 && !isOnCooldown
                    ? 'bg-purple-600 hover:bg-purple-500 border border-purple-400'
                    : 'bg-gray-800/50 border border-gray-700 opacity-50'
                }`}
                title={`${pu.name}: ${pu.effect}`}
              >
                {pu.icon}
                <span className="text-[10px] ml-0.5">{count}</span>
              </button>
            );
          })}
          {/* Shield/Nitro active indicators */}
          {shieldActive > 0 && (
            <div className="px-2 py-1 bg-blue-500 rounded text-sm animate-pulse">🛡️</div>
          )}
          {nitroActive > 0 && (
            <div className="px-2 py-1 bg-orange-500 rounded text-sm animate-pulse">🔥</div>
          )}
        </div>

        {/* Controls */}
        <div className="flex gap-2 mt-1">
          <button
            onTouchStart={() => setPlayerLane(prev => Math.max(0, prev - 1))}
            onClick={() => setPlayerLane(prev => Math.max(0, prev - 1))}
            className="flex-1 py-3 bg-gradient-to-b from-blue-500/40 to-blue-600/40 rounded-xl text-white text-2xl font-bold active:from-blue-500 active:to-blue-600 border border-blue-400/50 transition-all"
          >
            ◀
          </button>
          <button
            onTouchStart={() => setIsAccelerating(true)}
            onTouchEnd={() => setIsAccelerating(false)}
            onMouseDown={() => setIsAccelerating(true)}
            onMouseUp={() => setIsAccelerating(false)}
            onMouseLeave={() => setIsAccelerating(false)}
            className={`flex-[2] py-3 rounded-xl text-white text-lg font-bold border transition-all ${
              nitroActive > 0
                ? "bg-gradient-to-b from-orange-400 to-red-600 border-orange-300 shadow-lg shadow-orange-500/50 animate-pulse"
                : isAccelerating
                ? "bg-gradient-to-b from-green-400 to-green-600 border-green-300 shadow-lg shadow-green-500/50"
                : "bg-gradient-to-b from-green-500/40 to-green-600/40 border-green-400/50"
            }`}
          >
            {nitroActive > 0 ? '🔥 NITRO!' : '▲ GAS'}
          </button>
          <button
            onClick={() => {
              const now = Date.now();
              if (now - lastShot > 500) {
                setLastShot(now);
                setBullets(prev => [...prev, { x: playerPosition + 5, y: 0, lane: playerLane }]);
              }
            }}
            className="flex-1 py-3 bg-gradient-to-b from-red-500/40 to-red-600/40 rounded-xl text-white text-2xl active:from-red-500 active:to-red-600 border border-red-400/50 transition-all"
          >
            💥
          </button>
          <button
            onTouchStart={() => setPlayerLane(prev => Math.min(2, prev + 1))}
            onClick={() => setPlayerLane(prev => Math.min(2, prev + 1))}
            className="flex-1 py-3 bg-gradient-to-b from-blue-500/40 to-blue-600/40 rounded-xl text-white text-2xl font-bold active:from-blue-500 active:to-blue-600 border border-blue-400/50 transition-all"
          >
            ▶
          </button>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes roadMove {
            0% { background-position-y: 0px; }
            100% { background-position-y: 40px; }
          }
          @keyframes speedLine {
            0% { transform: translateY(100%); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateY(-100%); opacity: 0; }
          }
        `}</style>
      </div>
    );
  };

  // RACE RESULT
  const renderRaceResult = () => (
    <div className="space-y-4 text-center">
      <div className={`text-3xl font-black ${playerPlace === 1 ? "text-yellow-400 animate-pulse" : playerPlace <= 5 ? "text-[var(--neon-green)]" : "text-red-400"}`}>
        {playerPlace === 1 ? gt("victory") : playerPlace <= 5 ? gt("top5") : gt("finished")}
      </div>

      <div className="text-5xl font-bold text-white">
        #{playerPlace}
      </div>
      <div className="text-sm text-gray-400">{gt("yourPlace")}</div>

      {playerPlace === 1 && (
        <div className="text-sm text-yellow-400 animate-bounce">{gt("first")}</div>
      )}

      <div className="bg-yellow-500/20 px-6 py-3 rounded-lg inline-block">
        <div className="text-2xl font-bold text-yellow-400">+{raceReward} 🪙</div>
        <div className="text-[10px] text-yellow-300">{gt("reward")}</div>
      </div>

      {matchesPlayed % 5 === 0 && (
        <div className="text-sm text-purple-400 animate-bounce">
          +6 {gt("cases")}! 🎁
        </div>
      )}

      <button
        onClick={claimRaceReward}
        className="w-full py-3 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all"
      >
        {gt("claimReward")}
      </button>
    </div>
  );

  // SETTINGS
  const renderSettings = () => (
    <div className="space-y-2">
      {[
        { label: gt("graphics"), action: () => setCurrentScreen("graphics"), icon: "🎨" },
        { label: gt("language"), action: () => setCurrentScreen("language"), icon: "🌐" },
      ].map((item) => (
        <button
          key={item.label}
          onClick={item.action}
          className="w-full py-2.5 px-4 text-left font-mono text-sm transition-all duration-200 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:border-white/50 hover:text-white flex items-center gap-3"
        >
          <span>{item.icon}</span>
          <span className="flex-1">{item.label}</span>
          <span>▶</span>
        </button>
      ))}
      <button
        onClick={() => setCurrentScreen("main")}
        className="w-full py-3 mt-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-sm rounded-lg border border-gray-600 hover:border-white/50 hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2"
      >
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  // GRAPHICS SETTINGS
  const renderGraphics = () => (
    <div className="space-y-4">
      {/* Quality selector */}
      <div className="space-y-2">
        <div className="text-xs text-gray-400">{gt("quality")}</div>
        <div className="grid grid-cols-4 gap-1">
          {qualityLabels.map((label, i) => (
            <button
              key={label}
              onClick={() => setGraphicsQuality(i)}
              className={`py-2 text-[10px] font-mono rounded transition-all ${
                graphicsQuality === i
                  ? "bg-[var(--neon-green)] text-black"
                  : "bg-black/30 text-gray-400 hover:bg-black/50"
              }`}
            >
              {gt(label)}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle options */}
      {[
        { label: gt("shadows"), value: shadows, setter: setShadows },
        { label: gt("particles"), value: particles, setter: setParticles },
        { label: gt("antiAliasing"), value: antiAliasing, setter: setAntiAliasing },
        { label: gt("vsync"), value: vsync, setter: setVsync },
      ].map((setting) => (
        <div key={setting.label} className="flex items-center justify-between">
          <span className="text-xs text-gray-300">{setting.label}</span>
          <button
            onClick={() => setting.setter(!setting.value)}
            className={`px-3 py-1 text-xs font-mono rounded transition-all ${
              setting.value
                ? "bg-[var(--neon-green)]/20 border border-[var(--neon-green)] text-[var(--neon-green)]"
                : "bg-black/30 border border-gray-600 text-gray-400"
            }`}
          >
            {setting.value ? gt("on") : gt("off")}
          </button>
        </div>
      ))}

      <button
        onClick={() => setCurrentScreen("settings")}
        className="w-full py-2 bg-[var(--neon-green)] text-black font-bold rounded-lg hover:opacity-90 transition-all text-sm mt-4"
      >
        {gt("apply")}
      </button>

      <button
        onClick={() => setCurrentScreen("settings")}
        className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-sm rounded-lg border border-gray-600 hover:border-white/50 hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2"
      >
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  // GARAGE (Component upgrades)
  const renderGarage = () => {
    const stats = getTankStats();
    return (
      <div className="space-y-3">
        {/* Tank display */}
        <div className="flex justify-center py-2">
          {renderTank("large")}
        </div>

        {/* Stats display */}
        <div className="grid grid-cols-4 gap-1 text-center">
          {[
            { label: "DMG", value: stats.damage, color: "text-red-400" },
            { label: "ARM", value: stats.armor, color: "text-blue-400" },
            { label: "SPD", value: stats.speed, color: "text-green-400" },
            { label: "HND", value: stats.handling, color: "text-yellow-400" },
          ].map((stat) => (
            <div key={stat.label} className="bg-black/30 rounded-lg p-1">
              <div className={`text-sm font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[8px] text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Component upgrades */}
        <div className="text-xs text-gray-400 text-center">Upgrade tank components</div>
        <div className="space-y-2">
          {tankComponents.map((comp) => {
            const level = tankComponentLevels[comp.id] || 1;
            const cost = getComponentUpgradeCost(comp.id);
            const canAfford = coins >= cost;
            const isMaxed = level >= comp.maxLevel;

            return (
              <div
                key={comp.id}
                className="p-2 rounded-lg bg-blue-900/20 border border-blue-500/30"
              >
                <div className="flex items-center gap-2">
                  <div className="text-xl">{comp.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{comp.name}</span>
                      <span className="text-xs text-yellow-400">Lv.{level}</span>
                    </div>
                    <div className="text-[10px] text-gray-400">+{level * 8} {comp.stat}</div>
                  </div>
                  <button
                    onClick={() => upgradeComponent(comp.id)}
                    disabled={!canAfford || isMaxed}
                    className={`px-2 py-1 text-[10px] font-bold rounded ${
                      isMaxed
                        ? 'bg-gray-600 text-gray-400'
                        : canAfford
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:opacity-90'
                        : 'bg-gray-700 text-gray-500'
                    }`}
                  >
                    {isMaxed ? 'MAX' : `⬆️ ${cost}🪙`}
                  </button>
                </div>
                {/* Level progress */}
                <div className="mt-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{ width: `${(level / comp.maxLevel) * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Power-ups inventory */}
        <div className="text-xs text-gray-400 text-center mt-2">Your Power-ups</div>
        <div className="flex flex-wrap gap-1 justify-center">
          {powerUpTypes.map((pu) => {
            const count = storedPowerUps[pu.id] || 0;
            return (
              <div
                key={pu.id}
                className={`px-2 py-1 rounded text-[10px] ${
                  count > 0 ? 'bg-purple-900/50 border border-purple-500/30' : 'bg-gray-800/30 border border-gray-700'
                }`}
                title={pu.effect}
              >
                {pu.icon} {count}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setCurrentScreen("main")}
          className="w-full py-3 mt-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-sm rounded-lg border border-gray-600 hover:border-white/50 hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2"
        >
          <span>◀</span> {gt("back")}
        </button>
      </div>
    );
  };

  // SHOP
  const renderShop = () => (
    <div className="space-y-3">
      {/* Tabs */}
      <div className="flex gap-2">
        {(["skins", "ammo"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setShopTab(tab)}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
              shopTab === tab
                ? "bg-[var(--neon-pink)] text-black"
                : "bg-black/30 text-[var(--muted)] hover:text-white"
            }`}
          >
            {gt(tab)}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="space-y-2 max-h-56 overflow-y-auto">
        {shopTab === "skins" ? (
          tankSkins.map((skin) => (
            <div key={skin.id} className="flex items-center gap-2 p-2 bg-black/30 rounded-lg">
              <div className="w-8 h-8 rounded" style={{ backgroundColor: skin.color }} />
              <div className="flex-1">
                <div className="text-xs font-bold text-white">{skin.name}</div>
                <div className="text-[10px] text-gray-400">{skin.price > 0 ? `${skin.price} 🪙` : "FREE"}</div>
              </div>
              {ownedSkins.includes(skin.id) ? (
                <button
                  onClick={() => setCurrentSkin(skin.id)}
                  className={`px-2 py-1 text-[10px] rounded ${
                    currentSkin === skin.id
                      ? "bg-green-500 text-black"
                      : "bg-gray-600 text-white hover:bg-gray-500"
                  }`}
                >
                  {currentSkin === skin.id ? gt("equipped") : gt("owned")}
                </button>
              ) : (
                <button
                  onClick={() => buySkin(skin)}
                  disabled={coins < skin.price}
                  className={`px-2 py-1 text-[10px] rounded ${
                    coins >= skin.price
                      ? "bg-yellow-500 text-black hover:bg-yellow-400"
                      : "bg-gray-700 text-gray-500"
                  }`}
                >
                  {gt("buy")}
                </button>
              )}
            </div>
          ))
        ) : (
          ammoTypes.map((ammo) => (
            <div key={ammo.id} className="flex items-center gap-2 p-2 bg-black/30 rounded-lg">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-lg">
                💥
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-white">{ammo.name}</div>
                <div className="text-[10px] text-red-400">+{ammo.damage} {gt("damage")}</div>
              </div>
              {ownedAmmo.includes(ammo.id) ? (
                <button
                  onClick={() => setCurrentAmmo(ammo.id)}
                  className={`px-2 py-1 text-[10px] rounded ${
                    currentAmmo === ammo.id
                      ? "bg-green-500 text-black"
                      : "bg-gray-600 text-white hover:bg-gray-500"
                  }`}
                >
                  {currentAmmo === ammo.id ? gt("equipped") : gt("owned")}
                </button>
              ) : (
                <button
                  onClick={() => buyAmmo(ammo)}
                  disabled={coins < ammo.price}
                  className={`px-2 py-1 text-[10px] rounded ${
                    coins >= ammo.price
                      ? "bg-yellow-500 text-black hover:bg-yellow-400"
                      : "bg-gray-700 text-gray-500"
                  }`}
                >
                  {ammo.price > 0 ? `${ammo.price} 🪙` : "FREE"}
                </button>
              )}
            </div>
          ))
        )}
      </div>

      <button
        onClick={() => setCurrentScreen("main")}
        className="w-full py-3 mt-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-sm rounded-lg border border-gray-600 hover:border-white/50 hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2"
      >
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  // CASES
  const renderCases = () => (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-sm font-bold text-yellow-400">{gt("yourCases")}: {availableCases}</div>
        <div className="text-[10px] text-gray-400 mt-1">
          {gt("matchesUntilCases")}: {5 - (matchesPlayed % 5)}
        </div>
      </div>

      {availableCases > 0 ? (
        <>
          <div className="text-xs text-center text-gray-400">{gt("selectCase")}</div>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(Math.min(6, availableCases))].map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedCase(i)}
                className={`aspect-square rounded-lg border-2 transition-all flex items-center justify-center text-2xl ${
                  selectedCase === i
                    ? "border-yellow-400 bg-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.3)] scale-110"
                    : "border-[var(--border)] bg-black/30 hover:border-yellow-400/50"
                }`}
              >
                📦
              </button>
            ))}
          </div>

          <button
            onClick={openCase}
            disabled={selectedCase === null}
            className={`w-full py-2 rounded-lg font-bold text-sm transition-all ${
              selectedCase !== null
                ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black hover:opacity-90"
                : "bg-gray-700 text-gray-500"
            }`}
          >
            {gt("openCase")}
          </button>
        </>
      ) : (
        <div className="text-center py-8 text-gray-500 text-sm">
          Play more battles to earn cases!
        </div>
      )}

      <button
        onClick={() => setCurrentScreen("main")}
        className="w-full py-3 mt-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-sm rounded-lg border border-gray-600 hover:border-white/50 hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2"
      >
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  // CASE OPENING
  const renderCaseOpen = () => (
    <div className="text-center space-y-6 py-4">
      {isOpening ? (
        <>
          <div className="text-6xl animate-bounce">📦</div>
          <div className="text-lg font-bold text-yellow-400 animate-pulse">
            {gt("loading")}
          </div>
        </>
      ) : caseReward ? (
        <>
          <div className="text-sm text-[var(--neon-green)]">{gt("youWon")}</div>
          <div className={`text-4xl ${
            caseReward.rarity === "legendary" ? "animate-pulse" : ""
          }`}>
            {caseReward.type === "coins" ? "🪙" : caseReward.type === "skin" ? "🎨" : "💥"}
          </div>
          <div className={`text-lg font-bold ${
            caseReward.rarity === "common" ? "text-gray-400" :
            caseReward.rarity === "rare" ? "text-blue-400" :
            caseReward.rarity === "epic" ? "text-purple-400" :
            "text-yellow-400 animate-pulse"
          }`}>
            {caseReward.label}
          </div>
          <div className={`text-[10px] uppercase tracking-wider ${
            caseReward.rarity === "legendary" ? "text-yellow-400" : "text-gray-500"
          }`}>
            {caseReward.rarity}
          </div>
          <button
            onClick={() => {
              setCaseReward(null);
              setSelectedCase(null);
              setCurrentScreen("cases");
            }}
            className="w-full py-2 bg-gradient-to-r from-[var(--neon-green)] to-emerald-600 text-black font-bold rounded-lg hover:opacity-90 transition-all"
          >
            {gt("claim")}
          </button>
        </>
      ) : null}
    </div>
  );

  // LANGUAGE MENU
  const renderLanguageMenu = () => (
    <div className="space-y-2">
      {[
        { label: "ENGLISH", lang: "en" as GameLang, flag: "🇺🇸" },
        { label: "РУССКИЙ", lang: "ru" as GameLang, flag: "🇷🇺" },
        { label: "O'ZBEK", lang: "uz" as GameLang, flag: "🇺🇿" },
      ].map((item) => (
        <button
          key={item.label}
          onClick={() => setGameLang(item.lang)}
          className={`w-full py-2.5 px-4 text-left font-mono text-sm transition-all duration-200 rounded-lg border flex items-center gap-3 ${
            gameLang === item.lang
              ? "bg-[var(--neon-green)]/20 border-[var(--neon-green)] text-[var(--neon-green)]"
              : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--neon-green)]/50"
          }`}
        >
          <span>{item.flag}</span>
          <span className="flex-1">{item.label}</span>
          {gameLang === item.lang && <span>✓</span>}
        </button>
      ))}
      <button
        onClick={() => setCurrentScreen("settings")}
        className="w-full py-3 mt-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-sm rounded-lg border border-gray-600 hover:border-white/50 hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2"
      >
        <span>◀</span> {gt("back")}
      </button>
    </div>
  );

  const getScreenTitle = () => {
    switch (currentScreen) {
      case "auth": return gt("login");
      case "register": return gt("register");
      case "character": return gt("selectCharacter");
      case "main": return gt("mainMenu");
      case "garage": return gt("garage");
      case "shop": return gt("shop");
      case "modeSelect": return gt("selectMode");
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

  const renderContent = () => {
    switch (currentScreen) {
      case "auth": return renderAuth();
      case "register": return renderRegister();
      case "character": return renderCharacterSelect();
      case "main": return renderMainMenu();
      case "garage": return renderGarage();
      case "shop": return renderShop();
      case "modeSelect": return renderModeSelect();
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
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#071018] border border-[var(--neon-green)]/30">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--neon-green)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />

      {/* Game title */}
      <div className="absolute top-4 left-0 right-0 text-center z-10">
        <h3 className="text-2xl md:text-3xl font-black">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-green)] via-emerald-400 to-teal-400">
            BI3
          </span>
          <span className="text-white ml-2">TANKS</span>
        </h3>
        <p className="text-[10px] font-mono text-[var(--neon-green)]/60 mt-1">3D TANK RACING</p>
      </div>

      {/* Menu container */}
      <div className="absolute inset-0 flex items-center justify-center pt-8">
        <div className="w-72 md:w-80 max-h-[calc(100%-80px)] overflow-y-auto game-scrollbar">
          {/* Screen title */}
          {!["countdown", "race", "raceResult", "caseOpen"].includes(currentScreen) && getScreenTitle() && (
            <div className="text-center mb-4">
              <span className="text-xs font-mono text-[var(--neon-green)]/70 tracking-widest">
                {"[ "}{getScreenTitle()}{" ]"}
              </span>
            </div>
          )}

          {/* Dynamic content */}
          {renderContent()}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-[var(--neon-green)]/50" />
      <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-[var(--neon-green)]/50" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-[var(--neon-green)]/50" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-[var(--neon-green)]/50" />

      {/* Status bar */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4 text-[9px] font-mono text-[var(--neon-green)]/40">
        <span>3D ENGINE</span>
        <span>•</span>
        <span>60 FPS</span>
        <span>•</span>
        <span>ONLINE</span>
      </div>
    </div>
  );
}

export default function GamesServicePage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      titleKey: "games.pcGames",
      descKey: "games.pcGamesDesc",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      titleKey: "games.mobileGames",
      descKey: "games.mobileGamesDesc",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      titleKey: "games.browserGames",
      descKey: "games.browserGamesDesc",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      titleKey: "games.3dDev",
      descKey: "games.3dDevDesc",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      titleKey: "games.2dArt",
      descKey: "games.2dArtDesc",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      titleKey: "games.soundMusic",
      descKey: "games.soundMusicDesc",
    },
  ];

  const technologies = [
    { name: "Unity", category: "Engine" },
    { name: "Unreal Engine", category: "Engine" },
    { name: "Godot", category: "Engine" },
    { name: "C#", category: "Language" },
    { name: "C++", category: "Language" },
    { name: "GDScript", category: "Language" },
    { name: "Blender", category: "3D" },
    { name: "Maya", category: "3D" },
    { name: "Photoshop", category: "2D" },
    { name: "Aseprite", category: "2D" },
    { name: "FMOD", category: "Audio" },
    { name: "Wwise", category: "Audio" },
  ];

  const genreKeys = [
    "games.action", "games.adventure", "games.rpg", "games.puzzle", "games.platformer",
    "games.shooter", "games.strategy", "games.simulation", "games.racing", "games.horror"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 scanlines opacity-50" />
        <div className="absolute inset-0 cyber-grid opacity-30" />

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-pink)]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-purple)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-mono mb-8">
            <Link href="/" className="text-[var(--muted)] hover:text-[var(--neon-blue)] transition-colors">
              ~/home
            </Link>
            <span className="text-[var(--muted)]">/</span>
            <Link href="/services" className="text-[var(--muted)] hover:text-[var(--neon-blue)] transition-colors">
              services
            </Link>
            <span className="text-[var(--muted)]">/</span>
            <span className="text-[var(--neon-pink)]">games</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--neon-pink)]/10 border border-[var(--neon-pink)]/30 mb-6">
                <svg className="w-5 h-5 text-[var(--neon-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-mono text-[var(--neon-pink)]">GAME_DEV.exe</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-[var(--neon-pink)]">{t("games.title")}</span>
                <br />
                <span className="text-white">{t("games.title2")}</span>
              </h1>

              <p className="text-xl text-[var(--foreground)]/70 mb-8 leading-relaxed">
                {t("services.gameDevDesc")} {t("games.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-[var(--neon-pink)] text-black hover:bg-[var(--neon-pink)]/90 transition-all hover:scale-105"
                  style={{ boxShadow: "0 0 30px var(--neon-pink)" }}
                >
                  <span className="mr-2">{">"}</span>
                  {t("games.startGame")}
                </Link>
                <Link
                  href="/demos"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg border border-[var(--neon-pink)]/50 text-[var(--neon-pink)] hover:bg-[var(--neon-pink)]/10 transition-all"
                >
                  {t("games.playDemos")}
                </Link>
              </div>
            </div>

            {/* Play Game Button */}
            <div className="relative">
              <Link href="/services/games/play" className="block group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#071018] border border-[var(--neon-green)]/30 hover:border-[var(--neon-green)] transition-all duration-300 hover:shadow-[0_0_40px_var(--neon-green)/30]">
                  {/* Animated background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--neon-green)]/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                  </div>

                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }} />

                  {/* Game title */}
                  <div className="absolute top-4 left-0 right-0 text-center z-10">
                    <h3 className="text-2xl md:text-3xl font-black">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-green)] via-emerald-400 to-teal-400">
                        BI3
                      </span>
                      <span className="text-white ml-2">TANKS</span>
                    </h3>
                    <p className="text-[10px] font-mono text-[var(--neon-green)]/60 mt-1">3D TANK RACING</p>
                  </div>

                  {/* Play button in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[var(--neon-green)]/20 border-2 border-[var(--neon-green)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--neon-green)]/30 transition-all duration-300" style={{ boxShadow: "0 0 30px var(--neon-green)" }}>
                      <svg className="w-12 h-12 text-[var(--neon-green)] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Tank icon preview */}
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-4 opacity-60">
                      <span className="text-3xl">🎮</span>
                      <span className="text-sm font-mono text-white">Click to Play</span>
                      <span className="text-3xl">🏎️</span>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-[var(--neon-green)]/50" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-[var(--neon-green)]/50" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-[var(--neon-green)]/50" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-[var(--neon-green)]/50" />

                  {/* Status bar */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4 text-[9px] font-mono text-[var(--neon-green)]/40">
                    <span>3D ENGINE</span>
                    <span>•</span>
                    <span>60 FPS</span>
                    <span>•</span>
                    <span>FULL SCREEN</span>
                  </div>
                </div>
              </Link>
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-[var(--muted)]">
                  {t("games.interactiveDemo")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-pink)]">{"<"}</span>
              <span className="text-white"> {t("games.whatWeCreate")} </span>
              <span className="text-[var(--neon-purple)]">{" />"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("games.whatWeCreateDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-[var(--card)]/50 border border-[var(--border)] hover:border-[var(--neon-pink)]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--neon-pink)]/10 border border-[var(--neon-pink)]/30 flex items-center justify-center text-[var(--neon-pink)] mb-4 group-hover:shadow-[0_0_20px_var(--neon-pink)] transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--neon-pink)] transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  {t(feature.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Genres */}
      <section className="py-24 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-[var(--neon-purple)]">{"["}</span>
              <span className="text-white"> {t("games.gameGenres")} </span>
              <span className="text-[var(--neon-pink)]">{"]"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono text-sm">
              {t("games.gameGenresDesc")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {genreKeys.map((genreKey) => (
              <span
                key={genreKey}
                className="px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--neon-pink)]/50 hover:text-[var(--neon-pink)] transition-all cursor-default font-mono text-sm"
              >
                {t(genreKey)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-blue)]">{"{"}</span>
              <span className="text-white"> {t("games.techStack")} </span>
              <span className="text-[var(--neon-pink)]">{"}"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("games.techStackDesc")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group p-4 rounded-lg bg-[var(--card)]/50 border border-[var(--border)] hover:border-[var(--neon-pink)]/50 transition-all text-center"
              >
                <div className="text-xs font-mono text-[var(--neon-pink)]/60 mb-1">
                  {tech.category}
                </div>
                <div className="font-medium text-[var(--foreground)] group-hover:text-[var(--neon-pink)] transition-colors">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("games.devProcess")}
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("games.devProcessDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", titleKey: "games.concept", descKey: "games.conceptDesc" },
              { step: "02", titleKey: "games.prototype", descKey: "games.prototypeDesc" },
              { step: "03", titleKey: "games.production", descKey: "games.productionDesc" },
              { step: "04", titleKey: "games.launch", descKey: "games.launchDesc" },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-[var(--neon-pink)]/50 to-transparent" />
                )}
                <div className="p-6 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--neon-pink)]/50 transition-all">
                  <div className="text-3xl font-black text-[var(--neon-pink)]/30 font-mono mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-[var(--muted)]">{t(item.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-pink)] via-[var(--neon-purple)] to-[var(--neon-blue)] p-[2px] rounded-2xl">
              <div className="absolute inset-[2px] bg-[var(--background)] rounded-2xl" />
            </div>

            <div className="relative p-12 md:p-16 text-center">
              <div className="absolute inset-0 cyber-grid opacity-30" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="text-[var(--neon-pink)]">{t("games.readyTo")}</span>{" "}
                  <span className="text-white">{t("games.levelUp")}</span>
                </h2>
                <p className="text-[var(--muted)] max-w-2xl mx-auto mb-8 text-lg">
                  {t("games.ctaDesc")}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-lg bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-purple)] text-black hover:opacity-90 transition-all hover:scale-105"
                    style={{ boxShadow: "0 0 30px var(--neon-pink)" }}
                  >
                    <span className="mr-2">{">>>"}</span>
                    {t("games.startProject")}
                    <span className="ml-2">{"<<<"}</span>
                  </Link>
                  <Link
                    href="/works"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-lg border border-[var(--neon-pink)]/50 text-white hover:bg-[var(--neon-pink)]/10 transition-all"
                  >
                    {t("games.viewGames")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
