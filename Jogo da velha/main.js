/**
 * 
 */
 
 var tela = document.querySelector('canvas');
 var pincel = tela.getContext('2d');
 var tam_tela_x = 400;
 var tam_tela_y = 400;
 var recuo_tela = 0;
 var vetor_posicoes_quadrados_jogo_x = [];
 var vetor_posicoes_quadrados_jogo_y = [];
 var vetor_jogador_a = [];
 var vetor_jogador_b = [];
 
 
 var jogador_circulo = true;
 var img_cruz= new Image();
 img_cruz.src= 'img/cruz.png';
 var img_circulo= new Image();
 img_circulo.src= 'img/circulo.png';
 var qtde_vazias;
 var vetor_casas_tabuleiro = [0,0,0,0,0,0,0,0,0];
 var vencedor = null;
 var empate;
 
 var botao_limpar = document.querySelector('.botao-limpa-tela');
 

 
 
 function iniciaJogo(){
    var posicaoBotao = document.querySelector(".fundo-jogo");
    posicaoBotao.innerHTML = "<button class = 'novo-botao'> Clique em mim </button>";
    
}

function desenhaTelaInicial(){
    
    vetor_casas_tabuleiro = [0,0,0,0,0,0,0,0,0];
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(recuo_tela, recuo_tela, tam_tela_x,tam_tela_y);    
    const recuo_inicial = 0;
    var posicao_inicial = 133;
    var tamanho_linha = 400;
    qtde_vazias = 9;
    jogador_circulo = true;
    
    
    //celulas
    
    atualizaPagina();
    for (i = 0; i < 2; i++){ //linhas horizontais
       
        pincel.beginPath();
        pincel.moveTo(recuo_inicial, posicao_inicial);
        pincel.lineTo(recuo_inicial+tamanho_linha, posicao_inicial);
        pincel.closePath();
        pincel.stroke();
        posicao_inicial+=133;
        
    }
    
   posicao_inicial = 133;
    
   for (i=0; i<2; i++){
    
       pincel.beginPath();
       pincel.moveTo(posicao_inicial, recuo_inicial);
       pincel.lineTo(posicao_inicial, recuo_inicial+tamanho_linha);
       pincel.closePath();
       pincel.stroke();
       posicao_inicial+=133; 
}
    
    }
    
    
function comeca_jogo (){
    
}

function coloca_marcador_e_verifica_as_condicoes_de_vitoria(pos_x, pos_y, posicao_tabuleiro){
    
    var imagem;
    
    if (checa_se_casa_esta_vazia(posicao_tabuleiro)){
        
        if (jogador_circulo){
        imagem = img_circulo;
        vetor_casas_tabuleiro[posicao_tabuleiro]="o";
        jogador_circulo = false;
        
        }else {
            imagem = img_cruz;
            vetor_casas_tabuleiro[posicao_tabuleiro]="x";
            jogador_circulo=true;
    }
    pincel.drawImage(imagem, pos_x, pos_y,80,80);
    var vitoria = checa_condicao_vitoria();
    console.log(vitoria);
    
    if (vitoria){
        finalizaJogo();
    }
    else {
        atualizaPagina();
    }
    }     
}

function checa_se_casa_esta_vazia(posicao_tabuleiro){
    if ((vetor_casas_tabuleiro[posicao_tabuleiro] == 0)){
        qtde_vazias-=1;
        console.log(qtde_vazias);
        return true;
    }
    return false;
}

function atualizaPagina(){
    
   var inicio = "É a vez do jogador " 
   var texto = document.querySelector('.textos-interface');
   
   if (jogador_circulo){
    inicio+="círculo";
    }else {
        inicio+="cruz";
    }
    
   texto.innerHTML = inicio; 
}
   
    
function finalizaJogo(){
    var texto = "";
    if (empate){
        texto+="Jogo empatado!";
    }else{   
        texto+="Parabéns! Você venceu!";
        }
    alert(texto);
    
}


