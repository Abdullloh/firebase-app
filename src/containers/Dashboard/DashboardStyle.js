import styled from 'styled-components'

const DashboardStyle= styled.div`
width:20%;
.dashboard{
    background: hsl(220deg 76% 19%) !important;
    height:100%;
     .nav-link{
        color: hsl(219deg 31% 78%) ;
        position:relative;
        font-size: 15px;
        z-index:1;
        display:flex;
        justify-content: center;
        p{
            margin:0;
            width: 80%;
           display: flex;
           i{
            margin-right: 10px;
           }
        }
        &::after{
            content:"";
            position:absolute;
            top:0;
            left:0;
            bottom:0;
            height: 100%;
            color:white;
            width: 0;
            background:hsl(220deg 76% 29%) ! important;
            z-index: -1;
        }
        &::before{
            content:"";
            position:absolute;
            top:0;
            left:0;
            height:100%;
            width:0;
            background: white;
        }
        &:hover{
            color:white;
            &::after{
                width:100%;
            }
            &::before{
               width:8px;
            }
        }
    }
    .active{
        color:white;
      &::after{
          width:100%;
      }
      &::before{
        width:8px;
            }
    }
}
 
`
export {DashboardStyle}