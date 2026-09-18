import { Product, RoadmapItem, FaqItem } from '../types';

export const PRODUCTS: Product[] = [
  // E-BOOKS / PDF
  {
    id: 'pack-1000-videos',
    title: 'PACK +1000 VÍDEOS',
    titleEn: 'PACK +1000 VIRAL VIDEOS',
    category: 'video_pack',
    categoryLabel: 'Pack de Vídeos',
    categoryLabelEn: 'Video Pack',
    price: 'R$ 17,97',
    oldPrice: 'R$ 97,00',
    url: 'https://pay.kirvano.com/bca9009c-9bd9-466a-b86e-d286806bf064',
    isFeatured: true,
    isBestSeller: true,
    badge: 'MELHOR OFERTA 🔥',
    badgeEn: 'BEST OFFER 🔥',
    icon: 'Flame',
    description: 'Mais de 1.000 vídeos virais em altíssima resolução prontos para monetizar no TikTok, Reels, Shorts e Canais Dark.',
    descriptionEn: 'Over 1,000 viral high-resolution videos ready to monetize on TikTok, Instagram Reels, YouTube Shorts, and Dark Channels.',
    features: [
      '+1.000 cortes e vídeos em alta definição (1080p/4K)',
      'Totalmente livres de direitos autorais para monetização',
      'Formatados em 9:16 prontos para postagem direta',
      'Acesso imediato no Google Drive / Nuvem vitalício'
    ],
    featuresEn: [
      '+1,000 HD/4K ready-to-post clips',
      'Copyright-free & monetization safe',
      'Standard 9:16 vertical ratio for social media',
      'Instant lifetime Google Drive cloud access'
    ]
  },
  {
    id: 'ganhar-dinheiro-inteligente',
    title: 'Como Ganhar Dinheiro Online de Forma Inteligente',
    titleEn: 'How to Make Money Online Intelligently',
    category: 'ebook',
    categoryLabel: 'E-book / PDF',
    categoryLabelEn: 'E-book / PDF',
    price: 'R$ 14,97',
    oldPrice: 'R$ 47,00',
    url: 'https://pay.kirvano.com/9dc71c48-d963-4c2a-a36f-e9e1aef16521',
    isFeatured: true,
    icon: 'TrendingUp',
    description: 'Estratégias modernas e comprovadas de monetização digital sem enrolação teórica, focado em alavancagem rápida.',
    descriptionEn: 'Modern, battle-tested digital monetization strategies with zero fluff, focused on fast smart leverage.',
    features: [
      'Modelos de negócios de baixo investimento inicial',
      'Passo a passo prático para validação em 7 dias',
      'Rotina diária dos criadores de alta produtividade',
      'Checklist de execução acelerada'
    ],
    featuresEn: [
      'Low initial investment business models',
      'Step-by-step practical 7-day validation blueprint',
      'High-performance daily creator workflow',
      'Accelerated execution checklist'
    ]
  },
  {
    id: 'vender-produtos-digitais',
    title: 'Como vender produtos digitais (eBooks, cursos e mais)',
    titleEn: 'How to Sell Digital Products (eBooks, Courses & More)',
    category: 'ebook',
    categoryLabel: 'E-book / PDF',
    categoryLabelEn: 'E-book / PDF',
    price: 'R$ 14,97',
    oldPrice: 'R$ 47,00',
    url: 'https://pay.kirvano.com/35a349ed-19b4-455e-a2c6-368a770ce9ab',
    icon: 'ShoppingBag',
    description: 'Manual definitivo para criar, precificar, empacotar e vender infoprodutos nas principais plataformas do mercado.',
    descriptionEn: 'The definitive blueprint to create, price, package, and sell digital infoproducts across top platforms.',
    features: [
      'Como criar ofertas irresistíveis que convertem',
      'Configuração de checkouts e funis de conversão',
      'Estrutura de copywriting persuasivo de alta resposta',
      'Estratégias de upsell e order bump'
    ],
    featuresEn: [
      'How to craft high-converting irresistible offers',
      'Checkout configuration and conversion funnels',
      'Direct-response persuasive copywriting structure',
      'Upsell and order bump revenue maximizers'
    ]
  },
  {
    id: 'viver-de-conteudo',
    title: 'Como viver de conteúdo (YouTube, TikTok, Instagram)',
    titleEn: 'How to Make a Living from Content (YouTube, TikTok, IG)',
    category: 'ebook',
    categoryLabel: 'E-book / PDF',
    categoryLabelEn: 'E-book / PDF',
    price: 'R$ 14,97',
    oldPrice: 'R$ 47,00',
    url: 'https://pay.kirvano.com/886289d3-9d2a-4a76-9b4f-a6c62d22d571',
    icon: 'Video',
    description: 'Construa uma audiência engajada e monetize múltiplos canais com algoritmos virais sem depender de sorte.',
    descriptionEn: 'Build an engaged audience and monetize multiple channels leveraging viral algorithms systematically.',
    features: [
      'Algoritmo dos Reels, Shorts e TikTok desvendados',
      'Retenção de vídeo: ganchos (hooks) de 3 segundos',
      'Como fechar parcerias pagas e patrocínios',
      'Construção de marca pessoal sólida'
    ],
    featuresEn: [
      'Reels, Shorts, and TikTok algorithms decoded',
      'Watch-time retention: lethal 3-second hooks',
      'Securing brand sponsorships and paid deals',
      'Personal branding and loyalty flywheel'
    ]
  },
  {
    id: 'aprender-ia-do-zero',
    title: 'Como aprender Inteligência Artificial do zero',
    titleEn: 'How to Learn Artificial Intelligence from Scratch',
    category: 'ebook',
    categoryLabel: 'E-book / PDF',
    categoryLabelEn: 'E-book / PDF',
    price: 'R$ 14,97',
    oldPrice: 'R$ 47,00',
    url: 'https://pay.kirvano.com/d1f61f1b-dabd-42b2-96e1-e91d03f8f0a9',
    isFeatured: true,
    badge: 'ALTA DEMANDA ⚡',
    badgeEn: 'HIGH DEMAND ⚡',
    icon: 'Cpu',
    description: 'Guia acessível e prático para dominar prompts, ferramentas generativas e automações com IA para trabalhar menos e lucrar mais.',
    descriptionEn: 'Accessible, hands-on guide to mastering prompt engineering, generative tools, and AI automated pipelines.',
    features: [
      'Engenharia de Prompt avançada para ChatGPT e Claude',
      'Criação de imagens ultra-realistas com IAs de ponta',
      'Automação de tarefas repetitivas em minutos',
      'Monetização direta com serviços de inteligência artificial'
    ],
    featuresEn: [
      'Advanced prompt engineering for ChatGPT and Claude',
      'Ultra-realistic imagery workflows with cutting-edge models',
      'Automating repetitive business workflows in minutes',
      'Direct monetization providing AI-powered services'
    ]
  },
  {
    id: 'negocio-pouco-dinheiro',
    title: 'Como criar um negócio com pouco dinheiro',
    titleEn: 'How to Build a Business on a Shoestring Budget',
    category: 'ebook',
    categoryLabel: 'E-book / PDF',
    categoryLabelEn: 'E-book / PDF',
    price: 'R$ 14,97',
    oldPrice: 'R$ 47,00',
    url: 'https://pay.kirvano.com/9106f71a-4187-4c4f-9beb-0369dda390b9',
    icon: 'Lightbulb',
    description: 'Empreendedorismo enxuto: como montar uma operação lucrativa utilizando apenas ferramentas gratuitas e seu computador.',
    descriptionEn: 'Lean bootstrapping: build a profitable micro-business using free tools and your laptop.',
    features: [
      'Stack de ferramentas 100% gratuitas para operação',
      'Validação prévia antes de gastar um único centavo',
      'Gestão de fluxo de caixa inicial com segurança',
      'Casos reais de negócios criados com menos de R$ 50'
    ],
    featuresEn: [
      '100% free software stack to run your business',
      'Customer pre-validation before spending a single dollar',
      'Bulletproof early cash-flow management',
      'Real-world case studies started under $10'
    ]
  },
  {
    id: 'trabalhar-de-casa-autonomo',
    title: 'Como trabalhar de casa e ser autônomo',
    titleEn: 'How to Work from Home and Be Self-Employed',
    category: 'ebook',
    categoryLabel: 'E-book / PDF',
    categoryLabelEn: 'E-book / PDF',
    price: 'R$ 14,97',
    oldPrice: 'R$ 47,00',
    url: 'https://pay.kirvano.com/ece6f5c8-09af-4491-8563-7a3b75b9b711',
    icon: 'Home',
    description: 'Liberdade geográfica e financeira: organize sua rotina, conquiste clientes e viva no conforto da sua casa.',
    descriptionEn: 'Geographic and schedule freedom: organize your routine, acquire clients, and work from home comfortably.',
    features: [
      'Disciplina e rotina blindada contra procrastinação',
      'Criação de espaço de trabalho de alta concentração',
      'Prospecção de clientes de forma ética e contínua',
      'Gestão tributária e financeira do profissional autônomo'
    ],
    featuresEn: [
      'Unbreakable focus routine against procrastination',
      'Deep work home environment setup',
      'Predictable ethical client acquisition',
      'Tax, billing, and accounting freelance basics'
    ]
  },
  {
    id: 'renda-afiliados-freelas',
    title: 'Como fazer uma renda mensal com afiliados ou freelas',
    titleEn: 'How to Make Monthly Income with Affiliates or Freelancing',
    category: 'ebook',
    categoryLabel: 'E-book / PDF',
    categoryLabelEn: 'E-book / PDF',
    price: 'R$ 14,97',
    oldPrice: 'R$ 47,00',
    url: 'https://pay.kirvano.com/f36921c7-a85f-4556-8a73-1a100b9a5148',
    icon: 'DollarSign',
    description: 'Estratégia prática para gerar comissões diárias no piloto automático e fechar contratos de prestação de serviços online.',
    descriptionEn: 'Practical playbook to collect daily affiliate commissions and secure online remote client contracts.',
    features: [
      'Escolha dos produtos de alta conversão para afiliar',
      'Tráfego orgânico sem investir em anúncios pagos',
      'Plataformas internacionais de trabalho remoto em dólar',
      'Propostas comerciais irresistíveis para clientes'
    ],
    featuresEn: [
      'Selecting top-converting affiliate offers',
      'Organic traffic streams without paid ad spend',
      'Global remote freelancing platforms paying in USD',
      'Irresistible client proposals and rate negotiation'
    ]
  },
  {
    id: 'como-ganhar-dinheiro-facil',
    title: 'Como ganhar dinheiro fácil (Ebook COMPLETO)',
    titleEn: 'How to Make Easy Money (COMPLETE Ebook)',
    category: 'ebook',
    categoryLabel: 'E-book / PDF',
    categoryLabelEn: 'E-book / PDF',
    price: 'R$ 134,97',
    oldPrice: 'R$ 297,00',
    url: 'https://pay.kirvano.com/b1a29179-636e-4610-8537-c58aa2055166',
    isFeatured: true,
    badge: 'PREMIUM MASTER 💎',
    badgeEn: 'PREMIUM MASTER 💎',
    icon: 'Sparkles',
    description: 'O treinamento mais aprofundado e completo de Lucas Simioni. Reúne todos os segredos, métodos e atalhos testados na prática.',
    descriptionEn: 'The most in-depth, exhaustive master guide by Lucas Simioni. Consolidates all secret workflows, tactics, and verified shortcuts.',
    features: [
      'Manual master com mais de 100 páginas de puro conteúdo',
      'Estrutura detalhada de funis que faturaram mais de R$ 5.000',
      'Acesso a materiais e modelos de templates prontos',
      'Garantia estendida e suporte prioritário'
    ],
    featuresEn: [
      '100+ pages master manual packed with pure action steps',
      'Detailed breakdown of funnels that generated R$ 5,000+',
      'Direct access to ready-made templates and copy assets',
      'Extended guarantee and priority support channel'
    ]
  },
  {
    id: 'pac-284-videos',
    title: 'PAC 284 VÍDEOS',
    titleEn: 'PACK 284 VIRAL VIDEOS',
    category: 'video_pack',
    categoryLabel: 'Pack de Vídeos',
    categoryLabelEn: 'Video Pack',
    price: 'R$ 9,90',
    oldPrice: 'R$ 37,00',
    url: 'https://pay.kirvano.com/d7b27568-3ad1-4ec6-b1d1-dfe3e349a426',
    badge: 'MAIS VENDIDO ⭐',
    badgeEn: 'BESTSELLER ⭐',
    icon: 'Film',
    description: '284 vídeos virais prontos para postar e acelerar seu perfil nas redes sociais com estética magnética.',
    descriptionEn: '284 viral videos ready to upload immediately to accelerate your social profiles with magnetic aesthetics.',
    features: [
      '284 clipes em alta resolução para Shorts/Reels/TikTok',
      'Temáticas de lifestyle, motivação e alta retenção',
      'Prontos para inserir legendas ou sua própria marca',
      'Download rápido e organizado por pastas'
    ],
    featuresEn: [
      '284 high-res clips tailored for Shorts/Reels/TikTok',
      'High-retention lifestyle, motivation and tech themes',
      'Ready to add captions, logos, or voiceovers',
      'Instant fast download organized in folders'
    ]
  },
  {
    id: 'planner-conteudo-2025',
    title: 'Planner de Conteúdo para Redes Sociais – 2025',
    titleEn: 'Social Media Content Planner – 2025',
    category: 'ebook',
    categoryLabel: 'E-book / PDF',
    categoryLabelEn: 'E-book / PDF',
    price: 'R$ 9,87',
    oldPrice: 'R$ 29,90',
    url: 'https://pay.kirvano.com/37ff57df-1178-43c0-96ad-1dfffb73ef8c',
    icon: 'Calendar',
    description: 'Calendário editorial completo para 365 dias do ano, com ideias de posts, hooks magnéticos e estratégias de engajamento.',
    descriptionEn: 'Full 365-day editorial content calendar packed with post ideas, magnetic hooks, and engagement strategies.',
    features: [
      'Planejamento de 365 dias estruturado mês a mês',
      '+50 templates de ganchos (hooks) comprovados',
      'Quadro de métricas para acompanhar seu crescimento',
      'Datas comemorativas e tendências estratégicas'
    ],
    featuresEn: [
      '365-day structured schedule month by month',
      '+50 proven viral hooks and headline templates',
      'Growth metric tracking dashboard sheets',
      'Seasonal trends and commercial dates strategy'
    ]
  },
  {
    id: 'conteudos-virais-memes',
    title: 'Como Fazer Dinheiro com Conteúdos Virais e Memes',
    titleEn: 'How to Make Money with Viral Content & Memes',
    category: 'ebook',
    categoryLabel: 'E-book / PDF',
    categoryLabelEn: 'E-book / PDF',
    price: 'R$ 10,97',
    oldPrice: 'R$ 39,00',
    url: 'https://pay.kirvano.com/8f714525-c3dc-40f0-b62a-3375013d2479',
    icon: 'Zap',
    description: 'Monetize a atenção com páginas de entretenimento, memes e cortes virais de maneira consistente.',
    descriptionEn: 'Monetize user attention through entertainment pages, relatable memes, and viral clips consistently.',
    features: [
      'Como criar páginas de meme que crescem milhares de seguidores',
      'Monetização com parcerias, publicidade e infoprodutos',
      'Criação rápida de memes com ferramentas automáticas',
      'Estratégia para evitar shadowban nas redes'
    ],
    featuresEn: [
      'Building meme accounts scaling to tens of thousands',
      'Monetization via promotions, ads, and digital products',
      'Fast automated meme generation workflows',
      'Shadowban prevention guidelines'
    ]
  }
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: 'jogos',
    title: 'Jogos',
    titleEn: 'Games',
    description: 'Criação e distribuição de jogos dinâmicos, mecânicas imersivas e experiências interativas.',
    descriptionEn: 'Development and distribution of engaging gameplay, immersive mechanics, and interactive experiences.',
    icon: 'Gamepad2',
    tag: 'EM BREVE',
    tagEn: 'COMING SOON',
    status: 'planned'
  },
  {
    id: 'softwares',
    title: 'Softwares',
    titleEn: 'Softwares',
    description: 'Aplicações de alto desempenho e utilitários modernos para automação, escalabilidade e produtividade.',
    descriptionEn: 'High-performance applications and modern utilities for automation, scalability, and workflow productivity.',
    icon: 'Terminal',
    tag: 'EM DESENVOLVIMENTO',
    tagEn: 'IN DEVELOPMENT',
    status: 'active'
  },
  {
    id: 'arx-2-0',
    title: 'ARX 2.0',
    titleEn: 'ARX 2.0',
    description: 'Nova geração do motor neural com maior janela de contexto, agentes autônomos e raciocínio multi-etapas.',
    descriptionEn: 'Next-generation neural architecture featuring larger context windows, autonomous agents, and deep multi-step reasoning.',
    icon: 'Bot',
    tag: 'PRÓXIMA GERAÇÃO',
    tagEn: 'NEXT GENERATION',
    status: 'in_progress'
  },
  {
    id: 'app-builder',
    title: 'App Builder',
    titleEn: 'App Builder',
    description: 'Plataforma para construção rápida de aplicações e soluções sob medida com deploys autônomos.',
    descriptionEn: 'Platform for rapid custom application construction and tailored web systems with automated deployment.',
    icon: 'Code2',
    tag: 'PLANEJADO',
    tagEn: 'PLANNED',
    status: 'planned'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'entrega',
    question: 'Como recebo o acesso aos produtos adquiridos?',
    questionEn: 'How do I receive access to purchased products?',
    answer: 'A entrega é 100% automática e imediata. Assim que o pagamento via PIX ou cartão for aprovado na Kirvano, você recebe o link de download e acesso direto no seu e-mail cadastrado.',
    answerEn: 'Delivery is 100% automated and instantaneous. Once payment is confirmed via Kirvano, you will receive immediate download and access links directly in your registered email.'
  },
  {
    id: 'compatibilidade',
    question: 'Os vídeos e e-books funcionam no celular e no computador?',
    questionEn: 'Do the videos and e-books work on both mobile and PC?',
    answer: 'Sim! Os e-books são fornecidos no formato PDF universal e os vídeos em MP4 otimizado (9:16 vertical), compatíveis com qualquer celular (Android ou iPhone), tablet ou computador.',
    answerEn: 'Yes! E-books come in universal PDF format and video packs in optimized vertical MP4 (9:16), perfectly playable on any smartphone (Android or iPhone), tablet, or desktop.'
  },
  {
    id: 'garantia',
    question: 'Como funciona a garantia de satisfação?',
    questionEn: 'How does the satisfaction guarantee work?',
    answer: 'Você conta com 7 dias de garantia incondicional assegurada pela plataforma Kirvano. Se por qualquer motivo achar que o material não é para você, basta solicitar o reembolso.',
    answerEn: 'You are protected by an unconditional 7-day money-back guarantee powered by the Kirvano platform. If you feel the material did not meet expectations, you can request a full refund.'
  },
  {
    id: 'monetizacao',
    question: 'Posso usar os vídeos do PACK +1000 para monetizar minhas redes?',
    questionEn: 'Can I use the +1000 Pack videos to monetize my channels?',
    answer: 'Com certeza! Todos os vídeos foram selecionados especificamente para canais dark, páginas de nicho, Reels, TikTok e YouTube Shorts sem risco de bloqueio de direitos autorais.',
    answerEn: 'Absolutely! All clips were curated specifically for dark niche channels, Reels, TikTok, and YouTube Shorts monetization with zero copyright strikes.'
  },
  {
    id: 'arx-acesso',
    question: 'Como funciona o acesso à inteligência artificial ARX 1.0?',
    questionEn: 'How does access to the ARX 1.0 AI work?',
    answer: 'A IA ARX 1.0 desenvolvida por Lucas Simioni está disponível diretamente pelo endereço oficial https://arx.lucassimioni.cloud-ip.cc/ com os modos FAST (8ms) e PRO (Vision Mode e Web Search Live).',
    answerEn: 'The ARX 1.0 AI developed by Lucas Simioni is accessible directly via the official address https://arx.lucassimioni.cloud-ip.cc/ featuring FAST mode (8ms) and PRO mode (Vision Mode and Web Search Live).'
  }
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/lucas_simioni_/',
  youtube: 'https://www.youtube.com/@LSGHOST_1',
  sites: [
    { label: 'GitHub Pages', url: 'https://lsghost123.github.io/LucasSimioniPage/' },
    { label: 'Netlify', url: 'https://lucassimionipage.netlify.app/' },
    { label: 'Vercel', url: 'https://lucas-simioni.vercel.app/' },
  ],
  charmaApp: 'https://lsghost123.github.io/CHARMA-AI-Wingman/',
  alphaProxy: 'https://script.google.com/macros/s/AKfycbzmkNoWvTNRLhW-rNp7WijNAV_9kv5gez6khybt79VequBOfmmeGLHH_P07JIjDUsZ7nQ/exec',
  alphaDb: 'https://script.google.com/macros/s/AKfycbw0ACVJncVHxA5hckooONxJg95E_aPXeYpQpAtF4uUnTNxi1R6QG49tdiO_5GsJpRpmdA/exec'
};
