@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Montserrat" , sans-serif;
}
header{
    position:relative;

}
/* nav */
.nav-header{
    width: 100%;
    height: 5vw;
    display: flex;
    align-items: center;
    position: fixed;
    top:0;
    background-color: white;
    z-index: 10;
}
.burguer{
    display: none;
}
.nav-header h1{
   margin-left: 6.53vw; 
}
.home{  
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    position: absolute;
    right: 4.4vw;
}
li{
    width: 8vw;
    font-size: 1rem;
    text-align: center;
 
 }
 li:hover{
     cursor:pointer;
     font-weight: bold;
 }
/* img orange */
 .orange{
     width: 100%;
 }
.orange-container{
    width: 100%;
    height: auto;
    
}
.orange-mobile{
    display: none;
    width: 100%;

}
.orange-header{
    margin-top: 5vw;
}
.mid-phrase{
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 44%;
    color:white;
    left: 7.291vw;

}
.mid-phrase h2{
    font-size: 4.0625vw;
    font-weight: 800;
}
.mid-phrase h3{
    font-size: 1.82291666667vw;
    font-weight:300;
}
/* main */
main{
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    padding: 66px 0 32px;
}

main img{
    width: 398px; 
    margin-bottom: 1.58%;
    margin-bottom: 1.3vw;
    margin-right: 1.3vw;
    
} 
/* footer */
footer{
    display: flex;
    flex-wrap: wrap; 
    align-items: center;
    padding: 2.5vw 6.53vw 1vw 6.53vw;
    background-color: silver;
    position: relative;
}

    


.icons{
    
    width: 20.32vw;
    display: flex;
    justify-content:space-between;
}
.copy{
    display: flex;
    height: 3.46vw;
    font-weight: 300;
    font-size: 1.55rem ;
    margin-left: 8.4vw;
    margin-top: 1.50vw;
    
}
.texts {
    margin-left: 2.5vw;
    font-size: max(0.5rem, 1vw);
   
}
footer button{
    border: none;
    width: 68px;
    height: 25px;
    display: none;
    position: absolute;
    top: 19.8vw;
    right: 7.5vw;
    
}

@media (max-width: 375px){
    .burguer{
        background-color: black;
        border: none;
        display: flex;
        width: 29.6vw;
        justify-content: center;

        
    }
    .home{
        display: none;
    }
    .orange-mobile{
        width: 100%;
        display: flex;
    }
    .orange{
        display: none;
    }
    
    main{
        padding-right: 10%;
        padding-left: 10%;
    }
    
    main img{
        width:100%;
    }

    footer{
        width: 100%;
        height: 35vw;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        flex-wrap: initial;
    }
    .icons{
        width: 100%;
        display: flex;
        justify-content:space-evenly;
        background-color:#7FDBD4;
        padding-top: 2.4vw;
        padding-bottom: 2.4vw;
    }
    .icons img{
        height: 6.13vw;
    }
    .copy{
        margin-left:0;
        margin-top: 0;
        font-size: 1rem;
    }
    .texts{
        margin-left:0;
        margin-top: 1.25vw;
        width: 50%;
        
    }
    footer button{
        border: none;
        width: 68px;
        height: 25px;
        display: flex;
        background-color: #333333;
        /* justify-content: center
        align-items:center; */
        padding-top: 3px;
        
    }
    footer button a{
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #707070;
    }

    .mid-phrase{
        bottom: 10%;
    }

    .mid-phrase h2{
        font-size: 2.7rem;
    }
    .mid-phrase h3{
        font-size: 1.1rem;
        margin-top: 3%;
    }
      
}