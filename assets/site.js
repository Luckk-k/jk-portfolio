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
    tags: ["评审", "发布", "材料"],
    details: {
      background: "品高阶段长期面对项目制交付带来的产品定义不统一、材料补齐慢、经验难复用等问题，需要把分散在项目里的能力沉淀为标准产品资产。",
      responsibility: "负责产品标准化体系建设，管理 8 人产品标准化团队，统筹产品经理、文档工程师、UI 设计师与销售、售前、交付等角色的协作节奏。",
      actions: "建立需求评审、输出物模板、产品内审、周例会、发布管理和培训机制，将项目需求、产品能力、材料目录和对外口径放到同一套流程中管理。",
      outputs: "沉淀需求文档、市场需求文档、产品介绍、行业方案、竞品分析、产品路线图、功能清单、报价单、培训资料等标准模板。",
      outcomes: "减少材料口径反复确认，让销售、售前、服务和交付团队能更快复用已有成果，也为后续 AI 知识化整理留下更清晰的资料结构。"
    }
  },
  {
    title: "企业云盘产品重构",
    category: "企业级产品",
    topics: ["enterprise", "system"],
    summary: "围绕文件协作、授权管理、安全审计、后台管理和跨端体验梳理产品边界。",
    tags: ["云盘", "权限", "协作"],
    details: {
      background: "旧云盘更偏基础文件存储，难以覆盖企业内部协作、外部共享、权限安全、在线文档和审计留痕等政企客户常见要求。",
      responsibility: "参与企业云盘重新定义与改造，负责行业调研、竞品分析、需求规划、核心模块设计和 PC 端、移动端推进。",
      actions: "按文件生命周期拆解资源管理、文件传输、分享协作、授权管理、文件索引、历史版本、后台配置、安全审计和移动端体验。",
      outputs: "输出新云盘规划说明、版本路线、产品原型、功能矩阵、UAT 测试表和 UI 页面测试表，并沉淀可进入销售材料的能力描述。",
      outcomes: "将云盘从上传下载工具重新整理为企业安全文件协作产品，为内部试用、项目需求复用和后续方案包装打下基础。"
    }
  },
  {
    title: "政企项目与 AI 方案支持",
    category: "政企与 AI",
    topics: ["gov-ai", "enterprise"],
    summary: "参与招标条款拆解、参数评估和方案材料组织，判断 AI 场景中的知识来源、权限、复核和风险边界。",
    tags: ["招标", "AI", "边界"],
    details: {
      background: "政企项目通常同时涉及客户诉求、招标条款、技术参数、报价依据、演示原型和交付边界，AI 相关项目还需要额外确认知识来源和输出可信度。",
      responsibility: "参与医疗、教育、军工科研院所、央国企、政务、信创等项目支持，围绕 IAM、协同平台、云盘、低代码、大模型应用等方向做方案判断。",
      actions: "拆解招标文件和客户需求，协调产品、研发、交付确认能力边界；在 AI 场景中重点评估知识入库、权限控制、人工复核、效果验证和风险约束。",
      outputs: "输出技术响应、方案骨架、参数对照、报价依据、客户沟通问题清单、风险提示和原型演示支持材料。",
      outcomes: "沉淀出可复用的行业方案和 AI 场景判断方法，让方案不只停留在功能罗列，而能回到客户流程、交付条件和可承诺边界。"
    }
  },
  {
    title: "IM / RTC 开发者产品支持",
    category: "IM / RTC",
    topics: ["im", "enterprise"],
    summary: "处理 REST、SDK、Console、Demo 和开发者文档之间的接入链路，降低开发者理解和联调成本。",
    tags: ["SDK", "Console", "文档"],
    details: {
      background: "IM / RTC PaaS 面向开发者和企业客户，产品体验不只在控制台页面，也体现在 SDK 接口、Demo 示例、文档结构和联调路径里。",
      responsibility: "负责 IM 即时通讯云及音视频云相关产品需求，覆盖 REST 服务端、客户端 SDK、Console 控制台、Demo 示例和开发者文档。",
      actions: "梳理接口能力、接入步骤、Console 配置、Demo 场景和常见问题，把技术边界转译成开发者能理解的产品说明。",
      outputs: "输出需求说明、Demo 场景、接口说明、开发文档架构和控制台优化方案，补齐从能力说明到集成验证的链路。",
      outcomes: "降低开发者理解与联调成本，训练出对技术产品边界、示例体验和文档一致性的敏感度。"
    }
  },
  {
    title: "内容社区产品架构设计",
    category: "内容社区",
    topics: ["content"],
    summary: "梳理内容生产、稿件审核、用户体系、积分活动和后台管理链路，建立社区产品的基础运营框架。",
    tags: ["内容", "审核", "后台"],
    details: {
      background: "多益阶段从 0 到 1 搭建游戏推荐社区，需要同时处理内容供给、创作者工具、审核分发、用户激励和多端入口。",
      responsibility: "负责游信 App、Web 官网、PC 客户端、创作者中心和后台管理系统的产品规划、原型设计、PRD、测试验收与上线跟进。",
      actions: "梳理内容生产、稿件审核、用户体系、积分、评价、分享、需求发布和客户端测试流程，将前台体验与后台运营能力连成一套结构。",
      outputs: "输出游信产品架构、版本迭代原型、内容生产流程、审核流程、用户体系、创作者中心和后台管理模块。",
      outcomes: "支撑平台形成内容社区基础框架，历史素材中记录平台入库 654 款游戏、2335 篇文章和 4315 个视频。"
    }
  },
  {
    title: "产品销售与服务工具",
    category: "产品标准化",
    topics: ["system", "gov-ai"],
    summary: "围绕产品介绍、行业方案、竞品分析、路线图和服务文档，组织售前沟通所需的标准材料。",
    tags: ["工具包", "售前", "文档"],
    details: {
      background: "品高产品线覆盖协同、数据湖、IAM、云平台等方向，销售、售前、服务和交付团队需要一套稳定的产品表达和材料复用体系。",
      responsibility: "负责组织产品销售、市场与服务工具包建设，覆盖 BingoLink、BingoInsight、BingoIAM、BingoCloudStack、BingoCMP 等产品线。",
      actions: "按销售理解、售前响应、服务交付和产品管理四类场景组织材料，建立评审、发布、培训和知识库沉淀机制。",
      outputs: "输出产品介绍、整体概述、一页纸、行业方案、竞品分析、SWOT、控标参数、报价单、产品目录、路线图、客户案例、用户手册和验收材料。",
      outcomes: "提升对外表达一致性和售前响应效率，并通过多轮培训帮助销售、服务、交付团队更快理解产品能力与适用场景。"
    }
  },
  {
    title: "产品发布与版本管理",
    category: "产品标准化",
    topics: ["system"],
    summary: "梳理版本发布、销售材料、服务文档、测试用例和验收要求，明确发布前后的输入输出。",
    tags: ["发布", "版本", "验收"],
    details: {
      background: "产品版本发布牵涉产研、测试、销售、售前、服务和交付，过去容易出现材料缺失、验收口径不一致和发布后补材料的情况。",
      responsibility: "建立并优化产品发布流程和配套材料标准，明确主版本、子版本发布前后的责任人、输入、输出和审批节点。",
      actions: "把技术材料、销售材料、市场材料、服务文档、POC 测试用例、版本说明书和交付验收问题处理流程纳入统一发布节奏。",
      outputs: "沉淀产品发布流程 V1.0/V1.3、发布检查清单、材料目录和多产品版本发布记录。",
      outcomes: "推动 BingoCloudStack V10.0、BingoCloudOS V9.14、BingoCMP V5.0/V5.1、BingoIAM V5.0、BingoKube V1.5.1 等 6 个版本规范发布。"
    }
  },
  {
    title: "资质与伙伴接入管理",
    category: "产品标准化",
    topics: ["system", "enterprise"],
    summary: "维护产品资质、证书预警、伙伴接入材料和内部培训安排，保障合作与售前材料的可用性。",
    tags: ["资质", "伙伴", "培训"],
    details: {
      background: "招投标和合作伙伴销售过程中，经常需要及时提供产品资质、证书材料和第三方产品信息，材料散落会影响响应速度。",
      responsibility: "负责产品资质管理流程、资质库和合作伙伴产品接入流程建设，统筹材料收集、到期预警、目录入库和内部宣贯。",
      actions: "梳理资质规划、申请、获取、记录、监控、更新流程；对伙伴产品建立评估、接入材料、销售培训和采购协同机制。",
      outputs: "形成产品资质管理流程、资质台账、证书到期预警、合作伙伴接入流程和伙伴产品培训材料。",
      outcomes: "保障投标和合作场景中的材料可用性，推动云信达、Databend 等伙伴接入及内部销售赋能。"
    }
  },
  {
    title: "企业知识资产与 AI 工作台",
    category: "政企与 AI",
    topics: ["gov-ai", "system"],
    summary: "整理产品资料、方案模板、资质材料和风险问题，探索面向内部查询与方案复用的知识工作台形态。",
    tags: ["知识库", "AI", "权限"],
    details: {
      background: "产品介绍、方案模板、资质材料、项目复盘和风险问题分散在不同材料中，直接让 AI 生成内容容易混淆版本、来源、权限和承诺边界。",
      responsibility: "基于产品标准化和 AI 方案支持经验，整理企业知识资产的工作台形态，重点表达资料如何进入知识结构、任务输出和人工复核链路。",
      actions: "按来源、版本、产品线、行业、可引用范围和权限等级标注资料，将能力、证据、边界和风险拆开，再映射到问答、标书检查和方案生成任务。",
      outputs: "形成 AI 工作台场景化复盘，包括资料入库、知识标签、任务输出、权限控制、风险提示和人工审核节点。",
      outcomes: "这个项目不包装成完整上线结果，而是展示企业 AI 产品判断：越是企业级场景，越要先治理知识、权限和复核机制。"
    }
  },
  {
    title: "语音连麦聊天室方案",
    category: "IM / RTC",
    topics: ["im"],
    summary: "设计房主、主播、观众、控麦、抢麦、自由麦和状态同步规则，梳理实时互动场景的角色与流程。",
    tags: ["连麦", "角色", "状态"],
    details: {
      background: "IM + RTC 场景中的语音聊天室需要同时处理房间角色、麦位权限、连麦状态、主持人控制和 SDK 集成说明，复杂度不只在单个页面。",
      responsibility: "参与语音连麦聊天室场景方案设计，将 IM、音视频云和 Demo 集成能力转译为客户与开发者能理解的产品方案。",
      actions: "梳理房主、主播、观众权限，设计主持人控麦、抢麦、自由发言、非对称连麦、视频连麦直播等模式，并补充状态同步和流控制逻辑。",
      outputs: "输出场景方案、角色权限说明、交互流程、Demo 集成路径和对外介绍材料。",
      outcomes: "强化了对实时互动产品中角色、状态、异常和开发者接入成本的理解，也能作为 IM / RTC 产品能力的可展示案例。"
    }
  },
  {
    title: "游信 x 仙剑七活动系统",
    category: "内容社区",
    topics: ["content"],
    summary: "覆盖活动入口、抽奖流程、邀请助力、奖品管理、数据统计和异常处理，支撑活动上线与运营复盘。",
    tags: ["活动", "抽奖", "异常"],
    details: {
      background: "联动活动需要把运营玩法落到 App、Web 和后台三端，既要保证用户路径顺畅，也要处理奖品、助力、异常和数据复盘。",
      responsibility: "负责游信 x 仙剑七活动原型与后台链路设计，将抽奖、邀请助力、奖品管理和数据统计拆成可落地模块。",
      actions: "设计活动配置、App 展示、Web 全流程、抽奖、我的奖品、邀请助力、奖品管理、获奖管理、数据统计、异常监控和保底机制。",
      outputs: "输出活动原型、后台模块、状态规则、异常处理说明和数据统计口径。",
      outcomes: "支撑运营活动从玩法概念进入系统实现，并沉淀出多端活动系统、后台配置和风险控制的设计经验。"
    }
  },
  {
    title: "亿洽通讯录",
    category: "企业级产品",
    topics: ["enterprise"],
    summary: "以最近联系人、组织架构和团队入口为核心，优化企业通讯录的查找、协作和入口体验。",
    tags: ["通讯录", "组织", "协同"],
    details: {
      background: "企业协同产品里的通讯录不是简单联系人列表，而是组织关系、部门层级、团队协作和权限理解的入口。",
      responsibility: "参与亿洽 Web 通讯录相关设计，围绕最近联系、我的联系人、组织架构和团队模块优化信息架构与交互。",
      actions: "梳理组织树、部门层级、成员列表、联系人检索、团队入口和最近联系场景，让用户能在组织关系中更快找到人和协作对象。",
      outputs: "输出亿洽 Web 2.6 通讯录原型、模块说明、版本记录和关键交互流程。",
      outcomes: "补充了企业云产品中组织架构、联系人入口和协作关系的设计经验，也为后续处理 IAM、协同和云盘权限问题提供了基础视角。"
    }
  },
  {
    title: "亿洽空间",
    category: "企业级产品",
    topics: ["enterprise"],
    summary: "围绕移动端空间、小组、邀请、星标和设置入口，梳理移动协作对象与信息架构。",
    tags: ["移动端", "空间", "小组"],
    details: {
      background: "移动端协同空间需要在有限界面里处理空间、小组、成员、邀请、管理员和退出等对象关系，重点是让协作边界清楚。",
      responsibility: "参与亿洽 iOS 3.0 空间模块设计，梳理移动端空间创建、小组组织和成员邀请流程。",
      actions: "设计创建空间、添加已有小组、创建小组、邀请成员、探索小组、星标、查看成员、空间设置和离开空间等路径。",
      outputs: "输出空间模块原型、对象关系说明、状态流转和关键入口设计。",
      outcomes: "沉淀出移动端企业协同的信息架构经验，对多对象、多角色、多状态产品的拆解更加敏感。"
    }
  },
  {
    title: "戏多多内容创作社区 MVP",
    category: "内容社区",
    topics: ["content", "early"],
    summary: "验证内容创作工具、语音社区、用户增长和运营活动路径，形成早期产品闭环。",
    tags: ["MVP", "小程序", "增长"],
    details: {
      background: "戏多多是早期创业阶段的内容创作工具与语音小程序社区，目标是在有限资源下验证内容生产、社区互动和用户增长路径。",
      responsibility: "作为创业团队成员参与从 0 到 1 建设，负责产品后台设计、增长活动、需求跟进、上线测试和用户反馈整理。",
      actions: "梳理内容创作、语音社区互动、后台运营、活动触达和反馈闭环，将运营想法快速转成可验证的产品需求。",
      outputs: "输出 MVP 原型、后台需求、活动规则、测试清单和迭代记录。",
      outcomes: "素材中记录 MVP 冷启动一个月自然增长 4000 用户，2018 年 6 月总用户数约 6 万，形成早期从概念验证到落地迭代的训练。"
    }
  },
  {
    title: "来把伞",
    category: "早期实践",
    topics: ["early"],
    summary: "拆解校园借伞、归还、异常处理和用户反馈路径，完成从场景发现到原型验证的早期训练。",
    tags: ["校园", "归还", "反馈"],
    details: {
      background: "项目来自校园生活中的短时借伞场景，核心问题不是做一个页面，而是把借、还、异常、提醒和反馈串成可执行流程。",
      responsibility: "负责场景观察、用户路径拆解、流程设计、原型表达和反馈整理，用早期项目训练产品从问题到方案的完整表达。",
      actions: "拆解借伞入口、归还节点、站点库存、异常申诉、超时提醒和用户反馈，让线下服务流程能被清楚地映射到线上规则。",
      outputs: "输出用户旅程、流程图、低保真原型、异常路径和反馈记录。",
      outcomes: "建立对线下服务数字化成本的早期认知，理解产品设计不只是入口设计，还要考虑运营、履约和异常处理。"
    }
  },
  {
    title: "吃啥哟 App",
    category: "早期实践",
    topics: ["early"],
    summary: "围绕日常选择困难场景，完成移动应用概念、信息架构、路径设计和交互原型。",
    tags: ["App", "原型", "交互"],
    details: {
      background: "项目切入日常吃什么的选择困难场景，用轻量移动应用验证推荐、筛选、随机决策和结果反馈的交互方式。",
      responsibility: "负责从 0 到 1 的产品概念、信息架构、路径设计、移动端原型和参赛材料整理。",
      actions: "设计偏好选择、条件筛选、随机推荐、结果页和反馈入口，用简单规则降低用户做选择的成本。",
      outputs: "输出 App 信息架构、交互原型、页面流程和新媒体原创作品大赛相关材料。",
      outcomes: "项目参加新媒体原创作品大赛并获奖，帮助建立早期移动产品表达、交互细节和完整提案能力。"
    }
  }
];

