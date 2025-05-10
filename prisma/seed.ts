import { PrismaClient } from "../generated/prisma";
import { hashPassword } from "../src/utils/auth";
import * as fs from "fs";
import * as path from "path";
import * as https from "https";

const prisma = new PrismaClient();

// Create the seed-images directory if it doesn't exist
const seedImagesDir = path.join(__dirname, "seed-images");
if (!fs.existsSync(seedImagesDir)) {
  fs.mkdirSync(seedImagesDir, { recursive: true });
  console.log(`Created seed-images directory at ${seedImagesDir}`);
}

// Function to download an image from a URL
async function downloadImage(url: string, filename: string): Promise<string> {
  const filepath = path.join(seedImagesDir, filename);

  // Skip if the file already exists
  if (fs.existsSync(filepath)) {
    console.log(`Image already exists: ${filename}`);
    return filepath;
  }

  return new Promise((resolve, reject) => {
    console.log(`Downloading image: ${filename} from ${url}`);
    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        response.pipe(file);

        file.on("finish", () => {
          file.close();
          console.log(`Downloaded image: ${filename}`);
          resolve(filepath);
        });
      })
      .on("error", (err) => {
        fs.unlinkSync(filepath); // Clean up partial file
        reject(err);
      });
  });
}

async function loadImageAsBuffer(imagePath: string): Promise<Buffer | null> {
  try {
    return fs.readFileSync(imagePath);
  } catch (error) {
    console.warn(
      `Warning: Image ${imagePath} could not be loaded. Using null instead.`
    );
    return null;
  }
}

// Function to generate a placeholder image if we can't download
function generatePlaceholderImage(label: string): Buffer {
  // This creates a simple 200x150 colored box with text using Node Canvas
  // For simplicity, let's use a hardcoded placeholder instead
  // In a real implementation, you'd use node-canvas to create a dynamic image

  // Instead, we'll return a small colored buffer
  return Buffer.from([
    0x89,
    0x50,
    0x4e,
    0x47,
    0x0d,
    0x0a,
    0x1a,
    0x0a, // PNG header
    0x00,
    0x00,
    0x00,
    0x0d,
    0x49,
    0x48,
    0x44,
    0x52, // IHDR chunk
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x01, // 1x1 image
    0x08,
    0x02,
    0x00,
    0x00,
    0x00,
    0x90,
    0x77,
    0x53, // bit depth, color type
    0xde,
    0x00,
    0x00,
    0x00,
    0x0c,
    0x49,
    0x44,
    0x41, // IDAT chunk
    0x54,
    0x08,
    0xd7,
    0x63,
    0xf8,
    0xff,
    0xff,
    0x3f, // pixel data
    0x00,
    0x05,
    0x01,
    0x02,
    0xfe,
    0xa8,
    0xdc,
    0x4a,
    0x00,
    0x00,
    0x00,
    0x00,
    0x49,
    0x45,
    0x4e,
    0x44, // IEND chunk
    0xae,
    0x42,
    0x60,
    0x82,
  ]);
}

// Images for different categories (Unsplash images)
const categoryImages = {
  urban:
    "https://images.unsplash.com/photo-1542731764-7d0f6f3f5325?q=80&w=500&auto=format&fit=crop",
  environment:
    "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=500&auto=format&fit=crop",
  culture:
    "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=500&auto=format&fit=crop",
  education:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop",
  governance:
    "https://images.unsplash.com/photo-1605664912327-5909ef620abe?q=80&w=500&auto=format&fit=crop",
  community:
    "https://images.unsplash.com/photo-1607748851687-ba9a10438621?q=80&w=500&auto=format&fit=crop",
};

