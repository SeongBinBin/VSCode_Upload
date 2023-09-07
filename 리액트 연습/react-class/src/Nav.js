import Button from './Button';
import './Nav.css'

function Nav(){
    const navigate = (url) => {
        // window.location.href = url
        window.open(url, "_blank")
    }
    return(
        <div className='nav-container'>
            <Button handleClick={() => navigate(`https://www.google.com`)}>구글</Button>
            <Button handleClick={() => navigate(`https://www.naver.com`)}>네이버</Button>
            <Button handleClick={() => navigate(` https://sssssqew.github.io/dictionary/`)}>사전 검색 서비스</Button>
        </div>
    )
}
export default Nav