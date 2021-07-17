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
        } else if (v instanceof Speedup || v instanceof Bouncer) {
          if (v.detect()) {
            ball.speed.z = -0.3;
            this.landed = true;
            this.speed.y = 0;
            this.mesh.position.y = 0.6;
            if (this.tmpZ) {
              this.mesh.position.z = this.tmpZ - 4;
              camera.position.z = this.tmpZ - 4 + distance;
              this.tmpZ = 0;
            }
          }
        } else if (v instanceof Speednormal || v instanceof Bouncer) {
          if (v.detect()) {
            ball.speed.z = -0.15;
            this.landed = true;
            this.speed.y = 0;
            this.mesh.position.y = 0.6;
            if (this.tmpZ) {
              this.mesh.position.z = this.tmpZ - 4;
              camera.position.z = this.tmpZ - 4 + distance;
              this.tmpZ = 0;
            }
          }
        } else if (v instanceof Speeddown || v instanceof Bouncer) {
          if (v.detect()) {
            ball.speed.z = -0.05;
            this.landed = true;
            this.speed.y = 0;
            this.mesh.position.y = 0.6;
            if (this.tmpZ) {
              this.mesh.position.z = this.tmpZ - 4;
              camera.position.z = this.tmpZ - 4 + distance;
              this.tmpZ = 0;
            }
          }
        } else if (v instanceof Holemat || v instanceof Bouncer) {
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
        } else if (v instanceof Back || v instanceof Bouncer) {
          if (v.detect()) {
            ball.speed.z = 0.15;
            this.landed = true;
            this.speed.y = 0;
            this.mesh.position.y = 0.6;
            if (this.tmpZ) {
              this.mesh.position.z = this.tmpZ - 4;
              camera.position.z = this.tmpZ - 4 + distance;
              this.tmpZ = 0;
            }
          }
        } else if (v instanceof Downobstacle || v instanceof Bouncer) {
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
        } else if (v instanceof Upobstacle || v instanceof Bouncer) {
          if (v.detect()) {
            v.mesh.position.y = 0.2;
            v.line.position.y = 0.2;
            this.landed = true;
            this.speed.y = 0;
            this.mesh.position.y = 0.6;
            if (this.tmpZ) {
              this.mesh.position.z = this.tmpZ - 4;
              camera.position.z = this.tmpZ - 4 + distance;
              this.tmpZ = 0;
            }
          }
        } else if (v instanceof DebugMat || v instanceof Bouncer) {
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
        } else if (v instanceof Worpmat || v instanceof Bouncer) {
          if (v.detect()) {
            this.landed = true;
            this.speed.y = 0;
            this.mesh.position.y = 0;
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
            v.mesh.position.y = 0.8;
            $('#jump').each(function(){
                  this.pause(); // Stop playing
                  this.currentTime = 0; // Reset time
            });
            $('#jump').get(0).play();
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Fastbouncer && this.landed) {
          if (v.detect() && started) {
            this.landed = false;
            this.speed.y = 0.3;
            this.tmpZ = this.mesh.position.z;
            v.mesh.position.y = 0;
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
      world.forEach(v => {
        if (v instanceof Downobstacle && this.landed) {
          if (v.detect() && started) {
            this.landed = true;
            v.mesh.position.y = -0.4;
            v.line.position.y = -0.4;
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Upobstacle && this.landed) {
          if (v.detect() && started) {
            this.landed = true;
            v.mesh.position.y = -0.4;
            v.line.position.y = -0.4;
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Speedup && this.landed) {
          if (v.detect() && started) {
             $('#speedup').each(function(){
                  this.pause(); // Stop playing
                  this.currentTime = 0; // Reset time
             });
             $('#speedup').get(0).play();
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Speeddown && this.landed) {
          if (v.detect() && started) {
             $('#speeddown').each(function(){
                  this.pause(); // Stop playing
                  this.currentTime = 0; // Reset time
             });
             $('#speeddown').get(0).play();
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Hole && this.landed) {
          if (v.detect() && started) {
             $('#speedup').each(function(){
                  this.pause(); // Stop playing
                  this.currentTime = 0; // Reset time
             });
             $('#speedup').get(0).play();
          }
        }
      });
      world.forEach(v => {
        if (v instanceof FellGate && this.landed) {
          if (v.detect() && started) {
             $('#speedup').each(function(){
                  this.pause(); // Stop playing
                  this.currentTime = 0; // Reset time
             });
             $('#speedup').get(0).play();
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Back && this.landed) {
          if (v.detect() && started) {
             $('#speeddown').each(function(){
                  this.pause(); // Stop playing
                  this.currentTime = 0; // Reset time
             });
             $('#speeddown').get(0).play();
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Deltemat && this.landed) {
          if (v.detect() && started) {
            v.mesh.position.y -= 0.5;
            v.line.position.y -= 0.5;
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Leftmat && this.landed) {
          if (v.detect() && started) {
            camera.rotation.y += 0.01;
             $('#speedup').each(function(){
                  this.pause(); // Stop playing
                  this.currentTime = 0; // Reset time
             });
             $('#speedup').get(0).play();
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Rightmat && this.landed) {
          if (v.detect() && started) {
            camera.rotation.y -= 0.01;
             $('#speedup').each(function(){
                  this.pause(); // Stop playing
                  this.currentTime = 0; // Reset time
             });
             $('#speedup').get(0).play();
          }
        }
      });
      world.forEach(v => {
        if (v instanceof Bluestoneobstacle && this.landed) {
          if (v.detect() && started) {
            v.line.position.y += 0.01;
            v.line.rotation.y += 0.01;
            v.line.rotation.x += 0.01;
            v.mesh.position.y += 0.01;
            v.mesh.rotation.y += 0.01;
            v.mesh.rotation.x += 0.01;
          }
        }
      });
      star = 1;
    } else {
      this.landed = false;
      this.speed.y -= 0.04;
    }
    if (this.count2Lose) {
      this.count2Lose++;
      if (this.count2Lose >= 5) gameover();
      star = 1;
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
      if (v instanceof ElectronicRound)
      if (v.detect()) gameover();
      star = 1;
    });
    world.forEach(v => {
      if (v instanceof FellObstacle)
      if (v.detect()) gameover();
      star = 1;
    });
   world.forEach(v => {
      if (v instanceof Dreamcube)
      if (v.detect()) gameover();
      star = 1;
    });
    world.forEach(v => {
      if (v instanceof Highobstacle)
      if (v.detect()) gameover();
      star = 1;
    });
    world.forEach(v => {
      if (v instanceof Tower)
      if (v.detect()) gameover();
      star = 1;
    });
    world.forEach(v => {
      if (v instanceof Upobstacle)
      if (v.detect()) gameover();
      star = 1;
    });
    world.forEach(v => {
      if (v instanceof Railgun)
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
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);
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
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);
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
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.4, zpos);
    this.line.position.set(xpos, 0.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

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
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.4 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.4 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.4 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.4 &&
      ball.mesh.position.z <= 0.4 &&
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
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 1.4, zpos);
    this.line.position.set(xpos, 1.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

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
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 2.4, zpos);
    this.line.position.set(xpos, 2.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

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
      ball.mesh.position.x >= this.mesh.position.x - 0.4 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.4 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.4 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.4 &&
      ball.mesh.position.z <= 0.4 &&
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
class Speedup {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshPhongMaterial({ color: 0xFF0D00 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);
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
class Speednormal {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);
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
class Speeddown {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshPhongMaterial({ color: 0x006DFF });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);
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
class Back {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshPhongMaterial({ color: 0xCE00FF });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);
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
class Hole {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.TorusGeometry(1, 0.2, 5);
    this.material = new THREE.MeshPhongMaterial({ color: 0xFF00D2 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xC8A600 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.4, zpos);
    this.line.position.set(xpos, 0.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.8 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.8 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.8 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.8 &&
      ball.mesh.position.z <= 0.8 &&
      ball.mesh.position.y < this.mesh.position.y + 1
    ) return true;
  }
}
class Holemat {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);
  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 5 &&
      ball.mesh.position.x <= this.mesh.position.x + 5 &&
      ball.mesh.position.z >= this.mesh.position.z - 5 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.8 &&
      ball.mesh.position.z <= 1
    ) return true;
  }
}

class Fastbouncer {

  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshBasicMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);
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

class Highobstacle {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 3, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.4, zpos);
    this.line.position.set(xpos, 0.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

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
class Tower {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 5, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.4, zpos);
    this.line.position.set(xpos, 0.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.4 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.4 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.4 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.4 &&
      ball.mesh.position.z <= 0.4 &&
      ball.mesh.position.y < this.mesh.position.y + 3
    ) return true;
  }
}

class Upobstacle {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

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
class Downobstacle {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.4, zpos);
    this.line.position.set(xpos, 0.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.8 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.8 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.8 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.8 &&
      ball.mesh.position.z <= 0.8 &&
      ball.mesh.position.y < this.mesh.position.y + 2
    ) return true;
  }
}

class Deltemat {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 10 &&
      ball.mesh.position.x <= this.mesh.position.x + 10 &&
      ball.mesh.position.z >= this.mesh.position.z - 7 &&
      ball.mesh.position.z <= this.mesh.position.z + 7 &&
      ball.mesh.position.z <= 7 &&
      ball.mesh.position.y < this.mesh.position.y + 7
    ) return true;
  }
}
class Worpmat {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 3, zpos);
    this.line.position.set(xpos, 3, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.8 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.8 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.8 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.8 &&
      ball.mesh.position.z <= 0.8 &&
      ball.mesh.position.y < this.mesh.position.y + 0.8
    ) return true;
  }
}

class Railgun {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.SphereGeometry(1, 16, 1);
    this.material = new THREE.MeshPhongMaterial({ color: 0x9900AF });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xE6E348 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.7, zpos);
    this.line.position.set(xpos, 0.7, zpos);
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
      ball.mesh.position.y < this.mesh.position.y + 10
    ) return true;
  }
}

