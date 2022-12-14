function drawData() {
  
  const num_radar_charts_per_canvas_width = int(width/radar_charts[0].radar_chart_size);
  const num_radar_charts_per_canvas_height = ceil(tabela_01.getRowCount()/num_radar_charts_per_canvas_width);
  
  const hor_space = width/num_radar_charts_per_canvas_width;
  const ver_space = height/num_radar_charts_per_canvas_height;
  
  let i = 0;
  
  for (let y=0; y<num_radar_charts_per_canvas_height; y++) 
  {
    for (let x=0; x<num_radar_charts_per_canvas_width; x++) 
    {
      radar_charts[i].drawRadarChart (x*hor_space+hor_space/2, y*ver_space+ver_space/2);
      
      if (i<radar_charts.length-1) i++;
      else break;
    }
  }
}