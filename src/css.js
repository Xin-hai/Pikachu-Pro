const string = `
.skin *{
    box-sizing: border-box;
    margin: 0;
    padding: 0
}

.skin *:before {
    box-sizing: border-box
}

.skin *:after {
    box-sizing: border-box
}

.skin {
    background: #ffe600;
    min-height: 50vh;
    position: relative;

}

.nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 5;
}

@keyframes wave {

    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(6deg);
    }
    66% {
        transform: rotate(-6deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.nose:hover{
    transform-origin: center bottom;
    /* 以nose最下为基准*/
    animation: wave 300ms infinite linear;
}


.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
}

.eye {
    border: 2px solid #2e2e2e;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    content: '';
    display: block;
    border: 3px solid #000;
    width: 28px;
    height: 28px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 6px;
    top: 3px;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {

    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 170px;

}

.mouth .up-mouth {
    position: relative;
    top: -10px;
    z-index: 2;
}

.mouth .up-mouth .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    position: absolute;
    background: #ffe600;
}

.mouth .up-mouth .left-lip {

    border-radius: 0 0 0 50px;
    border-right-color: transparent;
    transform: rotate(-15deg);
    left: 50%;
    margin-left: -48%;
}

.mouth .up-mouth .right-lip {
    border-radius: 0 0 50px 0;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(15deg);
    right: 50%;
    margin-right: -48%;
}


.mouth .down-mouth {
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}

.mouth .down-mouth .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}

.mouth .down-mouth .yuan1 .yuan2 {

    width: 200px;
    height: 300px;
    position: absolute;
    background: #ff485f;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}

.face {
    position: absolute;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    left: 50%;
    margin-left: -44px;
    top: 200px;
    z-index: 3;
    background: #ff0000;

}

.face.left {
    transform: translateX(-180px);
    border-radius: 50%;
}

.face.right {
    transform: translateX(180px);
    border-radius: 50%;
}
`
export default  string