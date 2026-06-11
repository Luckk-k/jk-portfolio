const featuredWork = [
  {
    title: "产品标准化体系建设",
    category: "产品标准化",
    icon: "system",
    line: "面向项目制交付中产品定义不统一、材料补齐慢、经验难复用的问题，梳理需求评审、发布管理、输出物模板和销售 / 服务材料口径。",
    body: "工作覆盖评审流程、发布节点、材料清单、培训资料和跨部门协作节奏，帮助团队把分散经验沉淀为可复用的产品资产。",
    tags: ["评审流程", "工具包", "团队协作"]
  },
  {
    title: "企业云盘产品重构",
    category: "企业级产品",
    icon: "drive",
    line: "围绕企业文件协作、组织权限、安全审计和跨端使用体验，重新梳理云盘产品边界与核心链路。",
    body: "从资源管理、文件传输、分享协作、授权管理、文件索引、后台配置到移动端体验，拆解角色权限、协作入口和审计要求，使产品更贴近企业组织协作与权限治理场景。",
    tags: ["文件协作", "权限体系", "跨端体验"]
  },
  {
    title: "政企项目与 AI 方案支持",
    category: "政企与 AI",
    icon: "ai",
    line: "面向政企项目中的招标条款、客户诉求、产品能力与交付边界，参与方案判断、参数评估、技术响应和售前材料组织。",
    body: "在 AI 相关场景中，重点评估知识来源、访问权限、人工复核、风险约束和业务流程接入方式，避免方案停留在模型能力展示层面。",
    tags: ["招标条款", "售前沟通", "AI 场景"]
  }
];

const projectFilters = [
  { id: "all", label: "全部" },
  { id: "system", label: "产品标准化" },
  { id: "enterprise", label: "企业级产品" },
  { id: "gov-ai", label: "政企与 AI" },
  { id: "im", label: "IM / RTC" },
  { id: "content", label: "内容社区" },
  { id: "early", label: "早期实践" }
];

