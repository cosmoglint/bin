// javascript nonsense, that I created during testing



  // if (this.size+this.grow_rate <= min_limit){
  //   this.grow_rate = this.grow_rate;
  // }
  // else if (this.size+this.grow_rate >= max_limit){
  //   this.grow_rate = -this.grow_rate;
  // }
  // this.size = this.size + this.grow_rate;
  //

// if (this.size == min_limit){
//   this.grow_rate = 1;
// }
// else if (this.size == max_limit){
//   this.grow_rate = -1;
// }
// else if (this.size < min_limit){
//   this.grow_rate = 1;
//   this.size = this.size + this.grow_rate;
// }
// else if (this.size > max_limit){
//   this.grow_rate = -1;
//   this.size = this.size + this.grow_rate;
// }
// else{
//   this.size = this.size + this.grow_rate;
// }


// // genval = (inv) ? map(arr.length*2 - i*j -1,0,arr.length,min_limit,max_limit,true) : map(j*i,0,arr.length,min_limit,max_limit,true);
// cur_dis = dist(loc_mid.x,loc_mid.y,i,j);
// genval = map(cur_dis,0.0,corner_dist,min_limit,max_limit);
//
// // cursize = (genval  > max_size) ? (max_size - (genval )%max_size) : genval ;
//
// // cursize = (genval %(max_size*2) > max_size ) ? (max_size*2 - genval %(max_size*2)) : (genval %(max_size*2));
//
//
// // inval = (genval  > max_size) ? (-1) : (1);
// // inval = (genval  > max_size && Math.floor(genval /max_size)%2 == 0) ? (-1*grow_rate) : (1*grow_rate);
// inval = grow_rate;
//
// if (the_shape=="rectangle"){
//   arr[i][j] = new rectMover(in_size + (i)*space_dist,in_size + (j)*space_dist,genval,inval,col);
// }
// else if (the_shape=="circle"){
//   arr[i][j] = new circleMover(in_size + (i)*space_dist,in_size + (j)*space_dist,genval,inval,col);
// }


// this.show = function(){
//     circle(this.x_pos,this.y_pos,10);
//   }


// minesweeper logic

