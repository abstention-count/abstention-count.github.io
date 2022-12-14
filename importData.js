function importData() {
  //console.log (tabela_01.getRows());
  //console.log (tabela_01.getRowCount());
  
  radar_charts = [];

  for (let r = 0; r < tabela_01.getRowCount(); r++) {
    //console.log (tabela_01.getRow(r));

    const year = tabela_01.getString(r, "anos");
    
    const level0 = tabela_01.getNum(r, "sem_nivel");
    const level1 = tabela_01.getNum(r, "basico_1o_ciclo");
    const level2 = tabela_01.getNum(r, "basico_2o_ciclo");
    const level3 = tabela_01.getNum(r, "basico_3o_ciclo");
    const level4 = tabela_01.getNum(r, "secundario_e_pos");
    const level5 = tabela_01.getNum(r, "superior");
    const abst = tabela_01.getNum(r, "abstencao_total");
    const absp = tabela_01.getNum(r, "abstencao_portugal");
    const abse = tabela_01.getNum(r, "abstencao_residentes_estrangeiro");
    /*
    console.log(
      year,
      level0,
      level1,
      level2,
      level3,
      level4,
      level5,
      abst,
      absp,
      abse
    ); 
    */
    
    radar_charts[r] = new RadarChart (year, level0, level1, level2, level3, level4, level5, abst, absp, abse);
  }
}


