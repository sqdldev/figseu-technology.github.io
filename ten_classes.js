class Ball {
  constructor() {
    this.geometry = new THREE.SphereGeometry(0.5, 20, 20);
    this.material = new THREE.MeshLambertMaterial({ color: 0xff1111 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, 0.6, 0);
    scene.add(this.mesh);
    this.speed = { z: 0, y: 0 };
    this.landed = true;
    //The position where the ball starts jumping
    this.tmpZ = 0;
    this.count2Lose = 0;
  }
  update() {
    this.mesh.position.y += this.speed.y;
    this.mesh.position.z += this.speed.z;
    camera.position.z += this.speed.z;
    if (this.mesh.position.y <= 0.6 && this.mesh.position.y > 0 && !this.count2Lose) {
      this.landed = false;
      world.forEach(v => {
        if (v instanceof Mat || v instanceof Bouncer) {
          if (v.detect()) {
            this.landed = true;
            this.speed.y = 0;
            this.mesh.position.y = 0.6;
            if (this.tmpZ) {
              this.mesh.position.z = this.tmpZ - 4;
              camera.position.z = this.tmpZ - 4 + distance;
              this.tmpZ = 0;
            }
          }
        }
      });

      if (!this.landed) {
        this.speed.y -= 0.04;
        if (!this.count2Lose) this.count2Lose = 1;
      }
      world.forEach(v => {
        if (v instanceof Bouncer && this.landed) {
          if (v.detect() && started) {
            this.landed = false;
            this.speed.y = 0.5;
            this.tmpZ = this.mesh.position.z;
            v.line.position.y = 0.8;
            $('#jump').each(function(){
                  this.pause(); // Stop playing
                  this.currentTime = 0; // Reset time
            });
            $('#jump').get(0).play();
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Mysterybox && this.landed) {
          if (v.detect() && started) {
            this.landed = false;
            v.mesh.position.y = -20;
            $('#crown').each(function(){
                  this.pause(); // Stop playing
                  this.currentTime = 0; // Reset time
            });
            $('#crown').get(0).play();
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Gem && this.landed) {
          if (v.detect() && started) {
            this.landed = false;
            v.mesh.position.y = -20;
            $('#gem').each(function(){
                  this.pause(); // Stop playing
                  this.currentTime = 0; // Reset time
            });
            $('#gem').get(0).play();
          }
        }
      });
    } else {
      this.landed = false;
      this.speed.y -= 0.04;
    }
    if (this.count2Lose) {
      this.count2Lose++;
      if (this.count2Lose >= 5) gameover();
    }
    world.forEach(v => {
      if (v instanceof Goal)
      if (v.detect()) gameover();
      star = 2;
    });
    world.forEach(v => {
      if (v instanceof Obstacle)
      if (v.detect()) gameover();
      star = 1;
    });
   world.forEach(v => {
      if (v instanceof Dreamcube)
      if (v.detect()) gameover();
      star = 1;
    });
   world.forEach(v => {
      if (v instanceof Dreamtower)
      if (v.detect()) gameover();
      star = 1;
    });
  }
}

class Mat {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: color });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.fog = new THREE.Fog(0x00734B, 5, 15);
    scene.add(this.line);
  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.8 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.8 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.8 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.8 &&
      ball.mesh.position.z <= 0.8
    ) return true;
  }
}
class Bouncer {

  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshBasicMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: color });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.6 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.6 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.55 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
      ball.mesh.position.z <= 0.55
    ) return true;
  }
}

class Obstacle {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: color });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.4, zpos);
    this.line.position.set(xpos, 0.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.3 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.3 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.3 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.3 &&
      ball.mesh.position.z <= 0.3 &&
      ball.mesh.position.y < this.mesh.position.y + 0.4
    ) return true;
  }
}

class Dreamcube {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.SphereGeometry(0.5, 0.5, 0.5);
    this.material = new THREE.MeshPhongMaterial({ color: 0x9900AF });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xE8A2FF });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.7, zpos);
    this.line.position.set(xpos, 3, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.45 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.45 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.45 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.45 &&
      ball.mesh.position.z <= 0.45 &&
      ball.mesh.position.y < this.mesh.position.y + 4
    ) return true;
  }
}

class Skyobstacle {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: color });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 1.4, zpos);
    this.line.position.set(xpos, 1.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.4 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.4 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.4 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.4 &&
      ball.mesh.position.z <= 0.4 &&
      ball.mesh.position.y < this.mesh.position.y + 0.4
    ) return true;
  }
}

class Trskyobstacle {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: color });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 2.4, zpos);
    this.line.position.set(xpos, 2.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.4 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.4 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.4 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.4 &&
      ball.mesh.position.z <= 0.4 &&
      ball.mesh.position.y < this.mesh.position.y + 0.4
    ) return true;
  }
}

class Mysterybox {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.SphereGeometry(0.7, 2, 2);
    this.material = new THREE.MeshPhongMaterial({ color: 0xFFF700 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xFF9D00 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 1.1, zpos);
    this.line.position.set(xpos, 1.1, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
      ball.mesh.position.z <= 0.5 &&
      ball.mesh.position.y < this.mesh.position.y + 2
    ) return true;
  }
}

class Gem {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.SphereGeometry(0.7, 2, 2);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x007CFF });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 1.1, zpos);
    this.line.position.set(xpos, 1.1, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
      ball.mesh.position.z <= 0.5 &&
      ball.mesh.position.y < this.mesh.position.y + 2
    ) return true;
  }
}

class Goal {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.TorusGeometry(0.3, 2, 2);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: color });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.4, zpos);
    this.line.position.set(xpos, 0.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.4 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.4 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.4 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.4 &&
      ball.mesh.position.z <= 0.4 &&
      ball.mesh.position.y < this.mesh.position.y + 2
    ) return true;
  }
}

class Crystal {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.SphereGeometry(1000, 6, 4);
    this.material = new THREE.MeshPhongMaterial({ color: 0xFF0018 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xFF0018 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, -2, zpos);
    this.line.position.set(xpos, -2, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0 &&
      ball.mesh.position.x <= this.mesh.position.x + 0 &&
      ball.mesh.position.z >= this.mesh.position.z - 0 &&
      ball.mesh.position.z <= this.mesh.position.z + 0 &&
      ball.mesh.position.z <= 0 &&
      ball.mesh.position.y < this.mesh.position.y + 0
    ) return true;
  }
}

class Dreamtower {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.CylinderGeometry(0.5, 0.5, 5);
    this.material = new THREE.MeshPhongMaterial({ color: 0x9900AF });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xE8A2FF });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.7, zpos);
    this.line.position.set(xpos, 4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
      ball.mesh.position.z <= 0.5 &&
      ball.mesh.position.y < this.mesh.position.y + 10
    ) return true;
  }
}