// Images for options
const optionImages = {
  modern:
    "https://images.unsplash.com/photo-1605133659288-a0e68fc68d5d?q=80&w=400&auto=format&fit=crop",
  sustainable:
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=400&auto=format&fit=crop",
  cultural:
    "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?q=80&w=400&auto=format&fit=crop",
  community:
    "https://images.unsplash.com/photo-1536189789672-61dbc00ae09c?q=80&w=400&auto=format&fit=crop",
  recycling:
    "https://images.unsplash.com/photo-1591193686104-fddba4cb7cf1?q=80&w=400&auto=format&fit=crop",
  entrega:
    "https://images.unsplash.com/photo-1622714918804-4be2b29d6654?q=80&w=400&auto=format&fit=crop",
  zerowaste:
    "https://images.unsplash.com/photo-1604187350483-2c416d94deaf?q=80&w=400&auto=format&fit=crop",
  cultures:
    "https://images.unsplash.com/photo-1604154530457-404c6535225b?q=80&w=400&auto=format&fit=crop",
  brazilian:
    "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=400&auto=format&fit=crop",
  tech: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=400&auto=format&fit=crop",
  cinema:
    "https://images.unsplash.com/photo-1542204637-e67bc7d41e48?q=80&w=400&auto=format&fit=crop",
  music:
    "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=400&auto=format&fit=crop",
  programming:
    "https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=400&auto=format&fit=crop",
  arts: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=400&auto=format&fit=crop",
  sports:
    "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=400&auto=format&fit=crop",
  environment:
    "https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc?q=80&w=400&auto=format&fit=crop",
  plaza:
    "https://images.unsplash.com/photo-1574266965598-20872aeb8c04?q=80&w=400&auto=format&fit=crop",
  security:
    "https://images.unsplash.com/photo-1595771291156-a41308e3f36d?q=80&w=400&auto=format&fit=crop",
  center:
    "https://images.unsplash.com/photo-1541401154946-6a5f7f17a0c3?q=80&w=400&auto=format&fit=crop",
  sidewalk:
    "https://images.unsplash.com/photo-1575328630189-440449ed3d7c?q=80&w=400&auto=format&fit=crop",
  school:
    "https://images.unsplash.com/photo-1601001435957-74f1f3a56ea3?q=80&w=400&auto=format&fit=crop",
  health:
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=400&auto=format&fit=crop",
  cleaning:
    "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=400&auto=format&fit=crop",
  animal:
    "https://images.unsplash.com/photo-1536500152107-01ab1422f932?q=80&w=400&auto=format&fit=crop",
};