// set_numbers: function(){
//     for (let i=0; i<this.rows; i++){
//       for (let j=0; j<this.columns; j++){
//         sum = 0;
//         blck = this.block_list[i][j];
//         if (blck.mine == false){
//           if (i == 0 && j == 0){
//             sum += (this.check_mine(this.block_list[i][j+1])  + this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i+1][j+1]));
//           }
//           else if (i == 0 && j == this.columns-1){
//             sum += (this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j-1]) + this.check_mine(this.block_list[i+1][j]));
//           }
//           else if (i == this.rows-1 && j == 0){
//             sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i-1][j]));
//           }
//           else if (i == this.rows-1 && j == this.columns-1){
//             sum += (this.check_mine(this.block_list[i-1][j])  + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i][j-1]));
//           }
//           else if (i == 0){
//             sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j+1]) + this.check_mine(this.block_list[i+1][j-1]) + this.check_mine(this.block_list[i+1][j]));
//           }
//           else if (j == 0){
//             sum += (this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i-1][j]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i+1][j+1]));
//           }
//           else if (j == this.columns-1){
//             sum += (this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i-1][j]) + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j-1]));
//           }
//           else if (i == this.columns-1){
//             sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i-1][j]));
//           }
//           else{
//             for (let x=-1; x<2; x++){
//               for (let y=-1; y<2; y++){
//                 if (this.block_list[i+x][j+y].mine == true){
//
//                   sum += 1;
//                 }
//               }
//             }
//           }
//           blck.value = sum;
//         }
//       }
//     }
//   },


  // if (this.line_ori == "usual"){
  //   line(this.corner_bot_left.x,this.corner_bot_left.y,this.corner_bot_right.x,this.corner_bot_right.y);
  // }


    // if (this.y_pos < (wh-block_size/2)){
    //   for (let i=0; i<block_lst.length; i++){
    //     if (i != val){
    //       if ((block_lst[i].y_pos-this.y_pos)<this.height && (block_lst[i].y_pos-this.y_pos)>0 && Math.abs(block_lst[i].x_pos-this.x_pos)<block_size){
    //         flag = 'dont';
    //         break;
    //       }
    //       else{
    //         continue;
    //       }
    //     }
    //   }
    //
    //   (flag == 'move') ? (this.y_pos += g_force) : (this.y_pos = this.y_pos);
    // }

    // set_numbers: function(){
    // for (let i=0; i<this.rows; i++){
    //   for (let j=0; j<this.columns; j++){
    //     sum = 0;
    //     blck = this.block_list[i][j];
    //     if (blck.mine == false){
    //       if (i == 0 && j == 0){
    //         sum += (this.check_mine(this.block_list[i][j+1])  + this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i+1][j+1]));
    //       }
    //       else if (i == 0 && j == this.columns-1){
    //         sum += (this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j-1]) + this.check_mine(this.block_list[i+1][j]));
    //       }
    //       else if (i == this.rows-1 && j == 0){
    //         sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i-1][j]));
    //       }
    //       else if (i == this.rows-1 && j == this.columns-1){
    //         sum += (this.check_mine(this.block_list[i-1][j])  + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i][j-1]));
    //       }
    //       else if (i == 0){
    //         sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j+1]) + this.check_mine(this.block_list[i+1][j-1]) + this.check_mine(this.block_list[i+1][j]));
    //       }
    //       else if (j == 0){
    //         sum += (this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i-1][j]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i+1][j+1]));
    //       }
    //       else if (j == this.columns-1){
    //         sum += (this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i-1][j]) + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j-1]));
    //       }
    //       else if (i == this.columns-1){
    //         sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i-1][j]));
    //       }
    //       else{
    //         for (let x=-1; x<2; x++){
    //           for (let y=-1; y<2; y++){
    //             if (this.block_list[i+x][j+y].mine == true){
    //
    //               sum += 1;
    //             }
    //           }
    //         }
    //       }
    //       blck.value = sum;
    //     }
    //   }
    // }



    // set_numbers: function(){
    //     for (let i=0; i<this.rows; i++){
    //       for (let j=0; j<this.columns; j++){
    //         sum = 0;
    //         blck = this.block_list[i][j];
    //         if (blck.mine == false){
    //           if (i == 0 && j == 0){
    //             sum += (this.check_mine(this.block_list[i][j+1])  + this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i+1][j+1]));
    //           }
    //           else if (j == 0 && i == this.rows-1){
    //             sum += (this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j-1]) + this.check_mine(this.block_list[i+1][j]));
    //           }
    //           else if (j == this.columns-1 && i == 0){
    //             sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i-1][j]));
    //           }
    //           else if (j == this.columns-1 && i == this.rows-1){
    //             sum += (this.check_mine(this.block_list[i-1][j])  + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i][j-1]));
    //           }
    //           else if (j == 0){
    //             sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j+1]) + this.check_mine(this.block_list[i+1][j-1]) + this.check_mine(this.block_list[i+1][j]));
    //           }
    //           else if (i == 0){
    //             sum += (this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i-1][j]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i+1][j+1]));
    //           }
    //           else if (i == this.rows-1){
    //             sum += (this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i-1][j]) + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j-1]));
    //           }
    //           else if (j == this.columns-1){
    //             sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i-1][j]));
    //           }
    //           else{
    //             for (let x=-1; x<2; x++){
    //               for (let y=-1; y<2; y++){
    //                 if (this.block_list[i+x][j+y].mine == true){
    //
    //                   sum += 1;
    //                 }
    //               }
    //             }
    //           }
    //           blck.value = sum;
    //         }
    //       }
    //     }
    //   },


    // bubble gravity


    // Bubble.prototype.collision = function(){
    //   if ((this.ypos + this.radius) >= bound_box.highy){
    //     this.trajectory.y = -1;
    //   }
    //   else if ((this.ypos - this.start.y) < 1) {
    //     this.trajectory.y = 1;
    //     // this.velocity = start_speed;
    //     // this.ypos = this.start.y+1;
    //   }
    //   else{
    //
    //   }
    // }
    //
    // Bubble.prototype.gravity = function(){
    //   this.ypos += (gravity_value * this.velocity * this.trajectory.y);
    //   this.velocity = ((this.ypos-this.start.y)/(bound_box.highy-this.start.y));
    //   console.log(this.velocity);
    // }


    // bubble clicked

    // Bubble.prototype.clicked = function(){
    //   d = dist(mouseX,mouseY,this.xpos,this.ypos);
    //   if (d<=this.size/2 && this.genesis==false){
    //     this.alive = false;
    //     this.destroy();
    //   }
    // }

    // Bubble.prototype.wired = function(){
    //   val = false;
    //   for (wire of wire_array){
    //     val = false;
    //     dist_x = Math.abs(this.xpos - wire.xpos);
    //     dist_y = Math.abs(this.ypos - wire.ypos);
    //
    //     if (dist_x > (this.radius + wire.width/2)) { continue; };
    //     if (dist_y > (this.radius + wire.height/2)) { continue; };
    //
    //     if ((dist_x < wire.width/2 + this.radius) && (dist_y < wire.height/2)){
    //       val = true;
    //       wire.live = false;
    //       break;
    //     }
    //     if ((dist_y < wire.height/2 + this.radius) && (dist_x < wire.width/2)){
    //       val = true;
    //       wire.live = false;
    //       break;
    //     }
    //
    //     d = dist(this.xpos,this.ypos,wire.xpos,wire.ypos);
    //
    //     if (d < this.radius + dist(wire.xpos,wire.ypos,wire.xpos+wire.width/2,wire.ypos+wire.height/2)){
    //       val = true;
    //       wire.live = false;
    //       break;
    //     }
    //     else{
    //       continue;
    //     }
    //     // dx = dist_x - wire.width/2;
    //     // dy = dist_y - wire.width/2;
    //
    //   }
    //   return val;
    // }

    //     function power_animation(x,y,i,dir){
    //   this.pos = createVector(x,y);
    //   this.show_pos = this.pos.copy();
    //   this.id = map(i, 0, 5, 3, 1);;
    //   this.dir = dir;
    //   this.ang = map(i, 0, 5, 0, 360);
    //   this.size = 5;
    //   this.rad = 100;
    //   this.lifetime = 200;
    // }
    //
    // power_animation.prototype = {
    //   update: function(){
    //     // this.ang += 0.3*(5-this.id+1);
    //     this.ang += 3*(this.id);
    //     angleMode(DEGREES);
    //     this.show_pos.y = this.pos.y + map(sin(this.ang),-1,1,-this.rad/2,this.rad/2);
    //     this.show_pos.x = this.pos.x + map(cos(this.ang),-1,1,-this.rad/2,this.rad/2);
    //   },
    //
    //   show: function(){
    //     circle(this.show_pos.x,this.show_pos.y,this.size);
    //   }
    // }