function checa_condicao_vitoria(){
    
    
    //jogador circulo
    //checa linhas
    if (vetor_casas_tabuleiro[0] == "o" && vetor_casas_tabuleiro[1] == "o" && vetor_casas_tabuleiro[2] == "o"
    || vetor_casas_tabuleiro[3] == "o" && vetor_casas_tabuleiro[4] == "o" && vetor_casas_tabuleiro[5] == "o"
    || vetor_casas_tabuleiro[6] == "o" && vetor_casas_tabuleiro[7] == "o" && vetor_casas_tabuleiro[8] == "o"){
        
        return true;
        
    }
    //checa colunas
    else if (vetor_casas_tabuleiro[0] == "o" && vetor_casas_tabuleiro[3] == "o" && vetor_casas_tabuleiro[6] == "o"
    || vetor_casas_tabuleiro[1] == "o" && vetor_casas_tabuleiro[4] == "o" && vetor_casas_tabuleiro[7] == "o"
    || vetor_casas_tabuleiro[2] == "o" && vetor_casas_tabuleiro[5] == "o" && vetor_casas_tabuleiro[8] == "o"){
        
        return true;
    }
    //checa diagonais
    else if (vetor_casas_tabuleiro[0] == "o" && vetor_casas_tabuleiro[4] == "o" && vetor_casas_tabuleiro[8] == "o"
    || vetor_casas_tabuleiro[6] == "o" && vetor_casas_tabuleiro[4] == "o" && vetor_casas_tabuleiro[2] == "o"){
        
        return true;
    }
    
    //jogador cruz
    //checa linhas
    else if (vetor_casas_tabuleiro[0] == "x" && vetor_casas_tabuleiro[1] == "x" && vetor_casas_tabuleiro[2] == "x"
    || vetor_casas_tabuleiro[3] == "x" && vetor_casas_tabuleiro[4] == "x" && vetor_casas_tabuleiro[5] == "x"
    || vetor_casas_tabuleiro[6] == "x" && vetor_casas_tabuleiro[7] == "x" && vetor_casas_tabuleiro[8] == "x"){
        
        return true;
        
    }
    //checa colunas
    else if (vetor_casas_tabuleiro[0] == "x" && vetor_casas_tabuleiro[3] == "x" && vetor_casas_tabuleiro[6] == "x"
    || vetor_casas_tabuleiro[1] == "x" && vetor_casas_tabuleiro[4] == "x" && vetor_casas_tabuleiro[7] == "x"
    || vetor_casas_tabuleiro[2] == "x" && vetor_casas_tabuleiro[5] == "x" && vetor_casas_tabuleiro[8] == "x"){
        
        return true;
    }
    //checa diagonais
    else if (vetor_casas_tabuleiro[0] == "x" && vetor_casas_tabuleiro[4] == "x" && vetor_casas_tabuleiro[8] == "x"
    || vetor_casas_tabuleiro[6] == "x" && vetor_casas_tabuleiro[4] == "x" && vetor_casas_tabuleiro[2] == "x"){
        
        return true;
    }
    
    else if (qtde_vazias == 0){
        empate = true;
        return true;
        
    }
    
    else {
        return false;
    }
    
}

    

function verifica_posicao_clique(evento){
    
    var pos_x = evento.pageX - tela.offsetLeft;
    var pos_y = evento.pageY - tela.offsetTop;
    const quadrado = new Path2D();
    
    for (i =0; i < 9; i++){
        
        quadrado.rect(vetor_posicoes_quadrados_jogo_x[i],vetor_posicoes_quadrados_jogo_y[i],80,80);
        
        if (pincel.isPointInPath (quadrado, pos_x, pos_y)){
            console.log("cliquei na forma");
            coloca_marcador_e_verifica_as_condicoes_de_vitoria(vetor_posicoes_quadrados_jogo_x[i],vetor_posicoes_quadrados_jogo_y[i],i);
            break;
        }
        
    }
    
}

function desenhaQuadrados(){
    
    
    var pos_x = 30;
    var pos_y = 30;
    for (i=0; i <3; i++){
        
        
        
        for (j = 0; j<3; j++){
            
            
            
            vetor_posicoes_quadrados_jogo_x.push(pos_x);
            vetor_posicoes_quadrados_jogo_y.push(pos_y);
            
            
            pos_x+=130;
        }
     pos_x=30;  
     pos_y+=133; 
    }
    console.log(vetor_posicoes_quadrados_jogo_x);
    console.log(vetor_posicoes_quadrados_jogo_y);
}

function limpa_tela(){
    
    pincel.clearRect(0, 0, tam_tela_x, tam_tela_y);
    desenhaTelaInicial();
    
}


tela.onclick = verifica_posicao_clique;
botao_limpar.onclick = limpa_tela;

desenhaTelaInicial();
desenhaQuadrados();