const projectLibrary = [
  {
    title: "产品标准化体系建设",
    category: "产品标准化",
    topics: ["system", "gov-ai"],
    summary: "建立需求评审、发布管理、材料模板和培训资料的统一口径，减少项目制交付中的重复沟通与材料断点。",
    tags: ["评审", "发布", "材料"]
  },
  {
    title: "企业云盘产品重构",
    category: "企业级产品",
    topics: ["enterprise", "system"],
    summary: "围绕文件协作、授权管理、安全审计、后台管理和跨端体验梳理产品边界。",
    tags: ["云盘", "权限", "协作"]
  },
  {
    title: "政企项目与 AI 方案支持",
    category: "政企与 AI",
    topics: ["gov-ai", "enterprise"],
    summary: "参与招标条款拆解、参数评估和方案材料组织，判断 AI 场景中的知识来源、权限、复核和风险边界。",
    tags: ["招标", "AI", "边界"]
  },
  {
    title: "IM / RTC 开发者产品支持",
    category: "IM / RTC",
    topics: ["im", "enterprise"],
    summary: "处理 REST、SDK、Console、Demo 和开发者文档之间的接入链路，降低开发者理解和联调成本。",
    tags: ["SDK", "Console", "文档"]
  },
  {
    title: "内容社区产品架构设计",
    category: "内容社区",
    topics: ["content"],
    summary: "梳理内容生产、稿件审核、用户体系、积分活动和后台管理链路，建立社区产品的基础运营框架。",
    tags: ["内容", "审核", "后台"]
  },
  {
    title: "产品销售与服务工具",
    category: "产品标准化",
    topics: ["system", "gov-ai"],
    summary: "围绕产品介绍、行业方案、竞品分析、路线图和服务文档，组织售前沟通所需的标准材料。",
    tags: ["工具包", "售前", "文档"]
  },
  {
    title: "产品发布与版本管理",
    category: "产品标准化",
    topics: ["system"],
    summary: "梳理版本发布、销售材料、服务文档、测试用例和验收要求，明确发布前后的输入输出。",
    tags: ["发布", "版本", "验收"]
  },
  {
    title: "资质与伙伴接入管理",
    category: "产品标准化",
    topics: ["system", "enterprise"],
    summary: "维护产品资质、证书预警、伙伴接入材料和内部培训安排，保障合作与售前材料的可用性。",
    tags: ["资质", "伙伴", "培训"]
  },
  {
    title: "企业知识资产与 AI 工作台",
    category: "政企与 AI",
    topics: ["gov-ai", "system"],
    summary: "整理产品资料、方案模板、资质材料和风险问题，探索面向内部查询与方案复用的知识工作台形态。",
    tags: ["知识库", "AI", "权限"]
  },
  {
    title: "语音连麦聊天室方案",
    category: "IM / RTC",
    topics: ["im"],
    summary: "设计房主、主播、观众、控麦、抢麦、自由麦和状态同步规则，梳理实时互动场景的角色与流程。",
    tags: ["连麦", "角色", "状态"]
  },
  {
    title: "游信 x 仙剑七活动系统",
    category: "内容社区",
    topics: ["content"],
    summary: "覆盖活动入口、抽奖流程、邀请助力、奖品管理、数据统计和异常处理，支撑活动上线与运营复盘。",
    tags: ["活动", "抽奖", "异常"]
  },
  {
    title: "亿洽通讯录",
    category: "企业级产品",
    topics: ["enterprise"],
    summary: "以最近联系人、组织架构和团队入口为核心，优化企业通讯录的查找、协作和入口体验。",
    tags: ["通讯录", "组织", "协同"]
  },
  {
    title: "亿洽空间",
    category: "企业级产品",
    topics: ["enterprise"],
    summary: "围绕移动端空间、小组、邀请、星标和设置入口，梳理移动协作对象与信息架构。",
    tags: ["移动端", "空间", "小组"]
  },
  {
    title: "戏多多内容创作社区 MVP",
    category: "内容社区",
    topics: ["content", "early"],
    summary: "验证内容创作工具、语音社区、用户增长和运营活动路径，形成早期产品闭环。",
    tags: ["MVP", "小程序", "增长"]
  },
  {
    title: "来把伞",
    category: "早期实践",
    topics: ["early"],
    summary: "拆解校园借伞、归还、异常处理和用户反馈路径，完成从场景发现到原型验证的早期训练。",
    tags: ["校园", "归还", "反馈"]
  },
  {
    title: "吃啥哟 App",
    category: "早期实践",
    topics: ["early"],
    summary: "围绕日常选择困难场景，完成移动应用概念、信息架构、路径设计和交互原型。",
    tags: ["App", "原型", "交互"]
  }
];

const capabilities = [
  {
    title: "需求拆解",
    text: "从客户场景、使用角色、业务目标和既有流程入手，判断问题属于产品能力、方案表达、流程协同还是交付边界。"
  },
  {
    title: "产品结构",
    text: "梳理组织关系、角色权限、业务流程、数据流转和后台规则，明确产品的核心对象与协作入口。"
  },
  {
    title: "材料标准化",
    text: "将产品介绍、方案材料、版本说明、服务文档和培训资料沉淀为统一口径，提升售前与交付协作效率。"
  },
  {
    title: "交付边界",
    text: "面向政企项目提前确认技术参数、报价依据、交付范围、依赖条件和风险约束，减少后续反复拉扯。"
  },
  {
    title: "AI 场景判断",
    text: "评估 AI 场景中的知识来源、访问权限、人工复核、效果验证和业务流程接入方式，避免只停留在模型展示。"
  },
  {
    title: "跨角色协作",
    text: "在产品、研发、设计、文档、销售、售前和交付之间明确输入、输出、责任人和检查点。"
  }
];

