import styled from 'styled-components'

const SignContainer = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  .img-container{
      height: 100%;
      width: 50%;
      img{
          height: 100%;
          width: 100%;
          object-fit: cover;
      }
  }
  .form-container{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
      text-decoration: none;
      color: hsl(217deg 80% 56%);
    }
    form{
      width: 48%;
      label{
        font-size:11px;
      }
      input{
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        border: 1px solid #1919195c;
        width: 100%;
        height: 38px;
        background: transparent ! important;
        border-radius: 12px;
        padding: 0 15px;
        margin-bottom: 8px;
        outline: none;
      }
      button{
        width: 100%;
        height: 40px;
        color: white;
        background: hsl(217deg 80% 56%);
        border: none;
        border-radius: 11px;
        margin-top: 19px;
        transition: 0.3s all ease;
        &:hover{
          background: transparent;
          border:1px solid hsl(217deg 80% 56%) ;
          color:hsl(217deg 80% 56%);
        }
      }
    }
  }
`
export {SignContainer}