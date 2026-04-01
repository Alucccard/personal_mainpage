import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '快速链接',
      links: [
        { label: '主页', href: '#' },
        { label: '作品集', href: '#portfolio' },
        { label: '博客', href: '#blog' },
        { label: '关于我', href: '#about' },
      ],
    },
    {
      title: '资源',
      links: [
        { label: '技术文档', href: '#' },
        { label: '源代码', href: '#' },
        { label: '教程', href: '#' },
        { label: '工具', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: 'f', label: 'Facebook', href: '#' },
    { icon: 't', label: 'Twitter', href: '#' },
    { icon: 'g', label: 'GitHub', href: '#' },
    { icon: 'l', label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">关于我</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              一名充满热情的全栈开发者，专注于创建美观、高效的web应用和移动应用。欢迎联系我讨论任何项目。
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">联系方式</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
                <span className="font-semibold">邮箱：</span>
                <a href="mailto:hello@example.com" className="hover:text-white transition-colors">
                  hello@example.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="font-semibold">电话：</span>
                <a href="tel:+86-10-1234-5678" className="hover:text-white transition-colors">
                  +86 10-1234-5678
                </a>
              </li>
              <li className="text-gray-400">
                <span className="font-semibold">地址：</span>
                <span>北京, 中国</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                title={social.label}
                aria-label={social.label}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} 我的个人主页. 保留所有权利。&nbsp;
            <a href="#" className="hover:text-gray-400 transition-colors">
              隐私政策
            </a>
            &nbsp;|&nbsp;
            <a href="#" className="hover:text-gray-400 transition-colors">
              服务条款
            </a>
          </p>
          <p className="mt-4">
            使用 <span className="text-blue-400">Next.js</span> 和{' '}
            <span className="text-blue-400">React</span> 构建
          </p>
        </div>
      </div>
    </footer>
  );
};