const archiveGroups = [
  {
    title: "方案材料",
    type: "Solution Notes",
    intro: "围绕客户背景、招标条款、产品能力、交付路径和风险边界组织方案内容，支撑售前沟通与内部评估。",
    structures: ["背景", "条款", "方案", "边界", "风险", "下一步"]
  },
  {
    title: "原型与交互",
    type: "Prototype Paths",
    intro: "在原型阶段说明角色、入口、状态、流程、异常和后台规则，减少后续评审中的理解偏差。",
    structures: ["角色", "场景", "状态", "路径", "异常", "规则"]
  },
  {
    title: "流程文档",
    type: "Working Rhythm",
    intro: "记录评审、发布、资质、伙伴接入和培训节点，明确责任人、输入、输出和检查点。",
    structures: ["节点", "责任人", "输入", "输出", "检查点"]
  },
  {
    title: "产品说明",
    type: "Product Language",
    intro: "统一产品定位、核心能力、适用场景、使用方式和常见问题，支撑销售、服务与客户沟通。",
    structures: ["定位", "场景", "功能", "使用方式", "FAQ"]
  },
  {
    title: "调研复盘",
    type: "Review Notes",
    intro: "基于项目材料、客户反馈和竞品信息复盘问题依据、判断结论、风险点和后续建议。",
    structures: ["问题", "依据", "结论", "风险", "建议"]
  }
];

const careerPath = [
  {
    time: "2022.07 — 2026.02",
    organization: "广州品高软件",
    role: "产品标准化与政企方案支持",
    text: "负责产品标准化体系、销售 / 服务工具包、版本发布、资质管理、伙伴接入和政企方案支持，管理 8 人产品标准化团队。重点推动项目制经验向产品化材料沉淀，围绕产品定义、评审流程、发布节奏、售前材料和交付边界建立统一口径，并参与大模型应用、知识图谱、协同平台等政企方案判断。",
    tags: ["标准化体系", "政企方案", "8 人团队"],
    highlight: true
  },
  {
    time: "2022.04 — 2022.06",
    organization: "北京青云科技",
    role: "企业云产品与协同通讯",
    text: "负责企业云产品需求分析与售前材料输出，围绕企业级通讯工具的通讯录、组织架构和团队入口优化协同体验，补充企业云产品中的组织关系与协作场景理解。",
    tags: ["企业云", "通讯录", "协同"]
  },
  {
    time: "2020.06 — 2022.04",
    organization: "多益网络",
    role: "游戏内容社区与多端产品",
    text: "负责游戏内内容社区相关产品规划，覆盖 App、Web、PC 客户端、创作者中心、后台管理和运营活动系统，积累多端产品、内容生产和活动运营链路经验。",
    tags: ["内容社区", "多端", "活动系统"]
  },
  {
    time: "2018.07 — 2020.04",
    organization: "北京环信",
    role: "IM / RTC / PaaS 开发者产品",
    text: "负责 IM、RTC 和 PaaS 开发者产品需求，覆盖 REST 服务端、客户端 SDK、Console、Demo 示例和开发者文档，重点处理开发者接入路径与产品说明一致性。",
    tags: ["IM / RTC", "PaaS", "开发者体验"]
  },
  {
    time: "2017.12 — 2018.06",
    organization: "戏多多",
    role: "内容创作社区 MVP",
    text: "作为创业团队成员负责内容创作工具与语音小程序社区建设，跟进后台、增长活动、需求实现和上线测试，完成早期从概念验证到产品落地的训练。",
    tags: ["小程序", "语音内容", "MVP"]
  },
  {
    time: "2017.06 — 2017.08",
    organization: "奥克斯集团",
    role: "PLM 与企业流程支持",
    text: "参与 PLM 与企业流程项目，理解业务流程、IT 系统和项目交付之间的关系，形成对企业内部系统与流程协同的早期认知。",
    tags: ["PLM", "企业流程", "交付"]
  },
  {
    time: "2014 — 2018",
    organization: "武汉科技大学阶段",
    role: "计算机科学与技术 / 校园产品实践",
    text: "计算机科学与技术本科阶段，持续完成移动应用、微信生态、产品概念和交互原型训练，并参与创业赛事与竞赛项目，建立早期产品意识和工程理解基础。",
    tags: ["计算机", "原型", "竞赛"],
    muted: true
  }
];

const earlyPractice = [
  {
    title: "来把伞",
    text: "围绕校园借伞、归还、异常处理和用户反馈路径，完成场景拆解与流程设计。",
    value: "校园场景"
  },
  {
    title: "吃啥哟 App",
    text: "围绕日常选择困难场景，完成移动应用概念、信息架构、路径设计和交互原型。",
    value: "移动原型"
  },
  {
    title: "创业与竞赛经历",
    text: "负责项目冷启动、现场表达、快速验证和用户反馈整理，对产品落地成本形成早期认知。",
    value: "快速验证"
  }
];