async function main() {
  console.log("Starting seed...");

  // Download all the required images first
  console.log("Downloading seed images...");
  try {
    // Download category images
    const categoryImagePaths = {
      urban: await downloadImage(categoryImages.urban, "urban.jpg"),
      environment: await downloadImage(
        categoryImages.environment,
        "environment.jpg"
      ),
      culture: await downloadImage(categoryImages.culture, "culture.jpg"),
      education: await downloadImage(categoryImages.education, "education.jpg"),
      governance: await downloadImage(
        categoryImages.governance,
        "governance.jpg"
      ),
      community: await downloadImage(categoryImages.community, "community.jpg"),
    };

    // Download option images
    const optionImagePaths = {
      modern: await downloadImage(optionImages.modern, "modern.jpg"),
      sustainable: await downloadImage(
        optionImages.sustainable,
        "sustainable.jpg"
      ),
      cultural: await downloadImage(optionImages.cultural, "cultural.jpg"),
      community: await downloadImage(optionImages.community, "community.jpg"),
      recycling: await downloadImage(optionImages.recycling, "recycling.jpg"),
      entrega: await downloadImage(optionImages.entrega, "entrega.jpg"),
      zerowaste: await downloadImage(optionImages.zerowaste, "zerowaste.jpg"),
      cultures: await downloadImage(optionImages.cultures, "cultures.jpg"),
      brazilian: await downloadImage(optionImages.brazilian, "brazilian.jpg"),
      tech: await downloadImage(optionImages.tech, "tech.jpg"),
      cinema: await downloadImage(optionImages.cinema, "cinema.jpg"),
      music: await downloadImage(optionImages.music, "music.jpg"),
      programming: await downloadImage(
        optionImages.programming,
        "programming.jpg"
      ),
      arts: await downloadImage(optionImages.arts, "arts.jpg"),
      sports: await downloadImage(optionImages.sports, "sports.jpg"),
      environment: await downloadImage(
        optionImages.environment,
        "environment_education.jpg"
      ),
      plaza: await downloadImage(optionImages.plaza, "plaza.jpg"),
      security: await downloadImage(optionImages.security, "security.jpg"),
      center: await downloadImage(optionImages.center, "center.jpg"),
      sidewalk: await downloadImage(optionImages.sidewalk, "sidewalk.jpg"),
      school: await downloadImage(optionImages.school, "school.jpg"),
      health: await downloadImage(optionImages.health, "health.jpg"),
      cleaning: await downloadImage(optionImages.cleaning, "cleaning.jpg"),
      animal: await downloadImage(optionImages.animal, "animal.jpg"),
    };

    console.log("All images downloaded successfully!");

    // Clear existing data
    console.log("Clearing existing data...");
    await prisma.votingParticipation.deleteMany({});
    await prisma.vote.deleteMany({});
    await prisma.votingOption.deleteMany({});
    await prisma.votingPool.deleteMany({});
    await prisma.user.deleteMany({});

    console.log("Creating users...");
    // Create test users
    const adminUser = await prisma.user.create({
      data: {
        name: "Administrador",
        cpf: "12345678900",
        email: "admin@votaai.com",
        password: await hashPassword("senha123"),
        // No avatar image for this user
        role: 2, // Set as admin user
      },
    });

    const regularUser = await prisma.user.create({
      data: {
        name: "Cidadão Comum",
        cpf: "98765432100",
        email: "cidadao@exemplo.com",
        password: await hashPassword("senha123"),
        // No avatar image for this user
      },
    });

    const testUsers = [
      {
        name: "Ana Silva",
        cpf: "11122233344",
        email: "ana.silva@email.com",
        password: await hashPassword("senha123"),
      },
      {
        name: "Carlos Oliveira",
        cpf: "55566677788",
        email: "carlos.oliveira@email.com",
        password: await hashPassword("senha123"),
      },
    ];

    for (const userData of testUsers) {
      await prisma.user.create({
        data: userData,
      });
    }

    console.log("Creating voting pools...");

    // 1. Urban Infrastructure Project - Active
    const urbanInfrastructurePool = await prisma.votingPool.create({
      data: {
        title: "Revitalização da Praça Central",
        description:
          "Consulta pública para escolher o projeto de renovação da Praça Central da cidade. O projeto vencedor será implementado no próximo semestre com recursos do Programa de Desenvolvimento Urbano.",
        category: "Infraestrutura Urbana",
        image: await loadImageAsBuffer(categoryImagePaths.urban),
        startDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
        endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
        anonymous: false,
        status: "active",
        latitude: -23.5505,
        longitude: -46.6333,
        address: "Praça Central, Centro, São Paulo, SP",
        options: {
          create: [
            {
              text: "Projeto Moderno com Tecnologia",
              description:
                "Redesenho moderno com estações de carregamento solar, Wi-Fi gratuito e espaços interativos com tecnologia.",
              image: await loadImageAsBuffer(optionImagePaths.modern),
            },
            {
              text: "Projeto Sustentável e Verde",
              description:
                "Foco em áreas verdes, com jardins sustentáveis, horta comunitária e sistemas de captação de água da chuva.",
              image: await loadImageAsBuffer(optionImagePaths.sustainable),
            },
            {
              text: "Projeto Cultural e Histórico",
              description:
                "Preservação de elementos históricos com espaços para arte, apresentações culturais e exposições ao ar livre.",
              image: await loadImageAsBuffer(optionImagePaths.cultural),
            },
            {
              text: "Projeto Comunitário e Familiar",
              description:
                "Prioridade para famílias, com playground, academia ao ar livre e espaços para piquenique e encontros comunitários.",
              image: await loadImageAsBuffer(optionImagePaths.community),
            },
          ],
        },
      },
    });

    // 2. Environmental Initiative - Active
    const environmentalPool = await prisma.votingPool.create({
      data: {
        title: "Programa de Reciclagem Municipal",
        description:
          "Escolha qual programa de reciclagem e gestão de resíduos deve ser implementado em nossa cidade para melhorar nossos índices ambientais e promover a sustentabilidade.",
        category: "Meio Ambiente",
        image: await loadImageAsBuffer(categoryImagePaths.environment),
        startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
        endDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000), // 20 days from now
        anonymous: true,
        status: "active",
        options: {
          create: [
            {
              text: "Coleta Seletiva Ampliada",
              description:
                "Expandir o sistema atual de coleta seletiva para todos os bairros e aumentar a frequência de coletas.",
              image: await loadImageAsBuffer(optionImagePaths.recycling),
            },
            {
              text: "Pontos de Entrega Voluntária",
              description:
                "Criar uma rede de pontos de entrega voluntária em locais estratégicos da cidade, com incentivos para participação.",
              image: await loadImageAsBuffer(optionImagePaths.entrega),
            },
            {
              text: "Programa Lixo Zero",
              description:
                "Implementar o conceito de Lixo Zero com educação ambiental intensiva e metas progressivas de redução de resíduos.",
              image: await loadImageAsBuffer(optionImagePaths.zerowaste),
            },
          ],
        },
      },
    });

    // 3. Cultural Event - Upcoming
    const culturalEventPool = await prisma.votingPool.create({
      data: {
        title: "Festival Cultural Anual",
        description:
          "Ajude a definir o tema do nosso Festival Cultural Anual que acontecerá em três meses. O tema escolhido guiará todas as apresentações, mostras e atividades do evento.",
        category: "Cultura",
        image: await loadImageAsBuffer(categoryImagePaths.culture),
        startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        endDate: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000), // 35 days from now
        anonymous: false,
        status: "upcoming",
        options: {
          create: [
            {
              text: "Culturas do Mundo",
              description:
                "Celebração da diversidade cultural global, com representações de diferentes países e tradições.",
              image: await loadImageAsBuffer(optionImagePaths.cultures),
            },
            {
              text: "Tradições Regionais Brasileiras",
              description:
                "Foco nas ricas tradições culturais das diferentes regiões do Brasil, valorizando nossa diversidade cultural.",
              image: await loadImageAsBuffer(optionImagePaths.brazilian),
            },
            {
              text: "Arte e Tecnologia",
              description:
                "Exploração da intersecção entre arte tradicional e novas tecnologias, com instalações interativas e arte digital.",
              image: await loadImageAsBuffer(optionImagePaths.tech),
            },
            {
              text: "Cinema e Literatura",
              description:
                "Celebração da narrativa através do cinema e literatura, com exibições de filmes, leituras e debates.",
              image: await loadImageAsBuffer(optionImagePaths.cinema),
            },
            {
              text: "Música e Dança",
              description:
                "Festival focado em apresentações musicais e de dança, representando diversos estilos e épocas.",
              image: await loadImageAsBuffer(optionImagePaths.music),
            },
          ],
        },
      },
    });

    // 4. Education Proposal - Closed
    const educationPool = await prisma.votingPool.create({
      data: {
        title: "Atividades Extra-Curriculares nas Escolas Municipais",
        description:
          "Votação para determinar quais atividades extra-curriculares devem ser priorizadas e implementadas nas escolas municipais no próximo ano letivo.",
        category: "Educação",
        image: await loadImageAsBuffer(categoryImagePaths.education),
        startDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
        endDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
        anonymous: false,
        status: "closed",
        options: {
          create: [
            {
              text: "Programação e Robótica",
              description:
                "Introdução à programação de computadores e robótica básica para desenvolver habilidades tecnológicas.",
              image: await loadImageAsBuffer(optionImagePaths.programming),
            },
            {
              text: "Artes e Expressão Cultural",
              description:
                "Atividades artísticas como música, teatro, dança e artes visuais para estimular a criatividade.",
              image: await loadImageAsBuffer(optionImagePaths.arts),
            },
            {
              text: "Esportes e Saúde",
              description:
                "Expansão das atividades esportivas e introdução de educação nutricional e hábitos saudáveis.",
              image: await loadImageAsBuffer(optionImagePaths.sports),
            },
            {
              text: "Meio Ambiente e Sustentabilidade",
              description:
                "Projetos ambientais práticos como hortas escolares e reciclagem, além de educação ambiental.",
              image: await loadImageAsBuffer(optionImagePaths.environment),
            },
          ],
        },
      },
    });

    // 5. Local Governance - Active (Location-based)
    const governancePool = await prisma.votingPool.create({
      data: {
        title: "Orçamento Participativo do Bairro Liberdade",
        description:
          "Os moradores do Bairro Liberdade podem votar em como utilizar R$ 500.000 do orçamento municipal destinado a melhorias locais. Votação exclusiva para residentes do bairro.",
        category: "Governança Local",
        image: await loadImageAsBuffer(categoryImagePaths.governance),
        startDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        endDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000), // 25 days from now
        anonymous: false,
        status: "active",
        latitude: -23.5557,
        longitude: -46.6395,
        address: "Bairro Liberdade, São Paulo, SP",
        options: {
          create: [
            {
              text: "Reforma da Praça Principal",
              description:
                "Renovação completa da praça central do bairro, incluindo novo paisagismo, iluminação e mobiliário urbano.",
              image: await loadImageAsBuffer(optionImagePaths.plaza),
            },
            {
              text: "Melhoria da Segurança",
              description:
                "Instalação de câmeras de segurança e melhoria da iluminação pública em pontos estratégicos do bairro.",
              image: await loadImageAsBuffer(optionImagePaths.security),
            },
            {
              text: "Centro Cultural Comunitário",
              description:
                "Adaptação de um prédio público subutilizado para criar um centro cultural com biblioteca, espaço para cursos e eventos.",
              image: await loadImageAsBuffer(optionImagePaths.center),
            },
            {
              text: "Infraestrutura para Pedestres",
              description:
                "Melhoria das calçadas, instalação de faixas de pedestres elevadas e sinalização para aumentar a segurança e acessibilidade.",
              image: await loadImageAsBuffer(optionImagePaths.sidewalk),
            },
          ],
        },
      },
    });

    // 6. Community Service Project - Upcoming
    const communityServicePool = await prisma.votingPool.create({
      data: {
        title: "Mutirão Comunitário Semestral",
        description:
          "Vote no projeto prioritário para nosso próximo mutirão comunitário. A ação escolhida será realizada com voluntários e recursos doados por empresas parceiras.",
        category: "Serviço Comunitário",
        image: await loadImageAsBuffer(categoryImagePaths.community),
        startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
        endDate: new Date(Date.now() + 40 * 24 * 60 * 60 * 1000), // 40 days from now
        anonymous: true,
        status: "upcoming",
        options: {
          create: [
            {
              text: "Revitalização de Escola Pública",
              description:
                "Pintura, reparos e melhorias gerais em uma escola municipal que atende crianças de baixa renda.",
              image: await loadImageAsBuffer(optionImagePaths.school),
            },
            {
              text: "Campanha de Saúde Preventiva",
              description:
                "Realização de exames básicos, consultas e orientações de saúde para comunidades com acesso limitado a serviços médicos.",
              image: await loadImageAsBuffer(optionImagePaths.health),
            },
            {
              text: "Limpeza de Área Natural",
              description:
                "Limpeza de um parque ou área verde da cidade, com ações de conscientização ambiental e plantio de árvores nativas.",
              image: await loadImageAsBuffer(optionImagePaths.cleaning),
            },
            {
              text: "Reforma de Abrigo de Animais",
              description:
                "Melhorias estruturais, limpeza e auxílio nos cuidados com animais abandonados em abrigo local.",
              image: await loadImageAsBuffer(optionImagePaths.animal),
            },
          ],
        },
      },
    });

    console.log("Creating some votes for the active and closed pools...");

    // Add votes to the education pool (closed)
    const educationOptions = await prisma.votingOption.findMany({
      where: { poolId: educationPool.id },
    });

    // Distribute votes among options - making one the winner
    await prisma.vote.createMany({
      data: [
        // Admin votes for Artes
        {
          userId: adminUser.id,
          poolId: educationPool.id,
          optionId: educationOptions[1].id,
        },

        // Regular user votes for Programação
        {
          userId: regularUser.id,
          poolId: educationPool.id,
          optionId: educationOptions[0].id,
        },

        // Additional votes to create a clear winner (Option 1 - Artes)
        ...Array(15)
          .fill(null)
          .map(() => ({
            poolId: educationPool.id,
            optionId: educationOptions[1].id,
            userId: null, // Anonymous votes
          })),

        // Some votes for other options
        ...Array(8)
          .fill(null)
          .map(() => ({
            poolId: educationPool.id,
            optionId: educationOptions[0].id,
            userId: null, // Anonymous votes
          })),
        ...Array(12)
          .fill(null)
          .map(() => ({
            poolId: educationPool.id,
            optionId: educationOptions[2].id,
            userId: null, // Anonymous votes
          })),
        ...Array(5)
          .fill(null)
          .map(() => ({
            poolId: educationPool.id,
            optionId: educationOptions[3].id,
            userId: null, // Anonymous votes
          })),
      ],
    });

    // Add votes to the urban infrastructure pool (active)
    const urbanOptions = await prisma.votingOption.findMany({
      where: { poolId: urbanInfrastructurePool.id },
    });

    // Add some votes to the active urban pool
    await prisma.vote.createMany({
      data: [
        // Admin votes for the Sustainable project
        {
          userId: adminUser.id,
          poolId: urbanInfrastructurePool.id,
          optionId: urbanOptions[1].id,
        },

        // Regular user votes for Modern project
        {
          userId: regularUser.id,
          poolId: urbanInfrastructurePool.id,
          optionId: urbanOptions[0].id,
        },

        // Add some more votes distributed across options
        ...Array(7)
          .fill(null)
          .map(() => ({
            poolId: urbanInfrastructurePool.id,
            optionId: urbanOptions[0].id,
            userId: null, // Anonymous votes
          })),
        ...Array(10)
          .fill(null)
          .map(() => ({
            poolId: urbanInfrastructurePool.id,
            optionId: urbanOptions[1].id,
            userId: null, // Anonymous votes
          })),
        ...Array(6)
          .fill(null)
          .map(() => ({
            poolId: urbanInfrastructurePool.id,
            optionId: urbanOptions[2].id,
            userId: null, // Anonymous votes
          })),
        ...Array(5)
          .fill(null)
          .map(() => ({
            poolId: urbanInfrastructurePool.id,
            optionId: urbanOptions[3].id,
            userId: null, // Anonymous votes
          })),
      ],
    });

    // Add votes to the environmental pool (active, anonymous)
    const environmentalOptions = await prisma.votingOption.findMany({
      where: { poolId: environmentalPool.id },
    });

    // For anonymous polls, we need to:
    // 1. Create anonymous votes (no userId)
    // 2. Track user participation separately

    // Create anonymous votes first
    await prisma.vote.createMany({
      data: [
        // Add anonymous votes for various options
        // Option 0 votes
        ...Array(12)
          .fill(null)
          .map(() => ({
            poolId: environmentalPool.id,
            optionId: environmentalOptions[0].id,
            userId: null,
          })),

        // Option 1 votes
        ...Array(8)
          .fill(null)
          .map(() => ({
            poolId: environmentalPool.id,
            optionId: environmentalOptions[1].id,
            userId: null,
          })),

        // Option 2 votes
        ...Array(15)
          .fill(null)
          .map(() => ({
            poolId: environmentalPool.id,
            optionId: environmentalOptions[2].id,
            userId: null,
          })),
      ],
    });

    // Now track user participation without revealing their choices
    // First, get the IDs of all test users
    const testUserIds = await Promise.all(
      testUsers.map(async (user) => {
        const found = await prisma.user.findUnique({
          where: { email: user.email },
          select: { id: true },
        });
        return found?.id;
      })
    );

    // Then create the participation records for all users
    await prisma.votingParticipation.createMany({
      data: [
        // Admin participated
        {
          userId: adminUser.id,
          poolId: environmentalPool.id,
        },

        // Regular user participated
        {
          userId: regularUser.id,
          poolId: environmentalPool.id,
        },

        // Other test users participated
        ...testUserIds
          .filter((id) => id !== undefined)
          .map((id) => ({
            userId: id as string,
            poolId: environmentalPool.id,
          })),
      ],
    });

    console.log("Seed completed successfully!");
  } catch (error) {
    console.error("Error during image processing:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
