# DEV.SPOT

Aplicativo mobile desenvolvido com **Expo + React Native** como trabalho prático da disciplina de Tópicos Especiais.

O app apresenta o portfólio de uma desenvolvedora Front-end em duas telas:

- **Home** — logo, foto de perfil, texto de apresentação, botões "Sobre mim" e "Entre em contato!", switch de visualização e links para as redes sociais (GitHub, LinkedIn, Instagram e Twitch).
- **Sobre mim** — biografia completa e rodapé com créditos.

## Sobre a atividade

Trabalho prático em grupo: desenvolver um app mobile com Expo + React Native que reproduza as duas telas do layout fornecido, praticando estruturação de componentes, estilização, navegação entre telas e organização de projeto. Não é preciso copiar cores e fontes exatamente, mas a estrutura, a hierarquia de informação e os elementos das telas devem ser mantidos.

### Tela 1 – Home

- [ ] Logo ou nome do app no topo
- [ ] Imagem de perfil (ou ilustrativa)
- [ ] Texto de apresentação (título + descrição)
- [ ] Botão **"Sobre mim"** → leva para a segunda tela
- [ ] Botão **"Entre em contato!"** → mostra um Alert com a mensagem "Entre em contato"
- [ ] Seção "Acesse minhas redes" com botões para GitHub, LinkedIn, Instagram e Twitch
- [ ] Switch que mostra um Alert com a mensagem "Switch pressionado"

### Tela 2 – Sobre mim

- [ ] Título "Sobre mim"
- [ ] Texto descritivo (biografia/apresentação)
- [ ] Layout organizado com boa legibilidade
- [ ] Rodapé com créditos

### Requisitos técnicos

- [x] Desenvolvido com Expo e React Native
- [ ] Componentes reutilizáveis
- [ ] Estilização com `StyleSheet`
- [x] Organização de pastas (`src/screens`, `src/components`, `src/assets`)

### Diferenciais (opcionais)

- [ ] Animações simples
- [ ] Dark mode / alternância de tema
- [ ] Ícones personalizados
- [ ] Links reais abrindo redes sociais
- [ ] Responsividade

### Entrega

- [x] Repositório no GitHub com o projeto completo
- [ ] README com nome dos integrantes, descrição do app, prints das telas e como rodar o projeto
- [ ] Link do repositório enviado na atividade

## Integrantes

- Calebe
- _Integrante 2_
- _Integrante 3_

## Prints das telas

| Home | Sobre mim |
| :--: | :-------: |
| _em breve_ | _em breve_ |

## Tecnologias

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/) (native stack)
- [@expo/vector-icons](https://icons.expo.fyi/)

## Estrutura de pastas

```
├── App.js
├── assets/              # Ícone e splash do app
└── src/
    ├── assets/images/   # Imagens usadas nas telas
    ├── components/      # Componentes reutilizáveis
    ├── navigation/      # Rotas (stack navigator)
    ├── screens/         # Telas Home e Sobre mim
    └── theme/           # Cores e estilos compartilhados
```

## Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) instalado e o app **Expo Go** no celular (ou um emulador Android/iOS).

```bash
# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npx expo start
```

Depois, escaneie o QR Code com o Expo Go (Android) ou com a câmera (iOS). Também é possível pressionar `a` para abrir no emulador Android ou `i` para o simulador iOS.
