"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Brain,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Code2,
  Download,
  FlaskConical,
  Grid2X2,
  LayoutDashboard,
  Lightbulb,
  Menu,
  MoreHorizontal,
  Pause,
  Play,
  Plus,
  RotateCcw,
  Search,
  Settings2,
  Sparkles,
  Target,
  Timer,
  Trash2,
  TrendingUp,
  Upload,
  X,
  CheckCircle2,
  Clock3,
  Command,
  GraduationCap,
  PanelLeftClose,
  Pencil,
  VolumeX,
  Leaf,
} from "lucide-react";
import {
  exercises,
  makePlan,
  generateQuestion,
  checkAnswer,
  getLevel,
  scheduleCard,
  defaultStore,
  validateStore,
  localDay,
  streak,
  shuffle,
  type Store,
  type Exercise,
  type ExerciseId,
  type Question,
  type Card,
  type Attempt,
  type JournalEntry,
} from "@/lib/training";
import { guides, creativePrompts } from "@/lib/psychology";
import { references } from "@/lib/references";

type Page =
  | "Today"
  | "Exercises"
  | "My study space"
  | "Progress"
  | "The science"
  | "Settings"
  | "Field guide"
  | "Thinking notebook";
const STORAGE = "btrain.v1";
function storageKey() {
  return typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("preview") === "1"
    ? "btrain.preview.v1"
    : STORAGE;
}
const navItems: { name: Page; icon: typeof Brain }[] = [
  { name: "Today", icon: LayoutDashboard },
  { name: "Exercises", icon: Grid2X2 },
  { name: "My study space", icon: BookOpen },
  { name: "Thinking notebook", icon: Pencil },
  { name: "Field guide", icon: Lightbulb },
  { name: "Progress", icon: TrendingUp },
];
function Mark() {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path
        d="M10 5v25h11c12 0 12-19 0-19H10m0 9h10"
        stroke="currentColor"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MiniArt({ kind }: { kind: string }) {
  return (
    <svg
      viewBox="0 0 74 64"
      fill="none"
      aria-hidden="true"
      className="mini-art"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {kind === "digits" ? (
          <>
            <rect x="12" y="11" width="35" height="43" rx="6" />
            <path d="M23 5h29a6 6 0 0 1 6 6v32" opacity=".45" />
            <text
              x="29"
              y="39"
              textAnchor="middle"
              stroke="none"
              fill="currentColor"
              fontSize="25"
              fontFamily="Georgia"
            >
              7
            </text>
            <path d="M22 46h15" opacity=".4" />
          </>
        ) : kind === "math" ? (
          <>
            <path d="M19 14v18m-9-9h18m19 20h18m-18 9h18M49 12l13 13m0-13L49 25" />
            <circle cx="20" cy="48" r="10" opacity=".4" />
          </>
        ) : kind === "logic" ? (
          <>
            <path d="M36 17v12M18 42v-9h36v9" />
            <rect x="27" y="3" width="18" height="14" rx="3" />
            <rect x="9" y="42" width="18" height="16" rx="3" />
            <rect x="45" y="42" width="18" height="16" rx="3" />
          </>
        ) : kind === "code" ? (
          <>
            <path d="m24 19-14 13 14 13m26-26 14 13-14 13M43 11 31 53" />
            <circle
              cx="60"
              cy="10"
              r="3"
              fill="currentColor"
              stroke="none"
              opacity=".35"
            />
          </>
        ) : kind === "grid" ? (
          <>
            {Array.from({ length: 9 }, (_, i) => (
              <rect
                key={i}
                x={12 + (i % 3) * 17}
                y={7 + Math.floor(i / 3) * 17}
                width="12"
                height="12"
                rx="2"
                fill={[0, 4, 5, 6].includes(i) ? "currentColor" : "none"}
                opacity={[0, 4, 5, 6].includes(i) ? 0.6 : 0.45}
              />
            ))}
          </>
        ) : kind === "words" ? (
          <>
            <path d="M11 17h24v29H11zM40 9h24v29H40z" />
            <path d="m19 37 4-12 4 12m-6-5h4M47 17h7a4 4 0 0 1 0 8h-7V14m0 11h8a4 4 0 0 1 0 8h-8z" />
          </>
        ) : (
          <>
            <circle cx="30" cy="30" r="20" />
            <circle cx="45" cy="30" r="20" opacity=".45" />
            <path d="M30 24v10m0 6v.1" strokeWidth="3" />
          </>
        )}
      </g>
    </svg>
  );
}
function Connections() {
  return (
    <svg
      className="connections"
      viewBox="0 0 360 260"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#73917c" strokeWidth="1.2">
        <path d="m60 150 79-81 88 60-15 91-73-151-5 107 93-47 76-74-91 165-78-44-74-26 36 79 116-9M139 69l66-42 98 28 23 137-99-63M96 229l38-53m78 44 114-28M205 27l22 102M60 150l-9-90 88 9" />
        <circle cx="183" cy="133" r="109" strokeDasharray="3 6" opacity=".3" />
      </g>
      <g fill="#e7ede2" stroke="#66816d" strokeWidth="1.3">
        <circle cx="60" cy="150" r="12" />
        <circle cx="139" cy="69" r="17" />
        <circle cx="227" cy="129" r="25" />
        <circle cx="134" cy="176" r="12" />
        <circle cx="212" cy="220" r="14" />
        <circle cx="303" cy="55" r="10" />
        <circle cx="326" cy="192" r="9" />
        <circle cx="205" cy="27" r="6" />
        <circle cx="96" cy="229" r="6" />
        <circle cx="51" cy="60" r="6" />
      </g>
      <circle cx="227" cy="129" r="17" fill="#315f46" />
      <path
        d="m220 129 5 5 10-11"
        stroke="#e7ede2"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="139" cy="69" r="6" fill="#9cab8b" />
      <circle cx="60" cy="150" r="4" fill="#9cab8b" />
    </svg>
  );
}
function Modal({
  children,
  onClose,
  label,
  wide = false,
}: {
  children: ReactNode;
  onClose: () => void;
  label: string;
  wide?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const close = useRef(onClose);
  close.current = onClose;
  useEffect(() => {
    const prior = document.activeElement as HTMLElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") close.current();
      if (e.key === "Tab") {
        const nodes = ref.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]),input:not([disabled]),textarea,select,[tabindex="0"],a[href]',
        );
        if (!nodes?.length) return;
        const first = nodes[0],
          last = nodes[nodes.length - 1];
        if (
          e.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === ref.current)
        ) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", key);
      prior?.focus();
    };
  }, []);
  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`modal ${wide ? "wide" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        ref={ref}
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
}
function ExerciseCard({
  exercise,
  onStart,
  attempts,
}: {
  exercise: Exercise;
  onStart: (id: ExerciseId) => void;
  attempts: Attempt[];
}) {
  const count = attempts.filter((a) => a.exercise === exercise.id).length;
  return (
    <button className="exercise-card" onClick={() => onStart(exercise.id)}>
      <div className="exercise-card-top">
        <div className={`art-box ${exercise.color}`}>
          <MiniArt kind={exercise.icon} />
        </div>
        <span className="card-category">{exercise.category}</span>
        <ArrowUpRight size={17} className="card-arrow" />
      </div>
      <h3>{exercise.title}</h3>
      <p>{exercise.description}</p>
      <div className="card-meta">
        <span>{exercise.method}</span>
        <span>
          {count
            ? `Level ${getLevel(attempts, exercise.id)}`
            : `${exercise.minutes} min`}
          <span className="tiny-dot" />
        </span>
      </div>
    </button>
  );
}
function WeeklyActivity({
  attempts,
  compact = false,
}: {
  attempts: Attempt[];
  compact?: boolean;
}) {
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - 6 + i);
    return d;
  });
  return (
    <div className={compact ? "week compact" : "week"}>
      {days.map((d, i) => {
        const n = attempts.filter(
          (a) => localDay(a.date) === localDay(d),
        ).length;
        return (
          <div className="week-day" key={localDay(d)}>
            <span>{d.toLocaleDateString("en", { weekday: "narrow" })}</span>
            <div
              className={`day-mark ${n ? "done" : ""} ${i === 6 ? "current" : ""}`}
              title={`${d.toLocaleDateString()}: ${n} answers`}
            >
              {n ? (
                <Check size={15} />
              ) : i === 6 ? (
                <span className="day-dot" />
              ) : (
                <span className="day-empty" />
              )}
            </div>
            {!compact && <small>{d.getDate()}</small>}
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [, setClockTick] = useState(0);
  const [page, setPage] = useState<Page>("Today"),
    [store, setStore] = useState<Store>(defaultStore),
    [loaded, setLoaded] = useState(false),
    [storageError, setStorageError] = useState(""),
    [mobileNav, setMobileNav] = useState(false),
    [filter, setFilter] = useState("All exercises"),
    [search, setSearch] = useState(""),
    [session, setSession] = useState<{
      id: ExerciseId | "daily" | "quick";
      key: number;
    } | null>(null),
    [timer, setTimer] = useState(false),
    [toast, setToast] = useState("");
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey());
      if (raw) {
        const parsed = JSON.parse(raw);
        if (validateStore(parsed)) setStore(parsed);
        else
          setStorageError(
            "Your saved data could not be read. Export a backup from Settings before replacing it.",
          );
      }
    } catch {
      setStorageError(
        "Browser storage is unavailable or unreadable. Your progress may not persist.",
      );
    }
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded || storageError) return;
    try {
      localStorage.setItem(storageKey(), JSON.stringify(store));
    } catch {
      setStorageError(
        "Your browser could not save progress. Export a backup in Settings.",
      );
    }
  }, [store, loaded, storageError]);
  useEffect(() => {
    const id = setInterval(() => setClockTick(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (!mobileNav) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileNav(false);
    };
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", close);
    };
  }, [mobileNav]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 3500);
    return () => clearTimeout(t);
  }, [toast]);
  const navigate = (p: Page) => {
    setPage(p);
    setMobileNav(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const start = (id: ExerciseId | "daily" | "quick") =>
    setSession({ id, key: Date.now() });
  const todayAttempts = store.attempts.filter(
    (a) => localDay(a.date) === localDay(),
  );
  const minutes = Math.round(
    todayAttempts.reduce((s, a) => s + a.duration, 0) / 60000,
  );
  const due = store.cards.filter((c) => c.due <= Date.now()).length;
  const goalProgress = Math.min(
    100,
    (minutes / store.settings.dailyGoal) * 100,
  );
  const addAttempt = useCallback(
    (a: Attempt) => setStore((s) => ({ ...s, attempts: [...s.attempts, a] })),
    [],
  );
  const saveCard = (c: Card) => {
    setStore((s) => ({ ...s, cards: [...s.cards, c] }));
    setToast("Saved to your study space.");
  };
  const categories = [
    "All exercises",
    "Memory",
    "Math",
    "Reasoning",
    "Coding",
    "Psychology",
    "Attention",
  ];
  const filtered = exercises.filter(
    (e) =>
      (filter === "All exercises" || e.category === filter) &&
      `${e.title} ${e.description} ${e.method}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  if (!loaded)
    return (
      <div className="loading-space" role="status">
        <span>
          <Mark />
        </span>
        <p>Opening your space…</p>
      </div>
    );
  return (
    <div className="app-shell">
      {mobileNav && (
        <div className="nav-scrim" onClick={() => setMobileNav(false)} />
      )}
      <aside className={`sidebar ${mobileNav ? "open" : ""}`}>
        <button
          className="icon-button mobile-drawer-close"
          aria-label="Close navigation"
          onClick={() => setMobileNav(false)}
        >
          <X size={19} />
        </button>
        <button
          className="brand"
          onClick={() => navigate("Today")}
          aria-label="Btrain home"
        >
          <span className="brand-mark">
            <Mark />
          </span>
          btrain<span className="brand-period">.</span>
        </button>
        <div className="workspace-label">YOUR DAILY PRACTICE</div>
        <nav aria-label="Main navigation">
          {navItems.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => navigate(name)}
              className={`nav-item ${page === name ? "active" : ""}`}
              aria-current={page === name ? "page" : undefined}
            >
              <Icon size={18} />
              <span>{name}</span>
              {name === "My study space" && due > 0 && (
                <span className="nav-count">{due}</span>
              )}
              {name === page && <span className="nav-indicator" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="daily-goal">
            <div>
              <span>
                <span className="green-dot" /> A little, every day
              </span>
              <Leaf size={15} />
            </div>
            <p>
              {minutes} <span>/ {store.settings.dailyGoal} min today</span>
            </p>
            <div className="goal-track">
              <div style={{ width: `${goalProgress}%` }} />
            </div>
            <small>Small steps add up.</small>
          </div>
          <button
            className={`nav-item ${page === "The science" ? "active" : ""}`}
            onClick={() => navigate("The science")}
          >
            <FlaskConical size={18} />
            <span>The science</span>
            <ArrowUpRight size={14} />
          </button>
          <button
            className={`nav-item ${page === "Settings" ? "active" : ""}`}
            onClick={() => navigate("Settings")}
          >
            <Settings2 size={18} />
            <span>Settings</span>
          </button>
          <div className="sidebar-foot">
            <span className="avatar">
              {store.settings.name
                ? store.settings.name.charAt(0).toUpperCase()
                : "b"}
            </span>
            <span>
              {store.settings.name || "Your personal space"}
              <small>Stored on this device</small>
            </span>
            <span className="local-dot" title="Local storage" />
          </div>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <div className="breadcrumb">
            <button
              className="icon-button mobile-menu"
              aria-label="Open navigation"
              onClick={() => setMobileNav(true)}
            >
              <Menu size={21} />
            </button>
            <span>My workspace</span>
            <ChevronRight size={14} />
            <strong>{page}</strong>
          </div>
          <div className="topbar-right">
            <span className="date">
              <CalendarDays size={15} />
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="header-divider" />
            <button className="focus-button" onClick={() => setTimer(true)}>
              <Timer size={16} />
              Focus timer
            </button>
          </div>
        </header>
        <main id="main" className="main-content">
          {loaded && storageKey() !== STORAGE && (
            <div className="notice">
              Preview space · separate from your personal data.
            </div>
          )}
          {storageError && (
            <div className="notice" role="alert">
              {storageError}
            </div>
          )}
          {page === "Today" && (
            <>
              <div className="page-heading">
                <div>
                  <div className="eyebrow">
                    <span className="green-dot" /> A LITTLE BETTER, EVERY DAY
                  </div>
                  <h1>A daily practice for your mind.</h1>
                  <p>A few focused minutes. Something new to think about.</p>
                </div>
                <span className="quiet-note">
                  <span className="sun-symbol">✳</span> Room to grow.
                </span>
              </div>
              <div className="daily-layout">
                <section className="daily-session">
                  <div className="daily-session-content">
                    <span className="pill">
                      <span className="green-dot" /> YOUR DAILY SESSION
                    </span>
                    <h2>
                      Make space for
                      <br />a sharper mind.
                    </h2>
                    <p>
                      A varied mix of memory, math, and reasoning.
                      <br className="desktop-break" /> One question at a time.
                    </p>
                    <div className="session-meta">
                      <span>
                        <Clock3 size={14} /> About{" "}
                        {store.settings.sessionLength} min
                      </span>
                      <span className="separator-dot" />
                      <span>{store.settings.sessionLength} questions</span>
                    </div>
                    <div className="hero-actions">
                      <button
                        className="primary-button"
                        disabled={!loaded}
                        onClick={() => start("daily")}
                      >
                        Start a session <ArrowRight size={17} />
                      </button>
                      <button
                        className="quick-start"
                        disabled={!loaded}
                        onClick={() => start("quick")}
                      >
                        Just two minutes <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                  <Connections />
                  <div className="hero-corner">
                    A MOMENT OF FOCUS, JUST FOR YOU
                  </div>
                </section>
                <section className="consistency-card">
                  <div className="section-label">
                    YOUR RHYTHM{" "}
                    <span>
                      <Leaf size={15} />
                    </span>
                  </div>
                  <div className="streak-number">
                    {streak(store.attempts)}
                    <span>
                      day{streak(store.attempts) === 1 ? "" : "s"} of practice
                    </span>
                  </div>
                  <p>
                    {streak(store.attempts)
                      ? "A habit worth coming back to."
                      : "Every habit starts with one day."}
                  </p>
                  <WeeklyActivity attempts={store.attempts} compact />
                  <div className="consistency-footer">
                    <span className="green-dot" />
                    {todayAttempts.length
                      ? "You showed up today."
                      : "Today is a good day to begin."}
                  </div>
                </section>
              </div>
              <div className="stats-strip">
                <div>
                  <span className="stat-icon">
                    <Clock3 size={19} />
                  </span>
                  <div>
                    <span>Time practiced today</span>
                    <strong>
                      {minutes}
                      <small>min</small>
                    </strong>
                  </div>
                </div>
                <div>
                  <span className="stat-icon">
                    <CheckCircle2 size={19} />
                  </span>
                  <div>
                    <span>Questions answered</span>
                    <strong>
                      {todayAttempts.length}
                      <small>today</small>
                    </strong>
                  </div>
                </div>
                <div>
                  <span className="stat-icon">
                    <Target size={19} />
                  </span>
                  <div>
                    <span>Accuracy today</span>
                    <strong>
                      {todayAttempts.length
                        ? Math.round(
                            (todayAttempts.filter((a) => a.correct).length /
                              todayAttempts.length) *
                              100,
                          ) + "%"
                        : "—"}
                      <small>
                        {todayAttempts.length
                          ? "keep learning"
                          : "a fresh start"}
                      </small>
                    </strong>
                  </div>
                </div>
                <div>
                  <span className="stat-icon">
                    <BookOpen size={19} />
                  </span>
                  <div>
                    <span>Cards ready to review</span>
                    <button
                      className="stat-link"
                      onClick={() => navigate("My study space")}
                    >
                      {due}
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
              {store.settings.intention && (
                <div className="intention-note">
                  <Leaf size={16} />
                  <span>{store.settings.intention}</span>
                  <button
                    className="text-button"
                    onClick={() => navigate("Settings")}
                  >
                    Edit
                  </button>
                </div>
              )}
              <section className="exercise-section">
                <div className="section-heading">
                  <div>
                    <h2>Find your focus</h2>
                    <p>
                      A different kind of challenge for every part of your day.
                    </p>
                  </div>
                  <button
                    className="text-button"
                    onClick={() => navigate("Exercises")}
                  >
                    All exercises <ArrowRight size={16} />
                  </button>
                </div>
                <div
                  className="category-tabs"
                  role="group"
                  aria-label="Filter exercises"
                >
                  {categories.map((c) => (
                    <button
                      key={c}
                      className={filter === c ? "selected" : ""}
                      onClick={() => setFilter(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <div className="exercise-grid">
                  {exercises
                    .filter(
                      (e) =>
                        filter === "All exercises" || e.category === filter,
                    )
                    .slice(0, 6)
                    .map((e) => (
                      <ExerciseCard
                        key={e.id}
                        exercise={e}
                        onStart={start}
                        attempts={store.attempts}
                      />
                    ))}
                </div>
              </section>
              <div className="bottom-grid">
                <button
                  className="study-banner"
                  onClick={() => navigate("My study space")}
                >
                  <span className="study-banner-icon">
                    <BookOpen size={24} />
                  </span>
                  <div>
                    <span className="eyebrow">MAKE IT PERSONAL</span>
                    <h3>Your notes. Remembered.</h3>
                    <p>Turn what you’re learning into a practice that lasts.</p>
                  </div>
                  <span className="round-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </button>
                <div className="thought-card">
                  <Lightbulb size={20} />
                  <div>
                    <span className="eyebrow">A THOUGHT TO TAKE WITH YOU</span>
                    <p>
                      Try to remember before you look.
                      <br />
                      The effort is part of the learning.
                    </p>
                    <button
                      className="text-button"
                      onClick={() => navigate("The science")}
                    >
                      Why retrieval works <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
              <footer className="page-footer">
                <span>Made for focus. Built around practice.</span>
                <span>
                  <span className="green-dot" /> No scores to chase. Just your
                  own progress.
                </span>
              </footer>
            </>
          )}
          {page === "Exercises" && (
            <>
              <PageTitle
                eyebrow="THE PRACTICE LIBRARY"
                title="A little challenge goes a long way."
                description="Choose a skill. Take your time. Come back to it."
              />
              <div className="library-toolbar">
                <div
                  className="category-tabs"
                  role="group"
                  aria-label="Filter exercises"
                >
                  {categories.map((c) => (
                    <button
                      key={c}
                      className={filter === c ? "selected" : ""}
                      onClick={() => setFilter(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <label className="search-input">
                  <Search size={16} />
                  <input
                    placeholder="Find an exercise"
                    aria-label="Search exercises"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </label>
              </div>
              <div className="exercise-grid library">
                {filtered.map((e) => (
                  <ExerciseCard
                    key={e.id}
                    exercise={e}
                    onStart={start}
                    attempts={store.attempts}
                  />
                ))}
              </div>
              {!filtered.length && (
                <div className="empty-state">
                  <Search />
                  <h3>No exercises found</h3>
                  <p>Try a different word or category.</p>
                  <button
                    className="secondary-button"
                    onClick={() => {
                      setSearch("");
                      setFilter("All exercises");
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
              <div className="inline-note">
                <FlaskConical size={18} />
                <p>
                  Numbers, sequences, and patterns are generated fresh.
                  Reasoning and psychology use a curated, reusable collection.
                  Generated drills adapt after five answers without a hint at
                  the same level. Curated scenarios keep a fixed level.
                </p>
              </div>
            </>
          )}
          {page === "My study space" && (
            <StudySpace store={store} setStore={setStore} notify={setToast} />
          )}
          {page === "Field guide" && (
            <FieldGuide onSaveCard={saveCard} onStart={start} />
          )}
          {page === "Thinking notebook" && (
            <ThinkingNotebook
              store={store}
              setStore={setStore}
              notify={setToast}
            />
          )}
          {page === "Progress" && <Progress store={store} />}
          {page === "The science" && (
            <>
              <PageTitle
                eyebrow="BEHIND THE PRACTICE"
                title="Good practice starts with good evidence."
                description="What informs Btrain, what each method can do, and where the evidence stops."
              />
              <div className="research-intro">
                <FlaskConical size={26} />
                <div>
                  <h3>Practice a skill. Learn something useful.</h3>
                  <p>
                    Retrieval, spacing, and feedback support learning. Getting
                    better at a memory game mostly shows that you got better at
                    that task. Btrain does not measure intelligence or promise
                    improvement in every aspect of cognition.
                  </p>
                  <p>
                    These studies inform the design. They have not evaluated
                    Btrain itself.
                  </p>
                </div>
              </div>
              <div className="research-grid">
                {references.map((r, i) => (
                  <article className="research-card" key={r.title}>
                    <div className="research-card-top">
                      <span className="research-number">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="tag">{r.tag}</span>
                    </div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                    <details>
                      <summary>
                        Limits & context <ChevronDown size={14} />
                      </summary>
                      <p>{r.limit}</p>
                    </details>
                    <a href={r.url} target="_blank" rel="noreferrer">
                      {r.authors}
                      <ArrowUpRight size={14} />
                    </a>
                  </article>
                ))}
              </div>
              <div className="inline-note">
                <BookOpen size={18} />
                <p>
                  The full research rationale and 28 original sources are
                  documented in{" "}
                  <a href="/research.md" target="_blank">
                    the research notes
                  </a>
                  . Exact session lengths and scheduling intervals are product
                  choices, not scientifically optimal prescriptions.
                </p>
              </div>
            </>
          )}
          {page === "Settings" && (
            <Settings
              store={store}
              setStore={setStore}
              notify={setToast}
              storageError={storageError}
              onRecover={() => setStorageError("")}
            />
          )}
        </main>
      </div>
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {[
          { name: "Today" as Page, icon: LayoutDashboard },
          { name: "Exercises" as Page, icon: Grid2X2 },
          { name: "My study space" as Page, icon: BookOpen },
          { name: "Thinking notebook" as Page, icon: Pencil },
        ].map(({ name, icon: Icon }) => (
          <button
            key={name}
            className={page === name ? "active" : ""}
            aria-current={page === name ? "page" : undefined}
            onClick={() => navigate(name)}
          >
            <Icon size={20} />
            <span>
              {name === "My study space"
                ? "Study"
                : name === "Thinking notebook"
                  ? "Notebook"
                  : name}
            </span>
          </button>
        ))}
        <button onClick={() => setMobileNav(true)}>
          <Menu size={20} />
          <span>More</span>
        </button>
      </nav>
      {session && (
        <Session
          key={session.key}
          mode={session.id}
          store={store}
          onAttempt={addAttempt}
          onSaveCard={saveCard}
          onClose={() => setSession(null)}
        />
      )}
      {timer && <FocusTimer onClose={() => setTimer(false)} />}
      {toast && (
        <div className="toast" role="status">
          <CheckCircle2 size={17} />
          {toast}
        </div>
      )}
    </div>
  );
}
function PageTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-heading">
      <div>
        <div className="eyebrow">
          <span className="green-dot" />
          {eyebrow}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Session({
  mode,
  store,
  onAttempt,
  onSaveCard,
  onClose,
}: {
  mode: ExerciseId | "daily" | "quick";
  store: Store;
  onAttempt: (a: Attempt) => void;
  onSaveCard: (c: Card) => void;
  onClose: () => void;
}) {
  const [plan] = useState(() => makePlan(mode, store.settings.sessionLength));
  const [index, setIndex] = useState(0),
    [q, setQ] = useState(() =>
      generateQuestion(plan[0], getLevel(store.attempts, plan[0])),
    ),
    [answer, setAnswer] = useState(""),
    [selected, setSelected] = useState<number[]>([]),
    [stage, setStage] = useState<
      "memorize" | "answer" | "feedback" | "complete"
    >(() =>
      ["digits", "grid", "words", "reverse", "pairs", "updating"].includes(
        plan[0],
      )
        ? "memorize"
        : "answer",
    ),
    [seconds, setSeconds] = useState(store.settings.memorySeconds),
    [result, setResult] = useState(false),
    [results, setResults] = useState<Attempt[]>([]),
    [confidence, setConfidence] = useState<number | null>(null),
    [hint, setHint] = useState(false),
    [reflection, setReflection] = useState(""),
    [saved, setSaved] = useState(false),
    [showExit, setShowExit] = useState(false),
    [usedHint, setUsedHint] = useState(false),
    [paused, setPaused] = useState(false);
  const started = useRef(Date.now()),
    elapsed = useRef(0),
    locked = useRef(false);
  const input = useRef<HTMLInputElement>(null);
  const exercise = exercises.find((e) => e.id === q.exercise)!;
  useEffect(() => {
    if (stage !== "memorize" || showExit || paused) return;
    const timer = setInterval(() => {
      if (document.hidden) return;
      setSeconds((s) => s - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [stage, showExit, paused]);
  useEffect(() => {
    if (stage === "memorize" && seconds <= 0) setStage("answer");
  }, [seconds, stage]);
  useEffect(() => {
    if (stage === "answer") input.current?.focus();
  }, [stage, index]);
  useEffect(() => {
    elapsed.current = 0;
  }, [q.id]);
  useEffect(() => {
    if (paused || showExit || !["memorize", "answer"].includes(stage)) return;
    let previous = Date.now();
    const t = setInterval(() => {
      const now = Date.now();
      if (!document.hidden) elapsed.current += Math.min(1000, now - previous);
      previous = now;
    }, 250);
    return () => clearInterval(t);
  }, [stage, paused, showExit]);
  const submit = (skip = false) => {
    if (locked.current || stage !== "answer") return;
    locked.current = true;
    const actual = q.exercise === "grid" ? selected.join(",") : answer;
    const correct = !skip && checkAnswer(q, actual);
    setResult(correct);
    const attempt: Attempt = {
      id: q.id,
      exercise: q.exercise,
      correct,
      date: new Date().toISOString(),
      duration: elapsed.current,
      level: q.level,
      confidence,
      assisted: usedHint,
    };
    setResults((r) => [...r, attempt]);
    onAttempt(attempt);
    setStage("feedback");
  };
  const next = () => {
    if (index + 1 >= plan.length) {
      setStage("complete");
      return;
    }
    const id = plan[index + 1];
    const nextQ = generateQuestion(
      id,
      getLevel(
        [
          ...store.attempts.filter((a) => !results.some((r) => r.id === a.id)),
          ...results,
        ],
        id,
      ),
      q.prompt,
    );
    setQ(nextQ);
    setIndex(index + 1);
    setAnswer("");
    setSelected([]);
    setHint(false);
    setReflection("");
    setConfidence(null);
    setUsedHint(false);
    setSaved(false);
    setSeconds(store.settings.memorySeconds);
    setStage(nextQ.stimulus || nextQ.grid ? "memorize" : "answer");
    started.current = Date.now();
    locked.current = false;
  };
  const requestClose = () => {
    if (stage === "complete") onClose();
    else setShowExit(true);
  };
  const isMemory = !!(q.stimulus || q.grid);
  return (
    <Modal onClose={requestClose} label="Practice session" wide>
      <div className="session-header">
        <span className="session-brand">
          <Mark />
          btrain.
        </span>
        <span>
          {mode === "daily"
            ? "Daily session"
            : mode === "quick"
              ? "Two small steps"
              : exercise.title}
        </span>
        <button
          className="icon-button"
          onClick={requestClose}
          aria-label="Close practice"
        >
          <X size={20} />
        </button>
      </div>
      {showExit ? (
        <div className="session-body end-confirm">
          <h2>Leave this session?</h2>
          <p>Your completed answers are already saved.</p>
          <div className="button-row">
            <button
              className="secondary-button"
              onClick={() => {
                setShowExit(false);
                started.current = Date.now();
              }}
            >
              Keep practicing
            </button>
            <button className="primary-button" onClick={onClose}>
              Leave session
            </button>
          </div>
        </div>
      ) : stage === "complete" ? (
        <div className="session-summary">
          <span className="summary-icon">
            <Check size={32} />
          </span>
          <div className="eyebrow">TIME WELL SPENT</div>
          <h2>That’s one little step.</h2>
          <p>Take what you’ve practiced into the rest of your day.</p>
          <div className="summary-stats">
            <div>
              <strong>{results.length}</strong>
              <span>questions</span>
            </div>
            <div>
              <strong>
                {Math.round(
                  (results.filter((a) => a.correct).length / results.length) *
                    100,
                )}
                %
              </strong>
              <span>accuracy</span>
            </div>
            <div>
              <strong>
                {results.reduce((s, a) => s + a.duration, 0) < 60000
                  ? "<1"
                  : Math.round(
                      results.reduce((s, a) => s + a.duration, 0) / 60000,
                    )}
              </strong>
              <span>minutes</span>
            </div>
          </div>
          <p className="subtle">
            Results describe this practice session, across its mix of tasks and
            levels.
          </p>
          <button className="primary-button" onClick={onClose}>
            Back to your space <ArrowRight size={17} />
          </button>
        </div>
      ) : (
        <>
          <div className="session-progress">
            <span style={{ width: `${(index / plan.length) * 100}%` }} />
          </div>
          <div className="session-body">
            {paused ? (
              <div className="pause-screen">
                <Leaf size={30} />
                <h2>Take a little space.</h2>
                <p>There’s no rush. Your place is right here.</p>
                <button
                  className="primary-button"
                  onClick={() => {
                    setPaused(false);
                    started.current = Date.now();
                  }}
                >
                  Continue <Play size={15} />
                </button>
                <button className="text-button" onClick={requestClose}>
                  Finish for now
                </button>
              </div>
            ) : (
              <>
                <div className="question-meta">
                  <span className={`category-pill ${exercise.color}`}>
                    {exercise.category}
                  </span>
                  <span>
                    Level {q.level} <span>·</span> {index + 1} of {plan.length}
                  </span>
                </div>
                <div className="question-intro">
                  <span className="eyebrow">
                    {stage === "memorize"
                      ? "TAKE A MOMENT TO REMEMBER"
                      : exercise.method.toUpperCase()}
                  </span>
                  <h2 className={q.prompt.length < 35 ? "large-question" : ""}>
                    {stage === "memorize"
                      ? q.exercise === "grid"
                        ? "Remember the pattern."
                        : q.exercise === "words"
                          ? "Make a little story."
                          : q.exercise === "pairs"
                            ? "Connect each name and object."
                            : q.exercise === "updating"
                              ? "Keep a running total."
                              : q.exercise === "reverse"
                                ? "Remember, then reverse."
                                : "Remember the sequence."
                      : q.prompt}
                  </h2>
                  {stage === "memorize" && (
                    <p>
                      {q.exercise === "words"
                        ? "You can recall these in any order."
                        : "You’ll recall this after it disappears."}
                    </p>
                  )}
                </div>
                {q.grid && (
                  <div
                    className={`memory-grid ${stage === "memorize" ? "memorizing" : ""}`}
                    role="group"
                    aria-label="Memory grid"
                  >
                    {Array.from({ length: 16 }, (_, i) => {
                      const shown =
                        stage === "memorize" || stage === "feedback";
                      const active = shown
                        ? q.grid!.includes(i)
                        : selected.includes(i);
                      return (
                        <button
                          key={i}
                          disabled={stage !== "answer"}
                          aria-label={`Row ${Math.floor(i / 4) + 1}, column ${(i % 4) + 1}`}
                          aria-pressed={active}
                          onClick={() =>
                            setSelected((s) =>
                              s.includes(i)
                                ? s.filter((n) => n !== i)
                                : [...s, i],
                            )
                          }
                          className={`${active ? "filled" : ""} ${stage === "feedback" && selected.includes(i) && !q.grid!.includes(i) ? "wrong-cell" : ""}`}
                        >
                          {stage === "feedback" && q.grid!.includes(i) && (
                            <Check size={20} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
                {stage === "memorize" && q.stimulus && (
                  <div
                    className={`stimulus ${["words", "pairs", "updating"].includes(q.exercise) ? "word-stimulus" : ""}`}
                  >
                    {q.stimulus.map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                )}
                {q.visual && (
                  <div
                    className="attention-grid"
                    aria-label="Characters to scan"
                  >
                    {q.visual.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div>
                )}
                {q.code && (
                  <pre className="code-block">
                    <code>{q.code}</code>
                  </pre>
                )}
                {stage === "memorize" ? (
                  <div className="memorize-footer">
                    <span>
                      <Clock3 size={15} />
                      {seconds}s remaining · pauses in a hidden tab
                    </span>
                    <button
                      className="secondary-button"
                      onClick={() => setStage("answer")}
                    >
                      I’m ready <ArrowRight size={15} />
                    </button>
                  </div>
                ) : stage === "answer" ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      submit();
                    }}
                  >
                    {q.choices ? (
                      <div
                        className="answer-choices"
                        role="group"
                        aria-label="Answer choices"
                      >
                        {q.choices.map((choice, i) => (
                          <button
                            key={choice}
                            type="button"
                            className={answer === choice ? "chosen" : ""}
                            onClick={() => setAnswer(choice)}
                            aria-pressed={answer === choice}
                          >
                            <span>{String.fromCharCode(65 + i)}</span>
                            {choice}
                            {answer === choice && <Check size={17} />}
                          </button>
                        ))}
                      </div>
                    ) : (
                      q.exercise !== "grid" && (
                        <label className="answer-label">
                          Your answer
                          <input
                            ref={input}
                            className="answer-input"
                            autoComplete="off"
                            spellCheck={false}
                            value={answer}
                            inputMode={
                              [
                                "arithmetic",
                                "fractions",
                                "estimation",
                                "probability",
                                "trace",
                                "digits",
                                "reverse",
                                "updating",
                                "attention",
                              ].includes(q.exercise)
                                ? "decimal"
                                : "text"
                            }
                            placeholder={
                              q.exercise === "words"
                                ? "Separate words with spaces"
                                : q.exercise === "digits"
                                  ? "Enter the sequence"
                                  : "Type your answer"
                            }
                            onChange={(e) => setAnswer(e.target.value)}
                          />
                        </label>
                      )
                    )}
                    {q.exercise === "grid" && (
                      <p className="grid-instruction">
                        Select {q.grid!.length} squares. {selected.length}{" "}
                        selected.
                      </p>
                    )}
                    <div className="confidence">
                      <span>
                        How sure are you? <small>Optional</small>
                      </span>
                      <div>
                        {[
                          { v: 25, l: "Guessing" },
                          { v: 50, l: "Unsure" },
                          { v: 75, l: "Fairly sure" },
                          { v: 100, l: "Certain" },
                        ].map((c) => (
                          <button
                            type="button"
                            key={c.v}
                            className={confidence === c.v ? "active" : ""}
                            onClick={() => setConfidence(c.v)}
                            aria-pressed={confidence === c.v}
                          >
                            {c.l}
                          </button>
                        ))}
                      </div>
                    </div>
                    {hint && (
                      <div className="hint">
                        <Lightbulb size={17} />
                        {q.hint}
                      </div>
                    )}
                    <div className="answer-actions">
                      <button
                        type="button"
                        className="text-button"
                        onClick={() => {
                          setHint(!hint);
                          setUsedHint(true);
                        }}
                      >
                        <Lightbulb size={16} />
                        {hint ? "Hide hint" : "A small hint"}
                      </button>
                      <div>
                        <button
                          type="button"
                          className="text-button muted"
                          onClick={() => submit(true)}
                        >
                          I don’t know
                        </button>
                        <button
                          className="primary-button"
                          disabled={
                            q.exercise === "grid"
                              ? selected.length === 0
                              : !answer.trim()
                          }
                          type="submit"
                        >
                          Check answer <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div
                    className={`feedback ${result ? "correct" : "incorrect"}`}
                  >
                    <div className="feedback-title">
                      {result ? (
                        <CheckCircle2 size={21} />
                      ) : (
                        <Lightbulb size={21} />
                      )}
                      <h3>
                        {result ? "That’s right." : "Something to learn from."}
                      </h3>
                    </div>
                    {!result && (
                      <p className="correct-answer">
                        Answer:{" "}
                        <strong>
                          {q.exercise === "grid"
                            ? "the highlighted pattern"
                            : q.answer}
                        </strong>
                      </p>
                    )}
                    <p>{q.explanation}</p>
                    <details className="reflection">
                      <summary>
                        Explain it in your own words <Pencil size={13} />
                      </summary>
                      <textarea
                        aria-label="Your explanation"
                        value={reflection}
                        onChange={(e) => setReflection(e.target.value)}
                        placeholder="Why does this answer follow? What would change it?"
                      />
                      <small>Scratch notes for this question; not saved.</small>
                    </details>
                    <div className="feedback-actions">
                      <button
                        className="text-button"
                        disabled={saved || isMemory || !!q.visual}
                        title={
                          isMemory || q.visual
                            ? "Memory patterns are regenerated each round"
                            : "Save this question for spaced review"
                        }
                        onClick={() => {
                          onSaveCard({
                            id: crypto.randomUUID(),
                            front: q.prompt + (q.code ? "\n\n" + q.code : ""),
                            back: q.answer + "\n\n" + q.explanation,
                            subject: exercise.category,
                            due: Date.now() + 86400000,
                            interval: 1,
                            reviews: 0,
                          });
                          setSaved(true);
                        }}
                      >
                        {saved ? <Check size={16} /> : <Plus size={16} />}{" "}
                        {saved ? "Saved" : "Review this later"}
                      </button>
                      <button className="primary-button" onClick={next}>
                        {index + 1 === plan.length
                          ? "Finish session"
                          : "Next question"}
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
            <div className="gentle-controls">
              <button
                className="text-button"
                onClick={() => setPaused(!paused)}
              >
                <Pause size={14} />
                {paused ? "Paused" : "Take a pause"}
              </button>
              {stage === "answer" && !paused && (
                <button
                  className="text-button"
                  onClick={() => {
                    const easier = generateQuestion(
                      q.exercise,
                      Math.max(1, q.level - 1),
                      q.prompt,
                    );
                    setQ(easier);
                    setAnswer("");
                    setSelected([]);
                    setHint(false);
                    setUsedHint(false);
                    setSeconds(store.settings.memorySeconds);
                    setStage(
                      easier.stimulus || easier.grid ? "memorize" : "answer",
                    );
                    started.current = Date.now();
                  }}
                >
                  {q.level > 1
                    ? "Try a smaller example"
                    : "Try a fresh example"}
                </button>
              )}
            </div>
          </div>
          <div className="session-footnote">
            <VolumeX size={13} />
            {isMemory
              ? "Memory presentation is timed. Answer at your own pace."
              : "No countdown. Take the time you need."}
          </div>
        </>
      )}
    </Modal>
  );
}

const starterCards = [
  [
    "What is retrieval practice?",
    "Attempting to recall learned material before looking at the answer, then checking and correcting your response.",
    "Learning",
  ],
  [
    "Why space study sessions across days?",
    "Distributed practice can support delayed retention better than massing the same practice into one sitting. The useful gap depends on the material and the retention goal.",
    "Learning",
  ],
  [
    "What does interleaving ask you to do?",
    "Choose among related problem-solving strategies instead of repeating one strategy in a block. First learn enough of each strategy to attempt the problems.",
    "Learning",
  ],
  [
    "How do you calculate a percentage change?",
    "(New value − original value) / original value × 100%. A rise from 40 to 60 is a 50% increase, or 20 units.",
    "Math",
  ],
  [
    "What is the difference between mean and median?",
    "The mean is the sum divided by the count. The median is the middle value after sorting (or the average of the two middle values). The mean is more sensitive to extreme values.",
    "Math",
  ],
  [
    "What is the probability of A given B?",
    "P(A | B) = P(A and B) / P(B), when P(B) > 0. Count the cases in both A and B, then divide by all cases in B.",
    "Math",
  ],
  [
    "What is an off-by-one error?",
    "A boundary mistake that performs one too many or one too few iterations, or accesses an adjacent index. Check empty inputs, the first item, and the final item.",
    "Coding",
  ],
  [
    "Why are two consecutive n-step loops O(n), rather than O(n²)?",
    "Their work adds: n + n = 2n. Big O omits constant factors. Nested n-step loops multiply the work and can give n².",
    "Coding",
  ],
  [
    "What is a loop invariant?",
    "A property that is true before and after each iteration. Establish it initially, show that each iteration preserves it, then use it with the exit condition to explain correctness.",
    "Coding",
  ],
  [
    "What is confirmation bias?",
    "Favoring evidence that agrees with an existing belief. One useful check is to specify what observation would count against your belief, then look for it.",
    "Psychology",
  ],
  [
    "Why does correlation alone not establish causation?",
    "An observed association may reflect a third variable, reverse causation, or selection. Causal inference needs assumptions and a design that addresses plausible alternatives.",
    "Reasoning",
  ],
  [
    "How can natural frequencies help with conditional probability?",
    "Count the relevant nested groups. For flagged items, divide true flags by all flags, rather than ignoring false flags or the base rate.",
    "Reasoning",
  ],
];
function StudySpace({
  store,
  setStore,
  notify,
}: {
  store: Store;
  setStore: React.Dispatch<React.SetStateAction<Store>>;
  notify: (s: string) => void;
}) {
  const [editing, setEditing] = useState<Card | "new" | null>(null),
    [reviewing, setReviewing] = useState(false),
    [subject, setSubject] = useState("All subjects"),
    [query, setQuery] = useState(""),
    [deleteId, setDeleteId] = useState<string | null>(null),
    [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(t);
  }, []);
  const due = store.cards
    .filter((c) => c.due <= now)
    .sort((a, b) => a.due - b.due);
  const subjects = [
    "All subjects",
    ...new Set(store.cards.map((c) => c.subject)),
  ];
  const cards = store.cards.filter(
    (c) =>
      (subject === "All subjects" || c.subject === subject) &&
      `${c.front} ${c.back}`.toLowerCase().includes(query.toLowerCase()),
  );
  const addStarters = () => {
    const existing = new Set(store.cards.map((c) => c.front));
    const added = starterCards
      .filter((c) => !existing.has(c[0]))
      .map((c) => ({
        id: crypto.randomUUID(),
        front: c[0],
        back: c[1],
        subject: c[2],
        due: Date.now(),
        interval: 0,
        reviews: 0,
      }));
    setStore((s) => ({ ...s, cards: [...s.cards, ...added] }));
    setNow(Date.now());
    notify(
      added.length
        ? `${added.length} starter cards added.`
        : "The starter cards are already in your collection.",
    );
  };
  return (
    <>
      <PageTitle
        eyebrow="MAKE KNOWLEDGE STICK"
        title="Your notes. Remembered."
        description="Bring what you’re learning. Recall it, check it, and return after a gap."
      />
      <div className="study-top">
        <section className="review-banner">
          <div>
            <span className="eyebrow">SPACED REVIEW</span>
            <h2>
              {due.length
                ? `${due.length} card${due.length === 1 ? "" : "s"} ready for you.`
                : store.cards.length
                  ? "A little breathing room."
                  : "Start with something worth remembering."}
            </h2>
            <p>
              {due.length
                ? "Try to recall the answer before turning the card."
                : store.cards.length
                  ? "You’re caught up. Your cards will return when they’re due."
                  : "Add a question from your notes, or try the starter collection."}
            </p>
            <button
              className="primary-button"
              disabled={!due.length}
              onClick={() => setReviewing(true)}
            >
              Review due cards <ArrowRight size={16} />
            </button>
          </div>
          <BookOpen size={70} strokeWidth={0.85} />
        </section>
        <div className="study-small-card">
          <GraduationCap size={24} />
          <h3>Studying for an exam?</h3>
          <p>
            Write one clear question per card. Use your syllabus and past
            papers. Add “why” and “how,” as well as facts.
          </p>
          <button className="text-button" onClick={() => setEditing("new")}>
            Add your first question <Plus size={15} />
          </button>
        </div>
      </div>
      <div className="section-heading">
        <div>
          <h2>
            Your collection{" "}
            <span className="count-label">{store.cards.length}</span>
          </h2>
          <p>Saved locally. Ready whenever you are.</p>
        </div>
        <div className="button-row">
          <button className="secondary-button" onClick={addStarters}>
            <Sparkles size={15} />
            Add starter cards
          </button>
          <button className="primary-button" onClick={() => setEditing("new")}>
            <Plus size={16} />
            New card
          </button>
        </div>
      </div>
      {store.cards.length > 0 ? (
        <>
          <div className="library-toolbar">
            <label className="select-label">
              <select
                value={subject}
                aria-label="Filter cards by subject"
                onChange={(e) => setSubject(e.target.value)}
              >
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="search-input">
              <Search size={16} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your cards"
                aria-label="Search study cards"
              />
            </label>
          </div>
          <div className="card-table">
            <div className="card-table-head">
              <span>QUESTION</span>
              <span>SUBJECT</span>
              <span>NEXT REVIEW</span>
              <span />
            </div>
            {cards.map((c) => (
              <div className="card-row" key={c.id}>
                <button className="card-question" onClick={() => setEditing(c)}>
                  <BookOpen size={16} />
                  <span>{c.front}</span>
                </button>
                <span className="tag">{c.subject}</span>
                <span className={c.due <= now ? "due-label" : "review-date"}>
                  {c.due <= now
                    ? "Ready now"
                    : new Date(c.due).toLocaleDateString("en", {
                        month: "short",
                        day: "numeric",
                      }) +
                      (localDay(c.due) === localDay()
                        ? " · " +
                          new Date(c.due).toLocaleTimeString("en", {
                            hour: "numeric",
                            minute: "2-digit",
                          })
                        : "")}
                </span>
                <button
                  className="icon-button"
                  aria-label={`Delete card: ${c.front}`}
                  onClick={() => setDeleteId(c.id)}
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
            {!cards.length && (
              <div className="empty-state">
                <p>No cards match this filter.</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="empty-state study-empty">
          <div className="empty-art">
            <BookOpen size={35} strokeWidth={1.2} />
          </div>
          <h3>A place for what you want to keep.</h3>
          <p>
            Definitions, formulas, code concepts, the things you keep
            forgetting.
            <br />
            Your own material makes practice useful.
          </p>
          <button className="text-button" onClick={addStarters}>
            Explore 12 starter cards <ArrowRight size={16} />
          </button>
        </div>
      )}
      <div className="inline-note">
        <Clock3 size={18} />
        <p>
          Again returns in 10 minutes. Good starts at 1 day; Easy at 4 days.
          Successful recalls increase the interval. This is a simple scheduling
          heuristic, and cards are self-rated.
        </p>
      </div>
      {editing && (
        <CardEditor
          card={editing === "new" ? undefined : editing}
          onClose={() => setEditing(null)}
          onSave={(c) => {
            setStore((s) => ({
              ...s,
              cards:
                editing === "new"
                  ? [...s.cards, c]
                  : s.cards.map((x) => (x.id === c.id ? c : x)),
            }));
            setEditing(null);
            setNow(Date.now());
            notify(editing === "new" ? "Card added." : "Card updated.");
          }}
        />
      )}
      {reviewing && (
        <ReviewSession
          cards={due}
          onClose={() => {
            setReviewing(false);
            setNow(Date.now());
          }}
          onRate={(card, rating) => {
            setStore((s) => ({
              ...s,
              cards: s.cards.map((c) =>
                c.id === card.id ? scheduleCard(c, rating) : c,
              ),
            }));
          }}
        />
      )}
      {deleteId && (
        <Modal label="Delete study card" onClose={() => setDeleteId(null)}>
          <div className="confirm-body">
            <h2>Delete this card?</h2>
            <p>
              This removes the question and its review history from this device.
            </p>
            <div className="button-row">
              <button
                className="secondary-button"
                onClick={() => setDeleteId(null)}
              >
                Keep card
              </button>
              <button
                className="danger-button"
                onClick={() => {
                  setStore((s) => ({
                    ...s,
                    cards: s.cards.filter((c) => c.id !== deleteId),
                  }));
                  setDeleteId(null);
                  notify("Card deleted.");
                }}
              >
                Delete card
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
function CardEditor({
  card,
  onSave,
  onClose,
}: {
  card?: Card;
  onSave: (c: Card) => void;
  onClose: () => void;
}) {
  const [front, setFront] = useState(card?.front || ""),
    [back, setBack] = useState(card?.back || ""),
    [subject, setSubject] = useState(card?.subject || "General");
  return (
    <Modal onClose={onClose} label={card ? "Edit card" : "New study card"}>
      <div className="modal-heading">
        <div>
          <span className="eyebrow">YOUR STUDY SPACE</span>
          <h2>{card ? "Edit your card" : "One question. One idea."}</h2>
        </div>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Close card editor"
        >
          <X size={20} />
        </button>
      </div>
      <form
        className="card-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!front.trim() || !back.trim() || !subject.trim()) return;
          onSave({
            id: card?.id || crypto.randomUUID(),
            front: front.trim(),
            back: back.trim(),
            subject: subject.trim(),
            due: card?.due || Date.now(),
            interval: card?.interval || 0,
            reviews: card?.reviews || 0,
          });
        }}
      >
        <label>
          Question
          <textarea
            required
            maxLength={2000}
            value={front}
            onChange={(e) => setFront(e.target.value)}
            placeholder="What do you want to remember?"
            rows={3}
          />
        </label>
        <label>
          Answer
          <textarea
            required
            maxLength={8000}
            value={back}
            onChange={(e) => setBack(e.target.value)}
            placeholder="A clear answer, with an explanation if it helps."
            rows={4}
          />
        </label>
        <label>
          Subject
          <input
            required
            maxLength={40}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g. Biology, Algorithms, History"
          />
        </label>
        <p className="subtle">
          Cards are saved in this browser. Export a backup from Settings.
        </p>
        <div className="button-row">
          <button type="button" className="secondary-button" onClick={onClose}>
            Cancel
          </button>
          <button className="primary-button" type="submit">
            Save card <Check size={16} />
          </button>
        </div>
      </form>
    </Modal>
  );
}
function ReviewSession({
  cards,
  onRate,
  onClose,
}: {
  cards: Card[];
  onRate: (card: Card, rating: "again" | "hard" | "good" | "easy") => void;
  onClose: () => void;
}) {
  const [queue] = useState(cards),
    [index, setIndex] = useState(0),
    [revealed, setRevealed] = useState(false),
    [draft, setDraft] = useState(""),
    [count, setCount] = useState(0);
  const guard = useRef(false);
  const card = queue[index];
  return (
    <Modal onClose={onClose} label="Spaced card review" wide>
      <div className="session-header">
        <span className="session-brand">
          <BookOpen size={20} />
          Spaced review
        </span>
        <span>
          {Math.min(index + 1, queue.length)} of {queue.length}
        </span>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Close review"
        >
          <X size={20} />
        </button>
      </div>
      {!card ? (
        <div className="session-summary">
          <span className="summary-icon">
            <Check size={30} />
          </span>
          <h2>A little more likely to stay.</h2>
          <p>
            {count} card{count === 1 ? "" : "s"} reviewed. Each one has a new
            review time.
          </p>
          <button className="primary-button" onClick={onClose}>
            Back to your collection <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div className="review-body">
          <span className="category-pill sage">{card.subject}</span>
          <h2>{card.front}</h2>
          {!revealed ? (
            <>
              <label className="answer-label">
                Recall first. Write it down or say it to yourself.
                <textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="What can you remember?"
                  rows={4}
                />
              </label>
              <button
                className="primary-button"
                onClick={() => setRevealed(true)}
              >
                Show answer <ArrowRight size={16} />
              </button>
            </>
          ) : (
            <>
              <div className="review-answer">
                <span className="eyebrow">THE ANSWER</span>
                <p>{card.back}</p>
              </div>
              <p className="rating-prompt">
                How well did you recall it? Rate your original answer.
              </p>
              <div className="review-ratings">
                {(["again", "hard", "good", "easy"] as const).map((r) => {
                  const scheduled = scheduleCard(card, r);
                  return (
                    <button
                      key={r}
                      onClick={() => {
                        if (guard.current) return;
                        guard.current = true;
                        onRate(card, r);
                        setCount((n) => n + 1);
                        setIndex((i) => i + 1);
                        setRevealed(false);
                        setDraft("");
                        setTimeout(() => {
                          guard.current = false;
                        }, 150);
                      }}
                    >
                      <strong>
                        {r === "again"
                          ? "Again"
                          : r === "hard"
                            ? "Hard"
                            : r === "good"
                              ? "Good"
                              : "Easy"}
                      </strong>
                      <span>
                        {r === "again"
                          ? "10 minutes"
                          : `${scheduled.interval} day${scheduled.interval === 1 ? "" : "s"}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
    </Modal>
  );
}

function Progress({ store }: { store: Store }) {
  const attempts = store.attempts;
  const correct = attempts.filter((a) => a.correct).length;
  const totalMinutes = Math.round(
    attempts.reduce((s, a) => s + a.duration, 0) / 60000,
  );
  const rated = attempts.filter((a) => a.confidence !== null);
  const confidence = rated.length
    ? Math.round(
        rated.reduce((s, a) => s + (a.confidence || 0), 0) / rated.length,
      )
    : 0;
  const ratedAccuracy = rated.length
    ? Math.round((rated.filter((a) => a.correct).length / rated.length) * 100)
    : 0;
  const unaided = attempts.filter((a) => !a.assisted);
  const accuracy = attempts.length
    ? Math.round((correct / attempts.length) * 100)
    : 0;
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - 13 + i);
    const count = attempts.filter(
      (a) => localDay(a.date) === localDay(d),
    ).length;
    return { date: d, count };
  });
  const max = Math.max(5, ...days.map((d) => d.count));
  return (
    <>
      <PageTitle
        eyebrow="YOUR OWN PACE"
        title="Small steps, made visible."
        description="A record of your practice. No leaderboards. No comparison."
      />
      <div className="progress-stats">
        {[
          {
            label: "Questions answered",
            value: attempts.length,
            unit: "all time",
          },
          {
            label: "Practice accuracy",
            value: attempts.length ? accuracy + "%" : "—",
            unit: `${correct} correct ${correct === 1 ? "answer" : "answers"}`,
          },
          { label: "Time practiced", value: totalMinutes, unit: "minutes" },
          {
            label: "Cards reviewed",
            value: store.cards.reduce((s, c) => s + c.reviews, 0),
            unit: "self-rated recalls",
          },
        ].map((s) => (
          <div className="metric-card" key={s.label}>
            <span>{s.label}</span>
            <strong>{s.value}</strong>
            <small>{s.unit}</small>
          </div>
        ))}
      </div>
      <div className="progress-layout">
        <section className="activity-panel">
          <div className="section-heading">
            <h2>A little consistency</h2>
            <span className="subtle">Last 14 days</span>
          </div>
          <div
            className="activity-chart"
            role="img"
            aria-label={`Answers per day: ${days.map((d) => d.date.toLocaleDateString() + ": " + d.count).join("; ")}`}
          >
            {days.map((d, i) => (
              <div className="chart-day" key={i}>
                <div className="chart-bar-wrap">
                  <span className="bar-count">{d.count || ""}</span>
                  <div
                    className={`chart-bar ${i === 13 ? "today" : ""}`}
                    style={{
                      height: d.count ? Math.max(5, (d.count / max) * 130) : 3,
                    }}
                    title={`${d.count} answers`}
                  />
                </div>
                <span>{d.date.getDate()}</span>
              </div>
            ))}
          </div>
          <div className="chart-caption">
            <span>Questions answered</span>
            <span>{streak(attempts)}-day practice streak</span>
          </div>
        </section>
        <section className="calibration-panel">
          <span className="eyebrow">KNOWING WHAT YOU KNOW</span>
          <h2>Confidence & accuracy</h2>
          <p>
            Compare how sure you felt with how often you answered correctly.
          </p>
          <div className="calibration-row">
            <span>Average confidence</span>
            <strong>{rated.length ? confidence + "%" : "—"}</strong>
          </div>
          <div className="calibration-track">
            <span style={{ width: confidence + "%" }} />
          </div>
          <div className="calibration-row">
            <span>Observed accuracy</span>
            <strong>{rated.length ? ratedAccuracy + "%" : "—"}</strong>
          </div>
          <div className="calibration-track accuracy">
            <span style={{ width: ratedAccuracy + "%" }} />
          </div>
          <small>
            {rated.length} confidence-rated{" "}
            {rated.length === 1 ? "answer" : "answers"}. Aggregate values can
            hide differences between tasks and confidence levels.
          </small>
        </section>
      </div>
      <div className="independent-note">
        <div>
          <h3>With and without a hint</h3>
          <p>
            Help is part of learning. The app only records hints used here; it
            cannot observe outside tools.
          </p>
        </div>
        <span>
          <strong>
            {unaided.length
              ? Math.round(
                  (unaided.filter((a) => a.correct).length / unaided.length) *
                    100,
                ) + "%"
              : "—"}
          </strong>
          {unaided.length} {unaided.length === 1 ? "answer" : "answers"} without
          an in-app hint
        </span>
        <span>
          <strong>{attempts.length - unaided.length}</strong>answers with a hint
        </span>
      </div>
      <section className="skill-panel">
        <div className="section-heading">
          <div>
            <h2>Your practice, by skill</h2>
            <p>
              Accuracy depends on the task, difficulty, and how often you’ve
              practiced.
            </p>
          </div>
        </div>
        <div className="skill-table">
          <div className="skill-table-head">
            <span>EXERCISE</span>
            <span>ANSWERS</span>
            <span>ACCURACY</span>
            <span>NEXT LEVEL</span>
          </div>
          {exercises.map((e) => {
            const own = attempts.filter((a) => a.exercise === e.id);
            return (
              <div className="skill-row" key={e.id}>
                <span>
                  <span className={`skill-dot ${e.color}`} />
                  {e.title}
                </span>
                <span>{own.length}</span>
                <span>
                  {own.length
                    ? Math.round(
                        (own.filter((a) => a.correct).length / own.length) *
                          100,
                      ) + "%"
                    : "—"}
                </span>
                <span>
                  {getLevel(attempts, e.id)}
                  <small> / 5</small>
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <div className="inline-note">
        <CircleHelp size={18} />
        <p>
          These are practice measures, not an intelligence score. A changing mix
          of exercises or difficulty makes raw accuracy hard to compare over
          time. Memory exposure time is set in Settings.
        </p>
      </div>
    </>
  );
}

function Settings({
  store,
  setStore,
  notify,
  storageError,
  onRecover,
}: {
  store: Store;
  setStore: React.Dispatch<React.SetStateAction<Store>>;
  notify: (s: string) => void;
  storageError: string;
  onRecover: () => void;
}) {
  const [confirm, setConfirm] = useState(false),
    [pendingImport, setPendingImport] = useState<Store | null>(null),
    [error, setError] = useState("");
  const file = useRef<HTMLInputElement>(null);
  const setting = <K extends keyof Store["settings"]>(
    key: K,
    value: Store["settings"][K],
  ) => setStore((s) => ({ ...s, settings: { ...s.settings, [key]: value } }));
  const exportData = () => {
    const data = storageError
      ? localStorage.getItem(storageKey()) || JSON.stringify(store)
      : JSON.stringify(store, null, 2);
    const url = URL.createObjectURL(
      new Blob([data], { type: "application/json" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `btrain-backup-${localDay()}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify("Backup downloaded.");
  };
  return (
    <>
      <PageTitle
        eyebrow="MAKE YOURSELF AT HOME"
        title="A practice that fits you."
        description="A few preferences. Everything stays on this device."
      />
      <section className="settings-panel">
        <h2>Your practice</h2>
        <div className="setting-row">
          <div>
            <h3>A small starting cue</h3>
            <p>
              Optional. After [something you already do], I will [one small
              action].
            </p>
          </div>
          <input
            value={store.settings.intention || ""}
            maxLength={180}
            placeholder="After tea, one recall question."
            aria-label="Your starting cue"
            onChange={(e) => setting("intention", e.target.value)}
          />
        </div>
        <div className="setting-row">
          <div>
            <h3>What should we call you?</h3>
            <p>Optional. Just for your own space.</p>
          </div>
          <input
            value={store.settings.name}
            maxLength={40}
            placeholder="Your name"
            aria-label="Your name"
            onChange={(e) => setting("name", e.target.value)}
          />
        </div>
        <div className="setting-row">
          <div>
            <h3>Session length</h3>
            <p>A gentle stopping point. You can always start another.</p>
          </div>
          <select
            aria-label="Session length"
            value={store.settings.sessionLength}
            onChange={(e) => setting("sessionLength", Number(e.target.value))}
          >
            {[2, 5, 8, 12, 20].map((n) => (
              <option value={n} key={n}>
                {n} questions
              </option>
            ))}
          </select>
        </div>
        <div className="setting-row">
          <div>
            <h3>Memory presentation time</h3>
            <p>How long a sequence or pattern stays visible.</p>
          </div>
          <select
            aria-label="Memory presentation time"
            value={store.settings.memorySeconds}
            onChange={(e) => setting("memorySeconds", Number(e.target.value))}
          >
            {[4, 7, 10, 15].map((n) => (
              <option value={n} key={n}>
                {n} seconds
              </option>
            ))}
          </select>
        </div>
        <div className="setting-row">
          <div>
            <h3>Daily practice intention</h3>
            <p>A personal reference, with no penalties for missing a day.</p>
          </div>
          <select
            aria-label="Daily goal"
            value={store.settings.dailyGoal}
            onChange={(e) => setting("dailyGoal", Number(e.target.value))}
          >
            {[5, 10, 15, 20].map((n) => (
              <option value={n} key={n}>
                {n} minutes
              </option>
            ))}
          </select>
        </div>
      </section>
      <section className="settings-panel">
        <h2>Your data</h2>
        <div className="setting-row">
          <div>
            <h3>Keep a backup</h3>
            <p>
              Export your cards, notebook, results, and preferences as JSON.
            </p>
          </div>
          <button
            className="secondary-button"
            onClick={() => {
              try {
                exportData();
              } catch {
                setError(
                  "The backup could not be exported. Browser storage may be unavailable.",
                );
              }
            }}
          >
            <Download size={16} />
            Export data
          </button>
        </div>
        <div className="setting-row">
          <div>
            <h3>Restore a backup</h3>
            <p>Replace the current collection and practice history.</p>
          </div>
          <button
            className="secondary-button"
            onClick={() => file.current?.click()}
          >
            <Upload size={16} />
            Import data
          </button>
          <input
            type="file"
            hidden
            ref={file}
            accept=".json,application/json"
            onChange={async (e) => {
              const f = e.target.files?.[0];
              if (!f) return;
              try {
                if (f.size > 10 * 1024 * 1024)
                  throw new Error("Choose a backup smaller than 10 MB.");
                const value = JSON.parse(await f.text());
                if (!validateStore(value))
                  throw new Error(
                    "This file is not a valid Btrain backup. Your current data is unchanged.",
                  );
                setPendingImport(value);
                setError("");
              } catch (err) {
                setError(
                  err instanceof Error
                    ? err.message
                    : "Could not read this file.",
                );
              }
              e.target.value = "";
            }}
          />
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <div className="setting-row">
          <div>
            <h3>Start fresh</h3>
            <p>Remove this browser’s saved cards and practice history.</p>
          </div>
          <button
            className="text-button danger"
            onClick={() => setConfirm(true)}
          >
            Reset local data
          </button>
        </div>
      </section>
      <div className="inline-note">
        <Leaf size={19} />
        <p>
          No account, tracking pixels, or remote database. Browser storage can
          be cleared by your browser and does not sync between devices. Back up
          anything you want to keep.
        </p>
      </div>
      {confirm && (
        <Modal label="Reset local data" onClose={() => setConfirm(false)}>
          <div className="confirm-body">
            <h2>Start from a clean page?</h2>
            <p>
              This deletes {store.cards.length} cards,{" "}
              {(store.journal || []).length} notebook entries, and{" "}
              {store.attempts.length} answers from this browser. Export a backup
              first if you want to keep them.
            </p>
            <div className="button-row">
              <button
                className="secondary-button"
                onClick={() => setConfirm(false)}
              >
                Keep my data
              </button>
              <button
                className="danger-button"
                onClick={() => {
                  onRecover();
                  setStore({
                    ...defaultStore,
                    settings: { ...defaultStore.settings },
                    cards: [],
                    attempts: [],
                  });
                  setConfirm(false);
                  notify("Your local space has been reset.");
                }}
              >
                Reset everything
              </button>
            </div>
          </div>
        </Modal>
      )}
      {pendingImport && (
        <Modal label="Restore backup" onClose={() => setPendingImport(null)}>
          <div className="confirm-body">
            <h2>Restore this backup?</h2>
            <p>
              Replace your current data with {pendingImport.cards.length} cards,{" "}
              {(pendingImport.journal || []).length} notebook entries, and{" "}
              {pendingImport.attempts.length} answers from the selected file.
            </p>
            <div className="button-row">
              <button
                className="secondary-button"
                onClick={() => setPendingImport(null)}
              >
                Cancel
              </button>
              <button
                className="primary-button"
                onClick={() => {
                  setStore(pendingImport);
                  onRecover();
                  setPendingImport(null);
                  notify("Backup restored.");
                }}
              >
                Restore backup
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
function FocusTimer({ onClose }: { onClose: () => void }) {
  const [minutes, setMinutes] = useState(25),
    [remaining, setRemaining] = useState(25 * 60),
    [running, setRunning] = useState(false);
  const end = useRef(0);
  useEffect(() => {
    if (!running) return;
    end.current = Date.now() + remaining * 1000;
    const id = setInterval(() => {
      const next = Math.max(0, Math.ceil((end.current - Date.now()) / 1000));
      setRemaining(next);
      if (next === 0) setRunning(false);
    }, 250);
    return () =>
      clearInterval(
        id,
      ); /* The deadline is captured only when starting or resuming. */ // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);
  return (
    <Modal label="Focus timer" onClose={onClose}>
      <div className="modal-heading">
        <span className="eyebrow">ONE THING AT A TIME</span>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Close timer"
        >
          <X size={20} />
        </button>
      </div>
      <div className="focus-body">
        <span className="focus-leaf">
          <Leaf size={27} />
        </span>
        <h2>
          {remaining === 0 ? "Time for a little break." : "Make room to focus."}
        </h2>
        <p>Pick something to work on. Let everything else wait.</p>
        <div
          className="timer-display"
          aria-label={`${Math.floor(remaining / 60)} minutes ${remaining % 60} seconds remaining`}
        >
          {String(Math.floor(remaining / 60)).padStart(2, "0")}
          <span>:</span>
          {String(remaining % 60).padStart(2, "0")}
        </div>
        <div className="timer-options">
          {[10, 25, 45].map((n) => (
            <button
              key={n}
              disabled={running}
              className={minutes === n ? "selected" : ""}
              onClick={() => {
                setMinutes(n);
                setRemaining(n * 60);
              }}
            >
              {n} min
            </button>
          ))}
        </div>
        <div className="button-row">
          <button
            className="icon-button"
            aria-label="Reset timer"
            onClick={() => {
              setRunning(false);
              setRemaining(minutes * 60);
            }}
          >
            <RotateCcw size={20} />
          </button>
          <button
            className="primary-button"
            onClick={() => {
              if (remaining === 0) setRemaining(minutes * 60);
              setRunning(!running);
            }}
          >
            {running ? <Pause size={16} /> : <Play size={16} />}{" "}
            {running
              ? "Pause"
              : remaining === 0
                ? "Start again"
                : "Start focus"}
          </button>
        </div>
        <small>
          Closing this timer stops it. Focus time is separate from exercise
          time.
        </small>
      </div>
    </Modal>
  );
}

function FieldGuide({
  onSaveCard,
  onStart,
}: {
  onSaveCard: (c: Card) => void;
  onStart: (id: ExerciseId | "daily" | "quick") => void;
}) {
  const [category, setCategory] = useState("All topics"),
    [open, setOpen] = useState<string | null>(null),
    [recall, setRecall] = useState(""),
    [revealed, setRevealed] = useState(false),
    [saved, setSaved] = useState(false),
    [read, setRead] = useState(false);
  const topics = ["All topics", ...new Set(guides.map((g) => g.category))];
  const current = guides.find((g) => g.id === open);
  const practiceMap: Record<string, ExerciseId> = {
    Memory: "words",
    Learning: "fractions",
    "Independent thinking": "trace",
    Attention: "attention",
    Psychology: "bias",
    Reasoning: "evidence",
    "Manipulation literacy": "manipulation",
  };
  return (
    <>
      <PageTitle
        eyebrow="UNDERSTAND. TRY. REMEMBER."
        title="A field guide to your own thinking."
        description="Short lessons with a recall check and something to try in real life. One is enough for today."
      />
      <div className="guide-intro">
        <Lightbulb size={23} />
        <p>
          You don’t have to read everything. Pick one useful idea, close the
          explanation, and try to bring it back. Save it as a card to revisit
          later.
        </p>
      </div>
      <div className="category-tabs" role="group" aria-label="Filter lessons">
        {topics.map((t) => (
          <button
            key={t}
            className={category === t ? "selected" : ""}
            onClick={() => setCategory(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="guide-grid">
        {guides
          .filter((g) => category === "All topics" || g.category === category)
          .map((g, i) => (
            <button
              className="guide-card"
              key={g.id}
              onClick={() => {
                setOpen(g.id);
                setRecall("");
                setRevealed(false);
                setSaved(false);
                setRead(false);
              }}
            >
              <div>
                <span className="guide-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="tag">{g.category}</span>
              </div>
              <h3>{g.title}</h3>
              <p>{g.summary}</p>
              <span className="text-button">
                Read & recall <ArrowRight size={14} />
              </span>
            </button>
          ))}
      </div>
      <div className="inline-note">
        <FlaskConical size={18} />
        <p>
          These are practical adaptations of learning and psychology research.
          They do not diagnose attention problems or promise immunity to
          manipulation. Source numbers refer to the{" "}
          <a href="/research.md" target="_blank">
            full research notes
          </a>
          .
        </p>
      </div>
      {current && (
        <Modal label={current.title} onClose={() => setOpen(null)} wide>
          <div className="modal-heading">
            <span className="category-pill sage">{current.category}</span>
            <button
              className="icon-button"
              aria-label="Close lesson"
              onClick={() => setOpen(null)}
            >
              <X size={20} />
            </button>
          </div>
          <div className="guide-lesson">
            <h2>{current.title}</h2>
            <p className="lesson-summary">{current.summary}</p>
            {!read ? (
              <>
                <ol className="lesson-steps">
                  {current.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
                <div className="lesson-application">
                  <span className="eyebrow">PUT IT TO USE</span>
                  <p>{current.application}</p>
                </div>
                <button
                  className="primary-button"
                  onClick={() => setRead(true)}
                >
                  Close the notes & try to recall <ArrowRight size={16} />
                </button>
              </>
            ) : (
              <>
                <span className="eyebrow">WITHOUT LOOKING BACK</span>
                <h3 className="recall-question">{current.question}</h3>
                <textarea
                  aria-label="Recall the lesson"
                  value={recall}
                  onChange={(e) => setRecall(e.target.value)}
                  placeholder="Try one sentence. It doesn’t have to be polished."
                  rows={3}
                />
                {!revealed ? (
                  <div className="button-row">
                    <button
                      className="text-button"
                      onClick={() => setRead(false)}
                    >
                      Read it again
                    </button>
                    <button
                      className="primary-button"
                      onClick={() => setRevealed(true)}
                    >
                      Compare with the explanation <ArrowRight size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="lesson-answer">
                      <span className="eyebrow">COMPARE YOUR REASONING</span>
                      <p>{current.answer}</p>
                      <small>
                        Self-check: did you explain the reason, or only repeat a
                        label?
                      </small>
                    </div>
                    <div className="button-row">
                      <button
                        className="secondary-button"
                        disabled={saved}
                        onClick={() => {
                          onSaveCard({
                            id: crypto.randomUUID(),
                            front: current.question,
                            back:
                              current.answer +
                              "\n\nTry this: " +
                              current.application,
                            subject: current.category,
                            due: Date.now() + 86400000,
                            interval: 1,
                            reviews: 0,
                          });
                          setSaved(true);
                        }}
                      >
                        {saved ? <Check size={15} /> : <Plus size={15} />}{" "}
                        {saved
                          ? "Saved for tomorrow"
                          : "Remember this tomorrow"}
                      </button>
                      {practiceMap[current.category] && (
                        <button
                          className="primary-button"
                          onClick={() => {
                            setOpen(null);
                            onStart(practiceMap[current.category]);
                          }}
                        >
                          Try an exercise <ArrowRight size={15} />
                        </button>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
            <p className="lesson-source">
              Research {current.source} ·{" "}
              <a href="/research.md" target="_blank">
                Sources & limitations <ArrowUpRight size={11} />
              </a>
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}
function ThinkingNotebook({
  store,
  setStore,
  notify,
}: {
  store: Store;
  setStore: React.Dispatch<React.SetStateAction<Store>>;
  notify: (s: string) => void;
}) {
  const [entry, setEntry] = useState<JournalEntry | null>(null),
    [step, setStep] = useState(0);
  const [lastPrompt, setLastPrompt] = useState("");
  useEffect(() => {
    if (
      !entry ||
      (!entry.initial.trim() &&
        !entry.revision.trim() &&
        !entry.reflection.trim())
    )
      return;
    const timer = setTimeout(
      () =>
        setStore((s) => ({
          ...s,
          journal: [
            entry,
            ...(s.journal || []).filter((j) => j.id !== entry.id),
          ],
        })),
      500,
    );
    return () => clearTimeout(timer);
  }, [entry, setStore]);
  const begin = () => {
    const p = shuffle(
      creativePrompts.filter((p) => p.prompt !== lastPrompt),
    )[0];
    setLastPrompt(p.prompt);
    setEntry({
      id: crypto.randomUUID(),
      prompt: p.prompt,
      constraint: p.constraint,
      reflectionPrompt: p.reflection,
      initial: "",
      revision: "",
      reflection: "",
      date: new Date().toISOString(),
    });
    setStep(0);
  };
  const save = () => {
    if (!entry) return;
    setStore((s) => ({
      ...s,
      journal: [entry, ...(s.journal || []).filter((j) => j.id !== entry.id)],
    }));
    setEntry(null);
    notify("Your thinking is saved. Come back to it whenever you like.");
  };
  return (
    <>
      <PageTitle
        eyebrow="LEAVE SOME ROOM FOR YOUR OWN IDEAS"
        title="Your thinking notebook."
        description="Make a first attempt. Change an assumption. See where it takes you."
      />
      <div className="notebook-hero">
        <div>
          <span className="eyebrow">AN OPEN QUESTION</span>
          <h2>There’s more than one way.</h2>
          <p>
            Small creative challenges with no single right answer.
            <br />
            Your words, your ideas, and room to revise them.
          </p>
          <button className="primary-button" onClick={begin}>
            Give me a prompt <ArrowRight size={16} />
          </button>
        </div>
        <Pencil size={75} strokeWidth={0.75} />
      </div>
      <div className="section-heading">
        <div>
          <h2>Ideas in progress</h2>
          <p>Keep the first version. Return with a new angle.</p>
        </div>
        <span className="subtle">{(store.journal || []).length} saved</span>
      </div>
      {!store.journal?.length ? (
        <div className="empty-state study-empty">
          <div className="empty-art">
            <Pencil size={30} strokeWidth={1.2} />
          </div>
          <h3>Start rough. That’s allowed.</h3>
          <p>
            A sentence, a sketch in words, a possibility.
            <br />
            There is no creativity score here.
          </p>
          <button className="text-button" onClick={begin}>
            Try one small idea <ArrowRight size={15} />
          </button>
        </div>
      ) : (
        <div className="notebook-list">
          {store.journal.map((j) => (
            <button
              key={j.id}
              onClick={() => {
                setEntry({ ...j });
                setStep(0);
              }}
            >
              <span className="eyebrow">
                {new Date(j.date).toLocaleDateString("en", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <h3>{j.prompt}</h3>
              <p>{j.initial || "An idea waiting to begin."}</p>
              <span className="text-button">
                Return to this thought <ArrowUpRight size={14} />
              </span>
            </button>
          ))}
        </div>
      )}
      <div className="inline-note">
        <Leaf size={18} />
        <p>
          Writing more words does not mean you are more creative. Explore a
          different category of idea, test an assumption, or make an idea more
          useful. Save a draft before stepping away.
        </p>
      </div>
      {entry && (
        <Modal label="Thinking notebook entry" onClose={save} wide>
          <div className="modal-heading">
            <span className="eyebrow">
              {
                [
                  "01 · YOUR FIRST THOUGHT",
                  "02 · A DIFFERENT ANGLE",
                  "03 · THINK ABOUT YOUR THINKING",
                ][step]
              }
            </span>
            <button
              className="icon-button"
              aria-label="Save and close notebook"
              onClick={save}
            >
              <X size={20} />
            </button>
          </div>
          <div className="notebook-entry">
            <h2>
              {step === 0
                ? entry.prompt
                : step === 1
                  ? entry.constraint
                  : entry.reflectionPrompt}
            </h2>
            {step > 0 && (
              <details>
                <summary>
                  Your first thought <ChevronDown size={14} />
                </summary>
                <p>{entry.initial || "No first thought recorded."}</p>
              </details>
            )}
            <label className="answer-label">
              {step === 0
                ? "A few rough ideas are enough."
                : step === 1
                  ? "Change the approach, not just the wording."
                  : "What changed? What would you try?"}
              <textarea
                aria-label="Your own thinking"
                value={
                  step === 0
                    ? entry.initial
                    : step === 1
                      ? entry.revision
                      : entry.reflection
                }
                onChange={(e) =>
                  setEntry({
                    ...entry,
                    [step === 0
                      ? "initial"
                      : step === 1
                        ? "revision"
                        : "reflection"]: e.target.value,
                  })
                }
                rows={7}
                maxLength={12000}
                placeholder="Start here. Nobody is grading this."
              />
            </label>
            <p className="notebook-save-note">
              Saved on this device as you write.
            </p>
            <div className="notebook-controls">
              <button className="text-button" onClick={save}>
                Save & take a break
              </button>
              <div>
                {step > 0 && (
                  <button
                    className="secondary-button"
                    onClick={() => setStep((n) => n - 1)}
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>
                )}
                <button
                  className="primary-button"
                  onClick={() => (step < 2 ? setStep((n) => n + 1) : save())}
                >
                  {step < 2 ? "A new angle" : "Save this thought"}
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
