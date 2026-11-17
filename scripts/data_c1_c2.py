# -*- coding: utf-8 -*-
"""
Evet - Níveis C1 e C2 (16 Lições de Nível Superior e Maestria Literária)
100% em Português com análise filológica, etimológica e estilística.
"""

C1_LESSONS = [
    {
        "id": "lesson-c1-01-tempos-compostos-modais",
        "level": "C1",
        "levelLabel": "Avançado C1",
        "title": "Tempos Compostos Duplos: Pretérito Imperfeito (-iyordu) e Mais-que-perfeito (-mişti)",
        "category": "Morfologia Verbal Avançada",
        "readTimeMinutes": 12,
        "summary": "Domine a sobreposição de sufixos de tempo para narrar ações que costumavam acontecer ou eventos anteriores a outro evento passado.",
        "theory": """No nível C1, os tempos verbais turcos combinam dois marcadores temporais na mesma forma verbal:

### 1. Şimdiki Zamanın Hikâyesi (-iyordu): O Pretérito Imperfeito
Expressa uma ação contínua no passado ('eu estava fazendo' ou 'eu costumava fazer'):
- `İstanbul'da yaşarken her gün boğazda yürüyordum.` = Quando morava em Istambul, caminhava todos os dias pelo Bósforo.
- `Seni arayacaktım ama vaktim yoktu.` = Eu ia te ligar (futuro no passado: -ecekti), mas não tive tempo.

### 2. Geniş Zamanın Hikâyesi (-erdi / -irdi): Hábitos Passados
Equivale a 'costumava fazer':
- `Gençken çok futbol oynardım.` = Quando jovem, jogava muito futebol.

### 3. Mais-que-perfeito (-mişti / -mişti):
Expressa uma ação já concluída antes de outro marco temporal no passado:
- `Tren çoktan gitmişti.` = O trem já havia partido.
- `O kitabı daha önce okumuştum.` = Eu já tinha lido aquele livro antes.""",
        "tables": [
            {
                "title": "Quadro dos Tempos Compostos em Turco",
                "headers": ["Tempo Composto", "Construção", "Exemplo", "Tradução em Português"],
                "rows": [
                    ["Passado Contínuo (Imperfeito)", "Verbo + iyor + du", "Bekliyordum", "Eu estava esperando / Eu esperava"],
                    ["Passado do Aoristo", "Verbo + er/ir + di", "Giderdim", "Eu costumava ir"],
                    ["Mais-que-perfeito", "Verbo + miş + ti", "Görmüştüm", "Eu já havia visto / Eu tinha visto"],
                    ["Futuro do Pretérito", "Verbo + ecek + ti", "Yapacaktım", "Eu ia fazer / Faria"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Çoktan", "portuguese": "Há muito tempo / Já", "pronunciation": "tçok-tan", "category": "Advérbios", "example": "Film çoktan başlamıştı. (O filme já tinha começado há muito.)"},
            {"turkish": "Eskiden", "portuguese": "Antigamente", "pronunciation": "es-ki-den", "category": "Tempo", "example": "Eskiden buralar hep tarlaydı. (Antigamente tudo isso aqui era campo.)"}
        ],
        "dialogues": [
            {"speaker": "Derya", "turkish": "Toplantıya neden gelmedin?", "portuguese": "Por que você não veio à reunião?"},
            {"speaker": "Kaan", "turkish": "Tam evden çıkıyordum ki elektrikler kesildi.", "portuguese": "Eu estava bem saindo de casa quando a energia acabou."}
        ],
        "tips": [
            "A construção '-ecekti' é a desculpa perfeita em turco: 'Gelecektim ama...' (Eu ia vir, mas...)."
        ]
    },
    {
        "id": "lesson-c1-02-evidenciais-compostos",
        "level": "C1",
        "levelLabel": "Avançado C1",
        "title": "Evidenciais Compostos e Nuances Epistêmicas (-mişmiş, -iyormuş)",
        "category": "Semântica & Pragmática",
        "readTimeMinutes": 11,
        "summary": "Aprenda a expressar ironia, ceticismo ('disse ele que fez...') e relato indireto de segunda mão.",
        "theory": """O turco permite empilhar o evidencial `-miş` para criar efeitos irônicos e narrativos refinados:

1. **Relato Indireto em Andamento (-iyormuş):**
   - `Ali evleniyormuş!` = Disseram que o Ali está se casando! (ouvi a notícia).
   - `Yeni bir iş arıyormuş.` = Dizem que ele está procurando emprego novo.

2. **O Duplo -miş (-mişmiş): Ironia e Descrédito:**
   - Quando alguém conta uma história duvidosa e você não acredita:
   - `Sınavı kazanmışmış!` = Ah, disse ele que passou na prova! (aham, sei...).
   - `Çok çalışıyormuşmuş!` = 'Trabalha muito', sei bem!

3. **Obrigação Evidencial (-meliymiş):**
   - `Doktor söyledi, her gün yürüyecekmişim.` = O médico disse que eu tenho que caminhar todo dia.""",
        "tables": [
            {
                "title": "Nuances dos Evidenciais Compostos",
                "headers": ["Sufixo Composto", "Nuance Comunicativa", "Exemplo", "Tradução"],
                "rows": [
                    ["-iyormuş", "Notícia que você ouviu", "İstanbul'a taşınıyormuş", "Fiquei sabendo que ele está se mudando para Istambul"],
                    ["-ecekmiş", "Intenção relatada por terceiro", "Yarın arayacakmış", "Ele disse que vai ligar amanhã"],
                    ["-mişmiş", "Sarcasmo / Dúvida sobre o que foi dito", "Beni arayacakmışmış", "Disse a madame que ia me ligar (duvido!)"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Sözde", "portuguese": "Supostamente / Dizem que", "pronunciation": "söz-de", "category": "Modais", "example": "Sözde gelecekti. (Supostamente ele viria.)"},
            {"turkish": "Meğerse", "portuguese": "Descobriu-se que / No fim das contas", "pronunciation": "me-yer-se", "category": "Conectivos", "example": "Meğerse haklıymış. (No fim das contas descobriu-se que ele tinha razão.)"}
        ],
        "dialogues": [
            {"speaker": "Banu", "turkish": "Patron maaşlara zam yapacakmış!", "portuguese": "Disseram que o patrão vai dar aumento nos salários!"},
            {"speaker": "Cem", "turkish": "Geçen yıl da yapacakmışmış, hiç sanmıyorum.", "portuguese": "Ano passado 'ia dar' também... duvido muito."}
        ],
        "tips": [
            "Use '-mişmiş' com moderação e tom brincalhão; é uma das formas mais nativas e expressivas do sarcasmo turco."
        ]
    },
    {
        "id": "lesson-c1-03-oracoes-concessivas",
        "level": "C1",
        "levelLabel": "Avançado C1",
        "title": "Orações Concessivas Complexas: -mesine rağmen, -(y)se bile",
        "category": "Sintaxe Avançada",
        "readTimeMinutes": 11,
        "summary": "Construa raciocínios concessivos avançados: 'mesmo que faça sol', 'apesar de não ter dinheiro', 'por mais que tente'.",
        "theory": """No nível C1, a concessão ('embora', 'mesmo que', 'apesar de') atinge maturidade estilística:

### 1. Verbo + -mesine / -masına rağmen (Apesar de fazer...):
Usa o substantivo verbal `-me` + possessivo de 3ª pessoa + dativo + `rağmen`:
- `Çok çalış**masına rağmen** sınavı geçemedi.` = Apesar de ele ter estudado muito, não passou na prova.
- `Hava soğuk ol**masına rağmen** denize girdi.` = Apesar de o tempo estar frio, entrou no mar.

### 2. -(y)se bile / -sa dahi (Mesmo que... / Ainda que...):
- `Kıyamet kop**sa bile** seni terk etmem.` = Mesmo que o mundo acabe, não te deixo.
- `Geç kal**sa da** sorun değil.` = Mesmo se ele atrasar, não tem problema.

### 3. Her ne kadar ... ise de (Por mais que... ainda assim):
Fórmula de alta retórica literária:
- `Her ne kadar zor olsa da başaracağız.` = Por mais difícil que seja, nós triunfaremos.""",
        "tables": [
            {
                "title": "Concessões Formais vs Coloquiais",
                "headers": ["Estrutura", "Registro", "Exemplo", "Tradução"],
                "rows": [
                    ["-mesine rağmen", "Formal / Padrão", "Yorulmasına rağmen durmadı", "Apesar de ter cansado, não parou"],
                    ["-se bile", "Conversacional / Enfático", "Özür dilese bile affetmem", "Mesmo se pedir desculpas, não perdoo"],
                    ["Her ne kadar...", "Literário / Chancelaria", "Her ne kadar reddetse de...", "Por mais que ele recuse..."]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Bile / Dahi", "portuguese": "Mesmo / Até mesmo", "pronunciation": "bi-le", "category": "Enfáticos", "example": "Çocuk bile bunu anlar. (Até uma criança entende isto.)"},
            {"turkish": "Rağmen", "portuguese": "Apesar de", "pronunciation": "raam-men", "category": "Concessivos", "example": "Bütün uyarılara rağmen. (Apesar de todos os avisos.)"}
        ],
        "dialogues": [
            {"speaker": "Avukat", "turkish": "Müvekkilim her ne kadar suçlamaları reddetse de deliller aleyhine.", "portuguese": "Por mais que meu cliente rejeite as acusações, as provas depõem contra ele."},
            {"speaker": "Hâkim", "turkish": "Tanık ifadelerine rağmen yeni bir rapor talep ediyoruz.", "portuguese": "Apesar dos depoimentos das testemunhas, solicitamos um novo laudo."}
        ],
        "tips": [
            "'-mesine rağmen' exige sempre o pronome ou substantivo com genitivo se o sujeito for explícito: 'benim söylememe rağmen' (apesar de eu ter dito)."
        ]
    },
    {
        "id": "lesson-c1-04-nominalizacoes-avancadas",
        "level": "C1",
        "levelLabel": "Avançado C1",
        "title": "Nominalizações Complexas: -ma/-me vs -mak/-mek vs -(y)ış/-(y)iş",
        "category": "Morfologia Nominal",
        "readTimeMinutes": 12,
        "summary": "Distinga o infinitivo neutro (-mak), a ação substantivada flexível (-ma) e o estilo/maneira de fazer (-iş).",
        "theory": """O turco possui três sufixos para transformar verbos em nomes:

1. **-mak / -mek (Infinitivo Estático):**
   - Nome puro do verbo, não aceita sufixos possessivos regulares:
   - `Sigara içmek sağlığa zararlıdır.` = Fumar cigarro é prejudicial à saúde.

2. **-ma / -me (Nome de Ação Flexível):**
   - Aceita todos os sufixos possessivos e casos gramaticais. Essencial para subordinar orações com verbos como *istemek* e *karar vermek*:
   - `Senin gel**me**ni istiyorum.` = Quero a tua vinda (Quero que você venha).
   - `Tatile git**me**ye karar verdik.` = Decidimos ir de férias.

3. **-(y)ış / -(y)iş / -(y)uş / -(y)üş (O Modo / Estilo de Ação):**
   - Descreve a forma estética ou particular como algo ocorre:
   - `Bakış` = O olhar / a maneira de olhar.
   - `Gülüş` = O sorriso / o jeito de sorrir.
   - `Güneşin batışı` = O pôr do sol.""",
        "tables": [
            {
                "title": "Comparação das Três Formas de Nominalização (Verbo Bakmak - Olhar)",
                "headers": ["Forma", "Sufixo", "Significado", "Exemplo de Uso"],
                "rows": [
                    ["Bakmak", "-mak (infinitivo)", "Olhar (o ato em si)", "Aynaya bakmak (Olhar no espelho)"],
                    ["Bakma", "-ma (ação flexível)", "O ato de olhar (com pessoa)", "Bana öyle bakmanı istemiyorum (Não quero que me olhe assim)"],
                    ["Bakış", "-ış (maneira/estilo)", "O olhar / expressão", "Sıcak bir bakış (Um olhar acolhedor)"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Bakış", "portuguese": "Olhar (estilo/expressão)", "pronunciation": "ba-kush", "category": "Substantivos", "example": "Gözlerindeki o bakış. (Aquele olhar em seus olhos.)"},
            {"turkish": "Gülüş", "portuguese": "Sorriso / Jeito de rir", "pronunciation": "gyu-lyush", "category": "Substantivos", "example": "Gülüşü çok güzel. (O sorriso dela é lindo.)"},
            {"turkish": "Gidiş", "portuguese": "Ida / Partida", "pronunciation": "gi-dish", "category": "Substantivos", "example": "Gidiş-dönüş bileti. (Bilhete de ida e volta.)"}
        ],
        "dialogues": [
            {"speaker": "Şair", "turkish": "Güneşin doğuşunu izledin mi hiç boğazda?", "portuguese": "Você já assistiu ao nascer do sol no Bósforo alguma vez?"},
            {"speaker": "Yazar", "turkish": "Evet, o anın insanın ruhuna dokunuşu tarif edilemez.", "portuguese": "Sim, o toque daquele instante na alma humana é indescritível."}
        ],
        "tips": [
            "Para dizer 'passagem de ida e volta', a expressão oficial é 'Gidiş-dönüş bileti'."
        ]
    },
    {
        "id": "lesson-c1-05-turco-formal-burocratico",
        "level": "C1",
        "levelLabel": "Avançado C1",
        "title": "Turco Formal, Chancelaria e Correspondência Oficial (Dilekçe)",
        "category": "Registro Formal",
        "readTimeMinutes": 13,
        "summary": "Aprenda a estrutura inviolável de um requerimento formal turco (Dilekçe), saudações protocolares e jargão corporativo.",
        "theory": """Na Turquia, a administração pública e as grandes corporações seguem um protocolo linguístico rigorosíssimo:

### 1. O Requerimento Formal (*Dilekçe*):
Qualquer solicitação oficial a uma universidade, prefeitura ou ministério exige o formato *Dilekçe*:
- **Cabeçalho:** Nome da instituição em maiúsculas (ex: `İSTANBUL ÜNİVERSİTESİ REKTÖRLÜĞÜNE`).
- **Corpo:** Fatos narrados em 3ª pessoa ou com verbos passivos (`... arz ederim`).
- **Fecho Obrigatório:**
  - De inferior para superior hierárquico: `Bilgilerinize arz ederim.` (Submeto respeitosamente ao vosso conhecimento).
  - De superior para subordinado: `Gereğini rica ederim.` (Solicito que seja feito o necessário).
  - Entre pares de mesmo nível: `Arz ve rica ederim.`

### 2. Expressões Corporativas Essenciais:
- `Saygılarımla` = Com meus respeitos / Atenciosamente.
- `Gereğinin yapılmasını arz ederim` = Solicito que sejam tomadas as medidas cabíveis.
- `Ekte bilgilerinize sunulmuştur` = Anexo para vossa apreciação.""",
        "tables": [
            {
                "title": "Fórmulas de Encerramento Oficial",
                "headers": ["Fórmula", "Relação Hierárquica", "Significado Literal", "Equivalente em Português"],
                "rows": [
                    ["Arz ederim", "Cidadão ➔ Autoridade", "Apresento humildemente", "Termos em que pede deferimento"],
                    ["Rica ederim", "Autoridade ➔ Cidadão", "Peço com autoridade", "Determino que se cumpra"],
                    ["Saygılarımla", "Empresarial / Geral", "Com meus respeitos", "Atenciosamente"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Dilekçe", "portuguese": "Petição / Requerimento formal", "pronunciation": "di-lek-tçe", "category": "Burocracia", "example": "Dilekçeyi imzaladım. (Assinei a petição.)"},
            {"turkish": "Arz etmek", "portuguese": "Submeter com respeito", "pronunciation": "arz et-mek", "category": "Formal", "example": "Bilgilerinize arz ederim. (Submeto ao vosso conhecimento.)"},
            {"turkish": "Saygılarımla", "portuguese": "Atenciosamente / Com respeito", "pronunciation": "say-gu-la-rum-la", "category": "Formal", "example": "Saygılarımla, Ahmet Yılmaz. (Atenciosamente, Ahmet Yılmaz.)"}
        ],
        "dialogues": [
            {"speaker": "Memur", "turkish": "Başvurunuz için dilekçeniz var mı?", "portuguese": "O senhor tem o seu requerimento formal para a inscrição?"},
            {"speaker": "Vatandaş", "turkish": "Evet, tüm belgelerim ve ıslak imzalı dilekçem burada.", "portuguese": "Sim, todos os meus documentos e o requerimento com assinatura física estão aqui."}
        ],
        "tips": [
            "Em correspondência comercial turca, jamais termine uma carta para uma autoridade com 'rica ederim', pois isso soa como uma ordem de um chefe!"
        ]
    },
    {
        "id": "lesson-c1-06-regencia-verbal-avancada",
        "level": "C1",
        "levelLabel": "Avançado C1",
        "title": "Regência Verbal Avançada e Peculiaridades de Casos Nominais",
        "category": "Sintaxe & Regência",
        "readTimeMinutes": 12,
        "summary": "Evite os erros mais comuns de falantes de línguas latinas dominando quais verbos turcos exigem dativo, ablativo ou acusativo.",
        "theory": """Muitos verbos turcos exigem um caso gramatical completamente diferente do português. Não traduza as preposições ao pé da letra!

### 1. Verbos que exigem DATIVO (-(y)e) em turco (mas que em português usamos objeto direto):
- **Yardım etmek** (ajudar): `Bana yardım et` (Me ajude - literal: faça ajuda A mim).
- **Başlamak** (começar): `İşe başladım` (Comecei o trabalho - literal: comecei AO trabalho).
- **Güvenmek** (confiar): `Sana güveniyorum` (Confio em você - literal: confio A você).
- **İnanmak** (acreditar): `Bana inan!` (Acredite em mim!).
- **Binmek** (embarcar / subir): `Otobüse bindim` (Subi no ônibus - literal: subi AO ônibus).

### 2. Verbos que exigem ABLATIVO (-den) em turco:
- **Korkmak** (ter medo): `Köpekten korkuyorum` (Tenho medo de cachorro).
- **Nefret etmek** (odiar): `Yalandan nefret ederim` (Odeio mentira).
- **Hoşlanmak** (gostar de): `Müzikten hoşlanırım` (Gosto de música).
- **Bahsetmek** (falar sobre / mencionar): `Ondan bahsettik` (Falamos sobre ele/dela).""",
        "tables": [
            {
                "title": "Quadro de Regência Contrastiva: Turco vs Português",
                "headers": ["Verbo Turco", "Caso Exigido em Turco", "Construção em Português", "Exemplo Correto em Turco"],
                "rows": [
                    ["Hoşlanmak", "Ablativo (-den)", "Gostar de (preposição de)", "Senden hoşlanıyorum (Gosto de você)"],
                    ["Korkmak", "Ablativo (-den)", "Ter medo de", "Karanlıktan korkarım (Tenho medo do escuro)"],
                    ["Binmek", "Dativo (-(y)e)", "Subir em / Pegar (ônibus/trem)", "Trene bindi (Pegou o trem)"],
                    ["Yardım etmek", "Dativo (-(y)e)", "Ajudar alguém (objeto direto)", "Yaşlılara yardım etti (Ajudou os idosos)"],
                    ["Nefret etmek", "Ablativo (-den)", "Odiar (objeto direto)", "Savaştan nefret ediyoruz (Odiamos a guerra)"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Güvenmek", "portuguese": "Confiar (+ Dativo)", "pronunciation": "gyu-ven-mek", "category": "Verbos", "example": "Sana tüm kalbimle güveniyorum. (Confio em você com todo o meu coração.)"},
            {"turkish": "Hoşlanmak", "portuguese": "Gostar (+ Ablativo)", "pronunciation": "hosh-lan-mak", "category": "Verbos", "example": "Türk mutfağından çok hoşlanıyorum. (Gosto muito da culinária turca.)"}
        ],
        "dialogues": [
            {"speaker": "Aylin", "turkish": "Uçaktan korkuyor musun?", "portuguese": "Você tem medo de avião?"},
            {"speaker": "Cem", "turkish": "Eskiden korkardım ama artık alıştım.", "portuguese": "Antigamente eu tinha medo, mas agora já me acostumei."}
        ],
        "tips": [
            "Memorize sempre o verbo acompanhado do seu caso: 'birine yardım etmek' (dativo), 'bir şeyden korkmak' (ablativo)."
        ]
    },
    {
        "id": "lesson-c1-07-proverbios-culturais-c1",
        "level": "C1",
        "levelLabel": "Avançado C1",
        "title": "Provérbios Turcos Essenciais (Atasözleri) no Debate Social",
        "category": "Sabedoria Tradicional",
        "readTimeMinutes": 11,
        "summary": "Enriqueça seu discurso com os provérbios turcos mais citados em editoriais, conversas intelectuais e debates.",
        "theory": """Os provérbios (*Atasözleri* - palavras dos antepassados) são a síntese poética de milênios de sabedoria nômade e anatólica:

1. **Damlaya damlaya göl olur.**
- *Literal:* Gota a gota se forma um lago.
- *Sentido:* Economias pequenas e esforços consistentes constroem grandes fortunas.

2. **Tatlı dil yılanı deliğinden çıkarır.**
- *Literal:* A língua doce tira a serpente do seu buraco.
- *Sentido:* Palavras gentis e corteses desarmam até os inimigos mais ferozes.

3. **Gözden ırak olan gönülden de ırak olur.**
- *Literal:* Quem está longe dos olhos fica longe do coração.
- *Sentido:* Longe dos olhos, longe do coração.

4. **Ayağını yorganına göre uzat.**
- *Literal:* Estique seus pés de acordo com o seu cobertor.
- *Sentido:* Viva dentro do seu orçamento financeiro.""",
        "tables": [
            {
                "title": "Provérbios e Seus Equivalentes em Português",
                "headers": ["Atasözü (Provérbio Turco)", "Tradução Literal", "Equivalente em Português"],
                "rows": [
                    ["Damlaya damlaya göl olur", "Gota a gota vira lago", "De grão em grão a galinha enche o papo"],
                    ["Acele işe şeytan karışır", "O diabo se intromete em trabalho apressado", "A pressa é inimiga da perfeição"],
                    ["Gülme komşuna, gelir başına", "Não ria do teu vizinho, vai acontecer com você", "Quem ri por último ri melhor / Não cuspa para cima"],
                    ["Ev alma, komşu al", "Não compre a casa, compre o vizinho", "Mais vale um bom vizinho que um irmão distante"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Atasözü", "portuguese": "Provérbio / Ditado", "pronunciation": "a-ta-sö-zyu", "category": "Cultura", "example": "Eski bir Türk atasözü der ki... (Diz um velho provérbio turco que...)"},
            {"turkish": "Deyim", "portuguese": "Expressão idiomática", "pronunciation": "de-yim", "category": "Linguística", "example": "Bu deyim çok kullanılır. (Esta expressão é muito usada.)"}
        ],
        "dialogues": [
            {"speaker": "Dede", "turkish": "Oğlum, bütçeni aşma, ayağını yorganına göre uzat.", "portuguese": "Meu filho, não extrapole o orçamento, estique os pés de acordo com o cobertor."},
            {"speaker": "Torun", "turkish": "Haklısın dedeciğim, tutumlu olacağım.", "portuguese": "O senhor tem razão vovô, serei econômico."}
        ],
        "tips": [
            "Em discursos públicos ou redações formais na Turquia, abrir ou fechar com um 'atasözü' confere autoridade instantânea ao argumento."
        ]
    },
    {
        "id": "lesson-c1-08-literatura-sabahattin-pamuk",
        "level": "C1",
        "levelLabel": "Avançado C1",
        "title": "Leitura Literária Avançada: De Sabahattin Ali a Orhan Pamuk",
        "category": "Literatura Turca",
        "readTimeMinutes": 14,
        "summary": "Analise trechos literários clássicos e compreenda o vocabulário poético e existencial das grandes obras turcas.",
        "theory": """A literatura turca do século XX e XXI é marcada pela tensão entre Oriente e Ocidente, memória e melancolia (*Hüzün*):

### 1. Sabahattin Ali e 'Kürk Mantolu Madonna' (1943):
A obra mais lida da literatura turca moderna. Explora o isolamento interior e o encontro com a alma gêmea:
> *"Dünyada bana hiçbir şey, tabiatın bir insana bir başkası vasıtasıyla söylediklerini dinlemek kadar derin bir haz vermemişti."*
(Nada no mundo me havia dado um prazer tão profundo quanto escutar o que a natureza diz a uma pessoa por intermédio de outra.)

### 2. Orhan Pamuk e o Conceito de 'Hüzün':
Em seu livro *İstanbul: Hatıralar ve Şehir*, o vencedor do Prêmio Nobel de Literatura descreve a melancolia coletiva que cobre a antiga capital imperial:
- **Hüzün:** Não é uma tristeza individual patológica, mas um sentimento estético e poético compartilhado por todos os habitantes diante das glórias do passado e da passagem do tempo.""",
        "tables": [
            {
                "title": "Grandes Nomes das Letras Turcas",
                "headers": ["Autor", "Obra Notável", "Período", "Temática Central"],
                "rows": [
                    ["Sabahattin Ali", "Kürk Mantolu Madonna", "Século XX (1943)", "Solidão, sensibilidade e profundidade psicológica"],
                    ["Nazım Hikmet", "Memleketimden İnsan Manzaraları", "Século XX", "Poesia social, humanismo e vanguarda"],
                    ["Orhan Pamuk", "Benim Adım Kırmızı / Kar", "Século XXI (Nobel)", "Identidade turca, miniaturas otomanas e hüzün"],
                    ["Yaşar Kemal", "İnce Memed", "Século XX", "A vida árdua e heroica na Anatólia camponesa"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Hüzün", "portuguese": "Melancolia profunda / Saudade poética", "pronunciation": "hyu-zyun", "category": "Conceitos Culturais", "example": "İstanbul'un sokaklarında hüzün var. (Há uma melancolia nas ruas de Istambul.)"},
            {"turkish": "Şiir", "portuguese": "Poema / Poesia", "pronunciation": "shi-ir", "category": "Literatura", "example": "Nazım Hikmet'in şiirleri. (Os poemas de Nazım Hikmet.)"}
        ],
        "dialogues": [
            {"speaker": "Okur", "turkish": "Kürk Mantolu Madonna'yı okudun mu?", "portuguese": "Você leu 'A Madonna com Casaco de Peles'?"},
            {"speaker": "Eleştirmen", "turkish": "Evet, insanın iç dünyasını bu kadar zarif anlatan az roman vardır.", "portuguese": "Sim, há poucos romances que descrevam o mundo interior humano com tanta elegância."}
        ],
        "tips": [
            "A palavra 'Hüzün' é para os turcos o que a 'Saudade' é para os falantes de português: um estado de espírito intraduzível em toda a sua plenitude."
        ]
    }
]

C2_LESSONS = [
    {
        "id": "lesson-c2-01-etimologia-raizes",
        "level": "C2",
        "levelLabel": "Maestria C2",
        "title": "Etimologia do Turco: Raízes Túrquicas, Camadas Árabes/Persas e o Öztürkçe",
        "category": "Filologia & História",
        "readTimeMinutes": 14,
        "summary": "Mergulhe na estratigrafia histórica do vocabulário turco: das estepes da Ásia Central aos palácios otomanos e aos neologismos republicanos.",
        "theory": """O léxico turco é uma tapeçaria milenar com quatro grandes estratos linguísticos:

1. **O Estrato Túrquico Nativo (Öztürkçe):**
   - Palavras curtas, concretas e conectadas à natureza, anatomia e laços familiares: *su* (água), *göz* (olho), *anne* (mãe), *at* (cavalo), *dağ* (montanha).

2. **O Estrato Árabe (Língua da Religião, Ciência e Direito Otomano):**
   - Palavras com raiz trilateral consonantal semítica: *kitap* (raiz k-t-b: escrever), *hukuk* (direito/leis), *adalet* (justiça), *fikir* (ideia).

3. **O Estrato Persa (Língua da Poesia, Alta Cultura e Gastronomia):**
   - *Can* (alma/vida), *aşk* (amor apaixonado), *bahçe* (jardim), *rüzgâr* (vento), *çarşı* (mercado).

4. **Os Neologismos da Reforma Republicana (Dil Devrimi):**
   - Criados a partir de 1932 para substituir arabismos:
   - *Mektep* (árabe) ➔ Substituído por **Okul** (criado do verbo *okumak* = ler/estudar).
   - *Muallim* (árabe) ➔ Substituído por **Öğretmen** (do verbo *öğretmek*).
   - *Tayyare* (árabe) ➔ Substituído por **Uçak** (do verbo *uçmak* = voar).""",
        "tables": [
            {
                "title": "Camadas Etimológicas em Pares Sinônimos",
                "headers": ["Termo Árabe / Otomano", "Termo Moderno (Öztürkçe)", "Significado em Português"],
                "rows": [
                    ["Mektep", "Okul", "Escola"],
                    ["Muallim", "Öğretmen", "Professor"],
                    ["Talebe", "Öğrenci", "Aluno / Estudante"],
                    ["Cevap", "Yanıt", "Resposta"],
                    ["Sual", "Soru", "Pergunta / Dúvida"],
                    ["Şehir (persa)", "Kent", "Cidade"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Öztürkçe", "portuguese": "Turco puro (vocabulário nativo túrquico)", "pronunciation": "öz-tyurk-tçe", "category": "Linguística", "example": "Öztürkçe kelimeler kullandı. (Ele usou palavras do turco nativo.)"},
            {"turkish": "Köken", "portuguese": "Origem / Raiz etimológica", "pronunciation": "kö-ken", "category": "Filologia", "example": "Kelimenin kökeni nedir? (Qual é a etimologia da palavra?)"}
        ],
        "dialogues": [
            {"speaker": "Filolog", "turkish": "Türk Dil Kurumu'nun en büyük başarısı halkın konuştuğu dili yazı diliyle birleştirmesidir.", "portuguese": "O maior feito da Sociedade da Língua Turca foi unir a língua falada pelo povo com a língua escrita."},
            {"speaker": "Öğrenci", "turkish": "Böylece Osmanlıca ile Cumhuriyet Türkçesi arasındaki uçurum kapandı.", "portuguese": "Assim se fechou o abismo entre o turco otomano e o turco republicano."}
        ],
        "tips": [
            "Muitos escritores eruditos usam ambos os pares intencionalmente: 'soru ve sual' ou 'yanıt ve cevap' para criar riqueza e ritmo na prosa."
        ]
    },
    {
        "id": "lesson-c2-02-reforma-linguistica-1928",
        "level": "C2",
        "levelLabel": "Maestria C2",
        "title": "A Grande Revolução Linguística (Dil Devrimi) e a Teoria da Língua-Sol",
        "category": "História Sociolinguística",
        "readTimeMinutes": 13,
        "summary": "Compreenda a transformação sociolinguística mais radical do século XX: a fundação do Türk Dil Kurumu e a alfabetização em massa.",
        "theory": """A **Reforma Linguística Turca** (*Dil Devrimi*) foi um fenômeno sem precedentes na história moderna:

### O Problema do Turco Otomano (Osmanlıca):
O turco otomano era uma língua híbrida complexa: gramática túrquica mesclada com construções e léxico árabe e persa que apenas 5% a 8% da elite burocrática dominava. O povo anatólico comum não compreendia os éditos imperiais nem os livros oficiais.

### As Etapas da Reforma de Atatürk:
1. **1928 - A Revolução das Letras (*Harf Devrimi*):**
   - Em questão de meses, escolas móveis (*Millet Mektepleri*) foram abertas em todo o país. O próprio Atatürk viajou pelo interior com uma lousa e giz ensinando as 29 letras latinas a camponeses e operários. Em poucos anos, a taxa de alfabetização subiu meteoricamente.
2. **1932 - Fundação do Türk Dil Kurumu (TDK):**
   - Linguistas foram enviados a aldeias remotas para coletar palavras nativas esquecidas (*Derleme Sözlüğü*).
   - Foram forjados termos científicos modernos com sufixos túrquicos: *üçgen* (triângulo), *boyut* (dimensão), *bilgisayar* (computador - literalmente: contador de informações).""",
        "tables": [
            {
                "title": "Termos Científicos Cunhados pelo Próprio Atatürk",
                "headers": ["Termo Otomano Antigo", "Palavra Criada por Atatürk", "Significado em Português"],
                "rows": [
                    ["Müselles", "Üçgen", "Triângulo"],
                    ["Murabba", "Kare", "Quadrado"],
                    ["Zaviye", "Açı", "Ângulo"],
                    ["Hatt-ı müstakim", "Doğru", "Reta"],
                    ["Kutur", "Çap", "Diâmetro"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Devrim", "portuguese": "Revolução", "pronunciation": "dev-rim", "category": "História", "example": "Harf Devrimi 1928'de yapıldı. (A Revolução das Letras foi realizada em 1928.)"},
            {"turkish": "Bilgisayar", "portuguese": "Computador (Lit: contador de informações)", "pronunciation": "bil-gi-sa-yar", "category": "Tecnologia", "example": "Bilgisayar mühendisliği. (Engenharia da computação.)"}
        ],
        "dialogues": [
            {"speaker": "Tarihçi", "turkish": "Atatürk'ün geometri kitabını kendi eliyle yazdığını biliyor muydunuz?", "portuguese": "O senhor sabia que Atatürk escreveu o livro de geometria com as próprias mãos?"},
            {"speaker": "Öğretmen", "turkish": "Evet, bugün kullandığımız 'üçgen', 'açı', 'kenar' terimlerinin hepsi onun mirasıdır.", "portuguese": "Sim, os termos 'triângulo', 'ângulo', 'lado' que usamos hoje são todos herança dele."}
        ],
        "tips": [
            "A palavra 'bilgisayar' (computador) é considerada um dos maiores sucessos de criação lexical do TDK, rejeitando o empréstimo 'computer' em favor de uma raiz turca pura."
        ]
    },
    {
        "id": "lesson-c2-03-estilistica-inversao",
        "level": "C2",
        "levelLabel": "Maestria C2",
        "title": "Estilística Literária: Frase Invertida (Devrik Cümle) e Ritmo Poético",
        "category": "Estilística Avançada",
        "readTimeMinutes": 12,
        "summary": "Quebre a ordem rígida Sujeito-Objeto-Verbo para criar efeitos de ritmo, ênfase teatral e beleza lírica.",
        "theory": """A regra gramatical padrão do turco é a ordem **SOV** (Sujeito + Objeto + Verbo no final). Porém, na conversação cotidiana expressiva e na alta literatura, usa-se a **Devrik Cümle** (frase invertida), onde o verbo vem antes ou no meio:

### Exemplos Comparativos:
- **Frase Padrão (Kurallı Cümle):**
  - `Seni dün sokakta gördüm.` (Vi você ontem na rua - verbo no final).
- **Frase Invertida Estilística (Devrik Cümle):**
  - `Gördüm seni dün sokakta!` (Dá destaque dramático ao ato de ver!).
  - `Geldim işte, kapındayım.` (Cheguei enfim, estou à sua porta).

### Por que os Nativos e Poetas Usam:
1. **Foco e Ênfase:** O que vem imediatamente antes do verbo ganha ênfase primária, mas colocar o verbo no início projeta ação imediata.
2. **Ritmo Melódico e Poético:** Na poesia turca moderna (Garip, İkinci Yeni), a inversão verbal liberta o poema da rigidez da métrica.""",
        "tables": [
            {
                "title": "Ordem Normal (Kurallı) vs Frase Invertida (Devrik)",
                "headers": ["Ordem Padrão (SOV)", "Frase Invertida (Devrik Cümle)", "Efeito Expressivo"],
                "rows": [
                    ["Yağmur yağıyor.", "Yağıyor yağmur.", "Ênfase sensorial na chuva caindo"],
                    ["Seni hiç unutmadım.", "Unutmadım seni hiç.", "Intensidade emocional da memória"],
                    ["Eve gidiyorum artık.", "Gidiyorum artık eve.", "Urgência do movimento de partida"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Devrik cümle", "portuguese": "Frase com inversão sintática", "pronunciation": "dev-rik djüm-le", "category": "Gramática", "example": "Şiirlerde çok devrik cümle vardır. (Nos poemas há muitas frases invertidas.)"},
            {"turkish": "Vurgu", "portuguese": "Ênfase / Acento tônico", "pronunciation": "vur-gu", "category": "Linguística", "example": "Vurgu kelimenin sonundadır. (A ênfase está no final da palavra.)"}
        ],
        "dialogues": [
            {"speaker": "Şair", "turkish": "Bitti o güzel günler, kaldı geriye sadece anılar.", "portuguese": "Acabaram aqueles belos dias, restaram apenas memórias."},
            {"speaker": "Dost", "turkish": "Ne güzel söyledin, şiir gibi konuştun yine.", "portuguese": "Que belo modo de dizer, você falou como poesia de novo."}
        ],
        "tips": [
            "Na prova de proficiência formal TÖMER (C1/C2), use frases padrão (SOV). Em crônicas, cartas pessoais e literatura, solte a 'devrik cümle' para soar como um autor nativo."
        ]
    },
    {
        "id": "lesson-c2-04-proverbios-arcaicos",
        "level": "C2",
        "levelLabel": "Maestria C2",
        "title": "Provérbios Filosóficos Arcaicos (Dede Korkut e a Tradição Sufi)",
        "category": "Sabedoria Milenar",
        "readTimeMinutes": 13,
        "summary": "Explore a sabedoria ancestral das epopeias de Dede Korkut e a poesia mística de Yunus Emre e Rumi.",
        "theory": """No nível C2, a língua se confunde com a filosofia e a espiritualidade anatólica:

### 1. A Tradição Sufi de Yunus Emre (Século XIII):
Yunus Emre foi o primeiro a escrever alta poesia mística em turco anatólico puro, em vez do árabe ou persa das cortes:
> *"Sevelim, sevilelim; dünya kimseye kalmaz."*
(Amemos e sejamos amados; este mundo não fica para ninguém.)

### 2. Dede Korkut e a Ética Heroica Nômade:
As histórias do Livro de Dede Korkut representam o alicerce moral dos povos túrquicos:
- `Eski pamuk bez olmaz, eski düşman dost olmaz.` = Algodão velho não vira tecido nobre; velho inimigo não se torna amigo sincero.
- `Ağır taş yerinden oynamaz.` = Pedra pesada não sai do lugar com qualquer sopro (o sábio mantém serenidade imutável perante as adversidades).""",
        "tables": [
            {
                "title": "Máximas Filosóficas da Sabedoria Anatólica",
                "headers": ["Máxima / Provérbio", "Autor / Origem", "Tradução Literal", "Significado Filosófico"],
                "rows": [
                    ["İlim ilim bilmektir, ilim kendin bilmektir", "Yunus Emre", "Ciência é saber ciência; ciência é conhecer a si mesmo", "O autoconhecimento é o ápice de todo saber"],
                    ["Gel, ne olursan ol yine gel", "Mevlânâ Rumi", "Venha, sejas quem fores, vem de novo", "Tolerância e amor universal incondicional"],
                    ["Ağır taş yerinden oynamaz", "Dede Korkut", "Pedra pesada não sai do lugar", "Dignidade, peso moral e firmeza inabalável"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Tasavvuf", "portuguese": "Sufismo / Mística islâmica", "pronunciation": "ta-sav-vuf", "category": "Filosofia", "example": "Anadolu tasavvuf kültürü. (A cultura sufi da Anatólia.)"},
            {"turkish": "Hoşgörü", "portuguese": "Tolerância / Benevolência", "pronunciation": "hosh-gö-ryu", "category": "Valores", "example": "Mevlânâ'nın hoşgörü felsefesi. (A filosofia de tolerância de Rumi.)"}
        ],
        "dialogues": [
            {"speaker": "Hoca", "turkish": "Yunus Emre'nin Türkçe sevgisi neden bu kadar mühimdir?", "portuguese": "Por que o amor de Yunus Emre pela língua turca é tão crucial?"},
            {"speaker": "Araştırmacı", "turkish": "Çünkü saray dili Farsçayı seçerken, o halkın dilini ölümsüz kıldı.", "portuguese": "Porque enquanto a corte escolhia o persa, ele imortalizou a língua falada pelo povo."}
        ],
        "tips": [
            "Citar Yunus Emre ou Rumi num jantar com intelectuais turcos é garantia de reverência e admiração mútua imediata."
        ]
    },
    {
        "id": "lesson-c2-05-pragmatica-sutilezas",
        "level": "C2",
        "levelLabel": "Maestria C2",
        "title": "Pragmática Conversacional: As Partículas de Matiz (ki, ya, da/de, işte)",
        "category": "Pragmática & Discurso",
        "readTimeMinutes": 12,
        "summary": "O segredo final da fluência nativa: as pequenas partículas que carregam frustração, evidência, carinho ou ironia.",
        "theory": """O que separa um estudante fluente de um falante indistinguível de um nativo é o domínio das **partículas discursivas**:

### 1. Ki (Enfático / Surpresa / Indignação):
- `Ben ne bileyim ki!` = E como é que eu vou saber, ora bolas?!
- `Öyle bir güzel ki...` = É de uma beleza tão indescritível que...

### 2. Ya (Protesto / Apelo / Ênfase):
- `Gel ya!` = Poxa, vem logo!
- `Olmaz ya!` = De jeito nenhum, não é possível!

### 3. İşte (Constatação / Resumo / 'É isso aí'):
- `Hayat işte.` = É a vida, fazer o quê.
- `İşte geldim.` = Cá estou eu.

### 4. Da / De (Solto: 'Até parece' / 'E daí?'):
- `Sen de mi Brutus?` = Até tu, Brutus?
- `Gelsen de gelmesen de...` = Quer você venha, quer não venha...""",
        "tables": [
            {
                "title": "Funções Comunicativas das Partículas de Matiz",
                "headers": ["Partícula", "Tom / Emoção", "Exemplo", "Tradução com a Nuance"],
                "rows": [
                    ["... ki", "Indignação / Espanto", "Nereden bilsin ki?", "Como ele poderia adivinhar, coitado?"],
                    ["Ya!", "Insistência / Súplica", "Yapma ya!", "Poxa vida, não faz isso cara!"],
                    ["İşte", "Fatalismo conformado", "Ne yapalım, dünya işte.", "Fazer o quê, esse é o mundo."],
                    ["Boş ver", "Desapego sereno", "Aman boş ver gitsin.", "Ah, deixa pra lá, esquece isso."]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "İşte", "portuguese": "Eis aí / É isso / Pois é", "pronunciation": "ish-te", "category": "Partículas", "example": "İşte bu kadar! (Eis aí, é só isso!)"},
            {"turkish": "Boş ver", "portuguese": "Deixa pra lá / Não liga", "pronunciation": "bosh ver", "category": "Expressões", "example": "Boş ver, canını sıkma. (Deixa pra lá, não esquenta a cabeça.)"}
        ],
        "dialogues": [
            {"speaker": "Ahmet", "turkish": "Yine mi otobüsü kaçırdın?", "portuguese": "Você perdeu o ônibus de novo?"},
            {"speaker": "Selim", "turkish": "Trafik tıkandı işte, ne yapayım ki!", "portuguese": "O trânsito travou todo, fazer o quê, o que você queria que eu fizesse?!"}
        ],
        "tips": [
            "'İşte' e 'boş ver' são o oxigênio da conversação informal turca. Usadas no momento certo, mostram intimidade absoluta com a cultura."
        ]
    },
    {
        "id": "lesson-c2-06-linguagem-juridica-diplomatica",
        "level": "C2",
        "levelLabel": "Maestria C2",
        "title": "Registro Diplomático, Tratados Internacionais e Chancelaria",
        "category": "Linguagem Técnica & Alta Política",
        "readTimeMinutes": 13,
        "summary": "Analise notas diplomáticas oficiais, tratados bilaterais e o vocabulário das relações internacionais da Turquia.",
        "theory": """O turco diplomático (*Diplomatik Türkçe*) é marcado pela máxima cortesia e fórmulas consagradas no Ministério das Relações Exteriores (*Dışişleri Bakanlığı*):

### Fórmulas Protocolares:
- `Ekselansları` = Vossa Excelência.
- `Nota vermek` = Emitir nota diplomática de protesto.
- `İki ülke arasındaki dostane ilişkiler` = As relações amigáveis entre os dois países.
- `Egemenlik ve toprak bütünlüğü` = Soberania e integridade territorial.
- `Derin endişe duymaktayız` = Expressamos profunda preocupação (fórmula padrão de censura diplomática).""",
        "tables": [
            {
                "title": "Vocabulário da Alta Chancelaria Turca",
                "headers": ["Termo Diplomático", "Pronúncia", "Equivalente em Português"],
                "rows": [
                    ["Büyükelçi", "byu-yük-el-tçi", "Embaixador"],
                    ["Konsolosluk", "kon-so-los-luk", "Consulado"],
                    ["Müzakere", "myu-zaa-ke-re", "Negociação / Tratativas"],
                    ["Mutabakat Zaptı", "mu-ta-ba-kat zap-tu", "Memorando de Entendimento (MoU)"],
                    ["Ateşkes", "a-tesh-kes", "Cessar-fogo"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Büyükelçi", "portuguese": "Embaixador(a)", "pronunciation": "byu-yük-el-tçi", "category": "Diplomacia", "example": "Brezilya'nın Ankara Büyükelçisi. (O Embaixador do Brasil em Ancara.)"},
            {"turkish": "Müzakere", "portuguese": "Negociação bilateral", "pronunciation": "myu-za-ke-re", "category": "Diplomacia", "example": "Barış müzakereleri başladı. (Começaram as negociações de paz.)"}
        ],
        "dialogues": [
            {"speaker": "Diplomat", "turkish": "İki ülke heyetleri arasında verimli müzakereler gerçekleştirildi.", "portuguese": "Foram realizadas negociações produtivas entre as delegações de ambos os países."},
            {"speaker": "Bakan", "turkish": "Stratejik ortaklığımızı derinleştirmek konusunda mutabık kaldık.", "portuguese": "Concordamos plenamente em aprofundar nossa parceria estratégica."}
        ],
        "tips": [
            "Para 'Embaixada', usa-se 'Büyükelçilik'; para o cargo de embaixador, 'Büyükelçi'."
        ]
    },
    {
        "id": "lesson-c2-07-girias-istanbul-coloquial",
        "level": "C2",
        "levelLabel": "Maestria C2",
        "title": "Gírias Urbanas de Istambul, Linguagem Juvenil e Turco da Internet",
        "category": "Socioleto Urbano & Slang",
        "readTimeMinutes": 11,
        "summary": "Compreenda o humor das ruas de Kadıköy e Beşiktaş, os memes das redes sociais e as gírias do turco contemporâneo.",
        "theory": """Para transitar com naturalidade entre os jovens turcos nos cafés e na internet:

### 1. Gírias de Chamamento e Amizade:
- `Kanka` (de *kan kardeşi* = irmão de sangue) = Parça / Mano / Irmão.
- `Hocam` (literal: meu professor) = Meu caro / Mestre (usado para qualquer pessoa na rua!).
- `Aynen!` = Exatamente! / Com certeza! / Concordo plenamente! (a palavra mais dita pelos jovens).

### 2. Gírias de Reação e Expressão:
- `Çakmak` (gíria: entender/sacar): *Çaktın mı köfteyi?* = Sacou o lance?
- `Kafayı yemek` = Ficar maluco / Enlouquecer (Lit: comer a própria cabeça).
- `Trolllemek` = Trollar na internet.
- `Helal olsun!` = Parabéns! / Mandou muito bem!""",
        "tables": [
            {
                "title": "Dicionário de Gírias Urbanas de Istambul",
                "headers": ["Gíria", "Origem Literal", "Sentido Real", "Equivalente Brasileiro"],
                "rows": [
                    ["Kanka", "Kan kardeşi (irmão de sangue)", "Melhor amigo", "Mano / Parça / Brother"],
                    ["Aynen", "Aynen öyle (exatamente assim)", "Concordância instantânea", "Total / Com certeza / Isso mesmo"],
                    ["Kafayı yemek", "Comer a cabeça", "Perder a sanidade / Estressar", "Ficar pirado / Perder o juízo"],
                    ["Hadi be!", "Vá embora", "Incredulidade / Mentira!", "Não me diga! / Sério?!"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Kanka", "portuguese": "Mano / Irmão / Parça", "pronunciation": "kan-ka", "category": "Gírias", "example": "Naber kanka? (E aí mano, beleza?)"},
            {"turkish": "Aynen", "portuguese": "Total / Exatamente / Concordo", "pronunciation": "ay-nen", "category": "Gírias", "example": "- Çok sıcak değil mi? - Aynen ya! (- Não está quente demais? - Total, cara!)"}
        ],
        "dialogues": [
            {"speaker": "Burak", "turkish": "Kanka akşam Kadıköy'e akıyoruz mu?", "portuguese": "Mano, vamos colar em Kadıköy hoje à noite?"},
            {"speaker": "Ozan", "turkish": "Aynen kardeşim, sekiz gibi oradayım.", "portuguese": "Total, meu irmão, lá pelas oito estou por lá."}
        ],
        "tips": [
            "'Aynen' é o verdadeiro coringa da conversação jovem na Turquia: se você não sabe o que responder, diga 'Aynen ya!' e você parecerá 100% nativo."
        ]
    },
    {
        "id": "lesson-c2-08-critica-ensaio",
        "level": "C2",
        "levelLabel": "Maestria C2",
        "title": "Produção Textual Superior: Ensaios Críticos e Argumentação Dissertativa",
        "category": "Composição Avançada",
        "readTimeMinutes": 14,
        "summary": "Estruture ensaios argumentativos de padrão acadêmico com teses, antíteses, conectivos lógicos e síntese magistral.",
        "theory": """A redação no nível C2 exige coesão textual, vocabulário abstrato e argumentação encadeada:

### Estrutura de um Ensaio Crítico Turco:
1. **Giriş (Introdução):** Apresentação do tema e tese principal:
   - `Giriş mahiyetinde belirtmek gerekir ki...` = A título de introdução, convém ressaltar que...
   - `Günümüz dünyasında giderek önem kazanan...` = Ganhando cada vez mais relevância no mundo contemporâneo...

2. **Gelişme (Desenvolvimento):** Confronto dialético de ideias:
   - `Bir yandan ... öte yandan ise ...` = Por um lado ... por outro lado ...
   - `Nitekim yapılan araştırmalar göstermektedir ki...` = De fato, pesquisas demonstram que...
   - `Bununla birlikte göz ardı edilmemelidir ki...` = Não obstante, não se deve desconsiderar que...

3. **Sonuç (Conclusão):** Síntese magistral da argumentação:
   - `Hülasa etmek gerekirse...` = Em síntese...
   - `Netice itibarıyla...` = Em última análise / Em conclusão...""",
        "tables": [
            {
                "title": "Conectores Lógicos para Dissertações de Nível C2",
                "headers": ["Função Lógica", "Expressão Turca", "Tradução em Português"],
                "rows": [
                    ["Introduzir tese", "Öncelikle vurgulamak icap eder ki", "Primeiramente, cumpre enfatizar que"],
                    ["Confronto de teses", "Buna mukabil / Bilakis", "Em contrapartida / Pelo contrário"],
                    ["Confirmação empírica", "Nitekim", "Com efeito / De fato"],
                    ["Conclusão / Desfecho", "Sonuç olarak / Netice itibarıyla", "Em conclusão / Por conseguinte"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Nitekim", "portuguese": "Com efeito / De fato / Como esperado", "pronunciation": "ni-te-kim", "category": "Conectivos Lógicos", "example": "Nitekim öngörülerimiz doğru çıktı. (Com efeito, nossas previsões provaram-se corretas.)"},
            {"turkish": "Hülasa", "portuguese": "Em suma / Resumo", "pronunciation": "hyu-laa-sa", "category": "Conectivos Lógicos", "example": "Hülasa, kararlılıkla devam etmeliyiz. (Em suma, devemos continuar com determinação.)"}
        ],
        "dialogues": [
            {"speaker": "Profesör", "turkish": "Makalenizin sonuç bölümü oldukça ikna edici olmuş.", "portuguese": "A seção conclusiva do seu artigo ficou bastante convincente."},
            {"speaker": "Doktorant", "turkish": "Teşekkür ederim hocam, tezin zayıf noktalarını nitekim bu şekilde güçlendirdim.", "portuguese": "Muito obrigado professor, de fato fortaleci os pontos vulneráveis da tese dessa maneira."}
        ],
        "tips": [
            "O uso de 'Nitekim' em redações acadêmicas turcas demonstra raciocínio de alta classe e fluência madura."
        ]
    }
]
