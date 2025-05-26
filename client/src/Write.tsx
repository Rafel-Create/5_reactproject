import {Component} from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
//react에서 api와 통신할 때 사용하는 모듈 axios
import Axios from "axios"; //이런 선택사항들을 미들웨어라고 한다.
//write라는 페이지는 쓰기 페이지여서 이벤트가 발생한다 1)글을 쓴다 2)성공 또는 실패

//상태 초기화를 해줌
// state = {                                             //이부분이 다른 부분과 연동이 되지 않을 땐 state에 빨간줄 에러 표기됨
//     isModifyMode : false, //수정모드는 허용하지 않음
// title:"", //타이틀 비우고
// content:"", //내용 비우고
// }

//write를 실행하는 함수작성  (기존에 있던 것을 리턴 시키는 게 get    get방식으로 주소창에 쓰면 쓰는 내용이 다 보임. 그래서 안보이게 보안을 위해 post 방식을 써줌)
//쓰는 명령어를 줄 땐 일반적으로 post 사용
// write = () => {
//     Axios.post(http://)
// }

class Write extends Component{
    render(){
        return(
            <>
<Container>
    <Row>
        <Col>
        <Form>
    <Form.Group className="mb-3">
<Form.Label>제목</Form.Label>
<Form.Control
type="text" 
name="title"
placeholder="제목을 입력하세요"
/>
    </Form.Group>
    </Form >
    <Form.Group className="my-3">
<Form.Label>내용</Form.Label>
<Form.Control as="textarea" placeholder="내용을 입력하세요"></Form.Control>
    </Form.Group>

        </Col>
    </Row>
</Container>            
            </>
           
        )
    }
}

export default Write;
