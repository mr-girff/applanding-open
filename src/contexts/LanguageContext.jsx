import { createContext, useContext, useState, useEffect } from 'react';

// 语言资源
const translations = {
    zh: {
        // 主要内容
        title: "口袋粉丝App",
        subtitle: "坐拥10W+虚拟AI粉丝",
        glitchText: "手机直播间模拟器",
        appStore: "App Store",
        googlePlay: "Google Play",

        // 导航和法律页面
        privacy: "隐私政策",
        terms: "使用协议",
        contact: "联系我们",
        copyright: "© 2024 武汉胃口生成技术有限公司. 保留所有权利.",
        backToHome: "返回首页",

        // 联系我们页面
        contactTitle: "联系我们",
        contactSubtitle: "我们很乐意为您提供帮助",
        contactEmail: "邮箱联系",
        contactEmailDesc: "发送邮件给我们，我们会尽快回复",
        contactSocial: "社交媒体",
        contactSocialDesc: "关注我们获取最新动态",
        contactSupport: "技术支持",
        contactSupportDesc: "如果您在使用过程中遇到任何问题，请随时联系我们",

        // SEO和meta信息
        metaDescription: "口袋粉丝App - 坐拥10W+虚拟AI粉丝的手机直播间模拟器，让你体验真实的直播盛况！",
        metaKeywords: "口袋粉丝,直播模拟器,虚拟粉丝,AI粉丝,手机直播,直播间,弹幕互动",

        // 语言选择
        language: "语言",
        languages: {
            zh: "中文",
            en: "English",
            ja: "日本語",
            ko: "한국어"
        }
    },

    en: {
        title: "Lulufans",
        subtitle: "Own 100K+ Virtual AI Fans",
        glitchText: "Mobile Live Streaming Simulator",
        appStore: "App Store",
        googlePlay: "Google Play",

        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact Us",
        copyright: "© 2024 Wuhan Weikou Generation Technology Co., Ltd. All rights reserved.",
        backToHome: "Back to Home",

        // Contact page
        contactTitle: "Contact Us",
        contactSubtitle: "We're here to help you",
        contactEmail: "Email Contact",
        contactEmailDesc: "Send us an email and we'll get back to you soon",
        contactSocial: "Social Media",
        contactSocialDesc: "Follow us for the latest updates",
        contactSupport: "Technical Support",
        contactSupportDesc: "If you encounter any issues while using the app, please feel free to contact us",

        metaDescription: "Lulufans - Mobile live streaming simulator with 100K+ virtual AI fans, experience real streaming atmosphere!",
        metaKeywords: "lulufans,live streaming simulator,virtual fans,AI fans,mobile streaming,live room,danmaku interaction",

        language: "Language",
        languages: {
            zh: "中文",
            en: "English",
            ja: "日本語",
            ko: "한국어"
        }
    },

    ja: {
        title: "Lulufans",
        subtitle: "10万+のバーチャルAIファンを所有",
        glitchText: "モバイルライブ配信シミュレーター",
        appStore: "App Store",
        googlePlay: "Google Play",

        privacy: "プライバシーポリシー",
        terms: "利用規約",
        contact: "お問い合わせ",
        copyright: "© 2024 武漢胃口生成技術有限公司. 全著作権所有.",
        backToHome: "ホームに戻る",

        // Contact page
        contactTitle: "お問い合わせ",
        contactSubtitle: "サポートいたします",
        contactEmail: "メール連絡",
        contactEmailDesc: "メールをお送りください。お早めに返信いたします",
        contactSocial: "ソーシャルメディア",
        contactSocialDesc: "最新情報をフォローしてください",
        contactSupport: "技術サポート",
        contactSupportDesc: "アプリの使用中に問題が発生した場合は、お気軽にお問い合わせください",

        metaDescription: "Lulufans - 10万+のバーチャルAIファンを持つモバイルライブ配信シミュレーター、リアルな配信雰囲気を体験！",
        metaKeywords: "lulufans,ライブ配信シミュレーター,バーチャルファン,AIファン,モバイル配信,ライブルーム,弾幕インタラクション",

        language: "言語",
        languages: {
            zh: "中文",
            en: "English",
            ja: "日本語",
            ko: "한국어"
        }
    },

    ko: {
        title: "Lulufans",
        subtitle: "10만+ 가상 AI 팬 보유",
        glitchText: "모바일 라이브 스트리밍 시뮬레이터",
        appStore: "App Store",
        googlePlay: "Google Play",

        privacy: "개인정보처리방침",
        terms: "이용약관",
        contact: "문의하기",
        copyright: "© 2024 우한웨이커우생성기술유한공사. 모든 권리 보유.",
        backToHome: "홈으로 돌아가기",

        // Contact page
        contactTitle: "문의하기",
        contactSubtitle: "언제든지 도움을 드리겠습니다",
        contactEmail: "이메일 연락",
        contactEmailDesc: "이메일을 보내주시면 빠르게 답변드리겠습니다",
        contactSocial: "소셜 미디어",
        contactSocialDesc: "최신 소식을 팔로우하세요",
        contactSupport: "기술 지원",
        contactSupportDesc: "앱 사용 중 문제가 발생하면 언제든지 문의해 주세요",

        metaDescription: "Lulufans - 10만+ 가상 AI 팬을 가진 모바일 라이브 스트리밍 시뮬레이터, 실제 스트리밍 분위기를 경험하세요!",
        metaKeywords: "lulufans,라이브 스트리밍 시뮬레이터,가상 팬,AI 팬,모바일 스트리밍,라이브룸,댓글 상호작용",

        language: "언어",
        languages: {
            zh: "中文",
            en: "English",
            ja: "日本語",
            ko: "한국어"
        }
    }
};

// 语言检测函数
const detectLanguage = () => {
    // 首先检查localStorage中保存的语言设置
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
        return savedLanguage;
    }

    // 检测浏览器语言
    const browserLanguage = navigator.language || navigator.userLanguage;
    const languageCode = browserLanguage.split('-')[0];

    // 映射常见的语言代码
    const languageMap = {
        'zh': 'zh',
        'en': 'en',
        'ja': 'ja',
        'ko': 'ko'
    };

    return languageMap[languageCode] || 'zh'; // 默认中文
};

// 创建语言上下文
const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(detectLanguage);

    useEffect(() => {
        // 保存语言设置到localStorage
        localStorage.setItem('preferred-language', currentLanguage);

        // 更新HTML lang属性
        document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' :
            currentLanguage === 'en' ? 'en-US' :
                currentLanguage === 'ja' ? 'ja-JP' : 'ko-KR';

        // 更新页面标题和meta信息
        const t = translations[currentLanguage];
        document.title = `${t.title} - ${t.glitchText} | ${t.subtitle}`;

        // 更新meta描述
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', t.metaDescription);
        }

        // 更新meta关键词
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', t.metaKeywords);
        }
    }, [currentLanguage]);

    const changeLanguage = (language) => {
        if (translations[language]) {
            setCurrentLanguage(language);
        }
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[currentLanguage];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    const value = {
        currentLanguage,
        changeLanguage,
        t,
        translations: translations[currentLanguage],
        availableLanguages: Object.keys(translations)
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext; 