const capabilities = [
  {
    title: "Product Structure",
    titleCn: "产品结构",
    text: "把角色权限、对象关系、流程入口和后台规则拆成可协作的产品结构。",
    evidence: "企业云盘产品重构",
    map: "对应文件生命周期、授权管理、安全审计和跨端路径的重构判断。",
    diagram: "structure"
  },
  {
    title: "Material System",
    titleCn: "材料体系",
    text: "把方案、说明、路线图、功能清单和培训资料沉淀为统一口径。",
    evidence: "产品标准化体系建设",
    map: "对应产品介绍、行业方案、报价依据和培训资料的复用沉淀。",
    diagram: "material"
  },
  {
    title: "Scenario Judgement",
    titleCn: "场景判断",
    text: "先判断客户场景、流程约束和可承诺边界，再组织方案表达。",
    evidence: "政企项目与 AI 方案支持",
    map: "对应招标条款、技术参数、交付范围和风险边界的判断。",
    diagram: "scenario"
  },
  {
    title: "Cross-team Collaboration",
    titleCn: "跨团队协作",
    text: "在产品、研发、设计、文档、销售、售前、交付之间定义输入输出。",
    evidence: "产品标准化体系建设",
    map: "对应评审、内审、周例会和发布管理中的跨角色协作节奏。",
    diagram: "collaboration"
  },
  {
    title: "Product Standardization",
    titleCn: "产品标准化",
    text: "把评审、发布、模板和培训机制放进同一套可复用节奏。",
    evidence: "产品标准化体系建设",
    map: "对应需求评审、输出物模板、产品内审和培训机制建设。",
    diagram: "standardization"
  },
  {
    title: "AI Application Thinking",
    titleCn: "AI 应用判断",
    text: "关注知识来源、访问权限、人工复核、效果验证和流程接入。",
    evidence: "政企项目与 AI 方案支持",
    map: "对应 AI 场景中的知识入库、权限控制、人工复核和风险约束。",
    diagram: "ai"
  }
];

