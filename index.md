---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "安隅 (Anyu)"
  text: "记录心情，给内心一份安宁"
  tagline: 专属于你的情绪避风港与愈疗空间
  image:
    src: /logo.png
    alt: Anyu Logo
  actions:
    - theme: brand
      text: 开启探索
      link: /#features
    - theme: alt
      text: 隐私政策
      link: /legal/privacy

features:
  - title: 情绪日记
    details: 精美的莫兰迪色系界面，通过多维度的强度统计，帮你洞察情绪变化趋势。
    icon: 📔
  - title: 呼吸放松
    details: 内置多种专业模式。伴随视觉引导，在深呼吸间排解焦虑，专注当下。
    icon: 🫁
  - title: 沉浸白噪音
    details: 精选高品质自然声源。支持定时关闭，为你营造专注工作或入眠的听觉空间。
    icon: 🌙
  - title: 回声树洞
    details: 在这里倾诉不可言说的心事，得到温柔的回应，感受到真实被理解。
    icon: 🐚
  - title: 隐私至上
    details: 采用本地存储架构，不上传任何个人数据，确保您的内心空间绝对私密。
    icon: 🛡️
  - title: 极简美学
    details: 去除繁杂社交干扰，只通过光影与色彩的曼妙组合带来的宁静视觉引导。
    icon: ✨

---

<div class="showcase-section" id="features">
<h2>深度产品体验</h2>
<p class="subtitle">每一处细节，都为您的内心宁静而生</p>

<div class="showcase-grid">
<div class="showcase-item">
<div class="text">
<h3>多感官愈疗</h3>
<p>结合色彩心理学与自然音效，从视听多维度缓解心理压力。呼吸圆环的起伏，让您在忙碌中快速进入冥想状态。</p>
</div>
<div class="placeholder-img">📱 UI Showcase: 呼吸模式</div>
</div>

<div class="showcase-item reverse">
<div class="text">
<h3>情绪数据洞察</h3>
<p>不仅仅是记录，更是理解。直观的情绪统计报表，助你回溯心情轨迹，发现生活中的规律与平衡。</p>
</div>
<div class="placeholder-img">📊 UI Showcase: 情绪统计</div>
</div>
</div>
</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #5CB370 30%, #7A96BE);
}

/* 强制副标题不换行 */
.VPHero .text {
  white-space: nowrap;
}

@media (max-width: 768px) {
  .VPHero .text {
    white-space: normal;
    font-size: 28px !important;
  }
}

.showcase-section {
  padding: 80px 24px;
  text-align: center;
  max-width: 1152px;
  margin: 0 auto;
}

.showcase-section h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.showcase-section .subtitle {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin-bottom: 48px;
}

.showcase-grid {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.showcase-item {
  display: flex;
  align-items: center;
  gap: 40px;
  text-align: left;
}

.showcase-item.reverse {
  flex-direction: row-reverse;
}

.showcase-item .text {
  flex: 1;
}

.showcase-item h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--vp-c-brand);
}

.showcase-item p {
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.placeholder-img {
  flex: 1;
  height: 300px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-3);
  border: 1px dashed var(--vp-c-divider);
  font-family: monospace;
}

@media (max-width: 768px) {
  .showcase-item {
    flex-direction: column !important;
  }
}
</style>
