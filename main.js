
// main.js — Interatividade do site

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== DADOS DAS REDAÇÕES (15 redações) ==========
    const redacoes = [
        {
            tema: "O impacto das redes sociais na formação da identidade juvenil",
            nota: "9,5",
            texto: "As redes sociais transformaram a maneira como os jovens constroem sua identidade. Se, por um lado, possibilitam conexões e expressão, por outro, criam padrões inalcançáveis e pressão estética. É fundamental que a escola e a família orientem sobre o uso consciente dessas plataformas, promovendo autoconsciência e pensamento crítico diante dos algoritmos que moldam comportamentos."
        },
        {
            tema: "Caminhos para combater a desinformação no Brasil",
            nota: "9,0",
            texto: "A desinformação é um dos maiores desafios da era digital. Fake news se espalham mais rápido que notícias verificadas, comprometendo a democracia e a saúde pública. Para combatê-la, é necessário investir em educação midiática nas escolas, fortalecer agências de checagem e responsabilizar plataformas por conteúdos comprovadamente falsos, sem cercear a liberdade de expressão."
        },
        {
            tema: "A importância da leitura literária na formação do senso crítico",
            nota: "10,0",
            texto: "A literatura permite vivenciar outras realidades e desenvolver empatia. Ao ler, o aluno amplia vocabulário, compreende estruturas narrativas e questiona o mundo. Escolas que mantêm bibliotecas ativas e projetos de leitura formam cidadãos mais críticos e sensíveis. Portanto, políticas públicas de incentivo ao livro são essenciais para uma educação transformadora."
        },
        {
            tema: "Desafios da inclusão de alunos com deficiência no ensino regular",
            nota: "8,5",
            texto: "A inclusão escolar ainda enfrenta barreiras arquitetônicas, pedagógicas e atitudinais. Professores precisam de formação continuada e material adaptado. Além disso, a comunidade escolar deve combater o preconceito. A Lei Brasileira de Inclusão representou avanço, mas sua efetivação depende de investimento e compromisso de todos."
        },
        {
            tema: "O papel do esporte na vida dos jovens",
            nota: "9,0",
            texto: "O esporte desenvolve disciplina, trabalho em equipe e saúde física e mental. Projetos esportivos em comunidades carentes afastam jovens da criminalidade e ampliam horizontes. No entanto, faltam políticas de incentivo e espaços adequados. Investir no esporte é investir em cidadania e qualidade de vida."
        },
        {
            tema: "Sustentabilidade: pequenas atitudes, grandes resultados",
            nota: "9,5",
            texto: "A crise climática exige mudanças individuais e coletivas. Separar o lixo, economizar água e reduzir o consumo de plástico são atitudes que, somadas, geram impacto. Mas é preciso cobrar políticas públicas e responsabilidade das empresas. A educação ambiental desde a infância forma uma geração mais consciente."
        },
        {
            tema: "A valorização dos professores no Brasil",
            nota: "8,0",
            texto: "Professores enfrentam baixos salários, falta de estrutura e desrespeito. Valorizar a carreira docente implica melhores condições de trabalho, plano de carreira atrativo e formação continuada. Sem professores motivados, não há educação de qualidade. A sociedade precisa reconhecer seu papel fundamental."
        },
        {
            tema: "Juventude e saúde mental: um olhar necessário",
            nota: "9,5",
            texto: "Ansiedade e depressão crescem entre jovens, agravadas pela pandemia e pressão social. É urgente ampliar o acesso a atendimento psicológico nas escolas e combater o estigma. Falar sobre saúde mental salva vidas. Famílias e educadores devem acolher sem julgar."
        },
        {
            tema: "O combate ao trabalho infantil no Brasil",
            nota: "9,0",
            texto: "Apesar das leis, o trabalho infantil ainda atinge milhões de crianças, privando-as da escola e da infância. A pobreza é a raiz do problema. Programas de transferência de renda e fiscalização eficiente são essenciais. Toda criança tem direito a brincar e estudar."
        },
        {
            tema: "A influência da arte na sociedade",
            nota: "10,0",
            texto: "A arte é expressão e resistência. Ela questiona padrões, emociona e provoca reflexão. Movimentos artísticos impulsionaram mudanças políticas e sociais ao longo da história. Investir em cultura é investir na identidade de um povo. Sem arte, a sociedade perde sua alma."
        },
        {
            tema: "Desafios da mobilidade urbana nas grandes cidades",
            nota: "8,5",
            texto: "O trânsito caótico e o transporte público precário afetam a qualidade de vida. Soluções incluem investimento em metrôs, ciclovias e integração de modais. Além disso, é preciso desestimular o uso do carro individual e planejar cidades mais humanas."
        },
        {
            tema: "A ética na era da inteligência artificial",
            nota: "9,0",
            texto: "A IA traz avanços, mas também riscos: viés algorítmico, desemprego e privacidade. É necessário criar marcos regulatórios que garantam transparência e responsabilidade. A tecnologia deve servir ao bem comum, nunca ampliar desigualdades."
        },
        {
            tema: "Voluntariado: transformando vidas",
            nota: "9,5",
            texto: "O voluntariado fortalece laços comunitários e desenvolve empatia. Ao doar tempo e conhecimento, o indivíduo contribui para uma sociedade mais justa e descobre novas perspectivas. Escolas podem incentivar projetos sociais desde cedo."
        },
        {
            tema: "A preservação das culturas indígenas no Brasil",
            nota: "9,0",
            texto: "Os povos indígenas enfrentam ameaças constantes a suas terras e tradições. A demarcação de territórios e a valorização de suas línguas e saberes são urgentes. A diversidade cultural é patrimônio de toda a humanidade."
        },
        {
            tema: "O papel da família na educação escolar",
            nota: "9,5",
            texto: "A parceria entre família e escola potencializa o aprendizado. Pais que acompanham tarefas e participam de reuniões demonstram interesse e motivam os filhos. Diálogo e presença são ferramentas poderosas na formação integral do estudante."
        }
    ];

    // ========== NAVEGAÇÃO ENTRE AS SEÇÕES (BOTÕES) ==========
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.timeline-section');

    function activateSection(targetId) {
        sections.forEach(sec => sec.classList.remove('active'));
        navButtons.forEach(btn => btn.classList.remove('active'));

        const targetSection = document.getElementById(targetId);
        if (targetSection) targetSection.classList.add('active');

        const targetButton = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
        if (targetButton) targetButton.classList.add('active');
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            activateSection(target);
        });
    });

    // ========== RENDERIZAR OS CARDS DO PORTFÓLIO ==========
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (portfolioGrid) {
        redacoes.forEach((redacao, index) => {
            const card = document.createElement('div');
            card.className = 'redacao-card';
            card.setAttribute('data-index', index);
            card.innerHTML = `
                <span class="tema">${redacao.tema}</span>
                <span class="nota">${redacao.nota}</span>
            `;
            portfolioGrid.appendChild(card);
        });
    }

    // ========== MODAL DE LEITURA ==========
    const modal = document.getElementById('redacaoModal');
    const modalTema = document.getElementById('modalTema');
    const modalNota = document.getElementById('modalNota');
    const modalTexto = document.getElementById('modalTexto');
    const closeModal = document.querySelector('.close-modal');

    // Abrir modal ao clicar em um card
    document.querySelectorAll('.redacao-card').forEach(card => {
        card.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const redacao = redacoes[index];
            modalTema.textContent = redacao.tema;
            modalNota.textContent = `Nota: ${redacao.nota}`;
            modalTexto.textContent = redacao.texto;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Fechar modal
    function fecharModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeModal.addEventListener('click', fecharModal);

    // Fechar ao clicar fora do conteúdo
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            fecharModal();
        }
    });

    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            fecharModal();
        }
    });

    // ========== BOTÃO SURPRESA (MENSAGEM ALEATÓRIA) ==========
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseMessageDiv = document.getElementById('surpriseMessage');

    const mensagens = [
        "🌟 Cada tropeço foi um degrau para chegar até aqui!",
        "💜 Os amigos que fiz na escola são para a vida toda.",
        "📚 Estudar cansa, mas a formatura compensa cada noite em claro.",
        "😄 Lembra daquela risada no meio da aula? Nunca vou esquecer!",
        "🚀 O futuro é logo ali, mas nossa história já é linda.",
        "✨ Professores que marcaram: eles sabem quem são. Gratidão!",
        "🍀 Sorte de ter vivido tudo isso com vocês, turma!",
        "🏆 O maior troféu é olhar para trás e ver o quanto crescemos.",
        "🎓 Do jardim de infância ao 3º ano: uma jornada e tanto!",
        "💙 Roxo e azul combinam com as cores das nossas memórias."
    ];

    let ultimaMensagemIndex = -1;

    surpriseBtn.addEventListener('click', function() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * mensagens.length);
        } while (randomIndex === ultimaMensagemIndex && mensagens.length > 1);
        
        ultimaMensagemIndex = randomIndex;
        const mensagem = mensagens[randomIndex];
        
        surpriseMessageDiv.style.opacity = '0';
        setTimeout(() => {
            surpriseMessageDiv.textContent = mensagem;
            surpriseMessageDiv.style.opacity = '1';
        }, 150);
        
        surpriseBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            surpriseBtn.style.transform = 'scale(1)';
        }, 200);
    });

    // ========== INICIAR COM A PRIMEIRA SEÇÃO ATIVA ==========
    const activeNav = document.querySelector('.nav-btn.active');
    if (!activeNav) {
        const firstBtn = document.querySelector('.nav-btn');
        if (firstBtn) {
            const firstTarget = firstBtn.getAttribute('data-target');
            activateSection(firstTarget);
        }
    }

    console.log('Site carregado com sucesso! 💜💙');
});