const archiveGroups = [
  {
    title: "PRD / 功能说明",
    type: "Product Docs",
    intro: "围绕角色、场景、功能边界、后台规则和验收口径组织产品说明，便于评审和后续协作。",
    structures: ["角色", "场景", "规则", "验收"],
    status: "脱敏材料整理中"
  },
  {
    title: "流程规范",
    type: "Process Rules",
    intro: "记录评审、发布、资质、伙伴接入和培训节点，明确责任人、输入、输出和检查点。",
    structures: ["节点", "责任人", "输入", "输出"],
    status: "脱敏材料整理中"
  },
  {
    title: "发布材料",
    type: "Release Notes",
    intro: "梳理版本范围、能力变化、使用说明和对外口径，让销售、服务和交付能同步理解产品变化。",
    structures: ["版本", "范围", "变化", "口径"],
    status: "脱敏材料整理中"
  },
  {
    title: "售前方案",
    type: "Solution Notes",
    intro: "围绕客户背景、招标条款、产品能力、交付路径和风险边界组织方案内容，支撑售前沟通与内部评估。",
    structures: ["背景", "条款", "方案", "边界"],
    status: "脱敏材料整理中"
  },
  {
    title: "原型与交互",
    type: "Prototype Paths",
    intro: "在原型阶段说明入口、状态、流程、异常和后台规则，减少评审中的理解偏差。",
    structures: ["入口", "状态", "路径", "异常"],
    status: "脱敏材料整理中"
  },
  {
    title: "调研复盘",
    type: "Review Notes",
    intro: "基于项目材料、客户反馈和竞品信息复盘问题依据、判断结论、风险点和后续建议。",
    structures: ["问题", "依据", "结论", "风险"],
    status: "脱敏材料整理中"
  }
];