const contactInfo = {
  name: "金康",
  city: "Wuhan",
  phone: "18672226227",
  email: "jkvoid@foxmail.com",
  portrait: "assets/jinkang-portrait.png"
};

const defaultProjectCount = 9;
let activeProjectFilter = "all";
let projectMapExpanded = false;
let motionObserver = null;
let staggerObserver = null;
let motionInitialized = false;
let projectDrawerRoot = null;
let lastProjectTrigger = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTags(tags, className = "tag") {
  return tags.map((tag) => `<span class="${className} card-tag">${escapeHtml(tag)}</span>`).join("");
}

function getCaseIcon(type) {
  const icons = {
    system: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M5 7h6v5H5zM13 5h6v5h-6zM9 16h6v4H9z"></path>
        <path d="M11 9h2M16 10v4h-4"></path>
      </svg>
    `,
    drive: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M5 6h6l2 3h6v10H5z"></path>
        <path d="M8 13h8M8 16h6"></path>
      </svg>
    `,
    ai: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 4l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V7z"></path>
        <path d="M9 12l2 2 4-5"></path>
      </svg>
    `
  };

  return icons[type] || icons.system;
}

function renderFeaturedWork() {
  const container = document.getElementById("featuredWork");
  if (!container) return;

  container.innerHTML = featuredWork.map((item) => `
    <article class="case-card">
      <div class="case-card-head">
        <span class="case-visual case-icon meta-icon">${getCaseIcon(item.icon)}</span>
        <span class="case-category">${escapeHtml(item.category)}</span>
      </div>
      <div class="case-body">
        <h3 class="case-title card-title">${escapeHtml(item.title)}</h3>
        <p class="case-line">${escapeHtml(item.line)}</p>
        <p class="card-body">${escapeHtml(item.body)}</p>
        <div class="tag-row">${renderTags(item.tags)}</div>
      </div>
    </article>
  `).join("");
}

function matchesProjectFilter(item) {
  return activeProjectFilter === "all" || item.topics.includes(activeProjectFilter);
}

function getProjectDrawerSections(item) {
  const tags = item.tags?.length ? item.tags : [];

  return [
    { title: "背景", body: item.summary },
    { title: "负责内容", body: item.category },
    { title: "关键动作", tags },
    { title: "输出材料", body: "当前公开页面暂未展开。" },
    { title: "结果沉淀", body: "当前公开页面暂未展开。" }
  ];
}

function ensureProjectDrawer() {
  if (projectDrawerRoot) return projectDrawerRoot;

  projectDrawerRoot = document.createElement("div");
  projectDrawerRoot.className = "project-drawer-root";
  projectDrawerRoot.innerHTML = `
    <div class="project-drawer-backdrop" data-project-drawer-close></div>
    <aside class="project-drawer" role="dialog" aria-modal="true" aria-labelledby="projectDrawerTitle" tabindex="-1">
      <div class="project-drawer-head">
        <div>
          <span class="project-drawer-kicker"></span>
          <h3 class="project-drawer-title" id="projectDrawerTitle"></h3>
        </div>
        <button class="project-drawer-close" type="button" data-project-drawer-close aria-label="关闭项目详情">&times;</button>
      </div>
      <div class="project-drawer-body"></div>
    </aside>
  `;

  projectDrawerRoot.addEventListener("click", (event) => {
    if (event.target.closest("[data-project-drawer-close]")) {
      closeProjectDrawer();
    }
  });

  document.body.appendChild(projectDrawerRoot);
  return projectDrawerRoot;
}

function openProjectDrawer(item, trigger) {
  const root = ensureProjectDrawer();
  const drawer = root.querySelector(".project-drawer");
  const kicker = root.querySelector(".project-drawer-kicker");
  const title = root.querySelector(".project-drawer-title");
  const body = root.querySelector(".project-drawer-body");

  lastProjectTrigger = trigger || null;
  kicker.textContent = item.category;
  title.textContent = item.title;
  body.innerHTML = getProjectDrawerSections(item).map((section) => `
    <section class="project-drawer-section">
      <h4>${escapeHtml(section.title)}</h4>
      ${section.tags ? `<div class="tag-row">${renderTags(section.tags, "tag tag-small")}</div>` : `<p>${escapeHtml(section.body)}</p>`}
    </section>
  `).join("");

  root.classList.add("is-open");
  document.body.classList.add("drawer-open");
  drawer?.focus({ preventScroll: true });
}

function closeProjectDrawer() {
  if (!projectDrawerRoot) return;

  projectDrawerRoot.classList.remove("is-open");
  document.body.classList.remove("drawer-open");

  if (lastProjectTrigger?.isConnected) {
    lastProjectTrigger.focus({ preventScroll: true });
  }
}

function initProjectDrawer() {
  document.addEventListener("click", (event) => {
    const card = event.target.closest?.("[data-project-index]");
    if (!card) return;

    const item = projectLibrary[Number(card.dataset.projectIndex)];
    if (!item) return;

    openProjectDrawer(item, card);
  });

  document.addEventListener("keydown", (event) => {
    const card = event.target.closest?.("[data-project-index]");
    if (card && (event.key === "Enter" || event.key === " ")) {
      const item = projectLibrary[Number(card.dataset.projectIndex)];
      if (!item) return;

      event.preventDefault();
      openProjectDrawer(item, card);
      return;
    }

    if (event.key === "Escape" && projectDrawerRoot?.classList.contains("is-open")) {
      closeProjectDrawer();
    }
  });
}

function renderProjectFilters() {
  const container = document.getElementById("projectFilters");
  if (!container) return;

  container.innerHTML = projectFilters.map((filter) => `
    <button class="filter-button${filter.id === activeProjectFilter ? " is-active" : ""}" type="button" data-project-filter="${escapeHtml(filter.id)}">
      ${escapeHtml(filter.label)}
    </button>
  `).join("");

  container.querySelectorAll("[data-project-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectFilter = button.dataset.projectFilter;
      projectMapExpanded = false;
      renderProjectFilters();
      renderProjectLibrary();
    });
  });
}

function renderProjectLibrary() {
  const container = document.getElementById("projectLibrary");
  const toggle = document.getElementById("projectToggle");
  if (!container || !toggle) return;

  const filtered = projectLibrary.filter(matchesProjectFilter);
  const visible = projectMapExpanded ? filtered : filtered.slice(0, defaultProjectCount);

  container.innerHTML = visible.map((item) => `
    <button class="project-card" type="button" data-project-index="${projectLibrary.indexOf(item)}" aria-label="查看${escapeHtml(item.title)}详情">
      <span>${escapeHtml(item.category)}</span>
      <h3 class="project-title card-title">${escapeHtml(item.title)}</h3>
      <p class="project-body card-body">${escapeHtml(item.summary)}</p>
      <div class="tag-row">${renderTags(item.tags, "tag tag-small")}</div>
      <span class="project-card-action" aria-hidden="true">View details →</span>
    </button>
  `).join("");

  prepareStaggerGroup(container);
  toggle.hidden = filtered.length <= defaultProjectCount;
  toggle.setAttribute("aria-expanded", String(projectMapExpanded));
  toggle.textContent = projectMapExpanded ? "收起项目" : "展开更多项目";
}

function initProjectToggle() {
  const toggle = document.getElementById("projectToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    projectMapExpanded = !projectMapExpanded;
    renderProjectLibrary();
  });
}

function renderCapabilities() {
  const container = document.getElementById("capabilityMap");
  if (!container) return;

  container.innerHTML = capabilities.map((item, index) => `
    <article class="capability-card">
      <span class="capability-mark">${String(index + 1).padStart(2, "0")}</span>
      <h3 class="card-title">${escapeHtml(item.title)}</h3>
      <p class="card-body">${escapeHtml(item.text)}</p>
    </article>
  `).join("");
}

function renderArchive() {
  const container = document.getElementById("workArchive");
  if (!container) return;

  container.innerHTML = archiveGroups.map((item) => `
    <article class="material-card">
      <div class="material-heading">
        <span>${escapeHtml(item.type)}</span>
        <h3 class="archive-title card-title">${escapeHtml(item.title)}</h3>
      </div>
      <p class="archive-body card-body">${escapeHtml(item.intro)}</p>
      <div class="structure-list">
        ${item.structures.map((structure) => `<span>${escapeHtml(structure)}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderCareer() {
  const container = document.getElementById("careerPath");
  if (!container) return;

  container.innerHTML = careerPath.map((item) => `
    <article class="timeline-item${item.highlight ? " is-highlight" : ""}${item.muted ? " is-muted" : ""}">
      <time>${escapeHtml(item.time)}</time>
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-content">
        <h3 class="career-title card-title">${escapeHtml(item.organization)}</h3>
        <span>${escapeHtml(item.role)}</span>
        <p class="career-body card-body">${escapeHtml(item.text)}</p>
        <div class="tag-row">${renderTags(item.tags, "tag tag-small")}</div>
      </div>
    </article>
  `).join("");
}

function renderEarlyPractice() {
  const container = document.getElementById("earlyPractice");
  if (!container) return;

  container.innerHTML = earlyPractice.map((item, index) => `
    <article class="early-card">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <p class="card-body">${escapeHtml(item.text)}</p>
      </div>
      <em>${escapeHtml(item.value)}</em>
    </article>
  `).join("");
}

function copyTextFallback(text) {
  let copiedByEvent = false;
  const onCopy = (event) => {
    event.clipboardData?.setData("text/plain", text);
    event.preventDefault();
    copiedByEvent = true;
  };

  document.addEventListener("copy", onCopy);
  const commandCopied = document.execCommand("copy");
  document.removeEventListener("copy", onCopy);

  if (copiedByEvent || commandCopied) {
    return true;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.focus();
  input.select();
  const copied = document.execCommand("copy");
  input.remove();
  return copied;
}

function renderContact() {
  const container = document.getElementById("contactBody");
  if (!container) return;

  container.innerHTML = `
    <div class="contact-primary">
      <div class="contact-person">
        <img src="${escapeHtml(contactInfo.portrait)}" alt="个人头像">
        <div class="contact-identity">
          <strong>${escapeHtml(contactInfo.name)} · 企业级产品经理 / AI 应用产品经理</strong>
          <span>Based in ${escapeHtml(contactInfo.city)}</span>
        </div>
      </div>
      <div class="contact-lines">
        <a href="tel:${escapeHtml(contactInfo.phone)}">${escapeHtml(contactInfo.phone)}</a>
        <a href="mailto:${escapeHtml(contactInfo.email)}">${escapeHtml(contactInfo.email)}</a>
        <button class="copy-email" type="button" data-copy-email aria-live="polite">Copy Email</button>
      </div>
    </div>
    <div class="contact-focus" aria-label="关注方向">
      <span class="contact-focus-title">Focus</span>
      <div class="contact-focus-tags">
        <span>Enterprise Products / 企业级产品</span>
        <span>Standardization / 标准化体系</span>
        <span>GovTech Solutions / 政企方案</span>
        <span>AI Judgement / AI 场景判断</span>
      </div>
    </div>
  `;

  const copyButton = container.querySelector("[data-copy-email]");
  copyButton?.addEventListener("click", async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(contactInfo.email);
      } else {
        copyTextFallback(contactInfo.email);
      }
      copyButton.textContent = "Copied";
      copyButton.classList.add("is-copied");
    } catch {
      copyTextFallback(contactInfo.email);
      copyButton.textContent = "Copied";
      copyButton.classList.add("is-copied");
    }

    window.setTimeout(() => {
      copyButton.textContent = "Copy Email";
      copyButton.classList.remove("is-copied");
    }, 1500);
  });
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function observeMotionElement(element, delay = 0) {
  if (!element) return;

  if (!motionInitialized || prefersReducedMotion() || !motionObserver) {
    element.classList.add("is-visible");
    return;
  }

  element.style.transitionDelay = `${Math.min(delay, 420)}ms`;
  motionObserver.observe(element);
}

function prepareStaggerGroup(container) {
  if (!container || !motionInitialized) return;

  Array.from(container.children).forEach((item, index) => {
    item.classList.add("motion-stagger-item");
    item.style.transitionDelay = `${Math.min(index * 60, 420)}ms`;
  });

  if (prefersReducedMotion() || !staggerObserver) {
    Array.from(container.children).forEach((item) => item.classList.add("is-visible"));
    return;
  }

  staggerObserver.observe(container);
}

function initIntroMotion() {
  if (prefersReducedMotion()) return;

  const introItems = [
    document.querySelector(".nav-shell"),
    document.querySelector(".hero-main"),
    document.querySelector(".hero-visual-wrap"),
    ...document.querySelectorAll(".method-strip article")
  ].filter(Boolean);

  introItems.forEach((item, index) => {
    item.classList.add("intro-reveal");
    item.style.setProperty("--intro-delay", `${[0, 60, 120, 180, 230, 280][index] || 280}ms`);
  });
}

function initMotion() {
  if (prefersReducedMotion()) return;

  document.documentElement.classList.add("motion-ready");
  motionInitialized = true;

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".page-section, .section-visual").forEach((element) => {
      element.classList.add("is-visible");
    });
    initIntroMotion();
    return;
  }

  motionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12
  });

  staggerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      Array.from(entry.target.children).forEach((item) => item.classList.add("is-visible"));
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.08
  });

  document.querySelectorAll("main > .page-section:not(.hero)").forEach((section) => {
    section.classList.add("motion-reveal");
    observeMotionElement(section);
  });

  document.querySelectorAll(".section-visual").forEach((visual) => {
    visual.classList.add("motion-image");
    observeMotionElement(visual);
  });

  [
    document.getElementById("featuredWork"),
    document.getElementById("projectLibrary"),
    document.getElementById("capabilityMap"),
    document.getElementById("workArchive"),
    document.getElementById("careerPath"),
    document.getElementById("earlyPractice")
  ].forEach(prepareStaggerGroup);

  initIntroMotion();
}

function scrollToAnchor(hash, updateHistory = false) {
  if (!hash || hash === "#") return false;
  const target = document.querySelector(hash);
  if (!target) return false;

  if (hash === "#top") {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });

    if (updateHistory && window.location.hash !== hash) {
      window.history.pushState(null, "", hash);
    }

    return true;
  }

  const anchor = target.querySelector?.(".section-heading") || target;
  const header = document.querySelector(".site-header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const top = anchor.getBoundingClientRect().top + window.scrollY - headerHeight - 24;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth"
  });

  if (updateHistory && window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

  return true;
}

function initAnchorNavigation() {
  document.addEventListener("pointerdown", (event) => {
    const link = event.target.closest?.(".brand[href='#top'], .nav-links a[href='#top']");
    if (!link) return;

    event.preventDefault();
    scrollToAnchor("#top", true);
  }, true);

  document.addEventListener("click", (event) => {
    const link = event.target.closest?.(".brand[href^='#'], .nav-links a[href^='#']");
    if (!link) return;

    event.preventDefault();
    scrollToAnchor(link.getAttribute("href"), true);
  }, true);

  window.addEventListener("hashchange", () => {
    scrollToAnchor(window.location.hash);
  });

  if (window.location.hash) {
    window.setTimeout(() => scrollToAnchor(window.location.hash), 0);
  }
}

function initNavState() {
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
  const targets = navLinks
    .map((link) => {
      const hash = link.getAttribute("href");
      const target = hash === "#top" ? document.querySelector(".hero") : document.querySelector(hash);
      return target ? { hash, link, target } : null;
    })
    .filter(Boolean);

  if (!targets.length) return;

  const sync = () => {
    const header = document.querySelector(".site-header");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const marker = window.scrollY + headerHeight + 96;
    let activeHash = "#top";

    targets.forEach(({ hash, target }) => {
      if (hash === "#top") return;
      if (marker >= target.offsetTop) {
        activeHash = hash;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === activeHash);
    });
  };

  let ticking = false;
  const requestSync = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      sync();
      ticking = false;
    });
  };

  sync();
  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync);
}

function init() {
  renderFeaturedWork();
  renderProjectFilters();
  renderProjectLibrary();
  initProjectToggle();
  renderCapabilities();
  renderArchive();
  renderCareer();
  renderEarlyPractice();
  renderContact();
  initProjectDrawer();
  initMotion();
  initAnchorNavigation();
  initNavState();
}

document.addEventListener("DOMContentLoaded", init);
