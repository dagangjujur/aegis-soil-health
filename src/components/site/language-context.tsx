"use client";

/**
 * Context bahasa ID/EN.
 * - Default: Bahasa Indonesia.
 * - Pilihan pengguna disimpan di localStorage (key: aegis-lang).
 * - localStorage dibaca lewat useSyncExternalStore — aman hidrasi
 *   (server merender ID, klien sinkron setelah hidrasi tanpa mismatch).
 */

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { DEFAULT_LANG, LANG_STORAGE_KEY, type Lang, type Locale } from "@/content";

const LANG_EVENT = "aegis:lang-change";

function subscribe(callback: () => void) {
  window.addEventListener(LANG_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(LANG_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Lang {
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    return saved === "en" ? "en" : "id";
  } catch {
    return DEFAULT_LANG;
  }
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Ambil teks sesuai bahasa aktif dari objek {id, en} */
  t: (l: Locale) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: DEFAULT_LANG,
  setLang: () => undefined,
  t: (l) => l.id,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Lang) => {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      /* abaikan — penyimpanan penuh/di-blok */
    }
    document.documentElement.lang = next;
    window.dispatchEvent(new Event(LANG_EVENT));
  }, []);

  const t = useCallback((l: Locale) => l[lang], [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