const careerPath = [
  {
    time: "2022.07 — 2026.02",
    organization: "广州品高软件",
    role: "产品标准化与政企方案支持",
    theme: "Product Systems / 标准化体系与 AI 应用",
    stage: "Standardization → AI",
    text: "负责产品标准化体系、销售 / 服务工具包、版本发布、资质管理、伙伴接入和政企方案支持，管理 8 人产品标准化团队。重点推动项目制经验向产品化材料沉淀，围绕产品定义、评审流程、发布节奏、售前材料和交付边界建立统一口径，并参与大模型应用、知识图谱、协同平台等政企方案判断。",
    tags: ["标准化体系", "政企方案", "8 人团队"],
    highlight: true
  },
  {
    time: "2022.04 — 2022.06",
    organization: "北京青云科技",
    role: "企业云产品与协同通讯",
    theme: "Enterprise Product / 企业云协同",
    stage: "Enterprise Product",
    text: "负责企业云产品需求分析与售前材料输出，围绕企业级通讯工具的通讯录、组织架构和团队入口优化协同体验，补充企业云产品中的组织关系与协作场景理解。",
    tags: ["企业云", "通讯录", "协同"]
  },
  {
    time: "2020.06 — 2022.04",
    organization: "多益网络",
    role: "游戏内容社区与多端产品",
    theme: "Content Community / 内容社区系统",
    stage: "Content Systems",
    text: "负责游戏内内容社区相关产品规划，覆盖 App、Web、PC 客户端、创作者中心、后台管理和运营活动系统，积累多端产品、内容生产和活动运营链路经验。",
    tags: ["内容社区", "多端", "活动系统"]
  },
  {
    time: "2018.07 — 2020.04",
    organization: "北京环信",
    role: "IM / RTC / PaaS 开发者产品",
    theme: "IM / RTC Platform / 开发者产品",
    stage: "IM / RTC",
    text: "负责 IM、RTC 和 PaaS 开发者产品需求，覆盖 REST 服务端、客户端 SDK、Console、Demo 示例和开发者文档，重点处理开发者接入路径与产品说明一致性。",
    tags: ["IM / RTC", "PaaS", "开发者体验"]
  },
  {
    time: "2017.12 — 2018.06",
    organization: "戏多多",
    role: "内容创作社区 MVP",
    theme: "Creator Community / 内容社区起点",
    stage: "Content Community",
    text: "作为创业团队成员负责内容创作工具与语音小程序社区建设，跟进后台、增长活动、需求实现和上线测试，完成早期从概念验证到产品落地的训练。",
    tags: ["小程序", "语音内容", "MVP"]
  },
  {
    time: "2017.06 — 2017.08",
    organization: "奥克斯集团",
    role: "PLM 与企业流程支持",
    theme: "Enterprise Process / 企业流程认知",
    stage: "Process Foundation",
    text: "参与 PLM 与企业流程项目，理解业务流程、IT 系统和项目交付之间的关系，形成对企业内部系统与流程协同的早期认知。",
    tags: ["PLM", "企业流程", "交付"]
  },
  {
    time: "2014 — 2018",
    organization: "武汉科技大学阶段",
    role: "计算机科学与技术 / 校园产品实践",
    theme: "Product Foundation / 产品基础训练",
    stage: "Foundation",
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

  container.innerHTML = featuredWork.map((item, index) => {
    const project = projectLibrary.find((projectItem) => projectItem.title === item.title);
    const details = project?.details || {};
    const projectIndex = project ? projectLibrary.indexOf(project) : -1;
    const caseClass = index === 0 ? "case-card case-card--primary" : "case-card case-card--secondary";

    return `
    <article class="${caseClass}">
      <div class="case-card-surface" aria-hidden="true"></div>
      <div class="case-card-head">
        <span class="case-visual case-icon meta-icon">${getCaseIcon(item.icon)}</span>
        <span class="case-category">${escapeHtml(item.category)}</span>
        <span class="case-card-index">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="case-body">
        <h3 class="case-title card-title">${escapeHtml(item.title)}</h3>
        <p class="case-line">${escapeHtml(item.line)}</p>
        <div class="tag-row">${renderTags(item.tags)}</div>
        <div class="case-proof-list">
          <div class="case-proof">
            <span>背景问题</span>
            <p>${escapeHtml(details.background || item.line)}</p>
          </div>
          <div class="case-proof">
            <span>我的角色 / 工作方式</span>
            <p>${escapeHtml(details.responsibility || item.body)}</p>
          </div>
          <div class="case-proof">
            <span>关键产出</span>
            <p>${escapeHtml(details.outputs || item.body)}</p>
          </div>
        </div>
        ${projectIndex >= 0 ? `
          <button class="case-card-action" type="button" data-featured-project-index="${projectIndex}">
            查看项目
            <span aria-hidden="true">→</span>
          </button>
        ` : ""}
      </div>
    </article>
    `;
  }).join("");
}

function initFeaturedCaseActions() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest?.("[data-featured-project-index]");
    if (!trigger) return;

    const item = projectLibrary[Number(trigger.dataset.featuredProjectIndex)];
    if (!item) return;

    openProjectDrawer(item, trigger);
  });
}

