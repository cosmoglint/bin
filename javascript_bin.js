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
