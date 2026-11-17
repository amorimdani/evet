# -*- coding: utf-8 -*-
"""
Evet - Níveis B1 e B2 (16 Lições Aprofundadas)
100% em Português com fonética, tabelas e explicações pedagógicas completas.
"""

B1_LESSONS = [
    {
        "id": "lesson-b1-01-passado-definido",
        "level": "B1",
        "levelLabel": "Intermediário B1",
        "title": "Passado Determinado / Testemunhado (Görülen Geçmiş Zaman: -di)",
        "category": "Morfologia Verbal",
        "readTimeMinutes": 11,
        "summary": "Aprenda a relatar eventos passados que você presenciou diretamente ou dos quais tem certeza factual absoluta.",
        "theory": """O turco possui dois passados fundamentais. O **Görülen Geçmiş Zaman** (sufixo `-di / -tı...`) é o passado **determinado, presenciado ou historicamente certo**.

### Formação:
Radical do Verbo + Sufixo `-di / -dı / -du / -dü` (ou `-ti / -tı / -tu / -tü` após Fıstıkçı Şahap) + Sufixo Pessoal de Passado:
- `Gel-di-m` = Eu vim / Eu cheguei.
- `Gel-di-n` = Você veio.
- `Gel-di` = Ele/Ela veio.
- `Gel-di-k` = Nós viemos.
- `Gel-di-niz` = Vocês vieram.
- `Gel-di-ler` = Eles vieram.

### Negativa com `-me / -ma`:
- `Gel-me-di-m` = Eu não vim.
- `Gör-me-di-m` = Não vi.""",
        "tables": [
            {
                "title": "Conjugação do Passado Definido (-di) com 'Gitmek' e 'Görmek'",
                "headers": ["Pronome", "Gittim (Fui)", "Gördüm (Vi)", "Gitmedim (Não fui)"],
                "rows": [
                    ["Ben", "Gittim", "Gördüm", "Gitmedim"],
                    ["Sen", "Gittin", "Gördün", "Gitmedin"],
                    ["O", "Gitti", "Gördü", "Gitmedi"],
                    ["Biz", "Gittik", "Gördük", "Gitmedik"],
                    ["Siz", "Gittiniz", "Gördünüz", "Gitmediniz"],
                    ["Onlar", "Gittiler", "Gördüler", "Gitmediler"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Dün", "portuguese": "Ontem", "pronunciation": "dyun", "category": "Tempo", "example": "Dün sinemaya gittim. (Ontem fui ao cinema.)"},
            {"turkish": "Geçen hafta", "portuguese": "Semana passada", "pronunciation": "ge-tçen haf-ta", "category": "Tempo", "example": "Geçen hafta seni aradım. (Te liguei semana passada.)"},
            {"turkish": "Görmek", "portuguese": "Ver", "pronunciation": "gör-mek", "category": "Verbos", "example": "Onu sokakta gördüm. (Eu o vi na rua.)"}
        ],
        "dialogues": [
            {"speaker": "Murat", "turkish": "Dün toplantıya geldin mi?", "portuguese": "Você veio à reunião ontem?"},
            {"speaker": "Selma", "turkish": "Evet, geldim ve raporu verdim.", "portuguese": "Sim, vim e entreguei o relatório."}
        ],
        "tips": [
            "Ao conjugar 'Biz' (nós) no passado com -di, o sufixo é '-k': 'Yaptık' (fizemos), 'Geldik' (viemos), 'Gördük' (vimos)."
        ]
    },
    {
        "id": "lesson-b1-02-passado-evidencial",
        "level": "B1",
        "levelLabel": "Intermediário B1",
        "title": "Passado Evidencial / Narrativo (Öğrenilen Geçmiş Zaman: -miş)",
        "category": "Morfologia Verbal",
        "readTimeMinutes": 13,
        "summary": "Compreenda um dos traços mais fascinantes da mente linguística turca: a distinção gramatical obrigatória entre o que você viu e o que você ouviu dizer.",
        "theory": """O turco tem uma categoria gramatical rara chamada **Evidencialidade**. Se você NÃO presenciou a ação com seus próprios olhos, é **obrigatório** usar o sufixo `-miş / -mış / -muş / -müş`.

### Usos Principais:
1. **Ouvir Dizer / Boato / Relato:**
   - `Ali hastalanmış.` = Soube que o Ali ficou doente (ouvi dizer, não vi o termômetro).
   - Se disser `Ali hastalandı`, significa que você viu pessoalmente!
2. **Constatação Tardia / Surpresa:**
   - Você olha pela janela e vê o chão molhado: `Yağmur yağmış!` (Puxa, choveu!).
   - Você olha a carteira vazia: `Param bitmiş!` (Nossa, meu dinheiro acabou!).
3. **Contos de Fadas e Histórias:**
   - Quase todas as histórias infantis turcas começam com `-miş`: *Bir varmış, bir yokmuş...* (Era uma vez...).""",
        "tables": [
            {
                "title": "Diferença Vital: -di (Presenciado) vs -miş (Relatado / Descoberto)",
                "headers": ["Frase", "Sufixo", "Significado Real", "Contexto de Uso"],
                "rows": [
                    ["Ahmet geldi", "-di", "Ahmet veio", "Eu vi o Ahmet chegando com meus olhos"],
                    ["Ahmet gelmiş", "-miş", "Soube que Ahmet veio", "Alguém me contou ou vi o casaco dele pendurado"],
                    ["Yemek çok güzel olmuş", "-miş", "A comida ficou ótima!", "Elogio de surpresa ao provar a primeira garfada"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Duymak", "portuguese": "Ouvir", "pronunciation": "duy-mak", "category": "Percepção", "example": "Haberi duydum. (Ouvi a notícia.)"},
            {"turkish": "Öğrenmek", "portuguese": "Aprender / Saber", "pronunciation": "öy-ren-mek", "category": "Cognição", "example": "Yeni öğrendim. (Fiquei sabendo agora.)"},
            {"turkish": "Masal", "portuguese": "Conto de fadas", "pronunciation": "ma-sal", "category": "Literatura", "example": "Bir varmış, bir yokmuş. (Era uma vez.)"}
        ],
        "dialogues": [
            {"speaker": "Canan", "turkish": "Bora nerede, partiye gelmedi mi?", "portuguese": "Onde está o Bora, ele não veio à festa?"},
            {"speaker": "Ece", "turkish": "Hasta olmuş, evde yatıyormuş.", "portuguese": "Disseram que ele ficou doente e parece que está de cama em casa."}
        ],
        "tips": [
            "Use '-miş' sempre que elogiar comida ou roupa nova de um amigo: 'Çok yakışmış!' (Ficou lindo em você! / Caiu super bem!)."
        ]
    },
    {
        "id": "lesson-b1-03-futuro-simples",
        "level": "B1",
        "levelLabel": "Intermediário B1",
        "title": "Tempo Futuro (Gelecek Zaman: -(y)ecek / -(y)acak)",
        "category": "Morfologia Verbal",
        "readTimeMinutes": 11,
        "summary": "Expresse planos futuros, promessas e intenções com clareza e aprenda a mutação consonantal do K para Ğ na 1ª pessoa.",
        "theory": """O tempo futuro em turco usa o sufixo `-(y)ecek` (vogais anteriores) ou `-(y)acak` (vogais posteriores).

### A Regra Crítica do K ➔ Ğ:
Na 1ª pessoa do singular (*Ben*) e do plural (*Biz*), o sufixo de pessoa começa por vogal, forçando o 'k' final do sufixo futuro a suavizar para **ğ**:
- `Gel-eceğ-im` = Eu virei / Vou vir. (pronuncia-se *ge-le-je-im* ou *ge-li-cem* no coloquial).
- `Yap-acağ-ım` = Eu farei / Vou fazer.
- `Gel-ecek-sin` = Você virá (mantém 'k').
- `Gel-ecek` = Ele virá.
- `Gel-eceğ-iz` = Nós viremos.
- `Gel-ecek-siniz` = Vocês virão.
- `Gel-ecek-ler` = Eles virão.""",
        "tables": [
            {
                "title": "Conjugação Completa do Futuro (Gelecek Zaman)",
                "headers": ["Pronome", "Gelmek (Vir)", "Yapmak (Fazer)", "Negativa (Gelmeyeceğim)"],
                "rows": [
                    ["Ben", "Geleceğim", "Yapacağım", "Gelmeyeceğim"],
                    ["Sen", "Geleceksin", "Yapacaksın", "Gelmeyeceksin"],
                    ["O", "Gelecek", "Yapacak", "Gelmeyecek"],
                    ["Biz", "Geleceğiz", "Yapacağız", "Gelmeyeceğiz"],
                    ["Siz", "Geleceksiniz", "Yapacaksınız", "Gelmeyeceksiniz"],
                    ["Onlar", "Gelecekler", "Yapacaklar", "Gelmeyecekler"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Gelecek", "portuguese": "Futuro / Próximo", "pronunciation": "ge-le-djek", "category": "Tempo", "example": "Gelecek ay geliyorum. (Venho no próximo mês.)"},
            {"turkish": "Plan", "portuguese": "Plano", "pronunciation": "plan", "category": "Geral", "example": "Yarın ne planın var? (Que planos você tem amanhã?)"},
            {"turkish": "Söz vermek", "portuguese": "Prometer (dar palavra)", "pronunciation": "söz ver-mek", "category": "Verbos", "example": "Sana söz veriyorum, geleceğim. (Te dou minha palavra, eu irei.)"}
        ],
        "dialogues": [
            {"speaker": "Emir", "turkish": "Yaz tatilinde ne yapacaksın?", "portuguese": "O que você vai fazer nas férias de verão?"},
            {"speaker": "Defne", "turkish": "Antalya'ya gideceğim, denizde yüzeceğim.", "portuguese": "Vou para Antália, vou nadar no mar."}
        ],
        "tips": [
            "Na fala coloquial rápida de Istambul, 'Geleceğim' é frequentemente pronunciado como 'Gelicem', e 'Yapacağım' como 'Yapıcam'."
        ]
    },
    {
        "id": "lesson-b1-04-presente-amplo-aoristo",
        "level": "B1",
        "levelLabel": "Intermediário B1",
        "title": "Presente Amplo / Aoristo (Geniş Zaman: -r / -er / -ir)",
        "category": "Morfologia Verbal",
        "readTimeMinutes": 12,
        "summary": "O tempo dos hábitos atemporais, verdades universais, promessas espontâneas e fórmulas de extrema gentileza.",
        "theory": """O **Geniş Zaman** (Presente Amplo / Aoristo) não se refere apenas ao momento presente, mas a verdades eternas, rotinas e ações voluntárias espontâneas.

### Usos Chave:
1. **Verdades Científicas e Hábitos:**
   - `Dünya döner.` = A Terra gira.
   - `Her sabah kahve içerim.` = Eu bebo café todas as manhãs.
2. **Pedidos de Extrema Polidez e Cortesia:**
   - `Bakar mısınız?` = O senhor olharia aqui? / Com licença!
   - `Bir çay verir misiniz?` = O senhor me daria um chá?
3. **Promessas Imediatas:**
   - `Hemen yaparım!` = Faço na mesma hora!

### Negativa Especial com `-mez / -maz`:
Na negativa, o 'r' desaparece:
- `Gel-me-m` = Eu não venho / Não virei.
- `Gel-mez-sin` = Você não vem.
- `Gel-mez` = Ele não vem.""",
        "tables": [
            {
                "title": "Afirmativo e Negativo do Geniş Zaman (Verbo Gelmek)",
                "headers": ["Pronome", "Afirmativo", "Negativo", "Interrogativo de Polidez"],
                "rows": [
                    ["Ben", "Gelirim", "Gelmem", "Gelir miyim?"],
                    ["Sen", "Gelirsin", "Gelmezsin", "Gelir misin? (Você viria?)"],
                    ["O", "Gelir", "Gelmez", "Gelir mi?"],
                    ["Biz", "Geliriz", "Gelmeyiz", "Gelir miyiz?"],
                    ["Siz", "Gelirsiniz", "Gelmezsiniz", "Gelir misiniz? (O senhor viria?)"],
                    ["Onlar", "Gelirler", "Gelmezler", "Gelirler mi?"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Bakar mısınız?", "portuguese": "Com licença / Poderia me atender?", "pronunciation": "ba-kar mu-su-nuz", "category": "Cortesia", "example": "Pardon, bakar mısınız? (Com licença, o senhor poderia me atender?)"},
            {"turkish": "Her zaman", "portuguese": "Sempre", "pronunciation": "her za-man", "category": "Frequência", "example": "Her zaman seni düşünürüm. (Sempre penso em você.)"},
            {"turkish": "Asla", "portuguese": "Nunca / Jamais", "pronunciation": "as-la", "category": "Frequência", "example": "Asla yalan söylemem. (Nunca minto.)"}
        ],
        "dialogues": [
            {"speaker": "Müşteri", "turkish": "Pardon bakar mısınız? Menüyü getirir misiniz?", "portuguese": "Com licença, o senhor nos traria o cardápio?"},
            {"speaker": "Garson", "turkish": "Tabii ki efendim, hemen getiririm.", "portuguese": "Com certeza senhor, trago imediatamente."}
        ],
        "tips": [
            "'Bakar mısınız?' é a frase número 1 para chamar a atenção de qualquer garçom ou atendente na Turquia de forma educada e respeitosa."
        ]
    },
    {
        "id": "lesson-b1-05-oracoes-temporais",
        "level": "B1",
        "levelLabel": "Intermediário B1",
        "title": "Orações Temporais: -(y)ince, -dikten sonra, -meden önce",
        "category": "Sintaxe & Conectivos",
        "readTimeMinutes": 11,
        "summary": "Aprenda a dizer 'quando eu chegar', 'depois de comer' e 'antes de sair' com sufixos verbais elegantes.",
        "theory": """O turco utiliza formas nominais do verbo (gerúndios/particípios) para estruturar orações de tempo subordinadas:

1. **-(y)ince / -(y)ınca = 'Quando... / Assim que...':**
   - `Eve gelince beni ara.` = Quando você chegar em casa, me ligue.
   - `Onu görünce çok mutlu oldum.` = Quando o vi, fiquei muito feliz.

2. **-dikten sonra = 'Depois de...':**
   - `Yemek yedik**ten sonra** çay içtik.` = Depois de comer comida, tomamos chá.
   - `Ders bit**tikten sonra** buluşalım.` = Vamos nos encontrar depois que a aula terminar.

3. **-meden / -madan önce = 'Antes de...':**
   - `Evden çık**madan önce** ışıkları kapat.` = Antes de sair de casa, apague as luzes.
   - `Uyu**madan önce** kitap okurum.` = Antes de dormir, leio livro.""",
        "tables": [
            {
                "title": "Síntese das Estruturas Temporais",
                "headers": ["Construção", "Significado", "Exemplo", "Tradução"],
                "rows": [
                    ["Verbo + -(y)ince", "Quando / Ao...", "Görünce", "Ao ver / Quando viu"],
                    ["Verbo + -dikten sonra", "Depois de...", "Geldikten sonra", "Depois de ter vindo"],
                    ["Verbo + -meden önce", "Antes de...", "Gitmeden önce", "Antes de ir"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Sonra", "portuguese": "Depois", "pronunciation": "son-ra", "category": "Tempo", "example": "Dersten sonra. (Depois da aula.)"},
            {"turkish": "Önce", "portuguese": "Antes", "pronunciation": "ön-dje", "category": "Tempo", "example": "Yemekten önce ellerini yıka. (Lave as mãos antes da refeição.)"},
            {"turkish": "Aramak", "portuguese": "Ligar / Procurar", "pronunciation": "a-ra-mak", "category": "Verbos", "example": "Varınca beni ara. (Me ligue ao chegar.)"}
        ],
        "dialogues": [
            {"speaker": "Anne", "turkish": "Dışarı çıkmadan önce ödevini bitir!", "portuguese": "Antes de sair lá fora, termine sua lição de casa!"},
            {"speaker": "Oğul", "turkish": "Tamam anne, bitirdikten sonra arkadaşlarımla buluşacağım.", "portuguese": "Tudo bem mãe, depois de terminar vou me encontrar com meus amigos."}
        ],
        "tips": [
            "Note que '-den önce' e '-den sonra' regem o caso ablativo (-den/-ten) anexado ao particípio: 'bit-tik-ten sonra'."
        ]
    },
    {
        "id": "lesson-b1-06-posposicoes-avancadas",
        "level": "B1",
        "levelLabel": "Intermediário B1",
        "title": "Pós-posições com Casos Gramaticais (Göre, Rağmen, Doğru, Başka)",
        "category": "Pós-posições",
        "readTimeMinutes": 10,
        "summary": "Descubra como o turco usa pós-posições no lugar de preposições, exigindo casos gramaticais específicos.",
        "theory": """Enquanto o português usa **preposições** antes da palavra ('segundo você', 'apesar da chuva'), o turco usa **pós-posições** DEPOIS da palavra, exigindo um caso específico:

### 1. Pós-posições que exigem Dativo (-(y)e):
- **Göre** = De acordo com / Segundo:
  - `Bana göre` = Na minha opinião / Segundo eu.
  - `Sana göre` = Segundo você.
- **Rağmen / Karşın** = Apesar de:
  - `Yağmura rağmen dışarı çıktık.` = Apesar da chuva, saímos.
- **Doğru** = Em direção a:
  - `Eve doğru yürüdüm.` = Caminhei em direção a casa.

### 2. Pós-posições que exigem Ablativo (-den):
- **Başka** = Além de / Fora:
  - `Senden başka kimsem yok.` = Não tenho mais ninguém além de você.
- **Beri** = Desde:
  - `Sabahtan beri çalışıyorum.` = Estou trabalhando desde a manhã.""",
        "tables": [
            {
                "title": "Quadro de Regência das Pós-posições",
                "headers": ["Caso Exigido", "Pós-posição", "Significado", "Exemplo"],
                "rows": [
                    ["Dativo (-(y)e)", "Göre", "Segundo / Conforme", "Bana göre çok kolay (Na minha opinião é muito fácil)"],
                    ["Dativo (-(y)e)", "Rağmen", "Apesar de", "Zorluğa rağmen (Apesar da dificuldade)"],
                    ["Ablativo (-den)", "Beri", "Desde", "Üç yıldan beri (Há / Desde três anos)"],
                    ["Ablativo (-den)", "Başka", "Além de", "Bundan başka (Além disto)"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Bana göre", "portuguese": "Na minha opinião", "pronunciation": "ba-na gö-re", "category": "Opinião", "example": "Bana göre bu film harika. (Na minha opinião este filme é maravilhoso.)"},
            {"turkish": "Rağmen", "portuguese": "Apesar de", "pronunciation": "raam-men", "category": "Conectivos", "example": "Trafiğe rağmen zamanında geldik. (Apesar do trânsito, chegamos a tempo.)"}
        ],
        "dialogues": [
            {"speaker": "Turgut", "turkish": "Sana göre bu proje başarılı olacak mı?", "portuguese": "Na sua opinião, este projeto terá sucesso?"},
            {"speaker": "Gül", "turkish": "Zorluklara rağmen kesinlikle başarılı olacağız.", "portuguese": "Apesar das dificuldades, com certeza teremos sucesso."}
        ],
        "tips": [
            "Nunca diga *göre bana*. A ordem é sempre estrita: primeiro o termo com o caso (Bana), depois a pós-posição (göre)."
        ]
    },
    {
        "id": "lesson-b1-07-discurso-indireto-diye",
        "level": "B1",
        "levelLabel": "Intermediário B1",
        "title": "Discurso Indireto e o Versátil Conector 'Diye'",
        "category": "Sintaxe Avançada",
        "readTimeMinutes": 11,
        "summary": "Aprenda a relatar o que outros disseram e domine a palavra 'diye' para expressar propósitos e pensamentos.",
        "theory": """A palavra **diye** vem literalmente do verbo *demek* (dizer) na forma de gerúndio. Ela é uma das palavras mais multifuncionais do idioma turco:

### 1. Para Citar Falas de Terceiros:
- `Ahmet 'Yarın geliyorum' diye söyledi.` = Ahmet disse: 'Venho amanhã'.
- `Doktor dinlen diye tavsiye etti.` = O médico recomendou: 'Descanse'.

### 2. Para Expressar Intenção / Propósito ('Com o pensamento de...'):
- `Türkçe öğreneyim diye kursa yazıldım.` = Me matriculei no curso pensando em aprender turco (para aprender turco).
- `Üşümeyeyim diye montumu giydim.` = Vesti meu casaco para não sentir frio.

### 3. Para Nomear Coisas:
- `Evet diye bir uygulama var.` = Há um aplicativo chamado 'Evet'.""",
        "tables": [
            {
                "title": "Os Três Grandes Usos de 'Diye'",
                "headers": ["Função", "Estrutura", "Exemplo", "Tradução"],
                "rows": [
                    ["Citação", "Frase direta + diye + verbo", "'Gel' diye bağırdı", "Gritou: 'Vem!'"],
                    ["Propósito", "Verbo no optativo + diye", "Geç kalmayayım diye koştum", "Corri para não me atrasar"],
                    ["Denominação", "Nome + diye bir...", "Brezilya diye bir ülke", "Um país chamado Brasil"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Demek", "portuguese": "Dizer / Querer dizer", "pronunciation": "de-mek", "category": "Verbos", "example": "Ne demek istiyorsun? (O que você quer dizer?)"},
            {"turkish": "Söylemek", "portuguese": "Falar / Dizer", "pronunciation": "söy-le-mek", "category": "Verbos", "example": "Doğruyu söyledim. (Falei a verdade.)"}
        ],
        "dialogues": [
            {"speaker": "Hasan", "turkish": "Neden erken kalktın?", "portuguese": "Por que você acordou cedo?"},
            {"speaker": "Cansu", "turkish": "Uçağı kaçırmayayım diye sabah beşte kalktım.", "portuguese": "Acordei às cinco da manhã para não perder o voo."}
        ],
        "tips": [
            "'Ne demek?' é muito usado como resposta a 'Teşekkür ederim' no sentido de 'Imagina! Não há de quê!' (Literalmente: O que isso quer dizer? Não é nada!)."
        ]
    },
    {
        "id": "lesson-b1-08-necessidade-obrigacao",
        "level": "B1",
        "levelLabel": "Intermediário B1",
        "title": "Modos de Necessidade e Obrigação (-malı, Zorunda, Lazım)",
        "category": "Modos Verbais",
        "readTimeMinutes": 10,
        "summary": "Expresse dever moral ('deveria fazer'), obrigação imposta ('sou obrigado a ir') e necessidade prática ('preciso de água').",
        "theory": """Em turco, há três graus distintos de necessidade:

### 1. Dever Moral e Sugestão Forte (-malı / -meli):
Equivale a 'dever' / 'ter que':
- `Daha çok çalışmalısın.` = Você deveria estudar mais.
- `Hemen gitmeliyiz.` = Devemos ir imediatamente.

### 2. Obrigação Imposta Inevitável (Zorunda Olmak):
Equivale a 'ser forçado / obrigado a':
- `Çalışmak zorundayım.` = Sou obrigado a trabalhar / Tenho que trabalhar por obrigação.
- `Bu faturayı ödemek zorundayız.` = Somos obrigados a pagar esta fatura.

### 3. Necessidade Prática (Lazım / Gerek / İhtiyaç):
Usa-se o infinitivo abreviado com possessivo:
- `Gitmem lazım.` = Preciso ir (Lit: Minha ida é necessária).
- `Uyumam gerek.` = Preciso dormir.""",
        "tables": [
            {
                "title": "Graus de Necessidade",
                "headers": ["Construção", "Nuance", "Exemplo", "Tradução"],
                "rows": [
                    ["-malı / -meli", "Dever moral / Conselho", "Erken yatmalısın", "Você deveria deitar cedo"],
                    ["Zorunda olmak", "Obrigação externa", "Gitmek zorundayım", "Sou obrigado a ir"],
                    ["-mem lazım / gerek", "Necessidade prática cotidiana", "Su içmem lazım", "Preciso beber água"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Lazım", "portuguese": "Necessário / Preciso", "pronunciation": "laa-zum", "category": "Necessidade", "example": "Bana yardım lazım. (Preciso de ajuda.)"},
            {"turkish": "Gerek", "portuguese": "Necessário", "pronunciation": "ge-rek", "category": "Necessidade", "example": "Acele etmemiz gerek. (Precisamos nos apressar.)"},
            {"turkish": "Zorunda olmak", "portuguese": "Ser obrigado a", "pronunciation": "zo-run-da ol-mak", "category": "Obrigação", "example": "Bunu yapmak zorundayım. (Sou obrigado a fazer isto.)"}
        ],
        "dialogues": [
            {"speaker": "Patron", "turkish": "Rapor bugün bitmeli mi?", "portuguese": "O relatório deve terminar hoje?"},
            {"speaker": "Müdür", "turkish": "Evet, müşteriye göndermek zorundayız.", "portuguese": "Sim, somos obrigados a enviar ao cliente."}
        ],
        "tips": [
            "A forma 'Gitmem lazım' (verbo + sufixo possessivo 'm' + lazım) é a mais comum no dia a dia informal de qualquer turco."
        ]
    }
]

B2_LESSONS = [
    {
        "id": "lesson-b2-01-participio-sujeito",
        "level": "B2",
        "levelLabel": "Intermediário Superior B2",
        "title": "Particípio do Sujeito -(y)en / -(y)an ('Aquele que faz')",
        "category": "Sintaxe Complexa",
        "readTimeMinutes": 12,
        "summary": "Aprenda a construir orações relativas com foco no sujeito: 'o homem que fala', 'o trem que chega', 'quem sabe'.",
        "theory": """O turco não possui um pronome relativo universal como o 'que' do português ('o homem QUE viu'). Em vez disso, transforma o verbo subordinado em um **adjetivo verbal (particípio)**:

### Formação:
Radical do Verbo + `-(y)en` (vogal anterior) ou `-(y)an` (vogal posterior):
- `Gelen adam` = O homem que vem / O homem que chega.
- `Türkçe konuşan öğrenciler` = Os alunos que falam turco.
- `Ağlayan bebek` = O bebê que chora / O bebê chorão.

### Uso Substantivado ('Quem...'):
Quando o substantivo é omitido, o particípio se torna o próprio sujeito:
- `Bilen konuşsun!` = Que fale quem sabe!
- `Erken kalkan erken yol alır.` = Quem acorda cedo viaja mais cedo (Provérbio).""",
        "tables": [
            {
                "title": "Orações com Particípio do Sujeito -(y)en/-(y)an",
                "headers": ["Verbo", "Particípio", "Com Substantivo", "Tradução em Português"],
                "rows": [
                    ["Gelmek (Vir)", "Gelen", "Gelen tren", "O trem que vem"],
                    ["Okumak (Ler)", "Okuyan", "Kitap okuyan kız", "A garota que lê livros"],
                    ["Çalışmak (Trabalhar)", "Çalışan", "Çok çalışan insanlar", "As pessoas que trabalham muito"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Bilen", "portuguese": "Aquele que sabe / Quem sabe", "pronunciation": "bi-len", "category": "Particípios", "example": "Bilen var mı? (Tem alguém que sabe?)"},
            {"turkish": "Yolcu", "portuguese": "Passageiro / Viajante", "pronunciation": "yol-dju", "category": "Viagem", "example": "Gelen yolcular. (Os passageiros que estão chegando.)"}
        ],
        "dialogues": [
            {"speaker": "Polis", "turkish": "Olayı gören var mı?", "portuguese": "Tem alguém que viu o ocorrido?"},
            {"speaker": "Tanık", "turkish": "Evet, orada bekleyen adam her şeyi gördü.", "portuguese": "Sim, o homem que estava esperando ali viu tudo."}
        ],
        "tips": [
            "Lembre-se da ordem: em turco o particípio vem SEMPRE ANTES do substantivo modificado ('Türkçe konuşan kız' e nunca *kız konuşan Türkçe)."
        ]
    },
    {
        "id": "lesson-b2-02-participio-objeto",
        "level": "B2",
        "levelLabel": "Intermediário Superior B2",
        "title": "Particípio do Objeto: -dik e -(y)ecek com Possessivos",
        "category": "Sintaxe Complexa",
        "readTimeMinutes": 14,
        "summary": "Construa orações relativas objetivas ('o livro que eu li', 'a cidade onde moro', 'o que vamos fazer').",
        "theory": """Se o particípio `-en` cuida de QUEM pratica a ação, o particípio **-dik** (passado/presente) e **-(y)ecek** (futuro) cuida de QUALQUER ação onde o sujeito é outro:

### Estrutura:
Radical + `-dik` + Sufixo Possessivo (indicando QUEM realizou a ação):
- `Oku-duğ-um kitap` = O livro **que eu li** / que leio.
- `Gör-düğ-ün adam` = O homem **que você viu**.
- `Yaşa-dığ-ımız şehir` = A cidade **em que moramos**.
- `Yap-acağ-ımız plan` = O plano **que faremos** (futuro).

### A Inversão Mental para Lusófonos:
Em português dizemos: *Substantivo + QUE + Sujeito + Verbo* ('O livro que eu li').
Em turco invertemos completamente: *Verbo-Particípio-Possessivo + Substantivo* ('Okuduğum kitap').""",
        "tables": [
            {
                "title": "Conjugação do Particípio -dik com Possessivos (Verbo Yazmak - Escrever)",
                "headers": ["Pessoa", "Forma", "Exemplo", "Tradução"],
                "rows": [
                    ["Ben (Eu)", "Yazdığım", "Yazdığım mektup", "A carta que escrevi"],
                    ["Sen (Tu)", "Yazdığın", "Yazdığın mektup", "A carta que você escreveu"],
                    ["O (Ele)", "Yazdığı", "Yazdığı mektup", "A carta que ele escreveu"],
                    ["Biz (Nós)", "Yazdığımız", "Yazdığımız mektup", "A carta que escrevemos"],
                    ["Siz (Vós)", "Yazdığınız", "Yazdığınız mektup", "A carta que vocês escreveram"],
                    ["Onlar (Eles)", "Yazdıkları", "Yazdıkları mektup", "A carta que eles escreveram"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Bildiğim kadarıyla", "portuguese": "Até onde eu sei", "pronunciation": "bil-di-yim ka-da-ruy-la", "category": "Expressões", "example": "Bildiğim kadarıyla o evli. (Até onde eu sei, ele é casado.)"},
            {"turkish": "Sevdiğim", "portuguese": "O que eu amo / Minha pessoa amada", "pronunciation": "sev-di-yim", "category": "Particípios", "example": "En sevdiğim yemek mantı. (Minha comida favorita é mantı.)"}
        ],
        "dialogues": [
            {"speaker": "Elif", "turkish": "Dün izlediğin film güzel miydi?", "portuguese": "O filme que você assistiu ontem era bom?"},
            {"speaker": "Barış", "turkish": "Evet, hayatımda gördüğüm en heyecanlı filmdi!", "portuguese": "Sim, foi o filme mais emocionante que já vi na minha vida!"}
        ],
        "tips": [
            "O 'k' de -dik suaviza para 'ğ' em todas as pessoas exceto na 3ª do plural: okuduğum, okuduğun, okuduğu, okuduğumuz, okuduğunuz, mas okudukları."
        ]
    },
    {
        "id": "lesson-b2-03-condicional-real-irreal",
        "level": "B2",
        "levelLabel": "Intermediário Superior B2",
        "title": "Modo Condicional (Şart: -se/-sa e ise) Real e Irreal",
        "category": "Modos Verbais",
        "readTimeMinutes": 12,
        "summary": "Domine as orações condicionais ('se chover, fico em casa' vs 'se eu fosse rico, viajaria o mundo').",
        "theory": """O condicional turco usa o sufixo `-se / -sa`.

### 1. Condição Real no Presente/Futuro:
- `Hava güzel olursa pikniğe gideriz.` = Se o tempo ficar bom, iremos ao piquenique.
- `Gelirsen sevinirim.` = Se você vier, ficarei feliz.

### 2. Condição Hipotética / Contrafactual Irreal (-seydi):
Equivale ao imperfeito do subjuntivo + futuro do pretérito em português:
- `Zengin **olsaydım**, dünyayı gezerdim.` = Se eu **fosse** rico, viajaria o mundo.
- `Bil**seydim**, sana söylerdim.` = Se eu **soubesse**, teria lhe dito.""",
        "tables": [
            {
                "title": "Condição Real vs Contrafactual",
                "headers": ["Tipo de Condição", "Construção", "Exemplo", "Tradução"],
                "rows": [
                    ["Real / Possível", "Raiz + se/sa", "Gelirse haber ver", "Se ele vier, avise"],
                    ["Hipotética / Irreal", "Raiz + seydi/saydı", "Bilsen şaşırırsın", "Se você soubesse, ficaria surpreso"],
                    ["Passado Irreal", "Raiz + seydi + rdi", "Çalışsaydım kazanırdım", "Se eu tivesse estudado, teria passado"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Keşke", "portuguese": "Quem dera / Oxalá / Tomara", "pronunciation": "kesh-ke", "category": "Desejos", "example": "Keşke burada olsaydın! (Quem dera você estivesse aqui!)"},
            {"turkish": "Eğer", "portuguese": "Se (opcional de reforço)", "pronunciation": "e-yer", "category": "Condicionais", "example": "Eğer vaktin varsa gel. (Se tiver tempo, venha.)"}
        ],
        "dialogues": [
            {"speaker": "Tolga", "turkish": "Piyangoyu kazansan ne yapardın?", "portuguese": "Se você ganhasse na loteria, o que faria?"},
            {"speaker": "Nazlı", "turkish": "Bir sahil kasabasına taşınırdım.", "portuguese": "Eu me mudaria para uma cidade litorânea."}
        ],
        "tips": [
            "'Keşke' com o condicional expressa saudade ou arrependimento com grande intensidade emocional: 'Keşke gitmeseydim' (Quem dera eu não tivesse ido)."
        ]
    },
    {
        "id": "lesson-b2-04-voz-passiva",
        "level": "B2",
        "levelLabel": "Intermediário Superior B2",
        "title": "Voz Passiva (Edilgen Çatı: -(i)l / -(i)n)",
        "category": "Diátese Verbal",
        "readTimeMinutes": 11,
        "summary": "Transforme frases ativas em passivas ('a carta foi escrita', 'a porta foi aberta', 'vende-se').",
        "theory": """Na voz passiva turca, o objeto passa a ser o sujeito gramatical da ação:

### Regras de Formação:
1. **Regra Geral:** Adiciona-se `-il / -ıl / -ul / -ül` ao radical:
   - `Yazmak` (escrever) ➔ `Yazılmak` (ser escrito): *Mektup yazıldı* (A carta foi escrita).
   - `Açmak` (abrir) ➔ `Açılmak` (ser aberto): *Kapı açıldı* (A porta foi aberta).
2. **Se o verbo terminar na consoante L ou em vogal:** Usa-se `-in / -ın / -un / -ün` ou apenas `-n`:
   - `Temizlemek` (limpar) ➔ `Temizlenmek` (ser limpo): *Oda temizlendi* (O quarto foi limpo).
   - `Bulmak` (encontrar) ➔ `Bulunmak` (ser encontrado).

### Agente da Passiva com 'Tarafından':
Para indicar QUEM praticou a ação na voz passiva, usa-se a palavra **tarafından** (por / da parte de):
- `Kitap Atatürk tarafından yazıldı.` = O livro foi escrito por Atatürk.""",
        "tables": [
            {
                "title": "Verbos Ativos vs Verbos Passivos",
                "headers": ["Voz Ativa", "Significado", "Voz Passiva", "Significado Passivo"],
                "rows": [
                    ["Yapmak", "Fazer", "Yapılmak", "Ser feito"],
                    ["Satmak", "Vender", "Satılmak", "Ser vendido"],
                    ["Görmek", "Ver", "Görülmek", "Ser visto"],
                    ["Anlamak", "Entender", "Anlaşılmak", "Ser compreendido"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Tarafından", "portuguese": "Por / Da parte de (agente da passiva)", "pronunciation": "ta-ra-fun-dan", "category": "Sintaxe", "example": "Polis tarafından yakalandı. (Foi capturado pela polícia.)"},
            {"turkish": "Satılık", "portuguese": "À venda", "pronunciation": "sa-tu-luk", "category": "Comércio", "example": "Satılık daire. (Apartamento à venda.)"}
        ],
        "dialogues": [
            {"speaker": "Gazeteci", "turkish": "Köprü ne zaman açıldı?", "portuguese": "Quando a ponte foi aberta?"},
            {"speaker": "Yetkili", "turkish": "Geçen ay cumhurbaşkanı tarafından açıldı.", "portuguese": "Foi aberta no mês passado pelo presidente."}
        ],
        "tips": [
            "Avisos públicos na Turquia quase sempre usam a voz passiva: 'Girilmez' (Entrada proibida / Não se entra), 'Sigara içilmez' (Proibido fumar / Não se fuma cigarro)."
        ]
    },
    {
        "id": "lesson-b2-05-voz-causativa",
        "level": "B2",
        "levelLabel": "Intermediário Superior B2",
        "title": "Voz Causativa (Ettirgen: -dir, -t, -ir - 'Fazer alguém fazer')",
        "category": "Diátese Verbal",
        "readTimeMinutes": 12,
        "summary": "Aprenda a dizer que você mandou cortar o cabelo, fez o bebê dormir ou mandou consertar o carro.",
        "theory": """O turco não precisa do verbo auxiliar 'mandar fazer' (como 'mandei pintar a casa'). Ele anexa **sufixos causativos** diretamente na raiz do verbo:

### Os Três Sufixos Causativos:
1. **-dir / -dır / -dur / -dür** (ou `-tir...` após Fıstıkçı):
   - `Bilmek` (saber) ➔ `Bildirmek` (fazer saber / informar).
   - `Gülmek` (rir) ➔ `Güldürmek` (fazer rir).
2. **-t** (para raízes polissilábicas terminadas em vogal, r ou l):
   - `Aramak` (procurar) ➔ `Aratmak` (mandar procurar).
   - `Temizlemek` (limpar) ➔ `Temizletmek` (mandar limpar).
3. **-ir / -ır:**
   - `İçmek` (beber) ➔ `İçirmek` (fazer beber / amamentar).
   - `Pişmek` (cozinhar-se) ➔ `Pişirmek` (cozinhar algo).""",
        "tables": [
            {
                "title": "Exemplos Clássicos da Voz Causativa",
                "headers": ["Verbo Base", "Significado", "Forma Causativa", "Significado Causativo"],
                "rows": [
                    ["Kesmek", "Cortar", "Kestirmek", "Mandar cortar (ex: cabelo)"],
                    ["Tamir etmek", "Consertar", "Tamir ettirmek", "Mandar consertar"],
                    ["Okumak", "Ler", "Okutmak", "Fazer ler / Mandar para a escola"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Saç kestirmek", "portuguese": "Cortar o cabelo (mandar o barbeiro cortar)", "pronunciation": "satch kes-tir-mek", "category": "Cotidiano", "example": "Berberde saçımı kestirdim. (Cortei o cabelo no barbeiro.)"},
            {"turkish": "Güldürmek", "portuguese": "Fazer rir", "pronunciation": "gyul-dür-mek", "category": "Ações", "example": "Beni çok güldürdün. (Você me fez rir muito.)"}
        ],
        "dialogues": [
            {"speaker": "Sarp", "turkish": "Arabanı kendin mi tamir ettin?", "portuguese": "Você mesmo consertou seu carro?"},
            {"speaker": "Kaan", "turkish": "Hayır, tamirciye tamir ettirdim.", "portuguese": "Não, mandei consertar no mecânico."}
        ],
        "tips": [
            "Quando um brasileiro diz 'cortei o cabelo', em turco deve-se usar 'kestirdim' (mandei cortar), a menos que você mesmo tenha pego a tesoura e cortado seu próprio cabelo!"
        ]
    },
    {
        "id": "lesson-b2-06-voz-reflexiva-reciproca",
        "level": "B2",
        "levelLabel": "Intermediário Superior B2",
        "title": "Voz Reflexiva (-in) e Recíproca (-iş: Ações Mútuas)",
        "category": "Diátese Verbal",
        "readTimeMinutes": 11,
        "summary": "Diga 'vestir-se', 'lavar-se' (reflexivo) e 'encontrar-se', 'abraçar-se', 'cumprimentar-se' (recíproco).",
        "theory": """**1. Voz Reflexiva (Dönüşlü: sufixo -(i)n):**
O sujeito pratica a ação sobre si mesmo:
- `Yıkamak` (lavar) ➔ `Yıkanmak` (lavar-se / tomar banho).
- `Giyinmek` = Vestir-se.
- `Taranmak` = Pentear-se.

**2. Voz Recíproca / Coletiva (İşteş: sufixo -(i)ş):**
Dois ou mais sujeitos praticam a ação mutuamente ou em grupo:
- `Görmek` (ver) ➔ `Görüşmek` (verem-se / encontrar-se / conversar). Daqui vem a despedida **Görüşürüz!**
- `Selamlamak` (cumprimentar) ➔ `Selamlaşmak` (cumprimentarem-se).
- `Sarılmak` ➔ `Kucaklaşmak` (abraçarem-se).
- `Yazmak` (escrever) ➔ `Yazışmak` (trocar mensagens escritas).""",
        "tables": [
            {
                "title": "Verbos Recíprocos Notáveis",
                "headers": ["Verbo Simples", "Significado", "Forma Recíproca (-iş)", "Significado Recíproco"],
                "rows": [
                    ["Görmek", "Ver", "Görüşmek", "Encontrarem-se / Conversarem"],
                    ["Anlamak", "Compreender", "Anlaşmak", "Entenderem-se / Chegar a um acordo"],
                    ["Tanımak", "Conhecer", "Tanışmak", "Apresentarem-se / Conhecerem-se"],
                    ["Öpmek", "Beijar", "Öpüşmek", "Beijarem-se"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Tanışmak", "portuguese": "Conhecerem-se", "pronunciation": "ta-nush-mak", "category": "Relações", "example": "Nerede tanıştınız? (Onde vocês se conheceram?)"},
            {"turkish": "Anlaşmak", "portuguese": "Chegar a acordo", "pronunciation": "an-lash-mak", "category": "Relações", "example": "Sonunda anlaştık. (Finalmente chegamos a um acordo.)"}
        ],
        "dialogues": [
            {"speaker": "Gizem", "turkish": "Yarın saat kaçta görüşüyoruz?", "portuguese": "A que horas nos encontramos amanhã?"},
            {"speaker": "Kerim", "turkish": "Öğleden sonra ikide meydanda buluşalım.", "portuguese": "Vamos nos encontrar na praça às duas da tarde."}
        ],
        "tips": [
            "A palavra 'Görüşürüz' é literalmente 'Nós nos vemos mutuamente no futuro' (gör-ü-ş-ür-üz)."
        ]
    },
    {
        "id": "lesson-b2-07-gerundios-avancados",
        "level": "B2",
        "levelLabel": "Intermediário Superior B2",
        "title": "Gerúndios e Conectores Verbais: -(y)erek, -meksizin, -(y)e -(y)e",
        "category": "Conectivos Verbais",
        "readTimeMinutes": 10,
        "summary": "Expresse o modo como uma ação é feita ('fazendo', 'sem fazer nada', 'pouco a pouco').",
        "theory": """**1. -(y)erek / -(y)arak = 'Fazendo / Por meio de' (Modo de ação):**
- `Müzik dinleyerek çalışıyorum.` = Trabalho ouvindo música.
- `Koşarak geldi.` = Veio correndo.

**2. -meksizin / -maksızın = 'Sem fazer' (Registro formal/avançado):**
- `Durmaksızın çalıştı.` = Trabalhou sem parar / ininterruptamente.
- `Hiç düşünmeksizin kabul etti.` = Aceitou sem pensar nada.

**3. Repetição -(y)e -(y)e = 'Gradualmente / Fazendo repetidamente':**
- `Güle güle` = Vá sorrindo!
- `Konuşa konuşa öğrendim.` = Aprendi conversando dia após dia.""",
        "tables": [
            {
                "title": "Gerúndios Modais em Turco",
                "headers": ["Sufixo", "Função", "Exemplo", "Tradução"],
                "rows": [
                    ["-(y)erek", "Modo simultâneo", "Gülerek anlattı", "Contou rindo"],
                    ["-meksizin", "Sem (negativo formal)", "Dinlenmeksizin", "Sem descansar"],
                    ["-(y)e -(y)e", "Ação contínua e gradual", "Ağlaya ağlaya", "Chorando repetidamente"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Koşarak", "portuguese": "Correndo", "pronunciation": "ko-sha-rak", "category": "Gerúndio", "example": "Koşarak otobüse yetişti. (Alcançou o ônibus correndo.)"},
            {"turkish": "Durmaksızın", "portuguese": "Ininterruptamente / Sem cessar", "pronunciation": "dur-mak-su-zun", "category": "Advérbios", "example": "Yağmur durmaksızın yağıyor. (A chuva cai sem cessar.)"}
        ],
        "dialogues": [
            {"speaker": "Hoca", "turkish": "Türkçeni nasıl geliştirdin?", "portuguese": "Como você aprimorou seu turco?"},
            {"speaker": "Öğrenci", "turkish": "Her gün pratik yaparak ve film izleyerek geliştirdim.", "portuguese": "Aprimorei praticando todos os dias e assistindo a filmes."}
        ],
        "tips": [
            "O famoso cumprimento de despedida 'Güle güle' é um gerúndio duplicado: 'Vá sorrindo, sorrindo'."
        ]
    },
    {
        "id": "lesson-b2-08-sufixos-derivacionais",
        "level": "B2",
        "levelLabel": "Intermediário Superior B2",
        "title": "Sufixos Derivacionais Produtivos: -lik, -ci, -siz, -li, -daş",
        "category": "Morfologia Derivacional",
        "readTimeMinutes": 11,
        "summary": "Multiplique seu vocabulário por 5 aprendendo a criar novas palavras a partir de raízes simples.",
        "theory": """O turco constrói substantivos e adjetivos com sufixos extremamente produtivos:

1. **-ci / -cı / -cu / -cü = O profissional ou entusiasta:**
   - `Çay` (chá) ➔ `Çaycı` (o vendedor/preparador de chá).
   - `Kitap` (livro) ➔ `Kitapçı` (o livreiro / livraria).
   - `Futbol` ➔ `Futbolcu` (jogador de futebol).

2. **-lik / -lık / -luk / -lük = Abstração, recipiente ou finalidade:**
   - `Göz` (olho) ➔ `Gözlük` (óculos).
   - `Tuz` (sal) ➔ `Tuzluk` (saleiro).
   - `Güzel` (belo) ➔ `Güzellik` (beleza).
   - `Öğretmen` ➔ `Öğretmenlik` (a profissão de professor / docência).

3. **-li (Com / Dotado de) vs -siz (Sem / Desprovido de):**
   - `Şekerli` (com açúcar) vs `Şekersiz` (sem açúcar).
   - `Evli` (casado / com casa) vs `Bekâr` (solteiro).
   - `Evsiz` (sem teto).

4. **-daş / -deş = Compartilhador / Colega:**
   - `Vatan` (pátria) ➔ `Vatandaş` (cidadão / compatriota).
   - `Arkadaş` (amigo / companheiro de costas/apoio).""",
        "tables": [
            {
                "title": "Família de Palavras Derivadas a partir de 'Göz' (Olho)",
                "headers": ["Palavra Derivada", "Sufixo Usado", "Significado em Português"],
                "rows": [
                    ["Gözlük", "-lük (objeto/instrumento)", "Óculos"],
                    ["Gözlükçü", "-çü (profissão)", "Ótico (quem vende óculos)"],
                    ["Gözlükçülük", "-lük (profissão abstrata)", "A profissão da ótica"],
                    ["Gözlem", "-lem (ação mental)", "Observação"],
                    ["Gözsüz", "-süz (privação)", "Cego / Sem olhos"]
                ]
            }
        ],
        "vocabulary": [
            {"turkish": "Arkadaş", "portuguese": "Amigo(a)", "pronunciation": "ar-ka-dash", "category": "Relações", "example": "Eski bir arkadaşım. (Um velho amigo meu.)"},
            {"turkish": "Vatandaş", "portuguese": "Cidadão", "pronunciation": "va-tan-dash", "category": "Sociedade", "example": "Türkiye Cumhuriyeti vatandaşı. (Cidadão da República da Turquia.)"},
            {"turkish": "Gözlük", "portuguese": "Óculos", "pronunciation": "göz-lyuk", "category": "Objetos", "example": "Gözlüğümü unuttum. (Esqueci meus óculos.)"}
        ],
        "dialogues": [
            {"speaker": "Alıcı", "turkish": "En yakın kitapçı nerede?", "portuguese": "Onde fica a livraria mais próxima?"},
            {"speaker": "Esnaf", "turkish": "Şu köşeyi dönünce sağda bir kitapçı var.", "portuguese": "Ao virar aquela esquina, há uma livraria à direita."}
        ],
        "tips": [
            "A palavra 'Arkadaş' vem historicamente de 'Arka' (costas/retaguarda) + 'daş' (compartilhador): o amigo é aquele que cuida das suas costas nas batalhas!"
        ]
    }
]
