class RadarChart 
{
  constructor (year, level0, level1, level2, level3, level4, level5, abst, absp, abse) 
  {
    this.year = year;
    
    this.levels = [];
    this.levels[0] = level0;
    this.levels[1] = level1;
    this.levels[2] = level2;
    this.levels[3] = level3;
    this.levels[4] = level4;
    this.levels[5] = level5;
    
    this.level_legends = [];
    this.level_legends[0] = "level0";
    this.level_legends[1] = "level1";
    this.level_legends[2] = "level2";
    this.level_legends[3] = "level3";
    this.level_legends[4] = "level4";
    this.level_legends[5] = "level5";
    
    this.max = 50;
    this.scale = 2;
    
    this.radar_chart_size = (this.max*2)*this.scale;
    
    this.abst = abst;
    this.absp = absp;
    this.abse = abse;
  }
  
  drawRadarChart (x, y)
  {
    push();
    translate (x, y);
  
    angleMode (DEGREES); // 0 a 360
    this.a = 0; //angulo
    this.p = [];
  
    for (let i=0; i<6; i++) // 6 é o numero de niveis de escolariedade
    {
      push();
        translate (0, 0);
      
        rotate (this.a);
        this.p[i] = screenPosition (this.levels[i]*this.scale, 0);
        
        stroke(0);
        strokeWeight (1);
        line (0, 0, this.max*this.scale, 0);
      
        this.a -= 60;
      pop();
    }
    pop();
    
    stroke(0);
    strokeWeight (1);
    noFill();
    beginShape();
      vertex(this.p[0].x, this.p[0].y);
      vertex(this.p[1].x, this.p[1].y);
      vertex(this.p[2].x, this.p[2].y);
      vertex(this.p[3].x, this.p[3].y);
      vertex(this.p[4].x, this.p[4].y);
      vertex(this.p[5].x, this.p[5].y);
    endShape(CLOSE);
    
    for (let i=0; i<6; i++) 
    {
      ellipseMode (RADIUS);
      noStroke();
      fill(0);
      ellipse (this.p[i].x, this.p[i].y, 3, 3);
      
      text(this.levels[i], this.p[i].x, this.p[i].y-10);
      text(this.level_legends[i], this.p[i].x, this.p[i].y+10);
    }
    
    noStroke();
    fill (255, 0, 255, 100);
    ellipseMode (RADIUS);
    ellipse (x, y, map(this.abst, 0, 100, 0, this.max*this.scale) );
    
    fill(0);
    text(this.year, x, y+this.max*this.scale + 10);
  }
  
}