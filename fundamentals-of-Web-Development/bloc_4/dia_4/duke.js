let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  let info1 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
  };

  for (let key in info) {
     console.log(info[key], ' e ', info1[key]);
  }

  info['recorrente'] = 'sim';
  info1['recorrente'] = 'sim';

  if (info.recorrente === info1.recorrente) {
      console.log('Ambos recorrentes');
  } else {
      console.log('Um nao é recorrente');
  }