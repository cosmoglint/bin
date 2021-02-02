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


    function rotate_anim(x,y,i){
      this.pos = createVector(x,y);
      // this.id = i;
      this.id = map(i, 0, 5, 3, 1);
      this.ang = i;
      this.size = 5;
      this.rad = 100;
      this.lifetime = 200;
    }

    // rotate_anim.prototype.update = function(){
    //   this.ang += 0.025 * (this.id + 1);
    //   this.lifetime--;
    // }

    // rotate_anim.prototype.update = function(){
    //   // this.rad += 1;
    //   this.ang += 0.025*this.id;
    //   this.lifetime--;
    // }
    //
    // rotate_anim.prototype.show = function(){
    //   circle(this.pos.x + cos(this.ang) * this.rad, this.pos.y + sin(this.ang) * this.rad, this.size);
    // }
    //
    //
    // function rotor_animation(x,y,i,dir){
    //   this.alive = true;
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
    // rotor_animation.prototype = {
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

    // anim_pos = anim_array.indexOf(anim);




        // console.log((this.parent.pos.x,this.parent.pos.y,this.pos.x,this.pos.y));
        // console.log(this.step);
        // // this.amount = this.step * (this.max_lifetime-this.lifetime);

  // this.step = dist(this.parent.pos.x,this.parent.pos.y,this.pos.x,this.pos.y) / 50000;
  // // this.step = 0.01;




      // //
      // // para.innerText = "This worked bruv";
      // // para.id = "joke";
      // // parent_div.appendChild(para);
      //
      //
      //
      //       // console.log("hiya there");
      //       // logger.innerText = "duh";
      //
      //       chrome.tabs.getSelected(function(tab){
      //         // console.log(tab);
      //         alert(tab.id);
      //       });
      //       // logger();
      //       // alert("this works?");



      // chrome.runtime.onInstalled.addListener(function() {
      //   chrome.storage.sync.set({color: '#3aa757'}, function() {
      //     console.log('The color is green.');
      //   });
      //   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      //     chrome.declarativeContent.onpageChanged.addRules([{
      //       conditions: [new chrome.declarativeContent.PageStateMatcher({
      //         pageUrl: {hostEquals: 'developer.chrome.com'},
      //       })
      //       ],
      //           actions: [new chrome.declarativeContent.ShowPageAction()]
      //     }]);
      //   });
      // });

      // function possibleMoves(piece){
      //   let possible_moves_list = [];
      //   if (piece === 'wki' || piece === 'bki'){
      //     for (let i=-1; i<=1; i++){
      //       for (let j=-1; j<=1; j++){
      //         if (i===0 && j===0){
      //           continue;
      //         }
      //         possible_moves_list.push([i,j]);
      //       }
      //     }
      //     return (possible_moves_list);
      //   }
      //   if (piece === 'wro' || piece === 'bro'){
      //     for (let i=-7; i<=7; i++){
      //       if (i===0){
      //         continue;
      //       }
      //       possible_moves_list.push([i,0],[0,i]);
      //     }
      //     return (possible_moves_list);
      //   }
      //   if (piece === 'wbi' || piece === 'bbi'){
      //     for (let i=-7; i<=7; i++){
      //       if (i===0){
      //         continue;
      //       }
      //       possible_moves_list.push([i,-i],[i,i]);
      //     }
      //     return (possible_moves_list);
      //   }
      // }

      // function validMoves(possible_moves,position){
      //   let valid_moves_list = [];
      //   let cury = position[0]
      //   let curx = position[1]
      //   let x;
      //   let y;
      //   let newx;
      //   let newy;
      //   for (let i=0; i<possible_moves.length; i++){
      //     y = possible_moves[i][0];
      //     x = possible_moves[i][1];
      //     newx = curx + x;
      //     newy = cury + y;
      //     if (newx<0 || newx>7 || newy<0 || newy>7){
      //       continue;
      //     }
      //     valid_moves_list.push([newy,newx]);
      //   }
      //   return valid_moves_list
      // }
      //
      // function move(start,end,piece,board){
      //   let startx,starty;
      //   starty = start[0];
      //   startx = start[1];
      //   let possible_moves_list = possibleMoves(piece);
      //   let valid_moves_list = validMoves(possible_moves_list,[startx,starty]);
      //   console.log(valid_moves_list);
      // }
      //
      //
      // export { move };



      // function pawnMoves(position,piece,board){
      //   let pawn_list = [];
      //   let newx, newy;
      //   let oldx = position[0];
      //   let oldy = position[1];
      //
      //   let tempval;
      //   tempval = ((piece.charAt(0) === 'b') ? 1 : -1 );
      //
      //
      //   // if (oldx+1 = 7){
      //   //   return [];
      //   // }
      //
      //   if (oldx === 7  || oldx === 0){
      //     return [];
      //   }
      //
      //   if (board[oldx+tempval][oldy] === null){
      //     pawn_list.push([oldx+tempval,oldy]);
      //   }
      //
      //   if (tempval>0){
      //     if ((oldx === 1) && board[oldx+(2*tempval)][oldy] === null){
      //       pawn_list.push([oldx+(2*tempval),oldy]);
      //     }
      //
      //     if ((oldy+1 <= 7) && (oldx+1 <= 7) && (board[oldx+1][oldy+1] != null) && (board[oldx+1][oldy+1].charAt(0) === 'w')){
      //       pawn_list.push([oldx+1,oldy+1]);
      //     }
      //     if ((oldy-1 >= 0) && (oldx+1 <= 7) && (board[oldx+1][oldy-1] != null) && (board[oldx+1][oldy-1].charAt(0) === 'w')){
      //       pawn_list.push([oldx+1,oldy-1]);
      //     }
      //   }
      //
      //   if (tempval<0){
      //     if ((oldx === 6) && board[oldx+(2*tempval)][oldy] === null){
      //       pawn_list.push([oldx+(2*tempval),oldy]);
      //     }
      //
      //     if ((oldy+1 <= 7) && (oldx-1 <= 7) && (board[oldx-1][oldy+1] != null) && (board[oldx-1][oldy+1].charAt(0) === 'b')){
      //       pawn_list.push([oldx-1,oldy+1]);
      //     }
      //     if ((oldy-1 >= 0) && (oldx-1 <= 7) && (board[oldx-1][oldy-1] != null) && (board[oldx-1][oldy-1].charAt(0) === 'b')){
      //       pawn_list.push([oldx-1,oldy-1]);
      //     }
      //   }
      //
      //
      //
      //
      //   // else{
      //   //   // if (oldx-1 < 0){
      //   //   //   return [];
      //   //   // }
      //   //   if (board[oldx-1][oldy] === null){
      //   //     pawn_list.push([oldx-1,oldy]);
      //   //   }
      //   // }
      //   //
      //   // if ((piece.charAt(0) === 'b' && oldx === 1) && (board[oldx+1][oldy] === null)){
      //   //   pawn_list.push([oldx+2,oldy])
      //   // }
      //   // if (piece.charAt(0) === 'w' && oldx === 6){
      //   //
      //   // }
      //
      //   return (pawn_list);
      // }




    //   function rookhMoves(position,piece,board){
    //   let rookh_list = [];
    //   let newx, newy;
    //   let oldx = position[0];
    //   let oldy = position[1];
    //
    //   let top_branch = true;
    //   let bottom_branch = true;
    //   let left_branch = true;
    //   let right_branch = true;
    //
    //   let friend = piece.charAt(0);
    //   let enemy = (friend === 'b') ? 'w' : 'b';
    //
    //
    //   for (let i=1; i<=7; i++){
    //     if (oldx+i <= 7 && bottom_branch){
    //        if (board[oldx+i][oldy] === null){
    //          rookh_list.push([oldx+i,oldy]);
    //          continue
    //        }
    //        if (board[oldx+i][oldy].charAt(0) === enemy){
    //          rookh_list.push([oldx+i,oldy]);
    //          bottom_branch = false;
    //          continue
    //        }
    //        if (board[oldx+i][oldy].charAt(0) === friend){
    //          bottom_branch = false;
    //          continue
    //        }
    //     }
    //     if (oldx-i >= 0 && top_branch){
    //       if (board[oldx-i][oldy] === null){
    //         rookh_list.push([oldx-i,oldy]);
    //         continue
    //       }
    //       if (board[oldx-i][oldy].charAt(0) === enemy){
    //         rookh_list.push([oldx-i,oldy]);
    //         top_branch = false;
    //         continue
    //       }
    //       if (board[oldx-i][oldy].charAt(0) === enemy){
    //         top_branch = false;
    //         continue
    //       }
    //     }
    //     if (oldy+i <= 7 && right_branch){
    //       if (board[oldx][oldy+i] === null){
    //         rookh_list.push([oldx-i,oldy]);
    //         continue
    //       }
    //       if (board[oldx][oldy+i].charAt(0) === enemy){
    //         rookh_list.push([oldx,oldy+i]);
    //         right_branch = false;
    //         continue
    //       }
    //       if (board[oldx][oldy+i].charAt(0) === enemy){
    //         right_branch = false;
    //         continue
    //       }
    //     }
    //     if (oldy-i >= 0 && left_branch){
    //       if (board[oldx][oldy-i] === null){
    //         rookh_list.push([oldx-i,oldy]);
    //         continue
    //       }
    //       if (board[oldx][oldy-i].charAt(0) === enemy){
    //         rookh_list.push([oldx,oldy-i]);
    //         left_branch = false;
    //         continue
    //       }
    //       if (board[oldx][oldy-i].charAt(0) === enemy){
    //         left_branch = false;
    //         continue
    //       }
    //     }
    //   }
    //   return (rookh_list);
    // }
