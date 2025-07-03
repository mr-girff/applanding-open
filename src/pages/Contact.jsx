import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Twitter, Github, Copy, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { config } from '../config';

const Contact = () => {
    const { t, currentLanguage } = useLanguage();
    const [copySuccess, setCopySuccess] = useState(false);

    // ═══════════════════════════════════════════════════════════════════
    // 🎯 页面标题动态更新
    // ═══════════════════════════════════════════════════════════════════
    useEffect(() => {
        const titles = {
            zh: '联系我们 - FakeLive 直播模拟器',
            en: 'Contact Us - FakeLive Simulator',
            ja: 'お問い合わせ - FakeLive シミュレーター',
            ko: '문의하기 - FakeLive 시뮬레이터'
        };
        document.title = titles[currentLanguage];
    }, [currentLanguage]);

    // ═══════════════════════════════════════════════════════════════════
    // 🎨 复制邮箱功能
    // ═══════════════════════════════════════════════════════════════════
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(config.social.email);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
            {/* ════════════════════════════════════════════════════════════════ */}
            {/* 🎨 ASCII 装饰边框 */}
            {/* ════════════════════════════════════════════════════════════════ */}
            <div className="w-full max-w-4xl">
                <pre className="text-slate-400 text-xs mb-4 overflow-hidden">
                    {`┌────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                                │
│   ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗                              │
│  ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝                              │
│  ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║                                 │
│  ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║                                 │
│  ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║                                 │
│   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝                                 │
│                                                                                                │
└────────────────────────────────────────────────────────────────────────────────────────────┘`}
                </pre>

                {/* ════════════════════════════════════════════════════════════════ */}
                {/* 📄 信纸容器 */}
                {/* ════════════════════════════════════════════════════════════════ */}
                <motion.div
                    className="bg-white shadow-xl rounded-none border-l-4 border-slate-200 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* ──────────────────────────────────────────────────────────── */}
                    {/* 🕳️ 信纸孔洞 */}
                    {/* ──────────────────────────────────────────────────────────── */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-slate-50 border-r border-slate-200">
                        <div className="flex flex-col items-center justify-start pt-8 gap-8">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className="w-4 h-4 rounded-full border-2 border-slate-300 bg-white" />
                            ))}
                        </div>
                    </div>

                    {/* ──────────────────────────────────────────────────────────── */}
                    {/* 📝 信纸内容区域 */}
                    {/* ──────────────────────────────────────────────────────────── */}
                    <div className="pl-20 pr-8 py-8">

                        {/* 返回按钮 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-8 font-mono text-sm border-b border-slate-300 pb-1 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>← {t('backToHome').toUpperCase()}</span>
                            </Link>
                        </motion.div>

                        {/* 文档标题 */}
                        <motion.div
                            className="mb-8 border-b-2 border-slate-200 pb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <h1 className="text-2xl font-mono font-bold text-slate-800 tracking-wider">
                                {t('contactTitle').toUpperCase()}
                            </h1>
                            <div className="mt-2 text-xs font-mono text-slate-500">
                                Document ID: CONTACT-{Date.now().toString(36).toUpperCase()}
                            </div>
                        </motion.div>

                        {/* 联系信息内容 */}
                        <motion.div
                            className="space-y-8 font-mono text-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >

                            {/* ──────────────────────────────────────────────── */}
                            {/* 📧 邮箱联系部分 */}
                            {/* ──────────────────────────────────────────────── */}
                            <div className="border-b border-slate-200 pb-6">
                                <h2 className="text-lg font-mono font-bold text-slate-700 mb-3 flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    {t('contactEmail')}
                                </h2>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    {t('contactEmailDesc')}
                                </p>

                                <div className="bg-slate-50 border border-slate-200 p-4 rounded-none mb-4">
                                    <div className="flex items-center justify-between">
                                        <code className="text-slate-800 font-mono">
                                            {config.social.email}
                                        </code>
                                        <button
                                            onClick={copyEmail}
                                            className="ml-3 p-2 hover:bg-slate-200 rounded transition-colors"
                                        >
                                            {copySuccess ? (
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-slate-600" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <a
                                    href={`mailto:${config.social.email}`}
                                    className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 border-b border-slate-300 pb-1 transition-colors"
                                >
                                    → 发送邮件
                                </a>
                            </div>

                            {/* ──────────────────────────────────────────────── */}
                            {/* 🌐 社交媒体部分 */}
                            {/* ──────────────────────────────────────────────── */}
                            <div className="border-b border-slate-200 pb-6">
                                <h2 className="text-lg font-mono font-bold text-slate-700 mb-3 flex items-center gap-2">
                                    <Twitter className="w-5 h-5" />
                                    {t('contactSocial')}
                                </h2>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    {t('contactSocialDesc')}
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Twitter className="w-4 h-4 text-slate-500" />
                                        <span className="text-slate-600">Twitter / X:</span>
                                        <a
                                            href={config.social.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-800 hover:text-slate-600 border-b border-slate-300 pb-1 transition-colors"
                                        >
                                            @liseami1
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Github className="w-4 h-4 text-slate-500" />
                                        <span className="text-slate-600">GitHub:</span>
                                        <a
                                            href={config.social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-800 hover:text-slate-600 border-b border-slate-300 pb-1 transition-colors"
                                        >
                                            @liseami
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ──────────────────────────────────────────────── */}
                            {/* 🛠️ 技术支持部分 */}
                            {/* ──────────────────────────────────────────────── */}
                            <div>
                                <h2 className="text-lg font-mono font-bold text-slate-700 mb-3">
                                    {t('contactSupport')}
                                </h2>
                                <p className="text-slate-600 leading-relaxed">
                                    {t('contactSupportDesc')}
                                </p>
                            </div>

                        </motion.div>
                    </div>

                    {/* ──────────────────────────────────────────────────────────── */}
                    {/* 📏 信纸横线 */}
                    {/* ──────────────────────────────────────────────────────────── */}
                    <div className="absolute inset-0 pl-20 pr-8 pointer-events-none">
                        <div className="h-full">
                            {Array.from({ length: 50 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="border-b border-slate-100"
                                    style={{ height: '24px' }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ════════════════════════════════════════════════════════════════ */}
                {/* 🎨 底部 ASCII 装饰 */}
                {/* ════════════════════════════════════════════════════════════════ */}
                <pre className="text-slate-400 text-xs mt-4 overflow-hidden">
                    {`└────────────────────────────────────────────────────────────────────────────────────────────┘
  ████████████████████████████████████████████████████████████████████████████████████████████
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ████████████████████████████████████████████████████████████████████████████████████████████`}
                </pre>
            </div>
        </div>
    );
};

export default Contact; 