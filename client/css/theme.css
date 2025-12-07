// 主题控制脚本：默认深色，添加切换按钮并记忆用户选择
const THEME_KEY = 'site-theme'; // 'dark' | 'light' | 'auto'

// 读取并应用主题（在 DOMContentLoaded 前加载尽量减少闪烁）
function applyTheme(theme) {
  const body = document.documentElement || document.body;
  const metaTheme = document.getElementById('meta-theme-color');

  if (theme === 'dark') {
    body.classList.add('dark');
    if (metaTheme) metaTheme.setAttribute('content', '#071019');
  } else if (theme === 'light') {
    body.classList.remove('dark');
    if (metaTheme) metaTheme.setAttribute('content', '#ffffff');
  } else { // auto: 跟随系统
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      body.classList.add('dark');
      if (metaTheme) metaTheme.setAttribute('content', '#071019');
    } else {
      body.classList.remove('dark');
      if (metaTheme) metaTheme.setAttribute('content', '#ffffff');
    }
  }

  // 更新图标与 aria-label（如果存在）
  const btn = document.getElementById('theme-toggle-btn');
  const icon = document.getElementById('theme-icon');
  if (btn && icon) {
    if (theme === 'light') {
      btn.setAttribute('title', '切换到深色主题');
      btn.setAttribute('aria-label', '切换到深色主题');
      // 太阳图标
      icon.innerHTML = '<path d=\"M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 8h-2v-3h2v3zM18.36 6.64l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM20 11v2h3v-2h-3zM6.76 19.16l-1.79 1.79 1.79 1.79 1.79-1.79-1.79-1.79zM19 13h3v-2h-3v2zM12 6a6 6 0 100 12 6 6 0 000-12z\"></path>';
      icon.setAttribute('fill', 'currentColor');
    } else {
      btn.setAttribute('title', '切换到浅色主题');
      btn.setAttribute('aria-label', '切换到浅色主题');
      // 月亮图标
      icon.innerHTML = '<path d=\"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z\"></path>';
      icon.setAttribute('fill', 'currentColor');
    }
  }
}

function getSavedTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || 'dark';
  } catch (e) {
    return 'dark';
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {
    // ignore
  }
}

// 切换主题：dark <-> light（如果需要 auto，调整此处）
function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  saveTheme(next);
  applyTheme(next);
}

// 初始化：尽早应用（页面加载前尽量减少闪烁）
(function initTheme() {
  const saved = getSavedTheme();
  applyTheme(saved);

  // 在 DOM 准备后绑定事件，移除 preload 类
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const btn = document.getElementById('theme-toggle-btn');
      if (btn) {
        btn.addEventListener('click', toggleTheme);
      }
      // 移除 preload 避免影响动画
      document.body.classList.remove('preload');
    });
  } else {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
    document.body.classList.remove('preload');
  }
})();
