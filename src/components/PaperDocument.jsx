import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';

const PaperDocument = ({ title, content }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
            {/* ASCII装饰边框 */}
            <div className="w-full max-w-4xl">
                <pre className="text-slate-400 text-xs mb-4 overflow-hidden">
                    {`┌────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                                │
│   ████████╗ ███████╗ ██████╗ ███╗   ███╗ ███████╗                                           │
│   ╚══██╔══╝ ██╔════╝ ██╔══██╗████╗ ████║ ██╔════╝                                           │
│      ██║    █████╗   ██████╔╝██╔████╔██║ ███████╗                                           │
│      ██║    ██╔══╝   ██╔══██╗██║╚██╔╝██║ ╚════██║                                           │
│      ██║    ███████╗ ██║  ██║██║ ╚═╝ ██║ ███████║                                           │
│      ╚═╝    ╚══════╝ ╚═╝  ╚═╝╚═╝     ╚═╝ ╚══════╝                                           │
│                                                                                                │
└────────────────────────────────────────────────────────────────────────────────────────────┘`}
                </pre>

                {/* 信纸容器 */}
                <div className="bg-white shadow-xl rounded-none border-l-4 border-slate-200 relative">
                    {/* 信纸孔洞 */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-slate-50 border-r border-slate-200">
                        <div className="flex flex-col items-center justify-start pt-8 gap-8">
                            {Array.from({ length: 15 }).map((_, i) => (
                                <div key={i} className="w-4 h-4 rounded-full border-2 border-slate-300 bg-white" />
                            ))}
                        </div>
                    </div>

                    {/* 信纸内容区域 */}
                    <div className="pl-20 pr-8 py-8">
                        {/* 返回按钮 */}
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-8 font-mono text-sm border-b border-slate-300 pb-1 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>← BACK TO HOME</span>
                        </Link>

                        {/* 文档标题 */}
                        <div className="mb-8 border-b-2 border-slate-200 pb-4">
                            <h1 className="text-2xl font-mono font-bold text-slate-800 tracking-wider">
                                {title}
                            </h1>
                            <div className="mt-2 text-xs font-mono text-slate-500">
                                Document ID: {Date.now().toString(36).toUpperCase()}
                            </div>
                        </div>

                        {/* Markdown内容 */}
                        <div className="prose prose-slate max-w-none">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    // 标题样式
                                    h1: ({ children }) => (
                                        <h1 className="text-xl font-mono font-bold text-slate-800 mb-4 mt-8 first:mt-0 border-b border-slate-300 pb-2">
                                            {children}
                                        </h1>
                                    ),
                                    h2: ({ children }) => (
                                        <h2 className="text-lg font-mono font-bold text-slate-700 mb-3 mt-6">
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 className="text-base font-mono font-bold text-slate-700 mb-2 mt-4">
                                            {children}
                                        </h3>
                                    ),
                                    // 段落样式
                                    p: ({ children }) => (
                                        <p className="text-sm leading-relaxed text-slate-700 mb-4 font-mono">
                                            {children}
                                        </p>
                                    ),
                                    // 列表样式
                                    ul: ({ children }) => (
                                        <ul className="list-none mb-4 space-y-1">
                                            {children}
                                        </ul>
                                    ),
                                    li: ({ children }) => (
                                        <li className="text-sm text-slate-700 font-mono flex items-start">
                                            <span className="text-slate-400 mr-2">•</span>
                                            <span>{children}</span>
                                        </li>
                                    ),
                                    // 强调文本
                                    strong: ({ children }) => (
                                        <strong className="font-bold text-slate-800">
                                            {children}
                                        </strong>
                                    ),
                                    // 代码块样式（用于ASCII艺术）
                                    code: ({ children, inline }) =>
                                        inline ? (
                                            <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono text-slate-700">
                                                {children}
                                            </code>
                                        ) : (
                                            <pre className="bg-slate-50 border border-slate-200 p-4 rounded-none text-xs font-mono text-slate-600 overflow-x-auto mb-4 leading-tight">
                                                <code>{children}</code>
                                            </pre>
                                        ),
                                    // 预格式化文本（用于ASCII装饰）
                                    pre: ({ children }) => (
                                        <pre className="bg-slate-50 border border-slate-200 p-4 rounded-none text-xs font-mono text-slate-600 overflow-x-auto mb-4 leading-tight whitespace-pre">
                                            {children}
                                        </pre>
                                    ),
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    </div>

                    {/* 信纸横线 */}
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
                </div>

                {/* 底部ASCII装饰 */}
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

export default PaperDocument; 