class Leftmat {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.TorusGeometry(1, 0.2, 5);
    this.material = new THREE.MeshPhongMaterial({ color: 0x00BF10 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 10 &&
      ball.mesh.position.x <= this.mesh.position.x + 10 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.8 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.8 &&
      ball.mesh.position.z <= 0.8 &&
      ball.mesh.position.y < this.mesh.position.y + 0.8
    ) return true;
  }
}
class Rightmat {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.TorusGeometry(1, 0.2, 5);
    this.material = new THREE.MeshPhongMaterial({ color: 0xFF9500 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 10 &&
      ball.mesh.position.x <= this.mesh.position.x + 10 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.8 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.8 &&
      ball.mesh.position.z <= 0.8 &&
      ball.mesh.position.y < this.mesh.position.y + 0.8
    ) return true;
  }
}
class FellGate {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.TorusGeometry(1, 0.2, 5);
    this.material = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('textures/Fell_Gate.jpeg') });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xC8A600 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.4, zpos);
    this.line.position.set(xpos, 0.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 0.8 &&
      ball.mesh.position.x <= this.mesh.position.x + 0.8 &&
      ball.mesh.position.z >= this.mesh.position.z - 0.8 &&
      ball.mesh.position.z <= this.mesh.position.z + 0.8 &&
      ball.mesh.position.z <= 0.8 &&
      ball.mesh.position.y < this.mesh.position.y + 1
    ) return true;
  }
}
class FellObstacle {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('textures/Fell_Obstacle.png') });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.4, zpos);
    this.line.position.set(xpos, 0.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

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
class DaysCube {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('textures/Days_C.cmr') });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 2.4, zpos);
    this.line.position.set(xpos, 2.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

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
class ElectronicRound {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    this.material = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('textures/ElectronicRound.cmr') });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.6, zpos);
    this.line.position.set(xpos, 0.6, zpos);
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
      ball.mesh.position.y < this.mesh.position.y + 0.5
    ) return true;
  }
}
class Bluestoneobstacle {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshPhongMaterial({ color: 0xF1F1F1 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0.4, zpos);
    this.line.position.set(xpos, 0.4, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.line);
    scene.add(this.mesh);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 10 &&
      ball.mesh.position.x <= this.mesh.position.x + 10 &&
      ball.mesh.position.z >= this.mesh.position.z - 7 &&
      ball.mesh.position.z <= this.mesh.position.z + 7 &&
      ball.mesh.position.z <= 7 &&
      ball.mesh.position.y < this.mesh.position.y + 7
    ) return true;
  }
}

class DebugMat {
  constructor(xpos, zpos, color) {
    color = parseInt(color);
    this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
    this.material = new THREE.MeshPhongMaterial({ color: color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
    this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0x909000 });
    this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
    this.mesh.position.set(xpos, 0, zpos);
    this.line.position.set(xpos, 0, zpos);
    this.mesh.name = 'level component';
    this.line.name = 'level component';
    scene.add(this.mesh);
    scene.add(this.line);

  }
  detect() {
    if (
      ball.mesh.position.x >= this.mesh.position.x - 1000 &&
      ball.mesh.position.x <= this.mesh.position.x + 1000 &&
      ball.mesh.position.z >= this.mesh.position.z - 1000 &&
      ball.mesh.position.z <= this.mesh.position.z + 1000 &&
      ball.mesh.position.z <= 1
    ) return true;
  }
}
