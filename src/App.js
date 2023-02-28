import './App.css';

function App() {
    return (
        <body className="App">
            <div className="Title">
                <div className="main">해양 생태계 보호를 실천하는</div>
                <div className="sub">“인생네컷 너울 사진관”</div>
            </div>
            <img className="mainimg" alt="main" src="images/logomain.jpg" />
            <div className="textmain">
                <hr className="line"></hr>
                <div className="reason">창업 동기</div>
                <div className="para">
                    “쓰레기는 사라지지 않는다”라는 말처럼 우리가 발생시킨 쓰레기는<br/>
                    당장 내 눈 앞에서는 사라졌지만 사실상 다른 곳으로 옮겨져서<br/>
                    쓰레기섬이 되거나, 바다에 버려져 환경과 해양 생물들에게 해로운 영향을 주고 있다.<br/>
                    그러한 상황 속에서 “버려지는 쓰레기를 사진관의 소품으로 업사이클링 하여 <br/>
                    환경 보호를 실천하면서, 바쁜 사회 속에서 받은 스트레스를 해소할 수 있는<br/>
                    휴식 공간을 사람들에게 제공해주는 것이 어떠할까?” <br/>
                    하는 생각이 들지 않던가?
                    이처럼 “너울”은 환경보호를 실천하며 사람들에게 휴식 공간을 제공하고자 <br/>
                    사진관 창업을 결심하게 되었다.</div>
            </div>
            <div className="infor">
                <div className="infortext">너울 상세 정보</div>
                <div className="container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </body>
    );
}

export default App;