function matchesProjectFilter(item) {
  return activeProjectFilter === "all" || item.topics.includes(activeProjectFilter);
}

function getProjectDrawerSections(item) {
  const details = item.details || {};
  const tags = item.tags?.length ? item.tags.join(" / ") : item.category;

  return [
    { title: "背景", body: details.background || item.summary },
    { title: "负责内容", body: details.responsibility || item.category },
    { title: "关键动作", body: details.actions || tags },
    { title: "输出材料", body: details.outputs || item.summary },
    { title: "结果沉淀", body: details.outcomes || item.summary }
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

function revealNewProjectCards(container, startIndex) {
  if (!container || prefersReducedMotion()) return;

  Array.from(container.children).slice(startIndex).forEach((item, index) => {
    item.classList.add("project-card-enter");
    item.style.animationDelay = `${index * 40}ms`;
    item.addEventListener("animationend", () => {
      item.classList.remove("project-card-enter");
      item.style.animationDelay = "";
    }, { once: true });
  });
}

function scrollToProjectMapAnchor() {
  const anchor = document.getElementById("projectFilters") || document.getElementById("projectLibrary");
  if (!anchor) return;

  const header = document.querySelector(".site-header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const top = anchor.getBoundingClientRect().top + window.scrollY - headerHeight - 56;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth"
  });
}

function restoreScrollPosition(scrollY) {
  const restore = () => window.scrollTo({ top: scrollY, behavior: "auto" });

  window.requestAnimationFrame(() => {
    restore();
    window.requestAnimationFrame(() => {
      restore();
      window.setTimeout(restore, 80);
    });
  });
}

function renderProjectLibrary(options = {}) {
  const container = document.getElementById("projectLibrary");
  const toggle = document.getElementById("projectToggle");
  if (!container || !toggle) return;

  const { animateFromIndex = null, skipStagger = false } = options;
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

  if (animateFromIndex !== null || skipStagger) {
    Array.from(container.children).forEach((item) => {
      item.classList.add("is-visible");
      item.style.transitionDelay = "";
    });
  } else {
    prepareStaggerGroup(container);
  }

  if (animateFromIndex !== null) {
    revealNewProjectCards(container, animateFromIndex);
  }

  toggle.hidden = filtered.length <= defaultProjectCount;
  toggle.setAttribute("aria-expanded", String(projectMapExpanded));
  toggle.textContent = projectMapExpanded ? "Show fewer projects" : "Show more projects";
}

function initProjectToggle() {
  const toggle = document.getElementById("projectToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const shouldExpand = !projectMapExpanded;

    if (shouldExpand) {
      const scrollY = window.scrollY;
      const visibleCount = document.querySelectorAll("#projectLibrary > .project-card").length;

      projectMapExpanded = true;
      renderProjectLibrary({ animateFromIndex: visibleCount, skipStagger: true });
      restoreScrollPosition(scrollY);
      return;
    }

    projectMapExpanded = false;
    renderProjectLibrary({ skipStagger: true });
    window.requestAnimationFrame(scrollToProjectMapAnchor);
  });
}

