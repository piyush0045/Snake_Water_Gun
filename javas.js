let r = Math.random();
        let a1 = 0;
        let b1 = 3;
        let ra = a1 + (b1-a1)*Math.random();
        ra=Math.ceil(ra);
        let cp=" ";
       if(ra==1){
        cp="Snake";
       }
       else if(ra==2){
        cp="Water";
       }
       else if(ra==3){
        cp="Gun";
       }
       else{
        cp="Error";
       }
       let hm=prompt("Enter Your Choice Snake / Water / Gun");
       document.getElementById('hii').innerHTML=(`${cp} Vs ${hm}`);
       let win=" ";
       if(cp==hm){
          win="MATCH TIE";
       }
       else if(cp=="Snake" && hm=="Water"){
        win="You Lost";
       }
       else if(cp=="Snake" && hm=="Gun"){
        win="You Won";
       }
       else if(cp=="Water" && hm=="Snake"){
        win="You Won";
       }
       else if(cp=="Water" && hm=="Gun"){
        win="You Lost";
       }
       else if(cp=="Gun" && hm=="Snake"){
        win="You Lost";
       }
       else if(cp=="Gun" && hm=="Water"){
        win="You Won";
       }
       else{
        win="Error";
       }
       document.getElementById('win').innerHTML=(`${win}`);