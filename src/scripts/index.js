const posts = [
    {
      id: 1,
      title:
        "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
      text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
      user: "Iris Silva",
      stack: "Front end Engineer",
      img: "./src/assets/img/user5.svg",
      likes: 25
    },
    {
      id: 2,
      title:
        "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
      text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
      user: "Carla Maria",
      stack: "Back end Engineer",
      img: "./src/assets/img/user6.svg",
      likes: 19
    },
    {
      id: 3,
      title: "O que é programação orientada a objetos e programação funcional",
      text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
      user: "João Carvalho",
      stack: "Devop's",
      img: "./src/assets/img/user7.svg",
      likes: 8
    },
  ];

function handleModal(){
    const container = document.querySelector('.publications__container')
    const buttons = container.querySelectorAll('button')
    const modalController = document.querySelector(".modal__controller");
    for(let i = 0; i< buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            modalController.showModal()
            
        })
    }
    closeModal()
    closeModalBackdrop()
}

function closeModal(){
    const modalController = document.querySelector('.modal__controller')
    const closeButton = document.querySelector('.modal__close')

    closeButton.addEventListener('click', function() {
        modalController.close();
    })
}

function closeModalBackdrop(){
    const modalController = document.querySelector('.modal__controller')
    modalController.addEventListener('click', function(event) {
        if(event.target.classList.contains('modal__controller') == true) {
            modalController.close()
        }
    })
}

function handleProductsModal(array){
    const container = document.querySelector('.publications__container')
    const modalController = document.querySelector('.modal__controller')
    const postButton = container.querySelectorAll('button') 
    let foundButton = {}
    for(let i = 0; i < postButton.length; i++){
        const currentButton = postButton[i]

        currentButton.addEventListener('click', function(event){
            modalController.innerHTML = ""

            for(let buttonId = 0; buttonId < array.length; buttonId++){
                if(array[buttonId].id == event.target.id){
                    foundButton = array[buttonId]
                }
            }
            const post = createPost(foundButton)
        })
    }
}

function createPost(element){
    const modalTag = document.querySelector('.modal__controller')

    const containerDiv = document.createElement('div')
    const modalArticle = document.createElement('article')
    const modalDiv = document.createElement('div')
    const modalImage = document.createElement('img')
    const infoDiv = document.createElement('div')
    const name = document.createElement('h2')
    const modalStack = document.createElement('p')
    const postTitle = document.createElement('h2')
    const postContent = document.createElement('p')
    const modalClose = document.createElement('button')

    modalImage.src = element.img;
    name.innerText = element.user;
    modalStack.innerText = element.stack;
    postTitle.innerText = element.title;
    postContent.innerText = element.text;
    modalClose.innerText = 'X';

    containerDiv.classList.add('modal__container')
    modalArticle.classList.add('modal__article')
    modalDiv.classList.add('info__container')
    modalImage.classList.add('user__image')
    infoDiv.classList.add('info__item')
    name.classList.add('title2')
    modalStack.classList.add('text2')
    postTitle.classList.add('title1')
    postContent.classList.add('text1')
    modalClose.classList.add('modal__close')

    infoDiv.appendChild(name)
    infoDiv.appendChild(modalStack)

    modalDiv.appendChild(modalImage)
    modalDiv.append(infoDiv)


    modalArticle.append(modalDiv)
    modalArticle.appendChild(postTitle)
    modalArticle.appendChild(postContent)

    containerDiv.append(modalArticle)

    modalDiv.append(modalClose)
    modalTag.append(containerDiv)

    closeModal();

}

handleModal();
closeModalBackdrop();
handleProductsModal(posts);