function renderCapabilities() {
  const container = document.getElementById("capabilityMap");
  if (!container) return;

  container.innerHTML = capabilities.map((item, index) => `
    <article class="capability-card capability-card--${escapeHtml(item.diagram)}">
      <div class="capability-card-top">
        <span class="capability-mark">${String(index + 1).padStart(2, "0")}</span>
        <span class="capability-diagram capability-diagram--${escapeHtml(item.diagram)}" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
      <div class="capability-content">
        <span class="capability-title-cn">${escapeHtml(item.titleCn)}</span>
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <p class="card-body">${escapeHtml(item.text)}</p>
      </div>
      <div class="capability-evidence">
        <span>Evidence</span>
        <strong>${escapeHtml(item.evidence)}</strong>
      </div>
      <p class="capability-hover-note">${escapeHtml(item.map)}</p>
    </article>
  `).join("");
}

function renderArchive() {
  const container = document.getElementById("workArchive");
  if (!container) return;

  container.innerHTML = archiveGroups.map((item, index) => `
    <article class="material-card">
      <div class="material-file-tab" aria-hidden="true">${String(index + 1).padStart(2, "0")}</div>
      <div class="material-heading">
        <span>${escapeHtml(item.type)}</span>
        <h3 class="archive-title card-title">${escapeHtml(item.title)}</h3>
      </div>
      <p class="archive-body card-body">${escapeHtml(item.intro)}</p>
      <div class="structure-list">
        ${item.structures.map((structure) => `<span>${escapeHtml(structure)}</span>`).join("")}
      </div>
      <span class="material-status">${escapeHtml(item.status)}</span>
    </article>
  `).join("");
}

