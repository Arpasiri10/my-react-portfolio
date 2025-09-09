import { useState, useMemo, useEffect } from 'react';
import { TranslateContext } from '../contexts/translate.context.ts';

const Language = {
    TH: 'TH',
    EN: 'EN',
} as const;

type Language = typeof Language[keyof typeof Language];

export interface TranslateContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    translate: (th: string, en: string) => string;
}

const TranslateProvider = ({ children }: { children: React.ReactNode }) => {

    const getInitialLanguage = (): Language => {
        const storedLang = localStorage.getItem('lang');
        if (storedLang === Language.EN) return Language.EN;
        return Language.TH;
    }

    const [language, setLanguage] = useState<Language>(getInitialLanguage);

    useEffect(() => {
        localStorage.setItem('lang', language);
    }, [language]);

    const translate = (th: string, en: string) => language === Language.TH ? th : en;

    const value = useMemo<TranslateContextType>(() => ({
        language,
        setLanguage,
        translate
    }), [language]);

    return (
        <TranslateContext.Provider value={value}>
            {children}
        </TranslateContext.Provider>
    )
}

export default TranslateProvider;