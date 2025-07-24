import { UsersInterface } from '../relatorio/relatorio.service';

const fakeDatabase: UsersInterface[] = [
  {
    email: 'ana.silva@example.com',
    name: 'Ana Beatriz Silva',
    id: 'usr001',
    emails: [
      { email: 'ana.b.silva@gmail.com', id: 'eml001' },
      { email: 'a.silva@empresa.com', id: 'eml002' },
    ],
  },
  {
    email: 'marcos.pereira@example.com',
    name: 'Marcos Vinícius Pereira',
    id: 'usr002',
    emails: [{ email: 'marcosvp@hotmail.com', id: 'eml003' }],
  },
  {
    email: 'julia.almeida@example.com',
    name: 'Júlia Almeida Ramos',
    id: 'usr003',
    emails: [
      { email: 'ju.almeida@outlook.com', id: 'eml004' },
      { email: 'j.ramos@empresa.com', id: 'eml005' },
    ],
  },
  {
    email: 'rodrigo.machado@example.com',
    name: 'Rodrigo Machado',
    id: 'usr004',
    emails: [{ email: 'rodrigo.m@gmail.com', id: 'eml006' }],
  },
  {
    email: 'fernanda.melo@example.com',
    name: 'Fernanda Melo Tavares',
    id: 'usr005',
    emails: [
      { email: 'fernandam.tavares@gmail.com', id: 'eml007' },
      { email: 'f.melo@empresa.com', id: 'eml008' },
    ],
  },
  {
    email: 'lucas.santos@example.com',
    name: 'Lucas dos Santos',
    id: 'usr006',
    emails: [{ email: 'lucass@outlook.com', id: 'eml009' }],
  },
  {
    email: 'camila.costa@example.com',
    name: 'Camila Costa Duarte',
    id: 'usr007',
    emails: [
      { email: 'c.duarte@empresa.com', id: 'eml010' },
      { email: 'camicosta@gmail.com', id: 'eml011' },
    ],
  },
  {
    email: 'rafael.gomes@example.com',
    name: 'Rafael Gomes Ferreira',
    id: 'usr008',
    emails: [{ email: 'rafaelgf@yahoo.com', id: 'eml012' }],
  },
  {
    email: 'laura.mendes@example.com',
    name: 'Laura Mendes',
    id: 'usr009',
    emails: [{ email: 'lauramendes@icloud.com', id: 'eml013' }],
  },
  {
    email: 'tiago.lima@example.com',
    name: 'Tiago Lima',
    id: 'usr010',
    emails: [{ email: 'tiago.l@gmail.com', id: 'eml014' }],
  },
  {
    email: 'bruna.rocha@example.com',
    name: 'Bruna Rocha',
    id: 'usr011',
    emails: [{ email: 'bruninha.rocha@outlook.com', id: 'eml015' }],
  },
  {
    email: 'vinicius.oliveira@example.com',
    name: 'Vinícius Oliveira',
    id: 'usr012',
    emails: [
      { email: 'v.oliveira@gmail.com', id: 'eml016' },
      { email: 'vinicius.oli@empresa.com', id: 'eml017' },
    ],
  },
  {
    email: 'isabela.freitas@example.com',
    name: 'Isabela Freitas',
    id: 'usr013',
    emails: [{ email: 'isafreitas@icloud.com', id: 'eml018' }],
  },
  {
    email: 'eduardo.pinto@example.com',
    name: 'Eduardo Pinto',
    id: 'usr014',
    emails: [{ email: 'edupinto@yahoo.com', id: 'eml019' }],
  },
  {
    email: 'carol.barbosa@example.com',
    name: 'Carolina Barbosa',
    id: 'usr015',
    emails: [
      { email: 'carol.b@outlook.com', id: 'eml020' },
      { email: 'carolina.barbosa@empresa.com', id: 'eml021' },
    ],
  },
  {
    email: 'igor.souza@example.com',
    name: 'Igor Souza',
    id: 'usr016',
    emails: [{ email: 'igor_souza@gmail.com', id: 'eml022' }],
  },
  {
    email: 'larissa.torres@example.com',
    name: 'Larissa Torres',
    id: 'usr017',
    emails: [{ email: 'lari.t@gmail.com', id: 'eml023' }],
  },
  {
    email: 'matheus.nunes@example.com',
    name: 'Matheus Nunes',
    id: 'usr018',
    emails: [{ email: 'matheusn@hotmail.com', id: 'eml024' }],
  },
  {
    email: 'aline.fernandes@example.com',
    name: 'Aline Fernandes',
    id: 'usr019',
    emails: [{ email: 'alinef.fernandes@empresa.com', id: 'eml025' }],
  },
  {
    email: 'ricardo.azevedo@example.com',
    name: 'Ricardo Azevedo',
    id: 'usr020',
    emails: [
      { email: 'r.azevedo@gmail.com', id: 'eml026' },
      { email: 'ricardoazevedo@empresa.com', id: 'eml027' },
    ],
  },
  {
    email: 'natasha.lins@example.com',
    name: 'Natasha Lins',
    id: 'usr021',
    emails: [{ email: 'natasha.lins@outlook.com', id: 'eml028' }],
  },
  {
    email: 'daniel.moraes@example.com',
    name: 'Daniel Moraes',
    id: 'usr022',
    emails: [{ email: 'dan.moraes@gmail.com', id: 'eml029' }],
  },
  {
    email: 'paula.camargo@example.com',
    name: 'Paula Camargo',
    id: 'usr023',
    emails: [
      { email: 'paulacamargo@empresa.com', id: 'eml030' },
      { email: 'p.camargo@yahoo.com', id: 'eml031' },
    ],
  },
  {
    email: 'felipe.cardoso@example.com',
    name: 'Felipe Cardoso',
    id: 'usr024',
    emails: [{ email: 'felipe.c@outlook.com', id: 'eml032' }],
  },
  {
    email: 'sabrina.martins@example.com',
    name: 'Sabrina Martins',
    id: 'usr025',
    emails: [{ email: 'sab.martins@icloud.com', id: 'eml033' }],
  },
  {
    email: 'gustavo.reis@example.com',
    name: 'Gustavo Reis',
    id: 'usr026',
    emails: [{ email: 'gustavoreis@gmail.com', id: 'eml034' }],
  },
  {
    email: 'leticia.correia@example.com',
    name: 'Letícia Correia',
    id: 'usr027',
    emails: [
      { email: 'leticia.correia@empresa.com', id: 'eml035' },
      { email: 'leticiac@hotmail.com', id: 'eml036' },
    ],
  },
  {
    email: 'joao.vieira@example.com',
    name: 'João Vieira',
    id: 'usr028',
    emails: [{ email: 'joao.vieira@outlook.com', id: 'eml037' }],
  },
  {
    email: 'patricia.araujo@example.com',
    name: 'Patrícia Araújo',
    id: 'usr029',
    emails: [{ email: 'paty.araujo@gmail.com', id: 'eml038' }],
  },
  {
    email: 'andre.silveira@example.com',
    name: 'André Silveira',
    id: 'usr030',
    emails: [
      { email: 'andre.silveira@empresa.com', id: 'eml039' },
      { email: 'a.silveira@hotmail.com', id: 'eml040' },
    ],
  },
];

export function buscarUsuarios(pagina = 1, limite = 6) {
  if (pagina < 1) pagina = 1;
  if (limite < 1) limite = 1;

  const inicio = (pagina - 1) * limite;
  const fim = inicio + limite;

  return {
    data: fakeDatabase.slice(inicio, fim),
    page: pagina,
    total: fakeDatabase.length,
  };
}
