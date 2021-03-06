import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50vh;
    height: auto;

    background-color: #FFFFFF;
    color: #3C3939;

    margin: 2em 0em;
    padding: 2.5em 1.5em;

    box-shadow: 0px 0px 4px 1px #BFBFBF;
    
    font-family: "Manrope";
    font-size: 1em;

    .container-form{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form{
        width: 80%;
    }
    
    .divInput{

        display: flex;
        flex-direction: column;
        justify-content: center;

        margin: 1.5em 0em;

        input{
            width: 100%;
            height: 2.5em;

            font: 400 1em "Roboto";
            color: #615858;
            
            border-radius: 5px;
            border: 1px solid rgba(168, 168, 168, 1);

            padding: 0em .5em;
        }
        span{
            margin-bottom: 0.5em;
            
            font: 400 1.2em Roboto;
        }
        textarea{
            height: 32rem;
            resize: none;
        }
    }
    
    .add{
        width: 80%;

        align-self:center;

        border: solid 2px black;
        border-radius: 6px;

        background: #000000;
        
        color: white;

        font: 700 1em Roboto;
        
        padding: 0.8em 1.5em;
        cursor: pointer;

        &:hover{
            transition: 0.3s;
            background:white;
            
            color: #000000;
        }
    }

    a{
        cursor: pointer;
        align-self: center;
        background: #3C3939;
        border-radius: 15px;
        border: solid 2px;
        color: white;
        padding: 0.5em 2em;
        &:hover{
            background: white;
            color:#3C3939;
            transition: 0.4s;
        }
    }
    
`



export default Container