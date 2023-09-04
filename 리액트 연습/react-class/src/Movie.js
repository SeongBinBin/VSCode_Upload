import React from "react";

// 전개 연산자: 컴포넌트에 한꺼번에 속성 전달하는 경우
function Movie({ id, title, language, release, length, author, production, children }){  // props를 그룹으로 묶어주는 기능
    return(
        <div id={id}>
            <h1>무비 정보</h1>
            <h3>{title}</h3>
            <h3>{language}</h3>
            <h3>{release}</h3>
            <h3>{length}</h3>
            <h3>{author}</h3>
            <h3>{production}</h3>
            {children}
        </div>
    )
}
export default Movie