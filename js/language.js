// Objeto de tradução para inglês e português
const translations = {
    'home': { en: 'Home', pt: 'Início' },
    'about': { en: 'About Me', pt: 'Sobre Mim' },
    'skills': {en: 'Skills', pt: 'Habilidades'},
    'services' : { en: 'Services', pt: 'Serviços' },
    'contact' : { en: 'Contact', pt: ' Contato ' }, 
    'developer' : { en: 'Front-End Developer | Graphic Designer', pt: 'Desenvolvedor Front-end | Designer Gráfico'},
     'descricao' : { en: 'This is my official website and portfolio. All the details of the projects developed by me are here.', pt:`Este é meu Website e Portfólio oficial.
     Todos os detalhes dos trabalhos desenvolvidos por mim estão aqui.`},
     'roll': {en: 'Scroll down!', pt: 'Role para baixo!'},

     'aboutme' : {en: 'About me', pt: ' Sobre mim' },
     'developer&' : {en: 'Developer and designer', pt: 'Programador e designer'},
    'descricao-profissional' : {en: 'Full-Stack Development Scholar at Growdev through the DESPERTAR.DEV program, with experience in Java programming language. Additionally, experienced in creating content for social media using Photoshop. At just 17 years old, I have a strong affinity for designing and developing interfaces, continually striving for professionalism and innovation', 
    pt:'Bolsista em desenvolvimento Full-Stack pela Growdev no programa DESPERTAR.DEV e com conhecimento em linguagem Java. Além de produções para redes sociais utilizando Photoshop. Apenas 17 anos e grande identificação pela criação e desenvolvimento de interfaces, buscando cada vez mais profissionalismo e inovação.'},

    'year': { en: 'Year <br> experience', pt: ' Ano <br> experiência'},
    'project': { en: 'Project <br> completed', pt: ' Projetos <br> Entregues'},

    'skills-area': { en: 'My Skills', pt: ' Habilidades'},
    'tecnical' : { en: 'My technical level', pt: ' Meu nível técnico'},

    'skill-two': { en: 'Development Backend', pt: ' Desenvolvimento Backend'},
    'skill-two-level': { en: 'Junior Developer ', pt: ' Desenvolvedor Junior'},


    'skill-three-level': { en: 'Beginner', pt: 'Iniciante'},

    'skill-four': { en: 'Apps development', pt: ' Desenvolvimento de apps'},
    'skill-four-level': { en: 'Junior Beginner', pt: ' Iniciante'},

    'skill-one': { en: 'Development Frontend', pt: ' Desenvolvimento Front-End'},
    'skill-one-level': { en: 'Junior Developer ', pt: ' Desenvolvedor Junior'},

    'qualification': { en: ' Qualitifications', pt: ' Qualificação' },
    'journey': { en: 'My journey so far', pt: ' Minha jornada até o momento '},

    'servicestwo': { en: 'What can I offer you?', pt: ' O que eu posso lhe oferecer?' },

    'educations': { en: 'Education', pt:'Formação'},


    'myportfolio': { en: 'My portfolio', pt: ' Meu portfolio'},
    'projectss': { en: 'My recent works', pt: 'Meus trabalhos mais recentes'},

    'money': { en: 'Do you need a project?', pt: 'Você precisa de um projeto?' },
    'prices': { en:'Call at the price, 30% discount on your first contact.', pt: 'Chama no precinho, 30% de desconto no seu primeiro contato.'},
    'bora' : { en: 'lets talk!', pt: 'Vamos conversar?' },

    'fala' : { en: 'Want to talk to me?', pt: ' Quer falar comigo?' },
    'boa' : { en: 'Arrived at the right place!', pt: ' Chegou ao lugar certo!'},

    'number' : { en: 'Number', pt: 'Telefone'},
    'adress' : { en: 'Adress', pt: 'Endereço'},

    'name' : { en: 'Name', pt: ' Nome'},
    'message' : { en: 'Message', pt: 'Mensagem'},

    'designredes' : { en: 'Design for social networks', pt: 'Design para redes sociais'},
    
    'directs' : { en: '&#169 Marco Antônio. All rights reserved, 2023' , pt: '&#169 Marco Antônio. Todos os direitos reservados. 2023'},

    'messages' : { en: ' Send me a message', pt: ' Enviar a mensagem' },

    'efeito' : { en: 'What does this service give you?', pt: 'O que esse serviço te proporciona?' },

    'one' : { en: 'Organized social networks;', pt: 'Redes Sociais organizadas;'},
    'two' : { en: 'Professional content production;', pt: 'Produção de conteúdo profissional;'},
    'three' : { en: 'I transform complex concepts into simple art;', pt: 'Transformo conceitos complexos em artes simples;'},
    'four' : { en: 'Identifying with the client.', pt: 'Passar identificação com o cliente.'},
    'five' : { en: 'Leverage your business;', pt: 'Alavancagem do seu negócio;'},
    'six' : { en: 'Responsive, fast-loading websites;', pt: 'Sites responsivos e de carregamento rápido;'},
    'seven' : { en: 'Modern Standards;', pt: 'Padrões modernos;'},
    'eight' : { en: 'Professional and innovative interfaces.', pt: 'Interfaces profissionais e inovadoras;'},
    'nine' : { en: 'Practical and professional app;', pt: 'App prático e profissinal;'},
    'ten' : { en: 'Easy for your E-Commerce.', pt: 'Facilidade para seu E-Commerce.'},

    'english': { en: 'EN', pt: 'EN' },
    'portuguese': { en: 'PT', pt: 'PT' }
};



function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');

        // Verifica se a chave existe em translations e se a tradução para o idioma existe
        if (translations[key] && translations[key][language]) {
            const translation = translations[key][language];
            // Quebra linha
            element.innerHTML = translation.replace(/\n/g, '<br>');
        }
    });
}


// Aqui faz o site começar em pt
document.addEventListener("DOMContentLoaded", function () {
    changeLanguage('pt');
});

// Aqui troca p inglês
document.getElementById('nav-toggle').addEventListener('click', function () {
    changeLanguage('en');
});
