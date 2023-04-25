class AsyncRepeater {
  //Accepts a callback and a time in ms to reoccur
  //Doesn't use setInterval for various reasons
  constructor(cb, ms, ...args) {
    this.cb = cb;
    this.time = ms;
    this.worker = null;
    this.args = args;
    this.started = false;
  }
  start() {
    if(!this.started) {
      this.worker = new Worker(`./js/repeater.js?ms=${this.time}&cb=${this.cb.name}(${this.args.toString()})`);
      this.started = true;

      this.worker.onmessage = function(e) {eval(e.data)};
    }
  }
  stop() {
    this.worker.terminate();
    this.started = false;
  }
}
//Factory for creating drawing objects with hitboxes
class Component {
  constructor(x = 0, y = 0, w = 0, h = 0, type = "poly", datapoints = []) {
    this.type = type; //Supported types: text, rect, sq, tri, circ, poly, and path
    this.width = w; this.height = h;
    this.vx = 0; this.vy = 0; this.x = x; this.y = y;

    switch(this.type) {
      case "poly":
        this.shape = new Shape(datapoints);
      break;
      case "text":
        this.text = datapoints;
      break;
    }
  }
  draw(ctx, stroke = "#000", fill = "#000") {
    switch(this.type) {
      case "text":
        ctx.font = this.width + " " + this.height;
        ctx.fillStyle = fill;
        ctx.strokeStyle = stroke;
        ctx.fillText(this.text, this.x, this.y);
              
      break;
    }
  }
}

//Defines drawing parameters for a component
//Points are relative to the origin
//Doesn't draw the shape just outlines where the stroke would go
class Shape {
  constructor(points = [], x, y) {
    this.points = points;
  }
  outline(ctx) {
    if(typeof this.points === 'array') {
      ctx.beginPath();
      ctx.moveTo(this.points[0].x, this.points[0].y);
      for(let i = 1; i < this.points.length; i++) {
        ctx.lineTo(this.points[i].x, this.points[i].y);
      }
      ctx.closePath();
    } else {
      switch (this.points) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(x, y, );
      }
    }
  }
}