function renderCareer() {
  const container = document.getElementById("careerPath");
  if (!container) return;

  container.innerHTML = careerPath.slice().reverse().map((item, index) => `
    <article class="timeline-item${item.highlight ? " is-highlight" : ""}${item.muted ? " is-muted" : ""}">
      <div class="timeline-step">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <time>${escapeHtml(item.time)}</time>
      </div>
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-content">
        <span class="career-stage">${escapeHtml(item.stage)}</span>
        <h3 class="career-title card-title">${escapeHtml(item.theme)}</h3>
        <div class="career-meta">
          <strong>${escapeHtml(item.organization)}</strong>
          <span>${escapeHtml(item.role)}</span>
        </div>
        <p class="career-body card-body">${escapeHtml(item.text)}</p>
        <div class="career-keywords">
          <span>Keywords</span>
          <div class="tag-row">${renderTags(item.tags, "tag tag-small")}</div>
        </div>
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
    <div class="contact-glow" aria-hidden="true"></div>
    <div class="contact-primary">
      <div class="contact-person">
        <img src="${escapeHtml(contactInfo.portrait)}" alt="个人头像">
        <div class="contact-identity">
          <strong>${escapeHtml(contactInfo.name)} · 企业级产品经理 / AI 应用产品经理</strong>
          <span>Based in ${escapeHtml(contactInfo.city)}</span>
        </div>
      </div>
      <p class="contact-lead">如果你正在处理企业级产品、产品标准化、政企方案或 AI 应用落地问题，可以直接联系我。</p>
      <div class="contact-lines">
        <a class="contact-button contact-button--primary" href="mailto:${escapeHtml(contactInfo.email)}">发送邮件</a>
        <button class="contact-button copy-email" type="button" data-copy-email aria-live="polite">Copy Email</button>
      </div>
    </div>
    <div class="contact-side">
      <div class="contact-channel">
        <span>Phone</span>
        <a href="tel:${escapeHtml(contactInfo.phone)}">${escapeHtml(contactInfo.phone)}</a>
      </div>
      <div class="contact-channel">
        <span>Email</span>
        <a href="mailto:${escapeHtml(contactInfo.email)}">${escapeHtml(contactInfo.email)}</a>
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
    document.querySelector(".hero-kicker"),
    document.querySelector(".hero-name"),
    document.querySelector(".hero-role"),
    ...document.querySelectorAll(".hero-copy"),
    document.querySelector(".hero-tags"),
    document.querySelector(".hero-actions"),
    document.querySelector(".hero-stage"),
    ...document.querySelectorAll(".method-strip article")
  ].filter(Boolean);

  introItems.forEach((item, index) => {
    item.classList.add("intro-reveal");
    item.style.setProperty("--intro-delay", `${Math.min(index * 70, 560)}ms`);
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
  const anchorOffset = headerHeight + 56;
  const top = anchor.getBoundingClientRect().top + window.scrollY - anchorOffset;

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
    const link = event.target.closest?.(".brand[href^='#'], .nav-links a[href^='#'], .hero-actions a[href^='#']");
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

function initScrollState() {
  const header = document.querySelector(".site-header");

  const sync = () => {
    const isScrolled = window.scrollY > 12;
    document.body.classList.toggle("is-scrolled", isScrolled);
    header?.classList.toggle("is-scrolled", isScrolled);
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

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      activeHash = targets[targets.length - 1]?.hash || activeHash;
    }

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
  initFeaturedCaseActions();
  initMotion();
  initAnchorNavigation();
  initScrollState();
  initNavState();
}

document.addEventListener("DOMContentLoaded", init);
