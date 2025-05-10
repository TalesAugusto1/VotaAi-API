import { PrismaClient } from "../generated/prisma";
import { hashPassword } from "../src/utils/auth";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

async function loadImageAsBuffer(imagePath: string): Promise<Buffer | null> {
  try {
    const fullPath = path.join(__dirname, "seed-images", imagePath);
    return fs.readFileSync(fullPath);
  } catch (error) {
    console.warn(
      `Warning: Image ${imagePath} could not be loaded. Using null instead.`
    );
    return null;
  }
}

async function main() {
  console.log("Starting seed...");

  // Clear existing data
  console.log("Clearing existing data...");
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
      image: null, // placeholder for actual image
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
            image: null, // placeholder for actual image
          },
          {
            text: "Projeto Sustentável e Verde",
            description:
              "Foco em áreas verdes, com jardins sustentáveis, horta comunitária e sistemas de captação de água da chuva.",
            image: null, // placeholder for actual image
          },
          {
            text: "Projeto Cultural e Histórico",
            description:
              "Preservação de elementos históricos com espaços para arte, apresentações culturais e exposições ao ar livre.",
            image: null, // placeholder for actual image
          },
          {
            text: "Projeto Comunitário e Familiar",
            description:
              "Prioridade para famílias, com playground, academia ao ar livre e espaços para piquenique e encontros comunitários.",
            image: null, // placeholder for actual image
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
      image: null, // placeholder for actual image
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
            image: null, // placeholder for actual image
          },
          {
            text: "Pontos de Entrega Voluntária",
            description:
              "Criar uma rede de pontos de entrega voluntária em locais estratégicos da cidade, com incentivos para participação.",
            image: null, // placeholder for actual image
          },
          {
            text: "Programa Lixo Zero",
            description:
              "Implementar o conceito de Lixo Zero com educação ambiental intensiva e metas progressivas de redução de resíduos.",
            image: null, // placeholder for actual image
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
      image: null, // placeholder for actual image
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
            image: null, // placeholder for actual image
          },
          {
            text: "Tradições Regionais Brasileiras",
            description:
              "Foco nas ricas tradições culturais das diferentes regiões do Brasil, valorizando nossa diversidade cultural.",
            image: null, // placeholder for actual image
          },
          {
            text: "Arte e Tecnologia",
            description:
              "Exploração da intersecção entre arte tradicional e novas tecnologias, com instalações interativas e arte digital.",
            image: null, // placeholder for actual image
          },
          {
            text: "Cinema e Literatura",
            description:
              "Celebração da narrativa através do cinema e literatura, com exibições de filmes, leituras e debates.",
            image: null, // placeholder for actual image
          },
          {
            text: "Música e Dança",
            description:
              "Festival focado em apresentações musicais e de dança, representando diversos estilos e épocas.",
            image: null, // placeholder for actual image
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
      image: null, // placeholder for actual image
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
            image: null, // placeholder for actual image
          },
          {
            text: "Artes e Expressão Cultural",
            description:
              "Atividades artísticas como música, teatro, dança e artes visuais para estimular a criatividade.",
            image: null, // placeholder for actual image
          },
          {
            text: "Esportes e Saúde",
            description:
              "Expansão das atividades esportivas e introdução de educação nutricional e hábitos saudáveis.",
            image: null, // placeholder for actual image
          },
          {
            text: "Meio Ambiente e Sustentabilidade",
            description:
              "Projetos ambientais práticos como hortas escolares e reciclagem, além de educação ambiental.",
            image: null, // placeholder for actual image
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
      image: null, // placeholder for actual image
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
            image: null, // placeholder for actual image
          },
          {
            text: "Melhoria da Segurança",
            description:
              "Instalação de câmeras de segurança e melhoria da iluminação pública em pontos estratégicos do bairro.",
            image: null, // placeholder for actual image
          },
          {
            text: "Centro Cultural Comunitário",
            description:
              "Adaptação de um prédio público subutilizado para criar um centro cultural com biblioteca, espaço para cursos e eventos.",
            image: null, // placeholder for actual image
          },
          {
            text: "Infraestrutura para Pedestres",
            description:
              "Melhoria das calçadas, instalação de faixas de pedestres elevadas e sinalização para aumentar a segurança e acessibilidade.",
            image: null, // placeholder for actual image
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
      image: null, // placeholder for actual image
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
            image: null, // placeholder for actual image
          },
          {
            text: "Campanha de Saúde Preventiva",
            description:
              "Realização de exames básicos, consultas e orientações de saúde para comunidades com acesso limitado a serviços médicos.",
            image: null, // placeholder for actual image
          },
          {
            text: "Limpeza de Área Natural",
            description:
              "Limpeza de um parque ou área verde da cidade, com ações de conscientização ambiental e plantio de árvores nativas.",
            image: null, // placeholder for actual image
          },
          {
            text: "Reforma de Abrigo de Animais",
            description:
              "Melhorias estruturais, limpeza e auxílio nos cuidados com animais abandonados em abrigo local.",
            image: null, // placeholder for actual image
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

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
